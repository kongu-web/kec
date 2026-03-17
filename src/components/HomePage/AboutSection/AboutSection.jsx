import React, { useState } from "react";
import "./AboutSection.css";
// import campusImg from "../../../assets/images/2.png";
import campusImg from "../../../assets/images/WebAlbum/kec.jpeg";


function AboutSection() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="about-section">
      <div className="about-wrapper">
        {/* Left Video Card */}
        <div className="about-left">
          <img src={campusImg} alt="Campus" loading="lazy" />
          {/* <div className="video-overlay">
            <div className="video-text">
              <span>Watch Our Story</span>
              <strong>Campus Tour Video</strong>
            </div>
            <button className="play-btn">▶</button>
          </div> */}
        </div>

        {/* Right Content */}
        <div className="about-right">
          <span className="about-pill">About @ KEC</span>
          <h2>Building Tomorrow's Innovators Today</h2>

          {/* <p>
            Kongu Engineering College is an internationally recognised leader in multi-professional, research-led education. It offers a unique blend of theory and practice, providing interdisciplinary courses at the frontiers of knowledge. The college connects spiritual and practical dimensions of learning in a stimulating environment that fosters rigorous scholarship and community. Established in 1983 by The Kongu Vellalar Institute of Technology Trust in Erode District, Tamil Nadu, this institution has been elevated to great heights through the Trust's commitment to value-based education for all.
          </p> */}
          <p>
            Kongu Engineering College is a multi-disciplinary institution offering research-oriented education. The college provides undergraduate and postgraduate programs that integrate theoretical knowledge with practical application across various engineering and technology disciplines.
          </p>

          {showMore && (
            <p>
              Established in 1983, the institution was founded by the Kongu Vellalar Institute of Technology Trust in Erode District, Tamil Nadu. The college operates under the Trust's educational philosophy, which emphasises holistic development and ethical principles alongside technical competence. The institution maintains academic standards through a curriculum designed to address contemporary challenges in engineering and technology.
            </p>
          )}

          <button className="read-more-btn" onClick={() => setShowMore(!showMore)}>
            {showMore ? "Read Less" : "Read More..."}
          </button>

          <div className="stats-row">
            <div className="home-stat-card">
              <h3>NAAC A++</h3>
              <p>Accreditation</p>
            </div>
            <div className="home-stat-card">
              <h3>NBA</h3>
              <p>Accredited</p>
            </div>
            <div className="home-stat-card">
              <h3>NIRF</h3>
              <p>Ranked</p>
            </div>
          </div>

          <a href="/aboutkec" className="know-more">
            Know More →
          </a>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
