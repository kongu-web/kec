import React from 'react';
import { useNavigate } from "react-router-dom";
import './About.css';
import vid from "../../../assets/video/campus tour.mp4"

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="about-container">
      <div className="about-content">
        <h2>About KEC</h2>
        <p>
        Kongu Engineering College, one of the foremost multi professional research-led Institutions is internationally a recognized leader in professional and career-oriented education. It provides an integral, inter-disciplinary education - a unique intersection between theory and practice, passion and reason. The College offers courses of study that are on the frontiers of knowledge and it connects the spiritual and practical dimensions of intellectual life, in a stimulating environment that fosters rigorous scholarship and supportive community. This Institute is a great possession of the committed Trust called 'The Kongu Vellalar Institute of Technology Trust' in Erode District, Tamilnadu. The noble Trust has taken the institute to greater heights since its inception in 1983 and has established the college as a forum for imparting value based education for men and women.
        </p>
        <button className="know-more-button" onClick={() => navigate("/aboutkec")}>
          Know More
        </button>
      </div>
      
      {<div className="about-video">
        <video width="100%" height="100%" controls autoPlay muted loop>
        <source src={vid} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
      </div> }
    </div>
  );
};

export default About;
