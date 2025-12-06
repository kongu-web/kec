import React from 'react';
import './Campus.css';
import kongubanner from "../../../assets/images/kecglobe.png";
import Newsletter from '../Newsletter/Newletter';

const About = () => {
  return (
    <div className='campus-life'>
    <div className="campus-container">
      <div className="campus-content">
        <h2>CAMPUS LIFE:<br/> FUN, THRIVE AND <br/>LEARN</h2>
        <p>
          Always buzzing with energy and enthusiasm, Kongu Engineering College is a dynamic hub of activity. After a day filled with academic challenges, our students immerse themselves in a wide range of extracurricular pursuits. Whether it's expressing their passion for music and dance, showcasing their sportsmanship on the field, or connecting with fellow students through various clubs, the campus vibe remains lively, vibrant, and full of positive energy!
        </p>
        {/* <button className="know-more-button">Know More</button> */}
      </div>
      <div className="kongubanner">
        <img src={kongubanner} alt="Kongu Engineering College" />
      </div>
      </div>

      <Newsletter/>
    </div>
  );
};

export default About;
