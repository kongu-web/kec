import React, { useState } from "react";
import "./Feedback.css";
import Section from "../../../HomePage/Section/Section";
import Navbar from "../../../HomePage/navbar/Navbar";
import Footer from "../../../HomePage/Footer/Footer";
import ScrollToTopButton from "../../../ScrollToTopButton";

const sections = [
  { id: "parents", label: "Parents Feedback", formUrl: "https://forms.gle/du4uNPdwLnfpgyWk8"},
  { id: "employer", label: "Employer Feedback", formUrl: "https://forms.gle/583VijurHLn7L239A"},
  { id: "alumni", label: "Alumni Feedback", formUrl: "https://forms.gle/KwZSfkigK6yXu1vv5"},
  { id: "students", label: "Student Feedback", formUrl: "https://forms.gle/Xu3QqyMQuZA8XpDD7"}
];

const Feedback = () => {
  const [activeSection, setActiveSection] = useState("parents");

  return (
    <>
      <Navbar />
      <Section title="Feedback" />
      <div className="feedback-main-container">
        <div className="feedback-selector-navbar">
          {sections.map((sec) => (
            <button
              key={sec.id}
              className={`feedback-tab-button ${activeSection === sec.id ? "active" : ""}`}
              onClick={() => setActiveSection(sec.id)}
            >
              {sec.label}
            </button>
          ))}
        </div>

        {sections.map(
          (sec) =>
            sec.id === activeSection && (
              <div key={sec.id} className="feedback-form-container">
                <h2>{sec.label}</h2>
                <iframe
                  title={sec.label}
                  src={sec.formUrl}
                  width="100%"
                  height="800"
                  frameBorder="0"
                  className="feedback-form-iframe"
                >
                  Loading…
                </iframe>
              </div>
            )
        )}

        <p className="feedback-suggestion-text">
          Send your suggestions to <a href="mailto:feedback@kongu.edu">feedback@kongu.edu</a>
        </p>
      </div>
      <ScrollToTopButton />
      <Footer />
    </>
  );
};

export default Feedback;
