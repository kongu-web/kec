import React, { useState } from 'react';
import './VideoSlider.css';

// Video list with YouTube links + names
const videos = [
  { 
    name: "New Logo Launch", 
    url: "https://www.youtube.com/embed/xFd5g7vmZeQ?si=P4o_miF3Ng7uqNky&rel=0" 
  },
  { 
    name: "Felicitation Ceremony", 
    url: "https://www.youtube.com/embed/czBpJlOCfhA?si=EJ-2NwxRnVzHF4uv&rel=0" 
  },
  { 
    name: "Felicitation Ceremony", 
    url: "https://www.youtube.com/embed/mVcj26kD308?si=MqlC0GTiS9tO1MD4&re=0" 
  },
  { 
    name: "Felicitation Ceremony", 
    url: "https://www.youtube.com/embed/zr-5iP3vDwg?si=8uNy8uAWjmx-UyAX&rel=0" 
  },
   { 
    name: "Team BANRAW", 
    url: "https://www.youtube.com/embed/AziujvFBzmk?si=ULCCzzbpiuNXpLMD&rel=0" 
  },
   { 
    name: "COE in Robotics ", 
    url: "https://www.youtube.com/embed/aHDwHF3gerg?si=K518QVdzleJBSJP_&rel=0" 
  },
  { 
    name: "Guest Lecture by Thiru.V.R.Muthu CEO, Idhayam Family ", 
    url: "https://www.youtube.com/embed/4u7DNT-wEZ8?si=Hy9wMZ2C668EvQYP&rel=0" 
  },
  { 
    name: "CSDC Inauguration ", 
    url: "https://www.youtube.com/embed/JzLDCUinlyc?si=xjhB685DNQlbZr-r&rel=0" 
  },
  { 
    name: "RAAGA 3.0", 
    url: "https://www.youtube.com/embed/3fLC6VVFKMw?si=JHDX-EmrUaZT9EkO&rel=0" 
  },
  { 
    name: "Kongu Trophy Day - 3", 
    url: "https://www.youtube.com/embed/-bfVWAnaC4U?si=K0k6rEiQchwufYKZ&rel=0" 
  },
   { 
    name: "Kongu Trophy Day - 2", 
    url: "https://www.youtube.com/embed/-5a4A1TKyds?si=0E-G8AQfHbzu758w&rel=0" 
  },
   { 
    name: "Kongu Trophy Day - 1", 
    url: "https://www.youtube.com/embed/TS9oCWmTLMk?si=WL4Vm7Hex3obUYk-&rel=0" 
  },
  { 
    name: "CENTRE OF EXCELLENCE IN ADVANCED FUEL INJECTION SYSTEM", 
    url: "https://www.youtube.com/embed/Y6H5V6ijZf4?si=m5YNty7vfOduVKBl&rel=0" 
  },
    { 
    name: "Cognitivex : GenAI Hackathon", 
    url: "https://www.youtube.com/embed/efHL1O6bFPI?si=R4jljW5uOCZ3vzzZ&rel=0" 
  },
  { 
    name: "Centre of Excellence for Design", 
    url: "https://www.youtube.com/embed/8JS8FQmSaYw?si=Fu3Ea7dIw_EYPq9E&rel=0" 
  },
  { 
    name: "Techno Cultural Fest", 
    url: "https://www.youtube.com/embed/-xshie-ToBI?si=IyQXoWSfKCPLbiYX&rel=0" 
  },
  { 
    name: "Techno Cultural Fest", 
    url: "https://www.youtube.com/embed/dQCXtJCeh7Q?si=VPCYP_akbj618OpZ&rel=0" 
  },
   { 
    name: "Idea Selection Process", 
    url: "https://www.youtube.com/embed/F_T8ZlMvw60?si=JpOv1Zr2vA893saK&rel=0" 
  }
];

const VideoSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  const handleNext = () => {
    setIsSliding(true);
    setTimeout(() => {
      setIsSliding(false);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 500);
  };

  const handlePrev = () => {
    setIsSliding(true);
    setTimeout(() => {
      setIsSliding(false);
      setCurrentIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
    }, 500);
  };

  return (
    <div className="slider-container">
      {/* Centered video name */}
      <h2 className="video-title">{videos[currentIndex].name}</h2>

      <div className={`slider ${isSliding ? 'sliding' : ''}`}>
        <iframe
          key={currentIndex}
          src={videos[currentIndex].url}
          title={videos[currentIndex].name}
          className="slider-video"
          allow="autoplay; fullscreen"
          allowFullScreen
        />
        {/* <iframe
          src="https://www.youtube.com/embed/meJ1nZVSjAM?autoplay=1&mute=1&loop=1&controls=0&playlist=meJ1nZVSjAM"
          title="Kongu Campus Video"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe> */}
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

export default VideoSlider;
