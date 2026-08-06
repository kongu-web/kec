import React from "react";
import "./IQACAcademicCommittee.css";
import Navbar from "../../../HomePage/navbar/Navbar";
import Section from "../../../HomePage/Section/Section";
import Footer from "../../../HomePage/Footer/Footer";
import "../../../../App.css";

const members = [
  { name: "Dr.N.Senthilnathan (EEE & Dean Accreditation)", role: "Chairman" },
  { name: "Dr.P.Nirmaladevi (ECE)", role: "coordinator" },
  { name: "Dr.P.Sundharesalingam (MBA)", role: "coordinator" },
  { name: "Dr.V.Surendar (EEE)", role: "coordinator" },
  { name: "Dr.B.Venkatesan (EIE)", role: "coordinator" },
  { name: "Dr.P.Ravichandran (MTS)", role: "coordinator" },
  { name: "Dr.N.Sasipriyaa (CSE)", role: "coordinator" },
  { name: "Ms.N.Dhivya Bharathi (FT)", role: "coordinator" },
  { name: "Mr.K.S.Parthasarathi (B.Arch)", role: "coordinator" },
  { name: "Ms.E.Sowmiya (IT)", role: "coordinator" },
];

const IQACAcademicCommittee = () => {
  return (
    <>
      <Navbar />
      {/* <Section/> */}
      <div className="iqac-container">
        <h2 className="page-title">IQAC, Accreditation and Academic Audit</h2>
        <div className="iqac-table-wrapper">
          <table className="iqac-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
              {members.map((member, index) => (
                <tr key={index}>
                  <td>{member.name}</td>
                  <td>{member.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default IQACAcademicCommittee;
