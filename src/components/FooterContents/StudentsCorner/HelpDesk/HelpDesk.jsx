import React, { useState } from "react";
import "./HelpDesk.css";
import { useNavigate } from 'react-router-dom';
import Section from "../../../HomePage/Section/Section";
import Navbar from "../../../HomePage/navbar/Navbar";
import Footer from "../../../HomePage/Footer/Footer";
import ScrollToTopButton from "../../../ScrollToTopButton";

const sections = [
  { id: "helpdesk", label: "Help Desk", formUrl: "https://forms.gle/Mnf4FzQ4ZU6AGn3e9" },
];

const HelpDesk = () => {
  const [activeSection, setActiveSection] = useState("helpdesk");
    const navigate = useNavigate();
  

  return (
    <>
      <Navbar />
      <Section title="Feedback" />
      <div className="feedback-main-container">

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
        <span onClick={() => navigate('/helpdeskcommittee')} style={{ cursor: 'pointer' }}>
                      Help Desk Committee
        </span>
        </p>
      </div>
      <ScrollToTopButton />
      <Footer />
    </>
  );
};

export default HelpDesk;
