import React from "react";
import "./ResearchIPRCommittee.css";
import Section from "../../../HomePage/Section/Section";
import Navbar from "../../../HomePage/navbar/Navbar";
import Footer from "../../../HomePage/Footer/Footer";
import ScrollToTopButton from "../../../ScrollToTopButton";
import "../../../../App.css";

const members = [
  { name: "Dr.R.Rajasekar (Mechanical)", role: "Chairman" },
  { name: "Dr.K.Senthilkumar (FT)", role: "Member" },
  { name: "Dr.C.Maheswari (Mechatronics)", role: "Member" },
  { name: "Dr.V.Sampathkumar (Civil)", role: "Member" },
  { name: "Dr.S.Mothil (Chemical)", role: "Member" },
  { name: "Dr.M.Suresh (EEE)", role: "Member" },
  { name: "Dr.R.Rajkumar (EIE)", role: "Member" },
  { name: "Mr.Vibin Mammen Vinod (ECE)", role: "Member" },
];

const ResearchIPRCommittee = () => {
  return (
    <>
      <Navbar />
      {/* <Section/> */}
      <div className="research-container">
        <h2 className="page-title">Research & IPR Committee</h2>
        <p className="description">
          A Research and IPR Committee is formed to monitor and address the
          issues of Research. CCO R&D is the chairman and a faculty from each
          department as Research Coordinator / Members. The Research committee
          will facilitate the research activities and it will be reviewed
          fortnightly by the Head of the Institution.
        </p>
        <div className="table-wrapper">
          <table className="research-table">
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

export default ResearchIPRCommittee;
