import React, { useEffect, useRef } from 'react';
import './IEF.css';
import Navbar2 from './navbar';
import AnimatedBackground from './AnimatedBackground';
import Navbar from "../../HomePage/navbar/Navbar";
import Footer from "../../HomePage/Footer/Footer";

const IEF = () => {
  const sectionsRef = useRef([]);

  const scrollToSection = (index) => {
    const headerOffset = 200; // Account for fixed navbars
    const elementPosition = sectionsRef.current[index]?.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal');
        }
      });
    }, { threshold: 0.15 });

    sectionsRef.current.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <Navbar2 />
      <div className="ief-page">
        {/* Dynamic Background Elements */}
        <div className="tech-glow glow-1"></div>
        <div className="tech-glow glow-2"></div>

        <div className="land">
          <div className="hero-content">
            <div className="hero-left">
              <div className="hero-tag">Technological Convergence</div>
              <h1 className="hero-title">
                <span className="light">KEC</span> 
                <span className="title-accent">Innovation &</span> 
                <br />
                <span className="bold">Entrepreneurship</span>&nbsp;
                <span className="title-accent">Forum</span>
              </h1>
              <p className="hero-subtitle">
                The ultimate convergence of EMDC, IIC, and TBI.
                We engineer the bridge between academic research and commercial success.
              </p>
            </div>

            <div className="hero-right">
              <div className="entity-card-cluster">
                <div className="entity-card card-emdc" onClick={() => scrollToSection(0)}>
                  <div className="card-badge">Management</div>
                  <h3>EMDC</h3>
                  <p>Advancing Entrepreneurship</p>
                  <div className="card-glow"></div>
                </div>
                <div className="entity-card card-iic" onClick={() => scrollToSection(1)}>
                  <div className="card-badge">Innovation</div>
                  <h3>IIC</h3>
                  <p>Inspiring New Horizons</p>
                  <div className="card-glow"></div>
                </div>
                <div className="entity-card card-tbi" onClick={() => scrollToSection(2)}>
                  <div className="card-badge">Incubation</div>
                  <h3>TBI</h3>
                  <p>Nurturing Global Startups</p>
                  <div className="card-glow"></div>
                </div>
              </div>
            </div>

            <div className="scroll-indicator">
              <span className="mouse">
                <span className="wheel"></span>
              </span>
              <span className="text">Explore</span>
            </div>
          </div>
        </div>

      <div className="sections-wrapper">

        {/* ── EMDC ── */}
        <div className='sec1' ref={el => sectionsRef.current[0] = el}>
          <div className="sec-image">
            <img src="/ief/images/ief.webp" alt="EMDC image" loading="lazy" width="619" height="624" />
          </div>
          <div className="sec-content">
            <h2>Entrepreneurship and Management Development Centre (EMDC)</h2>
            <ul className="sec-list">
              <li>EMDC established during 1993 with funds from Central government creates awareness among students, faculty and staff about the value of entrepreneurship and its role in career development</li>
              <li>EMDC promotes entrepreneurship as a viable career and provides pre-incubation support to innovators&nbsp;/ students to culminate in campus start-ups&nbsp;/ new ventures</li>
              <li>EMDC comprises of Overall Coordinator, Departmental Faculty&nbsp;Coordinators, Departmental Student&nbsp;Coordinators and student members</li>
            </ul>
          </div>
        </div>

        {/* ── IIC ── */}
        <div className='sec2' ref={el => sectionsRef.current[1] = el}>
          <div className="sec-content">
            <h2>Institution's Innovation Council</h2>
            <ul className="sec-list">
              <li>IIC @ KEC established during 2018-19 under the guidance of MoE Innovation Cell (MIC) works in accordance with the Annual calendar activities prescribed by the MIC and promotes innovation-led activities</li>
              <li>IIC organizes periodic workshops&nbsp;/ seminars&nbsp;/ interactions with entrepreneurs, eco-system partners, investors, Hackathons, Idea competitions and Prototype Expos, mini-challenges etc. with the involvement of industries</li>
              <li>IIC KEC comprises of President, Vice President, Convenor, Faculty Coordinator, Innovation Ambassadors, Faculty and Student Coordinators for various activities, Departmental Faculty Coordinators and student members</li>
            </ul>
            <a href="https://iic.mic.gov.in/" target="_blank" rel="noopener noreferrer" className="detail-link">
              <span className="link-text">Explore More Details ›</span>
            </a>
          </div>
        </div>

        {/* ── TBI ── */}
        <div className='sec3' ref={el => sectionsRef.current[2] = el}>
          <div className="sec-content">
            <h2>Technology Business Incubator @ Kongu Engineering College (TBI@KEC)</h2>
            <ul className="sec-list">
              <li>TBI@KEC was established in 2003 as a joint venture by KEC with the generous grant-in-aid and support of NSTEDB/DST, Govt. of India (at a total project cost of Rs.3.95 Crore) for nurturing and promoting innovation and entrepreneurship development in cutting-edge technology areas (with thrust in Electronics &amp; ICT)</li>
              <li>TBI in an area of 26,800 sq.ft provides total support to the incubatees right from "Concept to Commercialization" under various stages</li>
              <li>TBI conducts capacity-building programs, validates problem-solution fit &amp; product-market fit, provides mentoring support, financial assistance, networking with other agencies, helps in pitching to national &amp; international investors, and provides infrastructure &amp; lab support</li>
            </ul>
            <a href="https://tbi-kec.org/" target="_blank" rel="noopener noreferrer" className="detail-link">
              <span className="link-text">Explore More Details ›</span>
            </a>
          </div>
        </div>

      </div>
    </div>
    <Footer />
    </>
  );
};

export default IEF;