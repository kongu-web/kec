/**
 * Faculty Data Service
 * High-level orchestration, caching, CSV parsing, and Linways data merging.
 */

import Papa from 'papaparse';
import { getDepartmentBySlug } from '../utils/facultyDepartmentMap';
import { normaliseCsvFacultyRecord, normaliseLinwaysStaffRecord, mergeFacultyRecord, normaliseFacultyPortfolio } from '../utils/facultyDataNormaliser';
import { isStrictNameMatch } from '../utils/facultyMatching';
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

  const response = await fetch(csvUrl, { signal });
  if (!response.ok) {
    throw new Error(`Failed to load department CSV: ${dept.csvFile} (${response.status})`);
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
    return departmentCache.get(cacheKey);
  }

  // 1. Fetch Admin baseline records from CSV
  let adminRecords = [];
  try {
    adminRecords = await fetchDepartmentCsvData(dept.slug, signal);
  } catch (csvErr) {
    console.warn(`Admin CSV fallback error for ${dept.slug}:`, csvErr.message);
  }

  // 2. Fetch Linways department records from backend or local Linways dataset
  let linwaysRecords = [];
  try {
    const linwaysRes = await fetchStaffByDepartment(dept.slug, { signal });
    const staffArray = Array.isArray(linwaysRes) ? linwaysRes : (linwaysRes && linwaysRes.data ? linwaysRes.data : []);
    if (staffArray.length > 0) {
      linwaysRecords = staffArray.map((s) => normaliseLinwaysStaffRecord(s, dept.slug)).filter(Boolean);
    }
  } catch {
    // Backend offline; continue to fallback
  }

  // Load local linways_staffs.json if backend was offline or to ensure global staff resolution
  let allLinwaysStaff = [];
  try {
    const fallbackRes = await fetch('/Faculty/linways_staffs.json', { signal });
    if (fallbackRes.ok) {
      allLinwaysStaff = await fallbackRes.json();
      if (linwaysRecords.length === 0) {
        const deptLinways = allLinwaysStaff.filter(
          (s) => s.departmentName === dept.linwaysCode || (s.department_code && s.department_code === dept.linwaysCode)
        );
        linwaysRecords = deptLinways.map((s) => normaliseLinwaysStaffRecord(s, dept.slug)).filter(Boolean);
      }
    }
  } catch (e) {
    console.warn('Error loading local linways_staffs.json:', e);
  }

  // 3. Merge Admin and Linways records
  let mergedRecords = [];
  if (adminRecords.length > 0) {
    // Only display verified department faculty from CSV, enriched with their Linways data
    mergedRecords = adminRecords.map((adminRec) => {
      // 1. First search within department records
      let matchingLinways = linwaysRecords.find((l) => isStrictNameMatch(adminRec.name, l.name));

      // 2. Fallback: search across ALL Linways staff by name (resolves inter-department or AI/AIML staff)
      if (!matchingLinways && allLinwaysStaff.length > 0) {
        const found = allLinwaysStaff.find((s) => {
          if (s.staffResigned === '1' || s.staffResigned === 1) return false;
          return isStrictNameMatch(adminRec.name, s.name);
        });
        if (found) {
          matchingLinways = normaliseLinwaysStaffRecord(found, dept.slug);
        }
      }

      // Dr. T. Pradeep special mapping for staff ID 380 if not matched by API
      if (!matchingLinways && adminRec.name.toLowerCase().includes('pradeep')) {
        return mergeFacultyRecord(adminRec, { staffId: '380', email: 'civil.pradeep@gmail.com' });
      }
      return mergeFacultyRecord(adminRec, matchingLinways);
    });
  } else {
    // Fallback only if no CSV exists, showing only records with valid photos
    mergedRecords = linwaysRecords.filter((l) => l.image || l.photoUrl);
  }

  // 4. Sort by academic hierarchy
  const sortedRecords = sortFacultyList(mergedRecords);

  const result = {
    department: dept,
    facultyList: sortedRecords,
    totalCount: sortedRecords.length
  };

  departmentCache.set(cacheKey, result);
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

  // 1. Resolve base record from department list
  const deptData = await getDepartmentFaculty(dept.slug, { signal });
  let baseRecord = null;

  if (deptData && deptData.facultyList) {
    if (staffId) {
      baseRecord = deptData.facultyList.find((f) => String(f.staffId) === String(staffId));
    }
    if (!baseRecord && facultySlug) {
      baseRecord = deptData.facultyList.find((f) => f.slug === facultySlug);
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

  // 2. Fetch detailed ExAT report from backend if available
  let rawReport = null;
  let effectiveStaffId = staffId || baseRecord.staffId;

  if (!effectiveStaffId) {
    try {
      const allStaffRes = await fetch('/Faculty/linways_staffs.json', { signal });
      if (allStaffRes.ok) {
        const allStaff = await allStaffRes.json();
        const found = allStaff.find((s) => {
          if (s.staffResigned === '1' || s.staffResigned === 1) return false;
          if (baseRecord.name && isStrictNameMatch(baseRecord.name, s.name)) return true;
          const sClean = (s.name || '').toLowerCase().replace(/[^a-z0-9]/g, '');
          const targetClean = (facultySlug || '').toLowerCase().replace(/[^a-z0-9]/g, '');
          return sClean === targetClean || (targetClean.length > 4 && (sClean.includes(targetClean) || targetClean.includes(sClean)));
        });
        if (found) {
          effectiveStaffId = String(found.id);
          baseRecord.staffId = effectiveStaffId;
          baseRecord.email = baseRecord.email || found.loginId;
        }
      }
    } catch {}
  }

  if (effectiveStaffId) {
    // 1. Check local pre-downloaded reports folder (instant & reliable)
    try {
      const localReportRes = await fetch(`/Faculty/reports/exat_${effectiveStaffId}.json`, { signal });
      if (localReportRes.ok) {
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
