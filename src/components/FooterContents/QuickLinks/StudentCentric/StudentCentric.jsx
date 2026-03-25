import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './StudentCentric.css';
import Navbar from "../../../HomePage/navbar/Navbar";
import Footer from "../../../HomePage/Footer/Footer";
import { clubsData } from "../../../Common/CellClubTemplate/clubsData";
import { FaCode, FaPalette, FaMusic, FaUsers, FaLaptopCode, FaBook, FaGlobe, FaChevronRight, FaLightbulb, FaTools, FaHeart, FaTrophy } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const StudentCentric = () => {
    const [filter, setFilter] = useState('All');
    const [filteredClubs, setFilteredClubs] = useState(clubsData);

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        if (filter === 'All') {
            setFilteredClubs(clubsData);
        } else {
            setFilteredClubs(clubsData.filter(club => club.category === filter));
        }
    }, [filter]);

    const categories = ['All', 'Technical', 'Social', 'Cultural', 'Skill', 'Professional'];

    const getIcon = (id, category) => {
        switch (id) {
            case 'coding-forum': return <FaCode />;
            case 'robotics-club': return <FaTools />;
            case 'photography-design': return <FaPalette />;
            case 'cultural-music': return <FaMusic />;
            case 'cloud-users': return <FaLaptopCode />;
            case 'english-proficiency': return <FaBook />;
            case 'tamil-mandram': return <FaGlobe />;
            default:
                switch (category) {
                    case 'Technical': return <FaLightbulb />;
                    case 'Social': return <FaHeart />;
                    case 'Cultural': return <FaPalette />;
                    case 'Skill': return <FaTrophy />;
                    default: return <FaUsers />;
                }
        }
    };

    const getColor = (category) => {
        switch (category) {
            case 'Technical': return '#1e3a8a';
            case 'Social': return '#ef4444';
            case 'Cultural': return '#8b5cf6';
            case 'Skill': return '#f59e0b';
            case 'Professional': return '#10b981';
            default: return '#3b82f6';
        }
    };

    return (
        <div className="student-centric-page">
            <Navbar />

            {/* Hero Banner */}
            <section className="sc-hero">
                <div data-aos="fade-up">
                    <h1>Student Centric Activities</h1>
                    <p>Discover a vibrant ecosystem of 27+ clubs and cells designed to nurture your passion, sharpen your skills, and build a community beyond academics.</p>
                </div>
            </section>

            <div className="sc-container">
                {/* Filter Tabs */}
                <div className="sc-filters" data-aos="fade-up">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            className={`sc-filter-btn ${filter === cat ? 'active' : ''}`}
                            onClick={() => setFilter(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Clubs Grid */}
                <div className="sc-grid">
                    {filteredClubs.map((club, index) => (
                        <Link
                            to={`/clubs/${club.id}`}
                            className="sc-club-card"
                            key={club.id}
                            data-aos="fade-up"
                            data-aos-delay={(index % 4) * 100}
                        >
                            <span className="sc-card-category" style={{ color: getColor(club.category) }}>
                                {club.category}
                            </span>
                            <div className="sc-card-icon" style={{ backgroundColor: getColor(club.category) }}>
                                {getIcon(club.id, club.category)}
                            </div>
                            <h3>{club.name}</h3>
                            <p>{club.about}</p>
                            <div className="sc-card-footer">
                                Explore Club <FaChevronRight size={12} />
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Information Message if empty - should not happen with current data */}
                {filteredClubs.length === 0 && (
                    <div className="sc-empty" style={{ textAlign: 'center', padding: '100px 0' }}>
                        <p>No clubs found in this category.</p>
                    </div>
                )}
            </div>

            <Footer />
        </div>
    );
};

export default StudentCentric;
