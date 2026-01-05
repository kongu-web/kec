import React, { useState, useEffect } from "react";
import "./Banner.css";
import img1 from "../../../assets/images/1.png";
import img2 from "../../../assets/images/2.png";
import img3 from "../../../assets/images/3.png";
import img4 from "../../../assets/images/4.png";
import img5 from "../../../assets/images/5.png";

function Banner() {
  const images = [img1, img2, img3, img4, img5];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // 3 seconds

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="Banner-container">
      <img src={images[current]} alt="Campus" className="banner-image" />
    </div>
  );
}

export default Banner;
