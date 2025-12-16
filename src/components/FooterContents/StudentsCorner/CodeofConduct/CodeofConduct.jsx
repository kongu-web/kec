import React from 'react';
import './CodeofConduct.css';
import Section from '../../../HomePage/Section/Section';
import Navbar from '../../../HomePage/navbar/Navbar';
import Footer from '../../../HomePage/Footer/Footer';
import ScrollToTopButton from '../../../ScrollToTopButton';
import '../../../../App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBalanceScale } from '@fortawesome/free-solid-svg-icons';


const CodeofConduct = () => {
  const committeeMembers = [
    { name: 'Dr.B.Meenakshi Priya (MTS)', role: 'Chairman' },
    { name: 'Dr.S.Varadhaganapathy  (IT)', role: 'Member' },
    { name: 'Dr.T.Meeradevi  (ECE)', role: 'Member' },
    { name: 'Dr.S.J.Suji Prasad  (EIE)', role: 'Member' },
    { name: 'Dr.J.Rajini (English)', role: 'Convener' }
  ];

  return (
    <>
      <Section />
      <Navbar />
      <div className="codeconduct-container">
        <h1 className="page-title">Code of Conduct and Ethics Committee</h1>
        <p className="codeconduct-desc">Code of Conduct and Ethics Committee is reconstituted with the following members.</p>
        <div className="profile-cards">
          {committeeMembers.map((member, index) => (
            <div className="profile-card" key={index}>
              <div className="profile-image-placeholder">
                <FontAwesomeIcon className="icon"icon={faBalanceScale} size="2x" />
              </div>
              <div className="profile1-name">{member.name}</div>
              <div className="profile1-role">{member.role}</div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default CodeofConduct;
