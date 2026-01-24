import React from "react";
import "./AboutSection.css";
// import campusImg from "../../../assets/images/2.png";
import campusImg from "../../../assets/images/WebAlbum/kec.jpg";


function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-wrapper">
        {/* Left Video Card */}
        <div className="about-left">
          <img src={campusImg} alt="Campus" />
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

          <p>
            Kongu Engineering College, one of the foremost multi professional
            research-led Institution is internationally a recognized leader in
            professional and career-oriented education. It provides an integral,
            inter-disciplinary education - a unique intersection between theory
            and practice, passion and reason. The College offers courses of
            study that are on the frontiers of knowledge and it connects the
            spiritual and practical dimensions of intellectual life, in a
            stimulating environment that fosters rigorous scholarship and
            supportive community. This Institute is a great possession of the
            committed Trust called 'The Kongu Vellalar Institute of Technology
            Trust' in Erode District, Tamilnadu. The noble Trust has taken the
            institute to greater heights since its inception in 1983 and has
            established the college as a forum for imparting value based
            education for men and women.
          </p>

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
