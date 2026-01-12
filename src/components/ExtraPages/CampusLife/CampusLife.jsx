import React, { useState, useEffect } from 'react';
import './CampusLife.css';
import Navbar from '../../HomePage/navbar/Navbar';
import Footer from '../../HomePage/Footer/Footer';
import ScrollToTopButton from '../../ScrollToTopButton';
import Spinner from '../../Spinner';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// React Icons
import {
    FaBook, FaUtensils, FaBed, FaFlask, FaHeartbeat, FaBasketballBall, FaWifi, FaBus,
    FaMusic, FaPalette, FaCamera, FaTheaterMasks, FaNewspaper, FaCode, FaLeaf, FaComments, FaChess, FaRocket,
    FaUniversity, FaUsers, FaTrophy, FaCalendarAlt, FaStar, FaQuoteLeft
} from 'react-icons/fa';

// Importing Images (using existing assets)
import heroBg from '../../../assets/images/kecglobe.png';
import culturalImg from '../../../assets/images/slider-background.jpg';
import techImg from '../../../assets/images/cc.jpg';
import sportsImg from '../../../assets/images/physicaldept.jpg';
import socialImg from '../../../assets/images/mission.png';
import gallery1 from '../../../assets/images/kec1.jpg';
import gallery2 from '../../../assets/images/library.jfif';
import gallery3 from '../../../assets/images/hostel.jpg';
import gallery4 from '../../../assets/images/foodcourt.jfif';
// Using placeholders for avatars if specific ones aren't available
import avatar1 from '../../../assets/images/principal.jpg';

const CampusLife = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        const timer = setTimeout(() => setLoading(false), 800);
        return () => clearTimeout(timer);
    }, []);

    const facilities = [
        { icon: <FaBook />, name: "Central Library", desc: "50,000+ books & digital resources", color: "#4facfe" },
        { icon: <FaUtensils />, name: "Dining Halls", desc: "Nutritious meals & diverse cuisine", color: "#f093fb" },
        { icon: <FaBed />, name: "Hostels", desc: "Comfortable & secure accommodation", color: "#43e97b" },
        { icon: <FaFlask />, name: "Laboratories", desc: "Advanced research facilities", color: "#fa709a" },
        { icon: <FaHeartbeat />, name: "Health Center", desc: "24/7 medical care", color: "#ff6b6b" },
        { icon: <FaBasketballBall />, name: "Sports Complex", desc: "Indoor & outdoor facilities", color: "#f9d423" },
        { icon: <FaWifi />, name: "Wi-Fi Campus", desc: "High-speed internet everywhere", color: "#667eea" },
        { icon: <FaBus />, name: "Transportation", desc: "Convenient bus services", color: "#e14fad" },
    ];

    const activities = [
        { title: "Cultural Events", desc: "Annual festivals, competitions, and celebrations showcasing diverse talents", img: culturalImg, color: "#ff0080" },
        { title: "Technical Clubs", desc: "Robotics, coding, innovation labs and hackathons for tech enthusiasts", img: techImg, color: "#00b09b" },
        { title: "Sports Tournaments", desc: "Inter-college competitions, athletics, and team sports throughout the year", img: sportsImg, color: "#fc4a1a" },
        { title: "Social Service", desc: "Community outreach programs and initiatives for social impact", img: socialImg, color: "#f7b733" },
    ];

    const clubs = [
        { icon: <FaMusic />, name: "Music Club", color: "#4facfe" },
        { icon: <FaPalette />, name: "Arts Club", color: "#a18cd1" },
        { icon: <FaCamera />, name: "Photography", color: "#43e97b" },
        { icon: <FaTheaterMasks />, name: "Drama Club", color: "#fa709a" },
        { icon: <FaNewspaper />, name: "Journalism", color: "#fbc2eb" },
        { icon: <FaCode />, name: "Coding Club", color: "#667eea" },
        { icon: <FaLeaf />, name: "Eco Club", color: "#fd1d1d" },
        { icon: <FaComments />, name: "Debate Club", color: "#fa709a" },
        { icon: <FaChess />, name: "Chess Club", color: "#11998e" },
        { icon: <FaRocket />, name: "Innovation", color: "#00c6ff" },
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
        { name: "Sarah Johnson", role: "Computer Science, 3rd Year", text: "The campus life here is incredible! From tech clubs to cultural events, there's always something exciting happening.", rating: 5 },
        { name: "Michael Chen", role: "Mech Engineering, 4th Year", text: "The sports facilities are world-class. I've represented the college at national level competitions thanks to their support.", rating: 5 },
        { name: "Priya Sharma", role: "MBA, 2nd Year", text: "The diversity on campus is beautiful. I've learned so much from peers from different backgrounds.", rating: 5 },
    ];

    const gallery = [gallery1, gallery2, gallery3, gallery4, culturalImg, techImg, sportsImg, socialImg];

    return loading ? (
        <Spinner />
    ) : (
        <div className="campus-life-page">
            <Navbar />

            {/* Hero Section */}
            <div className="campus-hero">
                <div className="campus-hero-overlay"></div>
                <div className="campus-hero-content" data-aos="fade-up">
                    <h1>Experience Campus Life</h1>
                    <p>Discover a vibrant community where learning extends beyond the classroom</p>
                    <div className="hero-buttons">
                        <button className="btn-tour">Take a Virtual Tour</button>
                        <button className="btn-video">Watch Video</button>
                    </div>
                </div>
            </div>

            {/* Highlights Section */}
            <section className="section-container">
                <div className="section-header" data-aos="fade-up">
                    <h2>Campus Highlights</h2>
                    <p>Our campus offers world-class facilities and a nurturing environment</p>
                </div>
                <div className="highlights-grid">
                    {highlights.map((item, index) => (
                        <div className="highlight-card" key={index} style={{ backgroundColor: item.color }} data-aos="fade-up" data-aos-delay={index * 100}>
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
                                <div className="cl-stat-icon" style={{ backgroundColor: stat.color, color: stat.iconColor }}>
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
            <section className="section-container">
                <div className="section-header" data-aos="fade-up">
                    <h2>Our Facilities</h2>
                    <p>Everything you need for a complete college experience</p>
                </div>
                <div className="facilities-grid">
                    {facilities.map((item, index) => (
                        <div className="facility-card" key={index} data-aos="zoom-in" data-aos-delay={index * 50}>
                            <div className="icon-box" style={{ color: item.color, background: `${item.color}20` }}>
                                {item.icon}
                            </div>
                            <h3>{item.name}</h3>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Campus Gallery */}
            <section className="section-container bg-light">
                <div className="section-header" data-aos="fade-up">
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
            <section className="section-container">
                <div className="section-header" data-aos="fade-up">
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
            <section className="section-container bg-light">
                <div className="section-header" data-aos="fade-up">
                    <h2>Student Clubs & Organizations</h2>
                    <p>Join over 50+ clubs and find your passion</p>
                </div>
                <div className="clubs-grid">
                    {clubs.map((club, index) => (
                        <div className="club-card" key={index} data-aos="flip-up" data-aos-delay={index * 50}>
                            <div className="club-icon" style={{ backgroundColor: club.color }}>
                                {club.icon}
                            </div>
                            <h3>{club.name}</h3>
                        </div>
                    ))}
                </div>
            </section>

            {/* Testimonials */}
            <section className="section-container">
                <div className="section-header" data-aos="fade-up">
                    <h2>What Our Students Say</h2>
                    <p>Hear from those who live the campus experience every day</p>
                </div>
                <div className="testimonials-grid">
                    {testimonials.map((testi, index) => (
                        <div className="testimonial-card" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                            <div className="testi-header">
                                <img src={avatar1} alt="Avatar" className="testi-avatar" />
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
            <ScrollToTopButton />
        </div>
    );
};

export default CampusLife;
