import React, { useState, useEffect, useMemo } from "react";
import "./FacultyMembers.css";
import Navbar from "../../../HomePage/navbar/Navbar";
import Footer from "../../../HomePage/Footer/Footer";
import { FaFilePdf, FaDownload, FaTimes, FaSearch } from "react-icons/fa";
import "../../../../App.css";
import heroBgImg from "../../../../assets/images/kvitbuilding.webp";

// Custom SVG for PDF Badge matching the design
const PdfBadgeIcon = () => (
  <svg
    className="pdf-badge-svg"
    width="28"
    height="32"
    viewBox="0 0 28 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.5 0H3.5C1.567 0 0 1.567 0 3.5V28.5C0 30.433 1.567 32 3.5 32H24.5C26.433 32 28 30.433 28 28.5V11.5L16.5 0Z"
      fill="#EE3535"
    />
    <path
      d="M16.5 0V8C16.5 9.933 18.067 11.5 20 11.5H28L16.5 0Z"
      fill="#C52222"
    />
    <rect x="2.5" y="16.5" width="23" height="11" rx="2.5" fill="#B91C1C" />
    <text
      x="14"
      y="24.8"
      fill="white"
      fontSize="7.5"
      fontWeight="900"
      fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
      textAnchor="middle"
      letterSpacing="0.6"
    >
      PDF
    </text>
  </svg>
);

// Custom SVG Download arrow icon
const DownloadArrowIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.4"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

// Department name formatter for neat card titles
const formatDocTitle = (rawName) => {
  const clean = rawName.replace(/\.pdf$/i, "").trim();
  const deptMap = {
    aids: "Artificial Intelligence and Data Science",
    "artificial intelligence and data science": "Artificial Intelligence and Data Science",
    aiml: "Artificial Intelligence and Machine Learning",
    "artificial intelligence and machine learning": "Artificial Intelligence and Machine Learning",
    auto: "Automobile Engineering",
    automobile: "Automobile Engineering",
    barch: "Department of Architecture (B.Arch)",
    "b arch": "Department of Architecture (B.Arch)",
    "b.arch": "Department of Architecture (B.Arch)",
    architecture: "Department of Architecture (B.Arch)",
    chem: "Chemical Engineering",
    chemical: "Chemical Engineering",
    "chemical engineering": "Chemical Engineering",
    chemistry: "Department of Chemistry",
    civil: "Civil Engineering",
    "civil engineering": "Civil Engineering",
    csd: "Computer Science and Design",
    "computer science and design": "Computer Science and Design",
    cse: "Computer Science and Engineering",
    "computer science and engineering": "Computer Science and Engineering",
    ctpg: "Computer Technology (PG) M.Sc Software Systems (5 Years Integrated)",
    "computer technology (pg) - m.sc software systems (5years integrated)": "Computer Technology (PG) M.Sc Software Systems (5 Years Integrated)",
    ctug: "Computer Technology (UG) B.Sc (CSD, IS, SS)",
    "computer technology (ug) - b.sc(csd, is, ss)": "Computer Technology (UG) B.Sc (CSD, IS, SS)",
    ece: "Electronics and Communication Engineering",
    "electronics and communication engineering": "Electronics and Communication Engineering",
    eee: "Electrical and Electronics Engineering (EEE)",
    eie: "Electronics and Instrumentation Engineering",
    "electronics and instrumentation engineering": "Electronics and Instrumentation Engineering",
    english: "Department of English",
    foodtech: "Food Technology",
    "food technology": "Food Technology",
    it: "Information Technology",
    "information technology": "Information Technology",
    maths: "Department of Mathematics",
    mathematics: "Department of Mathematics",
    mba: "Master of Business Administration (MBA)",
    "master of business administration": "Master of Business Administration (MBA)",
    mca: "Master of Computer Applications (MCA)",
    "master of computer applications": "Master of Computer Applications (MCA)",
    mech: "Mechanical Engineering",
    mechanical: "Mechanical Engineering",
    "mechanical engineering": "Mechanical Engineering",
    mts: "Mechatronics Engineering",
    mechatronics: "Mechatronics Engineering",
    "mechatronics engineering": "Mechatronics Engineering",
    physics: "Department of Physics",
  };

  const lower = clean.toLowerCase();
  if (deptMap[lower]) {
    return deptMap[lower];
  }

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
  // folder optional
}

// Sort alphabetically
facultyPdfFiles.sort((a, b) => a.name.localeCompare(b.name));

const FacultyMembers = () => {
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

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

  const filteredDocs = useMemo(() => {
    if (!searchTerm.trim()) return facultyPdfFiles;
    const term = searchTerm.toLowerCase();
    return facultyPdfFiles.filter((doc) =>
      doc.name.toLowerCase().includes(term)
    );
  }, [searchTerm]);

  return (
    <div className="faculty-members-wrapper">
      <Navbar />

      {/* ================= HERO SECTION BANNER ================= */}
      <section
        className="faculty-hero-banner"
        style={{ backgroundImage: `url(${heroBgImg})` }}
      >
        <div className="faculty-hero-overlay" />

        <div className="faculty-hero-content">
          <h1 className="faculty-hero-title">Faculty Members</h1>
        </div>
      </section>

      {/* ================= MAIN DIRECTORY LIST ================= */}
      <main className="faculty-members-main">
        <div className="faculty-members-container">
          {/* SEARCH & FILTER BAR */}
          <div className="faculty-search-wrapper">
            <div className="faculty-search-box">
              <FaSearch className="faculty-search-icon" />
              <input
                type="text"
                placeholder="Search department (e.g., Computer Science, Mechanical, MBA)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="faculty-search-input"
              />
              {searchTerm && (
                <button
                  className="faculty-search-clear"
                  onClick={() => setSearchTerm("")}
                  title="Clear search"
                >
                  <FaTimes />
                </button>
              )}
            </div>
          </div>

          {/* CARDS GRID */}
          {filteredDocs.length > 0 ? (
            <div className="faculty-docs-grid">
              {filteredDocs.map((doc, index) => (
                <div
                  key={index}
                  onClick={(e) => handleCardClick(e, doc)}
                  className="faculty-doc-card"
                  title={`View & Download ${doc.name}`}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      handleCardClick(e, doc);
                    }
                  }}
                >
                  <div className="faculty-doc-icon">
                    <PdfBadgeIcon />
                  </div>

                  <div className="faculty-doc-info">
                    <span className="faculty-doc-name">{doc.name}</span>
                  </div>

                  <div
                    className="faculty-doc-action"
                    title="Download / View PDF"
                  >
                    <DownloadArrowIcon />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="faculty-empty-state">
              <p>No department found matching &ldquo;{searchTerm}&rdquo;</p>
              <button
                className="faculty-reset-btn"
                onClick={() => setSearchTerm("")}
              >
                Show All Departments
              </button>
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

            {/* Modal Body */}
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
