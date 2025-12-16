import React from "react";
import "./StrategicPlan.css";
import Footer from "../../../HomePage/Footer/Footer";
import Section from "../../../HomePage/Section/Section";
import Navbar from "../../../HomePage/navbar/Navbar";
import ScrollToTopButton from "../../../ScrollToTopButton";
import "../../../../App.css"; 

// Import all ARIIA PDFs from folder
const ariiacontext = require.context(
  "../../../../assets/docs/Footer/StrategicPlan", false, /\.pdf$/
);
const ariiaFiles = ariiacontext
  .keys()
  .map((key) => ({
    name: key.replace("./", ""),
    file: ariiacontext(key),
  }))
  .sort((a, b) => b.name.localeCompare(a.name)); // Descending order

const StrategicPlan = () => {
  return (
    <>
      <Section />
      <Navbar />
      <div className="ariia-container">
        <h1 className="page-title">
          Strategic Plan
        </h1>
        <div className="ariia-links">
          {ariiaFiles.map((pdf, index) => (
            <div key={index} className="ariia-link-item">
              <a href={pdf.file}  target="_blank" rel="noopener noreferrer">
                {pdf.name.slice(6)} {/* Remove first 6 characters like "ARI-20..." */}
              </a>
            </div>
          ))}
        </div>
      </div>
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default StrategicPlan;
