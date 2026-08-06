import React from "react";
import "./CodeofConduct.css";
import Section from "../../../HomePage/Section/Section";
import Navbar from "../../../HomePage/navbar/Navbar";
import Footer from "../../../HomePage/Footer/Footer";
import "../../../../App.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBalanceScale } from "@fortawesome/free-solid-svg-icons";

const CodeofConduct = () => {
  const committeeMembers = [
    { name: "Dr.R.Rajasekar (Dean R&D)", role: "Chairman" },
    { name: "Dr.S.Malliga (CSE)", role: "Member" },
    { name: "Dr.N.Kasthuri (ECE)", role: "Member" },
    { name: "Dr.A.Geetha (Chemistry)", role: "Member" },
    { name: "Dr.K.Senthilkumar (Food Tech)", role: "Convener" },
  ];

  return (
    <>
      {/* <Section/> */}
      <Navbar />
      <div className="codeconduct-container">
        <h1 className="page-title">Code of Conduct and Ethics Committee</h1>
        <p className="codeconduct-desc">
          Code of Conduct and Ethics Committee is reconstituted with the
          following members.
        </p>
        <div className="profile-cards">
          {committeeMembers.map((member, index) => (
            <div className="profile-card" key={index}>
              <div className="profile-image-placeholder">
                <FontAwesomeIcon
                  className="icon"
                  icon={faBalanceScale}
                  size="2x"
                />
              </div>
              <div className="profile1-name">{member.name}</div>
              <div className="profile1-role">{member.role}</div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CodeofConduct;
