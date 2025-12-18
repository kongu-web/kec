import React from "react";
import "./Recruitment.css";
import Navbar from "../../../HomePage/navbar/Navbar";
import Section from "../../../HomePage/Section/Section";

const IQAC = () => {
  const handleClick = () => {
    window.open("https://kms.kongu.edu/recruitment/", "_blank");
  };

  const handleClick2 = () => {
    window.open("https://kms.kongu.edu/nt_recruitment/", "_blank");
  };

  return (
    <>
      {/* <Section/> */}
      <Navbar />
      <div className="ief-wrapper">
        <button onClick={handleClick} className="navigate-button">
          Teaching
        </button>
        <button onClick={handleClick2} className="navigate-button">
          Non Teaching
        </button>
        <button onClick={handleClick} className="navigate-button">
          Teaching Fellowship Scheme
        </button>
      </div>
    </>
  );
};

export default IQAC;
