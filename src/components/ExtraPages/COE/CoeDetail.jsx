import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { coeData } from "./Coe";
import Navbar from "../../HomePage/navbar/Navbar";
import Footer from "../../HomePage/Footer/Footer";
import { FaArrowLeft } from "react-icons/fa";
import "./CoeDetail.css";

const CoeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find the matching COE item
  const coe = coeData.find((item) => item.id === id);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!coe) {
    return (
      <>
        <Navbar />
        <div className="coe-detail-not-found">
          <h2>Centre of Excellence Not Found</h2>
          <p>The requested Centre of Excellence page does not exist or has been moved.</p>
          <button className="coe-back-btn" onClick={() => navigate("/coe")}>
            <FaArrowLeft style={{ marginRight: "8px" }} /> Back to Centres
          </button>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      {/* ===== HERO — SINGLE COE DETAIL ===== */}
      <div className="coed-hero">
        <div className="coed-hero-container">
          <div className="coed-hero-badge">{coe.category} Department</div>
          <h1 className="coed-hero-title">{coe.title.split(" - ")[1] || coe.title}</h1>
        </div>
      </div>

      {/* ===== MAIN BODY ===== */}
      <div className="coed-body">
        <div className="coed-container">
          
          <div className="coed-layout">
            {/* Left Column: Image and quick info */}
            <div className="coed-sidebar">
              <div className="coed-image-card">
                <img src={coe.image} alt={coe.title} className="coed-img" />
              </div>
              <div className="coed-meta-card">
                <h4>Department</h4>
                <p>{coe.title.split(" - ")[0]}</p>
                <hr />
                <h4>Focus Area</h4>
                <p>{coe.category}</p>
              </div>
            </div>

            {/* Right Column: Full Details */}
            <div className="coed-main-content">
              {coe.content && (
                <div className="coed-section">
                  <h3>About the Centre</h3>
                  {coe.content.map((item, idx) => (
                    <p key={idx}>{item}</p>
                  ))}
                </div>
              )}

              {coe.features && (
                <div className="coed-section">
                  <h3>Key Features & Facilities</h3>
                  <ul>
                    {coe.features.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {coe.objectives && (
                <div className="coed-section">
                  <h3>Objectives</h3>
                  <ul>
                    {coe.objectives.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {coe.outcomes && (
                <div className="coed-section">
                  <h3>Outcomes & Achievements</h3>
                  <ul>
                    {coe.outcomes.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default CoeDetail;
