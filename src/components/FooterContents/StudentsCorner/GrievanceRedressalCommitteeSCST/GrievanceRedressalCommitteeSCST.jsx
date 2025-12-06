import React from 'react';
import './GrievanceRedressalCommitteeSCST.css';
import Section from '../../../HomePage/Section/Section';
import Navbar from '../../../HomePage/navbar/Navbar';
import Footer from '../../../HomePage/Footer/Footer';
import ScrollToTopButton from '../../../ScrollToTopButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserShield, faPhone } from '@fortawesome/free-solid-svg-icons';

const members = [
  { name: "Dr.R.Viswanathan (CCO S&H)", role: "Chairman", mobile: "9715814284" },
  { name: "Dr.K.Prabu (HOD Physics)", role: "Member", mobile: "9095171720" },
  { name: "Dr.R.Ramyasri (English)", role: "Member", mobile: "8012617387" },
  { name: "Mr.K.V.Satheesh Kumar (Mechanical)", role: "Member", mobile: "6383219802" },
  { name: "Mr.P.Karthikeyan (EEE)", role: "Member", mobile: "9976466438" },
  { name: "Ms.K.K.Sri Mohana Priya (FT)", role: "Member", mobile: "9524245729" },
  { name: "Ms.M.Kannukkiniyal (CSE)", role: "Member", mobile: "6374088547" },
];

const GrievanceRedressalCommitteeSCST = () => {
  return (
    <>
      <Section />
      <Navbar />
      <div className="scst-container">
        <h1 className="title">Grievance Redressal & Empowerment Committee for SC/ST</h1>
        <div className="cards">
          {members.map((member, index) => (
            <div className="card" key={index}>
              <FontAwesomeIcon icon={faUserShield} className="profile-icon" />
              <h3>{member.name}</h3>
              <p className="role">{member.role}</p>
              <p className="mobile"><FontAwesomeIcon icon={faPhone} /> {member.mobile}</p>
            </div>
          ))}
        </div>
        <div className="objectives">
          <h2>Objectives</h2>
          <ul>
            <li>To enhance the employability of SC/ST students</li>
            <li>To redress the grievances / complaints of SC/ST students</li>
            <li>To provide counseling services to SC/ST students</li>
            <li>To redress the grievances / complaints of SC/ST employees</li>
          </ul>
        </div>
      </div>
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default GrievanceRedressalCommitteeSCST;
