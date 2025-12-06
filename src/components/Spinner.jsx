import React from "react";
import "./Spinner.css";
import logo from "../assets/images/kecglobe.png";

const Spinner = () => {
  return (
    <div className="kec-spinner-overlay">
      <div className="kec-spinner-content">
        <h2>KONGU ENGINEERING COLLEGE</h2>
        <img src={logo} alt="KEC Logo" className="kec-spinner-logo" />
      </div>
    </div>
  );
};

export default Spinner;
