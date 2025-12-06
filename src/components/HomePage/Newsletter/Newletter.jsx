import React, { useState } from 'react';
import './Newsletter.css';

// Dynamically import all images from Events folder
const imagesContext = require.context(
  '../../../assets/images/Events',
  false,
  /\.(png|jpe?g|JPG|svg)$/
);

// Create an array of image data with filename and src
const imageData = imagesContext.keys().map((key) => {
  const filename = key.replace('./', '');
  return {
    name: filename.split('.')[0],
    src: imagesContext(key),
  };
});

const Newsletter = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3) % imageData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 3 < 0 ? imageData.length - 3 : prevIndex - 3
    );
  };

  return (
    <div className="newsletter-container">
      {/* <h1>Recent Happenings</h1> */}
      <div className="slider">
        <div className="news-boxes">
          {imageData.slice(currentIndex, currentIndex + 3).map((img, index) => (
            <div key={index} className="news-box">
              <div className="image-box">
                <img src={img.src} alt={img.name} />
              </div>

              <div className="text-box">
                <h3>{img.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="button-group">
        <button className="prev-button" onClick={prevSlide}>
          &#8249;
        </button>
        <button className="next-button" onClick={nextSlide}>
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
