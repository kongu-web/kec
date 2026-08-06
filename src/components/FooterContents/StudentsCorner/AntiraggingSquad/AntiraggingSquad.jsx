import React from "react";
import "./AntiraggingSquad.css";
import Section from "../../../HomePage/Section/Section";
import Navbar from "../../../HomePage/navbar/Navbar";
import Footer from "../../../HomePage/Footer/Footer";
import "../../../../App.css";

const squadMembers = [
  {
    name: "Dr.K.Kannan, Student Affairs",
    category: "Chairman",
    phone: "9842823432",
  },
  { name: "Dr.V.Jegadheesan  (MTS)", category: "Member", phone: "9003760212" },
  { name: "Dr.M.Karthik (EEE)", category: "Member", phone: "9843626288" },
  {
    name: "Dr.J.Rajini (English)",
    category: "Member",
    phone: "9715508383",
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
    </>
  );
};

export default AntiraggingSquad;
