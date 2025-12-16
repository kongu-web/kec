import React from 'react';
import './IQACAcademicCommittee.css';
import Navbar from '../../../HomePage/navbar/Navbar';
import Section from '../../../HomePage/Section/Section';
import Footer from '../../../HomePage/Footer/Footer';
import ScrollToTopButton from '../../../ScrollToTopButton';
import '../../../../App.css';

const members = [
  { name: "Dr.N.Senthilnathan (CCO Accreditation)", role: "Chairman" },
  { name: "Dr.P.Nirmaladevi (ECE)", role: "Member" },
  { name: "Dr.B.Venkatesan (EIE)", role: "Member" },
  { name: "Dr.V.Surendar (EEE)", role: "Member" },
  { name: "Dr.T.Abirami (IT)", role: "Member" },
  { name: "Dr.P.Sundharesalingam (MBA)", role: "Member" },
  { name: "Ms.N.Dhivya Bharathi (FT)", role: "Member" },
  { name: "Mr.A.Ganesh (Mechanical)", role: "Member" },
  { name: "Ms.P.Ananthi (CSD)", role: "Member" },
  { name: "Mr.K.S.Parthasarathi (B.Arch)", role: "Member" },
];

const IQACAcademicCommittee = () => {
  return (
    <>
      <Navbar />
      <Section />
      <div className="iqac-container">
        <h2 className="page-title">
          IQAC, Accreditation and Academic Audit
        </h2>
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
      <ScrollToTopButton />
    </>
  );
};

export default IQACAcademicCommittee;
