import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import Navbar from '../../../components/HomePage/navbar/Navbar';
import Footer from '../../../components/HomePage/Footer/Footer';
import FacultyHero from '../components/FacultyHero';
import { FacultyPortfolioSkeleton } from '../components/FacultyLoading';
import FacultyEmptyState from '../components/FacultyEmptyState';
import { getFacultyPortfolio } from '../services/facultyDataService';
import { getDepartmentBySlug } from '../utils/facultyDepartmentMap';

import '../styles/faculty-portfolio.css';
import '../styles/faculty-responsive.css';

const FacultyPortfolioPage = () => {
  const { deptSlug, facultySlug } = useParams();
  const [searchParams] = useSearchParams();
  const staffId = searchParams.get('id');
  const navigate = useNavigate();

  const [portfolio, setPortfolio] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeResearchTab, setActiveResearchTab] = useState('journals');

  const dept = getDepartmentBySlug(deptSlug);

  const loadData = async (signal) => {
    setLoading(true);
    setError(null);
    try {
      const data = await getFacultyPortfolio(dept.slug, facultySlug, staffId, { signal });
      if (!data) {
        setError('Faculty record not found');
      } else {
        setPortfolio(data);
      }
    } catch (err) {
      if (err.name !== 'AbortError') {
        console.error('Error fetching faculty portfolio:', err);
        setError('Unable to load faculty portfolio. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const controller = new AbortController();
    loadData(controller.signal);

    return () => {
      controller.abort();
    };
  }, [dept.slug, facultySlug, staffId]);

  if (loading) {
    return (
      <div>
        <Navbar />
        <FacultyPortfolioSkeleton />
        <Footer />
      </div>
    );
  }

  if (error || !portfolio) {
    return (
      <div>
        <Navbar />
        <div className="faculty-portfolio-container" style={{ padding: '60px 16px' }}>
          <FacultyEmptyState
            title="Faculty Profile Not Found"
            message={error || "The requested faculty member's portfolio could not be retrieved."}
            onRetry={() => loadData()}
            actionText="Try Again"
          />
          <div style={{ textAlign: 'center', marginTop: 20 }}>
            <button
              type="button"
              className="faculty-back-btn"
              onClick={() => navigate(-1)}
            >
              ← Back to Department
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const journals = portfolio.journals || [];
  const patents = portfolio.patents || [];
  const consultancy = portfolio.consultancy || [];
  const education = portfolio.education || [];
  const awards = portfolio.awards || [];
  const innovations = portfolio.teachingInnovations || [];
  const outreach = portfolio.outsideWorld || [];
  const committees = portfolio.committees || [];

  return (
    <div>
      <Navbar />

      <main className="faculty-portfolio-container">
        {/* Top Hero Section */}
        <FacultyHero
          faculty={portfolio}
          onMetricClick={(cfg) => {
            if (cfg.tab) setActiveResearchTab(cfg.tab);
          }}
        />

        <div className="faculty-sections-main">
          {/* ========================================================
             SECTION 1: ACADEMIC JOURNEY
             ======================================================== */}
          <section id="faculty-journey-section" className="faculty-journey-section">
            <div className="faculty-block-header">
              <h2 className="faculty-block-title">Academic Journey</h2>
            </div>

            <div className="faculty-journey-grid">
              {/* Left Column: EDUCATION */}
              <div>
                <h3 className="faculty-journey-col-title">EDUCATION</h3>
                <div className="faculty-edu-timeline">
                  {education.length > 0 ? (
                    education.map((edu, idx) => {
                      const nodeClass = edu.levelTag === 'Doctoral' ? 'doc' : (edu.levelTag === 'Post Graduate' ? 'pg' : 'ug');
                      const icon = edu.levelTag === 'Doctoral' ? '🎓' : (edu.levelTag === 'Post Graduate' ? '📜' : '📖');
                      return (
                        <div key={idx} className="faculty-edu-item">
                          <div className={`faculty-edu-node faculty-node-${nodeClass}`}>
                            {icon}
                          </div>
                          <div className="faculty-edu-card">
                            <h4 className="faculty-edu-degree">
                              {edu.specialisation ? `${edu.degree} — ${edu.specialisation}` : edu.degree}
                            </h4>
                            <span className={`faculty-pill-tag faculty-pill-${nodeClass}`}>
                              {edu.levelTag}
                            </span>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <>
                      <div className="faculty-edu-item">
                        <div className="faculty-edu-node faculty-node-doc">🎓</div>
                        <div className="faculty-edu-card">
                          <h4 className="faculty-edu-degree">{portfolio.highestQualification || 'Ph.D.'} — {portfolio.specialisation || dept.name}</h4>
                          <span className="faculty-pill-tag faculty-pill-doc">Doctoral</span>
                        </div>
                      </div>
                      <div className="faculty-edu-item">
                        <div className="faculty-edu-node faculty-node-ug">📖</div>
                        <div className="faculty-edu-card">
                          <h4 className="faculty-edu-degree">Bachelor Degree — {dept.name}</h4>
                          <span className="faculty-pill-tag faculty-pill-ug">Under Graduate</span>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Right Column: PROFESSIONAL EXPERIENCE */}
              <div>
                <h3 className="faculty-journey-col-title">PROFESSIONAL EXPERIENCE</h3>
                <div className="faculty-exp-card">
                  <div className="faculty-exp-header">
                    <h4 className="faculty-exp-desig">{portfolio.designation || 'Faculty Member'}</h4>
                    <span className="faculty-exp-badge">{portfolio.teachingExperienceFormatted || 'Faculty'}</span>
                  </div>
                  <div className="faculty-exp-dept">{dept.name}</div>
                  <div className="faculty-exp-inst">Kongu Engineering College, Perundurai, Erode</div>
                  <div className="faculty-exp-dates">
                    {portfolio.dateOfJoining ? `📅 ${portfolio.dateOfJoining} — Present` : '📅 Active Faculty'}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ========================================================
             SECTION 2: RESEARCH & ACADEMIC OUTPUT (TABS)
             ======================================================== */}
          <section id="faculty-research-section" className="faculty-research-section">
            <div className="faculty-block-header">
              <h2 className="faculty-block-title">Research & Academic Output</h2>
            </div>

            {/* Tab Bar */}
            <div className="faculty-tabs-bar">
              <button
                type="button"
                className={`faculty-tab-btn ${activeResearchTab === 'journals' ? 'active' : ''}`}
                onClick={() => setActiveResearchTab('journals')}
              >
                <span>📚 Journals</span>
                <span className="faculty-tab-count-pill">{journals.length}</span>
              </button>

              <button
                type="button"
                className={`faculty-tab-btn ${activeResearchTab === 'patents' ? 'active' : ''}`}
                onClick={() => setActiveResearchTab('patents')}
              >
                <span>📜 Patents</span>
                <span className="faculty-tab-count-pill">{patents.length}</span>
              </button>

              <button
                type="button"
                className={`faculty-tab-btn ${activeResearchTab === 'consultancy' ? 'active' : ''}`}
                onClick={() => setActiveResearchTab('consultancy')}
              >
                <span>💼 Consultancy</span>
                <span className="faculty-tab-count-pill">{consultancy.length}</span>
              </button>
            </div>

            {/* Tab 1: Journals */}
            {activeResearchTab === 'journals' && (
              <div className="faculty-tab-content">
                {journals.map((pub, idx) => (
                  <article key={idx} className="faculty-output-card">
                    <h4 className="faculty-pub-title">{idx + 1}. {pub.title}</h4>
                    <div className="faculty-pub-author">🔥 {pub.author || portfolio.name}</div>
                    <div className="faculty-pub-journal">
                      📖 {pub.journal} {pub.year && `(${pub.year})`}
                    </div>
                    <div className="faculty-pub-meta-row">
                      {pub.volume && <span className="faculty-meta-pill">Vol. {pub.volume}</span>}
                      {pub.issue && <span className="faculty-meta-pill">Issue: {pub.issue}</span>}
                      {pub.publisher && <span className="faculty-meta-pill">{pub.publisher}</span>}
                      {pub.doiUrl && (
                        <a
                          href={pub.doiUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="faculty-meta-pill"
                          style={{ color: '#0284c7', textDecoration: 'none' }}
                        >
                          🔗 DOI Link ↗
                        </a>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            )}

            {/* Tab 2: Patents */}
            {activeResearchTab === 'patents' && (
              <div className="faculty-tab-content">
                {patents.map((pat, idx) => (
                  <article key={idx} className="faculty-output-card">
                    <h4 className="faculty-pub-title">{idx + 1}. {pat.title}</h4>
                    <div className="faculty-pub-meta-row" style={{ marginTop: 8 }}>
                      <span className="faculty-meta-pill">App No: {pat.applicationNumber}</span>
                      <span className="faculty-meta-pill">Status: {pat.status}</span>
                      {pat.publicationDate && <span className="faculty-meta-pill">Published: {pat.publicationDate}</span>}
                      {pat.type && <span className="faculty-meta-pill">{pat.type}</span>}
                    </div>
                  </article>
                ))}
              </div>
            )}

            {/* Tab 3: Consultancy */}
            {activeResearchTab === 'consultancy' && (
              <div className="faculty-tab-content">
                {consultancy.map((con, idx) => (
                  <article key={idx} className="faculty-output-card">
                    <h4 className="faculty-pub-title">{idx + 1}. {con.description || con.client}</h4>
                    <div className="faculty-pub-journal">🏢 Client: {con.client}</div>
                    <div className="faculty-pub-meta-row">
                      {con.amount && con.amount !== 'N/A' && <span className="faculty-meta-pill">Revenue: ₹{con.amount}</span>}
                      {con.period && <span className="faculty-meta-pill">📅 {con.period}</span>}
                    </div>
                  </article>
                ))}
              </div>
            )}
          </section>

          {/* ========================================================
             SECTION 3: AWARDS & ACHIEVEMENTS
             ======================================================== */}
          {awards.length > 0 && (
            <section id="faculty-awards-section" className="faculty-awards-section">
              <div className="faculty-block-header">
                <h2 className="faculty-block-title">Awards & Achievements</h2>
                <span className="faculty-block-badge">{awards.length} Awards</span>
              </div>

              <div className="faculty-awards-grid">
                {awards.map((awd, idx) => {
                  const icons = ['⭐', '🏆', '📣', '📄', '🎓', '⭐', '🏆', '🧪', '📄'];
                  const icon = icons[idx % icons.length];
                  return (
                    <div key={idx} className="faculty-award-card">
                      <div className="faculty-award-icon-box">{icon}</div>
                      <div className="faculty-award-body">
                        <h4 className="faculty-award-title">{awd.title}</h4>
                        <p className="faculty-award-org">{awd.awardingBody}</p>
                      </div>
                      {awd.date && <span className="faculty-award-date">{awd.date}</span>}
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {/* ========================================================
             SECTION 4: TEACHING INNOVATIONS & PEDAGOGIES
             ======================================================== */}
          {innovations.length > 0 && (
            <section id="faculty-innovations-section" className="faculty-innovations-section">
              <div className="faculty-block-header">
                <h2 className="faculty-block-title">Teaching Innovations & Pedagogies</h2>
                <span className="faculty-block-badge">{innovations.length} Innovations</span>
              </div>

              <div className="faculty-innovations-grid">
                {innovations.map((inn, idx) => (
                  <div key={idx} className="faculty-innovation-card">
                    <div className="faculty-innovation-top-row">
                      <span className="faculty-course-code-pill">{inn.courseCode}</span>
                      <span className="faculty-platform-pill">{inn.platform}</span>
                      {inn.date && <span className="faculty-innovation-date-pill">📅 {inn.date}</span>}
                    </div>

                    <h4 className="faculty-course-name">{inn.courseName}</h4>
                    <p className="faculty-methodology-text">💡 Methodology / TLM: {inn.methodology}</p>

                    {inn.resourceLink && (
                      <a
                        href={inn.resourceLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="faculty-resource-link"
                      >
                        <span>🔗 View Teaching Material / Resource</span>
                        <span>↗</span>
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* ========================================================
             SECTION 5: OUTSIDE WORLD INTERACTION
             ======================================================== */}
          {outreach.length > 0 && (
            <section id="faculty-outreach-section" className="faculty-outreach-section">
              <div className="faculty-block-header">
                <h2 className="faculty-block-title">Outside World Interaction</h2>
                <span className="faculty-block-badge">{outreach.length} Outreach</span>
              </div>

              <div className="faculty-outreach-grid">
                {outreach.map((out, idx) => {
                  const icons = ['👥', '🏛️', '🎤', '📜', '💼', '🔨', '🧪'];
                  const icon = icons[idx % icons.length];
                  return (
                    <div key={idx} className="faculty-outreach-card">
                      <div className="faculty-outreach-icon-box">{icon}</div>
                      <div className="faculty-outreach-body">
                        <h4 className="faculty-outreach-title">{out.title}</h4>
                        <p className="faculty-outreach-role">Role: {out.role}</p>
                      </div>
                      {out.date && <span className="faculty-outreach-date">📅 {out.date}</span>}
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {/* ========================================================
             SECTION 6: INSTITUTE COMMITTEE & CELL CONTRIBUTIONS
             ======================================================== */}
          {committees.length > 0 && (
            <section id="faculty-committees-section" className="faculty-committees-section">
              <div className="faculty-block-header">
                <h2 className="faculty-block-title">Institute Committee & Cell Contributions</h2>
                <span className="faculty-block-badge">{committees.length} Committees</span>
              </div>

              <div className="faculty-committees-grid">
                {committees.map((com, idx) => (
                  <div key={idx} className="faculty-committee-card">
                    <div className="faculty-committee-icon-box">🏛️</div>
                    <div className="faculty-committee-body">
                      <h4 className="faculty-committee-name">{com.name}</h4>
                      <span className="faculty-committee-role-pill">Role: {com.role}</span>
                    </div>
                    {com.period && <span className="faculty-committee-date">📅 {com.period}</span>}
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FacultyPortfolioPage;
