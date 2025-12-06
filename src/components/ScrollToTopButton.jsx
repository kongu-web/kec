import React, { useState, useEffect } from "react";
import "./ScrollToTopButton.css";
import Keclogo from "../../src/assets/images/kecglobe.png"; // Make sure the path is correct

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    setIsVisible(window.scrollY > 200);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    isVisible && (
      <button className="scroll-to-top" onClick={scrollToTop}>
        <img src={Keclogo} alt="Scroll to top" className="kec-logo" />
      </button>
    )
  );
};

export default ScrollToTopButton;
