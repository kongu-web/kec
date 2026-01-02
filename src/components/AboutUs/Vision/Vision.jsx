import React, { useEffect, useState } from "react";
import "./Vision.css";
import Section from "../../HomePage/Section/Section";
import Navbar from "../../HomePage/navbar/Navbar";
import Footer from "../../HomePage/Footer/Footer";
import ScrollToTopButton from "../../ScrollToTopButton";
import mission from "../../../assets/images/visionmission.png";
import qualitypolicy from "../../../assets/images/qualitypolicy.png";
import Spinner from "../../Spinner";

const Vision = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return loading ? (
    <Spinner />
  ) : (
    <>
      {/* {/* <Section/> */} */}
      <Navbar />
      <div className="vision-container">
        {/* Vision & Mission Row */}
        <div className="vision-row">
          <img
            src={mission}
            alt="Vision & Mission"
            className="aboutkec-image"
          />
          <div className="vision-text-group">
            <div className="vision-section animate-fade">
              <h2>Vision</h2>
              <p>
                To be a centre of excellence for development and dissemination
                of knowledge in Applied Science, Technology, Engineering, and
                Management for the Nation and beyond.
              </p>
            </div>

            <div className="vision-section animate-slide">
              <h2>Mission</h2>
              <p>
                We are committed to value-based Education, Research and
                Consultancy in Engineering and Management and to bring out
                technically competent, ethically strong and quality
                professionals to keep our Nation ahead in the competitive
                knowledge-intensive world.
              </p>
            </div>
          </div>
        </div>

        {/* Quality Policy Row */}
        <div className="vision-row">
          <div className="vision-section animate-zoom">
            <h2>Quality Policy</h2>
            <ul>
              <li>
                Provide value-based quality education for developing the
                students as competent and responsible citizens.
              </li>
              <li>
                Contribute to the nation and beyond through the state of the art
                Technology.
              </li>
              <li>Continuously improve our services.</li>
            </ul>
          </div>
          <img
            src={qualitypolicy}
            alt="Quality Policy"
            className="aboutkec-image"
          />
        </div>
      </div>
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default Vision;
