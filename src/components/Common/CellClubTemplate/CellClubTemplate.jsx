import React, { useState, useEffect } from 'react';
import './CellClubTemplate.css';
import { Link } from 'react-router-dom';
import Navbar from '../../HomePage/navbar/Navbar';
import Footer from '../../HomePage/Footer/Footer';
import { FaPhoneAlt, FaEnvelope, FaExternalLinkAlt, FaCalendarAlt, FaHistory, FaUsers, FaChevronRight, FaBullseye, FaCheckCircle } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

/**
 * CellClubTemplate Component
 * 
 * A generic template for clubs and cells that don't need a specialized layout.
 */
const CellClubTemplate = ({
    name = "Cell / Club Name",
    coordinators = [],
    about = "Aim and objectives will be described here.",
    objectives = [],
    activitiesSummary = { "2025-26": 0, "2024-25": 0, "2023-24": 0 },
    eventDetails = [],
    gallery = [],
    reports = [],
    otherDetails = "",
    heroImage = null
}) => {
    const [activeYear, setActiveYear] = useState(eventDetails[0]?.year || "2025-26");

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        window.scrollTo(0, 0);
    }, []);

    const availableYears = eventDetails.map(item => item.year);

    return (
        <div className="cell-club-container">
            <Navbar />

            {/* Hero Section */}
            <header 
                className="cell-club-hero" 
                data-aos="fade"
                style={heroImage ? { backgroundImage: `url(${heroImage})` } : {}}
            >
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <div className="hero-flex-layout">
                        <div className="hero-title-group">
                            <h1 data-aos="fade-right">{name}</h1>
                            <div className="hero-actions-group" data-aos="fade-up" data-aos-delay="200">
                                <Link to="/student-centric-activities" className="back-to-all-btn">
                                    <FaChevronRight className="rotate-180" /> Back to All Clubs & Cells
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Aim & Objectives */}
            {((about && about !== "Aim and objectives will be described here.") || (objectives && objectives.length > 0)) && (
                <section className="cc-section" id="about">
                    <div className="cc-about-card" data-aos="fade-up">
                        <div className="cc-about-content">
                            <h2><FaBullseye /> Aim & Objectives</h2>
                            <p className="cc-intro-text">{about}</p>
                            
                            {objectives && objectives.length > 0 && (
                                <div className="cc-objectives-list">
                                    {objectives.map((obj, idx) => (
                                        <div key={idx} className="cc-objective-item" data-aos="fade-up" data-aos-delay={idx * 100}>
                                            <div className="status-icon"><FaCheckCircle /></div>
                                            <p>{obj}</p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            )}

            {/* Coordinators */}
            {coordinators && coordinators.length > 0 && (
                <section className="cc-section bg-light" id="coordinators">
                    <div className="cc-section-header" data-aos="fade-up">
                        <h2>Our Coordinators</h2>
                        <p>Leadership team driving the vision of {name}</p>
                    </div>
                    <div className="cc-coordinators-grid">
                        {coordinators.map((coord, index) => (
                            <div className="coordinator-profile-card" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                                <div className="profile-img-container">
                                    {coord.image ? <img src={coord.image} alt={coord.name} /> : <div className="default-avatar"><FaUsers /></div>}
                                </div>
                                <div className="profile-details">
                                    <h4>{coord.name}</h4>
                                    <span className="profile-designation">{coord.designation}</span>
                                    <p className="profile-dept">{coord.dept}</p>
                                    <div className="profile-contacts">
                                        {coord.email && (
                                            <a href={`mailto:${coord.email}`} title={coord.email} className="contact-link">
                                                <FaEnvelope />
                                            </a>
                                        )}
                                        {coord.phone && (
                                            <a href={`tel:${coord.phone}`} title={coord.phone} className="contact-link">
                                                <FaPhoneAlt />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Activity Summary */}
            {activitiesSummary && Object.values(activitiesSummary).some(count => count > 0) && (
                <section className="activity-summary-section">
                    <div className="cc-section-header" data-aos="fade-up" style={{ color: 'white', textAlign: 'center' }}>
                        <h2 style={{ color: 'white' }}>Activity Summary</h2>
                        <p style={{ color: 'rgba(255,255,255,0.7)', marginLeft: 'auto', marginRight: 'auto' }}>Programs conducted over the last three academic years</p>
                    </div>
                    <div className="summary-stat-grid">
                        {Object.entries(activitiesSummary).map(([year, count], index) => (
                            <div className="stat-card" key={year} data-aos="fade-up" data-aos-delay={index * 100}>
                                <div className="club-stat-value">{count}</div>
                                <div className="stat-label">
                                    <span className="year-label">{year}</span>
                                    <span className="desc-label">Programs Conducted</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Event Details */}
            {eventDetails && eventDetails.length > 0 && (
                <section className="cc-section cc-events-section" id="events">
                    <div className="cc-section-header" data-aos="fade-up">
                        <h2>Event Details</h2>
                        <p>Comprehensive list of activities and achievements</p>
                    </div>

                    <div className="year-tabs" data-aos="fade-up">
                        {availableYears.map(year => (
                            <button
                                key={year}
                                className={`year-tab ${activeYear === year ? 'active' : ''}`}
                                onClick={() => setActiveYear(year)}
                            >
                                {year}
                            </button>
                        ))}
                    </div>

                    <div className="event-list-container" data-aos="fade-up">
                        {eventDetails.find(ed => ed.year === activeYear)?.events.map((event, idx) => (
                            <div className="event-item-card" key={idx}>
                                <div className="event-sno">{event.sno || idx + 1}</div>
                                <div className="event-main-info">
                                    <h4 className="event-title">{event.name}</h4>
                                    <div className="event-meta">
                                        <span className="event-date-tag"><FaCalendarAlt /> {event.date}</span>
                                    </div>
                                    {event.details && <p className="event-description">{event.details}</p>}
                                </div>
                            </div>
                        )) || (
                            <div className="no-events-placeholder">
                                <FaHistory size={40} />
                                <p>No events recorded for this academic year.</p>
                            </div>
                        )}
                    </div>
                </section>
            )}

            {/* Reports Section */}
            {((reports && reports.length > 0) || otherDetails) && (
                <section className="cc-section bg-light" id="reports">
                    <div className="cc-section-header" data-aos="fade-up">
                        <h2>Reports & Documentation</h2>
                        <p>Official reports and relevant details of cell activities</p>
                    </div>
                    <div className="resources-links-grid">
                        {reports && reports.map((report, index) => (
                            <a 
                                href={report.link} 
                                className="resource-link-btn" 
                                key={index} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                data-aos="fade-up" 
                                data-aos-delay={index * 50}
                            >
                                <span>{report.title}</span>
                                <FaExternalLinkAlt className="external-link-icon" />
                            </a>
                        ))}
                        {otherDetails && (
                            <div className="other-details-card" data-aos="fade-up">
                                <h3>Other Information</h3>
                                <p>{otherDetails}</p>
                            </div>
                        )}
                    </div>
                </section>
            )}

            {/* Gallery Section */}
            {gallery && gallery.length > 0 && (
                <section className="cc-section gallery-section-enhanced" id="gallery">
                    <div className="cc-section-header" data-aos="fade-up">
                        <h2>Gallery</h2>
                        <p>Moments captured from our various events and sessions</p>
                    </div>
                    <div className="gallery-grid">
                        {gallery.map((img, index) => (
                            <div className="gallery-card" key={index} data-aos="zoom-in" data-aos-delay={index * 50}>
                                <img src={img} alt={`${name} Gallery ${index}`} />
                            </div>
                        ))}
                    </div>
                </section>
            )}

            <Footer />
        </div>
    );
};

export default CellClubTemplate;
