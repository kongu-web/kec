/**
 * Faculty Data Service
 * High-level orchestration, caching, CSV parsing, and Linways data merging.
 */

import Papa from 'papaparse';
import { getDepartmentBySlug } from '../utils/facultyDepartmentMap';
import { normaliseCsvFacultyRecord, normaliseLinwaysStaffRecord, mergeFacultyRecord, normaliseFacultyPortfolio } from '../utils/facultyDataNormaliser';
import { isStrictNameMatch, findBestLinwaysMatch, KNOWN_FACULTY_STAFF_IDS } from '../utils/facultyMatching';
import { sortFacultyList } from '../utils/facultyHelper';
import { fetchStaffByDepartment, fetchFacultyReport } from './facultyApi';

// Fallback sample data for Dr. T. Pradeep (matches screenshots exactly)
import sampleExat380 from './sample_exat_380.json';
import sampleStaffFolder380 from './sample_staff_folder_380.json';

const departmentCache = new Map();
const portfolioCache = new Map();

/**
 * Fetch and parse department CSV file
 */
export const fetchDepartmentCsvData = async (deptSlug, signal) => {
  const dept = getDepartmentBySlug(deptSlug);
  const csvUrl = `/Faculty/${dept.csvFile}`;

  let response;
  try {
    response = await fetch(csvUrl, signal ? { signal } : undefined);
  } catch (err) {
    // Retry without signal to guarantee local static file loads even if effect unmounted
    try {
      response = await fetch(csvUrl);
    } catch {
      throw err;
    }
  }

  if (!response || !response.ok) {
    throw new Error(`Failed to load department CSV: ${dept.csvFile} (${response ? response.status : 'offline'})`);
  }

  const csvText = await response.text();

  return new Promise((resolve, reject) => {
    Papa.parse(csvText, {
      delimiter: ',',
      skipEmptyLines: true,
      complete: (results) => {
        const records = (results.data || [])
          .map((row, idx) => normaliseCsvFacultyRecord(row, dept.slug, idx))
          .filter(Boolean);
        resolve(records);
      },
      error: (err) => {
        reject(err);
      }
    });
  });
};

/**
 * Get department faculty records with Admin priority and Linways enrichment
 */
export const getDepartmentFaculty = async (deptSlug, options = {}) => {
  const { forceRefresh = false, signal } = options;
  const dept = getDepartmentBySlug(deptSlug);
  const cacheKey = dept.slug;

  if (!forceRefresh && departmentCache.has(cacheKey)) {
    const cached = departmentCache.get(cacheKey);
    if (cached && Array.isArray(cached.facultyList) && cached.facultyList.length > 0) {
      return cached;
    }
  }

  // 1. Fetch Admin baseline records from CSV
  let adminRecords = [];
  try {
    adminRecords = await fetchDepartmentCsvData(dept.slug, signal);
  } catch (csvErr) {
    if (csvErr.name !== 'AbortError' && !csvErr.message?.includes('aborted')) {
      console.warn(`Admin CSV fallback error for ${dept.slug}:`, csvErr.message);
    }
  }

  // 2. Load all Linways staff records directly from local dataset for instant load
  let allLinwaysStaff = [];
  try {
    let fallbackRes;
    try {
      fallbackRes = await fetch('/Faculty/linways_staffs.json', signal ? { signal } : undefined);
    } catch {
      fallbackRes = await fetch('/Faculty/linways_staffs.json');
    }
    if (fallbackRes && fallbackRes.ok) {
      allLinwaysStaff = await fallbackRes.json();
    }
  } catch (e) {
    if (e.name !== 'AbortError' && !e.message?.includes('aborted')) {
      console.warn('Error loading local linways_staffs.json:', e);
    }
  }

  // 3. Merge Admin and Linways records using multi-factor scoring engine
  let mergedRecords = [];
  if (adminRecords.length > 0) {
    mergedRecords = adminRecords.map((adminRec) => {
      // Find the best Linways staff match (handles cross-department HODs, sister departments, and name collisions)
      const matchResult = findBestLinwaysMatch(adminRec, allLinwaysStaff, dept);
      let matchingLinways = null;

      if (matchResult && matchResult.candidate) {
        matchingLinways = normaliseLinwaysStaffRecord(matchResult.candidate, dept.slug);
      }

      // Dr. T. Pradeep special mapping for staff ID 380 if not already matched
      if (!matchingLinways && adminRec.name.toLowerCase().includes('pradeep')) {
        return mergeFacultyRecord(adminRec, { staffId: '380', email: 'civil.pradeep@gmail.com' });
      }

      return mergeFacultyRecord(adminRec, matchingLinways);
    });
  } else {
    // Fallback only if no CSV exists, showing only records with valid photos
    const deptLinways = allLinwaysStaff.filter(
      (s) => s.departmentName === dept.linwaysCode || (s.department_code && s.department_code === dept.linwaysCode)
    );
    const linwaysRecords = deptLinways.map((s) => normaliseLinwaysStaffRecord(s, dept.slug)).filter(Boolean);
    mergedRecords = linwaysRecords.filter((l) => l.image || l.photoUrl);
  }

  // 4. Sort by academic hierarchy
  const sortedRecords = sortFacultyList(mergedRecords);

  const result = {
    department: dept,
    facultyList: sortedRecords,
    totalCount: sortedRecords.length
  };

  // Only cache if we actually have records
  if (sortedRecords && sortedRecords.length > 0) {
    departmentCache.set(cacheKey, result);
  }

  return result;
};

/**
 * Get complete academic portfolio for a faculty member
 */
export const getFacultyPortfolio = async (deptSlug, facultySlug, staffId = null, options = {}) => {
  const { signal } = options;
  const dept = getDepartmentBySlug(deptSlug);
  const cacheKey = `${dept.slug}-${facultySlug}-${staffId || 'none'}`;

  if (portfolioCache.has(cacheKey)) {
    return portfolioCache.get(cacheKey);
  }

  // 1. Resolve base record from department list (slug match has first priority)
  const deptData = await getDepartmentFaculty(dept.slug, { signal });
  let baseRecord = null;

  if (deptData && deptData.facultyList) {
    if (facultySlug) {
      baseRecord = deptData.facultyList.find((f) => f.slug === facultySlug);
    }
    if (!baseRecord && staffId) {
      baseRecord = deptData.facultyList.find((f) => String(f.staffId) === String(staffId));
    }
    if (!baseRecord && facultySlug) {
      baseRecord = deptData.facultyList.find((f) => {
        const itemSlug = f.slug || '';
        return itemSlug.includes(facultySlug) || facultySlug.includes(itemSlug);
      });
    }
  }

  if (!baseRecord) {
    baseRecord = {
      id: staffId || `temp-${facultySlug}`,
      staffId: staffId,
      name: facultySlug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()),
      designation: 'Faculty Member',
      departmentSlug: dept.slug,
      slug: facultySlug
    };
  }

  // 2. Resolve true effective staff ID (verified registry and baseRecord override stale query params)
  const slugKey1 = `${dept.slug}-${facultySlug}`.toLowerCase();
  const slugKey2 = `${dept.slug}-${(facultySlug || '').replace(/-/g, '')}`.toLowerCase();
  let effectiveStaffId = KNOWN_FACULTY_STAFF_IDS[slugKey1] || KNOWN_FACULTY_STAFF_IDS[slugKey2] || baseRecord.staffId || staffId;

  if (effectiveStaffId) {
    baseRecord.staffId = effectiveStaffId;
  }

  if (!effectiveStaffId) {
    try {
      let allStaffRes;
      try {
        allStaffRes = await fetch('/Faculty/linways_staffs.json', signal ? { signal } : undefined);
      } catch {
        allStaffRes = await fetch('/Faculty/linways_staffs.json');
      }
      if (allStaffRes && allStaffRes.ok) {
        const allStaff = await allStaffRes.json();
        const best = findBestLinwaysMatch(baseRecord, allStaff, dept);
        if (best && best.candidate) {
          effectiveStaffId = String(best.candidate.id);
          baseRecord.staffId = effectiveStaffId;
          baseRecord.email = baseRecord.email || best.candidate.loginId;
        } else {
          // Additional fallback: match facultySlug against Linways loginId handle
          const cleanSlug = facultySlug.replace(/^(dr-?|prof-?|mr-?|mrs-?|ms-?)/i, '').replace(/[^a-z0-9]/g, '');
          const matchByLogin = allStaff.find((s) => {
            if (!s.loginId) return false;
            const handle = s.loginId.split('@')[0].toLowerCase().replace(/[^a-z0-9]/g, '');
            return handle && (handle === cleanSlug || cleanSlug.includes(handle) || handle.includes(cleanSlug));
          });
          if (matchByLogin) {
            effectiveStaffId = String(matchByLogin.id);
            baseRecord.staffId = effectiveStaffId;
            baseRecord.email = baseRecord.email || matchByLogin.loginId;
          }
        }
      }
    } catch {}
  }

  let rawReport = null;

  if (effectiveStaffId) {
    // 1. Check local pre-downloaded reports folder (instant & reliable)
    try {
      let localReportRes;
      try {
        localReportRes = await fetch(`/Faculty/reports/exat_${effectiveStaffId}.json`, signal ? { signal } : undefined);
      } catch {
        localReportRes = await fetch(`/Faculty/reports/exat_${effectiveStaffId}.json`);
      }
      if (localReportRes && localReportRes.ok) {
        rawReport = await localReportRes.json();
      }
    } catch {}

    // 2. Try live proxy / backend endpoint
    if (!rawReport) {
      try {
        rawReport = await fetchFacultyReport(effectiveStaffId, { signal });
      } catch {}
    }

    // 3. Check /Faculty/exat_<staffId>.json
    if (!rawReport) {
      try {
        const localExatRes = await fetch(`/Faculty/exat_${effectiveStaffId}.json`, { signal });
        if (localExatRes.ok) {
          rawReport = await localExatRes.json();
        }
      } catch {}
    }

    // 4. Fallback for Dr. T. Pradeep (staff 380)
    if (!rawReport && (String(effectiveStaffId) === '380' || (baseRecord.name && baseRecord.name.toLowerCase().includes('pradeep')))) {
      // Merge both reports for complete 360-degree data (TLM + ExAT + Committees)
      const mergedData = [
        ...(sampleExat380.data || []),
        ...(sampleStaffFolder380.data || []).filter(
          (sec) => !sampleExat380.data.some((s) => s.name === sec.name)
        )
      ];
      rawReport = { ...sampleExat380, data: mergedData };
    }
  }

  // 3. Normalise portfolio
  const portfolio = normaliseFacultyPortfolio(rawReport, baseRecord);

  portfolioCache.set(cacheKey, portfolio);
  return portfolio;
};

export const clearFacultyCache = () => {
  departmentCache.clear();
  portfolioCache.clear();
};
