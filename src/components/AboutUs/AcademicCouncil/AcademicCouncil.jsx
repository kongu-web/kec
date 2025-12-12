import React,{useState,useEffect} from 'react';
import './AcademicCouncil.css';
import Section from '../../HomePage/Section/Section';
import Navbar from '../../HomePage/navbar/Navbar';
import Footer from '../../HomePage/Footer/Footer';
import ScrollToTopButton from '../../ScrollToTopButton';
import '../../../App.css';

import Spinner from '../../Spinner';

const AcademicCouncil = () => {

  const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const timer = setTimeout(() => setLoading(false), 1500);
      return () => clearTimeout(timer);
    }, []);
  
  
    
  const sections = [
    {
      title: 'Chairman',
      members: ['Dr.R.Parameshwaran, Principal, Kongu Engineering College']
    },
    {
      title: 'University Nominees',
      members: [
        'Dr.C.Valliyammai, Professor, CSE, Anna University, Chennai',
        'Dr.J.Jayapriya, Professor, Applied Science & Technology, Anna University, Chennai',
        'Dr.P.Thirumal, Professor, Mechanical Engg., GCE, Bargur'
      ]
    },
    {
      title: 'Governing Council Nominees',
      members: [
        'Dr.M.Bhaskar, Professor, ECE, NIT, Trichy',
        'Dr.S.Kanmani, Professor, IT, Puducherry Tech University',
        'Dr.Vaidyanathan Subramanian, Global Foundries, Bangalore',
        'Mr.Dhananjeya Kumar, Head, Reprocessing Plant, IGCAR, Kalpakkam'
      ]
    },
    {
      title: 'Chairmen - Board of Studies',
      members: [
        'Dr.S.Balaji - Civil Engg',
        'Dr.B.Meenakshi Priya - Mechanical Engg',
        'Dr.N.Kasthuri - ECE',
        'Dr.R.Thangarajan - CSE & IT',
        'Dr.M.Karthik - EEE',
        'Dr.R.Baskar - Food Tech',
        'Dr.C.Duraisamy - S&H',
        'Dr.P.Karthikeyan - Management Science'
      ]
    },
    {
      title: 'Controller of Examinations',
      members: ['Dr.P.Shanmugam']
    },
    {
      title: 'Teaching Staff Representatives',
      members: [
        'Dr.R.Somasundaram - MBA',
        'Dr.T.P.Sathishkumar - Mechanical',
        'Dr.P.Jayanthi - CSE',
        'Dr.P.Srinivasan - Chemistry'
      ]
    },
    {
      title: 'Special Invitees',
      members: [
        'Dr.P.Balasubramanie - Registrar',
        'Dr.K.Krishnamurthy - Student Affairs',
        'Dr.P.N.Palanisamy - Planning Cell',
        'Dr.R.Parameshwaran - TBI & IIC',
        'Dr.N.Senthilnathan - Accreditation',
        'Dr.R.Rajasekar - R&D',
        'Dr.N.Shanthi - Training Officer',
        'Dr.K.Kannan - Sports & Hostel I/C',
        'Dr.P.Natesan - Computer Systems I/C',
        'Dr.P.Selvakumar - HoD, Mech',
        'Dr.P.C.Murugan - HoD, Auto',
        'Dr.S.Suji Prasad - HoD, EIE',
        'Dr.S.Malliga - HoD, CSE',
        'Dr.S.Anandamurugan - HoD, IT',
        'Dr.C.S.Kanimozhi Selvi - HoD, AI',
        'Dr.V.Sangeetha - HoD, Chemical',
        'Dr.A.Tamilarasi - HoD, CA',
        'Dr.S.Kalaiselvi - HoD, CT-UG',
        'Dr.E.Gothai - HoD, CT-PG',
        'Dr.P.Dhakshinamoorthy - Placement Officer',
        'Dr.M.Dhavamani - HoD, Maths',
        'Dr.K.Prabhu - HoD, Physics',
        'Dr.P.Manigandan - HoD, Chemistry',
        'Dr.J.Rajini - HoD, English'
      ]
    },
    {
      title: 'Member Secretary',
      members: ['Dr.G.Murugesan, Chief Coordinator (Academic)']
    }
  ];

  return loading ? <Spinner /> : (
    <>
    <Section/>
    <Navbar/>
    <div className="academic-council-container">
      <h1 className="page-title">Academic Council</h1>
      {sections.map((section, index) => (
        <div key={index} className="academic-section">
          <h2 className="academic-section-title">{section.title}</h2>
          <ul className="academic-members">
            {section.members.map((member, i) => (
              <li key={i}>{member}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    <Footer/>
    <ScrollToTopButton/>
    </>

  );
};

export default AcademicCouncil;
