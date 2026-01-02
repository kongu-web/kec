import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import "./Placement.css";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const useCountUp = (endValue, active, duration = 2000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;

    const number = parseFloat(endValue);
    const suffix = endValue.replace(number, "").trim();

    if (isNaN(number)) {
      setCount(endValue);
      return;
    }

    const hasDecimal = endValue.includes(".");

    let start = 0;
    const increment = number / (duration / 30);

    const counter = setInterval(() => {
      start += increment;
      if (start >= number) {
        clearInterval(counter);
        setCount(
          (hasDecimal ? number.toFixed(1) : Math.round(number)) + " " + suffix
        );
      } else {
        setCount(
          (hasDecimal ? start.toFixed(1) : Math.round(start)) + " " + suffix
        );
      }
    }, 30);

    return () => clearInterval(counter);
  }, [endValue, active, duration]);

  return count;
};

const CountBox = ({ title, value }) => {
  const ref = useRef();
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const animatedValue = useCountUp(value, active);

  return (
    <div ref={ref} className="info-box square-box">
      <h2>{title}</h2>
      <p>{animatedValue}</p>
    </div>
  );
};


const Placement = () => {
  const navigate = useNavigate();

  // Load slider images from folder
  const importSliderImages = (r) => r.keys().map(r);
  const sliderImages = importSliderImages(
    require.context(
      "../../../assets/images/Placement/Slider",
      false,
      /\.(png|jpe?g|svg|webp)$/
    )
  );

  const sliderRef = useRef(null);

  // Dynamically load all images from the company-logos folder
  const importAll = (r) => r.keys().map(r);
  const companyImages = importAll(
    require.context(
      "../../../assets/images/Placement/Companies",
      false,
      /\.(png|jpe?g|svg|webp)$/
    )
  );

  // Auto-scroll logic
  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        const container = sliderRef.current;
        const scrollAmount = container.offsetWidth;

        container.scrollBy({ left: scrollAmount, behavior: "smooth" });

        if (
          container.scrollLeft + container.offsetWidth >=
          container.scrollWidth - 5
        ) {
          setTimeout(() => {
            container.scrollTo({ left: 0, behavior: "smooth" });
          }, 800);
        }
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const placementData = [
    { title: "Offers received", value: "1693" },
    { title: "Average Salary", value: "5.5 LPA" },
    { title: "Above 8 LPA", value: "143" },
    { title: "Highest salary", value: "24.7 LPA" },
    { title: "Companies Visited", value: "371" },
    { title: "Placement Status", value: "94.3%" },
  ];

  return (
    <div className="placement-container">
      <h1 className="animated-text">
        <h2>EXCELLENCE IN</h2>
        <span className="animated-effect">PLACEMENTS</span>
        <span className="animated-effect">..</span>
      </h1>
      <p>
        Celebrating the outstanding success of our 2025 batch, with placements
        in over 250 top multinational companies. Our pride in them knows no bounds.🎓
      </p>

      <div className="details-placement">
        <DotLottieReact
          className="animation-lottie"
          src="https://lottie.host/92ccea8d-f202-4a97-ab56-7b4a77483b69/hNRRdhVC4b.lottie"
          loop
          autoplay
        />

        <div className="box">
          {placementData.map((item, index) => (
            <CountBox key={index} title={item.title} value={item.value} />
          ))}
        </div>
      </div>

      {/* <div className="companies">
        {companyImages.slice(0, 24).map((img, index) => (
          <div key={index} className="company-box">
            <img src={img} alt={`Company Logo ${index + 1}`} />
          </div>
        ))}
      </div> */}

      <br /><br />

      <div className="square-slider" ref={sliderRef}>
        {sliderImages.map((img, index) => (
          <div key={index} className="slide-image">
            <img src={img} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>

      <div className="button-container-placement">
        <button
          className="know-more-btn"
          onClick={() => navigate("/placement")}
        >
          Know More
        </button>
      </div>
    </div>
  );
};

export default Placement;
