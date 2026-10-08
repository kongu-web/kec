import React, { useState, useEffect } from "react";
import "./FacultyMembers.css";
import Navbar from "../../../HomePage/navbar/Navbar";
import Footer from "../../../HomePage/Footer/Footer";
import { FaFilePdf, FaDownload, FaTimes } from "react-icons/fa";
import "../../../../App.css";

// Department name formatter for neat card titles
const formatDocTitle = (rawName) => {
  const clean = rawName.replace(/\.pdf$/i, "").trim();
  const deptMap = {
    aids: "Artificial Intelligence & Data Science",
    aiml: "Artificial Intelligence & Machine Learning",
    auto: "Automobile Engineering",
    automobile: "Automobile Engineering",
    barch: "Department of Architecture (B.Arch)",
    "b arch": "Department of Architecture (B.Arch)",
    "b.arch": "Department of Architecture (B.Arch)",
    "b_arch": "Department of Architecture (B.Arch)",
    architecture: "Department of Architecture (B.Arch)",
    chem: "Chemical Engineering",
    chemical: "Chemical Engineering",
    chemistry: "Department of Chemistry",
    civil: "Civil Engineering",
    csd: "Computer Science & Design",
    cse: "Computer Science & Engineering",
    ctpg: "Computer Technology (PG)",
    ctug: "Computer Technology (UG)",
    ece: "Electronics & Communication Engineering",
    eee: "Electrical & Electronics Engineering",
    eie: "Electronics & Instrumentation Engineering",
    english: "Department of English",
    foodtech: "Food Technology",
    it: "Information Technology",
    maths: "Department of Mathematics",
    mba: "Management Studies (MBA)",
    mca: "Computer Applications (MCA)",
    mech: "Mechanical Engineering",
    mechanical: "Mechanical Engineering",
    mts: "Mechatronics Engineering",
    mechatronics: "Mechatronics Engineering",
    physics: "Department of Physics",
  };

  const lower = clean.toLowerCase();
  if (deptMap[lower]) {
    return deptMap[lower];
  }

  // Capitalize words if not in map
  return clean
    .split(/[-_ ]+/)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
};

// Import all PDFs from src/assets/docs/Faculty Members
let facultyPdfFiles = [];

try {
  const contextDocs = require.context(
    "../../../../assets/docs/Faculty Members",
    false,
    /\.pdf$/
  );
  contextDocs.keys().forEach((key) => {
    const rawName = key.replace("./", "");
    facultyPdfFiles.push({
      name: formatDocTitle(rawName),
      rawName: rawName,
      file: contextDocs(key),
    });
  });
} catch (e) {
  console.log("Faculty Members folder check:", e);
}

// Also check src/assets/docs/Footer/FacultyMembers if present
try {
  const contextFooter = require.context(
    "../../../../assets/docs/Footer/FacultyMembers",
    false,
    /\.pdf$/
  );
  contextFooter.keys().forEach((key) => {
    const rawName = key.replace("./", "");
    facultyPdfFiles.push({
      name: formatDocTitle(rawName),
      rawName: rawName,
      file: contextFooter(key),
    });
  });
} catch (e) {
  // directory might be empty or not present
}

// Sort alphabetically
facultyPdfFiles.sort((a, b) => a.name.localeCompare(b.name));

const FacultyMembers = () => {
  const [selectedPdf, setSelectedPdf] = useState(null);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedPdf(null);
      }
    };
    if (selectedPdf) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedPdf]);

  const handleCardClick = (e, doc) => {
    e.preventDefault();
    setSelectedPdf(doc);
  };

  const handleCloseModal = () => {
    setSelectedPdf(null);
  };

  return (
    <div className="faculty-members-wrapper">
      <Navbar />

      <main className="faculty-members-main">
        <div className="faculty-members-container">
          <h1 className="faculty-members-title">Faculty Members</h1>

          {facultyPdfFiles.length > 0 ? (
            <div className="faculty-docs-grid">
              {facultyPdfFiles.map((doc, index) => (
                <div
                  key={index}
                  onClick={(e) => handleCardClick(e, doc)}
                  className="faculty-doc-card"
                  title={`View ${doc.name}`}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      handleCardClick(e, doc);
                    }
                  }}
                >
                  <div className="faculty-doc-icon">
                    <FaFilePdf />
                  </div>
                  <div className="faculty-doc-info">
                    <span className="faculty-doc-name">{doc.name}</span>
                  </div>
                  <div className="faculty-doc-action" title="View Document">
                    <FaDownload />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="faculty-empty-state">
              <p>Faculty member documents will be available shortly.</p>
            </div>
          )}
        </div>
      </main>

      {/* PDF POPUP MODAL */}
      {selectedPdf && (
        <div className="pdf-modal-overlay" onClick={handleCloseModal}>
          <div
            className="pdf-modal-container"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="pdf-modal-header">
              <div className="pdf-modal-title-group">
                <div className="pdf-modal-icon">
                  <FaFilePdf />
                </div>
                <h3 className="pdf-modal-title">{selectedPdf.name}</h3>
              </div>

              <div className="pdf-modal-actions">
                <a
                  href={selectedPdf.file}
                  download={`${selectedPdf.name}.pdf`}
                  className="pdf-modal-btn download"
                  title="Download PDF"
                >
                  <FaDownload />
                  <span>Download</span>
                </a>
                <button
                  onClick={handleCloseModal}
                  className="pdf-modal-btn close"
                  title="Close (Esc)"
                  aria-label="Close PDF Viewer"
                >
                  <FaTimes />
                </button>
              </div>
            </div>

            {/* Modal Body - Embedded Scrollable PDF Viewer */}
            <div className="pdf-modal-body">
              <iframe
                src={`${selectedPdf.file}#toolbar=1&navpanes=0&scrollbar=1&view=FitH`}
                title={selectedPdf.name}
                className="pdf-modal-iframe"
              />
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default FacultyMembers;
