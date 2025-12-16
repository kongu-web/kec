import React, { useState } from "react";
import "./NirfPage.css";
import Footer from "../../../HomePage/Footer/Footer";
import ScrollToTopButton from "../../../ScrollToTopButton";
import Section from "../../../HomePage/Section/Section";
import Navbar from "../../../HomePage/navbar/Navbar";
import "../../../../App.css";

// Dynamically import all PDF files in the folder
const nirfContext = require.context("../../../../assets/docs/Footer/Nirf", false, /\.pdf$/);
const nirfFiles = nirfContext
  .keys()
  .map((key) => ({
    name: key.replace("./", ""),
    file: nirfContext(key),
  }))
  .sort((a, b) => b.name.localeCompare(a.name)); // Sort descending

// Dynamically import all images from nirf facilities folder
const imageContext = require.context("../../../../assets/images/Footer/NirfPage", false, /\.(png|jpe?g|webp)$/);
const nirfImages = imageContext
  .keys()
  .map((key) => imageContext(key));

const NirfPage = () => {
  const [activeTab, setActiveTab] = useState("mhrd");

  return (
    <>
      <Section />
      <Navbar />
      <div className="nirf-container">
        <h1 className="page-title">NIRF Reports</h1>

        <div className="nirf-tabs">
          <button
            className={activeTab === "mhrd" ? "active" : ""}
            onClick={() => setActiveTab("mhrd")}
          >
            MHRD - NIRF RANKING
          </button>
          <button
            className={activeTab === "facilities" ? "active" : ""}
            onClick={() => setActiveTab("facilities")}
          >
            Facilities for Physically Challenged Students
          </button>
        </div>

        <div className="nirf-content">
          {activeTab === "mhrd" ? (
            <div className="nirf-links">
              {nirfFiles.map((pdf, index) => (
                <div key={index} className="nirf-link-item">
                  <a
                    href={pdf.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                  >
                    {pdf.name.substring(3)} {/* Remove first 3 characters */}
                  </a>
                </div>
              ))}
            </div>
          ) : (
            <div className="nirf-facilities">
              <p>
                Kongu Engineering College provides various facilities to ensure
                accessibility and convenience for physically challenged students
                including:
              </p>
              <ul>
                <li>Wheelchair accessible buildings and pathways</li>
                <li>Elevators and ramps in academic and hostel blocks</li>
                <li>Special seating arrangements in classrooms and labs</li>
                <li>Accessible restrooms in every department</li>
                <li>Dedicated assistance and support staff</li>
              </ul>

              <div className="nirf-facilities-gallery">
                {nirfImages.map((src, index) => (
                    <div key={index} className="nirf-image-card">
                    <img src={src} alt={`Facility ${index + 1}`} className="nirf-card-img" />
                    </div>
                ))}
            </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default NirfPage;
