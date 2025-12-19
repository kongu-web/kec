import React from "react";
import "./AntiraggingSquad.css";
import Section from "../../../HomePage/Section/Section";
import Navbar from "../../../HomePage/navbar/Navbar";
import Footer from "../../../HomePage/Footer/Footer";
import ScrollToTopButton from "../../../ScrollToTopButton";
import "../../../../App.css";

const squadMembers = [
  {
    name: "Dr. K. Krishnamurthy, Student Affairs",
    category: "Chairman",
    phone: "9842722881",
  },
  { name: "Dr. V. Chitradevi  (FT)", category: "Member", phone: "9865904404" },
  { name: "Dr. P. Natesan (AI)", category: "Member", phone: "9443840665" },
  {
    name: "Dr. R. Somasundaram (MBA)",
    category: "Member",
    phone: "9443305502",
  },
];

const AntiraggingSquad = () => {
  return (
    <>
      {/* <Section/> */}
      <Navbar />
      <div className="squad-container">
        <h1 className="page-title">Anti-Ragging Squad</h1>
        <p className="squad-info">
          Members of the Anti-Ragging Squad are listed below:
        </p>
        <div className="squad-table-wrapper">
          <table className="squad-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Mobile Number</th>
              </tr>
            </thead>
            <tbody>
              {squadMembers.map((member, index) => (
                <tr key={index}>
                  <td>{member.name}</td>
                  <td>{member.category}</td>
                  <td>{member.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default AntiraggingSquad;
