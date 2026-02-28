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
import img9 from "../../../assets/images/9.png";
import img10 from "../../../assets/images/10.png";
import img11 from "../../../assets/images/11.png";
import img12 from "../../../assets/images/12.png";
import img13 from "../../../assets/images/13.png";
import img14 from "../../../assets/images/14.png";
import img15 from "../../../assets/images/15.png";
import img16 from "../../../assets/images/16.png";
import img17 from "../../../assets/images/17.png";
import img18 from "../../../assets/images/18.png";
import img19 from "../../../assets/images/19.png";

export default function Banner() {
  const images = [img1, img19, img16, img17, img2, img3, img15, img14, img4, img5, img6, img7, img8, img9, img10, img11, img18, img13, img12];

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

