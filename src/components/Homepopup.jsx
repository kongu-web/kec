import './Homepopup.css';
import React, { useState, useEffect } from 'react';

const Homepopup = () => {
  const [showAdmissionNews, setShowAdmissionNews] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    // {
    //   src: 'others/INAUGURALINVITATION-2025.jpg',
    //   alt: 'INAUGURAL',
    //   link: 'https://youtube.com/live/cUnIxkotoIw?feature=share',
    //   text: '📢 BE/BTech & B.Arch Inaugural Function Live Link',
    //   extraLink: {
    //     url: 'https://kongu.ac.in/admission',
    //     text: '📢 BE/BTech Admission 2025–26 [TNEA Category]'
    //   }
    // },
    {
      src: 'others/technofest.jpeg',
      alt: 'Scholarship Info',
       link: 'https://kongu.ac.in/admission',
      text: '📢 BE/BTech Admission 2025–26 [TNEA Category]',
    }
  ];

  // Auto-scroll every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const currentImage = images[currentImageIndex];

  return (
    <>
      {showAdmissionNews && (
        <div className="flash-news-popup">
          <button
            className="flash-news-close-btn"
            onClick={() => setShowAdmissionNews(false)}
          >
            ×
          </button>
          <div className="flash-news-content">
            <img
              src={currentImage.src}
              alt={currentImage.alt}
              className="popup-img"
            />
            <a
              href={currentImage.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {currentImage.text}
            </a>

            {/* Conditionally render extra link if exists */}
            {currentImage.extraLink && (
              <a
                href={currentImage.extraLink.url}
                target="_blank"
                rel="noopener noreferrer"
                className="extra-link"
              >
                {currentImage.extraLink.text}
              </a>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Homepopup;
