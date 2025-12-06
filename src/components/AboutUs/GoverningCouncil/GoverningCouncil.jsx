import React,{useState,useEffect} from 'react';
import './GoverningCouncil.css';
import Section from '../../HomePage/Section/Section';
import Navbar from '../../HomePage/navbar/Navbar';
import Footer from '../../HomePage/Footer/Footer';
import ScrollToTopButton from '../../ScrollToTopButton';
import Spinner from '../../Spinner';

const members = [
  {
    name: 'Thiru.R.R.Sathiyamurthi',
    designation: 'Secretary, The Kongu Vellalar Institute of Technology Trust',
    role: 'Chairman',
  },
  {
    name: 'Thiru.P.C.Palanisamy',
    designation: 'President, The Kongu Vellalar Institute of Technology Trust',
    role: 'Member',
  },
  {
    name: 'Thiru.E.R.Kaarthikeyan ',
    designation: 'Treasurer, The Kongu Vellalar Institute of Technology Trust',
    role: 'Member',
  },
  {
    name: 'Thiru.E.R.K.Krishnan ',
    designation: 'Correspondent, Kongu Engineering College',
    role: 'Member',
  },
  {
    name: 'Thiru.P.Sachithanandan',
    designation: 'Correspondent, Kongu Arts and Science College',
    role: 'Member',
  },
  {
    name: 'Thiru.K.Karthikeyan',
    designation: 'Kongu Polytechnic College, Kongu Private ITI and Kongu Naturopathy and Yoga Medical College',
    role: 'Member',
  },
  {
    name: 'The Director',
    designation: 'Directorate of Technical Education, Chennai-600025',
    role: 'Member (Ex-Officio)',
  },
  {
    name: 'Dr. S. P. Jeyapriya',
    designation: 'Professor (CAS), Civil Engg., GCT, Coimbatore',
    role: 'State Government Nominee',
  },
  {
    name: 'Dr. M. A. Bhagyaveni',
    designation: 'Professor, ECE Dept., CEG Campus, Anna University, Chennai',
    role: 'Anna University Nominee',
  },
  {
    name: 'Mr.K.K.Tamilarasan',
    designation: 'Head HR and ESG, Sakthi Auto Component Limited., Coimbatore',
    role: 'Member from Industry',
  },
  {
    name: 'Dr. P. Balasubramanie MSc MPhil PhD ME',
    designation: 'Registrar, Kongu Engineering College',
    role: 'Administrative Staff of the College',
  },
  {
    name: 'Dr. G. Murugesan MS ME PhD',
    designation: 'Chief Coordinator Academic, Professor, ECE, KEC',
    role: 'Member from Faculty',
  },
  {
    name: 'Dr. Karthikeyan Selvarajan',
    designation: 'Associate Professor, Civil Engg., KEC',
    role: 'Member from Faculty',
  },
  {
    name: 'Dr. R. Parameshwaran ME PhD',
    designation: 'Principal, Kongu Engineering College, Perundurai',
    role: 'Member Secretary',
  },
];

const GoverningCouncil = () => {
  const [loading, setLoading] = useState(true);
    
      useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1500);
        return () => clearTimeout(timer);
      }, []);
    
    
      return loading ? <Spinner /> : (
    <>
      <Section />
      <Navbar />
      <div className="gc-container">
        <h2 className="gc-heading">Governing Council Members</h2>
        <p className="gc-subtitle">Members of the Governing Council Body of the Institution with effect from April 2024</p>
        <div className="gc-grid">
          {members.map((member, index) => (
            <div className="gc-card" key={index}>
              <h3>{member.name}</h3>
              <p>{member.designation}</p>
              <span>{member.role}</span>
            </div>
          ))}
        </div>
      </div>
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default GoverningCouncil;
