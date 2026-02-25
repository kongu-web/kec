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
    // { src: '/assets/iqac/outcomes/ARIIA.png', alt: 'ARIIA', link: '/ariia' },
    // { src: '/assets/iqac/outcomes/BUSINESS WORLD.jpg', alt: 'Business World', link: '#' },
    // { src: '/assets/iqac/outcomes/CAREERS 360.jpg', alt: 'Careers 360', link: '#' },
    // { src: '/assets/iqac/outcomes/INDIA TODAY.png', alt: 'India Today', link: '#' },
    // { src: '/assets/iqac/outcomes/THE_WEEK.jpg', alt: 'The Week', link: '#' },
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
                            About IQAC
                        </h2>
                        <p className="iqac-text mb-0 alignment-justify">
                            Kongu Engineering College has established the Internal Quality Assurance Cell (IQAC) from 2015 for performance evaluation, assessment, accreditation, and quality upgradation. Since quality enhancement is a continuous process, the IQAC becomes a vital part of the institution’s system, working towards the realization of goals for quality enhancement and sustenance.
                        </p>
                    </div>

                    {/* Info Grid 1 */}
                    <div className="iqac-home-content-grid">
                        <div className="iqac-info-card">
                            <h2 className="iqac-card-title-home">
                                <FontAwesomeIcon icon={faBullseye} className="iqac-card-icon" />
                                Objectives
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
                                Strategies
                            </h2>
                            <ul className="iqac-list-styled">
                                <li>Ensuring timely, efficient, and progressive performance of academic, administrative, and financial tasks.</li>
                                <li>The relevance and quality of academic and research programmes.</li>
                                <li>Optimization and integration of modern methods of teaching and learning.</li>
                                <li>Ensuring the credibility of evaluation procedures.</li>
                                <li>Ensuring the adequacy, maintenance, and functioning of the support structure and services.</li>
                                <li>Research sharing and networking with other institutions in India and abroad.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Info Grid 2 */}
                    <div className="iqac-home-content-grid">
                        <div className="iqac-info-card">
                            <h2 className="iqac-card-title-home">
                                <FontAwesomeIcon icon={faCogs} className="iqac-card-icon" />
                                Functions
                            </h2>
                            <ul className="iqac-list-styled">
                                <li>Development and application of quality benchmarks/parameters for various academic and administrative activities of the institution.</li>
                                <li>Facilitating the creation of a learner-centric environment conducive to quality education and faculty maturation to adopt the required knowledge and technology for participatory teaching and learning process.</li>
                                <li>Arrangement for feedback response from students, parents, and other stakeholders on quality-related institutional processes.</li>
                                <li>Dissemination of information on various quality parameters of higher education.</li>
                                <li>Organization of inter and intra-institutional workshops, seminars on quality-related themes.</li>
                                <li>Documentation of the various programmes/activities leading to quality improvement.</li>
                                <li>Acting as a nodal agency of the Institution for coordinating quality-related activities, including adoption and dissemination of best practices.</li>
                                <li>Development and maintenance of institutional database through Management Information System (MIS) for the purpose of maintaining/enhancing the institutional quality.</li>
                                <li>Development of Quality Culture in the institution.</li>
                                <li>Preparation of the Annual Quality Assurance Report (AQAR) as per guidelines and parameters of NAAC, to be submitted to NAAC.</li>
                            </ul>
                        </div>

                        <div className="iqac-info-card">
                            <h2 className="iqac-card-title-home">
                                <FontAwesomeIcon icon={faChartLine} className="iqac-card-icon" />
                                Benefits
                            </h2>
                            <ul className="iqac-list-styled">
                                <li>Ensure heightened level of clarity and focus in institutional functioning towards quality enhancement.</li>
                                <li>Ensure internalization of the quality culture.</li>
                                <li>Ensure enhancement and coordination among various activities of the institution and institutionalize all good practices.</li>
                                <li>Provide a sound basis for decision-making to improve institutional functioning.</li>
                                <li>Act as a dynamic system for quality changes in Institution.</li>
                                <li>Build an organised methodology of documentation and internal communication.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Outcomes Section */}
                    <div className="mb-5">
                        <div className="iqac-info-card bg-light border-0">
                            <h2 className="iqac-card-title-home justify-content-center">
                                <FontAwesomeIcon icon={faTrophy} className="iqac-card-icon" />
                                Outcomes & Recognition
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
                            <em><h2>Reference</h2>Guidelines from NAAC for the Creation of the Internal Quality Assurance Cell (IQAC) and Submission of Annual Quality Assurance Report (AQAR) in Accredited Institutions.</em>
                        </p>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    );
};

export default IqacHome;
