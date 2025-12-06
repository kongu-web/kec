import React from "react";
import "./EndBanner.css";
import bannerImage from "../../../assets/images/cc-banner.png";

const EndBanner = () => {
  return (
    <div className="end-banner">
      <div className="banner-image">
        <img src={bannerImage} alt="Banner" />
      </div>
      <div className="banner-content">
        <div className="content-item2">|</div>
        <div className="content-item">Kongu Engineering College</div>
        <div className="content-item2">|</div>
      </div>
    </div>
  );
};

export default EndBanner;
