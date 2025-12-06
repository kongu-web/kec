import React from 'react';
import './FinanceCommittee.css';
import Section from '../../../HomePage/Section/Section';
import Navbar from '../../../HomePage/navbar/Navbar';
import Footer from '../../../HomePage/Footer/Footer';
import ScrollToTopButton from '../../../ScrollToTopButton';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillWave } from '@fortawesome/free-solid-svg-icons';


const FinanceCommittee = () => {
  const committeeMembers = [
    { name: 'Dr. R. Parameshwaran  (Principal)', role: 'Chairman' },
    { name: 'Dr. P. N. Palanisamy (Chemistry)', role: 'Member' },
    { name: 'Mr. T. Chandrasekaran (AO)', role: 'Member' },
    { name: 'Dr. P. Balasubramanie (Registrar)', role: 'Member' },
    { name: 'Mr. M. Murali (AR)', role: 'Convener' }
  ];

  return (
    <>
      <Section />
      <Navbar />
      <div className="financecommittee-container">
        <h1 className="financecommittee-title">Finance Committee</h1>
        <p className="financecommittee-desc">
          The Finance Committee is reconstituted with the following members.
        </p>
        <div className="profile-cards">
          {committeeMembers.map((member, index) => (
            <div className="profile-card" key={index}>
              <div className="profile-image-placeholder">
                <FontAwesomeIcon icon={faMoneyBillWave} size="2x" />
              </div>
              <div className="profile-name">{member.name}</div>
              <div className="profile-role">{member.role}</div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default FinanceCommittee;
