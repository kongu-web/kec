import React, { useState, useEffect, useCallback } from "react";
import "./WebAlbum.css";
import Navbar from "../../HomePage/navbar/Navbar";
import Footer from "../../HomePage/Footer/Footer";
import "../../../App.css";
import AOS from "aos";
import "aos/dist/aos.css";

const WebAlbum = () => {
  const [activeTab, setActiveTab] = useState("photos");
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [fullMedia, setFullMedia] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });

    // Import Images
    const importImages = require.context(
      "../../../assets/images/WebAlbum/images",
      false,
      /\.(jpg|jpeg|png|gif|webp)$/
    );
    const imageList = importImages.keys().map((key) => ({
      src: importImages(key),
      name: key.replace("./", "").split(".")[0].replace(/_/g, " ").toUpperCase(),
      type: "image"
    }));
    setImages(imageList);

    // Import Videos
    const importVideos = require.context(
      "../../../assets/images/WebAlbum/videos",
      false,
      /\.(mp4|webm|ogg)$/
    );
    const videoList = importVideos.keys().map((key) => ({
      src: importVideos(key),
      name: key.replace("./", "").split(".")[0].replace(/_/g, " ").toUpperCase(),
      type: "video"
    }));
    setVideos(videoList);
  }, []);

  const openFullscreen = (index, type) => {
    setCurrentIndex(index);
    setFullMedia(type === "photos" ? images[index] : videos[index]);
  };

  const closeFullscreen = () => {
    setFullMedia(null);
    setCurrentIndex(null);
  };

  const showNext = useCallback((e) => {
    if (e) e.stopPropagation();
    const list = activeTab === "photos" ? images : videos;
    const nextIndex = (currentIndex + 1) % list.length;
    setCurrentIndex(nextIndex);
    setFullMedia(list[nextIndex]);
  }, [currentIndex, activeTab, images, videos]);

  const showPrev = useCallback((e) => {
    if (e) e.stopPropagation();
    const list = activeTab === "photos" ? images : videos;
    const prevIndex = (currentIndex - 1 + list.length) % list.length;
    setCurrentIndex(prevIndex);
    setFullMedia(list[prevIndex]);
  }, [currentIndex, activeTab, images, videos]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!fullMedia) return;
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "Escape") closeFullscreen();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [fullMedia, showNext, showPrev]);

  return (
    <div className="web-album-page">
      <div className="mesh-gradient"></div>
      <Navbar />

      <div className="web-album-container">
        {/* ─── Immersive Gallery Hero ─── */}
        <section className="album-hero-section">
          <div className="hero-mesh-overlay"></div>
          <div className="hero-content-centered" data-aos="fade-up">
            <div className="hero-tag-wrapper">
              <span className="hero-tag-pill">KEC DIGITAL ARCHIVE</span>
            </div>
            <h1 className="page-title">
              Digital Memories
            </h1>
            <p className="hero-description">
              Capturing the vibrant spirit, academic excellence, and life-changing 
              moments at Kongu Engineering College.
            </p>
            
            {/* <div className="hero-quick-stats">
              <div className="quick-stat">
                <span className="stat-value">{images.length}</span>
                <span className="stat-name">Captures</span>
              </div>
              <div className="stat-dot"></div>
              <div className="quick-stat">
                <span className="stat-value">{videos.length}</span>
                <span className="stat-name">Stories</span>
              </div>
            </div> */}
          </div>
          
          <div className="hero-floating-elements">
            <div className="floating-card c1"></div>
            <div className="floating-card c2"></div>
            <div className="floating-card c3"></div>
          </div>
        </section>

        {/* ─── Integrated Navigation ─── */}
        <div className="album-nav-wrapper">
          <div className="album-nav-container">
            <div className="nav-info">
              <h3>Archive Browser</h3>
              <p>Filter by media type</p>
            </div>
            <div className="nav-toggle-group">
              <button
                className={`nav-toggle-item ${activeTab === "photos" ? "active" : ""}`}
                onClick={() => setActiveTab("photos")}
              >
                <i className="fas fa-camera"></i>
                <span>Photos</span>
                <span className="count-dot">{images.length}</span>
              </button>
              <button
                className={`nav-toggle-item ${activeTab === "videos" ? "active" : ""}`}
                onClick={() => setActiveTab("videos")}
              >
                <i className="fas fa-video"></i>
                <span>Videos</span>
                <span className="count-dot">{videos.length}</span>
              </button>
            </div>
          </div>
        </div>

        <div className="gallery-content">
          <div className={`media-masonry ${activeTab}`}>
            {(activeTab === "photos" ? images : videos).map((item, index) => (
              <div
                key={index}
                className="media-card-wrapper"
                data-aos="zoom-in"
                data-aos-delay={index * 50}
                onClick={() => openFullscreen(index, activeTab)}
              >
                <div className="media-card">
                  {item.type === "image" ? (
                    <img
                      src={item.src}
                      alt={item.name}
                      loading="lazy"
                      className="gallery-media"
                    />
                  ) : (
                    <video
                      src={item.src}
                      className="gallery-media"
                      muted
                      onMouseOver={(e) => e.target.play()}
                      onMouseOut={(e) => {
                        e.target.pause();
                        e.target.currentTime = 0;
                      }}
                    />
                  )}
                  <div className="media-overlay">
                    <span className="media-category">{item.name}</span>
                    <span className="view-btn">
                      {item.type === "image" ? <i className="fas fa-expand"></i> : <i className="fas fa-play"></i>}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {(activeTab === "videos" && videos.length === 0) && (
            <div className="no-media" data-aos="fade-up">
              <i className="fas fa-video-slash"></i>
              <p>The video gallery is currently being curated.</p>
            </div>
          )}
        </div>
      </div>

      {fullMedia && (
        <div className="fullscreen-overlay" onClick={closeFullscreen}>
          <button className="nav-btn prev" onClick={showPrev}>
            <i className="fas fa-chevron-left"></i>
          </button>

          <div className="fullscreen-content" onClick={(e) => e.stopPropagation()}>
            {fullMedia.type === "image" ? (
              <img src={fullMedia.src} alt="Full View" className="fullscreen-media" />
            ) : (
              <video src={fullMedia.src} controls autoPlay className="fullscreen-media" />
            )}
            <div className="media-info">
              <span className="media-title">{fullMedia.name}</span>
              <span className="media-counter">
                {currentIndex + 1} / {(activeTab === "photos" ? images : videos).length}
              </span>
            </div>
          </div>

          <button className="nav-btn next" onClick={showNext}>
            <i className="fas fa-chevron-right"></i>
          </button>

          <button className="close-button" onClick={closeFullscreen}>
            &times;
          </button>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default WebAlbum;
