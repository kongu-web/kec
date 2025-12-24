import React, { useState, useEffect } from "react";
import "./admission.css";
import { Link } from "react-router-dom";

// Reuse Header & Footer
import Navbar from "../HomePage/navbar/Navbar";
import Footer from "../HomePage/Footer/Footer";

// ✅ IMPORT THE FORM (Check that the path matches where you saved AdmissionForm.jsx)
// If AdmissionForm is in the same folder, use './AdmissionForm'
// If it is in components/AdmissionForm, use '../AdmissionForm/AdmissionForm'
import AdmissionForm from "../AdmissionForm/AdmissionForm";

const AdmissionPage = () => {
  const [activeTab, setActiveTab] = useState("ug");
  const [openFaq, setOpenFaq] = useState(null);

  // ✅ STATE TO CONTROL THE FORM POPUP
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  // --- Course Data ---
  const courses = {
    ug: [
      { name: "B.E. Civil Engineering", link: "/civil" },
      { name: "B.E. Mechanical Engineering", link: "/mech" },
      { name: "B.E. Electronics & Comm (ECE)", link: "/ece" },
      { name: "B.E. Computer Science (CSE)", link: "/cse" },
      { name: "B.Tech Chemical Engineering", link: "/chem" },
      { name: "B.E. Electrical & Electronics (EEE)", link: "/eee" },
      { name: "B.E. Electronics & Instru (EIE)", link: "/eie" },
      { name: "B.Tech Information Tech (IT)", link: "/it" },
      { name: "B.E. Mechatronics", link: "/mts" },
      { name: "B.Tech Food Technology", link: "/foodtech" },
      { name: "B.E. Automobile Engineering", link: "/auto" },
      { name: "B.E. Computer Science & Design", link: "/csd" },
      { name: "B.Tech AI & Machine Learning", link: "/aiml" },
      { name: "B.Tech AI & Data Science", link: "/aids" },
      { name: "B.Arch (Architecture)", link: "/architecture" },
    ],
    pg: [
      { name: "M.E. Computer Science", link: "/cse" },
      { name: "M.E. VLSI Design", link: "/ece" },
      { name: "M.E. Structural Engg", link: "/civil" },
      { name: "M.Tech Food Technology", link: "/foodtech" },
      { name: "MBA (Business Admin)", link: "/mba" },
      { name: "MCA (Computer Apps)", link: "/mca" },
    ],
    applied: [
      { name: "B.Sc Computer Systems & Design", link: "/ctug" },
      { name: "B.Sc Information Systems", link: "/ctug" },
      { name: "B.Sc Software Systems", link: "/ctug" },
      { name: "M.Sc Software Systems (5 Yrs)", link: "/ctpg" },
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
      a: "KEC has an excellent placement record. In the 2024-25 academic year, over 385+ companies visited, making 1691+ offers with a highest package of 24.7 LPA.",
    },
    {
      q: "Is there transport facility available?",
      a: "Yes, we operate a fleet of buses covering Erode, Tirupur, Salem, Karur, and nearby districts for day scholars.",
    },
    {
      q: "How can I contact the admission office?",
      a: "You can reach the admission cell at 04294-226555 or email us at principal@kongu.ac.in.",
    },
  ];

  return (
    <div className="admission-page-wrapper">
      <Navbar />

      {/* 1. HERO SECTION */}
      <section className="admission-hero">
        <div className="hero-content">
          <h1>TRANSFORM YOURSELF</h1>
          <p>Admissions Open 2025-26 | NAAC A++ Accredited | AICTE Approved</p>
          <div className="hero-btns">
            {/* ✅ CONNECTED BUTTON */}
            <button className="btn-primary" onClick={handleOpenForm}>
              Enquiry Now
            </button>
            <button className="btn-outline">Download Brochure</button>
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

      {/* ✅ FLOATING ENQUIRE BUTTON (Connected) */}
      {/* <button className="floating-enquire-btn" onClick={handleOpenForm}>
        <span className="btn-icon-float">💬</span>
        Enquire Now
      </button> */}

      {/* ✅ RENDER THE FORM (Hidden by default, shown when isOpen is true) */}
      <AdmissionForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />

      <Footer />
    </div>
  );
};

export default AdmissionPage;
