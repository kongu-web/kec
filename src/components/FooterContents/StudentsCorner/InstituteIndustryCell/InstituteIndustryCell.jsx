import React from "react";
import "./InstituteIndustryCell.css";
import Section from "../../../HomePage/Section/Section";
import Navbar from "../../../HomePage/navbar/Navbar";
import Footer from "../../../HomePage/Footer/Footer";
import ScrollToTopButton from "../../../ScrollToTopButton";
import "../../../../App.css";

const members = [
  { name: "Dr.R.Rajasekar (Mechanical)", role: "Coordinator" },
  { name: "Dr.P.Selvakumar (Mechanical)", role: "Member" },
  { name: "Dr.T.Logeswaran (EEE)", role: "Member" },
  { name: "Dr.K.Dinesh (CSE)", role: "Member" },
  { name: "Mr.R.Sathish Raam (Chemical)", role: "Member" },
  { name: "Dr.P.Vijayakumar (MCA)", role: "Member" },
  { name: "Dr.A.Revathi (Chemistry)", role: "Member" },
];

const InstituteIndustryCell = () => {
  return (
    <>
      <Navbar />
      {/* <Section/> */}
      <div className="industry-container">
        <h2 className="page-title">Institute Industry Cell</h2>
        <div className="table-wrapper">
          <table className="industry-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Role</th>
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
      <ScrollToTopButton />
      <Footer />
    </>
  );
};

export default InstituteIndustryCell;
