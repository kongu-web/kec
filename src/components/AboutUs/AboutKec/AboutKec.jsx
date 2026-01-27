import React, { useState, useEffect } from "react";
import "./AboutKec.css";
import aboutImg from "../../../assets/images/aboutkec.jpg";
import Section from "../../HomePage/Section/Section";
import Navbar from "../../HomePage/navbar/Navbar";
import Footer from "../../HomePage/Footer/Footer";
import ScrollToTopButton from "../../ScrollToTopButton";

import Spinner from "../../Spinner";

const AboutKec = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return loading ? (
    <Spinner />
  ) : (
    <>
      {/* <Section/> */}
      <Navbar />
      <div className="aboutkec-container">
        <div className="aboutkec-content">
          <h2 className="page-title">About KEC</h2>
          <img src={aboutImg} alt="About KEC" className="aboutkec-banner" />

          <p>
            Kongu Engineering College is an internationally recognised leader in multi-professional, research-led education. It offers interdisciplinary learning at the unique intersection of theory and practice, passion and reason. The college delivers frontier courses that bridge spiritual and practical aspects of intellectual life, within an environment that nurtures rigorous scholarship and a supportive community.
          </p>
          <p>
            The institution is managed by the Kongu Vellalar Institute of Technology Trust in Erode District, Tamil Nadu. The Trust has elevated the college to great heights since its inception in 1983, establishing it as a beacon for value-based education.
          </p>
          <p>
            The word "Kongu" refers to a region in southern India, and "Kongu Vellalar" denotes the agricultural community predominant in western Tamil Nadu, which previously lacked educational facilities. To achieve technical excellence in rural areas, 41 philanthropists from diverse walks of life recognised the need for technical education to drive the region's economic progress. They collectively formed the Trust to promote equality of opportunity for all.
          </p>
          <p>
            Affiliated with Anna University, Chennai, the college has delivered more than 40 years of committed service in technical education. The 167-acre campus is richly endowed with greenery and state-of-the-art infrastructure. With an excellent academic record, it has earned recognition as one of India's reputed educational institutions.
          </p>

          <p>
            <strong>Tamilnadu Government:</strong> G.O. Ms. No. 1294 dated
            29.9.1984
          </p>
          <p>
            <strong>AICTE Approval:</strong> F.No.45-46/91-AICTE/586 dated
            19.4.1993
          </p>
          <h3 className="page-sub_title">
            Other Institutions of the KVIT Trust:
          </h3>
          <div className="sister-institutions-table-wrapper">
            <table className="sister-institutions-table">
              <thead>
                <tr>
                  <th>Institution Name</th>
                  <th>Visit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Kongu Polytechnic College, Perundurai</td>
                  <td>
                    <a
                      href="https://kongupolytechnic.ac.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="visit-button">Click Here</button>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Kongu Arts & Science College, Nanjanapuram, Erode</td>
                  <td>
                    <a
                      href="https://kasc.ac.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="visit-button">Click Here</button>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Kongu School of Architecture, Perundurai</td>
                  <td>
                    <a
                      href="https://www.ksakongu.edu.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="visit-button">Click Here</button>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    Kongu Naturopathy and Yoga Medical College & Hospital,
                    Perundurai
                  </td>
                  <td>
                    <a
                      href="https://www.kongunymc.ac.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="visit-button">Click Here</button>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    Kongu Private Industrial Training Institute, Perundurai
                  </td>
                  <td>
                    <a
                      href="https://iti.kongu.edu/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="visit-button">Click Here</button>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Kongu National Matriculation School, Erode</td>
                  <td>
                    <a
                      href="http://www.kongunational.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="visit-button">Click Here</button>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default AboutKec;
