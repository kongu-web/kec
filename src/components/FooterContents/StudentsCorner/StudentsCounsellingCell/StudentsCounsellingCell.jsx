import React from "react";
import "./StudentsCounsellingCell.css";
import Navbar from "../../../HomePage/navbar/Navbar";
import Section from "../../../HomePage/Section/Section";
import Footer from "../../../HomePage/Footer/Footer";

const StudentsCounsellingCell = () => {
  return (
    <>
      <Navbar />
      <Section title="Students Counselling Cell" />
      <div className="counselling-container">
        <p className="counselling-description">
          Students Counselling Cell is formed with the following members:
        </p>
        <div className="table-wrapper">
          <table className="counselling-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Dr. P. VidhyaPriya (Mgt.Studies)</td>
                <td>Chairman</td>
              </tr>
              <tr>
                <td>Dr. S. Varadhaganapathy (IT)</td>
                <td>Member</td>
              </tr>
              <tr>
                <td>Dr. V. Marutharaj BNYS, M.Sc (Psychology)</td>
                <td>Member</td>
              </tr>
              <tr>
                <td>Dr. S. Rajarathinam BNYS, M.S</td>
                <td>Counsellor</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="counselling-portal">
          <p className="portal-text">Ready to access counselling services?</p>
          <a
            className="portal-btn"
            href="https://cpf-frontend.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Take me to the portal
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default StudentsCounsellingCell;
