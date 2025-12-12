import React,{useState,useEffect} from 'react';
import './Naac.css';
import Navbar from '../../HomePage/navbar/Navbar';
import Footer from '../../HomePage/Footer/Footer';
import ScrollToTopButton from '../../ScrollToTopButton';
import Section from '../../HomePage/Section/Section';

import gradeSheet from '../../../assets/docs/Naac/NAAC_CERTIFICATE_2022.pdf';
import ssrDVV from '../../../assets/docs/Naac/SSR_DVV_31_01_2022.pdf';
import Spinner from '../../Spinner';
import '../../../App.css';

const Naac = () => {
  const [loading, setLoading] = useState(true);
    
      useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1500);
        return () => clearTimeout(timer);
      }, []);
    
    
      return loading ? <Spinner /> : (
    <>
      <Section />
      <Navbar />
      <div className="naac-container">
        <h2 className="page-title">NAAC (National Assessment and Accreditation Council)</h2>
        <p className="naac-description">
          Kongu Engineering College has been accredited by NAAC with <strong>A++ Grade</strong> valid up to <strong>March 28, 2027</strong>.&nbsp;
          <a href={gradeSheet} target="_blank" rel="noopener noreferrer" download>
            [Grade Sheet]
          </a>
        </p>

        <div className="naac-section">
          <h3>SSR after DVV Clarification</h3>
          <a href={ssrDVV} target="_blank" rel="noopener noreferrer" className="naac-link" download>
            View PDF
          </a>
        </div>
      </div>
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default Naac;