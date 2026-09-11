import React, { useState, useEffect } from "react";
import "./SkillEnhancementCell.css";
import Navbar from "../../HomePage/navbar/Navbar";
import Footer from "../../HomePage/Footer/Footer";
import Spinner from "../../Spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpen,
  faUserGraduate,
  faCertificate,
  faAward,
  faGraduationCap,
  faChartLine,
  faGear,
  faLightbulb,
  faArrowTrendUp,
  faArrowsLeftRight,
  faCircleCheck,
  faInfinity,
  faLaptopCode,
  faCogs,
  faDraftingCompass,
  faBriefcase,
  faBuilding,
  faIndustry,
  faLayerGroup,
  faUserTie,
  faMobileScreen,
  faPhone,
  faLocationDot,
  faFax,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";

const SkillEnhancementCell = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const objectives = [
    {
      icon: faArrowTrendUp,
      title: "Industry-Ready Skills",
      desc: "Enhance industry-ready skills among students through structured and practical learning.",
      colorClass: "obj-blue"
    },
    {
      icon: faArrowsLeftRight,
      title: "Bridge the Skill Gap",
      desc: "Bridge the academia–industry skill gap by aligning learning with current industry expectations.",
      colorClass: "obj-green"
    },
    {
      icon: faCircleCheck,
      title: "Certification-Based Learning",
      desc: "Promote professional certification and technology-oriented learning to strengthen student profiles.",
      colorClass: "obj-purple"
    },
    {
      icon: faInfinity,
      title: "Lifelong Learning",
      desc: "Encourage continuous upskilling, self-learning and employability throughout a student's career.",
      colorClass: "obj-amber"
    }
  ];

  const learningDomains = [
    {
      icon: faLaptopCode,
      title: "Technical & Digital Skills",
      colorClass: "card-blue",
      items: [
        "Programming & software development",
        "Machine Learning & Deep Learning",
        "Data Analytics & Power BI",
        "Cloud & DevOps",
        "Web & mobile application development"
      ]
    },
    {
      icon: faCogs,
      title: "Industrial & Engineering Skills",
      colorClass: "card-green",
      items: [
        "IIoT & Node-RED",
        "PLC & SCADA",
        "Factory Automation",
        "Embedded & IoT systems",
        "Control systems & MATLAB"
      ]
    },
    {
      icon: faDraftingCompass,
      title: "Design & Professional Tools",
      colorClass: "card-orange",
      items: [
        "CAD / CAE applications",
        "AutoCAD & SolidWorks",
        "HyperMesh & Fusion",
        "MATLAB / EDA tools",
        "Process engineering tools"
      ]
    },
    {
      icon: faBriefcase,
      title: "Career & Professional Skills",
      colorClass: "card-purple",
      items: [
        "Communication skills",
        "Career advancement",
        "Interview preparation",
        "Competitive programming",
        "Professional certifications"
      ]
    }
  ];

  const collaborations = [
    {
      partner: "L&T EduTech",
      tags: ["Digital IIOT", "Power Engineering", "IIOT"],
      icon: faIndustry,
      themeClass: "collab-blue"
    },
    {
      partner: "HCL Tech",
      tags: ["GenAI", "Cloud Computing", "Machine Learning"],
      icon: faBuilding,
      themeClass: "collab-green"
    },
    {
      partner: "NASSCOM FutureSkills Prime",
      tags: ["Certification learning with MeitY, GoI"],
      icon: faAward,
      themeClass: "collab-purple"
    },
    {
      partner: "IBM SkillsBuild",
      tags: ["GenAI Bootcamp & Hackathon"],
      icon: faLaptopCode,
      themeClass: "collab-amber"
    },
    {
      partner: "Bajaj Manufacturing Systems",
      tags: ["TPM practices exposure"],
      icon: faCogs,
      themeClass: "collab-cyan"
    }
  ];

  const studentValues = [
    {
      icon: faBookOpen,
      title: "Beyond the Curriculum",
      desc: "Provides opportunities to learn specialised technologies and professional tools that complement academic learning.",
      colorClass: "val-blue"
    },
    {
      icon: faLaptopCode,
      title: "Practical Exposure",
      desc: "Connects learning with hands-on activities, software tools, simulations, workshops and technology-based practice.",
      colorClass: "val-teal"
    },
    {
      icon: faAward,
      title: "Recognised Skills",
      desc: "Certification pathways help students demonstrate additional competencies and strengthen their professional profile.",
      colorClass: "val-purple"
    },
    {
      icon: faIndustry,
      title: "Industry Relevance",
      desc: "Training responds to emerging technologies and changing skill requirements across different engineering and technology domains.",
      colorClass: "val-orange"
    },
    {
      icon: faBriefcase,
      title: "Placement Preparation",
      desc: "Professional skills, certifications, industry exposure and specialised training strengthen placement readiness.",
      colorClass: "val-green"
    },
    {
      icon: faArrowTrendUp,
      title: "Continuous Upskilling",
      desc: "Students can progressively build their capabilities through multiple learning opportunities during their academic journey.",
      colorClass: "val-indigo"
    },
    {
      icon: faLightbulb,
      title: "Confidence Building",
      desc: "Practical learning and professional development help students build confidence to face real-world challenges.",
      colorClass: "val-amber"
    },
    {
      icon: faLayerGroup,
      title: "Interdisciplinary Learning",
      desc: "Encourages complementary skills across technology and engineering domains and effective cross-disciplinary collaboration.",
      colorClass: "val-rose"
    }
  ];

  return loading ? (
    <Spinner />
  ) : (
    <>
      <Navbar />
      <div className="sec-page">
        {/* Modern Centered Hero Section */}
        <section className="sec-hero">
          <div className="sec-hero-card">
            {/* Background Tech Decorative Floating Graphics */}
            <div className="sec-hero-bg-icons">
              <FontAwesomeIcon icon={faGraduationCap} className="sec-bg-icon bg-cap" />
              <FontAwesomeIcon icon={faChartLine} className="sec-bg-icon bg-chart" />
              <FontAwesomeIcon icon={faGear} className="sec-bg-icon bg-gear" />
              <FontAwesomeIcon icon={faLightbulb} className="sec-bg-icon bg-bulb" />
            </div>

            <div className="sec-hero-container sec-hero-centered">
              <div className="sec-hero-content">
                <h1 className="sec-hero-title">
                  Skill Enhancement <span className="sec-cell-gold">Cell</span>
                </h1>

                <p className="sec-hero-desc">
                  Empowering students with industry-ready skills through structured training, certification-based learning, hands-on practice, continuous skill development and employability-focused initiatives.
                </p>

                {/* 3 Pill Badges */}
                <div className="sec-pills-container">
                  <div className="sec-pill">Industry Aligned</div>
                  <div className="sec-pill">Certification Focused</div>
                  <div className="sec-pill">Career Ready</div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Key Metrics Bar */}
          <div className="sec-stats-container">
            <div className="sec-stats-grid">
              <div className="sec-stat-card">
                <div className="sec-stat-icon-wrapper icon-blue">
                  <FontAwesomeIcon icon={faBookOpen} className="sec-stat-icon" />
                </div>
                <div className="sec-stat-info">
                  <h3 className="sec-stat-number">72</h3>
                  <p className="sec-stat-label">Non-formal courses conducted</p>
                </div>
              </div>

              <div className="sec-stat-card">
                <div className="sec-stat-icon-wrapper icon-green">
                  <FontAwesomeIcon icon={faUserGraduate} className="sec-stat-icon" />
                </div>
                <div className="sec-stat-info">
                  <h3 className="sec-stat-number">4,394</h3>
                  <p className="sec-stat-label">Students benefited through non-formal courses</p>
                </div>
              </div>

              <div className="sec-stat-card">
                <div className="sec-stat-icon-wrapper icon-purple">
                  <FontAwesomeIcon icon={faCertificate} className="sec-stat-icon" />
                </div>
                <div className="sec-stat-info">
                  <h3 className="sec-stat-number">24</h3>
                  <p className="sec-stat-label">Certification courses completed</p>
                </div>
              </div>

              <div className="sec-stat-card">
                <div className="sec-stat-icon-wrapper icon-yellow">
                  <FontAwesomeIcon icon={faAward} className="sec-stat-icon" />
                </div>
                <div className="sec-stat-info">
                  <h3 className="sec-stat-number">1,788</h3>
                  <p className="sec-stat-label">Students benefited through certifications</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Body Container */}
        <div className="sec-body-container">
          {/* SECTION 1: What We Aim To Achieve */}
          <section className="sec-objectives-section">
            <div className="sec-section-header">
              <span className="sec-badge-label">What We Aim To Achieve</span>
              <h2 className="sec-section-main-title">Objective of Skill Enhancement Cell</h2>
              <p className="sec-section-intro">
                SEC focuses on strengthening student capabilities and improving employability through relevant, continuous and industry-oriented learning.
              </p>
              <div className="sec-section-divider">
                <span className="sec-divider-line"></span>
                <span className="sec-divider-dot"></span>
                <span className="sec-divider-line"></span>
              </div>
            </div>

            <div className="sec-objectives-grid">
              {objectives.map((obj, i) => (
                <div key={i} className={`sec-objective-card ${obj.colorClass}`}>
                  <div className="sec-obj-icon-wrap">
                    <FontAwesomeIcon icon={obj.icon} className="sec-obj-icon" />
                  </div>
                  <h3 className="sec-obj-title">{obj.title}</h3>
                  <p className="sec-obj-desc">{obj.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 2: Learning Domains */}
          <section className="sec-domains-section">
            <div className="sec-section-header">
              <span className="sec-badge-label">Learning Domains</span>
              <h2 className="sec-section-main-title">Training Areas</h2>
              <p className="sec-section-intro">
                Training programmes are organised around the technical, digital, professional and career competencies reflected in the SEC activities.
              </p>
              <div className="sec-section-divider">
                <span className="sec-divider-line"></span>
                <span className="sec-divider-dot"></span>
                <span className="sec-divider-line"></span>
              </div>
            </div>

            <div className="sec-domains-grid">
              {learningDomains.map((dom, i) => (
                <div key={i} className={`sec-domain-card ${dom.colorClass}`}>
                  <div className="sec-domain-header">
                    <div className="sec-domain-icon-wrap">
                      <FontAwesomeIcon icon={dom.icon} className="sec-domain-icon" />
                    </div>
                    <h3 className="sec-domain-title">{dom.title}</h3>
                  </div>
                  <ul className="sec-domain-list">
                    {dom.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 3: Industry Collaboration */}
          <section className="sec-collab-section">
            <div className="sec-section-header">
              <span className="sec-badge-label">Industry Collaboration</span>
              <h2 className="sec-section-main-title">External Skill Development Initiatives</h2>
              <p className="sec-section-intro">
                Strategic industrial partnerships providing students with hands-on technology exposure, specialized certifications, and bootcamp challenges.
              </p>
              <div className="sec-section-divider">
                <span className="sec-divider-line"></span>
                <span className="sec-divider-dot"></span>
                <span className="sec-divider-line"></span>
              </div>
            </div>

            <div className="sec-collab-grid">
              {collaborations.map((col, i) => (
                <div key={i} className={`sec-collab-card ${col.themeClass}`}>
                  <div className="sec-collab-top">
                    <div className="sec-collab-icon-wrap">
                      <FontAwesomeIcon icon={col.icon} className="sec-collab-icon" />
                    </div>
                    <h3 className="sec-collab-partner">{col.partner}</h3>
                  </div>
                  <div className="sec-collab-tags">
                    {col.tags.map((tag, idx) => (
                      <span key={idx} className="sec-collab-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 4: Student Value */}
          <section className="sec-value-section">
            <div className="sec-section-header">
              <span className="sec-badge-label">Student Value</span>
              <h2 className="sec-section-main-title">Why Skill Enhancement Cell?</h2>
              <p className="sec-section-intro">
                SEC creates a structured pathway for students to learn beyond the curriculum, demonstrate their skills and prepare for changing industry expectations.
              </p>
              <div className="sec-section-divider">
                <span className="sec-divider-line"></span>
                <span className="sec-divider-dot"></span>
                <span className="sec-divider-line"></span>
              </div>
            </div>

            <div className="sec-value-grid">
              {studentValues.map((val, i) => (
                <div key={i} className={`sec-value-card ${val.colorClass}`}>
                  <div className="sec-value-icon-wrap">
                    <FontAwesomeIcon icon={val.icon} className="sec-value-icon" />
                  </div>
                  <div className="sec-value-content">
                    <h4 className="sec-value-title">{val.title}</h4>
                    <p className="sec-value-desc">{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 5: Connect with Skill Enhancement Cell */}
          <section id="sec-contact-section" className="sec-contact-section">
            <div className="sec-contact-header">
              <h2 className="sec-contact-main-title">Connect with Skill Enhancement Cell</h2>
              <div className="sec-contact-divider">
                <span className="sec-divider-line"></span>
                <span className="sec-divider-dot"></span>
                <span className="sec-divider-line"></span>
              </div>
            </div>

            <div className="sec-contact-grid">
              {/* Personnel / Faculty Grid */}
              <div className="sec-officers-grid">
                {/* Dean Card */}
                <div className="sec-officer-card dean-card">
                  <div className="sec-officer-avatar dean-avatar">
                    <FontAwesomeIcon icon={faUserTie} className="sec-avatar-icon" />
                  </div>
                  <div className="sec-officer-info">
                    <h3 className="sec-officer-name">Dr. N. Shanthi</h3>
                    <p className="sec-officer-role">Dean - Training & Skill Enhancement</p>
                    <div className="sec-officer-contact">
                      <a href="tel:9842013355" className="sec-contact-link">
                        <FontAwesomeIcon icon={faMobileScreen} className="sec-cicon" />
                        <span>98420 13355</span>
                      </a>
                      <a href="tel:04294226262" className="sec-contact-link">
                        <FontAwesomeIcon icon={faPhone} className="sec-cicon" />
                        <span>04294 – 226262</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Coordinator 1 */}
                <div className="sec-officer-card">
                  <div className="sec-officer-avatar">
                    <FontAwesomeIcon icon={faUserTie} className="sec-avatar-icon" />
                  </div>
                  <div className="sec-officer-info">
                    <h3 className="sec-officer-name">Dr. N. Sasipriyaa</h3>
                    <p className="sec-officer-role">Faculty Coordinator</p>
                    <div className="sec-officer-contact">
                      <a href="tel:+919976798392" className="sec-contact-link">
                        <FontAwesomeIcon icon={faMobileScreen} className="sec-cicon" />
                        <span>+91 99767 98392</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Coordinator 2 */}
                <div className="sec-officer-card">
                  <div className="sec-officer-avatar">
                    <FontAwesomeIcon icon={faUserTie} className="sec-avatar-icon" />
                  </div>
                  <div className="sec-officer-info">
                    <h3 className="sec-officer-name">Mr. Jony Blessing Manoj</h3>
                    <p className="sec-officer-role">Faculty Coordinator</p>
                    <div className="sec-officer-contact">
                      <a href="tel:9597600188" className="sec-contact-link">
                        <FontAwesomeIcon icon={faMobileScreen} className="sec-cicon" />
                        <span>95976 00188</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Coordinator 3 */}
                <div className="sec-officer-card">
                  <div className="sec-officer-avatar">
                    <FontAwesomeIcon icon={faUserTie} className="sec-avatar-icon" />
                  </div>
                  <div className="sec-officer-info">
                    <h3 className="sec-officer-name">Mr. Dharmaraj</h3>
                    <p className="sec-officer-role">Faculty Coordinator</p>
                    <div className="sec-officer-contact">
                      <a href="tel:+918946082644" className="sec-contact-link">
                        <FontAwesomeIcon icon={faMobileScreen} className="sec-cicon" />
                        <span>+91 89460 82644</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Coordinator 4 */}
                <div className="sec-officer-card">
                  <div className="sec-officer-avatar">
                    <FontAwesomeIcon icon={faUserTie} className="sec-avatar-icon" />
                  </div>
                  <div className="sec-officer-info">
                    <h3 className="sec-officer-name">Dr. VimalaDevi</h3>
                    <p className="sec-officer-role">Faculty Coordinator</p>
                    <div className="sec-officer-contact">
                      <a href="tel:+919965214142" className="sec-contact-link">
                        <FontAwesomeIcon icon={faMobileScreen} className="sec-cicon" />
                        <span>+91 99652 14142</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Coordinator 5 */}
                <div className="sec-officer-card">
                  <div className="sec-officer-avatar">
                    <FontAwesomeIcon icon={faUserTie} className="sec-avatar-icon" />
                  </div>
                  <div className="sec-officer-info">
                    <h3 className="sec-officer-name">Mr. M. Thangatamilan</h3>
                    <p className="sec-officer-role">Faculty Coordinator</p>
                    <div className="sec-officer-contact">
                      <a href="tel:8695263614" className="sec-contact-link">
                        <FontAwesomeIcon icon={faMobileScreen} className="sec-cicon" />
                        <span>86952 63614</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Communication Address Panel */}
              <div className="sec-address-panel">
                <div className="sec-address-header">
                  <FontAwesomeIcon icon={faLocationDot} className="sec-address-icon" />
                  <h3>Communication Address</h3>
                </div>
                <div className="sec-address-body">
                  <p className="sec-address-text">
                    <strong>Skill Enhancement Cell</strong><br />
                    Kongu Engineering College,<br />
                    Perundurai, Erode – 638 060,<br />
                    Tamil Nadu, India.
                  </p>
                  
                  <div className="sec-address-meta">
                    <div className="sec-meta-item">
                      <FontAwesomeIcon icon={faPhone} className="sec-meta-icon" />
                      <span>04294 - 226 262</span>
                    </div>
                    <div className="sec-meta-item">
                      <FontAwesomeIcon icon={faFax} className="sec-meta-icon" />
                      <span>04294 – 220087</span>
                    </div>
                  </div>

                  <div className="sec-email-box">
                    <div className="sec-email-item">
                      <FontAwesomeIcon icon={faEnvelope} className="sec-email-icon" />
                      <a href="mailto:skilldevelopment@kongu.edu">skilldevelopment@kongu.edu</a>
                    </div>
                    <div className="sec-email-item">
                      <FontAwesomeIcon icon={faEnvelope} className="sec-email-icon" />
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

export default SkillEnhancementCell;
