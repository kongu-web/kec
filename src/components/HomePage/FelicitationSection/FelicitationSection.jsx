import React, { useState, useRef } from "react";
import "./FelicitationSection.css";

import video1 from "../../../assets/images/HomePage/video1thum.webp";
import video2 from "../../../assets/images/HomePage/video2thum.webp";
import video3 from "../../../assets/images/HomePage/video3thum.webp";
import video4 from "../../../assets/images/HomePage/video4thum.webp";
import video5 from "../../../assets/images/HomePage/video5thum.webp";
import video6 from "../../../assets/images/HomePage/video6thum.webp";
import video7 from "../../../assets/images/HomePage/video7thum.webp";
import video8 from "../../../assets/images/HomePage/video8thum.webp";
import video9 from "../../../assets/images/HomePage/video9thum.webp";
import video10 from "../../../assets/images/HomePage/video10thum.webp";
import video11 from "../../../assets/images/HomePage/video11thum.webp";
import video12 from "../../../assets/images/HomePage/video12thum.webp";
import video13 from "../../../assets/images/HomePage/video13thum.webp";
import video14 from "../../../assets/images/HomePage/video14thum.webp";
import video15 from "../../../assets/images/HomePage/video15thum.webp";
import video16 from "../../../assets/images/HomePage/video16thum.webp";


function FelicitationSection() {
  const [currentVideo, setCurrentVideo] = useState("xFd5g7vmZeQ");
  const [showVideo, setShowVideo] = useState(false);
  const [playVideo, setPlayVideo] = useState(false);
  const scrollRef = useRef(null);



  const videos = [
    {
      id: "iwhzPQRwp10?si",
      title: "Founders Day - 2026 Special Guest : Thiru C.P. Radhakrishnan Vice President of India",
      desc: "Founders Day - 2026",
      thumb: video16,
    },
    {
      id: "Ek7F4DvZBZE?si",
      title: "CoE in HPC & Drone UnSkool",
      desc: "CoE in HPC & Drone UnSkool",
      thumb: video15,
    },
     {
      id: "s9B1nABZ7D0?si",
      title: "✨ Transform Yourself with KEC",
      desc: "✨ Transform Yourself with KEC",
      thumb: video14,
    },
   {
      id: "pvui6WqwwiY?si",
      title: "38th Graduation Day",
      desc: "38th Graduation Day",
      thumb: video13,
    },
     {
      id: "dQCXtJCeh7Q",
      title: "Techno Cultural Fest",
      desc: "Glimpse of the Techno Cultural Fest ",
      thumb: video12,
    },
     {
      id: "efHL1O6bFPI",
      title: "SIH",
      desc: "Cognitivex: GenAI Hackathon",
      thumb: video11,
    },
     {
      id: "-bfVWAnaC4U",
      title: "Sports Event",
      desc: "Kongu Trophy Day 3",
      thumb: video10,
    },
     {
      id: "-5a4A1TKyds",
      title: "Sports Event",
      desc: "Kongu Trophy Day 2",
      thumb: video9,
    },
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
