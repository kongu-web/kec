import React from 'react';
import '../styles/faculty-grid.css';
import '../styles/faculty-portfolio.css';

/**
 * Skeleton Loader for Department Faculty Grid
 */
export const FacultyGridSkeleton = ({ count = 8 }) => {
  const items = Array.from({ length: count });

  return (
    <div className="faculty-grid-container" aria-label="Loading faculty members">
      <div className="faculty-grid-header" style={{ opacity: 0.6 }}>
        <div
          style={{
            width: '260px',
            height: '36px',
            borderRadius: '8px',
            background: 'linear-gradient(90deg, #e2e8f0 25%, #f1f5f9 50%, #e2e8f0 75%)',
            backgroundSize: '200% 100%',
            animation: 'facultyPulse 1.5s infinite ease-in-out'
          }}
        />
        <div
          style={{
            width: '140px',
            height: '34px',
            borderRadius: '9999px',
            background: '#e2e8f0'
          }}
        />
      </div>

      <div className="faculty-cards-grid">
        {items.map((_, idx) => (
          <div
            key={idx}
            className="faculty-member-card"
            style={{
              pointerEvents: 'none',
              minHeight: '340px',
              border: '1px solid #e2e8f0'
            }}
          >
            {/* Image Placeholder */}
            <div
              style={{
                width: '100%',
                aspectRatio: '1 / 1.15',
                background: 'linear-gradient(90deg, #e2e8f0 25%, #f8fafc 50%, #e2e8f0 75%)',
                backgroundSize: '200% 100%',
                animation: 'facultyPulse 1.5s infinite ease-in-out'
              }}
            />

            {/* Content Placeholder */}
            <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '10px', flexGrow: 1 }}>
              <div
                style={{
                  width: '80%',
                  height: '18px',
                  borderRadius: '4px',
                  background: '#e2e8f0'
                }}
              />
              <div
                style={{
                  width: '60%',
                  height: '14px',
                  borderRadius: '4px',
                  background: '#f1f5f9'
                }}
              />
              <div
                style={{
                  marginTop: 'auto',
                  width: '100%',
                  height: '38px',
                  borderRadius: '8px',
                  background: '#e2e8f0'
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes facultyPulse {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </div>
  );
};

/**
 * Skeleton Loader for Individual Faculty Portfolio Page
 */
export const FacultyPortfolioSkeleton = () => {
  return (
    <div className="faculty-portfolio-container" aria-label="Loading faculty portfolio">
      {/* Hero Skeleton Banner */}
      <div
        style={{
          background: 'linear-gradient(135deg, #09206b 0%, #0d38a8 45%, #1852cf 100%)',
          padding: '42px 32px 48px',
          color: '#ffffff'
        }}
      >
        <div
          style={{
            maxWidth: '1350px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '240px 1.2fr 1.3fr',
            gap: '32px',
            alignItems: 'start'
          }}
        >
          {/* Portrait Skeleton */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
            <div
              style={{
                width: '180px',
                height: '180px',
                borderRadius: '16px',
                background: 'rgba(255, 255, 255, 0.15)',
                border: '2px solid rgba(56, 189, 248, 0.4)'
              }}
            />
            <div style={{ width: '150px', height: '22px', borderRadius: '4px', background: 'rgba(255, 255, 255, 0.2)' }} />
            <div style={{ width: '120px', height: '16px', borderRadius: '4px', background: 'rgba(255, 255, 255, 0.15)' }} />
          </div>

          {/* Academic Overview Skeleton */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div style={{ width: '160px', height: '14px', borderRadius: '4px', background: 'rgba(255, 255, 255, 0.2)' }} />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
              <div style={{ height: '36px', borderRadius: '6px', background: 'rgba(255, 255, 255, 0.1)' }} />
              <div style={{ height: '36px', borderRadius: '6px', background: 'rgba(255, 255, 255, 0.1)' }} />
            </div>
            <div style={{ width: '140px', height: '28px', borderRadius: '9999px', background: 'rgba(56, 189, 248, 0.2)' }} />
          </div>

          {/* Metrics Skeleton Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
            {Array.from({ length: 11 }).map((_, i) => (
              <div
                key={i}
                style={{
                  height: '74px',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.12)',
                  border: '1px solid rgba(255, 255, 255, 0.18)'
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Body Content Skeleton */}
      <div style={{ maxWidth: '1350px', margin: '32px auto', padding: '0 24px', display: 'flex', flexDirection: 'column', gap: '28px' }}>
        <div style={{ height: '180px', borderRadius: '16px', background: '#ffffff', border: '1px solid #e2e8f0', boxShadow: '0 2px 4px rgba(0,0,0,0.04)' }} />
        <div style={{ height: '260px', borderRadius: '16px', background: '#ffffff', border: '1px solid #e2e8f0', boxShadow: '0 2px 4px rgba(0,0,0,0.04)' }} />
      </div>
    </div>
  );
};

export default FacultyGridSkeleton;
