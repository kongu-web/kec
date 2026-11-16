/**
 * Strict Name Matching Engine
 * Accurately pairs Admin CSV faculty records with Linways Staff & ExAT reports.
 * Prevents false positives between similar faculty names.
 */

// Common titles, prefixes, and qualifications to strip during comparison
const PREFIX_REGEX = /^(dr\.?|prof\.?|mr\.?|mrs\.?|ms\.?|er\.?|thiru\.?|tmt\.?)\s+/i;
const SUFFIX_REGEX = /\b(ph\.?d|m\.?e|m\.?tech|m\.?sc|b\.?e|b\.?tech|m\.?phil|b\.?ed|m\.?ed|mba|mca)\b/gi;
const STAFF_ID_SUFFIX_REGEX = /\[[A-Za-z0-9_-]+\]|\([A-Za-z0-9_-]+\)$/;

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
    name = name.replace(PREFIX_REGEX, '').trim();
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
    // If only one token exists (e.g. "Geetha"), require at least 1 matching initial if initials exist
    if (smallerSet.size === 1) {
      if (t1.initials.length > 0 && t2.initials.length > 0) {
        const i1 = new Set(t1.initials);
        const hasCommon = t2.initials.some((i) => i1.has(i));
        return hasCommon;
      }
      // If one side has no initials and both only have 1 single word token (e.g. "Geetha" and "Geetha M"),
      // check if it's safe or ambiguous
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
