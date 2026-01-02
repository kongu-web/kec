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
            <span>
              <a href="https://kongu.ac.in/admission"target="_blank" rel="noopener noreferrer">
                📢  BE/BTech Admission 2025-26 [TNEA Category]
              </a>
            </span>
            <br/>
             <span>
              <a href="https://kecidealab.kongu.edu/"target="_blank" rel="noopener noreferrer">
                📢  KEC - AICTE Idea Lab
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
