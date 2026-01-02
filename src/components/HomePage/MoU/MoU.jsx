import React, { useState, useEffect } from "react";
import "./MoU.css";

const MoU = () => {
  const [logos, setLogos] = useState([]);

  // Fetch all images from the logos folder
  useEffect(() => {
    const importLogos = async () => {
      const context = require.context("./logos", false, /\.(png|jpe?g|jpg|svg|avif|webp)$/);
      const images = context.keys().map(context);
      setLogos(images);
    };

    importLogos();
  }, []);

  return (
    <div className="mou-container">
        <h1>MoUs with 100+ Top-notch Companies</h1>
      <div className="marquee">
        <div className="marquee-content">
          {logos.map((logo, index) => (
            <img key={index} src={logo} alt={`Company Logo ${index}`} className="logo" />
          ))}
          {/* Duplicate logos for infinite effect */}
          {logos.map((logo, index) => (
            <img key={`duplicate-${index}`} src={logo} alt={`Company Logo Duplicate ${index}`} className="logo" />
          ))}
          {logos.map((logo, index) => (
            <img key={`duplicate-${index}`} src={logo} alt={`Company Logo Duplicate ${index}`} className="logo" />
          ))}
          {logos.map((logo, index) => (
            <img key={`duplicate-${index}`} src={logo} alt={`Company Logo Duplicate ${index}`} className="logo" />
          ))}
          {logos.map((logo, index) => (
            <img key={`duplicate-${index}`} src={logo} alt={`Company Logo Duplicate ${index}`} className="logo" />
          ))}
          {logos.map((logo, index) => (
            <img key={`duplicate-${index}`} src={logo} alt={`Company Logo Duplicate ${index}`} className="logo" />
          ))}
          {logos.map((logo, index) => (
            <img key={`duplicate-${index}`} src={logo} alt={`Company Logo Duplicate ${index}`} className="logo" />
          ))}
          {logos.map((logo, index) => (
            <img key={`duplicate-${index}`} src={logo} alt={`Company Logo Duplicate ${index}`} className="logo" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoU;
