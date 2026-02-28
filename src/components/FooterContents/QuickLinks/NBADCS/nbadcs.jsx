import React from "react";
import "./nbadcs.css";
import Footer from "../../../HomePage/Footer/Footer";
import Section from "../../../HomePage/Section/Section";
import Navbar from "../../../HomePage/navbar/Navbar";
import "../../../../App.css";

// Import all NBADCS PDFs from folder
const ariiacontext = require.context(
  "../../../../assets/docs/Footer/NBADCS",
  false,
  /\.pdf$/
);

const ariiaFiles = ariiacontext
  .keys()
  .map((key) => ({
    name: key.replace("./", ""),
    file: ariiacontext(key),
  }))
  .sort((a, b) => b.name.localeCompare(a.name)); // Descending order

const Nbadcs = () => {
  return (
    <>
      {/* <Section /> */}
      <Navbar />

      <div className="ariia-container">
        <h1 className="page-title">NBA - DCS</h1>

        <div className="ariia-links">
          {ariiaFiles.map((pdf, index) => (
            <div key={index} className="ariia-link-item">
              <a
                href={pdf.file}
                target="_blank"
                rel="noopener noreferrer"
              >
                {pdf.name.slice(3)}
              </a>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Nbadcs;
