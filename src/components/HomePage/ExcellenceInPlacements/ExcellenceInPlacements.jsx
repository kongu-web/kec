import React, { useState } from "react";
import "./ExcellenceInPlacements.css";
import { Link } from "react-router-dom";

const StatCard = ({ value, label }) => (
  <div className="eip-stat-card">
    <h3>{value}</h3>
    <span>{label}</span>
  </div>
);
function ExcellenceInPlacements() {

  return (
    <section className="eip-placement-section">
      <div className="placement-wrapper">
        <span className="placement-pill">Excellence In Placements @ KEC</span>
        <h2>Results That Resonate (2025 - 2026)</h2>
        <p className="placement-subtitle">
          The leading companies across diverse industries recruit our students
        </p>

        <div className="eip-stats-grid">
          <StatCard value="1784" label="Offers received" />
          <StatCard value="5.6 LPA" label="Average Salary" />
          <StatCard value="172" label="Above 8 LPA" />
          <StatCard value="61.21 LPA" label="Highest salary" />
          <StatCard value="355" label="Companies Visited" />
          <StatCard value="94.1%" label="Placement Status" />
        </div>

        <button className="eip-know-more-btn"><Link to="/placement" className="legacy-link">Know More</Link></button>
      </div>
    </section>
  );
}

export default ExcellenceInPlacements;
