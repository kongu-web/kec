import React, { useState, useEffect } from "react";
import "./admission.css";
import { Link } from "react-router-dom";

// Reuse Header & Footer
import Navbar from "../HomePage/navbar/Navbar";
import Footer from "../HomePage/Footer/Footer";

// ✅ IMPORT THE FORM
import AdmissionForm from "../AdmissionForm/AdmissionForm";
import brochurePdf from "../../assets/docs/KEC admission.pdf";

const AdmissionPage = () => {
  const [activeTab, setActiveTab] = useState("ug");
  const [openFaq, setOpenFaq] = useState(null);

  // ✅ STATE TO CONTROL THE FORM POPUP
  const [showForm, setShowForm] = useState(false); 

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // --- Course Data ---
  const courses = {
    ug: [
      { name: "B.E. Civil Engineering", link: "/civil" },
      { name: "B.E. Mechanical Engineering", link: "/mech" },
      { name: "B.E. Electronics and Communication Engineering", link: "/ece" },
      { name: "B.E. Computer Science and Engineering", link: "/cse" },
      { name: "B.Tech Chemical Engineering", link: "/chem" },
      { name: "B.E. Electrical and Electronics Engineering", link: "/eee" },
      { name: "B.E. Electronics and Instrumentation Engineering", link: "/eie" },
      { name: "B.Tech Information Technology", link: "/it" },
      { name: "B.E. Mechatronics Engineering", link: "/mts" },
      { name: "B.Tech Food Technology", link: "/foodtech" },
      { name: "B.E. Automobile Engineering", link: "/auto" },
      { name: "B.E. Computer Science and Design", link: "/csd" },
      { name: "B.Tech Artificial Intelligence and Machine Learning", link: "/aiml" },
      { name: "B.Tech Artificial Intelligence and Data Science", link: "/aids" },
      { name: "B.Arch Architecture", link: "/architecture" },
    ],
    pg: [
      { name: "M.E. Computer Science and Engineering", link: "/cse" },
      { name: "M.E. VLSI Design", link: "/ece" },
      { name: "M.E. Structural Engineering", link: "/civil" },
      { name: "M.Tech Food Technology", link: "/foodtech" },
      { name: "Master of Business Administration (MBA)", link: "/mba" },
      { name: "Master of Computer Applications (MCA)", link: "/mca" },
    ],
    applied: [
      { name: "B.Sc Computer Systems and Design", link: "/ctug" },
      { name: "B.Sc Information Systems", link: "/ctug" },
      { name: "B.Sc Software Systems", link: "/ctug" },
      { name: "M.Sc Software Systems (5 Years Integrated)", link: "/ctpg" },
    ],
  };

  const faqs = [
    {
      q: "What is the TNEA Counseling Code for KEC?",
      a: "The TNEA Counseling Code for Kongu Engineering College is 2711.",
    },
    {
      q: "Are hostel facilities available for all students?",
      a: "Yes, KEC provides separate, fully equipped hostels for boys and girls with amenities like Wi-Fi, gym, and 24/7 medical support.",
    },
    {
      q: "How are the placements at KEC?",
      // ✅ UPDATED: Shows Current (25-26) and Previous (24-25) Stats
      a: "Placements are excellent. For the current 2025-26 year, we have already secured 450+ offers (Phase 1) with a highest package of 21 LPA. In the previous 2024-25 year, we achieved 1612 offers with a highest package of 24.7 LPA.",
    },
    {
      q: "Is there transport facility available?",
      a: "Yes, we operate a fleet of buses covering Erode, Tirupur, Salem, Karur, and nearby districts for day scholars.",
    },
    {
      q: "How can I contact the admission office?",
      a: "You can reach the admission cell at +91 94430 20583 or email us at registrar@kongu.ac.in.",
    },
  ];

  return (
    <div className="admission-page-wrapper">
      <Navbar />

      {/* 1. HERO SECTION */}
      <section className="admission-hero">
        <div className="hero-content">
          <h1>Admission Enquiry 2026-27</h1>
          <p>
            NAAC A++ Accredited | Affiliated to Anna University | <br></br>AICTE
            Approved
          </p>
          <div className="hero-btns">
            <button
              className="btn-primary"
              onClick={() => {
                window.open(
                  "https://kec.linways.com/v4/adm-applicant/eqf?ddf=20&smId=OT5DDWQdZ9",
                  "_blank",
                  "noopener,noreferrer"
                );
              }}
            >
              UG Registration
            </button>
            <button
              className="btn-primary"
              onClick={() => {
                window.open(
                  "https://kec.linways.com/v4/adm-applicant/eqf?ddf=21&smId=2NvNiOP6nS",
                  "_blank",
                  "noopener,noreferrer"
                );
              }}
            >
              PG Registration
            </button>
            <button
              className="btn-outline"
              onClick={() => {
                const link = document.createElement("a");
                link.href = brochurePdf;
                link.download = "KEC_Admission_Brochure.pdf";
                link.click();
              }}
            >
              Download Brochure
            </button>{" "}
          </div>
        </div>
      </section>

      {/* 2. STATS STRIP */}
      <div className="stats-strip">
        <div className="stat-box">
          <h2>41 Years</h2>
          <span>Of Excellence</span>
        </div>
        <div className="stat-box">
          <h2>1691</h2>
          <span>Offers Made</span>
        </div>
        <div className="stat-box">
          <h2>24.7 LPA</h2>
          <span>Highest Salary</span>
        </div>
        <div className="stat-box">
          <h2>385</h2>
          <span>Companies Visited</span>
        </div>
      </div>

      {/* 3. PROGRAM EXPLORER */}
      <div className="section-container">
        <div className="section-header">
          <h2>Programmes Offered</h2>
          <p>Click on any course to view the department details.</p>
        </div>

        <div className="tabs-nav">
          <button
            className={`tab-btn ${activeTab === "ug" ? "active" : ""}`}
            onClick={() => setActiveTab("ug")}
          >
            Undergraduate
          </button>
          <button
            className={`tab-btn ${activeTab === "pg" ? "active" : ""}`}
            onClick={() => setActiveTab("pg")}
          >
            Postgraduate
          </button>
          <button
            className={`tab-btn ${activeTab === "applied" ? "active" : ""}`}
            onClick={() => setActiveTab("applied")}
          >
            Applied Sciences
          </button>
        </div>

        <div className="course-grid">
          {courses[activeTab].map((course, index) => (
            <Link to={course.link} key={index} className="course-link">
              <div className="course-card">
                <div className="course-icon">🎓</div>
                <div className="course-info">
                  <h4>{course.name}</h4>
                  <span>View Department ➝</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* 4. ADMISSION PROCESS */}
      <div className="process-section">
        <div className="section-header">
          <h2>Admission Process</h2>
        </div>
        <div className="steps-container">
          <div className="step-card">
            <div className="step-icon">1</div>
            <h4 className="step-title">Register</h4>
            <p className="step-desc">Create account on portal.</p>
          </div>
          <div className="step-card">
            <div className="step-icon">2</div>
            <h4 className="step-title">Apply</h4>
            <p className="step-desc">Fill form & upload docs.</p>
          </div>
          <div className="step-card">
            <div className="step-icon">3</div>
            <h4 className="step-title">Selection</h4>
            <p className="step-desc">Merit list / Counseling.</p>
          </div>
          <div className="step-card">
            <div className="step-icon">4</div>
            <h4 className="step-title">Enroll</h4>
            <p className="step-desc">Confirm your admission.</p>
          </div>
        </div>
      </div>

      {/* 5. FAQ SECTION */}
      <div className="section-container">
        <div className="section-header">
          <h2>Frequently Asked Questions</h2>
          <p>Everything you need to know about joining KEC.</p>
        </div>
        <div className="faq-container">
          {faqs.map((item, index) => (
            <div
              key={index}
              className={`faq-card ${openFaq === index ? "active" : ""}`}
              onClick={() => toggleFaq(index)}
            >
              <div className="faq-header">
                <h4 className="faq-question">{item.q}</h4>
                <span className="faq-icon">+</span>
              </div>
              <div className="faq-body">
                <p className="faq-answer">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ RENDER THE FORM (Hidden by default, shown when showForm is true) */}
      <AdmissionForm isOpen={showForm} onClose={() => setShowForm(false)} />

      <Footer />
    </div>
  );
};

export default AdmissionPage;