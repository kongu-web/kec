import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import "./Banner.css";

import img1 from "../../../assets/images/1.png";
import img2 from "../../../assets/images/2.png";
import img3 from "../../../assets/images/3.png";
import img4 from "../../../assets/images/4.png";
import img5 from "../../../assets/images/5.png";
import img6 from "../../../assets/images/6.png";
import img7 from "../../../assets/images/7.png";
import img8 from "../../../assets/images/8.png";
import img9 from "../../../assets/images/9.jpeg";

export default function Banner() {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

  return (
    <div className="Banner-container">
      <Swiper
        modules={[Autoplay, Navigation]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation
        loop
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} className="banner-image" alt="Campus" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

