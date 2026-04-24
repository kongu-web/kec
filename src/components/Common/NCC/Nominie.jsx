import React, { useEffect, useState } from 'react';
import './NccClub.css';
import Navbar from '../../HomePage/navbar/Navbar';
import Footer from '../../HomePage/Footer/Footer';
import { FaAddressCard, FaChevronLeft, FaTimes, FaDownload } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { nccData } from './nccData';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Nominie = () => {
    const { nominalRoll } = nccData;
    const [selectedBatch, setSelectedBatch] = useState(null);

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        window.scrollTo(0, 0);
    }, []);

    const handleBatchClick = (e, roll) => {
        e.preventDefault();
        if (roll.cadets && roll.cadets.length > 0) {
            setSelectedBatch(roll);
            // Smooth scroll to gallery
            setTimeout(() => {
                document.getElementById('cadet-list-view')?.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }, 100);
        } else {
            alert("Nominal roll data for this batch is coming soon.");
        }
    };

    return (
        <div className="nominie-page-container ncc-premium-theme">
            <Navbar />
            
            <div className="nominie-main-content">
                <div className="container">
                    <div className="nominie-page-header">
                        <Link to="/clubs/ncc" className="back-link" data-aos="fade-up">
                            <FaChevronLeft /> Back to NCC Portal
                        </Link>
                        <h1 data-aos="fade-up" data-aos-delay="100">Nominal Roll Batches</h1>
                        <p data-aos="fade-up" data-aos-delay="200">
                            The Nominal Roll provides a structured record of NCC cadets categorized batch-wise for easy access and reference.
                        </p>
                    </div>

                    <div className="nominal-roll-hero-grid">
                        {nominalRoll.map((roll, idx) => (
                            <a 
                                href="#" 
                                onClick={(e) => handleBatchClick(e, roll)}
                                className="nominal-roll-full-card" 
                                key={idx} 
                                data-aos="fade-up" 
                                data-aos-delay={idx * 100 + 200}
                            >
                                <div className="roll-card-icon">
                                    <FaAddressCard />
                                </div>
                                <div className="roll-card-info">
                                    <h3>{roll.batch}</h3>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Cadet Gallery Section (Below Grid) */}
            {selectedBatch && (
                <div className="cadet-display-section" id="cadet-list-view">
                    <div className="container">
                        <div className="cadet-section-header" data-aos="fade-up">
                            <div className="header-info">
                                <h2>Cadets - Batch {selectedBatch.batch}</h2>
                                <p>{selectedBatch.cadets.length} Cadets Enrolled</p>
                            </div>
                            <button className="close-selection-btn" onClick={() => setSelectedBatch(null)}>
                                <FaTimes /> Close View
                            </button>
                        </div>
                        
                        <div className="cadet-gallery-grid">
                            {selectedBatch.cadets.map((cadet, idx) => (
                                <div className="cadet-profile-card" key={idx} data-aos="zoom-in" data-aos-delay={idx * 50}>
                                    <div className="cadet-img-wrapper">
                                        <img 
                                            src={`/assets/images/Clubs/ncc/nominal/${selectedBatch.batch}/${cadet.image}`} 
                                            alt={cadet.name} 
                                            onError={(e) => {
                                                e.target.src = "https://via.placeholder.com/150?text=NCC+Cadet";
                                            }}
                                        />
                                    </div>
                                    <div className="cadet-name-badge">
                                        <span>{cadet.name}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
};

export default Nominie;
