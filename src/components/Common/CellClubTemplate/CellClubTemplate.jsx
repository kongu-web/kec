import React, { useState, useEffect } from 'react';
import './CellClubTemplate.css';
import Navbar from '../../HomePage/navbar/Navbar';
import Footer from '../../HomePage/Footer/Footer';
import { FaPhoneAlt, FaEnvelope, FaFilePdf, FaExternalLinkAlt, FaCalendarAlt, FaStar, FaUsers, FaLightbulb, FaHistory, FaCheckCircle, FaFileDownload } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

/**
 * CellClubTemplate Component
 * 
 * Props:
 * - name: String (Name of the Cell / Club)
 * - coordinators: Array of Objects ({ name, designation, dept, phone, email, image })
 * - about: String (Introduction/Aim)
 * - objectives: Array of Strings (List of objectives)
 * - activitiesSummary: Object ({ "2025-26": count, "2024-25": count, "2023-24": count })
 * - eventDetails: Array of Objects ({ year: "2025-26", events: [{ sno, name, date, details }] })
 * - gallery: Array of Strings (Image URLs)
 * - reports: Array of Objects ({ title: "Report Name", link: "URL" })
 * - otherDetails: String (Optional additional information)
 */

const CellClubTemplate = ({
    name = "Cell / Club Name",
    coordinators = [],
    about = "Aim and objectives will be described here.",
    objectives = [],
    activitiesSummary = { "2025-26": 0, "2024-25": 0, "2023-24": 0 },
    eventDetails = [],
    gallery = [],
    driveLink = null,
    reports = [],
    otherDetails = ""
}) => {
    const [activeYear, setActiveYear] = useState(eventDetails[0]?.year || "2025-26");

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        window.scrollTo(0, 0);
    }, []);

    // Extracting available years from eventDetails
    const availableYears = eventDetails.map(item => item.year);

    return (
        <div className="cell-club-container">
            <Navbar />

            {/* 1. Name of the Cell / Club - Hero Section */}
            <header className="cell-club-hero" data-aos="fade">
                <div className="breadcrumb">Home / Cells & Clubs / {name}</div>
                <h1 data-aos="zoom-in">{name}</h1>
                <div className="hero-scroll-indicator">
                    <div className="mouse"></div>
                </div>
            </header>

            {/* 3. Aim and objectives of the club/cell */}
            <section className="cc-section" id="about">
                <div className="cc-about-grid">
                    <div className="cc-about-text" data-aos="fade-right">
                        <div className="cc-section-header" style={{ textAlign: 'left' }}>
                            <h2>Aim & Objectives</h2>
                        </div>
                        <p className="cc-intro-text">{about}</p>
                        <ul className="cc-objectives-list">
                            {objectives.map((obj, index) => (
                                <li key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                                    {obj}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="cc-about-stats" data-aos="fade-left">
                        <div className="cc-about-card">
                            <h3>Quick Status</h3>
                            <div className="status-item">
                                <FaCheckCircle className="status-icon active" />
                                <span>Active for Academic Year 2025-26</span>
                            </div>
                            <div className="status-item">
                                <FaUsers className="status-icon" />
                                <span>Open to all Departments</span>
                            </div>
                            <div className="status-item">
                                <FaLightbulb className="status-icon" />
                                <span>Innovation Focused</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Coordinators name with full details */}
            <section className="cc-section bg-light" id="coordinators">
                <div className="cc-section-header" data-aos="fade-up">
                    <h2>Our Coordinators</h2>
                    <p>Leadership team driving the vision of {name}</p>
                </div>
                <div className="cc-coordinators-grid">
                    {coordinators.map((coord, index) => (
                        <div className="coordinator-card" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                            <div className="coordinator-img">
                                {coord.image ? <img src={coord.image} alt={coord.name} /> : <FaUsers />}
                            </div>
                            <h4>{coord.name}</h4>
                            <span className="coordinator-role">{coord.designation} <br /> {coord.dept}</span>
                            <div className="coordinator-contact">
                                {coord.phone && (
                                    <div className="contact-item">
                                        <FaPhoneAlt /> <span>{coord.phone}</span>
                                    </div>
                                )}
                                {coord.email && (
                                    <div className="contact-item">
                                        <FaEnvelope /> <span>{coord.email}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 4. Activities Summary Band (Counts) */}
            <section className="activity-summary-section">
                <div className="cc-section-header" data-aos="fade-up" style={{ color: 'white' }}>
                    <h2 style={{ color: 'white' }}>Activity Summary</h2>
                    <p style={{ color: 'rgba(255,255,255,0.7)' }}>Programs conducted over the last three academic years</p>
                </div>
                <div className="activity-summary-grid">
                    {Object.entries(activitiesSummary).map(([year, count], index) => (
                        <div className="summary-item" key={year} data-aos="zoom-in" data-aos-delay={index * 100}>
                            <span className="summary-count">{count}</span>
                            <span className="summary-label">Programs in {year}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Event Details Tables (Year-wise) */}
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

                <div className="table-wrapper" data-aos="fade-up">
                    <table className="events-table">
                        <thead>
                            <tr>
                                <th className="s-no">S.No</th>
                                <th className="event-name">Name of the Event</th>
                                <th className="event-date">Date</th>
                                <th className="event-details">Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {eventDetails.find(ed => ed.year === activeYear)?.events.map((event, idx) => (
                                <tr key={idx}>
                                    <td className="s-no">{event.sno || idx + 1}</td>
                                    <td className="event-name">{event.name}</td>
                                    <td className="event-date">{event.date}</td>
                                    <td className="event-details">{event.details}</td>
                                </tr>
                            )) || (
                                <tr>
                                    <td colSpan="4" style={{ textAlign: 'center', padding: '40px' }}>No events recorded for this academic year.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* 5. Photos or videos required for the gallery section */}
            <section className="cc-section" id="gallery">
                <div className="cc-section-header" data-aos="fade-up">
                    <h2>Gallery</h2>
                    <p>Moments captured from our various events and sessions</p>
                </div>
                {gallery && gallery.length > 0 ? (
                    <div className="gallery-grid">
                        {gallery.map((img, index) => (
                            <div className="gallery-card" key={index} data-aos="zoom-in" data-aos-delay={index * 50}>
                                <img src={img} alt={`${name} Gallery ${index}`} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div style={{ textAlign: 'center', color: '#666', padding: '20px' }}>
                        <p>No featured photos yet. Check our shared drive album below!</p>
                    </div>
                )}
                <div style={{ textAlign: 'center', marginTop: '30px' }}>
                    <a href={driveLink || "#"} target="_blank" rel="noopener noreferrer" className="cc-btn-link">
                        <FaExternalLinkAlt /> View Drive Album
                    </a>
                </div>
            </section>

            {/* 6. Any other relevant details (Reports) */}
            <section className="cc-section bg-light" id="reports">
                <div className="cc-section-header" data-aos="fade-up">
                    <h2>Reports & Documentation</h2>
                    <p>Official reports and relevant details of cell activities</p>
                </div>
                <div className="reports-grid">
                    {reports.map((report, index) => (
                        <a href={report.link} className="report-link-card" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                            <FaFilePdf className="report-icon" />
                            <span>{report.title}</span>
                            <FaFileDownload style={{ marginLeft: 'auto' }} />
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

            <Footer />
        </div>
    );
};

export default CellClubTemplate;
