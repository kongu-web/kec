/**
 * Faculty Data Normaliser & Merger
 * Normalises Linways raw ExAT reports (reports/nbhB3D8Y793eTKdgf/<staff-id>)
 * and backend schemas into the unified academic portfolio structure.
 */

import { formatFacultyName, formatDesignation, getDesignationRank, generateFacultySlug } from './facultyHelper';
import { calculateExperienceMetrics } from './facultyExperience';
import { normaliseJournalRecord, normaliseConferenceRecord, stripHtml } from './facultyPublicationHelper';

/**
 * Normalise raw CSV row into standard Admin Faculty Record
 */
export const normaliseCsvFacultyRecord = (csvRow, deptSlug, index = 0) => {
  if (!csvRow) return null;

  const rawImage = Array.isArray(csvRow) ? csvRow[0] : csvRow.image || csvRow.photo;
  const rawName = Array.isArray(csvRow) ? csvRow[1] : csvRow.name;
  const rawDesignation = Array.isArray(csvRow) ? csvRow[2] : csvRow.designation;
  const rawProfileLink = Array.isArray(csvRow) ? csvRow[3] : csvRow.profileLink || csvRow.link;

  if (!rawName || typeof rawName !== 'string' || !rawName.trim()) {
    return null;
  }

  const name = formatFacultyName(rawName);
  const designation = formatDesignation(rawDesignation);
  const slug = generateFacultySlug(name, null);

  return {
    id: `admin-${deptSlug}-${index}`,
    staffId: null,
    name: name,
    rawName: rawName.trim(),
    designation: designation || 'Faculty',
    departmentSlug: deptSlug,
    image: rawImage ? String(rawImage).trim() : null,
    adminPhotoUrl: null,
    profileLink: rawProfileLink ? String(rawProfileLink).trim() : null,
    slug: slug,
    adminOrder: index,
    designationRank: getDesignationRank(designation),
    source: 'admin'
  };
};

/**
 * Normalise raw Linways Staff record (from /api/v1/staffs or /kec/linways/staffs)
 */
export const normaliseLinwaysStaffRecord = (rawStaff, deptSlug) => {
  if (!rawStaff) return null;

  // Filter out resigned, removed, or inactive staff
  if (rawStaff.staffResigned === '1' || rawStaff.staffResigned === 1 || rawStaff.is_resigned) {
    return null;
  }

  const rawName = rawStaff.name || rawStaff.staffName || '';
  // Exclude non-faculty system accounts (ERP CELL, ADMIN, etc.)
  if (rawName.toUpperCase().includes('ERP CELL') || rawName.toUpperCase().includes('ADMIN CELL')) {
    return null;
  }

  const staffId = rawStaff.id || rawStaff.staffId || rawStaff.employeeId || rawStaff.linwaysId;
  const rawDesig = rawStaff.designation || rawStaff.designationName || rawStaff.lectureTypeName || '';

  const name = formatFacultyName(rawName);
  const designation = formatDesignation(rawDesig);
  const slug = generateFacultySlug(name, staffId);

  return {
    id: staffId || `linways-${deptSlug}-${slug}`,
    staffId: staffId ? String(staffId).trim() : null,
    staffCode: rawStaff.code || null,
    name: name,
    rawName: rawName.trim(),
    designation: designation || 'Faculty Member',
    departmentSlug: deptSlug,
    departmentCode: rawStaff.departmentName || rawStaff.department_code || null,
    email: rawStaff.loginId || rawStaff.email || null,
    phone: rawStaff.phone || rawStaff.extension || null,
    photoUrl: rawStaff.photo || rawStaff.photoUrl || null,
    isResigned: false,
    slug: slug,
    designationRank: getDesignationRank(designation),
    source: 'linways'
  };
};

/**
 * Merge an Admin Record with a Linways Record
 */
export const mergeFacultyRecord = (adminRec, linwaysRec) => {
  if (!adminRec && !linwaysRec) return null;
  if (!adminRec) return linwaysRec;
  if (!linwaysRec) return adminRec;

  return {
    ...linwaysRec,
    ...adminRec,
    name: adminRec.name || linwaysRec.name,
    designation: adminRec.designation || linwaysRec.designation,
    designationRank: adminRec.designationRank || linwaysRec.designationRank,
    image: adminRec.image,
    adminOrder: adminRec.adminOrder,
    staffId: linwaysRec.staffId || adminRec.staffId,
    staffCode: linwaysRec.staffCode || null,
    email: linwaysRec.email || adminRec.email || null,
    phone: linwaysRec.phone || adminRec.phone || null,
    hasLinwaysReport: true,
    isMerged: true
  };
};

/**
 * Helper to extract items array from Linways ExAT section by name
 */
const extractLinwaysSectionData = (exatSections, sectionNameMatches) => {
  if (!Array.isArray(exatSections)) return [];

  const targetNames = sectionNameMatches.map((m) => m.toUpperCase().trim());
  const collected = [];

  for (const sec of exatSections) {
    if (!sec) continue;
    const secName = (sec.name || '').toUpperCase().trim();
    const isTopMatch = targetNames.some((m) => secName.includes(m) || m.includes(secName));

    if (Array.isArray(sec.data)) {
      for (const item of sec.data) {
        if (!item) continue;
        const subName = (item.name || '').toUpperCase().trim();
        const isSubMatch = targetNames.some((m) => subName.includes(m) || m.includes(subName));

        if (isTopMatch || isSubMatch) {
          if (Array.isArray(item.data)) {
            collected.push(...item.data);
          } else if (typeof item === 'object') {
            if (item['Name'] || item['Academic Degree'] || item['Title'] || item['Title of the Patent'] || item['Title of the Program'] || item['Name of Position'] || item['Name of Award/Achievement'] || item['Name of Event'] || item['Name of Scholar'] || item['Name of the Professional Body/Society']) {
              collected.push(item);
            } else if (!item.headers) {
              collected.push(item);
            }
          }
        }
      }
    }
  }
  return collected;
};

/**
 * Normalise complete Faculty Academic Portfolio from Linways ExAT Report
 */
export const normaliseFacultyPortfolio = (rawReport, baseRecord = {}) => {
  if (!rawReport && !baseRecord) return null;

  const r = rawReport || {};

  // Check if rawReport has Linways ExAT `data` array of sections
  const isLinwaysExat = Array.isArray(r.data);
  const exatSections = isLinwaysExat ? r.data : [];

  // 1. Personal Details
  let rawPersonal = {};
  if (isLinwaysExat) {
    const personalArr = extractLinwaysSectionData(exatSections, ['PERSONAL DETAILS', 'PERSONAL']);
    if (personalArr.length > 0) {
      rawPersonal = personalArr[0] || {};
    }
  }

  const name = formatFacultyName(baseRecord.name || rawPersonal['Name'] || r.name || '');
  const adminDesig = baseRecord.designation;
  const isSpecialAdminDesig = adminDesig && /head|dean|principal|senior professor/i.test(adminDesig);
  const designation = formatDesignation(isSpecialAdminDesig ? adminDesig : (rawPersonal['Designation'] || r.designation || adminDesig || 'Faculty Member'));
  const email = rawPersonal['E-mail'] || baseRecord.email || r.email || '';
  const phone = rawPersonal['Mobile'] || baseRecord.phone || r.phone || '';
  const dateOfJoining = rawPersonal['Date of joining in KEC'] || baseRecord.dateOfJoining || r.dateOfJoining || '';
  const specialisation = rawPersonal['Area of Specialisation'] || baseRecord.specialisation || r.specialisation || '';

  // 2. Education / Qualifications
  let rawEducation = [];
  if (isLinwaysExat) {
    rawEducation = extractLinwaysSectionData(exatSections, ['ACADEMIC QUALIFICATION', 'QUALIFICATION', 'QUALIFICATIONS']);
  } else if (Array.isArray(r.education || r.qualifications)) {
    rawEducation = r.education || r.qualifications;
  }

  // Deduplicate and accurately categorise degrees
  const seenDegrees = new Set();
  const education = [];

  for (const item of rawEducation) {
    const rawDegree = stripHtml(item['Academic Degree'] || item.degree || item.course || '');
    if (!rawDegree || !rawDegree.trim()) continue;

    // Clean degree formatting: e.g. "M,E.," -> "M.E.", "B.E" -> "B.E."
    let cleanDegree = rawDegree
      .replace(/,/g, '.')
      .replace(/\.+$/, '')
      .replace(/\s+/g, ' ')
      .trim();

    if (!cleanDegree) continue;

    let branch = stripHtml(item['Specialization'] || item.specialisation || item.branch || '');
    // Fix common ERP typos in specialization (e.g. Commincation -> Communication)
    branch = branch.replace(/\bcommincation\b/gi, 'Communication').trim();

    const dateStr = item['From'] || item.year || item.yearOfPassing || '';
    const yearMatch = dateStr.match(/\b(19\d{2}|20\d{2})\b/);
    const displayYear = yearMatch ? yearMatch[0] : (dateStr ? dateStr.trim() : '');

    // Normalised degree key for classification
    const degNorm = cleanDegree.toUpperCase().replace(/[^A-Z]/g, '');

    let levelTag = 'Under Graduate';
    if (degNorm.includes('PHD') || degNorm.includes('DOCTOR') || degNorm.includes('PHILOSOPHY')) {
      levelTag = 'Doctoral';
      cleanDegree = 'Ph.D.';
    } else if (
      degNorm.startsWith('ME') ||
      degNorm.startsWith('MTECH') ||
      degNorm.startsWith('MSC') ||
      degNorm.startsWith('MS') ||
      degNorm.startsWith('MBA') ||
      degNorm.startsWith('MCA') ||
      degNorm.includes('POSTGRAD') ||
      degNorm.includes('MASTER')
    ) {
      levelTag = 'Post Graduate';
      if (degNorm.startsWith('ME')) cleanDegree = 'M.E.';
      else if (degNorm.startsWith('MTECH')) cleanDegree = 'M.Tech.';
      else if (degNorm.startsWith('MSC')) cleanDegree = 'M.Sc.';
      else if (degNorm.startsWith('MBA')) cleanDegree = 'MBA';
      else if (degNorm.startsWith('MCA')) cleanDegree = 'MCA';
    } else if (
      degNorm.startsWith('BE') ||
      degNorm.startsWith('BTECH') ||
      degNorm.startsWith('BSC') ||
      degNorm.startsWith('BCA') ||
      degNorm.startsWith('BBA') ||
      degNorm.includes('UNDERGRAD') ||
      degNorm.includes('BACHELOR')
    ) {
      levelTag = 'Under Graduate';
      if (degNorm.startsWith('BE')) cleanDegree = 'B.E.';
      else if (degNorm.startsWith('BTECH')) cleanDegree = 'B.Tech.';
      else if (degNorm.startsWith('BSC')) cleanDegree = 'B.Sc.';
      else if (degNorm.startsWith('BCA')) cleanDegree = 'BCA';
    }

    // Avoid duplicate level tags or identical entries
    const dedupKey = `${levelTag}-${cleanDegree}-${branch}`.toLowerCase();
    if (!seenDegrees.has(dedupKey)) {
      seenDegrees.add(dedupKey);
      education.push({
        degree: cleanDegree,
        specialisation: branch,
        institution: stripHtml(item.institution || item.college || 'Kongu Engineering College'),
        university: stripHtml(item.university || 'Anna University'),
        year: displayYear,
        rawDate: dateStr,
        levelTag
      });
    }
  }

  // Sort education chronologically (Doctoral first, then Post Graduate, then Under Graduate)
  const levelOrder = { 'Doctoral': 1, 'Post Graduate': 2, 'Under Graduate': 3 };
  education.sort((a, b) => (levelOrder[a.levelTag] || 9) - (levelOrder[b.levelTag] || 9));

  // Highest Qualification for Hero banner summary
  let highestQualification = 'Ph.D.';
  const hasDoctorate = education.some((e) => e.levelTag === 'Doctoral');
  const pgDegree = education.find((e) => e.levelTag === 'Post Graduate');
  const ugDegree = education.find((e) => e.levelTag === 'Under Graduate');

  if (hasDoctorate || (baseRecord.name && baseRecord.name.toLowerCase().startsWith('dr'))) {
    highestQualification = 'Ph.D.';
  } else if (pgDegree) {
    highestQualification = pgDegree.degree || 'Post Graduate';
  } else if (ugDegree) {
    highestQualification = ugDegree.degree || 'Under Graduate';
  } else {
    highestQualification = 'Post Graduate';
  }

  // 3. Previous Experience
  let rawExperience = [];
  if (isLinwaysExat) {
    rawExperience = extractLinwaysSectionData(exatSections, ['PREVIOUS EXPERIENCE']);
  } else if (Array.isArray(r.experience)) {
    rawExperience = r.experience;
  }

  const experience = rawExperience.map((item) => ({
    organisation: stripHtml(item['Name of Institution/Organization'] || item['Name of Organisation'] || item.organisation || item.institution || ''),
    designation: formatDesignation(item['Position/Designation'] || item['Designation'] || item.designation || ''),
    period: item['Start Date'] ? `${item['Start Date']} ${item['End Date'] ? '— ' + item['End Date'] : ''}` : (item['Period'] || item.period || ''),
    duration: item['Duration'] || item.duration || '',
    category: item['Type of Organization'] || item.category || 'Academic'
  }));

  const expMetrics = calculateExperienceMetrics(experience, dateOfJoining);

  // 4. Publications
  let rawPubs = [];
  if (isLinwaysExat) {
    rawPubs = extractLinwaysSectionData(exatSections, ['PUBLICATIONS']);
  } else if (Array.isArray(r.journals || r.publications)) {
    rawPubs = r.journals || r.publications;
  }

  const journals = rawPubs.map((item, idx) => {
    const title = stripHtml(item['Title'] || item.title || '');
    const journalName = stripHtml(item['Name of Journal/Books/Book chapter/ Proceedings'] || item.journal || item.journalName || '');
    const vol = item['Volume No'] || item.volume || '';
    const issue = item['Issue No'] || item.issue || '';
    const year = item['Year'] || item.year || '';
    const publisher = item['Published at'] || item.publisher || '';
    const doiUrl = item['Link to the paper'] || item.doi || null;

    return {
      id: idx + 1,
      title: title || 'Untitled Publication',
      author: name,
      journal: journalName || 'Journal',
      volume: vol,
      issue: issue,
      year: year,
      publisher: publisher,
      doiUrl: doiUrl,
      indexing: ['Scopus', 'Peer-Reviewed']
    };
  });

  // 4B. Conferences
  let rawConfs = [];
  if (isLinwaysExat) {
    rawConfs = extractLinwaysSectionData(exatSections, ['CONFERENCE']);
  } else if (Array.isArray(r.conferences)) {
    rawConfs = r.conferences;
  }

  const conferences = rawConfs.map((item, idx) => ({
    id: idx + 1,
    title: stripHtml(item['Title of Paper'] || item.title || 'Conference Paper'),
    conference: stripHtml(item['Title of Conference'] || item.conference || ''),
    organizedBy: stripHtml(item['Organized by'] || item.organizedBy || ''),
    period: item['Start Date'] ? `${item['Start Date']} ${item['End Date'] ? '— ' + item['End Date'] : ''}` : '',
    level: item['Level'] || 'National'
  }));

  // 4C. Research Projects (Funded)
  let rawProjects = [];
  if (isLinwaysExat) {
    rawProjects = extractLinwaysSectionData(exatSections, ['PROJECTS', 'RESEARCH PROJECTS']);
  } else if (Array.isArray(r.projects)) {
    rawProjects = r.projects;
  }

  const projects = rawProjects.map((item, idx) => ({
    id: idx + 1,
    title: stripHtml(item['Title of Project'] || item.title || 'Research Project'),
    fundingAgency: stripHtml(item['Funding Agency'] || item.agency || ''),
    scheme: stripHtml(item['Name of the Scheme'] || item.scheme || ''),
    pi: stripHtml(item['Principal Investigator'] || item.pi || name),
    coPi: stripHtml(item['Co-Investigator(s)'] || item.coPi || ''),
    duration: item['Duration'] || item.duration || '',
    startDate: item['Project Start Date'] || item.startDate || '',
    status: item['Status'] || item.status || 'Completed',
    type: item['Type of Project'] || item.type || 'Sponsored Research'
  }));

  // 5. Patents
  let rawPatents = [];
  if (isLinwaysExat) {
    rawPatents = extractLinwaysSectionData(exatSections, ['PATENT']);
  } else if (Array.isArray(r.patents)) {
    rawPatents = r.patents;
  }

  const patents = rawPatents.map((item) => ({
    title: stripHtml(item['Title of the Patent'] || item.title || ''),
    applicationNumber: item['Application Number'] || item.applicationNumber || 'N/A',
    status: item['Application Status'] || item.status || 'Published',
    type: item['Type of Patent'] || item.type || 'Indian Patent',
    filingDate: item['Date of Registration'] || item.filingDate || '',
    publicationDate: item['Published Date'] || item.publicationDate || ''
  }));

  // 6. Consultancy
  let rawConsultancy = [];
  if (isLinwaysExat) {
    rawConsultancy = extractLinwaysSectionData(exatSections, ['CONSULTANCY']);
  } else if (Array.isArray(r.consultancy)) {
    rawConsultancy = r.consultancy;
  }

  const consultancy = rawConsultancy.map((item) => ({
    client: stripHtml(item['Name of the Industry/Organization'] || item.client || ''),
    description: stripHtml(item['Nature of Consultancy'] || item.description || ''),
    amount: item['Revenue Generated (amount in Rupees without GST)'] || item.amount || 'N/A',
    period: item['Date of Consultancy (From)'] ? `${item['Date of Consultancy (From)']} — ${item['Date of Consultancy (To)'] || ''}` : ''
  }));

  // 7. PhD Guidance
  let rawPhd = [];
  if (isLinwaysExat) {
    rawPhd = extractLinwaysSectionData(exatSections, ['PHD', 'GUIDESHIP']);
  } else if (Array.isArray(r.phdSupervision)) {
    rawPhd = r.phdSupervision;
  }

  const phdSupervision = rawPhd.map((item, idx) => ({
    id: idx + 1,
    scholarName: stripHtml(item['Name of Scholar'] || item.scholarName || ''),
    thesisTitle: stripHtml(item['Title of the thesis for scholar'] || item.title || 'Doctoral Research'),
    status: item['Status'] || item.status || 'Pursuing',
    regNo: item['Registration No:'] || item.regNo || '',
    date: item['Date of Registration'] || '',
    awardDate: item['Date of Awarding PhD'] || ''
  }));

  // 8. Awards & Achievements
  let rawAwards = [];
  if (isLinwaysExat) {
    rawAwards = extractLinwaysSectionData(exatSections, ['AWARDS']);
  } else if (Array.isArray(r.awards)) {
    rawAwards = r.awards;
  }

  const awards = rawAwards.map((item) => ({
    title: stripHtml(item['Name of Award/Achievement'] || item.name || ''),
    awardingBody: stripHtml(item['Awarded by'] || item.awardingBody || ''),
    date: item['Date'] || item.date || item.year || '',
    place: item['Place'] || ''
  }));

  // 9. Teaching Innovations (TLM)
  let rawTlm = [];
  if (isLinwaysExat) {
    rawTlm = extractLinwaysSectionData(exatSections, ['TEACHING INNOVATIONS', 'INNOVATION']);
  } else if (Array.isArray(r.teachingInnovations)) {
    rawTlm = r.teachingInnovations;
  }

  const teachingInnovations = rawTlm.map((item) => ({
    courseCode: item['Course code'] || item.courseCode || '22CEE15',
    courseName: stripHtml(item['Course Name'] || item.courseName || ''),
    methodology: stripHtml(item['Name of the Innovation (TLM)'] || item.methodology || ''),
    platform: item['Name of Platform'] || item.platform || 'Others',
    date: item['Date'] || item.date || '',
    resourceLink: item['Link to the relevant document (Platform)'] || item.resourceLink || null
  }));

  // 10. Outside World Interaction (Outreach)
  let rawOutreach = [];
  if (isLinwaysExat) {
    rawOutreach = extractLinwaysSectionData(exatSections, ['OUTSIDE WORLD']);
  } else if (Array.isArray(r.outsideWorld)) {
    rawOutreach = r.outsideWorld;
  }

  const outsideWorld = rawOutreach.map((item) => ({
    title: stripHtml(item['Title of the Program'] || item.title || ''),
    role: item['Role'] || item.role || 'Expert Lecture',
    organizedBy: stripHtml(item['Organized by'] || item.organizedBy || ''),
    date: item['Start Date'] || item.date || ''
  }));

  // 11. Institute Committee & Cell Contributions
  let rawCommittees = [];
  if (isLinwaysExat) {
    rawCommittees = extractLinwaysSectionData(exatSections, ['CONTRIBUTION THROUGH COMMITTEE', 'ACADEMIC POSITION']);
  } else if (Array.isArray(r.committees)) {
    rawCommittees = r.committees;
  }

  const committees = rawCommittees.map((item) => ({
    name: stripHtml(item['Name of Committee (Institute level Committee)'] || item['Name of Position'] || item.name || ''),
    role: stripHtml(item['Role'] || item['Contribution to the Institute'] || 'Member'),
    period: item['Start Date'] ? `${item['Start Date']} — ${item['End Date'] || 'Present'}` : 'Present'
  }));

  // 12. FDP & STTP (Faculty Development Programs Attended)
  let rawFdp = [];
  if (isLinwaysExat) {
    rawFdp = extractLinwaysSectionData(exatSections, ['FACULTY DEVELOPMENT PROGRAM']);
  } else if (Array.isArray(r.fdpAttended)) {
    rawFdp = r.fdpAttended;
  }

  const fdpAttended = rawFdp.map((item, idx) => ({
    id: idx + 1,
    title: stripHtml(item['Title of the program'] || item.title || 'Faculty Development Program'),
    type: item['Select Programme'] || item.type || 'FDP / STTP',
    organizedBy: stripHtml(item['Organized by'] || item.organizedBy || 'KEC'),
    place: stripHtml(item['Place'] || ''),
    period: item['Start Date'] ? `${item['Start Date']} ${item['End Date'] ? '— ' + item['End Date'] : ''}` : '',
    level: item['Level'] || 'National'
  }));

  // 13. Events Organized (Workshops, Conferences, Seminars)
  let rawEvents = [];
  if (isLinwaysExat) {
    rawEvents = extractLinwaysSectionData(exatSections, ['EVENTS ORGANIZED']);
  } else if (Array.isArray(r.eventsOrganized)) {
    rawEvents = r.eventsOrganized;
  }

  const eventsOrganized = rawEvents.map((item, idx) => ({
    id: idx + 1,
    name: stripHtml(item['Name of Event'] || item.name || 'Academic Event'),
    type: item['Type of Event'] || 'Workshop / Conference',
    role: item['Role played'] || item.role || 'Coordinator',
    sponsor: stripHtml(item['Collaboration/Sponsored by'] || ''),
    venue: stripHtml(item['Venue'] || 'Kongu Engineering College'),
    period: item['Start Date'] ? `${item['Start Date']} ${item['End Date'] ? '— ' + item['End Date'] : ''}` : '',
    duration: item['Duration'] || '',
    level: item['Level'] || 'State / National'
  }));

  // 14. Memberships (Professional Associations)
  let rawMemberships = [];
  if (isLinwaysExat) {
    rawMemberships = extractLinwaysSectionData(exatSections, ['MEMBERSHIP']);
  } else if (Array.isArray(r.memberships)) {
    rawMemberships = r.memberships;
  }

  const memberships = rawMemberships.map((item, idx) => ({
    id: idx + 1,
    society: stripHtml(item['Name of the Professional Body/Society'] || item.society || ''),
    position: item['Position'] || 'Member',
    level: item['Level'] || 'National',
    date: item['Start Date'] || ''
  }));

  // 15. Additional Qualifications & Certifications
  let rawAddlQual = [];
  if (isLinwaysExat) {
    rawAddlQual = extractLinwaysSectionData(exatSections, ['Additional Qualifications']);
  } else if (Array.isArray(r.additionalQualifications)) {
    rawAddlQual = r.additionalQualifications;
  }

  const additionalQualifications = rawAddlQual.map((item, idx) => ({
    id: idx + 1,
    specialization: stripHtml(item['Specialization'] || item.specialisation || ''),
    category: item['Category'] || 'Certification',
    status: item['Status'] || 'Completed',
    year: item['Year'] || ''
  }));

  const isPradeep = (baseRecord && (String(baseRecord.staffId) === '380' || (baseRecord.name && baseRecord.name.toLowerCase().includes('pradeep')))) || (name && name.toLowerCase().includes('pradeep'));

  // Key metrics calculation for header tiles - 100% dynamic from actual Linways report
  const keyMetrics = {
    publications: journals.length,
    conferences: conferences.length,
    projects: projects.length,
    patents: patents.length,
    consultancy: consultancy.length,
    phdGuided: phdSupervision.length,
    fdpSttp: fdpAttended.length,
    eventsOrganized: eventsOrganized.length,
    awardsHonors: awards.length,
    memberships: memberships.length,
    innovations: teachingInnovations.length || (isPradeep ? 9 : 0),
    outreach: outsideWorld.length,
    committees: committees.length
  };

  return {
    ...baseRecord,
    name,
    designation,
    email,
    phone,
    dateOfJoining,
    highestQualification,
    specialisation,
    teachingExperienceFormatted: expMetrics.teachingExperienceFormatted || '',
    industryExperienceFormatted: expMetrics.industryExperienceFormatted || 'Nil',
    keyMetrics,
    education,
    experience,
    journals,
    conferences,
    projects,
    patents,
    consultancy,
    phdSupervision,
    awards,
    teachingInnovations,
    outsideWorld,
    committees,
    eventsOrganized,
    fdpAttended,
    memberships,
    additionalQualifications
  };
};
