/**
 * Faculty Display & Sorting Helpers
 */

/**
 * Designation hierarchy rankings (lower number = higher academic rank)
 */
export const DESIGNATION_RANKS = {
  HOD: 1,
  SENIOR_PROFESSOR: 2,
  PROFESSOR: 3,
  ASSOCIATE_PROFESSOR: 4,
  ASSISTANT_PROFESSOR_SLG: 5,
  ASSISTANT_PROFESSOR_SRG: 6,
  ASSISTANT_PROFESSOR: 7,
  LECTURER: 8,
  OTHER: 99
};

/**
 * Determine ranking score from designation string
 */
export const getDesignationRank = (designation) => {
  if (!designation || typeof designation !== 'string') {
    return DESIGNATION_RANKS.OTHER;
  }

  const norm = designation.toUpperCase().replace(/\s+/g, ' ').trim();

  // 1. Head of Department / HOD / Head
  if (
    norm.includes('HEAD OF THE DEPARTMENT') ||
    norm.includes('& HEAD') ||
    norm.includes('AND HEAD') ||
    norm.includes('HOD') ||
    norm.includes('PRINCIPAL') ||
    norm.includes('DEAN') ||
    norm.includes('COE')
  ) {
    return DESIGNATION_RANKS.HOD;
  }

  // 2. Senior Professor
  if (norm.includes('SENIOR PROFESSOR') || norm.includes('SR. PROFESSOR')) {
    return DESIGNATION_RANKS.SENIOR_PROFESSOR;
  }

  // 4. Associate Professor (Check before Professor to avoid substring match)
  if (norm.includes('ASSOCIATE PROFESSOR') || norm.includes('ASSOC. PROFESSOR') || norm.includes('ASSOC PROF')) {
    return DESIGNATION_RANKS.ASSOCIATE_PROFESSOR;
  }

  // 5. Assistant Professor (SLG)
  if (
    norm.includes('ASSISTANT PROFESSOR (SLG)') ||
    norm.includes('ASSISTANT PROFESSOR[SLG]') ||
    norm.includes('ASST. PROFESSOR (SLG)') ||
    norm.includes('ASST PROFESSOR (SLG)') ||
    norm.includes('ASST. PROF (SLG)') ||
    norm.includes('SLG')
  ) {
    return DESIGNATION_RANKS.ASSISTANT_PROFESSOR_SLG;
  }

  // 6. Assistant Professor (SRG)
  if (
    norm.includes('ASSISTANT PROFESSOR (SRG)') ||
    norm.includes('ASSISTANT PROFESSOR[SRG]') ||
    norm.includes('ASST. PROFESSOR (SRG)') ||
    norm.includes('ASST PROFESSOR (SRG)') ||
    norm.includes('ASST. PROF (SRG)') ||
    norm.includes('SRG')
  ) {
    return DESIGNATION_RANKS.ASSISTANT_PROFESSOR_SRG;
  }

  // 7. Assistant Professor (Regular)
  if (
    norm.includes('ASSISTANT PROFESSOR') ||
    norm.includes('ASST. PROFESSOR') ||
    norm.includes('ASST PROFESSOR') ||
    norm.includes('ASST. PROF') ||
    norm.includes('ASST PROF')
  ) {
    return DESIGNATION_RANKS.ASSISTANT_PROFESSOR;
  }

  // 3. Professor (Full)
  if (norm.includes('PROFESSOR') || norm.includes('PROF.')) {
    return DESIGNATION_RANKS.PROFESSOR;
  }

  // 8. Lecturer
  if (norm.includes('LECTURER')) {
    return DESIGNATION_RANKS.LECTURER;
  }

  return DESIGNATION_RANKS.OTHER;
};

/**
 * Format faculty name properly
 * DR. N. SHANTHI -> Dr. N. Shanthi
 * S.MALLIGA -> Dr. S. Malliga (or preserves original Dr status)
 */
export const formatFacultyName = (rawName) => {
  if (!rawName || typeof rawName !== 'string') return '';

  let name = rawName.trim();

  // Detect Dr / Prof title
  let hasDr = false;
  let hasProf = false;

  if (/^(dr\.?|dr\b)/i.test(name)) {
    hasDr = true;
    name = name.replace(/^(dr\.?|dr\b)\s*/i, '');
  } else if (/^(prof\.?|prof\b)/i.test(name)) {
    hasProf = true;
    name = name.replace(/^(prof\.?|prof\b)\s*/i, '');
  }

  // If words are in ALL-CAPS or all-lowercase, convert to title case
  const words = name.split(/\s+/).filter(Boolean);
  const formattedWords = words.map((w) => {
    // If it's a short initial like "S." or "N" or "P.S."
    if (/^[A-Za-z](\.[A-Za-z])*\.?$/.test(w)) {
      return w.toUpperCase();
    }
    // If it's a compound like "PCD.Kalaivaani"
    if (w.includes('.')) {
      const parts = w.split('.');
      return parts
        .map((p) => {
          if (!p) return '';
          if (p.length <= 3 && p === p.toUpperCase()) return p.toUpperCase();
          return p.charAt(0).toUpperCase() + p.slice(1).toLowerCase();
        })
        .join('.');
    }
    // Normal word
    return w.charAt(0).toUpperCase() + w.slice(1).toLowerCase();
  });

  let result = formattedWords.join(' ');
  if (hasDr) {
    result = `Dr. ${result}`;
  } else if (hasProf) {
    result = `Prof. ${result}`;
  }

  return result;
};

/**
 * Standardise designation display text
 */
export const formatDesignation = (rawDesig) => {
  if (!rawDesig || typeof rawDesig !== 'string') return '';
  let des = rawDesig.trim();

  // Normalise bracket variants
  des = des.replace(/\[SLG\]/gi, '(SLG)');
  des = des.replace(/\[SRG\]/gi, '(SRG)');
  des = des.replace(/\bAsst\.?\s*Prof(essor)?\b/gi, 'Assistant Professor');
  des = des.replace(/\bAssoc\.?\s*Prof(essor)?\b/gi, 'Associate Professor');
  des = des.replace(/\bSr\.?\s*Prof(essor)?\b/gi, 'Senior Professor');
  des = des.replace(/\bHOD\b/g, 'Head of the Department');

  return des;
};

/**
 * Generate a clean URL slug for a faculty member
 * e.g., "Dr. N. Shanthi" -> "dr-n-shanthi"
 */
export const generateFacultySlug = (name, staffId) => {
  if (!name) return staffId ? `staff-${staffId}` : 'faculty';

  const cleaned = name
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');

  return cleaned || (staffId ? `staff-${staffId}` : 'faculty');
};

/**
 * Sort faculty list according to academic hierarchy while preserving admin overrides
 */
export const sortFacultyList = (facultyList = [], preserveAdminOrder = false) => {
  if (!Array.isArray(facultyList)) return [];

  // If preserveAdminOrder is explicitly requested and list has adminOrder values
  const hasExplicitAdminOrder = facultyList.some((f) => typeof f.adminOrder === 'number');

  return [...facultyList].sort((a, b) => {
    if (hasExplicitAdminOrder) {
      const orderA = typeof a.adminOrder === 'number' ? a.adminOrder : 999;
      const orderB = typeof b.adminOrder === 'number' ? b.adminOrder : 999;
      if (orderA !== orderB) return orderA - orderB;
    }

    const rankA = a.designationRank || getDesignationRank(a.designation);
    const rankB = b.designationRank || getDesignationRank(b.designation);

    if (rankA !== rankB) {
      return rankA - rankB;
    }

    // Secondary sort alphabetically by name
    const nameA = a.name || '';
    const nameB = b.name || '';
    return nameA.localeCompare(nameB);
  });
};

/**
 * Resolve faculty portrait URL safely
 */
export const resolveFacultyImageUrl = (deptSlug, imageName, adminPhotoUrl) => {
  if (adminPhotoUrl && typeof adminPhotoUrl === 'string' && adminPhotoUrl.startsWith('http')) {
    return adminPhotoUrl;
  }

  if (!imageName) return null;

  // If imageName is already a full path
  if (imageName.startsWith('http') || imageName.startsWith('/')) {
    return imageName;
  }

  // Construct local asset path relative to public or src/assets
  // Webpack dynamic requires or direct public fallback
  const folder = deptSlug || 'cse';
  return `/assets/images/faculty_images/${folder}/${imageName}`;
};

/**
 * Default SVG Academic Profile Avatar as Data URI (lightweight, zero network dependency)
 */
export const DEFAULT_FACULTY_AVATAR =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#162456" />
          <stop offset="100%" stop-color="#1d4ed8" />
        </linearGradient>
      </defs>
      <rect width="200" height="200" fill="url(#bg)" rx="16"/>
      <circle cx="100" cy="78" r="38" fill="#ffffff" opacity="0.9" />
      <path d="M40 170 C40 128, 70 125, 100 125 C130 125, 160 128, 160 170 Z" fill="#ffffff" opacity="0.9" />
    </svg>`
  );
