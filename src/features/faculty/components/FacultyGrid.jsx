import React from 'react';
import FacultyCard from './FacultyCard';

const FacultyGrid = ({ facultyList = [], department, title = "Faculty Members" }) => {
  const count = facultyList.length;

  return (
    <div className="faculty-grid-container">
      <div className="faculty-grid-header">
        <h2 className="faculty-grid-title">{title}</h2>
        <div className="faculty-count-badge">
          <span>Total Faculty Members:</span>
          <span className="faculty-count-number">{count}</span>
        </div>
      </div>

      {count === 0 ? (
        <div className="faculty-empty-state">
          <div className="faculty-empty-icon">👥</div>
          <h3 className="faculty-empty-title">No Faculty Records Available</h3>
          <p className="faculty-empty-desc">Faculty details for this department are currently being updated.</p>
        </div>
      ) : (
        <div className="faculty-cards-grid">
          {facultyList.map((faculty, idx) => (
            <FacultyCard
              key={faculty.id || `fac-${idx}`}
              faculty={faculty}
              departmentSlug={department ? department.slug : faculty.departmentSlug}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FacultyGrid;

