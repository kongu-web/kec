import React, { useState, useEffect } from 'react';
import './Slider.css';


const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('../../../assets/images/Achievements/Departments/Civil', false, /\.(png|jpe?g|svg)$/));

const SliderAchievements = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  const handleNext = () => {
    setIsSliding(true);
    setTimeout(() => {
      setIsSliding(false);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 500); // Transition duration matches CSS
  };

  const handlePrev = () => {
    setIsSliding(true);
    setTimeout(() => {
      setIsSliding(false);
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }, 500); // Transition duration matches CSS
  };

  // Automatically change slide every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  if (images.length === 0) {
    return null;
  }

  return (
    <div className="slider-container">
    <h1>Explore the Achievements of Civil Engineering Department</h1>
      <div className={`slider ${isSliding ? 'sliding' : ''}`}>
        <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="slider-image" />
      </div>
      <button className="slider-button prev" onClick={handlePrev}>
        <i className="fas fa-chevron-left"></i>
      </button>
      <button className="slider-button next" onClick={handleNext}>
        <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  );
};

export default SliderAchievements;
