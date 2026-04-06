import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import "./Banner.css";

import img1 from "../../../assets/images/1.webp";
import img2 from "../../../assets/images/2.webp";
import img3 from "../../../assets/images/3.webp";
import img4 from "../../../assets/images/4.webp";
import img5 from "../../../assets/images/5.webp";
import img6 from "../../../assets/images/6.webp";
import img7 from "../../../assets/images/7.webp";
import img8 from "../../../assets/images/8.webp";
import img9 from "../../../assets/images/9.webp";
import img10 from "../../../assets/images/10.webp";
import img11 from "../../../assets/images/11.webp";
import img12 from "../../../assets/images/12.webp";
import img13 from "../../../assets/images/13.webp";
import img14 from "../../../assets/images/14.webp";
import img15 from "../../../assets/images/15.webp";
import img16 from "../../../assets/images/16.webp";
import img17 from "../../../assets/images/17.webp";
import img18 from "../../../assets/images/18.webp";
import img19 from "../../../assets/images/19.webp";
import img20 from "../../../assets/images/20.webp";
import img21 from "../../../assets/images/21.webp";
import img22 from "../../../assets/images/22.webp";
import img23 from "../../../assets/images/23.webp";
import img24 from "../../../assets/images/24.webp";

export default function Banner() {
  const images = [img1, img24, img22, img23,img21, img19, img16, img17, img2, img3, img15, img14, img4, img5, img6, img7, img8, img9, img10, img11, img18, img13, img20, img12];

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

