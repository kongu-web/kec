import React from 'react';
import { useEffect, useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';
import './Ecosystem.css';
import kongubanner from "../../../assets/images/kecglobe.png";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRibbon, faMicrochip, faDiagramProject } from '@fortawesome/free-solid-svg-icons';
import bgimg from '../../../assets/images/Background images/slider-background.jpg';


const Ecosystem = () => {
  const navigate = useNavigate();


    const sliderRef = useRef(null);

    // Load slider images from folder
    const importSliderImages = (r) => r.keys().map(r);
    const sliderImages = importSliderImages(
      require.context("../../../assets/images/InnovationEcosystem/Slider", false, /\.(png|jpe?g|svg|jpg|PNG|webp)$/)
    );
  
  
    // Auto-scroll logic
    useEffect(() => {
      const interval = setInterval(() => {
        if (sliderRef.current) {
          const container = sliderRef.current;
          const scrollAmount = container.offsetWidth;
  
          // Smooth scroll to next set
          container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  
          // Reset if reached end
          if (
            container.scrollLeft + container.offsetWidth >=
            container.scrollWidth - 5
          ) {
            setTimeout(() => {
              container.scrollTo({ left: 0, behavior: "smooth" });
            }, 800); // slight delay before resetting
          }
        }
      }, 5000); // scroll every 5s
  
      return () => clearInterval(interval);
    }, []);

  
  return (
    <div className='ecosystem'>
    <h2>INNOVATION ECOSYSTEM</h2>
   
    <div className="ecosystem-container">

        <div className="kongubanner">
        <DotLottieReact
      src="https://lottie.host/3fbaac5f-b2c1-49d5-a1fa-e8f972f551b6/AkrWPg4P0u.lottie"
      loop
      autoplay
    />
      </div>

      <div className="ecosystem-content">
        <p>
        At Kongu Engineering College, we foster a culture of creativity and groundbreaking innovation. Our students and faculty thrive on fresh perspectives, pioneering solutions, and the implementation of ideas that push the boundaries of conventional thinking. We instill an entrepreneurial spirit in our learners, empowering them with the freedom to ideate, experiment, and innovate. At Kongu, innovation isn't just encouraged—it’s a way of life!        </p>
        <button className="know-more-button" onClick={() => navigate('/coe')}>
          <FontAwesomeIcon icon={faRibbon} /> &ensp;Centre of Excellence
        </button>
        <button className="know-more-button" onClick={() => window.open('https://www.tbi-kec.org/')}>
          <FontAwesomeIcon icon={faDiagramProject} /> &ensp;TBI
        </button>
        <button className="know-more-button" onClick={() => navigate('/hackathons')}>
          <FontAwesomeIcon icon={faMicrochip} /> &ensp;College Events
        </button>
      </div>

      <div className="eco-square-slider" ref={sliderRef}>
  {sliderImages.map((img, index) => (
    <div
      key={index}
      className="eco-slide-image"
    
    >
      <img src={img} alt={`Slide ${index + 1}`} />
    </div>
  ))}
</div>

    </div>
    </div>
  );
};

export default Ecosystem;
