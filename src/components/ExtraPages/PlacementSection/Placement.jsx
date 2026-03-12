import React from "react";
import { useState } from "react";
import "./Placement.css";
import Navbar from "../../HomePage/navbar/Navbar";
import Footer from "../../HomePage/Footer/Footer";

import heroImg from "../../../assets/images/Placement/placement-hero.png";
import team1 from "../../../assets/images/Placement/Dhakshinamoorthy.P.jpg";
import team2 from "../../../assets/images/Placement/Kavin.S.jpg";
import team3 from "../../../assets/images/Placement/Sukumar.P.jpg";
import team4 from "../../../assets/images/Placement/Dineshkumar.P.jpg";
import team5 from "../../../assets/images/Placement/G.Srivaths Karthic.jpg";

import stat1 from "../../../assets/images/Placement/Frame 260.png";
import stat2 from "../../../assets/images/Placement/Frame 257.png";
import stat3 from "../../../assets/images/Placement/Frame 261.png";
import stat4 from "../../../assets/images/Placement/Frame 259.png";
import star from "../../../assets/images/Placement/star.png";
import card1 from "../../../assets/images/Placement/card1.png";
import card2 from "../../../assets/images/Placement/card2.png";
import card3 from "../../../assets/images/Placement/card3.png";

import tp_card1 from "../../../assets/images/Placement/tp_card1.png";
import tp_card2 from "../../../assets/images/Placement/tp_card2.png";
import tp_card3 from "../../../assets/images/Placement/tp_card3.png";
import tp_card4 from "../../../assets/images/Placement/tp_card4.png";
import tp_card5 from "../../../assets/images/Placement/tp_card5.png";
import tp_card6 from "../../../assets/images/Placement/tp_card6.png";

import cg_bicon from "../../../assets/images/Placement/cg_bicon.png";
import cg_bicon1 from "../../../assets/images/Placement/cg_bicon1.png";
import cg_bicon2 from "../../../assets/images/Placement/cg_bicon2.png";
import cg_bicon3 from "../../../assets/images/Placement/cg_bicon3.png";
import cg_bicon4 from "../../../assets/images/Placement/cg_bicon4.png";

import cg_gicon1 from "../../../assets/images/Placement/cg_gicon1.png";
import cg_gicon2 from "../../../assets/images/Placement/cg_gicon2.png";
import cg_gicon3 from "../../../assets/images/Placement/cg_gicon3.png";
import cg_gicon4 from "../../../assets/images/Placement/cg_gicon4.png";
import cg_gicon from "../../../assets/images/Placement/cg_gicon.png";

import II_card1 from "../../../assets/images/Placement/II_card1.png";
import II_card2 from "../../../assets/images/Placement/II_card2.png";
import II_card3 from "../../../assets/images/Placement/II_card3.png";
import II_card4 from "../../../assets/images/Placement/II_card4.png";
import II_card5 from "../../../assets/images/Placement/II_card5.png";
import II_card6 from "../../../assets/images/Placement/II_card6.png";


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
    name: "Mr. P. Dhakshinamoorthy ",
    role: "Placement Officer",
    mobile: "9790004095",
    img: team1,
  },
  {
    id: 2,
    name: "Mr. S. Kavin ",
    role: "Deputy Placement Officer",
    mobile: "9600777618",
    img: team2,
  },
  {
    id: 3,
    name: "Mr. P. Sukumar",
    role: "Deputy Placement Officer",
    mobile: "9629455327",
    img: team3,
  },
  {
    id: 4,
    name: "Mr. P. Dineshkumar",
    role: "Assistant Placement Officer",
    mobile: "7373675915",
    img: team4,
  },
  {
    id: 5,
    name: "Mr.G.Srivaths Karthic",
    role: "Assistant Placement Officer",
    mobile: "9442751513",
    img: team5,
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
          <div className="know-more-wrapper">
            <a href="/placement-details" className="know-more-link">
              <span>KNOW MORE</span>
              <div className="arrow-circle">➜</div>
            </a>
          </div>
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
          <h2 class="section-title">Placement Statistics  2025 - 2026</h2>{" "}
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

              <div class="stat-value">278</div>
            </div>

            <div class="ps-stat-card blue center">
              <div class="card-bg"></div>

              <h4>Total Students Placed</h4>

              <div class="card-icon">
                <img src={card2} />
              </div>

              <div class="stat-value big">1223</div>
            </div>

            <div class="ps-stat-card green">
              <div class="card-bg"></div>

              <h4>Highest LPA</h4>

              <div class="card-icon">
                <img src={card3} />
              </div>

              <div class="stat-value">61.21 LPA</div>
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

          <div className="placement-logo-grid">
            {companyImages[activeCategory].map((img, index) => (
              <div className="placement-logo-card" key={index}>
                <img src={img} alt="company" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section class="training-section">
        <h2 class="section-title">Training Programs</h2>
        <p class="section-subtitle">
          We prepare our students to be industry-ready from day one through a
          structured training curriculum
        </p>

        <div class="training-grid">
          <div class="training-card">
            <div className="icon">
              <img src={tp_card1} alt="Technical Skills" />
            </div>
            <h3>Aptitude Training</h3>
            <p>
              Quantitative aptitude, logical reasoning, verbal ability, and
              analytical skills development
            </p>
            <ul>
              <li>⭐ Weekly mock tests</li>
              <li>⭐ Performance analytics</li>
              <li>⭐ Personalized feedback</li>
            </ul>
          </div>

          <div class="training-card">
            <div className="icon">
              <img src={tp_card2} alt="Technical Skills" />
            </div>
            <h3>Technical Skills</h3>
            <p>
              Programming, data structures, algorithms, web development, and
              emerging technologies
            </p>
            <ul>
              <li>⭐ Coding bootcamps</li>
              <li>⭐ Hackathons</li>
              <li>⭐ Project-based learning</li>
            </ul>
          </div>

          <div class="training-card">
            <div className="icon">
              <img src={tp_card3} alt="Technical Skills" />
            </div>
            <h3>Soft Skills</h3>
            <p>
              Communication, teamwork, leadership, time management, and
              professional etiquette
            </p>
            <ul>
              <li>⭐ Group discussions</li>
              <li>⭐ Public speaking</li>
              <li>⭐ Personality development</li>
            </ul>
          </div>

          <div class="training-card">
            <div className="icon">
              <img src={tp_card4} alt="Technical Skills" />
            </div>
            <h3>Resume Building</h3>
            <p>
              Professional resume writing, LinkedIn profile optimization, and
              portfolio development
            </p>
            <ul>
              <li>⭐ One-on-one sessions</li>
              <li>⭐ ATS-friendly formats</li>
              <li>⭐ Expert review</li>
            </ul>
          </div>

          <div class="training-card">
            <div className="icon">
              <img src={tp_card5} alt="Technical Skills" />
            </div>
            <h3>Mock Interviews</h3>
            <p>
              Technical interviews, HR rounds, group discussions, and case study
              analysis
            </p>
            <ul>
              <li>⭐ Industry experts</li>
              <li>⭐ Video feedback </li>
              <li>⭐ Multiple rounds</li>
            </ul>
          </div>

          <div class="training-card">
            <div className="icon">
              <img src={tp_card6} alt="Technical Skills" />
            </div>
            <h3>Coding Practice</h3>
            <p>
              Daily coding challenges, competitive programming, and algorithm
              optimization
            </p>
            <ul>
              <li>⭐ Online platforms</li>
              <li>⭐ Contest participation</li>
              <li>⭐ Peer learning</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="journey-section">
        <h2 class="journey-title">Training Journey (Year-wise)</h2>

        <div class="timeline">
          <div class="timeline-item right">
            <div class="content">
              <h3>First Year</h3>
              <p>
                Foundation building, basic aptitude training, communication
                skills development
              </p>
            </div>
            <div class="dot blue">1</div>
          </div>

          <div class="timeline-item left">
            <div class="dot orange">2</div>
            <div class="content">
              <h3>Second Year</h3>
              <p>
                Technical skill enhancement, programming practice, project-based
                learning
              </p>
            </div>
          </div>

          <div class="timeline-item right">
            <div class="content">
              <h3>Third Year</h3>
              <p>
                Advanced technical training, resume building, internship
                preparation, soft skills
              </p>
            </div>
            <div class="dot purple">3</div>
          </div>

          <div class="timeline-item left">
            <div class="dot green">4</div>
            <div class="content">
              <h3>Final Year</h3>
              <p>
                Intensive placement training, mock interviews, company-specific
                preparation, career guidance
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="career-section">
        <h2 class="section-title">Career Guidance & Higher Studies Cell</h2>
        <p class="section-subtitle">
          Empowering students to make informed decisions about their future
          career paths
        </p>

        <div class="career-grid">
          <div class="career-card blue">
            <div class="card-header">
              <span class="emoji">
                <img
                  src={cg_bicon}
                  alt="One-on-One Mentoring"
                  className="feature-icon"
                />
              </span>
              <h3>Career Counseling</h3>
            </div>

            <p class="card-desc">
              Our experienced career counselors provide personalized guidance to
              help you make informed decisions about your professional journey.
              We assess your strengths, interests, and goals to chart the best
              career path for you.
            </p>

            <div class="feature">
              <span class="cg_icon">
                <img src={cg_bicon1} alt="One-on-One Mentoring" />
              </span>
              <div>
                <h4>One-on-One Mentoring</h4>
                <p>
                  Personalized career counseling sessions with industry experts
                </p>
              </div>
            </div>

            <div class="feature">
              <span class="cg_icon">
                <img src={cg_bicon2} alt="One-on-One Mentoring" />
              </span>
              <div>
                <h4>Career Assessment</h4>
                <p>
                  Psychometric tests and aptitude analysis for career clarity
                </p>
              </div>
            </div>

            <div class="feature">
              <span class="cg_icon">
                <img src={cg_bicon3} alt="One-on-One Mentoring" />
              </span>
              <div>
                <h4>Career Path Planning</h4>
                <p>
                  Strategic roadmap development for long-term career success
                </p>
              </div>
            </div>

            <div class="feature">
              <span class="cg_icon">
                <img src={cg_bicon4} alt="One-on-One Mentoring" />
              </span>
              <div>
                <h4>Industry Insights</h4>
                <p>Latest trends and opportunities across various sectors</p>
              </div>
            </div>
          </div>

          <div class="career-card green">
            <div class="card-header">
              <span class="emoji">
                <img
                  src={cg_gicon}
                  alt="One-on-One Mentoring"
                  className="feature-icon"
                />
              </span>
              <h3>Higher Studies Guidance</h3>
            </div>

            <p class="card-desc">
              Planning to pursue higher education? Our dedicated team provides
              comprehensive support for students aspiring to study in India or
              abroad, including test preparation, university selection, and
              application assistance.
            </p>

            <div class="feature">
              <span class="cg_icon">
                <img src={cg_gicon1} alt="One-on-One Mentoring" />
              </span>
              <div>
                <h4>GATE Preparation</h4>
                <p>Comprehensive coaching and study materials for GATE exam</p>
              </div>
            </div>

            <div class="feature">
              <span class="cg_icon">
                <img src={cg_gicon2} alt="One-on-One Mentoring" />
              </span>
              <div>
                <h4>GRE/GMAT Coaching</h4>
                <p>Expert guidance for international university admissions</p>
              </div>
            </div>

            <div class="feature">
              <span class="cg_icon">
                <img src={cg_gicon3} alt="One-on-One Mentoring" />
              </span>
              <div>
                <h4>CAT/MAT Preparation</h4>
                <p>Management entrance exam training and mock tests</p>
              </div>
            </div>

            <div class="feature">
              <span class="cg_icon">
                <img src={cg_gicon4} alt="One-on-One Mentoring" />
              </span>
              <div>
                <h4>IELTS/TOEFL Training</h4>
                <p>English proficiency test preparation for abroad studies</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="industry-section">
        <h2>Industry–Institute Interaction</h2>
        <p className="subtitle">
          Building strong partnerships with leading industries to provide
          real-world exposure and opportunities
        </p>

        <div className="industry-grid">
          <div className="industry-card blue">
            <div className="II-card-header">
              <span class="II_card_img">
                <img src={II_card1} alt="One-on-One Mentoring" />
              </span>
              <h3>Industry Partnerships</h3>
            </div>

            <div className="card-body">
              <p>
                Strategic collaborations with leading companies for mutual
                growth and knowledge exchange
              </p>
              <ul>
                <li>50+ Active MoUs with industries</li>
                <li>Joint research projects</li>
                <li>Technology transfer programs</li>
              </ul>
            </div>
          </div>

          <div className="industry-card purple">
            <div className="II-card-header">
              <span class="II_card_img">
                <img src={II_card2} alt="One-on-One Mentoring" />
              </span>
              <h3>Internship Programs</h3>
            </div>
            <div className="card-body">
              <p>
                Facilitating valuable internship opportunities for hands-on
                industry experience
              </p>
              <ul>
                <li>1500+ internships annually</li>
                <li>Summer and winter programs</li>
                <li>Stipend-based opportunities</li>
              </ul>
            </div>
          </div>

          <div className="industry-card green">
            <div className="II-card-header">
              <span class="II_card_img">
                <img src={II_card3} alt="One-on-One Mentoring" />
              </span>
              <h3>Guest Lectures</h3>
            </div>
            <div className="card-body">
              <p>
                Regular sessions by industry experts sharing insights and best
                practices
              </p>
              <ul>
                <li>100+ expert sessions yearly</li>
                <li>Technical and motivational talks</li>
                <li>Interactive Q&A sessions</li>
              </ul>
            </div>
          </div>

          <div className="industry-card orange">
            <div className="II-card-header">
              <span class="II_card_img">
                <img src={II_card4} alt="One-on-One Mentoring" />
              </span>
              <h3>Industrial Visits</h3>
            </div>
            <div className="card-body">
              <p>
                Organized tours to manufacturing units and corporate offices for
                practical exposure
              </p>
              <ul>
                <li>40+ visits per academic year</li>
                <li>Manufacturing and IT sectors</li>
                <li>Hands-on demonstrations</li>
              </ul>
            </div>
          </div>

          <div className="industry-card pink">
            <div className="II-card-header">
              <span class="II_card_img">
                <img src={II_card5} alt="One-on-One Mentoring" />
              </span>
              <h3>Live Projects</h3>
            </div>
            <div className="card-body">
              <p>
                Real-world project assignments from industry partners for
                practical learning
              </p>
              <ul>
                <li>200+ projects completed</li>
                <li>Industry mentorship provided</li>
                <li>Portfolio building opportunity</li>
              </ul>
            </div>
          </div>

          <div className="industry-card violet">
            <div className="II-card-header">
              <span class="II_card_img">
                <img src={II_card6} alt="One-on-One Mentoring" />
              </span>
              <h3>Workshops & Seminars</h3>
            </div>
            <div className="card-body">
              <p>
                Skill development programs and technical seminars conducted by
                industry professionals
              </p>
              <ul>
                <li>80+ workshops annually</li>
                <li>Latest technology trends</li>
                <li>Certification programs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Placement;
