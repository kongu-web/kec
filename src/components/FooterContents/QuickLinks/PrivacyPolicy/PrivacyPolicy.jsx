import React, { useState } from "react";
import "./PrivacyPolicy.css";
import Navbar from "../../../HomePage/navbar/Navbar";
import Footer from "../../../HomePage/Footer/Footer";

const PrivacyPolicy = () => {
  const [activeTab, setActiveTab] = useState("intro");

  const sections = [
    {
      id: "intro",
      title: "Introduction",
      icon: "ℹ️",
      content: (
        <>
          <p>
            Welcome to Kongu Engineering College (KEC). We value your privacy
            and are committed to protecting your personal data. This Privacy
            Policy outlines how we collect, use, store, and safeguard your
            information when you visit our website or use our online services.
          </p>
          <p>
            By accessing or using our services, you consent to the data
            practices described in this policy. If you do not agree with any
            part of this policy, please discontinue the use of our website.
          </p>
        </>
      ),
    },
    {
      id: "collect",
      title: "Information We Collect",
      icon: "📋",
      content: (
        <>
          <p>
            We may collect two types of information from our website users:
          </p>
          <ul>
            <li>
              <strong>Personal Information:</strong> This includes details you
              provide voluntarily when contacting us, filling out admission
              enquiry forms, registering for alumni networks, or submitting feedback.
              Examples include your name, email address, phone number, academic history,
              and professional details.
            </li>
            <li>
              <strong>Automatically Collected Information:</strong> When you navigate
              our site, we automatically capture metadata such as your IP address,
              browser type, operating system, referring URLs, access times, and
              the specific pages you visit.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "use",
      title: "How We Use Information",
      icon: "⚙️",
      content: (
        <>
          <p>
            The information we collect is utilized for the following purposes:
          </p>
          <ul>
            <li>To process admissions, academic registrations, and queries.</li>
            <li>To enhance our website design, performance, and user experience.</li>
            <li>To communicate important announcements, newsletters, and college updates.</li>
            <li>To secure our network systems and prevent fraudulent access.</li>
            <li>To comply with legal and statutory regulations prescribed by Anna University, AICTE, NAAC, NBA, and other regulatory bodies.</li>
          </ul>
        </>
      ),
    },
    {
      id: "share",
      title: "Information Sharing",
      icon: "🤝",
      content: (
        <>
          <p>
            Kongu Engineering College does not sell, rent, or trade user personal
            information to any third-party marketing companies. We may share information
            under the following circumstances:
          </p>
          <ul>
            <li>
              <strong>Regulatory Bodies:</strong> When required by government or educational
              authorities (e.g., Anna University, AICTE) for statutory compliance.
            </li>
            <li>
              <strong>Service Providers:</strong> With trusted digital partners and hosting services
              who help operate our website, under strict confidentiality agreements.
            </li>
            <li>
              <strong>Legal Obligations:</strong> If required to do so by law or in response to
              valid legal processes (subpoenas, court orders).
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "security",
      title: "Data Security",
      icon: "🔒",
      content: (
        <>
          <p>
            We employ industry-standard administrative, technical, and physical security
            measures to protect your personal information from unauthorized access, loss,
            misuse, alteration, or destruction.
          </p>
          <p>
            While we strive to use commercially acceptable means to protect your personal
            information, please be aware that no method of transmission over the Internet or
            electronic storage is 100% secure.
          </p>
        </>
      ),
    },
    {
      id: "cookies",
      title: "Cookies & Tracking",
      icon: "🍪",
      content: (
        <>
          <p>
            Our website uses cookies to enhance your browsing experience. Cookies are small
            text files stored on your device that help us analyze web traffic, remember user
            preferences, and optimize site navigation.
          </p>
          <p>
            You can choose to accept or decline cookies. Most web browsers automatically
            accept cookies, but you can modify your browser settings to decline them if
            preferred. However, this may prevent you from taking full advantage of the website.
          </p>
        </>
      ),
    },
    {
      id: "rights",
      title: "Your Rights",
      icon: "⚖️",
      content: (
        <>
          <p>
            Depending on your relationship with KEC, you have rights regarding your personal
            data:
          </p>
          <ul>
            <li>The right to request access to the personal data we hold about you.</li>
            <li>The right to request correction or updating of any inaccurate information.</li>
            <li>The right to request the restriction of processing under specific legal conditions.</li>
          </ul>
        </>
      ),
    },
    {
      id: "contact",
      title: "Contact Us",
      icon: "✉️",
      content: (
        <>
          <p>
            If you have any questions or concerns regarding this Privacy Policy, or if you wish to exercise your data rights, please contact us:
          </p>
          <div className="contact-card">
            <h4>Office of the Registrar</h4>
            <p><strong>Kongu Engineering College</strong></p>
            <p>Perundurai, Erode, Tamil Nadu - 638060, India.</p>
            <p>📧 <strong>Email:</strong> registrar@kongu.ac.in</p>
            <p>📞 <strong>Phone:</strong> +91 94430 20583, +91 99652 77765</p>
          </div>
        </>
      ),
    },
  ];

  return (
    <div className="privacy-policy-wrapper">
      <Navbar />
      <div className="privacy-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Privacy Policy</h1>
          <p>Learn how Kongu Engineering College protects and respects your privacy</p>
        </div>
      </div>

      <div className="privacy-container">
        <div className="privacy-layout">
          {/* Sidebar Tabs */}
          <aside className="privacy-sidebar">
            <nav className="privacy-nav">
              {sections.map((sec) => (
                <button
                  key={sec.id}
                  className={`privacy-nav-btn ${activeTab === sec.id ? "active" : ""}`}
                  onClick={() => setActiveTab(sec.id)}
                >
                  <span className="nav-icon">{sec.icon}</span>
                  <span className="nav-text">{sec.title}</span>
                </button>
              ))}
            </nav>
          </aside>

          {/* Active Content Panel */}
          <main className="privacy-main-content">
            {sections.map((sec) => (
              <div
                key={sec.id}
                className={`privacy-section-panel ${activeTab === sec.id ? "show" : ""}`}
              >
                <div className="panel-header">
                  <span className="panel-icon">{sec.icon}</span>
                  <h2>{sec.title}</h2>
                </div>
                <div className="panel-body">{sec.content}</div>
              </div>
            ))}
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
