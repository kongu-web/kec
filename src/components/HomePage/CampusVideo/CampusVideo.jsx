import React from "react";
import "./CampusVideo.css";

function CampusVideo() {
  return (
    <div className="campusvideo">
      <div className="textAbove">- Kongu Engineering College -</div>

      <div className="video-container">
        <iframe
          src="https://www.youtube.com/embed/meJ1nZVSjAM?autoplay=1&mute=1&loop=1&controls=0&playlist=meJ1nZVSjAM"
          title="Kongu Campus Video"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>
      </div>

      <div className="overlay"></div>
    </div>
  );
}

export default CampusVideo;
