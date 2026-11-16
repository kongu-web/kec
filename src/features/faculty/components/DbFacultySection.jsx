import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getDepartmentFaculty, fetchDepartmentCsvData } from '../services/facultyDataService';
import { getDepartmentBySlug } from '../utils/facultyDepartmentMap';
import { DEFAULT_FACULTY_AVATAR } from '../utils/facultyHelper';
import '../../../components/Departments/Deptstyle.css';

/**
 * Individual Faculty Card matching the original KEC Department Gallery Frame design
 */
const FacultyMemberItem = ({ faculty, imageFolder, onClick }) => {
  const [imgError, setImgError] = useState(false);

  let resolvedSrc = null;
  if (!imgError && faculty.image) {
    if (faculty.photoUrl && faculty.photoUrl.startsWith('http')) {
      resolvedSrc = faculty.photoUrl;
    } else if (faculty.image.startsWith('http') || faculty.image.startsWith('data:')) {
      resolvedSrc = faculty.image;
    } else {
      try {
        resolvedSrc = require(`../../../assets/images/faculty_images/${imageFolder}/${faculty.image}`);
      } catch {
        resolvedSrc = null;
      }
    }
  }

  const finalSrc = resolvedSrc && !imgError ? resolvedSrc : DEFAULT_FACULTY_AVATAR;

  return (
    <div
      className="civil-faculty-card"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter') onClick();
      }}
    >
      <div className="faculty-photo">
        <img
          src={finalSrc}
          alt={faculty.name}
          loading="lazy"
          onError={() => setImgError(true)}
        />
      </div>

      <div className="faculty-info">
        <h4>{faculty.name}</h4>
        <p>{faculty.designation}</p>
      </div>
    </div>
  );
};

/**
 * Reusable Department Faculty Section Component
 * Renders the exact original KEC department frontend view (gallery frame grid)
 * with live faculty details enriched from Linways (Staff IDs, emails, ExAT portfolios).
 */
const DbFacultySection = ({ dept, title = "Faculty Members" }) => {
  const navigate = useNavigate();
  const [facultyList, setFacultyList] = useState([]);
  const [loading, setLoading] = useState(true);

  const deptMeta = getDepartmentBySlug(dept);

  useEffect(() => {
    let isMounted = true;

    const loadFaculty = async () => {
      setLoading(true);
      try {
        const data = await getDepartmentFaculty(deptMeta.slug);
        if (isMounted) {
          if (data && data.facultyList && data.facultyList.length > 0) {
            setFacultyList(data.facultyList);
          } else {
            // Direct safety fallback to ensure faculty cards NEVER fail to render
            try {
              const csvRecs = await fetchDepartmentCsvData(deptMeta.slug);
              if (isMounted && csvRecs && csvRecs.length > 0) {
                setFacultyList(csvRecs);
              }
            } catch {}
          }
        }
      } catch (err) {
        if (isMounted) {
          console.error(`Error loading faculty for ${deptMeta.slug}:`, err);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadFaculty();

    return () => {
      isMounted = false;
    };
  }, [deptMeta.slug]);

  const handleFacultyClick = (faculty) => {
    const slug = faculty.slug || 'faculty';
    const staffIdParam = faculty.staffId ? `?id=${encodeURIComponent(faculty.staffId)}` : '';
    navigate(`/faculty/${deptMeta.slug}/${slug}${staffIdParam}`);
  };

  if (loading) {
    return (
      <div>
        <h2>{title}</h2>
        <div className="auto-faculty-container" style={{ opacity: 0.6 }}>
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="civil-faculty-card" style={{ pointerEvents: 'none' }}>
              <div className="faculty-photo" style={{ background: '#e2e8f0', minHeight: '260px' }} />
              <div className="faculty-info" style={{ marginTop: '12px' }}>
                <div style={{ height: 20, width: '70%', background: '#e2e8f0', marginBottom: 8, borderRadius: 4 }} />
                <div style={{ height: 16, width: '50%', background: '#f1f5f9', borderRadius: 4 }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2>{title}</h2>
      {facultyList.length > 0 && (
        <h3>
          <strong>Total Faculty Members: {facultyList.length}</strong>
        </h3>
      )}

      <div className="auto-faculty-container">
        {facultyList.map((faculty, idx) => (
          <FacultyMemberItem
            key={faculty.id || `fac-${idx}`}
            faculty={faculty}
            imageFolder={deptMeta.imageFolder || deptMeta.slug}
            onClick={() => handleFacultyClick(faculty)}
          />
        ))}
      </div>
    </div>
  );
};

export default DbFacultySection;
