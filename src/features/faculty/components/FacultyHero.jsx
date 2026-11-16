import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { DEFAULT_FACULTY_AVATAR, formatFacultyName, formatDesignation } from '../utils/facultyHelper';
import { getDepartmentBySlug } from '../utils/facultyDepartmentMap';

const METRIC_DEFINITIONS = [
  { key: 'publications', label: 'Publications', targetId: 'faculty-research-section', tab: 'journals' },
  { key: 'conferences', label: 'Conferences', targetId: 'faculty-research-section', tab: 'conferences' },
  { key: 'projects', label: 'Research Projects', targetId: 'faculty-research-section', tab: 'projects' },
  { key: 'patents', label: 'Patents', targetId: 'faculty-research-section', tab: 'patents' },
  { key: 'consultancy', label: 'Consultancy', targetId: 'faculty-research-section', tab: 'consultancy' },
  { key: 'phdGuided', label: 'Ph.D. Guided', targetId: 'faculty-phd-section' },
  { key: 'fdpSttp', label: 'FDP & STTP', targetId: 'faculty-fdp-section' },
  { key: 'eventsOrganized', label: 'Events Organized', targetId: 'faculty-events-section' },
  { key: 'awardsHonors', label: 'Awards & Honors', targetId: 'faculty-awards-section' },
  { key: 'memberships', label: 'Memberships', targetId: 'faculty-memberships-section' },
  { key: 'innovations', label: 'Innovations (TLM)', targetId: 'faculty-innovations-section' },
  { key: 'outreach', label: 'Outreach', targetId: 'faculty-outreach-section' },
  { key: 'committees', label: 'Committees', targetId: 'faculty-committees-section' },
];

const FacultyHero = ({ faculty, onMetricClick }) => {
  const [imgError, setImgError] = useState(false);

  if (!faculty) return null;

  const dept = getDepartmentBySlug(faculty.departmentSlug);
  const deptFolder = dept.imageFolder || 'cse';

  let resolvedSrc = null;
  if (!imgError) {
    if (faculty.photoUrl && faculty.photoUrl.startsWith('http')) {
      resolvedSrc = faculty.photoUrl;
    } else if (faculty.image) {
      if (faculty.image.startsWith('http') || faculty.image.startsWith('data:')) {
        resolvedSrc = faculty.image;
      } else {
        try {
          resolvedSrc = require(`../../../assets/images/faculty_images/${deptFolder}/${faculty.image}`);
        } catch {
          resolvedSrc = null;
        }
      }
    }
  }

  const finalImage = resolvedSrc && !imgError ? resolvedSrc : DEFAULT_FACULTY_AVATAR;
  const displayName = formatFacultyName(faculty.name);
  const displayDesignation = formatDesignation(faculty.designation);
  const metrics = faculty.keyMetrics || {};

  const handleTileClick = (item) => {
    if (onMetricClick) {
      onMetricClick(item);
    }
    if (item.targetId) {
      const el = document.getElementById(item.targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  // Only show metric boxes that have count > 0 (hide 0 / 00 count boxes)
  const activeMetrics = METRIC_DEFINITIONS.filter((item) => {
    const val = metrics[item.key];
    if (typeof val === 'number') return val > 0;
    if (typeof val === 'string') return parseInt(val, 10) > 0;
    return false;
  });

  return (
    <section className="faculty-hero-banner">
      <div className="faculty-hero-inner">
        {/* Top Right Home Button */}
        <Link to={`/${dept.slug}`} className="faculty-home-btn" title="Back to Department" aria-label="Back to Department">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            <polyline points="9 22 9 12 15 12 15 22"/>
          </svg>
        </Link>

        {/* Column 1: Portrait & Faculty Identification */}
        <div className="faculty-banner-col-portrait">
          <div className="faculty-portrait-glow">
            <img
              src={finalImage}
              alt={displayName}
              onError={() => setImgError(true)}
            />
          </div>
          <h1 className="faculty-banner-name">{displayName}</h1>
          <div className="faculty-banner-designation" style={{ fontWeight: 400 }}>{displayDesignation}</div>
          <div className="faculty-banner-dept" style={{ fontWeight: 400 }}>{dept.name}</div>
        </div>

        {/* Column 2: Academic Overview */}
        <div className="faculty-banner-col-overview">
          <div className="faculty-overview-title">ACADEMIC OVERVIEW</div>

          <div className="faculty-overview-grid">
            <div className="faculty-overview-item">
              <span className="faculty-overview-label">Qualification</span>
              <span className="faculty-overview-val" style={{ fontWeight: 400 }}>{faculty.highestQualification || 'Ph.D.'}</span>
            </div>
            <div className="faculty-overview-item">
              <span className="faculty-overview-label">Date of Joining KEC</span>
              <span className="faculty-overview-val" style={{ fontWeight: 400 }}>{faculty.dateOfJoining || '—'}</span>
            </div>
            <div className="faculty-overview-item">
              <span className="faculty-overview-label">Teaching Experience</span>
              <span className="faculty-overview-val" style={{ fontWeight: 400 }}>{faculty.teachingExperienceFormatted || '—'}</span>
            </div>
            <div className="faculty-overview-item">
              <span className="faculty-overview-label">Industry Experience</span>
              <span className="faculty-overview-val" style={{ fontWeight: 400 }}>{faculty.industryExperienceFormatted || 'Nil'}</span>
            </div>
          </div>

          <div className="faculty-specialization-wrap">
            <div className="faculty-overview-label" style={{ marginBottom: 6 }}>Research Specializations</div>
            <div className="faculty-spec-pill" style={{ fontWeight: 400 }}>
              <span className="faculty-spec-dot"></span>
              <span>{faculty.specialisation || dept.name || 'Engineering'}</span>
            </div>
          </div>

          <div className="faculty-ext-profile-wrap">
            <div className="faculty-overview-label" style={{ marginBottom: 6 }}>EXTERNAL PROFILE</div>
            <a
              href={faculty.profileLink && faculty.profileLink.startsWith('http') ? faculty.profileLink : `mailto:${faculty.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="faculty-ext-view-btn"
              title="View external profile"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
              </svg>
              <span>View</span>
            </a>
          </div>
        </div>

        {/* Column 3: Key Metrics & Achievements (Only > 0 tiles shown, click to scroll) */}
        <div className="faculty-banner-col-metrics">
          <div className="faculty-overview-title">KEY METRICS & ACHIEVEMENTS</div>

          {activeMetrics.length > 0 ? (
            <div className="faculty-metrics-tiles-grid">
              {activeMetrics.map((item) => (
                <div
                  key={item.key}
                  className="faculty-metric-tile"
                  onClick={() => handleTileClick(item)}
                  role="button"
                  tabIndex={0}
                  title={`Click to view ${item.label}`}
                  style={{ cursor: 'pointer' }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleTileClick(item);
                  }}
                >
                  <div className="faculty-tile-num">{metrics[item.key]}</div>
                  <div className="faculty-tile-label" style={{ fontWeight: 400 }}>{item.label}</div>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', padding: '12px 0' }}>
              Academic metrics are currently being updated from institutional records.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FacultyHero;
