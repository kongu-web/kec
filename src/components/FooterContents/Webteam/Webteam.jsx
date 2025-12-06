import React, { useState, useEffect } from 'react';
import './Webteam.css';
import Section from '../../HomePage/Section/Section';
import Navbar from '../../HomePage/navbar/Navbar';
import Footer from '../../HomePage/Footer/Footer';
import ScrollToTopButton from '../../ScrollToTopButton';
import Spinner from '../../Spinner';

const members = {
  staff: [
    {
      name: 'Dr.P.Natesan',
      designation: 'System and Website Incharge / AI',
      role: 'Incharge Staff',
      mobile: "9443840665",
      email: "natesanp@kongu.ac.in"
    },
    {
      name: 'Dr.T.Abirami',
      designation: 'Website Team / IT',
      role: 'Member',
      mobile: "9788654804",
      email: "abi.it@kongu.edu"
    },
    {
      name: 'Dr.M.Geetha',
      designation: 'Website Team / CSE',
      role: 'Member',
      mobile: "9489241573",
      email: "geetha@kongu.ac.in"
    },
    
    {
      name: 'Ms.N.Kaya',
      designation: 'Website Team / CTUG',
      role: 'Member',
      mobile: "8122253359",
      email: "kaya.ctug@kongu.ac.in"
    },
    {
      name: 'Ms.V.M.Mounika',
      designation: 'Website Team / CSD',
      role: 'Member',
      mobile: "8838081322",
      email: "mounika.csd@kongu.ac.in"
    }
  ],
  students: [
    {
      name: 'Mr.S.Aravindh',
      designation: '21ITR005',
      role: 'Web Developer',
      mobile: "9443836278",
      email: "aravindhsuresh1609@gmail.com"
    },
    {
      name: 'Mr.T.Karan',
      designation: '22ITR041',
      role: 'Web Developer',
      mobile: "9842619355",
      email: "karanthiyagarajan17@gmail.com"
    },
    {
      name: 'Mr.V.MohanRaja',
      designation: '23ITR100',
      role: 'Web Developer',
      mobile: "9003948329",
      email: "mohantwo3@gmail.com"
    }
  ]
};

const Webteam = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return loading ? <Spinner /> : (
    <>
      <Section />
      <Navbar />
      <div className="webteam-container">
        <h2 className="webteam-heading">KEC WEB TEAM</h2>
        <p className="webteam-subtitle">Members who designed the KEC Website</p>

        <div className="webteam-section">
          <h3 className="webteam-subheading">Staff Members</h3>
          <div className="webteam-grid">
            {members.staff.map((member, index) => (
              <div className="webteam-card" key={index}>
                <h4>{member.name}</h4>
                <p>{member.designation}</p>
                <span>{member.role}</span>
                <p>{member.mobile}</p>
                <p>{member.email}</p>

              </div>
            ))}
          </div>
        </div>

        <div className="webteam-section">
          <h3 className="webteam-subheading">Student Members</h3>
          <div className="webteam-grid">
            {members.students.map((member, index) => (
              <div className="webteam-card" key={index}>
                <h4>{member.name}</h4>
                <p>{member.designation}</p>
                <span>{member.role}</span>
                <p>{member.mobile}</p>
                <p>{member.email}</p>

              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default Webteam;
