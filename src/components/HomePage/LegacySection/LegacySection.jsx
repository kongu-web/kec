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

import award from "../../../assets/images/HomePage/award.png";
import GraduationCap from "../../../assets/images/HomePage/GraduationCap.png";
import Group from "../../../assets/images/HomePage/Group.png";
import careergrowth from "../../../assets/images/HomePage/career-growth.png";
import nirf from "../../../assets/images/HomePage/nirf.png";

export default function LegacySection() {
  return (
    <section className="legacy-section">
      <div className="legacy-left">
        <span className="legacy-pill">Legacy @ KEC</span>

        <h1>
          Excellence in Every Aspect, <br />
          <span>Learning Beyond Limits.</span>
        </h1>

        <p>
          Our commitment to excellence spans across every dimension of education
          and development.
        </p>

        <p>
          Kongu Engineering College stands as the first choice for ambitious
          students striving for academic and professional excellence.
        </p>

        <blockquote>
          “With a cutting-edge curriculum, hands-on learning approach, dynamic
          faculty, and world-class infrastructure, we take pride in being a
          <strong> Top Placements College year after year!</strong>”
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
          <p>Career 360, April 2024</p>
        </div>

        <div className="legacy-card dark">
          <div className="cap">
            <img src={GraduationCap} alt="Graduation Cap" />
          </div>
          <h3>Band 101–150</h3>
          <p>Business Today (Best B School)</p>
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
            123<sup>rd</sup>
          </h1>
          <p>Position in All India Rank</p>
          <span className="tag">NATIONAL BENCHMARK</span>
        </div>

        <div className="legacy-card light">
          <div className="cap">
            <img src={careergrowth} alt="Capcareergrowth" />
          </div>
          <h2>
            22<sup>nd</sup> <span>Position</span>
          </h2>
          <p>Career 360, April 2024</p>
          <div className="progress"></div>
        </div>

        <div className="legacy-card wide">
          <div className="star">⭐</div>
          <h2>
            58<sup>th</sup> in India
          </h2>
          <p>HANSA Research Survey, June 2024</p>
          <span className="green-tag">INCLUDING IITS & NITS</span>
        </div>
      </div>

      <div className="legacy-buttons">
        <button>
          <Link to="/placement" className="legacy-link">
            <FaGraduationCap /> Placements
          </Link>
        </button>

        <button>
          <Link to="/rankings" className="legacy-link">
            <FaTrophy /> Rankings
          </Link>
        </button>

        <button>
          <Link to="/achievements" className="legacy-link">
            <FaChartLine /> Achievements
          </Link>
        </button>

        <button>
          <Link to="/awards" className="legacy-link">
            <FaTrophy /> Awards
          </Link>
        </button>

        <button>
          <Link to="/updates" className="legacy-link">
            <FaChartLine /> Updates
          </Link>
        </button>

        <button>
          <Link
            to="https://kongu.ac.in/kongu.ac.in/newspaper.php"
            className="legacy-link"
          >
            <FaNewspaper /> News Clippings
          </Link>
        </button>
      </div>
    </section>
  );
}
