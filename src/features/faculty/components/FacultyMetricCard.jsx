import React from 'react';

const FacultyMetricCard = ({ icon, label, value, isLink, linkType }) => {
    const displayVal = value && value !== 'undefined' && value !== 'null' ? value : 'N/A';

    let renderedValue = displayVal;

    if (displayVal !== 'N/A' && isLink) {
        if (linkType === 'email') {
            renderedValue = (
                <a href={`mailto:${displayVal}`} title={`Email ${displayVal}`}>
                    {displayVal}
                </a>
            );
        } else if (linkType === 'tel') {
            renderedValue = (
                <a href={`tel:${displayVal}`} title={`Call ${displayVal}`}>
                    {displayVal}
                </a>
            );
        }
    }

    return (
        <div className="faculty-metric-card">
            <div className="faculty-metric-icon" aria-hidden="true">
                {icon}
            </div>
            <div className="faculty-metric-body">
                <div className="faculty-metric-label">{label}</div>
                <div className="faculty-metric-value">{renderedValue}</div>
            </div>
        </div>
    );
};

export default FacultyMetricCard;

