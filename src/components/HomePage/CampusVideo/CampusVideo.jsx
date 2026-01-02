import React from "react";
import "./CampusVideo.css";
import campusImage from "../../../assets/images/2.png";

function CampusVideo() {
  return (
    <div className="video-container">
      <img src={campusImage} alt="Kongu Campus" />
    </div>
  );
}

export default CampusVideo;
