import React, { useState } from 'react';

const FacultyAccordion = ({ title, count, defaultOpen = true, children }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={`faculty-accordion ${isOpen ? 'open' : 'closed'}`}>
      <button
        type="button"
        className="faculty-accordion-header"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <div className="faculty-accordion-title">
          <span>{title}</span>
          {count !== undefined && <span className="faculty-accordion-count">({count})</span>}
        </div>
        <div className="faculty-accordion-indicator" aria-hidden="true">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}
          >
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </div>
      </button>

      {isOpen && <div className="faculty-accordion-content">{children}</div>}
    </div>
  );
};

export default FacultyAccordion;

