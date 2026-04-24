import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import './NccClub.css';
import { Link } from 'react-router-dom';
import Navbar from '../../HomePage/navbar/Navbar';
import Footer from '../../HomePage/Footer/Footer';
import { FaPhoneAlt, FaEnvelope, FaExternalLinkAlt, FaStar, FaAward, FaCampground, FaFlag, FaCamera, FaAddressCard, FaTimes, FaCheckCircle, FaYoutube, FaInstagram, FaPlay, FaChevronRight, FaBullseye, FaUserPlus, FaCalendarAlt, FaUserCheck, FaFileUpload, FaIdBadge, FaBook, FaListOl, FaFileAlt } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { nccData } from './nccData';

import orgChartImg from '../../../assets/images/Clubs/ncc/organisationla chart.webp';
import nccLogoImg from '../../../assets/images/Clubs/ncc/Ncc logo.webp';
import nccImg2 from '../../../assets/images/Clubs/ncc/ncc-2.webp';

const NccClub = () => {
    const {
        name, coordinators, about, objectives, 
        gallery, essentialLinks, studyMaterials, heroImage, motto, 
        generalInfo, generalImage, detailedHistory, 
        achievements, achievementsLink, cadetsCorner, 
        nominalRoll, bloggerUpdates, enrollment, tagline
    } = nccData;

    const [showOrgModal, setShowOrgModal] = useState(false);
    const [selectedMedia, setSelectedMedia] = useState(null);
    const [galleryFilter, setGalleryFilter] = useState('photos'); // Added filter state

    // YouTube Videos
    const clubVideos = [
        { type: 'video', url: 'https://www.youtube.com/embed/HtMF973tXIY', thumbnail: 'https://img.youtube.com/vi/HtMF973tXIY/maxresdefault.jpg' },
        { type: 'video', url: 'https://www.youtube.com/embed/Q3gZB8AW-KA', thumbnail: 'https://img.youtube.com/vi/Q3gZB8AW-KA/maxresdefault.jpg' }
    ];

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="cell-club-container ncc-premium-theme">
            <Navbar />

            {/* 1. Hero Section */}
            <header 
                className="cell-club-hero" 
                data-aos="fade"
                style={heroImage ? { backgroundImage: `url(${heroImage})` } : {}}
            >
                <div className="ncc-hero-bg-logo">
                    <img src={nccLogoImg} alt="NCC Logo Watermark" />
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
                                <p>{generalInfo}</p>
                            </div>
                        </div>
                        
                        {generalImage && (
                            <div className="general-info-img-col">
                                <div className="info-img-wrapper">
                                    <img src={generalImage} alt="Inside NCC" />
                                </div>
                            </div>
                        )}
                    </div>
                </section>
            )}

            {/* Aim & Objectives Section */}
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

                    <div className="cc-motto-history" data-aos="fade-left">
                        <div className="motto-history-header">
                            <div className="motto-icon-wrapper">
                                <FaStar />
                            </div>
                            <h3>Motto of NCC</h3>
                        </div>
                        <p className="motto-history-text">
                            The need for having motto for the Corps was discussed in the 11th Central Advisory Committee (CAC) meeting held on 11 Aug 1978. 
                            The mottos suggested were “Duty and Discipline”; “Duty, Unity and Discipline”; “Duty and Unity”; “Unity and Discipline”. 
                            The final decision for selection of <strong>“Unity and Discipline”</strong> as motto for the NCC was taken in the 12th CAC meeting held on 12 Oct 1980.
                        </p>
                        <button className="view-org-btn" onClick={() => setShowOrgModal(true)}>
                            View Organization
                        </button>
                    </div>
                </div>
            </section>

            {/* Essential Links Section */}
            {(essentialLinks || studyMaterials) && (
                <section className="cc-section bg-light" id="reports">
                    <div className="cc-section-header" data-aos="fade-up">
                        <h2>Resources & Portals</h2>
                        <p>Quick access to official platforms and training materials</p>
                    </div>
                    
                    <div className="resources-split-layout">
                        {/* Essential Links Column */}
                        <div className="resources-column" data-aos="fade-right">
                            <h3 className="column-title">Essential Links</h3>
                            <div className="resources-links-grid-compact">
                                {essentialLinks?.map((report, index) => (
                                    <a 
                                        href={report.link} 
                                        className="resource-link-btn" 
                                        key={index} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                    >
                                        <span>{report.title}</span>
                                        <FaExternalLinkAlt className="external-link-icon" />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Study Material Column */}
                        <div className="resources-column" data-aos="fade-left">
                            <h3 className="column-title">Study Material</h3>
                            <div className="resources-links-grid-compact">
                                {studyMaterials?.map((item, index) => (
                                    <a 
                                        href={item.link} 
                                        className="resource-link-btn" 
                                        key={index} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                    >
                                        <span>{item.title}</span>
                                        <FaExternalLinkAlt className="external-link-icon" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Achievements Section */}
            {achievements && (
                <section className="cc-section achievements-section" id="achievements">
                    <div className="cc-section-header text-center" data-aos="fade-up">
                        <h2>Achievements</h2>
                    </div>
                    
                    <div className="achievements-text-content" data-aos="fade-up">
                        <p>{achievements}</p>
                        {achievementsLink && (
                            <div className="achievements-footer inline-footer">
                                <a href={achievementsLink} target="_blank" rel="noopener noreferrer" className="view-more-achievements">
                                    <FaExternalLinkAlt /> View Detailed Achievement Records
                                </a>
                            </div>
                        )}
                    </div>
                </section>
            )}

            {/* Cadets Corner */}
            {cadetsCorner && (
                <section className="cc-section ncc-cadets-corner" id="cadets-corner">
                    <div className="cc-section-header text-center" data-aos="fade-up">
                        <h2>Cadets Corner</h2>
                    </div>
                    <div className="ncc-cadet-cards-grid">
                        {cadetsCorner.items.map((item, idx) => (
                            <a 
                                href={item.link || '#'} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="cadet-mini-card" 
                                key={idx} 
                                data-aos="fade-up" 
                                data-aos-delay={idx * 50}
                            >
                                <div className="cadet-mini-icon">
                                    {item.icon === 'schedule' && <FaCalendarAlt />}
                                    {item.icon === 'attendance' && <FaUserCheck />}
                                    {item.icon === 'proof' && <FaFileUpload />}
                                    {item.icon === 'od' && <FaIdBadge />}
                                    {item.icon === 'study' && <FaBook />}
                                    {item.icon === 'roll' && <FaListOl />}
                                    {item.icon === 'circular' && <FaFileAlt />}
                                </div>
                                <h4>{item.name}</h4>
                                <span className="cadet-mini-view">View</span>
                            </a>
                        ))}
                    </div>
                </section>
            )}

            {/* Blogger & Enrolment Combined Layout */}
            <div className="ncc-dual-section-grid">
                {/* Blogger */}
                {bloggerUpdates && (
                    <section className="cc-section ncc-blogger" id="blogger">
                        <div className="cc-section-header text-center" data-aos="fade-up">
                            <h2>Blogger</h2>
                        </div>
                        <div className="blogger-cards-container">
                            {bloggerUpdates.map((post, idx) => (
                                <div className="blog-modern-card compact" key={idx} data-aos="fade-up">
                                    <div className="blog-card-badge">{post.tag || "Update"}</div>
                                    <div className="blog-card-content">
                                        <span className="blog-card-date">{post.date}</span>
                                        <h4>{post.title}</h4>
                                        <p className="blog-card-summary">{post.summary}</p>
                                    </div>
                                </div>
                            ))}
                            
                            <a href="https://kecnccair.blogspot.com/" target="_blank" rel="noopener noreferrer" className="blog-external-portal-card" data-aos="fade-up">
                                <div className="portal-icon"><FaExternalLinkAlt /></div>
                                <div className="portal-text">
                                    <span>Explore More Stories</span>
                                    <h4>Visit Official NCC Blog</h4>
                                </div>
                                <div className="portal-arrow"><FaChevronRight /></div>
                            </a>
                        </div>

                        {nominalRoll && (
                            <div className="ncc-nominal-roll-integrated" data-aos="fade-up">
                                <h5 className="mini-section-title text-center">Nominal Roll</h5>
                                <p className="mini-section-desc">The Nominal Roll provides a structured record of NCC cadets categorized batch-wise for easy access and reference.</p>
                                <div className="nominal-roll-action">
                                    <Link to="/nominie" className="view-more-btn">
                                        View All Batches <FaChevronRight />
                                    </Link>
                                </div>
                            </div>
                        )}
                    </section>
                )}

                {/* Enrolment */}
                {enrollment && (
                    <section className="cc-section ncc-enrollment" id="enrollment">
                        <div className="cc-section-header text-center" data-aos="fade-up">
                            <h2>Enrolment</h2>
                        </div>
                        <div className="enrollment-card-premium" data-aos="fade-up">
                            <div className="enrollment-badge"><FaUserPlus /> Recruitment Open</div>
                            <div className="enrollment-details">
                                <div className="detail-group">
                                    <h5>Eligibility</h5>
                                    <p>{enrollment.eligibility}</p>
                                </div>
                                <div className="detail-group">
                                    <h5>Process</h5>
                                    <p>{enrollment.process}</p>
                                </div>
                                <a href={enrollment.formLink} target="_blank" rel="noopener noreferrer" className="enroll-now-btn">
                                    Apply for Enrolment <FaExternalLinkAlt />
                                </a>
                            </div>
                        </div>
                    </section>
                )}
            </div>

            {/* Gallery Section */}
            {gallery && gallery.length > 0 && (
                <section className="cc-section gallery-section-enhanced" id="gallery">
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
                            
                            <div className="gallery-social-links">
                                <a href="https://x.com/kecnccair" target="_blank" rel="noopener noreferrer" className="social-icon twitter" title="X (Twitter)">
                                    <FaXTwitter />
                                </a>
                                <a href="https://www.youtube.com/@Official_kecncc" target="_blank" rel="noopener noreferrer" className="social-icon youtube" title="YouTube">
                                    <FaYoutube />
                                </a>
                                <a href="https://www.instagram.com/official_kecncc" target="_blank" rel="noopener noreferrer" className="social-icon instagram" title="Instagram">
                                    <FaInstagram />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="gallery-grid">
                        {galleryFilter === 'videos' ? (
                            clubVideos.map((video, index) => (
                                <div className="gallery-card video-card" key={`v-${index}`} data-aos="zoom-in" onClick={() => setSelectedMedia(video)}>
                                    <img src={video.thumbnail} alt={`Club Video ${index}`} />
                                    <div className="video-overlay">
                                        <div className="play-button-wrapper">
                                            <FaPlay />
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            gallery.map((img, index) => (
                                <div className="gallery-card" key={index} data-aos="zoom-in" data-aos-delay={index * 50} onClick={() => setSelectedMedia({ type: 'image', url: img })}>
                                    <img src={img} alt={`${name} Gallery ${index}`} />
                                </div>
                            ))
                        )}
                    </div>
                </section>
            )}

            {/* Modals */}
            {showOrgModal && createPortal(
                <div className="org-modal-overlay" onClick={() => setShowOrgModal(false)}>
                    <div className="org-modal-container" onClick={(e) => e.stopPropagation()} data-aos="zoom-in">
                        <button className="org-modal-close" onClick={() => setShowOrgModal(false)}>
                            <FaTimes />
                        </button>
                        <div className="org-modal-header">
                            <h3>Organization Structure</h3>
                            <p>National Cadet Corps (NCC) - Kongu Engineering College</p>
                        </div>
                        <div className="org-modal-content">
                            <img src={orgChartImg} alt="NCC Organization Chart" />
                        </div>
                    </div>
                </div>,
                document.body
            )}

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

export default NccClub;
