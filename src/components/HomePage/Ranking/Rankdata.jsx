import React from "react";
import "./Rankdata.css";
import img1 from "../../../assets/images/WebAlbum/kec.jpg"
import img2 from "../../../assets/images/WebAlbum/itpark.jpg"

const Rankdata = () => {
  return (
    <main className="rankdata-main">
      <section className="rankdata-section">
        <div className="rankdata-container">
          <div className="rankdata-item rankdata-schedule">
            <h2>
            123 rd Position in All India Rank<br /> <em className="highlight-purple"></em>
            <p style={{color:'green'}}>Business Today (Best B School), October 2024.</p>

            </h2>
          </div>
          <div className="rankdata-item rankdata-social">
            <h2>
              Band with 101-150 Rank in India
            </h2>
            <h1><div className="highlight-yellow">NIRF 2025.</div></h1>
          </div>
          <div className="rankdata-item rankdata-timing">
            {/* <h2>52 nd Position </h2>
            <p>among Colleges inc IIT,NIT.</p>
            <h2>18 th Position </h2>
            <p>among Private Engg in India.</p>
            <h2>15 th Position </h2>
            <p>among Private Engg in South.</p> */}
            <img src={img1} alt="" />
          </div>
          <div className="rankdata-item rankdata-content">
          <img src={img2} alt="" />
          </div>
          <div className="rankdata-item rankdata-multiple">
            <h2>AAAA Grade  </h2> <p>Career 360, April 2024</p>
          </div>
          <div className="rankdata-item rankdata-growth">
            <h2>58th in India including IIT, NIT</h2>
            <p>HANSA Research Survey, June 2024.</p>
          </div>
          <div className="rankdata-item rankdata-consistency">
            <h2>22 nd Position</h2>
            <p>Career 360, April 2024</p>
          </div>
          <div className="rankdata-item rankdata-follower">
            <img src="https://archello.s3.eu-central-1.amazonaws.com/images/2012/09/14/PANAROMIC-20VIEW-20OF-20THE-20AUDITORIUM.1506068373.395.jpg" alt="" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Rankdata;
