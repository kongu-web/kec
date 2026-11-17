/**
 * Strict Name Matching Engine
 * Accurately pairs Admin CSV faculty records with Linways Staff & ExAT reports.
 * Prevents false positives between similar faculty names.
 */

// Common titles, prefixes, and qualifications to strip during comparison
const PREFIX_REGEX = /^(dr\.?|prof\.?|mr\.?|mrs\.?|ms\.?|er\.?|thiru\.?|tmt\.?)\s*/i;
const SUFFIX_REGEX = /\b(ph\.?d|m\.?e|m\.?tech|m\.?sc|b\.?e|b\.?tech|m\.?phil|b\.?ed|m\.?ed|mba|mca)\b/gi;
const STAFF_ID_SUFFIX_REGEX = /\[[A-Za-z0-9_-]+\]|\([A-Za-z0-9_-]+\)$/;
const TITLE_TOKENS = new Set(['dr', 'prof', 'mr', 'mrs', 'ms', 'er', 'thiru', 'tmt']);

/**
 * Normalise a faculty name for comparison
 * Returns an array of significant name tokens and single-letter initials
 */
export const cleanAndTokeniseName = (rawName) => {
  if (!rawName || typeof rawName !== 'string') {
    return { cleanName: '', tokens: [], initials: [] };
  }

  let name = rawName.trim();

  // Strip known staff ID annotations like (1234) or [CSR012]
  name = name.replace(STAFF_ID_SUFFIX_REGEX, ' ').trim();

  // Strip academic degrees/suffixes
  name = name.replace(SUFFIX_REGEX, ' ').trim();

  // Strip repeated title prefixes
  while (PREFIX_REGEX.test(name)) {
    const prev = name;
    name = name.replace(PREFIX_REGEX, '').trim();
    if (name === prev) break;
  }

  // Remove commas, dots, brackets, hyphens, and normalize multiple whitespace
  // Keep letters and numbers
  const cleaned = name
    .toLowerCase()
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  const rawTokens = cleaned.split(' ').filter(Boolean);

  const tokens = [];
  const initials = [];

  rawTokens.forEach((tok) => {
    if (TITLE_TOKENS.has(tok)) {
      return;
    }
    if (tok.length === 1) {
      initials.push(tok);
    } else {
      tokens.push(tok);
    }
  });

  return { cleanName: cleaned, tokens, initials };
};

/**
 * Strict equality and token-set matching
 * Rules:
 * 1. If either name is empty, return false.
 * 2. If cleaned names match exactly, return true.
 * 3. Primary word tokens (length >= 3) must match with high precision.
 * 4. Initials, if present on both sides, must not conflict.
 * 5. Dissimilar names with shared initials will never match.
 */
export const isStrictNameMatch = (name1, name2) => {
  if (!name1 || !name2) return false;

  const t1 = cleanAndTokeniseName(name1);
  const t2 = cleanAndTokeniseName(name2);

  if (!t1.cleanName || !t2.cleanName) return false;

  // Exact match after basic cleaning
  if (t1.cleanName === t2.cleanName) return true;

  // No significant tokens on either side
  if (t1.tokens.length === 0 || t2.tokens.length === 0) {
    return false;
  }

  // Compounded token matching: e.g. "Vijayachitra" vs "Vijaya Chitra", "Baluprithviraj" vs "Balu Prithvi Raj"
  if (t1.tokens.join('') === t2.tokens.join('')) {
    if (t1.initials.length > 0 && t2.initials.length > 0) {
      const init1 = new Set(t1.initials);
      if (!t2.initials.some((i) => init1.has(i))) return false;
    }
    return true;
  }

  // Compare multi-letter tokens
  const set1 = new Set(t1.tokens);
  const set2 = new Set(t2.tokens);

  // Common tokens between both names
  const intersection = [...set1].filter((x) => set2.has(x));

  // If major tokens don't overlap, it's definitely not a match
  if (intersection.length === 0) {
    return false;
  }

  // Check token compatibility:
  // If all non-initial tokens of the shorter name are in the longer name
  const smallerSet = set1.size <= set2.size ? set1 : set2;
  const largerSet = set1.size <= set2.size ? set2 : set1;

  const allSmallTokensInLarge = [...smallerSet].every((tok) => largerSet.has(tok));

  // Initials check: if both have initials, they must not conflict
  if (t1.initials.length > 0 && t2.initials.length > 0) {
    const init1 = new Set(t1.initials);
    const init2 = new Set(t2.initials);
    const sharedInitials = [...init1].filter((i) => init2.has(i));
    
    // If both have distinct initials and NONE overlap, do not match
    // E.g. "S. Malliga" vs "R. Malliga" -> false!
    if (sharedInitials.length === 0) {
      return false;
    }
  }

  // If one name has initials and the other expanded them (e.g. "Santhi N" vs "Santhi Natarajan")
  // Check if initial matches first letter of an extra token in the other name
  if (t1.initials.length > 0 && t2.tokens.length > t1.tokens.length) {
    const extraTokens = t2.tokens.filter((t) => !set1.has(t));
    const initialMatchesExpansion = t1.initials.some((init) =>
      extraTokens.some((tok) => tok.startsWith(init))
    );
    if (initialMatchesExpansion && allSmallTokensInLarge) {
      return true;
    }
  }

  if (t2.initials.length > 0 && t1.tokens.length > t2.tokens.length) {
    const extraTokens = t1.tokens.filter((t) => !set2.has(t));
    const initialMatchesExpansion = t2.initials.some((init) =>
      extraTokens.some((tok) => tok.startsWith(init))
    );
    if (initialMatchesExpansion && allSmallTokensInLarge) {
      return true;
    }
  }

  // If all significant tokens match and initials do not contradict
  if (allSmallTokensInLarge && smallerSet.size >= 1) {
    // If token counts differ (e.g. "Vignesh Prabhu" vs "Prabhu"),
    // only match if an initial genuinely expands the extra token
    if (smallerSet.size !== largerSet.size) {
      const extraTokens = [...largerSet].filter((tok) => !smallerSet.has(tok));
      const initials = t1.tokens.length < t2.tokens.length ? t1.initials : t2.initials;
      const initialExplainsExtra = initials.some((init) =>
        extraTokens.some((tok) => tok.startsWith(init))
      );
      if (!initialExplainsExtra) {
        return false;
      }
    }

    // If only one token exists on both sides (e.g. "Geetha" and "Geetha M"), require matching initial
    if (smallerSet.size === 1) {
      if (t1.initials.length > 0 && t2.initials.length > 0) {
        const i1 = new Set(t1.initials);
        const hasCommon = t2.initials.some((i) => i1.has(i));
        return hasCommon;
      }
      return true;
    }
    return true;
  }

  return false;
};

/**
 * Find best matching faculty record from a collection
 */
export const findMatchingRecord = (targetName, recordsList, nameKey = 'name') => {
  if (!targetName || !Array.isArray(recordsList) || recordsList.length === 0) {
    return null;
  }

  // 1. Direct strict match
  for (const record of recordsList) {
    const recName = record[nameKey] || record.staffName || record.facultyName || '';
    if (isStrictNameMatch(targetName, recName)) {
      return record;
    }
  }

  return null;
};

/**
 * Allied Department Clusters
 * Identifies sister departments that frequently cross-list faculty or where
 * departments evolved/split (e.g. AIML & AIDS formed from ITR & CSR).
 */
export const ALLIED_DEPT_CLUSTERS = {
  // Computing cluster
  AI: ['AI', 'CSR', 'ITR', 'CTPG', 'CTUG', 'CDR'],
  CSR: ['CSR', 'AI', 'ITR', 'CTPG', 'CTUG', 'CDR'],
  ITR: ['ITR', 'AI', 'CSR', 'CTPG', 'CTUG', 'CDR'],
  CDR: ['CDR', 'AI', 'CSR', 'ITR', 'CTPG', 'CTUG'],
  CTUG: ['CTUG', 'CTPG', 'AI', 'CSR', 'ITR', 'CDR'],
  CTPG: ['CTPG', 'CTUG', 'AI', 'CSR', 'ITR', 'CDR'],
  // Electrical cluster
  ECR: ['ECR', 'EER', 'EIR'],
  EER: ['EER', 'ECR', 'EIR'],
  EIR: ['EIR', 'ECR', 'EER'],
  // Mechanical cluster
  MER: ['MER', 'MTR', 'AUR'],
  MTR: ['MTR', 'MER', 'AUR'],
  AUR: ['AUR', 'MER', 'MTR'],
  // Science & Humanities
  MAR: ['MAR'],
  PHR: ['PHR'],
  CYR: ['CYR'],
  EGR: ['EGR'],
  CER: ['CER'],
  CHR: ['CHR'],
  FTR: ['FTR'],
  MBR: ['MBR'],
  MCA: ['MCA']
};

/**
 * Verified Explicit Staff ID Mapping
 * Guaranteed 100% accurate identification for department heads and faculty members
 * across Linways ERP and ExAT records.
 */
export const KNOWN_FACULTY_STAFF_IDS = {
  // AIML Department
  'aiml-dr-r-r-rajalaxmi': '21',
  'aiml-dr-rr-rajalaxmi': '21',
  'aiml-dr-c-nalini': '430',
  'aiml-dr-cnalini': '430',
  'aiml-dr-t-abirami': '151',
  'aiml-dr-tabirami': '151',
  'aiml-dr-k-sathya': '440',
  'aiml-dr-ksathya': '440',
  'aiml-s-hamsanandhini': '439',
  'aiml-dr-m-mohanasundari': '507',
  'aiml-dr-mmohanasundari': '507',
  'aiml-n-kanimozhi': '309',
  'aiml-s-santhiya': '442',
  'aiml-m-yoga': '453',
  'aiml-m-neelamegan': '456',
  'aiml-s-gopinath': '291',
  'aiml-n-renuka': '459',
  'aiml-v-arun-antony': '479',
  'aiml-a-vanmathi': '483',
  'aiml-s-santhoshkumar': '101050',

  // Civil Department
  'civil-dr-s-balaji': '379',
  'civil-dr-sbalaji': '379',
  'civil-dr-t-pradeep': '380',
  'civil-dr-tpradeep': '380',

  // AIDS Department
  'aids-dr-p-natesan': '431',
  'aids-dr-pnatesan': '431',

  // CSE Department
  'cse-dr-s-malliga': '340',
  'cse-dr-smalliga': '340',

  // EIE Department
  'eie-dr-sjsuji-prasad': '40',
  'eie-dr-s-j-suji-prasad': '40',
  'eie-dr-s-vijayachitra': '202',
  'eie-dr-svijayachitra': '202',

  // Mechanical Department
  'mech-dr-r-rajasekar': '83',
  'mech-dr-rrajasekar': '83',
  'mech-dr-p-selvakumar': '82',
  'mech-dr-pselvakumar': '82',

  // Automobile Department
  'auto-dr-r-parameshwaran': '420',
  'auto-dr-rparameshwaran': '420',

  // ECE Department
  'ece-dr-g-murugesan': '250',
  'ece-dr-gmurugesan': '250',

  // EEE Department
  'eee-dr-n-senthilnathan': '39',
  'eee-dr-nsenthilnathan': '39',

  // IT Department
  'it-dr-s-varadhaganapathy': '148',
  'it-dr-svaradhaganapathy': '148',

  // MTS Department
  'mts-dr-c-jegadheesan': '421',
  'mts-dr-cjegadheesan': '421',

  // CSD Department
  'csd-dr-e-gothai': '325',
  'csd-dr-egothai': '325',

  // CTPG Department
  'ctpg-dr-r-c-suganthe': '341',
  'ctpg-dr-rc-suganthe': '341',

  // CTUG Department
  'ctug-dr-s-kalaiselvi': '293',
  'ctug-dr-skalaiselvi': '293',

  // Food Tech Department
  'foodtech-dr-v-chitra-devi': '169',
  'foodtech-dr-vchitradevi': '169',

  // Chemical Department
  'chemical-dr-k-kannan': '408',
  'chemical-dr-kkannan': '408',

  // Maths Department
  'maths-dr-m-dhavamani': '127',
  'maths-dr-mdhavamani': '127',

  // Physics Department
  'physics-dr-c-rangasami': '48',
  'physics-dr-crangasami': '48',

  // Chemistry Department
  'chemistry-dr-p-n-palanisamy': '395',
  'chemistry-dr-pn-palanisamy': '395',

  // English Department
  'english-dr-j-rajini': '183',
  'english-dr-jrajini': '183',

  // MCA Department
  'mca-dr-a-tamilarasi': '99',
  'mca-dr-atamilarasi': '99',

  // MBA Department
  'mba-dr-p-vidhya-priya': '113',
  'mba-dr-pvidhyapriya': '113'
};

/**
 * Multi-Factor Scoring Engine to pair an Admin CSV record with the best Linways Staff record
 * Eliminates false positives when multiple faculty share identical surnames across departments.
 */
export const scoreFacultyCandidate = (adminRec, candidate, currentDept = {}) => {
  if (!candidate || candidate.staffResigned === '1' || candidate.staffResigned === 1) {
    return -999;
  }

  const candName = candidate.name || candidate.staffName || '';
  if (!isStrictNameMatch(adminRec.name, candName)) {
    return -999;
  }

  let score = 100;
  const adminClean = cleanAndTokeniseName(adminRec.name).cleanName;
  const candClean = cleanAndTokeniseName(candName).cleanName;
  if (adminClean === candClean) {
    score += 50;
  }

  // 1. Department Affinity Score
  const targetLinways = currentDept.linwaysCode;
  const candDept = candidate.departmentName || candidate.department_code || '';
  if (targetLinways && candDept === targetLinways) {
    score += 100;
  } else if (targetLinways && ALLIED_DEPT_CLUSTERS[targetLinways]?.includes(candDept)) {
    score += 40;
  } else if (targetLinways && candDept) {
    // Heavy penalty if candidate belongs to a completely unrelated department (e.g. ECR for AIML)
    score -= 70;
  }

  // 2. Doctorate / Title Consistency
  const adminHasDr = /^(dr\.?|prof\.?)/i.test(adminRec.name) || /ph\.?d/i.test(adminRec.designation || '');
  const candHasDr = /^(dr\.?|prof\.?)/i.test(candName) || candidate.salutation === 'Dr.';
  if (adminHasDr && candHasDr) {
    score += 40;
  } else if (adminHasDr && !candHasDr) {
    // Dr. in CSV must not match an Assistant Professor without Dr.
    score -= 50;
  } else if (!adminHasDr && candHasDr) {
    // Non-doctor in CSV should not match a Doctor from another department
    score -= 30;
  } else if (!adminHasDr && !candHasDr) {
    score += 20;
  }

  // 3. Seniority & Staff Code Check
  const isSeniorAdmin = /head|senior|principal|dean|professor/i.test(adminRec.designation || '');
  const isSeniorCode = /^KEC[0-2]\d{3}/i.test(candidate.code || '');
  const isJuniorCode = /^KEC[3-9]\d{3}/i.test(candidate.code || '');
  if (isSeniorAdmin && isSeniorCode) score += 30;
  if (isSeniorAdmin && isJuniorCode) score -= 30;

  // 4. Email / Login Hint Check
  if (candidate.loginId) {
    const emailLower = candidate.loginId.toLowerCase();
    // Heavy penalty if email clearly denotes an unrelated department
    if (emailLower.includes('.ece@') && targetLinways !== 'ECR') score -= 60;
    if (emailLower.includes('.civil@') && targetLinways !== 'CER') score -= 60;
    if (emailLower.includes('.mech@') && targetLinways !== 'MER') score -= 60;
    if (emailLower.includes('.auto@') && targetLinways !== 'AUR') score -= 60;
    if (emailLower.includes('.mba@') && targetLinways !== 'MBR') score -= 60;
    if (emailLower.includes('.mca@') && targetLinways !== 'MCA') score -= 60;
  }

  // 5. Direct loginId / profile link match (high confidence boost)
  if (candidate.loginId) {
    const handle = candidate.loginId.split('@')[0].toLowerCase().replace(/[^a-z0-9]/g, '');
    const cleanAdminSlug = (adminRec.slug || '').toLowerCase().replace(/[^a-z0-9]/g, '');
    const cleanProfileLink = (adminRec.profileLink || '').toLowerCase().replace(/[^a-z0-9]/g, '');
    if (handle && (cleanProfileLink.includes(handle) || cleanAdminSlug.includes(handle) || handle.includes(cleanAdminSlug))) {
      score += 100;
    }
  }

  return score;
};

/**
 * Find the optimal Linways staff match using explicit overrides and scoring
 */
export const findBestLinwaysMatch = (adminRec, allLinwaysStaff = [], currentDept = {}) => {
  if (!adminRec || !Array.isArray(allLinwaysStaff) || allLinwaysStaff.length === 0) {
    return null;
  }

  // 1. Explicit verified mapping lookup
  const deptSlug = currentDept.slug || '';
  const adminSlug = adminRec.slug || adminRec.name.toLowerCase().replace(/[^a-z0-9]/g, '-');
  const slugKey1 = `${deptSlug}-${adminSlug}`.toLowerCase();
  const slugKey2 = `${deptSlug}-${adminRec.name.toLowerCase().replace(/[^a-z0-9]/g, '')}`.toLowerCase();

  const explicitId = KNOWN_FACULTY_STAFF_IDS[slugKey1] || KNOWN_FACULTY_STAFF_IDS[slugKey2];
  if (explicitId) {
    const direct = allLinwaysStaff.find((s) => String(s.id) === String(explicitId));
    if (direct) {
      return { candidate: direct, score: 9999, reason: 'EXPLICIT_KNOWN_ID' };
    }
  }

  // 2. Score all potential candidates
  const scored = allLinwaysStaff
    .map((c) => ({
      candidate: c,
      score: scoreFacultyCandidate(adminRec, c, currentDept)
    }))
    .filter((item) => item.score > 40)
    .sort((a, b) => b.score - a.score);

  if (scored.length > 0) {
    return {
      candidate: scored[0].candidate,
      score: scored[0].score,
      reason: 'BEST_SCORE'
    };
  }

  return null;
};
