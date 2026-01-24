import React, { useState } from "react";
import "./InnovationSection.css";
import { Link } from "react-router-dom";

export default function InnovationSection() {
  return (
    <section className="innovation-section">
      <span className="innovation-pill">Innovation Ecosystem @ KEC</span>

      <h2>Fostering Innovation & Entrepreneurship</h2>

      <p className="innovation-desc">
        At Kongu Engineering College, we foster a culture of creativity and
        groundbreaking innovation. Our students and faculty thrive on fresh
        perspectives, pioneering solutions, and the implementation of ideas that
        push the boundaries of conventional thinking. We instill an
        entrepreneurial spirit in our learners, empowering them with the freedom
        to ideate, experiment, and innovate. At Kongu, innovation isn't just
        encouraged—it’s a way of life!
      </p>

      <div className="innovation-cards">
        <div className="innovation-card purple">
          <div className="icon-box purple">💡</div>
          <h3>Centre of Excellence</h3>
          <p>
            15+ specialized research centers focusing on AI, IoT, Robotics,
            Renewable Energy, and Advanced Manufacturing
          </p>
          <ul>
            <li>AI & Machine Learning Lab</li>
            <li>IoT Innovation Center</li>
            <li>Robotics & Automation Hub</li>
            <li>Clean Energy Research</li>
          </ul>
          <Link to="/coe" className="btn purple">
            Explore Centers
          </Link>
        </div>

        <div className="innovation-card icblue">
          <div className="icon-box icblue">🚀</div>
          <h3>Technology Business Incubator</h3>
          <p>
            State-recognized TBI supporting 50+ student startups with
            mentorship, funding, and infrastructure
          </p>
          <ul>
            <li>Seed Funding Support</li>
            <li>Expert Mentorship Program</li>
            <li>Co-working Spaces</li>
            <li>Industry Networking</li>
          </ul>
          <Link to="https://www.tbi-kec.org/" className="btn icblue">
            Join TBI
          </Link>
        </div>

        <div className="innovation-card green">
          <div className="icon-box green">🏆</div>
          <h3>Innovation Events</h3>
          <p>
            Annual hackathons, tech fests, and innovation challenges attracting
            5000+ participants nationwide
          </p>
          <ul>
            <li>National Hackathons</li>
            <li>Project Exhibitions</li>
            <li>Tech Symposiums</li>
            <li>Innovation Competitions</li>
          </ul>
          <Link to="/hackathons" className="btn green">
            View Events
          </Link>
        </div>
      </div>
    </section>
  );
}
