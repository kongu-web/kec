import React, { useState, useEffect } from "react";
import "./VrTour.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVrCardboard } from '@fortawesome/free-solid-svg-icons';

const VrTour = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showIframe, setShowIframe] = useState(false);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);  // Update scroll position
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const openIframe = () => {
    setShowIframe(true);
  };

  const closeIframe = () => {
    setShowIframe(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const buttonBottom = 20 + (scrollPosition > 0 ? Math.min(scrollPosition, 100) : 0);

  return (
    <div>
      {/* Floating button */}
      <button
        className="vr-tour"
        onClick={openIframe}
        style={{ bottom: `${buttonBottom}px` }}
      >
        <FontAwesomeIcon icon={faVrCardboard} className="btn-icon" />
      </button>

      {/* Iframe Modal */}
      {showIframe && (
        <div className="iframe-modal">
          <button className="close-modal" onClick={closeIframe}>X</button>
          <iframe
            src="https://kongu.edu/itpark360/"
            title="VR Tour"
            className="iframe-popup"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default VrTour;
