import React from 'react';

const FacultyEmptyState = ({
  icon = '⚠️',
  title = 'Information Unavailable',
  message = 'The requested faculty details could not be loaded at this time.',
  onRetry = null,
  actionText = 'Retry'
}) => {
  return (
    <div className="faculty-empty-state" role="alert">
      <div className="faculty-empty-icon" aria-hidden="true">{icon}</div>
      <h3 className="faculty-empty-title">{title}</h3>
      <p className="faculty-empty-desc">{message}</p>
      {onRetry && (
        <button type="button" className="faculty-retry-btn" onClick={onRetry}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="23 4 23 10 17 10"/>
            <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/>
          </svg>
          <span>{actionText}</span>
        </button>
      )}
    </div>
  );
};

export default FacultyEmptyState;

