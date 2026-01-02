import React from "react";
import "./Ranking.css";
import Rankdata from "./Rankdata";

const Ranking = () => {
  return (
      <div className="ranking-container">
      <h1>EXCELLENCE IN EVERY ASPECT <span style={{color:"green"}}>| LEARNING BEYOND LIMITS |</span> A LEGACY OF SUCCESS</h1>
      <p>Kongu Engineering College stands as the first choice for ambitious students striving for academic and professional excellence. With a cutting-edge curriculum, hands-on learning approach, dynamic faculty, world-class infrastructure, and top-tier industry collaborations, KEC offers an exceptional environment for holistic growth. What’s more? We take pride in being a TOP PLACEMENTS COLLEGE YEAR AFTER YEAR! 🚀🎓</p>

      <Rankdata/>
      
    </div>
  );
};

export default Ranking;
