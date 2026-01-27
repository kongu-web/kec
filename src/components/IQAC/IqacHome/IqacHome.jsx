import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Navbar from '../../HomePage/navbar/Navbar';
import Footer from '../../HomePage/Footer/Footer';
import IqacNavbar from '../IqacNavbar';
import '../IQAC.css';
import './IqacHome.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faBullseye, faChessKnight, faCogs, faChartLine, faTrophy } from '@fortawesome/free-solid-svg-icons';

// Carousel Images
const carouselImages = [
    '/assets/iqac/carousel/itpark.jpg',
    '/assets/iqac/carousel/kecbus.jpeg',
    '/assets/iqac/carousel/kecgate.jpg',
    '/assets/iqac/carousel/img1.jpg'
];

// Outcome Images
const outcomeImages = [
    { src: '/assets/iqac/outcomes/NBA.png', alt: 'NBA', link: '/nba' },
    { src: '/assets/iqac/outcomes/NAAC.png', alt: 'NAAC', link: '/naac' },
    { src: '/assets/iqac/outcomes/ISO.png', alt: 'ISO', link: '/iqac/iso' },
    { src: '/assets/iqac/outcomes/NIRF.jpg', alt: 'NIRF', link: '/nirf' },
    { src: '/assets/iqac/outcomes/ARIIA.png', alt: 'ARIIA', link: '/ariia' },
    { src: '/assets/iqac/outcomes/BUSINESS WORLD.jpg', alt: 'Business World', link: '#' },
    { src: '/assets/iqac/outcomes/CAREERS 360.jpg', alt: 'Careers 360', link: '#' },
    { src: '/assets/iqac/outcomes/INDIA TODAY.png', alt: 'India Today', link: '#' },
    { src: '/assets/iqac/outcomes/THE_WEEK.jpg', alt: 'The Week', link: '#' },
];

const IqacHome = () => {
    return (
        <div className="iqac-wrapper">
            <Navbar />
            <div className="iqac-container container-fluid p-0">
                <IqacNavbar />

                <div className="iqac-content">
                    {/* Hero Section */}
                    <div className="iqac-home-hero">
                        <div className="iqac-hero-text-container">
                            <h1 className="iqac-hero-title-large">
                                Internal Quality<br />
                                Assurance Cell<br />
                                (IQAC)
                            </h1>
                            <p className="iqac-text" style={{ fontSize: '1.2rem', maxWidth: '500px' }}>
                                Driving excellence through continuous quality assessment and enhancement in education.
                            </p>
                            <div style={{ height: '5px', width: '100px', background: '#3b82f6', borderRadius: '10px' }}></div>
                        </div>
                        <div className="iqac-hero-carousel">
                            <Carousel fade interval={3000} controls={false} indicators={true}>
                                {carouselImages.map((img, idx) => (
                                    <Carousel.Item key={idx}>
                                        <img
                                            className="d-block w-100"
                                            src={img}
                                            alt={`Slide ${idx + 1}`}
                                            style={{ height: '450px', objectFit: 'cover', borderRadius: '30px', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}
                                        />
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        </div>
                    </div>

                    {/* About Section - Full Width */}
                    <div className="iqac-info-card mb-5">
                        <h2 className="iqac-card-title-home">
                            <FontAwesomeIcon icon={faInfoCircle} className="iqac-card-icon" />
                            ABOUT IQAC
                        </h2>
                        <p className="iqac-text mb-0">
                            Kongu Engineering College has established the Internal Quality Assurance Cell (IQAC) from 2015 for performance evaluation, assessment, accreditation, and quality upgradation. Since quality enhancement is a continuous process, the IQAC becomes a vital part of the institution’s system, working towards the realization of goals for quality enhancement and sustenance.
                        </p>
                    </div>

                    {/* Info Grid 1 */}
                    <div className="iqac-home-content-grid">
                        <div className="iqac-info-card">
                            <h2 className="iqac-card-title-home">
                                <FontAwesomeIcon icon={faBullseye} className="iqac-card-icon" />
                                OBJECTIVES
                            </h2>
                            <ul className="iqac-list-styled">
                                <li>To enhance the quality of teaching, learning, evaluation and research activities across the campus.</li>
                                <li>To establish a system for deliberate, consistent and transformative enhancement of the institution's overall performance.</li>
                                <li>To promote the integration of a quality-focused culture and the adoption of best practices within the institution.</li>
                            </ul>
                        </div>

                        <div className="iqac-info-card">
                            <h2 className="iqac-card-title-home">
                                <FontAwesomeIcon icon={faChessKnight} className="iqac-card-icon" />
                                STRATEGIES
                            </h2>
                            <ul className="iqac-list-styled">
                                <li>Ensuring timely, efficient, and progressive performance of academic, administrative, and financial tasks.</li>
                                <li>Relevance and quality of academic and research programmes.</li>
                                <li>Optimization and integration of modern methods of teaching and learning.</li>
                                <li>Ensuring the credibility of evaluation procedures.</li>
                                <li>Research sharing and networking with other institutions in India and abroad.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Info Grid 2 */}
                    <div className="iqac-home-content-grid">
                        <div className="iqac-info-card">
                            <h2 className="iqac-card-title-home">
                                <FontAwesomeIcon icon={faCogs} className="iqac-card-icon" />
                                FUNCTIONS
                            </h2>
                            <ul className="iqac-list-styled">
                                <li>Development and application of quality benchmarks/parameters.</li>
                                <li>Facilitating the creation of a learner-centric environment.</li>
                                <li>Arrangement for feedback response from stakeholders.</li>
                                <li>Dissemination of information on various quality parameters.</li>
                                <li>Organization of workshops and seminars on quality-related themes.</li>
                                <li>Preparation of the Annual Quality Assurance Report (AQAR).</li>
                            </ul>
                        </div>

                        <div className="iqac-info-card">
                            <h2 className="iqac-card-title-home">
                                <FontAwesomeIcon icon={faChartLine} className="iqac-card-icon" />
                                BENEFITS
                            </h2>
                            <ul className="iqac-list-styled">
                                <li>Ensure heightened level of clarity and focus in institutional functioning.</li>
                                <li>Ensure internalization of the quality culture.</li>
                                <li>Ensure enhancement and coordination among various activities.</li>
                                <li>Provide a sound basis for decision-making.</li>
                                <li>Act as a dynamic system for quality changes.</li>
                                <li>Build an organised methodology of documentation.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Outcomes Section */}
                    <div className="mb-5">
                        <div className="iqac-info-card bg-light border-0">
                            <h2 className="iqac-card-title-home justify-content-center">
                                <FontAwesomeIcon icon={faTrophy} className="iqac-card-icon" />
                                OUTCOMES & RECOGNITION
                            </h2>
                            <div className="iqac-grid-outcomes">
                                {outcomeImages.map((outcome, idx) => (
                                    <a href={outcome.link} key={idx} className="iqac-outcome-card">
                                        <img src={outcome.src} alt={outcome.alt} className="iqac-outcome-img" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Reference */}
                    <div className="mb-4 text-center">
                        <p className="text-muted small">
                            <em>Reference: Guidelines from NAAC for the Creation of the Internal Quality Assurance Cell (IQAC) and Submission of Annual Quality Assurance Report (AQAR) in Accredited Institutions.</em>
                        </p>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    );
};

export default IqacHome;
