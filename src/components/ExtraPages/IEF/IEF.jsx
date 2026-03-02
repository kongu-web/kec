import React, { useEffect, useRef } from 'react';
import './IEF.css';
import Navbar from './navbar';
import AnimatedBackground from './AnimatedBackground';

const IEF = () => {
  const sectionsRef = useRef([]);

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
    <div className="ief-page">
      {/* Dynamic Background Elements */}
      <div className="tech-glow glow-1"></div>
      <div className="tech-glow glow-2"></div>

      <div className="land">
        <AnimatedBackground />
        <Navbar />
        <div className='info'>
          <h1>KEC Innovation & Entrepreneurship Forum</h1>
          <p>
            The ultimate convergence of <strong>EMDC</strong>, <strong>IIC</strong>, and <strong>TBI</strong>.
            We engineer the bridge between academic research and commercial success,
            empowering the next generation of industrial leaders.
          </p>
        </div>
      </div>

      <div className="sections-wrapper">
        <div className='sec1' ref={el => sectionsRef.current[0] = el}>
          <div className="sec-image">
            <img src="/ief/images/ief.jpg" alt="EMDC image" />
          </div>
          <div className="sec-content">
            <h2>Entrepreneurship and Management Development Centre (EMDC)</h2>
            <div className="feature-grid">
              <div className="feature-card">
                <span className="feature-number">01</span>
                <p>EMDC established during 1993 with funds from Central government creates awareness among students, faculty and staff about the value of entrepreneurship and its role in career development</p>
              </div>
              <div className="feature-card">
                <span className="feature-number">02</span>
                <p>Established in 1993 to bridge the gap between technical expertise and business acumen.</p>
              </div>
              <div className="feature-card">
                <span className="feature-number">03</span>
                <p>Providing pre-incubation environments where students transform projects into products.</p>
              </div>
              <div className="feature-card">
                <span className="feature-number">04</span>
                <p>A massive inter-departmental network of coordinators driving institutional growth.</p>
              </div>
            </div>
          </div>
        </div>

        <div className='sec2' ref={el => sectionsRef.current[1] = el}>
          <div className="sec-content">
            <h2>Institution's Innovation Council</h2>
            <div className="feature-grid">
              <div className="feature-card">
                <span className="feature-number">01</span>
                <p>IIC @ KEC established during 2018-19 under the guidance of MoE Innovation Cell (MIC) works in accordance with the Annual calendar activities prescribed by the MIC and promote innovation-led activities</p>
              </div>
              <div className="feature-card">
                <span className="feature-number">02</span>
                <p>IIC organizes periodic workshops / seminars / interactions with entrepreneurs, eco system partners, investors / Hackathons, Idea competition and Prototype Expos, mini-challenges etc. with the involvement of industries</p>
              </div>
              <div className="feature-card">
                <span className="feature-number">03</span>
                <p>IIC KEC comprises of President, Vice President, Convenor, Faculty Coordinator, Innovation Ambassadors, Faculty and Student Coordinators for various activities, Departmental Faculty Coordinators and student members</p>
              </div>
            </div>
            <br />
            <a href="https://iic.mic.gov.in/" target="blank" className="detail-link">
              <span className="link-text">Explore More Details ›</span>
            </a>
          </div>
        </div>

        <div className='sec3' ref={el => sectionsRef.current[2] = el}>
          <div className="sec-content">
            <h2>Technology Business Incubator @ Kongu Engineering College (TBI@KEC)</h2>
            <div className="feature-grid">
              <div className="feature-card">
                <span className="feature-number">01</span>
                <p>TBI@KEC was established in 2003 as a joint venture by KEC with the generous grant-in-aid and support of NSTEDB/DST, Govt. of India (at a total project cost of Rs.3.95 Crore) for nurturing and promoting innovation and entrepreneurship development in cutting edge technology areas (with thrust in Electronics & ICT)</p>
              </div>
              <div className="feature-card">
                <span className="feature-number">02</span>
                <p>TBI in an area of 26,800 Sq.ft provides total support to the incubatees right from "Concept to Commercialization" under various stages</p>
              </div>
              <div className="feature-card">
                <span className="feature-number">03</span>
                <p>TBI conducts capacity building programs, validates problem - solution fit & product-market fit, provides mentoring support, financial assistance, networking with other agencies, helps in pitching to national & international investors, provides infrastructure & lab support of TBI and HI in addition to spotting and involving talented students (Interns) and faculty to work with the entrepreneurs for a win-win situation</p>
              </div>
            </div>
            <br />
            <a href="https://tbi-kec.org/" target="blank" className="detail-link">
              <span className="link-text">Explore More Details ›</span>
            </a>
          </div>
        </div>
      </div>


    </div>
  );
};

export default IEF;
