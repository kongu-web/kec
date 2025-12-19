import React from "react";
import "./GrievanceRedressalCommittee.css";
import Section from "../../../HomePage/Section/Section";
import Navbar from "../../../HomePage/navbar/Navbar";
import Footer from "../../../HomePage/Footer/Footer";
import ScrollToTopButton from "../../../ScrollToTopButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserTie,
  faUserGraduate,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import "../../../../App.css";

const members = [
  {
    name: "Dr.R.Parameshwaran (Principal)",
    role: "Chairman",
    mobile: "9942820583",
    icon: faUserTie,
  },
  {
    name: "Dr.E.Gothai (CSE)",
    role: "Member",
    mobile: "9842726627",
    icon: faUserTie,
  },
  {
    name: "Dr.R.Somasundaram (Mgt.Studies)",
    role: "Member",
    mobile: "9443305502",
    icon: faUserTie,
  },
  {
    name: "Dr.C.Jegadeesan (Auto)",
    role: "Member",
    mobile: "9003760212",
    icon: faUserTie,
  },
  {
    name: "Dr.N.T.Renukadevi (CT-UG)",
    role: "Member",
    mobile: "9629222052",
    icon: faUserTie,
  },
  {
    name: "Mr.Bharani Sri J J (22MTR017)",
    role: "Student Representative",
    mobile: "8056654316",
    icon: faUserGraduate,
  },
  {
    name: "Ms.M.Mathumathi (23CSR126)",
    role: "Student Representative",
    mobile: "6369593242",
    icon: faUserGraduate,
  },
];

const GrievanceRedressalCommittee = () => {
  return (
    <>
      {/* <Section/> */}
      <Navbar />
      <div className="grievance-container">
        <h1 className="page-title">Grievance Redressal Committee</h1>
        <div className="cards">
          {members.map((member, index) => (
            <div className="card" key={index}>
              <FontAwesomeIcon icon={member.icon} className="profile1-icon" />
              <h3 className="grc_name">{member.name}</h3>
              <p className="role1">{member.role}</p>
              <p className="mobile">
                <FontAwesomeIcon icon={faPhone} /> {member.mobile}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default GrievanceRedressalCommittee;
