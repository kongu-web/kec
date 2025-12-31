import React from "react";
import { useState } from "react";
import "./Placement.css";
import Navbar from "../../HomePage/navbar/Navbar";
import Footer from "../../HomePage/Footer/Footer";

import heroImg from "../../../assets/images/Placement/placement-hero.png";
import team1 from "../../../assets/images/Placement/team1.png";
import team2 from "../../../assets/images/Placement/team2.png";
import stat1 from "../../../assets/images/Placement/Frame 260.png";
import stat2 from "../../../assets/images/Placement/Frame 257.png";
import stat3 from "../../../assets/images/Placement/Frame 261.png";
import stat4 from "../../../assets/images/Placement/Frame 259.png";
import star from "../../../assets/images/Placement/star.png";
import card1 from "../../../assets/images/Placement/card1.png";
import card2 from "../../../assets/images/Placement/card2.png";
import card3 from "../../../assets/images/Placement/card3.png";

import { companyImages } from "../../../utils/companyImages";

const categories = [
  "IT & Software",
  "Core Engineering",
  "Management",
  "Startups",
];

const placementFiles = require.context(
  "../../../assets/docs/Placement/Placement Status",
  false,
  /\.json$/
);

export const teamData = [
  {
    id: 1,
    name: "Dr. S. Kumar",
    role: "Placement Officer",
    mobile: "8086423493",
    img: team2,
  },
  {
    id: 2,
    name: "Ms. R. Priya",
    role: "Training Coordinator",
    mobile: "9086423493",
    img: team1,
  },
  {
    id: 3,
    name: "Mr. A. Rajesh",
    role: "Industry Relations",
    mobile: "6086423493",
    img: team2,
  },
  {
    id: 4,
    name: "Ms. K. Anitha",
    role: "Career Guidance",
    mobile: "9086423493",
    img: team1,
  },
];

const Placement = () => {
  const [activeCategory, setActiveCategory] = useState("IT & Software");

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
            their professional careers. We work tirelessly to connect our
            talented students with leading industries, ensuring they are
            well-prepared to meet the challenges of the global workforce.
          </p>
          <p>
            We are committed to providing comprehensive training programs that
            enhance technical skills, soft skills, and overall employability.
            Our dedicated team works tirelessly to ensure that every student
            receives the guidance and support needed to launch a successful
            career.
          </p>

          <ul className="placement-points">
            <li>
              <strong>Career Guidance:</strong> Guidance and counselling to
              identify career goals, suitable courses, and relevant skills.
            </li>
            <li>
              <strong>Industry Connections:</strong> Collaborations with
              companies for internships, campus drives, and partnerships.
            </li>
            <li>
              <strong>Job Postings:</strong> Disseminates job openings and
              internships, reducing stress during job hunting.
            </li>
          </ul>
        </div>

        <div className="content-right">
          <div class="stats-bg"></div>
          <div className="stats-grid">
            <div className="stat-card orange">
              <img src={stat1} alt="Students" className="stat-icon" />

              <h3>4000+</h3>
              <span>Students Trained Annually</span>
            </div>
            <div className="stat-card green">
              <img src={stat2} alt="Students" className="stat-icon" />

              <h3>250+</h3>
              <span>Industry Partners</span>
            </div>
            <div className="stat-card purple">
              <img src={stat3} alt="Students" className="stat-icon" />

              <h3>95%</h3>
              <span>Placement Success Rate</span>
            </div>
            <div className="stat-card blue">
              <img src={stat4} alt="Students" className="stat-icon" />

              <h3>50+</h3>
              <span>Training Programs</span>
            </div>
          </div>
        </div>
      </section>

      {/* MEET THE TEAM */}
      <section className="placement-team">
        <h2 className="team-title">Meet the Team</h2>

        <div className="team-grid">
          {teamData.map((member, index) => (
            <div className="team-card" key={index}>
              <div className="img-box">
                <img src={member.img} alt={member.name} />
              </div>
              <div className="team-info">
                <h4>{member.name}</h4>
                <p>{member.role}</p>
                {member.mobile && (
                  <p className="team-mobile">
                    📞 <a href={`tel:${member.mobile}`}>{member.mobile}</a>
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section class="placement-section">
        <div class="wave-bg"></div>

        <div class="container">
          {" "}
          <h2 class="section-title">Placement Statistics</h2>{" "}
          <p class="section-subtitle">
            {" "}
            A comprehensive overview of our placement performance{" "}
          </p>
          <div class="stats-wrapper">
            <div class="ps-stat-card green">
              <div class="card-bg"></div>

              <h4>Total Companies Visited</h4>

              <div class="card-icon">
                <img src={card1} />
              </div>

              <div class="stat-value">151</div>
            </div>

            <div class="ps-stat-card blue center">
              <div class="card-bg"></div>

              <h4>Total Students Placed</h4>

              <div class="card-icon">
                <img src={card2} />
              </div>

              <div class="stat-value big">794</div>
            </div>

            <div class="ps-stat-card green">
              <div class="card-bg"></div>

              <h4>Highest LPA</h4>

              <div class="card-icon">
                <img src={card3} />
              </div>

              <div class="stat-value">35</div>
            </div>
          </div>
        </div>
      </section>

      <section className="recruiters-section">
        <div className="container">
          <h2 className="section-title">Our Esteemed Recruiters</h2>
          <p className="section-subtitle">
            Leading companies across industries trust us to find exceptional
            talent
          </p>

          <div className="recruiter-tabs">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`tab ${activeCategory === cat ? "active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="logo-grid">
            {companyImages[activeCategory].map((img, index) => (
              <div className="logo-card" key={index}>
                <img src={img} alt="company" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Placement;
