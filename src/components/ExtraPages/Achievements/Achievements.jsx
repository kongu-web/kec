import React, { useState, useEffect } from "react";
import "./Achievements.css";
import Footer from "../../HomePage/Footer/Footer";
import ScrollToTopButton from "../../ScrollToTopButton";
import Section from "../../HomePage/Section/Section";
import Navbar from "../../HomePage/navbar/Navbar";
import Spinner from "../../Spinner";
import Slider from "./Slider/Slider";

// Load faculty achievement images
const importAll = (r) =>
  r.keys().map((key) => ({
    src: r(key),
    name: key
      .split("/")
      .pop()
      .replace(/\.[^/.]+$/, ""),
    rawName: key, // Keep the raw filename for troubleshooting
  }));

let facultyImages = importAll(
  require.context(
    "../../../assets/images/Achievements/Faculties",
    false,
    /\.(png|jpe?g|jpg|JPG|svg)$/
  )
);

// Extract year from filename and sort descending
facultyImages.sort((a, b) => {
  const extractYear = (str) => {
    const match = str.match(/\b(19|20)\d{2}\b/);
    return match ? parseInt(match[0]) : 0;
  };
  return extractYear(b.name) - extractYear(a.name);
});

// Load student achievement PDFs
const studentPDFs = importAll(
  require.context("../../../assets/docs/Achievements/Students", false, /\.pdf$/)
);

const Achievements = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("faculty"); // 'faculty' | 'student'

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const splitLines = (name) => {
    const words = name.split(" ");
    const mid = Math.ceil(words.length / 2);
    return {
      line1: words.slice(0, mid).join(" "),
      line2: words.slice(mid).join(" "),
    };
  };

  const handleCardClick = (img) => setSelectedImage(img);
  const handleCloseModal = () => setSelectedImage(null);

  return loading ? (
    <Spinner />
  ) : (
    <>
      {/* <Section/> */}
      <Navbar />
      <div className="achievements-container">
        <h2 className="achievements-title">Achievements</h2>

        {/* Tab Switch */}
        <div className="achievements-navsection">
          <button
            className={category === "faculty" ? "active" : ""}
            onClick={() => setCategory("faculty")}
          >
            Faculty Achievements
          </button>
          <button
            className={category === "student" ? "active" : ""}
            onClick={() => setCategory("student")}
          >
            Student Achievements
          </button>
        </div>

        {/* Faculty View */}
        {category === "faculty" && (
          <div className="achievements-grid">
            {facultyImages.map((img, idx) => {
              const { line1, line2 } = splitLines(img.name);
              return (
                <div
                  className="achievement-card"
                  key={idx}
                  onClick={() => handleCardClick(img)}
                >
                  <img
                    src={img.src}
                    alt={img.name}
                    className="achievement-img"
                    onError={(e) => {
                      console.log("Image load error for:", img.rawName);
                      e.target.onerror = null;
                      // Attempt to load using encoded URI
                      const fileName = encodeURIComponent(img.name);
                      e.target.src = `/assets/images/Achievements/Faculties/${fileName}`;
                    }}
                  />
                  <p className="achievement-caption">
                    {line1}
                    <br />
                    {line2}
                  </p>
                </div>
              );
            })}
          </div>
        )}

        {/* Student View */}
        {category === "student" && (
          <>
            <Slider />
            <div className="achievements-pdf-list">
              {studentPDFs.map((pdf, idx) => (
                <div key={idx} className="achievement-pdf-item">
                  <a
                    href={pdf.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                  >
                    📄 {pdf.name}
                  </a>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Modal */}
        {selectedImage && (
          <div className="achievements-modal" onClick={handleCloseModal}>
            <div className="achievements-modal-content">
              <img
                src={selectedImage.src}
                alt={selectedImage.name}
                className="achievements-modal-image"
              />
              <div className="achievements-modal-text">
                {selectedImage.name}
              </div>
              <button
                className="achievements-modal-close"
                onClick={handleCloseModal}
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default Achievements;
