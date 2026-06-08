import React, { useState, useEffect } from 'react';
import './CampusLife.css';
import Navbar from '../../HomePage/navbar/Navbar';
import Footer from '../../HomePage/Footer/Footer';
import Spinner from '../../Spinner';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// React Icons
import {
    FaBook, FaUtensils, FaBed, FaHeartbeat, FaBasketballBall, FaWifi, FaBus,
    FaMusic, FaPalette, FaCamera, FaTheaterMasks, FaNewspaper, FaCode, FaLeaf, FaComments, FaChess, FaRocket,
    FaUniversity, FaUsers, FaTrophy, FaCalendarAlt, FaStar, FaGlobe, FaChevronRight,
    FaAmbulance, FaTint, FaStore, FaLandmark, FaEnvelope, FaBolt, FaTimes, FaShieldAlt, FaHeart
} from 'react-icons/fa';

// Importing Images (using existing assets)
import techImg from '../../../assets/images/WebAlbum/images/hackathon.webp';
import sportsImg from '../../../assets/images/WebAlbum/images/sports.webp';
import socialImg from '../../../assets/images/HomePage/healthcare.webp';
import gallery1 from '../../../assets/images/itpark.webp';
import gallery2 from '../../../assets/images/library.webp';
import gallery3 from '../../../assets/images/hostel.webp';
import gallery4 from '../../../assets/images/foodcourt.webp';
import gallery5 from '../../../assets/images/Events/E-Horizon-2025.webp';
import gallery6 from '../../../assets/images/Events/Pongal Celebration.webp';
import gallery7 from '../../../assets/images/Events/Kongu Trophy.webp';
import gallery8 from '../../../assets/images/WebAlbum/images/vinayagartemple.webp';
import enthusia from '../../../assets/images/WebAlbum/images/swaram2026.webp';

// Using placeholders for avatars if specific ones aren't available
// import avatar1 from '../../../assets/images/principal.webp';

const CampusLife = () => {
    const [loading, setLoading] = useState(true);
    const [showVideo, setShowVideo] = useState(false);

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        const timer = setTimeout(() => setLoading(false), 1800);
        return () => clearTimeout(timer);
    }, []);

    const facilities = [
        { icon: <FaBasketballBall />, name: "Physical Education", desc: "Indoor & outdoor facilities", color: "#f9d423", link: "/facilities/physicaldept" },
        { icon: <FaBook />, name: "Library", desc: "50,000+ books & digital resources", color: "#4facfe", link: "/facilities/library" },
        { icon: <FaBed />, name: "Hostels and Accommodation", desc: "Comfortable & secure accommodation", color: "#43e97b", link: "/facilities/hostelsandaccomodation" },
        { icon: <FaBus />, name: "Transport", desc: "Convenient bus services", color: "#e14fad", link: "/facilities/transport" },
        { icon: <FaHeartbeat />, name: "Dispensary", desc: "Medical care & pharmacy", color: "#ff6b6b", link: "/facilities/dispensary" },
        { icon: <FaWifi />, name: "WiFi Facility", desc: "High-speed internet everywhere", color: "#667eea" },
        { icon: <FaAmbulance />, name: "Ambulance", desc: "24/7 Emergency response", color: "#ff4757" },
        { icon: <FaUtensils />, name: "Foodcourt", desc: "Nutritious & diverse cuisine", color: "#f093fb" },
        { icon: <FaTint />, name: "RO Purifier", desc: "Clean drinking water", color: "#2ed573" },
        { icon: <FaStore />, name: "Amenity Centre", desc: "Stationery & daily needs", color: "#ffa502" },
        { icon: <FaLandmark />, name: "KVB Bank & ATM", desc: "On-campus banking facility", color: "#1e90ff" },
        { icon: <FaEnvelope />, name: "Post Office", desc: "Mail & postal services", color: "#ff6348" },
        { icon: <FaBolt />, name: "24 x 7 Power Supply", desc: "Uninterrupted power backup", color: "#ff9f43" },
    ];

    const activities = [
        { title: "Cultural Events", desc: "Annual festivals, competitions, and celebrations showcasing diverse talents", img: enthusia, color: "#ff0080" },
        { title: "Technical Clubs", desc: "Robotics, coding, innovation labs and hackathons for tech enthusiasts", img: techImg, color: "#00b09b" },
        { title: "Sports Tournaments", desc: "Inter-college competitions, athletics, and team sports throughout the year", img: sportsImg, color: "#fc4a1a" },
        { title: "Social Service", desc: "Community outreach programs and initiatives for social impact", img: socialImg, color: "#f7b733" },
    ];

    const clubs = [
        { icon: <FaCode />, name: "Coding Forum", color: "#667eea", path: "/clubs/coding-forum" },
        { icon: <FaMusic />, name: "Cultural & Music", color: "#4facfe", path: "/clubs/cultural-music" },
        { icon: <FaPalette />, name: "Ravi Varma", color: "#a18cd1", path: "/clubs/ravi-varma-creative" },
        { icon: <FaCamera />, name: "Photography", color: "#43e97b", path: "/clubs/photography-design" },
        { icon: <FaLeaf />, name: "Pasumaivanam", color: "#fd1d1d", path: "/clubs/pasumaivanam" },
        { icon: <FaTrophy />, name: "Quiz Club", color: "#fbc2eb", path: "/clubs/quiz-club" },
        { icon: <FaRocket />, name: "Robotics", color: "#00c6ff", path: "/clubs/robotics-club" },
        { icon: <FaGlobe />, name: "Tamil Mandram", color: "#11998e", path: "/clubs/tamil-mandram" },
        { icon: <FaChess />, name: "Chess Club", color: "#f9d423", path: "/clubs/chess-club" },
        { icon: <FaNewspaper />, name: "Editorial Board", color: "#4facfe", path: "/clubs/editorial-board" },
        { icon: <FaShieldAlt />, name: "NCC", color: "#2c3e50", path: "/clubs/ncc" },
        { icon: <FaHeart />, name: "NSS", color: "#e74c3c", path: "/clubs/nss" },
    ];

    const highlights = [
        { icon: <FaUniversity />, title: "Modern Infrastructure", desc: "State-of-the-art classrooms, laboratories, and technology-enabled learning spaces.", color: "#e3f2fd", iconColor: "#1565c0" },
        { icon: <FaUsers />, title: "Vibrant Community", desc: "A diverse and inclusive community creating a rich cultural experience.", color: "#fff3e0", iconColor: "#ef6c00" },
        { icon: <FaTrophy />, title: "Sports Excellence", desc: "World-class sports facilities and coaching to nurture athletic talent.", color: "#e8f5e9", iconColor: "#2e7d32" },
    ];

    const stats = [
        { icon: <FaUsers />, count: "12,000+", label: "Active Students", color: "#e3f2fd", iconColor: "#1565c0" },
        { icon: <FaUniversity />, count: "150+", label: "Student Clubs", color: "#e8f5e9", iconColor: "#2e7d32" },
        { icon: <FaTrophy />, count: "25+", label: "Sports Teams", color: "#f3e5f5", iconColor: "#7b1fa2" },
        { icon: <FaCalendarAlt />, count: "500+", label: "Annual Events", color: "#fff3e0", iconColor: "#ef6c00" },
    ];

    const testimonials = [
        { name: "Sangeetha P", role: "Computer Science, 3rd Year", text: "The campus life here is incredible! From tech clubs to cultural events, there's always something exciting happening.", rating: 5 },
        { name: "Aravind Kumar", role: "Mech Engineering, 4th Year", text: "The sports facilities are world-class. I've represented the college at national level competitions thanks to their support.", rating: 5 },
        { name: "Priya Sharma", role: "MBA, 2nd Year", text: "The diversity on campus is beautiful. I've learned so much from peers from different backgrounds.", rating: 5 },
    ];

    const gallery = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8];

    return loading ? (
        <Spinner />
    ) : (
        <div className="campus-life-page">
            <Navbar />

            {/* Video Modal */}
            {showVideo && (
                <div className="video-modal-overlay" onClick={() => setShowVideo(false)}>
                    <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="video-close-btn" onClick={() => setShowVideo(false)}>
                            <FaTimes />
                        </button>
                        <div className="video-wrapper">
                            <iframe
                                src="https://www.youtube.com/embed/meJ1nZVSjAM?autoplay=1&mute=1&loop=1&controls=0&playlist=meJ1nZVSjAM"
                                title="Campus Video"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen>
                            </iframe>
                        </div>
                    </div>
                </div>
            )}

            {/* Hero Section */}
            <div className="campus-hero">
                <div className="campus-hero-overlay"></div>
                <div className="campus-hero-content" data-aos="fade-up">
                    <h1>Experience Campus Life</h1>
                    <p>Discover a vibrant community where learning extends beyond the classroom</p>
                    <div className="hero-buttons">
                        {/* <button className="btn-tour">Take a Virtual Tour</button> */}
                        <button className="btn-video" onClick={() => setShowVideo(true)}>Watch Video</button>
                    </div>
                </div>
            </div>

            {/* Highlights Section */}
            <section className="cl-section-container">
                <div className="cl-section-header" data-aos="fade-up">
                    <h2>Campus Highlights</h2>
                    <p>Our campus offers world-class facilities and a nurturing environment</p>
                </div>
                <div className="highlights-grid">
                    {highlights.map((item, index) => (
                        <div className="highlight-card" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                            <div className="highlight-icon" style={{ backgroundColor: item.iconColor }}>
                                {item.icon}
                            </div>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Stats Section - Full Width Band */}
            <section className="cl-stats-section">
                <div className="cl-stats-container">
                    <div className="cl-stats-grid">
                        {stats.map((stat, index) => (
                            <div className="cl-stat-item" key={index} data-aos="zoom-in" data-aos-delay={index * 50}>
                                <div className="cl-stat-icon">
                                    {stat.icon}
                                </div>
                                <h3>{stat.count}</h3>
                                <p>{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Facilities Section */}
            <section className="cl-section-container">
                <div className="cl-section-header" data-aos="fade-up">
                    <h2>Our Facilities</h2>
                    <p>Everything you need for a complete college experience</p>
                </div>
                <div className="facilities-grid">
                    {facilities.map((item, index) => {
                        const content = (
                            <>
                                <div className="icon-box" style={{ color: item.color, background: `${item.color}20` }}>
                                    {item.icon}
                                </div>
                                <h3>{item.name}</h3>
                                <p>{item.desc}</p>
                            </>
                        );
                        return item.link ? (
                            <Link to={item.link} className="facility-card" key={index} data-aos="zoom-in" data-aos-delay={index * 50} style={{ textDecoration: 'none', color: 'inherit' }}>
                                {content}
                            </Link>
                        ) : (
                            <div className="facility-card" key={index} data-aos="zoom-in" data-aos-delay={index * 50}>
                                {content}
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Campus Gallery */}
            <section className="gallery-section-container">
                <div className="cl-section-header" data-aos="fade-up">
                    <h2>Campus Gallery</h2>
                    <p>A glimpse into our vibrant campus life</p>
                </div>
                <div className="gallery-grid">
                    {gallery.map((img, index) => (
                        <div className="gallery-item" key={index} data-aos="fade-up" data-aos-delay={index * 50}>
                            <img src={img} alt={`Gallery ${index}`} />
                        </div>
                    ))}
                </div>
            </section>


            {/* Student Life Section */}
            <section className="cl-section-container">
                <div className="cl-section-header" data-aos="fade-up">
                    <h2>Student Life & Activities</h2>
                    <p>Beyond academics - clubs, events, and experiences that shape you</p>
                </div>
                <div className="activities-grid">
                    {activities.map((act, index) => (
                        <div className="activity-card" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                            <div className="activity-img" style={{ backgroundImage: `url(${act.img})` }}>
                                <div className="activity-overlay">
                                    <h3>{act.title}</h3>
                                    <p>{act.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Clubs Section */}
            <section className="std-section-container bg-light">
                <div className="cl-section-header" data-aos="fade-up">
                    <h2>Student Clubs & Organizations</h2>
                    <p>Join over 30+ clubs and find your passion</p>
                </div>
                <div className="clubs-grid">
                    {clubs.map((club, index) => (
                        <Link to={club.path} className="club-card" key={index} data-aos="flip-up" data-aos-delay={index * 50} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <div className="club-icon" style={{ backgroundColor: club.color }}>
                                {club.icon}
                            </div>
                            <h3>{club.name}</h3>
                        </Link>
                    ))}
                </div>
                <div style={{ textAlign: 'center', marginTop: '25px' }} data-aos="fade-up">
                    <Link to="/student-centric-activities" className="sc-card-footer" style={{ justifyContent: 'center', fontSize: '1.1rem' }}>
                        View All Clubs & Cells <FaChevronRight size={14} style={{ marginLeft: '10px' }} />
                    </Link>
                </div>
            </section>

            {/* Testimonials */}
            <section className="cl-section-container">
                <div className="cl-section-header" data-aos="fade-up">
                    <h2>What Our Students Say</h2>
                    <p>Hear from those who live the campus experience every day</p>
                </div>
                <div className="testimonials-grid">
                    {testimonials.map((testi, index) => (
                        <div className="cl-testimonial-card" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                            <div className="testi-header">
                                <div className="testi-avatar" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#303877', color: '#fff', fontSize: '1.5rem', fontWeight: 'bold' }}>
                                    {testi.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()}
                                </div>
                                <div>
                                    <h4>{testi.name}</h4>
                                    <span>{testi.role}</span>
                                </div>
                            </div>
                            <div className="testi-stars">
                                {[...Array(testi.rating)].map((_, i) => <FaStar key={i} />)}
                            </div>
                            <p>"{testi.text}"</p>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default CampusLife;
