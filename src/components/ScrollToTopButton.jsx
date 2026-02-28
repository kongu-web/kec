import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import moveToTopGif from '../assets/gif/move-to-top.gif';
import './ScrollToTopButton.css';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { pathname } = useLocation();

  // Scroll to top instantly on every page navigation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className={`scroll-to-top-wrapper ${isVisible ? 'scroll-visible' : 'scroll-hidden'}`}>
      <button
        onClick={scrollToTop}
        className="scroll-to-top-btn"
        aria-label="Scroll to top"
      >
        <img
          src={moveToTopGif}
          alt="Scroll to Top"
          className="scroll-to-top-img"
        />
      </button>
    </div>
  );
};

export default ScrollToTopButton;
