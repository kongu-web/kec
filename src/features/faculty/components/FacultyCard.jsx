import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DEFAULT_FACULTY_AVATAR, formatFacultyName, formatDesignation } from '../utils/facultyHelper';
import { getDepartmentBySlug } from '../utils/facultyDepartmentMap';

const FacultyCard = ({ faculty, departmentSlug }) => {
  const navigate = useNavigate();
  const [imgError, setImgError] = useState(false);

  if (!faculty) return null;

  const dept = getDepartmentBySlug(departmentSlug || faculty.departmentSlug);
  const deptFolder = dept.imageFolder || 'cse';

  // Safe image resolution
  let resolvedSrc = null;
  if (!imgError) {
    if (faculty.photoUrl && faculty.photoUrl.startsWith('http')) {
      resolvedSrc = faculty.photoUrl;
    } else if (faculty.image) {
      if (faculty.image.startsWith('http') || faculty.image.startsWith('data:')) {
        resolvedSrc = faculty.image;
      } else {
        try {
          // Dynamic Webpack asset loading
          resolvedSrc = require(`../../../assets/images/faculty_images/${deptFolder}/${faculty.image}`);
        } catch {
          // Fallback to avatar if file is missing
          resolvedSrc = null;
        }
      }
    }
  }

  const finalImage = resolvedSrc && !imgError ? resolvedSrc : DEFAULT_FACULTY_AVATAR;
  const displayName = formatFacultyName(faculty.name);
  const displayDesignation = formatDesignation(faculty.designation);

  const handleViewProfile = (e) => {
    e.preventDefault();
    const slug = faculty.slug || 'faculty';
    const query = faculty.staffId ? `?id=${encodeURIComponent(faculty.staffId)}` : '';
    navigate(`/faculty/${dept.slug}/${slug}${query}`);
  };

  return (
    <div className="faculty-member-card" onClick={handleViewProfile} role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === 'Enter') handleViewProfile(e); }}>
      <div className="faculty-card-media">
        <img
          src={finalImage}
          alt={displayName}
          className="faculty-card-image"
          loading="lazy"
          onError={() => setImgError(true)}
        />
        {faculty.hasLinwaysReport && (
          <span className="faculty-card-badge" title="Verified Academic Portfolio">
            Portfolio
          </span>
        )}
      </div>

      <div className="faculty-card-body">
        <h4 className="faculty-card-name" title={displayName}>
          {displayName}
        </h4>
        <p className="faculty-card-designation">{displayDesignation}</p>

        <div className="faculty-card-action">
          <button
            type="button"
            className="faculty-view-profile-btn"
            onClick={handleViewProfile}
            aria-label={`View profile of ${displayName}`}
          >
            <span>View Profile</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FacultyCard;

