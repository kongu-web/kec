import React, { useState } from "react";
import "./FelicitationSection.css";

import video1 from "../../../assets/images/HomePage/video1thum.png";
import video2 from "../../../assets/images/HomePage/video2thum.png";
import video3 from "../../../assets/images/HomePage/video3thum.png";

function FelicitationSection() {
    const [currentVideo, setCurrentVideo] = useState("xFd5g7vmZeQ");
  const [showVideo, setShowVideo] = useState(false);
  const [playVideo, setPlayVideo] = useState(false);

  

  const videos = [
    {
      id: "xFd5g7vmZeQ",
      title: "Annual Convocation 2025",
      desc: "Celebrating academic achievements and new beginnings",
      thumb: video1,
    },
    {
      id: "aHDwHF3gerg",
      title: "Toppers Felicitation 2025",
      desc: "Honoring our top performers",
      thumb: video2,
    },
    {
      id: "4u7DNT-wEZ8",
      title: "Entrepreneurship Journey",
      desc: "Inspiring innovation & leadership",
      thumb: video3,
    },
    ];
    
    const [activeIndex, setActiveIndex] = useState(0);

    const activeVideo = videos[activeIndex];

  return (
    <section className="felicitation-section">
      <span className="section-pill">Felicitation Ceremony @ KEC</span>

      <h2>Celebrating Excellence & Achievement</h2>
      <p className="section-subtitle">
        Witness our proud moments as we honor outstanding performers,
        innovators, and achievers
      </p>

      {/* Main Video */}
      <div className="video-card">
        {!showVideo ? (
          <div className="video-poster" onClick={() => setShowVideo(true)}>
            <img src={activeVideo.thumb} alt={activeVideo.title} />
            <button className="play-btn">▶</button>

            <div className="video-overlay">
              <h3>{activeVideo.title}</h3>
              <p>{activeVideo.desc}</p>
            </div>
          </div>
        ) : (
          <div className="video-frame">
            {!playVideo ? (
              <div className="video-poster" onClick={() => setPlayVideo(true)}>
                <img src={activeVideo.thumb} alt={activeVideo.title} />

                <div className="video-overlay">
                  <h3>{activeVideo.title}</h3>
                  <p>{activeVideo.desc}</p>
                </div>

                <button className="play-btn">▶</button>
              </div>
            ) : (
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=1`}
                title={activeVideo.title}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            )}
          </div>
        )}
      </div>

      {/* Thumbnails */}
      <div className="video-thumbnails">
        {videos.map((item, i) => (
          <div
            key={i}
            className={`thumb-card ${activeIndex === i ? "active-thumb" : ""}`}
            onClick={() => {
              setActiveIndex(i);
              setShowVideo(true);
              setPlayVideo(false);
            }}
          >
            <img src={item.thumb} alt={item.title} />

            <div className="thumb-overlay">
              <button className="thumb-play">▶</button>
              <p>{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FelicitationSection;
