/**
 * Experience Calculation & Classification Engine
 * Calculates teaching and industry experience accurately from Linways ExAT history.
 */

// Configurable industry keywords
export const INDUSTRY_KEYWORDS = [
  'pvt ltd',
  'private limited',
  'inc',
  'technologies',
  'solutions',
  'industries',
  'engineering services',
  'software',
  'systems',
  'consultancy',
  'corporation',
  'corp',
  'llc',
  'enterprise',
  'infotech',
  'tech',
  'tcs',
  'infosys',
  'wipro',
  'cognizant',
  'cts',
  'accenture',
  'hcl',
  'zoho',
  'ibm'
];

// Configurable academic keywords
export const ACADEMIC_KEYWORDS = [
  'college',
  'university',
  'institute',
  'polytechnic',
  'school',
  'campus',
  'academy',
  'vidyalaya',
  'kec',
  'kongu'
];

/**
 * Classify organisation as 'Academic', 'Industry', or 'Other'
 */
export const classifyExperience = (organisation = '', designation = '') => {
  const org = String(organisation).toLowerCase();
  const des = String(designation).toLowerCase();

  // Explicit designation indicators
  if (
    des.includes('professor') ||
    des.includes('lecturer') ||
    des.includes('teacher') ||
    des.includes('hod') ||
    des.includes('dean') ||
    des.includes('tutor') ||
    des.includes('principal')
  ) {
    return 'Academic';
  }

  if (
    des.includes('software engineer') ||
    des.includes('developer') ||
    des.includes('analyst') ||
    des.includes('consultant') ||
    des.includes('manager') ||
    des.includes('specialist')
  ) {
    return 'Industry';
  }

  // Organisation keywords
  const isAcademic = ACADEMIC_KEYWORDS.some((kw) => org.includes(kw));
  const isIndustry = INDUSTRY_KEYWORDS.some((kw) => org.includes(kw));

  if (isAcademic && !isIndustry) return 'Academic';
  if (isIndustry && !isAcademic) return 'Industry';
  if (isAcademic && isIndustry) {
    // Disambiguation
    if (org.includes('college of engineering') || org.includes('polytechnic college')) {
      return 'Academic';
    }
    return 'Industry';
  }

  return 'Academic'; // Default for faculty records unless industry detected
};

/**
 * Parse date string into Date object safely
 * Supports YYYY-MM-DD, DD-MM-YYYY, MM/DD/YYYY, and Month Year formats
 */
export const parseExperienceDate = (dateStr) => {
  if (!dateStr) return null;
  const str = String(dateStr).trim();

  // If "present", "current", "till date"
  if (/^(present|current|till date|now|today)$/i.test(str)) {
    return new Date();
  }

  // Handle DD-MM-YYYY or DD/MM/YYYY
  const dmyMatch = str.match(/^(\d{1,2})[-/](\d{1,2})[-/](\d{4})$/);
  if (dmyMatch) {
    const day = parseInt(dmyMatch[1], 10);
    const month = parseInt(dmyMatch[2], 10) - 1;
    const year = parseInt(dmyMatch[3], 10);
    return new Date(year, month, day);
  }

  // Try standard Date.parse
  const timestamp = Date.parse(str);
  if (!isNaN(timestamp)) {
    return new Date(timestamp);
  }

  return null;
};

/**
 * Parse human duration string like "3 Years 4 Months", "2.5 Years", "18 Months"
 */
export const parseDurationString = (durationStr) => {
  if (!durationStr || typeof durationStr !== 'string') return null;

  const str = durationStr.toLowerCase().trim();

  let totalMonths = 0;
  let matched = false;

  const yearsMatch = str.match(/(\d+(?:\.\d+)?)\s*(?:yrs|years|year|y)/);
  if (yearsMatch) {
    totalMonths += Math.round(parseFloat(yearsMatch[1]) * 12);
    matched = true;
  }

  const monthsMatch = str.match(/(\d+)\s*(?:mos|months|month|m)/);
  if (monthsMatch) {
    totalMonths += parseInt(monthsMatch[1], 10);
    matched = true;
  }

  if (matched) {
    return totalMonths;
  }

  // Direct number check (assume years if < 50, months if > 50)
  const num = parseFloat(str);
  if (!isNaN(num)) {
    return num <= 50 ? Math.round(num * 12) : Math.round(num);
  }

  return null;
};

/**
 * Format total months into readable string: "12 Years 6 Months"
 */
export const formatExperienceDuration = (totalMonths) => {
  if (typeof totalMonths !== 'number' || isNaN(totalMonths) || totalMonths <= 0) {
    return 'N/A';
  }

  const years = Math.floor(totalMonths / 12);
  const months = Math.round(totalMonths % 12);

  const parts = [];
  if (years > 0) {
    parts.push(`${years} ${years === 1 ? 'Year' : 'Years'}`);
  }
  if (months > 0) {
    parts.push(`${months} ${months === 1 ? 'Month' : 'Months'}`);
  }

  return parts.length > 0 ? parts.join(' ') : '0 Months';
};

/**
 * Calculate total months between two dates without negative values
 */
export const getMonthsBetweenDates = (startDate, endDate) => {
  if (!startDate || !endDate) return 0;
  const start = new Date(startDate);
  const end = new Date(endDate);

  if (isNaN(start.getTime()) || isNaN(end.getTime()) || end < start) {
    return 0;
  }

  const yearsDiff = end.getFullYear() - start.getFullYear();
  const monthsDiff = end.getMonth() - start.getMonth();
  const daysDiff = end.getDate() - start.getDate();

  let total = yearsDiff * 12 + monthsDiff;
  if (daysDiff >= 15) {
    total += 1;
  }

  return Math.max(0, total);
};

/**
 * Calculate experience metrics from a faculty experience list
 */
export const calculateExperienceMetrics = (experienceList = [], joiningDateKEC = null) => {
  let teachingMonths = 0;
  let industryMonths = 0;

  // Add current KEC tenure if joining date is present
  if (joiningDateKEC) {
    const kecStart = parseExperienceDate(joiningDateKEC);
    if (kecStart) {
      const kecMonths = getMonthsBetweenDates(kecStart, new Date());
      teachingMonths += kecMonths;
    }
  }

  if (Array.isArray(experienceList) && experienceList.length > 0) {
    experienceList.forEach((item) => {
      let durationMonths = null;

      // 1. Check startDate and endDate
      if (item.startDate) {
        const start = parseExperienceDate(item.startDate);
        const end = parseExperienceDate(item.endDate) || new Date();
        if (start) {
          durationMonths = getMonthsBetweenDates(start, end);
        }
      }

      // 2. Fall back to duration string
      if (durationMonths === null && item.duration) {
        durationMonths = parseDurationString(item.duration);
      }

      const months = durationMonths || 0;
      const category = item.category || classifyExperience(item.organisation || item.institution, item.designation);

      if (category === 'Industry') {
        industryMonths += months;
      } else {
        teachingMonths += months;
      }
    });
  }

  return {
    totalTeachingMonths: teachingMonths,
    totalIndustryMonths: industryMonths,
    teachingExperienceFormatted: teachingMonths > 0 ? formatExperienceDuration(teachingMonths) : 'N/A',
    industryExperienceFormatted: industryMonths > 0 ? formatExperienceDuration(industryMonths) : 'N/A'
  };
};
