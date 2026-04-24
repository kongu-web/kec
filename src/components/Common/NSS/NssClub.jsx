import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import './NssClub.css';
import { Link } from 'react-router-dom';
import Navbar from '../../HomePage/navbar/Navbar';
import Footer from '../../HomePage/Footer/Footer';
import { 
    FaPhoneAlt, FaEnvelope, FaCalendarAlt, FaHistory, FaUsers, 
    FaChevronRight, FaBullseye, FaCheckCircle, FaEye, 
    FaCrosshairs, FaFlag, FaMapMarkerAlt,
    FaFacebook, FaInstagram, FaYoutube, FaBloggerB,
    FaPlay, FaTimes
} from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { nssData } from './nssData';

import nssLogoImg from '../../../assets/images/Clubs/nss/nss logo.webp';

const NssClub = () => {
    const {
        name, coordinators, about, objectives, 
        activitiesSummary, eventDetails, gallery, clubVideos,
        heroImage, generalInfo, generalImage,
        foundation, regularActivities, contactInfo
    } = nssData;

    const [galleryFilter, setGalleryFilter] = useState('photos');
    const [selectedMedia, setSelectedMedia] = useState(null);

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        window.scrollTo(0, 0);
    }, []);

    const getAllImages = () => {
        return [
            ...(gallery.awards || []), 
            ...(gallery.memories || []), 
            ...(gallery.newspaper || [])
        ];
    };

    const activeYear = eventDetails?.[0]?.year || "2025-26";

    return (
        <div className="cell-club-container nss-premium-theme">
            <Navbar />

            {/* 1. Hero Section */}
            <header 
                className="cell-club-hero" 
                data-aos="fade"
                style={heroImage ? { backgroundImage: `url(${heroImage})` } : {}}
            >
                <div className="nss-hero-bg-logo">
                    <img src={nssLogoImg} alt="NSS Logo Watermark" />
                </div>

                <div className="hero-content">
                    <div className="hero-flex-layout">
                        <div className="hero-title-group">
                            <h1 data-aos="fade-right">{name}</h1>
                            <div className="hero-actions-group" data-aos="fade-up" data-aos-delay="200">
                                <Link to="/student-centric-activities" className="back-to-all-btn">
                                    Back to All Clubs & Cells
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* General Info Section */}
            {generalInfo && (
                <section className="cc-section general-info-section" id="general">
                    <div className="general-info-layout" data-aos="fade-up">
                        <div className="general-info-text-col">
                            <div className="info-badge">General</div>
                            <div className="info-content expanded">
                                {generalInfo.split('\n\n').map((para, idx) => (
                                    <p key={idx} style={{ marginBottom: idx < 2 ? '20px' : '0' }}>{para}</p>
                                ))}
                            </div>
                        </div>
                        
                        {generalImage && (
                            <div className="general-info-img-col">
                                <div className="info-img-wrapper">
                                    <img src={generalImage} alt="NSS Activities" />
                                </div>
                            </div>
                        )}
                    </div>
                </section>
            )}

            {/* Foundation Section */}
            {foundation && (
                <section className="cc-section nss-foundation-section" id="foundation">
                    <div className="cc-section-header text-center" data-aos="fade-up">
                        <h2>{foundation.title}</h2>
                    </div>

                    <div className="nss-foundation-grid">
                        {/* Vision Card */}
                        <div className="foundation-card vision" data-aos="fade-up" data-aos-delay="100">
                            <div className="foundation-icon-circle">
                                <FaEye />
                            </div>
                            <h3>Vision</h3>
                            <p>{foundation.vision}</p>
                        </div>

                        {/* Mission Card */}
                        <div className="foundation-card mission" data-aos="fade-up" data-aos-delay="200">
                            <div className="foundation-icon-circle">
                                <FaBullseye />
                            </div>
                            <h3>Mission</h3>
                            <p>{foundation.mission}</p>
                        </div>

                        {/* Objective Card */}
                        <div className="foundation-card objective" data-aos="fade-up" data-aos-delay="300">
                            <div className="foundation-icon-circle">
                                <FaCrosshairs />
                            </div>
                            <h3>Objective</h3>
                            <p>{foundation.objective}</p>
                        </div>

                        {/* Milestones Card */}
                        <div className="foundation-card milestones" data-aos="fade-up" data-aos-delay="400">
                            <div className="foundation-icon-circle">
                                <FaFlag />
                            </div>
                            <h3>Milestones</h3>
                            <p>{foundation.milestoneText}</p>
                        </div>
                    </div>
                </section>
            )}

            {/* 5. Highlighted Events Section */}

            {/* 5. Highlighted Events Section */}
            {eventDetails && eventDetails.length > 0 && (
                <section className="cc-section nss-events-modern" id="events">
                    <div className="cc-section-header text-center" data-aos="fade-up">
                        <h2 style={{ color: '#0c1a40' }}>Highlighted Events (2018 - 2019)</h2>
                    </div>

                    <div className="nss-events-grid">
                        {eventDetails[0].events.map((event, idx) => (
                            <div className="modern-event-card" key={idx} data-aos="fade-up" data-aos-delay={idx * 50}>
                                <div className="event-date-badge">
                                    <span className="date-icon"><FaCalendarAlt /></span>
                                    {event.date}
                                </div>
                                <div className="event-info-box">
                                    <h3>{event.name}</h3>
                                    {event.location && (
                                        <div className="event-loc">
                                            <span className="loc-icon"><FaMapMarkerAlt /></span>
                                            {event.location}
                                        </div>
                                    )}
                                    <p>{event.details}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* 6. Regular Activities Section */}
            {regularActivities && regularActivities.length > 0 && (
                <section className="cc-section nss-regular-activities" id="regular">
                    <div className="cc-section-header text-center" data-aos="fade-up">
                        <h2 style={{ color: '#0c1a40' }}>Regular Activities</h2>
                    </div>

                    <div className="regular-activities-layout">
                        {regularActivities.map((activity, idx) => (
                            <div className="regular-activity-card" key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
                                <div className="activity-accent-line"></div>
                                <div className="activity-content-box">
                                    <h3>{activity.name}</h3>
                                    <div className="activity-loc">
                                        <span className="loc-icon"><FaMapMarkerAlt /></span>
                                        {activity.location}
                                    </div>
                                    <p>{activity.details}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* 7. Gallery Section */}
            <section className="cc-section nss-gallery-enhanced" id="gallery">
                <div className="cc-section-header gallery-header-flex" data-aos="fade-up">
                    <div className="header-text-group">
                        <h2>Gallery</h2>
                        <p>Moments captured from our various events and sessions</p>
                    </div>

                    <div className="gallery-header-right">
                        <div className="gallery-type-filters">
                            <button 
                                className={`gallery-filter-btn ${galleryFilter === 'photos' ? 'active' : ''}`}
                                onClick={() => setGalleryFilter('photos')}
                            >
                                Photos
                            </button>
                            <button 
                                className={`gallery-filter-btn ${galleryFilter === 'videos' ? 'active' : ''}`}
                                onClick={() => setGalleryFilter('videos')}
                            >
                                Videos
                            </button>
                        </div>
                    </div>
                </div>

                <div className="gallery-grid-modern">
                    {galleryFilter === 'videos' ? (
                        clubVideos.length > 0 ? (
                            clubVideos.map((video, index) => (
                                <div 
                                    className="modern-gallery-item video-card" 
                                    key={`v-${index}`} 
                                    data-aos="zoom-in" 
                                    onClick={() => setSelectedMedia(video)}
                                >
                                    <img src={video.thumbnail} alt={`NSS Video ${index}`} />
                                    <div className="video-overlay">
                                        <div className="play-button-wrapper">
                                            <FaPlay />
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="coming-soon-placeholder" data-aos="fade-up">
                                <div className="placeholder-content">
                                    <FaYoutube className="placeholder-icon" />
                                    <h3>Official Videos Coming Soon</h3>
                                    <p>We are currently preparing high-quality video content to showcase our club's activities. Stay tuned!</p>
                                </div>
                            </div>
                        )
                    ) : (
                        getAllImages().map((img, index) => (
                            <div 
                                className="modern-gallery-item" 
                                key={index} 
                                data-aos="zoom-in" 
                                data-aos-delay={index * 50}
                                onClick={() => setSelectedMedia({ type: 'image', url: img })}
                            >
                                <img src={img} alt={`${name} Gallery ${index}`} />
                            </div>
                        ))
                    )}
                </div>
            </section>

            {/* 8 & 9. Unified Connect Portal (Contact + Social) */}
            <section className="nss-connect-portal" id="contact">
                <div className="connect-portal-container" data-aos="fade-up">
                    {/* Left Side: Professional Contact */}
                    <div className="portal-column contact-side">
                        <div className="portal-header">
                            <span className="portal-badge">GET IN TOUCH</span>
                            <h2>Official Contact</h2>
                        </div>
                        
                        {contactInfo && (
                            <div className="portal-contact-list">
                                <div className="portal-contact-item">
                                    <div className="portal-icon"><FaMapMarkerAlt /></div>
                                    <div className="portal-info">
                                        <h4>Main Office</h4>
                                        <p>{contactInfo.address}</p>
                                    </div>
                                </div>
                                <div className="portal-contact-item">
                                    <div className="portal-icon"><FaPhoneAlt /></div>
                                    <div className="portal-info">
                                        <h4>Direct Helpline</h4>
                                        <p>{contactInfo.phone}</p>
                                    </div>
                                </div>
                                <div className="portal-contact-item">
                                    <div className="portal-icon"><FaEnvelope /></div>
                                    <div className="portal-info">
                                        <h4>Email Support</h4>
                                        <p><a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Right Side: Unique Social Hub */}
                    <div className="portal-column social-side">
                        <div className="portal-header">
                            <span className="portal-badge">STAY UPDATED</span>
                            <h2>Social Network</h2>
                        </div>
                        
                        <div className="social-tile-grid">
                            <a href="https://nsskecblog.blogspot.com/p/konguengineering-college-kec-was.html" target="_blank" rel="noopener noreferrer" className="social-tile blogger" title="Visit Blogger">
                                <FaBloggerB />
                                <span>Blogger</span>
                            </a>
                            <a href="https://www.instagram.com/nsskec/" target="_blank" rel="noopener noreferrer" className="social-tile instagram" title="Follow on Instagram">
                                <FaInstagram />
                                <span>Instagram</span>
                            </a>
                            <a href="https://www.facebook.com/nsskec2018/" target="_blank" rel="noopener noreferrer" className="social-tile facebook" title="Follow on Facebook">
                                <FaFacebook />
                                <span>Facebook</span>
                            </a>
                            <a href="https://www.youtube.com/channel/UC2V-ZtjQsbFyb7LlO6jTWmQ" target="_blank" rel="noopener noreferrer" className="social-tile youtube" title="Subscribe on YouTube">
                                <FaYoutube />
                                <span>YouTube</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Media Modal */}
            {selectedMedia && createPortal(
                <div className="media-modal-overlay" onClick={() => setSelectedMedia(null)}>
                    <div className="media-modal-container" onClick={(e) => e.stopPropagation()} data-aos="zoom-in">
                        <button className="media-modal-close" onClick={() => setSelectedMedia(null)}>
                            <FaTimes />
                        </button>
                        <div className="media-modal-content">
                            {selectedMedia.type === 'video' ? (
                                <div className="video-wrapper">
                                    <iframe 
                                        src={`${selectedMedia.url}?autoplay=1`}
                                        title="YouTube video player" 
                                        frameBorder="0" 
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            ) : (
                                <img src={selectedMedia.url} alt="Gallery Full View" className="full-view-image" />
                            )}
                        </div>
                    </div>
                </div>,
                document.body
            )}

            <Footer />
        </div>
    );
};

export default NssClub;
