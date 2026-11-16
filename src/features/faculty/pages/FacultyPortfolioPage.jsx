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
      if (err.name !== 'AbortError' && !err.message?.includes('aborted')) {
        console.error('Error fetching faculty portfolio:', err);
        setError('Unable to load faculty portfolio. Please try again.');
      }
    } finally {
      if (!signal || !signal.aborted) {
        setLoading(false);
      }
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
  const conferences = portfolio.conferences || [];
  const projects = portfolio.projects || [];
  const patents = portfolio.patents || [];
  const consultancy = portfolio.consultancy || [];
  const education = portfolio.education || [];
  const experience = portfolio.experience || [];
  const additionalQualifications = portfolio.additionalQualifications || [];
  const phdSupervision = portfolio.phdSupervision || [];
  const fdpAttended = portfolio.fdpAttended || [];
  const eventsOrganized = portfolio.eventsOrganized || [];
  const memberships = portfolio.memberships || [];
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

                {/* Additional Qualifications / Certifications if present */}
                {additionalQualifications.length > 0 && (
                  <div style={{ marginTop: 24 }}>
                    <h4 className="faculty-journey-col-title" style={{ fontSize: '0.75rem', marginBottom: 12 }}>
                      CERTIFICATIONS & SPECIALIZATIONS
                    </h4>
                    <div className="faculty-addl-qual-grid">
                      {additionalQualifications.map((addl, idx) => (
                        <div key={idx} className="faculty-addl-qual-pill">
                          <span className="faculty-addl-qual-icon">📜</span>
                          <span className="faculty-addl-qual-title">{addl.specialization || addl.category}</span>
                          {addl.year && <span className="faculty-addl-qual-year">{addl.year}</span>}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
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

                {/* Prior Institutions Experience History */}
                {experience.length > 0 && (
                  <div className="faculty-prior-exp-list" style={{ marginTop: 16 }}>
                    <h4 className="faculty-journey-col-title" style={{ fontSize: '0.75rem', marginBottom: 10 }}>
                      PREVIOUS INSTITUTIONS & ROLES
                    </h4>
                    {experience.map((exp, idx) => (
                      <div key={idx} className="faculty-prior-exp-item">
                        <div className="faculty-prior-exp-dot"></div>
                        <div className="faculty-prior-exp-body">
                          <div className="faculty-prior-exp-desig">{exp.designation}</div>
                          <div className="faculty-prior-exp-org">{exp.organisation}</div>
                          <div className="faculty-prior-exp-dates">
                            {exp.period && <span>📅 {exp.period}</span>}
                            {exp.duration && <span> • ⏳ {exp.duration}</span>}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
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

              {conferences.length > 0 && (
                <button
                  type="button"
                  className={`faculty-tab-btn ${activeResearchTab === 'conferences' ? 'active' : ''}`}
                  onClick={() => setActiveResearchTab('conferences')}
                >
                  <span>🎤 Conferences</span>
                  <span className="faculty-tab-count-pill">{conferences.length}</span>
                </button>
              )}

              {projects.length > 0 && (
                <button
                  type="button"
                  className={`faculty-tab-btn ${activeResearchTab === 'projects' ? 'active' : ''}`}
                  onClick={() => setActiveResearchTab('projects')}
                >
                  <span>🔬 Research Projects</span>
                  <span className="faculty-tab-count-pill">{projects.length}</span>
                </button>
              )}

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

            {/* Tab 4: Conferences */}
            {activeResearchTab === 'conferences' && (
              <div className="faculty-tab-content">
                {conferences.map((conf, idx) => (
                  <article key={idx} className="faculty-output-card">
                    <h4 className="faculty-pub-title">{idx + 1}. {conf.title}</h4>
                    <div className="faculty-pub-journal">
                      🎤 {conf.conference}
                    </div>
                    {conf.organizedBy && (
                      <div className="faculty-pub-author">🏛️ Organized by: {conf.organizedBy}</div>
                    )}
                    <div className="faculty-pub-meta-row">
                      {conf.level && <span className="faculty-meta-pill">{conf.level} Level</span>}
                      {conf.period && <span className="faculty-meta-pill">📅 {conf.period}</span>}
                    </div>
                  </article>
                ))}
              </div>
            )}

            {/* Tab 5: Research Projects */}
            {activeResearchTab === 'projects' && (
              <div className="faculty-tab-content">
                {projects.map((proj, idx) => (
                  <article key={idx} className="faculty-output-card">
                    <h4 className="faculty-pub-title">{idx + 1}. {proj.title}</h4>
                    <div className="faculty-pub-journal">
                      🏛️ Funding Agency: <strong>{proj.fundingAgency}</strong> {proj.scheme && `(${proj.scheme})`}
                    </div>
                    <div className="faculty-pub-author">
                      👤 Principal Investigator: {proj.pi} {proj.coPi && `| Co-PI: ${proj.coPi}`}
                    </div>
                    <div className="faculty-pub-meta-row">
                      {proj.status && <span className="faculty-meta-pill">Status: {proj.status}</span>}
                      {proj.type && <span className="faculty-meta-pill">{proj.type}</span>}
                      {proj.duration && <span className="faculty-meta-pill">⏳ {proj.duration}</span>}
                      {proj.startDate && <span className="faculty-meta-pill">📅 Start: {proj.startDate}</span>}
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

          {/* ========================================================
             SECTION 7: PH.D. RESEARCH GUIDANCE
             ======================================================== */}
          {phdSupervision.length > 0 && (
            <section id="faculty-phd-section" className="faculty-phd-section">
              <div className="faculty-block-header">
                <h2 className="faculty-block-title">Ph.D. Research Guidance</h2>
                <span className="faculty-block-badge">{phdSupervision.length} Scholars</span>
              </div>

              <div className="faculty-phd-grid">
                {phdSupervision.map((phd, idx) => (
                  <div key={idx} className="faculty-phd-card">
                    <div className="faculty-phd-icon-box">🎓</div>
                    <div className="faculty-phd-body">
                      <div className="faculty-phd-top-row">
                        <h4 className="faculty-phd-scholar">{phd.scholarName}</h4>
                        <span className={`faculty-phd-status-pill ${String(phd.status).toLowerCase().includes('award') || String(phd.status).toLowerCase().includes('complet') ? 'awarded' : 'pursuing'}`}>
                          {phd.status}
                        </span>
                      </div>
                      <p className="faculty-phd-title">Title: {phd.thesisTitle}</p>
                      <div className="faculty-pub-meta-row" style={{ marginTop: 8 }}>
                        {phd.regNo && <span className="faculty-meta-pill">Reg No: {phd.regNo}</span>}
                        {phd.date && <span className="faculty-meta-pill">📅 Registered: {phd.date}</span>}
                        {phd.awardDate && <span className="faculty-meta-pill">🏆 Awarded: {phd.awardDate}</span>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* ========================================================
             SECTION 8: FACULTY DEVELOPMENT PROGRAMS (FDP & STTP)
             ======================================================== */}
          {fdpAttended.length > 0 && (
            <section id="faculty-fdp-section" className="faculty-fdp-section">
              <div className="faculty-block-header">
                <h2 className="faculty-block-title">Faculty Development Programs (FDP & STTP)</h2>
                <span className="faculty-block-badge">{fdpAttended.length} Programs</span>
              </div>

              <div className="faculty-fdp-grid">
                {fdpAttended.map((fdp, idx) => (
                  <div key={idx} className="faculty-fdp-card">
                    <div className="faculty-fdp-icon-box">📚</div>
                    <div className="faculty-fdp-body">
                      <h4 className="faculty-fdp-title">{fdp.title}</h4>
                      <p className="faculty-fdp-org">🏛️ Organized by: {fdp.organizedBy} {fdp.place && `(${fdp.place})`}</p>
                      <div className="faculty-pub-meta-row" style={{ marginTop: 6 }}>
                        <span className="faculty-meta-pill">{fdp.type}</span>
                        {fdp.level && <span className="faculty-meta-pill">{fdp.level}</span>}
                        {fdp.period && <span className="faculty-meta-pill">📅 {fdp.period}</span>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* ========================================================
             SECTION 9: ACADEMIC EVENTS ORGANIZED
             ======================================================== */}
          {eventsOrganized.length > 0 && (
            <section id="faculty-events-section" className="faculty-events-section">
              <div className="faculty-block-header">
                <h2 className="faculty-block-title">Academic Events Organized</h2>
                <span className="faculty-block-badge">{eventsOrganized.length} Events</span>
              </div>

              <div className="faculty-events-grid">
                {eventsOrganized.map((ev, idx) => (
                  <div key={idx} className="faculty-event-card">
                    <div className="faculty-event-icon-box">🎪</div>
                    <div className="faculty-event-body">
                      <h4 className="faculty-event-title">{ev.name}</h4>
                      <p className="faculty-event-meta">
                        <span>Role: <strong>{ev.role}</strong></span>
                        {ev.sponsor && <span> • Sponsored by: {ev.sponsor}</span>}
                        {ev.venue && <span> • Venue: {ev.venue}</span>}
                      </p>
                      <div className="faculty-pub-meta-row" style={{ marginTop: 6 }}>
                        <span className="faculty-meta-pill">{ev.type}</span>
                        {ev.level && <span className="faculty-meta-pill">{ev.level}</span>}
                        {ev.period && <span className="faculty-meta-pill">📅 {ev.period}</span>}
                        {ev.duration && <span className="faculty-meta-pill">⏳ {ev.duration}</span>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* ========================================================
             SECTION 10: PROFESSIONAL MEMBERSHIPS
             ======================================================== */}
          {memberships.length > 0 && (
            <section id="faculty-memberships-section" className="faculty-memberships-section">
              <div className="faculty-block-header">
                <h2 className="faculty-block-title">Professional Memberships & Fellowships</h2>
                <span className="faculty-block-badge">{memberships.length} Memberships</span>
              </div>

              <div className="faculty-memberships-grid">
                {memberships.map((mem, idx) => (
                  <div key={idx} className="faculty-membership-card">
                    <div className="faculty-membership-icon-box">🎖️</div>
                    <div className="faculty-membership-body">
                      <h4 className="faculty-membership-name">{mem.society}</h4>
                      <div className="faculty-pub-meta-row" style={{ marginTop: 4 }}>
                        <span className="faculty-membership-pos-pill">{mem.position}</span>
                        {mem.level && <span className="faculty-meta-pill">{mem.level}</span>}
                        {mem.date && <span className="faculty-meta-pill">📅 Since: {mem.date}</span>}
                      </div>
                    </div>
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
