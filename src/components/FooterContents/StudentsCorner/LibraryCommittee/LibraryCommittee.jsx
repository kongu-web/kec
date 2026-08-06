import React from "react";
import "./LibraryCommittee.css";
import Section from "../../../HomePage/Section/Section";
import Navbar from "../../../HomePage/navbar/Navbar";
import Footer from "../../../HomePage/Footer/Footer";
import "../../../../App.css";

const LibraryCommittee = () => {
  const members = [
    ["Dr.P.Karthikeyan (MBA)", "Chairman"],
    ["Dr.N.Nithyavathy (MTS)", "Member"],
    ["Dr.K.Dinesh (CSE)", "Member"],
    ["Ms.V.Mekala (ECE)", "Member"],
    ["Dr.N.Priyadharshini (EEE)", "Member"],
    ["Dr.P.Krishnamoorthy (Chemistry)", "Member"],
    ["Dr.S.Arjunan (Librarian)", "Convener"],
  ];

  return (
    <>
      <Navbar />
      <Section title="Library Committee" />
      <div className="librarycmt-container">
        <p className="librarycmt-description">
          The Library Committee is reconstituted with the following members:
        </p>
        <div className="table-wrapper">
          <table className="librarycmt-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
              {members.map(([name, role], index) => (
                <tr key={index}>
                  <td>{name}</td>
                  <td>{role}</td>
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

export default LibraryCommittee;
