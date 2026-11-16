import React from 'react';

const FacultySection = ({ title, icon, count, children, items = null }) => {
  // Gracefully hide empty sections
  if (items !== null && Array.isArray(items) && items.length === 0) {
    return null;
  }

  const effectiveCount = count !== undefined ? count : (Array.isArray(items) ? items.length : null);

  return (
    <section className="faculty-cv-section" aria-labelledby={`section-title-${title.replace(/\s+/g, '-').toLowerCase()}`}>
      <div className="faculty-section-header">
        <div className="faculty-section-title-wrap">
          {icon && <div className="faculty-section-icon" aria-hidden="true">{icon}</div>}
          <h2 id={`section-title-${title.replace(/\s+/g, '-').toLowerCase()}`} className="faculty-section-title">
            {title}
          </h2>
        </div>
        {effectiveCount !== null && effectiveCount > 0 && (
          <span className="faculty-section-count">{effectiveCount}</span>
        )}
      </div>

      <div className="faculty-section-content">
        {children}
      </div>
    </section>
  );
};

export default FacultySection;

