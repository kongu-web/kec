import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Navbar from '../HomePage/navbar/Navbar';
import Footer from '../HomePage/Footer/Footer';
import IqacNavbar from './IqacNavbar';
import './IQAC.css';

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
                    {/* Header Section */}
                    <div className="row mb-4">
                        <div className="col-md-4 d-flex align-items-center justify-content-center">
                            <div className="iqac-maintext text-center">
                                <h1 className="iqac-hero-title">Internal Quality Assurance Cell (IQAC)</h1>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <Carousel>
                                {carouselImages.map((img, idx) => (
                                    <Carousel.Item key={idx}>
                                        <img
                                            className="d-block w-100 iqac-carousel-img"
                                            src={img}
                                            alt={`Slide ${idx + 1}`}
                                            style={{ height: '400px', objectFit: 'cover', borderRadius: '15px' }}
                                        />
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        </div>
                    </div>

                    {/* About Section */}
                    <div className="mb-5">
                        <h2 className="iqac-title">ABOUT IQAC:</h2>
                        <p className="textAlign-justify">
                            Kongu Engineering College have established Internal Quality Assurance Cell (IQAC) from 2015 for performance evaluation, assessment & accreditation and quality up-gradation. Since quality enhancement is a continuous process, the IQAC becomes a part of the institution’s system & work towards realisation of the goals of quality enhancement & sustenance.
                        </p>
                    </div>

                    <hr />

                    {/* Objectives */}
                    <div className="mb-5">
                        <h2 className="iqac-title">OBJECTIVES:</h2>
                        <ul>
                            <li>To enhance the quality of teaching, learning, evaluation and research activities across the campus.</li>
                            <li>To establish a system for deliberate, consistent and transformative enhancement of the institution's overall performance.</li>
                            <li>To promote the integration of a quality-focused culture and the adoption of best practices within the institution.</li>
                        </ul>
                    </div>

                    <hr />

                    {/* Strategies */}
                    <div className="mb-5">
                        <h2 className="iqac-title">STRATEGIES:</h2>
                        <ul>
                            <li>Ensuring timely, efficient, and progressive performance of academic, administrative, and financial tasks.</li>
                            <li>The relevance and quality of academic and research programmes.</li>
                            <li>Optimization and integration of modern methods of teaching and learning.</li>
                            <li>Ensuring the credibility of evaluation procedures.</li>
                            <li>Ensuring the adequacy, maintenance, and functioning of the support structure and services.</li>
                            <li>Research sharing and networking with other institutions in India and abroad.</li>
                        </ul>
                    </div>

                    <hr />

                    {/* Functions */}
                    <div className="mb-5">
                        <h2 className="iqac-title">FUNCTIONS:</h2>
                        <ul>
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

                    <hr />

                    {/* Benefits */}
                    <div className="mb-5">
                        <h2 className="iqac-title">BENEFITS:</h2>
                        <ul>
                            <li>Ensure heightened level of clarity and focus in institutional functioning towards quality enhancement.</li>
                            <li>Ensure internalization of the quality culture.</li>
                            <li>Ensure enhancement and coordination among various activities of the institution and institutionalize all good practices.</li>
                            <li>Provide a sound basis for decision-making to improve institutional functioning.</li>
                            <li>Act as a dynamic system for quality changes in Institution.</li>
                            <li>Build an organised methodology of documentation and internal communication.</li>
                        </ul>
                    </div>

                    <hr />

                    {/* Outcomes */}
                    <div className="mb-5">
                        <h2 className="iqac-title">OUTCOMES:</h2>
                        <div className="iqac-grid-outcomes">
                            {outcomeImages.map((outcome, idx) => (
                                <a href={outcome.link} key={idx} className="iqac-outcome-card">
                                    <img src={outcome.src} alt={outcome.alt} className="iqac-outcome-img" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <hr />

                    {/* Reference */}
                    <div className="mb-4">
                        <h2 className="iqac-title">REFERENCE:</h2>
                        <p>Guidelines from NAAC for the Creation of the Internal Quality Assurance Cell (IQAC) and Submission of Annual Quality Assurance Report (AQAR) in Accredited Institutions.</p>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    );
};

export default IqacHome;
