import React, { useState, useEffect } from 'react';
import './WebAlbum.css';
import Section from '../../HomePage/Section/Section';
import Navbar from '../../HomePage/navbar/Navbar';
import ScrollToTopButton from '../../ScrollToTopButton';
import Footer from '../../HomePage/Footer/Footer';

const WebAlbum = () => {
  const [images, setImages] = useState([]);
  const [fullscreenImage, setFullscreenImage] = useState(null);

  useEffect(() => {
    const importImages = require.context('../../../assets/images/WebAlbum', false, /\.(jpg|jpeg|png|gif)$/);
    const imagePaths = importImages.keys().map(importImages);
    setImages(imagePaths);
  }, []);

  const openFullscreen = (image) => {
    setFullscreenImage(image);
  };

  const closeFullscreen = () => {
    setFullscreenImage(null);
  };

  return (
    <>
      <Section />
      <Navbar />

      <div className="web-album-container">
        <h1 className="album-title">Web Album</h1>
        <div className="image-grid">
          {images.map((image, index) => (
            <div key={index} className="image-card" onClick={() => openFullscreen(image)}>
              <img src={image} alt={`Image ${index + 1}`} className="album-image" />
            </div>
          ))}
        </div>
      </div>

      {fullscreenImage && (
        <div className="fullscreen-overlay" onClick={closeFullscreen}>
          <span className="close-button" onClick={closeFullscreen}>&times;</span>
          <img src={fullscreenImage} alt="Full View" className="fullscreen-image" />
        </div>
      )}

      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default WebAlbum;
