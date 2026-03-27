import React, { useState, useRef } from "react";
import "./FelicitationSection.css";

import video1 from "../../../assets/images/HomePage/video1thum.png";
import video2 from "../../../assets/images/HomePage/video2thum.png";
import video3 from "../../../assets/images/HomePage/video3thum.png";
import video4 from "../../../assets/images/HomePage/video4thum.png";
import video5 from "../../../assets/images/HomePage/video5thum.png";
import video6 from "../../../assets/images/HomePage/video6thum.png";
import video7 from "../../../assets/images/HomePage/video7thum.jpeg";
import video8 from "../../../assets/images/HomePage/video8thum.png";


function FelicitationSection() {
  const [currentVideo, setCurrentVideo] = useState("xFd5g7vmZeQ");
  const [showVideo, setShowVideo] = useState(false);
  const [playVideo, setPlayVideo] = useState(false);
  const scrollRef = useRef(null);



  const videos = [
    {
      id: "AziujvFBzmk",
      title: "Banana Fiber",
      desc: "Transforming banana fiber waste into drinking straws and Kraft paper creates eco-friendly alternatives ",
      thumb: video8,
    },
    {
      id: "FxDbwNgap4k",
      title: "ENTHUSIA",
      desc: "DAY 2 GLIMPSE",
      thumb: video7,
    },
    {
      id: "B7NsaTDIJ_8",
      title: "ENTHUSIA",
      desc: "DAY 1 GLIMPSE",
     thumb: video6,
    },
    {
      id: "mOQsJJ7bc5E",
      title: "Grand Guest Lecture on Role of Youth in Nation Building",
      desc: "Thiru.K.Annamalai IPS, Chief Servant",
      thumb: video4,
    },
    {
      id: "zCHAk4zMi5E?si",
      title: "Shaping your life beyond the Class rooms",
      desc: "Dr.Jayanthasri Balakrishnan at KEC",
      thumb: video5,
    },
    {
      id: "xFd5g7vmZeQ",
      title: "New Logo Launch",
      desc: "Cheers to New Heights and New Horizons",
      thumb: video1,
    },
    {
      id: "aHDwHF3gerg",
      title: "Centre of Excellence",
      desc: "Robotics and Automation Tour",
      thumb: video2,
    },
    {
      id: "4u7DNT-wEZ8",
      title: "Entrepreneurship Journey - Idhayam Global Brand",
      desc: "Thiru.V.R.Muthu CEO, Idhayam Family",
      thumb: video3,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const activeVideo = videos[activeIndex];

  const handleThumbnailClick = (index) => {
    setActiveIndex(index);
    setShowVideo(true);
    setPlayVideo(false);

    if (scrollRef.current && scrollRef.current.children[index]) {
      scrollRef.current.children[index].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start'
      });
    }
  };

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
                src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=1&rel=0`}
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
      {/* Thumbnails Carousel */}
      <div className="carousel-container">
        <button
          className="carousel-btn left-btn"
          onClick={() => {
            const scrollAmount = window.innerWidth <= 480 ? 300 : (window.innerWidth <= 768 ? 278 : 325);
            scrollRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
          }}
        >
          ‹
        </button>

        <div className="video-thumbnails" ref={scrollRef}>
          {videos.map((item, i) => (
            <div
              key={i}
              className={`thumb-card ${activeIndex === i ? "active-thumb" : ""}`}
              onClick={() => handleThumbnailClick(i)}
            >
              <img src={item.thumb} alt={item.title} />

              <div className="thumb-overlay">
                <button className="thumb-play">▶</button>
                <p>{item.title}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          className="carousel-btn right-btn"
          onClick={() => {
            const scrollAmount = window.innerWidth <= 480 ? 300 : (window.innerWidth <= 768 ? 278 : 325);
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
          }}
        >
          ›
        </button>
      </div>
    </section>
  );
}

export default FelicitationSection;
