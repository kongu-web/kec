import React from "react";
import "./Section.css";
import { useNavigate } from 'react-router-dom';
// import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Link } from 'react-router-dom';


const Section = () => {
    const navigate = useNavigate();

  return (
    <div className="section">
      <div className="section-content">
        <div className="left-links">
          <a href="https://kec.linways.com/">Linways Portal</a>
          {/* <a href="https://placement.kongu.edu/">Placement Drive</a> */}
          <a href="https://kms.kongu.edu/">KMS Portal</a>
          {/* <Link to="/login">
                  <a>IQAC Login</a>
                </Link> */}
          {/* <a href="https://results.kongu.edu/">Results</a> */}
          <a> <span
                onClick={() => navigate('/onlinepayment')}
                style={{ cursor: 'pointer', whiteSpace: 'nowrap', display: 'inline-block' }} >
                Online Payment
              </span>      
               </a>  

               {/* <a href="https://kongu.ac.in/admission"> 
                BE/BTech Admission 2025-26 [TNEA Category]
                <span className="new-badge">NEW</span>
              
               </a>         */}

        </div>
        <div className="info-line">
          <marquee behavior="scroll" direction="left" className="marquee">
            Workshop! | Hands-on Training! | Symposium!
          </marquee>
          
        </div>
      </div>
    </div>
  );
};

export default Section;
