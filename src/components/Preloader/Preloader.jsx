import React, { useEffect, useState } from 'react';
import './Preloader.css';
import loaderGif from '../../assets/gif/Five_Dots_Loading_combined_colors.gif';

const Preloader = ({ onComplete }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      if (onComplete) {
        onComplete();
      }
    }, 2800);
    return () => clearTimeout(timer);
  }, [onComplete]);

  const renderStaggeredText = (text, startDelay = 0) => {
    return text.split('').map((char, index) => (
      <span key={index} style={{ animationDelay: `${startDelay + index * 0.05}s` }}>
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  if (!loading) return null;

  return (
    <div className="preloader-overlay">
      <div className="loader-asset-container">
        <img src={loaderGif} alt="KEC Loading..." className="pre-loader-gif" />
      </div>
      
      <div className="tech-footer">
        <h2 className="tech-branding">
          <div className="brand-word kec-loader-green">{renderStaggeredText("KONGU ", 0)}</div>
          <div className="brand-word kec-loader-blue">{renderStaggeredText("ENGINEERING", 0.3)}</div>
          <div className="brand-word kec-loader-green">{renderStaggeredText(" COLLEGE", 0.6)}</div>
        </h2>
        <div className="tech-status">
          {/* <span className="status-text">INITIALIZING</span> */}
          <div className="status-dots">
            <span></span><span></span><span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
