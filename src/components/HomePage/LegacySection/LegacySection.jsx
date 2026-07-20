import React from "react";
import { Link } from "react-router-dom";
import "./LegacySection.css";
import {
  FaGraduationCap,
  FaTrophy,
  FaChartLine,
  FaNewspaper,
  HiBadgeCheck,
} from "react-icons/fa";

import award from "../../../assets/images/HomePage/award.webp";
import GraduationCap from "../../../assets/images/HomePage/GraduationCap.webp";
import Group from "../../../assets/images/HomePage/Group.webp";
import careergrowth from "../../../assets/images/HomePage/career-growth.webp";
import nirf from "../../../assets/images/HomePage/nirf.webp";

export default function LegacySection() {
  return (
    <section className="legacy-section">
      <div className="legacy-left">
        <span className="legacy-pill">Legacy @ KEC</span>

        <h1>
          Excellence in Every Aspect <br />
          <span>Learning Beyond Limits</span>
        </h1>

        <p>
          We are committed to excellence across every dimension of education and development. Kongu Engineering College is the first choice for ambitious students pursuing academic and professional success.
        </p>

        <blockquote>
          “With a cutting-edge curriculum, hands-on learning approach, dynamic
          faculty, and world-class infrastructure, we take pride in being a
          <strong> Top Placement-Offering College year after year!</strong>”
        </blockquote>
      </div>

      <div className="legacy-right">
        <div className="legacy-card light">
          <div className="icon-circle">
            <img src={award} alt="Award" />
          </div>
          <h3>
            AAAA <span>Grade</span>
          </h3>
          <p>Career 360, June 2026</p>
        </div>

        <div className="legacy-card dark">
          <div className="cap">
            <img src={GraduationCap} alt="Graduation Cap" />
          </div>
          <h3>Band 101–150</h3>

          <small>National Ranking in India</small>
          <div className="nirf">
            <img src={nirf} alt="nirf" />
          </div>
        </div>

        <div className="legacy-card blue">
          <div className="cap">
            <img src={Group} alt="Group" />
          </div>
          <h1>
            126<sup>th</sup>
          </h1>
          <p>Position in All India Rank</p>
          <span className="tag">Education World, May 2025</span>
        </div>

        <div className="legacy-card light">
          <div className="cap">
            <img src={careergrowth} alt="Capcareergrowth" />
          </div>
          <h2>
            53<sup>rd</sup> <span>Position</span>
          </h2>
          <p>IIRF, January 2025</p>
          <div className="progress"></div>
        </div>

        <div className="legacy-card wide">
          <div className="star">⭐</div>
          <h2>
            55<sup>th</sup> in India
          </h2>
          <p>HANSA Research Survey, June 2026</p>
          <span className="green-tag">INCLUDING IITS & NITS</span>
        </div>
      </div>

      <div className="legacy-buttons">
        <Link to="/placement" className="legacy-btn">
          <FaGraduationCap /> Placements
        </Link>

        <Link to="/rankings" className="legacy-btn">
          <FaTrophy /> Rankings
        </Link>

        <Link to="/achievements" className="legacy-btn">
          <FaChartLine /> Achievements
        </Link>

        <Link to="/awards" className="legacy-btn">
          <FaTrophy /> Awards
        </Link>

        <Link to="/updates" className="legacy-btn">
          <FaChartLine /> Updates
        </Link>

        <Link
          to="https://kongu.ac.in/kongu.ac.in/newspaper.php"
          className="legacy-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaNewspaper /> News Clippings
        </Link>
      </div>
    </section>
  );
}
