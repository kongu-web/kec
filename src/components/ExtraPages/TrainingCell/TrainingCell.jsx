import React, { useState, useEffect } from "react";
import "./TrainingCell.css";
import Navbar from "../../HomePage/navbar/Navbar";
import Footer from "../../HomePage/Footer/Footer";
import Spinner from "../../Spinner";
import trainingCellImg from "../../../assets/images/TrainingCell.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faGraduationCap,
  faUsers,
  faBriefcase,
  faChartLine,
  faTrophy,
  faBrain,
  faComments,
  faCode,
  faClock,
  faUserGraduate,
  faBookOpen,
  faClipboardCheck,
  faChalkboardUser,
  faUserCheck,
  faSliders,
  faLaptopCode,
  faRocket,
  faBullseye,
  faFilePdf,
  faFolderOpen,
  faCalendarDays,
  faUserTie,
  faMobileScreen,
  faPhone,
  faLocationDot,
  faFax,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";

const importAllPdfs = (r) =>
  r.keys().map((key) => ({
    name: key.replace("./", "").replace(".pdf", "").replace(/-/g, "-"),
    file: r(key),
  }));

const trainingDetailsFiles = importAllPdfs(
  require.context(
    "../../../assets/docs/Placement/Training Details",
    false,
    /\.pdf$/
  )
);

const trainingSchedulesFiles = importAllPdfs(
  require.context(
    "../../../assets/docs/Placement/Training Schedules",
    false,
    /\.pdf$/
  )
);

const TrainingCell = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const scrollToAreas = () => {
    const section = document.getElementById("training-areas-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAbout = () => {
    const section = document.getElementById("about-training-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return loading ? (
    <Spinner />
  ) : (
    <>
      <Navbar />
      <div className="training-cell-page">
        {/* Full Width Hero Section */}
        <section className="tc-modern-hero">
          <div className="tc-mhero-card">
            {/* Glowing Orbs */}
            <div className="tc-glow-orb"></div>

            <div className="tc-mhero-container">
              {/* Left Content Column */}
              <div className="tc-mhero-left">
                <h1 className="tc-mhero-title">
                  Training Cell
                </h1>

                {/* Decorative Dot Matrix Pattern */}
                <div className="tc-dot-matrix">
                  <span></span><span></span><span></span><span></span><span></span><span></span>
                  <span></span><span></span><span></span><span></span><span></span><span></span>
                  <span></span><span></span><span></span><span></span><span></span><span></span>
                </div>

                <h3 className="tc-mhero-subtitle">
                  Empowering Students with Skills for Industry and Career Success
                </h3>

                <p className="tc-mhero-desc">
                  The Training Cell empowers students with industry-relevant capabilities across core engineering and software domains. Our comprehensive training ecosystem integrates technical skills, programming, aptitude, communication, industry exposure, assessments, and interview preparation to transform students into confident, competent, and career-ready professionals.
                </p>
              </div>

              {/* Right Image Column with Opposite Direction Organic Arc */}
              <div className="tc-mhero-right">
                <img src={trainingCellImg} alt="KEC Training Cell Campus" className="tc-mhero-img" />

                {/* Organic Arc Layer SVG (Opposite Direction Curve) */}
                <svg className="tc-arc-svg" viewBox="0 0 100 500" preserveAspectRatio="none">
                  <path d="M 100,0 C 15,130 15,370 100,500 L 0,500 L 0,0 Z" fill="#041e42" />
                  <path d="M 100,0 C 15,130 15,370 100,500" fill="none" stroke="url(#arcGradient)" strokeWidth="4.5" />
                  <defs>
                    <linearGradient id="arcGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#00d2ff" />
                      <stop offset="60%" stopColor="#00d2ff" />
                      <stop offset="100%" stopColor="#10b981" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>

          {/* Floating Key Metrics Card Bar */}
          <div className="tc-stats-container">
            <div className="tc-stats-grid">
              <div className="tc-stat-card">
                <div className="tc-stat-icon-wrapper icon-blue">
                  <FontAwesomeIcon icon={faUsers} className="tc-stat-icon" />
                </div>
                <div className="tc-stat-info">
                  <h3 className="tc-stat-number">350+</h3>
                  <p className="tc-stat-label">Training Hours</p>
                </div>
              </div>

              <div className="tc-stat-card">
                <div className="tc-stat-icon-wrapper icon-green">
                  <FontAwesomeIcon icon={faBriefcase} className="tc-stat-icon" />
                </div>
                <div className="tc-stat-info">
                  <h3 className="tc-stat-number">Industry</h3>
                  <p className="tc-stat-label">Focused Training</p>
                </div>
              </div>

              <div className="tc-stat-card">
                <div className="tc-stat-icon-wrapper icon-purple">
                  <FontAwesomeIcon icon={faChartLine} className="tc-stat-icon" />
                </div>
                <div className="tc-stat-info">
                  <h3 className="tc-stat-number">Continuous</h3>
                  <p className="tc-stat-label">Skill Development</p>
                </div>
              </div>

              <div className="tc-stat-card">
                <div className="tc-stat-icon-wrapper icon-yellow">
                  <FontAwesomeIcon icon={faTrophy} className="tc-stat-icon" />
                </div>
                <div className="tc-stat-info">
                  <h3 className="tc-stat-number">Career</h3>
                  <p className="tc-stat-label">Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Content Section */}
        <div className="tc-body-container">
          {/* Training Areas Section */}
          <section id="training-areas-section" className="tc-areas-section">
            <div className="tc-areas-header">
              <h2 className="tc-areas-main-title">Training Areas</h2>
              <div className="tc-areas-divider">
                <span className="tc-divider-line"></span>
                <span className="tc-divider-dot"></span>
                <span className="tc-divider-line"></span>
              </div>
            </div>

            <div className="tc-areas-grid">
              {/* Card 1: Aptitude & Reasoning */}
              <div className="tc-area-card card-blue">
                <div className="tc-area-icon-wrap">
                  <FontAwesomeIcon icon={faBrain} className="tc-area-icon" />
                </div>
                <h3 className="tc-area-title">Aptitude & Reasoning</h3>
                <ul className="tc-area-list">
                  <li>Quantitative Aptitude</li>
                  <li>Logical Reasoning</li>
                  <li>Speed Maths</li>
                  <li>Shortcut Methods</li>
                  <li>Problem Solving Skills</li>
                </ul>
              </div>

              {/* Card 2: Communication & Professional Skills */}
              <div className="tc-area-card card-green">
                <div className="tc-area-icon-wrap">
                  <FontAwesomeIcon icon={faComments} className="tc-area-icon" />
                </div>
                <h3 className="tc-area-title">Communication & Professional Skills</h3>
                <ul className="tc-area-list">
                  <li>Verbal Ability</li>
                  <li>Communication Skills</li>
                  <li>Soft Skills</li>
                  <li>Professional Grooming</li>
                  <li>Interview Skills</li>
                </ul>
              </div>

              {/* Card 3: Technical & Digital Skills */}
              <div className="tc-area-card card-orange">
                <div className="tc-area-icon-wrap">
                  <FontAwesomeIcon icon={faCode} className="tc-area-icon" />
                </div>
                <h3 className="tc-area-title">Technical & Digital Skills</h3>
                <ul className="tc-area-list">
                  <li>Advanced Technical Training</li>
                  <li>Full Stack Development</li>
                  <li>Competitive Coding</li>
                  <li>Programming Skills</li>
                  <li>Core Technical Training</li>
                </ul>
              </div>

              {/* Card 4: Industry & Placement Readiness */}
              <div className="tc-area-card card-purple">
                <div className="tc-area-icon-wrap">
                  <FontAwesomeIcon icon={faBriefcase} className="tc-area-icon" />
                </div>
                <h3 className="tc-area-title">Industry & Placement Readiness</h3>
                <ul className="tc-area-list">
                  <li>Company-Specific Training</li>
                  <li>Placement Readiness</li>
                  <li>Mock Interviews</li>
                  <li>Industry Expert Sessions</li>
                  <li>Technical & HR Interview Preparation</li>
                </ul>
              </div>

              {/* Card 5: Innovation & Competitive Skills */}
              <div className="tc-area-card card-pink">
                <div className="tc-area-icon-wrap">
                  <FontAwesomeIcon icon={faTrophy} className="tc-area-icon" />
                </div>
                <h3 className="tc-area-title">Innovation & Competitive Skills</h3>
                <ul className="tc-area-list">
                  <li>Boot Camps</li>
                  <li>Hackathons</li>
                  <li>Coding Contests</li>
                  <li>Skill Enhancement Programs</li>
                  <li>Project-Based Challenges</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Annual Training Impact Section */}
          <section className="tc-impact-section">
            <div className="tc-impact-header">
              <h2 className="tc-impact-main-title">Annual Training Impact</h2>
              <div className="tc-impact-divider">
                <span className="tc-divider-line"></span>
                <span className="tc-divider-dot"></span>
                <span className="tc-divider-line"></span>
              </div>
            </div>

            <div className="tc-impact-grid">
              <div className="tc-impact-card">
                <div className="tc-impact-icon-box impact-blue">
                  <FontAwesomeIcon icon={faClock} className="tc-impact-icon" />
                </div>
                <div className="tc-impact-data">
                  <h3 className="tc-impact-number">350+</h3>
                  <p className="tc-impact-label">Training Hours</p>
                </div>
              </div>

              <div className="tc-impact-card">
                <div className="tc-impact-icon-box impact-green">
                  <FontAwesomeIcon icon={faUserGraduate} className="tc-impact-icon" />
                </div>
                <div className="tc-impact-data">
                  <h3 className="tc-impact-number">7,500+</h3>
                  <p className="tc-impact-label">Students Trained</p>
                </div>
              </div>

              <div className="tc-impact-card">
                <div className="tc-impact-icon-box impact-purple">
                  <FontAwesomeIcon icon={faBookOpen} className="tc-impact-icon" />
                </div>
                <div className="tc-impact-data">
                  <h3 className="tc-impact-number">75+</h3>
                  <p className="tc-impact-label">Training Programs</p>
                </div>
              </div>

              <div className="tc-impact-card">
                <div className="tc-impact-icon-box impact-amber">
                  <FontAwesomeIcon icon={faClipboardCheck} className="tc-impact-icon" />
                </div>
                <div className="tc-impact-data">
                  <h3 className="tc-impact-number">320+</h3>
                  <p className="tc-impact-label">Assessments Conducted</p>
                </div>
              </div>

              <div className="tc-impact-card">
                <div className="tc-impact-icon-box impact-cyan">
                  <FontAwesomeIcon icon={faChalkboardUser} className="tc-impact-icon" />
                </div>
                <div className="tc-impact-data">
                  <h3 className="tc-impact-number">120+</h3>
                  <p className="tc-impact-label">Industry Expert Sessions</p>
                </div>
              </div>

              <div className="tc-impact-card">
                <div className="tc-impact-icon-box impact-rose">
                  <FontAwesomeIcon icon={faUserCheck} className="tc-impact-icon" />
                </div>
                <div className="tc-impact-data">
                  <h3 className="tc-impact-number">600+</h3>
                  <p className="tc-impact-label">Mock Interviews</p>
                </div>
              </div>
            </div>
          </section>

          {/* Why KEC Training Section */}
          <section className="tc-why-section">
            <div className="tc-why-header">
              <h2 className="tc-why-main-title">Why KEC Training?</h2>
              <div className="tc-why-divider">
                <span className="tc-divider-line"></span>
                <span className="tc-divider-dot"></span>
                <span className="tc-divider-line"></span>
              </div>
            </div>

            <div className="tc-why-grid">
              <div className="tc-why-card">
                <div className="tc-why-icon-box icon-blue">
                  <FontAwesomeIcon icon={faSliders} className="tc-why-icon" />
                </div>
                <div className="tc-why-content">
                  <h4 className="tc-why-title">Industry Aligned</h4>
                  <p className="tc-why-desc">
                    Training programs are designed around current industry requirements and trends.
                  </p>
                </div>
              </div>

              <div className="tc-why-card">
                <div className="tc-why-icon-box icon-green">
                  <FontAwesomeIcon icon={faChartLine} className="tc-why-icon" />
                </div>
                <div className="tc-why-content">
                  <h4 className="tc-why-title">Continuous Assessment</h4>
                  <p className="tc-why-desc">
                    Regular assessments help students measure their progress and improve continuously.
                  </p>
                </div>
              </div>

              <div className="tc-why-card">
                <div className="tc-why-icon-box icon-purple">
                  <FontAwesomeIcon icon={faChalkboardUser} className="tc-why-icon" />
                </div>
                <div className="tc-why-content">
                  <h4 className="tc-why-title">Expert Mentorship</h4>
                  <p className="tc-why-desc">
                    Students learn from experienced trainers and industry professionals.
                  </p>
                </div>
              </div>

              <div className="tc-why-card">
                <div className="tc-why-icon-box icon-amber">
                  <FontAwesomeIcon icon={faLaptopCode} className="tc-why-icon" />
                </div>
                <div className="tc-why-content">
                  <h4 className="tc-why-title">Technology Enabled</h4>
                  <p className="tc-why-desc">
                    Modern platforms, coding environments and digital resources for effective learning.
                  </p>
                </div>
              </div>

              <div className="tc-why-card">
                <div className="tc-why-icon-box icon-cyan">
                  <FontAwesomeIcon icon={faRocket} className="tc-why-icon" />
                </div>
                <div className="tc-why-content">
                  <h4 className="tc-why-title">Career Focused</h4>
                  <p className="tc-why-desc">
                    Training progresses from foundational skills to placement readiness.
                  </p>
                </div>
              </div>

              <div className="tc-why-card">
                <div className="tc-why-icon-box icon-rose">
                  <FontAwesomeIcon icon={faBullseye} className="tc-why-icon" />
                </div>
                <div className="tc-why-content">
                  <h4 className="tc-why-title">Outcome Oriented</h4>
                  <p className="tc-why-desc">
                    Focus on measurable improvement in skills, confidence and employability.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Training Resources Section */}
          <section className="tc-resources-section">
            <div className="tc-resources-header">
              <h2 className="tc-resources-main-title">Training Resources</h2>
              <div className="tc-resources-divider">
                <span className="tc-divider-line"></span>
                <span className="tc-divider-dot"></span>
                <span className="tc-divider-line"></span>
              </div>
            </div>

            <div className="tc-resources-container">
              {/* Category Card 1: Training Details */}
              <div className="tc-resource-card">
                <div className="tc-res-card-header header-blue-theme">
                  <div className="tc-res-header-left">
                    <div className="tc-res-icon-badge">
                      <FontAwesomeIcon icon={faFolderOpen} className="tc-res-header-icon" />
                    </div>
                    <div className="tc-res-title-group">
                      <h3 className="tc-resource-subtitle">Training Details</h3>
                      <p className="tc-res-subtitle-meta">Annual training curriculum and academic domain details</p>
                    </div>
                  </div>
                </div>

                <div className="tc-res-card-body">
                  <div className="tc-resource-chips">
                    {trainingDetailsFiles.map((doc, i) => (
                      <a
                        key={i}
                        href={doc.file}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="tc-resource-chip"
                        title="Click to view PDF document"
                      >
                        <FontAwesomeIcon icon={faFilePdf} className="tc-chip-icon pdf-red" />
                        <span className="tc-chip-name">{doc.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Category Card 2: Training Schedules */}
              <div className="tc-resource-card">
                <div className="tc-res-card-header header-blue-theme">
                  <div className="tc-res-header-left">
                    <div className="tc-res-icon-badge">
                      <FontAwesomeIcon icon={faCalendarDays} className="tc-res-header-icon" />
                    </div>
                    <div className="tc-res-title-group">
                      <h3 className="tc-resource-subtitle">Training Schedules</h3>
                      <p className="tc-res-subtitle-meta">Batch-wise training timelines and program schedules</p>
                    </div>
                  </div>
                </div>

                <div className="tc-res-card-body">
                  <div className="tc-resource-chips">
                    {trainingSchedulesFiles.map((doc, i) => (
                      <a
                        key={i}
                        href={doc.file}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="tc-resource-chip"
                        title="Click to view PDF document"
                      >
                        <FontAwesomeIcon icon={faFilePdf} className="tc-chip-icon pdf-red" />
                        <span className="tc-chip-name">{doc.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Connect with Training Cell Section */}
          <section className="tc-contact-section">
            <div className="tc-contact-header">
              <h2 className="tc-contact-main-title">Connect with Training Cell</h2>
              <div className="tc-contact-divider">
                <span className="tc-divider-line"></span>
                <span className="tc-divider-dot"></span>
                <span className="tc-divider-line"></span>
              </div>
            </div>

            <div className="tc-contact-grid">
              {/* Personnel / Faculty Grid */}
              <div className="tc-officers-grid">
                {/* Dean Card */}
                <div className="tc-officer-card dean-card">
                  <div className="tc-officer-avatar dean-avatar">
                    <FontAwesomeIcon icon={faUserTie} className="tc-avatar-icon" />
                  </div>
                  <div className="tc-officer-info">
                    <h3 className="tc-officer-name">Dr. N. Shanthi</h3>
                    <p className="tc-officer-role">Dean - Training & Skill Enhancement</p>
                    <div className="tc-officer-contact">
                      <a href="tel:9842013355" className="tc-contact-link">
                        <FontAwesomeIcon icon={faMobileScreen} className="tc-cicon" />
                        <span>9842013355</span>
                      </a>
                      <a href="tel:04294226262" className="tc-contact-link">
                        <FontAwesomeIcon icon={faPhone} className="tc-cicon" />
                        <span>04294 – 226262</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Officer 1 */}
                <div className="tc-officer-card">
                  <div className="tc-officer-avatar">
                    <FontAwesomeIcon icon={faUserTie} className="tc-avatar-icon" />
                  </div>
                  <div className="tc-officer-info">
                    <h3 className="tc-officer-name">Mr. D. Vijay Anand</h3>
                    <p className="tc-officer-role">Assistant Training Officer</p>
                    <div className="tc-officer-contact">
                      <a href="tel:9942013143" className="tc-contact-link">
                        <FontAwesomeIcon icon={faMobileScreen} className="tc-cicon" />
                        <span>9942013143</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Officer 2 */}
                <div className="tc-officer-card">
                  <div className="tc-officer-avatar">
                    <FontAwesomeIcon icon={faUserTie} className="tc-avatar-icon" />
                  </div>
                  <div className="tc-officer-info">
                    <h3 className="tc-officer-name">Mr. B. Bizu</h3>
                    <p className="tc-officer-role">Assistant Training Officer</p>
                    <div className="tc-officer-contact">
                      <a href="tel:9865165228" className="tc-contact-link">
                        <FontAwesomeIcon icon={faMobileScreen} className="tc-cicon" />
                        <span>9865165228</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Officer 3 */}
                <div className="tc-officer-card">
                  <div className="tc-officer-avatar">
                    <FontAwesomeIcon icon={faUserTie} className="tc-avatar-icon" />
                  </div>
                  <div className="tc-officer-info">
                    <h3 className="tc-officer-name">Dr. B. S. Hari</h3>
                    <p className="tc-officer-role">Assistant Training Officer</p>
                    <div className="tc-officer-contact">
                      <a href="tel:9443399590" className="tc-contact-link">
                        <FontAwesomeIcon icon={faMobileScreen} className="tc-cicon" />
                        <span>9443399590</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Communication Address Panel */}
              <div className="tc-address-panel">
                <div className="tc-address-header">
                  <FontAwesomeIcon icon={faLocationDot} className="tc-address-icon" />
                  <h3>Communication Address</h3>
                </div>
                <div className="tc-address-body">
                  <p className="tc-address-text">
                    <strong>Training Cell</strong><br />
                    Kongu Engineering College,<br />
                    Perundurai, Erode – 638 060,<br />
                    Tamil Nadu, India.
                  </p>
                  
                  <div className="tc-address-meta">
                    <div className="tc-meta-item">
                      <FontAwesomeIcon icon={faPhone} className="tc-meta-icon" />
                      <span>04294 - 226 262</span>
                    </div>
                    <div className="tc-meta-item">
                      <FontAwesomeIcon icon={faFax} className="tc-meta-icon" />
                      <span>04294 – 220087</span>
                    </div>
                  </div>

                  <div className="tc-email-box">
                    <div className="tc-email-item">
                      <FontAwesomeIcon icon={faEnvelope} className="tc-email-icon" />
                      <a href="mailto:training@kongu.edu">training@kongu.edu</a>
                    </div>
                    <div className="tc-email-item">
                      <FontAwesomeIcon icon={faEnvelope} className="tc-email-icon" />
                      <a href="mailto:training@kongu.ac.in">training@kongu.ac.in</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TrainingCell;
