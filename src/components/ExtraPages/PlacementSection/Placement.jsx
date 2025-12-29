import React from "react";
import "./Placement.css";
import Navbar from "../../HomePage/navbar/Navbar";
import Footer from "../../HomePage/Footer/Footer";

import heroImg from "../../../assets/images/Placement/placement-hero.png";
import team1 from "../../../assets/images/Placement/team1.png";
import team2 from "../../../assets/images/Placement/team2.png";

const Placement = () => {
  return (
    <div className="placement-page">
      {/* HERO SECTION */}
      <Navbar />

      <section
        className="placement-hero"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="placement-overlay">
          <h1>Empowering Futures, Engineering Careers</h1>
          <p>
            Our mission is to bridge the gap between academic excellence and
            corporate demands, ensuring every student is industry-ready and
            poised for success.
          </p>
        </div>
      </section>

      {/* TRAINING & PLACEMENT CELL */}
      <section className="placement-content container">
        <div className="content-left">
          <h2>Training & Placement Cell</h2>
          <p>
            The Training and Placement Cell at Kongu Engineering College is
            dedicated to providing students with the best opportunities for
            their professional careers.
          </p>
          <p>
            We are committed to providing comprehensive training programs that
            enhance technical skills, soft skills, and overall employability.
          </p>

          <ul className="placement-points">
            <li>
              <strong>Career Guidance:</strong> Counselling to identify career
              goals and suitable skill paths.
            </li>
            <li>
              <strong>Industry Connections:</strong> Collaborations for
              internships, campus drives, and partnerships.
            </li>
            <li>
              <strong>Job Postings:</strong> Disseminates job openings and
              internships.
            </li>
          </ul>
        </div>

        <div className="content-right">
          <div className="stat-card orange">
            <h3>4000+</h3>
            <span>Students Trained Annually</span>
          </div>
          <div className="stat-card green">
            <h3>250+</h3>
            <span>Industry Partners</span>
          </div>
          <div className="stat-card purple">
            <h3>95%</h3>
            <span>Placement Success Rate</span>
          </div>
          <div className="stat-card blue">
            <h3>50+</h3>
            <span>Training Programs</span>
          </div>
        </div>
      </section>

      {/* MEET THE TEAM */}
      <section className="placement-team">
        <h2>Meet the Team</h2>

        <div className="team-grid">
          {[team1, team2, team1, team2].map((img, index) => (
            <div className="team-card" key={index}>
              <img src={img} alt="Team Member" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Placement;
