import React, { useState, useEffect } from "react";
import "./Updates.css";
import Footer from "../../HomePage/Footer/Footer";
import ScrollToTopButton from "../../ScrollToTopButton";
import Section from "../../HomePage/Section/Section";
import Navbar from "../../HomePage/navbar/Navbar";
import Spinner from "../../Spinner";

// Import all images from Updates folder
const importAll = (r) =>
  r.keys().map((key) => ({
    src: r(key),
    name: key
      .split("/")
      .pop()
      .replace(/\.[^/.]+$/, ""),
  }));

// Load and sort images by year (descending)
let images = importAll(
  require.context(
    "../../../assets/images/Updates",
    false,
    /\.(png|jpe?g|JPG|jpg|svg)$/
  )
);

images.sort((a, b) => {
  const extractDate = (name) => {
    const match = name.match(/(\d{1,2})\.(\d{1,2})\.(\d{4})$/);
    if (match) {
      const [day, month, year] = match.slice(1);
      const formattedDate = `${year}-${month.padStart(2, "0")}-${day.padStart(
        2,
        "0"
      )}`;
      return new Date(formattedDate);
    }
    return new Date(0);
  };

  return extractDate(b.name) - extractDate(a.name);
});

console.log(images);

//const sortedImages = [...images].sort((a,b)=>new Date(b.date)-new Date(a.date));

const Updates = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const splitLines = (name) => {
    const words = name.split(" ");
    const mid = Math.ceil(words.length / 2);
    return {
      line1: words.slice(0, mid).join(" "),
      line2: words.slice(mid).join(" "),
    };
  };

  const handleCardClick = (img) => setSelectedImage(img);
  const handleCloseModal = () => setSelectedImage(null);

  return loading ? (
    <Spinner />
  ) : (
    <>
      {/* <Section/> */}
      <Navbar />
      <div className="updates-container">
        <h2 className="updates-title">Recent Updates</h2>
        <div className="updates-grid">
          {images.map((img, idx) => {
            const { line1, line2 } = splitLines(img.name);
            return (
              <div
                className="updates-card"
                key={idx}
                onClick={() => handleCardClick(img)}
              >
                <img src={img.src} alt={img.name} className="updates-img" />
                <p className="updates-caption">
                  {line1}
                  <br />
                  {line2}
                </p>
              </div>
            );
          })}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div className="updates-modal" onClick={handleCloseModal}>
            <div className="updates-modal-content">
              <img
                src={selectedImage.src}
                alt={selectedImage.name}
                className="updates-modal-image"
              />
              <div className="updates-modal-text">{selectedImage.name}</div>
              <button
                className="updates-modal-close"
                onClick={handleCloseModal}
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default Updates;
