import React, { useState } from 'react';
import './FlashNews.css';



const FlashNews = () => {
  const [showAdmissionNews, setShowAdmissionNews] = useState(true);
  const [showJRFNews, setShowJRFNews] = useState(true);

  return (
    <>
      {showAdmissionNews && (
        <div className="flash-news-popup">
          <button className="flash-news-close-btn" onClick={() => setShowAdmissionNews(false)}>
            ×
          </button>
          <div className="flash-news-content">
            {/* <span>
              <a href="https://kongu.ac.in/admission"target="_blank" rel="noopener noreferrer">
                📢  BE/BTech Admission 2025-26 [TNEA Category]
              </a>
            </span>
            <br/> */}
             {/* <span>
              <a href="https://grad2026.kongu.edu/"target="_blank" rel="noopener noreferrer">
                📢  38th Graduation Day Registration Link
              </a>
            </span> */}
            {/* <br/> */}
            {/* <span>
              <a href="https://forms.office.com/pages/responsepage.aspx?id=M1G4uEkE1UKRnJzJJ-FblOaVkm1VBqhLqiQwpjtHzPpUNk5YMk1UVUJYVlhZRDdDMlcyWUU0UFNFSC4u&origin=lprLink&route=shorturl"target="_blank" rel="noopener noreferrer">
                📢 Sports Quota Admissions 2026
              </a>
            </span> */}
            
      <span>
        <a href="others/mts_pa2026.pdf" target="_blank" rel="noopener noreferrer">
          📢 Recruitment of Project Assistant - Department of Mechatronics Engineering.
        </a>
      </span>
            
          </div>
        </div>
      )}


      {/* {showJRFNews && (
  <div className="flash-news-popup">
    <button className="flash-news-close-btn" onClick={() => setShowJRFNews(false)}>
      ×
    </button>
    <div className="flash-news-content">
      <span>
        <a href="others/ai_jrf2025.pdf" target="_blank" rel="noopener noreferrer">
          📢 Recruitment of Junior Research Fellow (JRF) - Department of Artificial Intelligence.
        </a>
      </span>
      <span>
        <a href="others/mech_jrf2025.pdf" target="_blank" rel="noopener noreferrer">
          📢 Recruitment of Junior Research Fellow (JRF) - Department of Mechanical Engineering.
        </a>
      </span>
    </div>
  </div>
)} */}

    </>
  );
};

export default FlashNews;
