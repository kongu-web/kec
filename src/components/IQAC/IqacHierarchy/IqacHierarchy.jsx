import React from 'react';
import Navbar from '../../HomePage/navbar/Navbar';
import Footer from '../../HomePage/Footer/Footer';
import IqacNavbar from '../IqacNavbar';
import '../IQAC.css';
import './IqacHierarchy.css';

const IqacHierarchy = () => {
    return (
        <div className="iqac-wrapper">
            <Navbar />
            <div className="iqac-container container-fluid p-0">
                <IqacNavbar />
                <div className="iqac-content fade-in-up">

                    <div className="iqac-hierarchy-header">
                        <h1 className="iqac-section-title">Organizational Structure</h1>
                        <p className="iqac-hierarchy-subtitle">
                            Visual representation of the reporting structure and functional hierarchy within the IQAC.
                        </p>
                    </div>

                    <div className="iqac-actions">
                        <a href="/files/iqac/IQAC chart.JPG" download className="iqac-btn-download">
                            <span>Download Chart</span>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                <polyline points="7 10 12 15 17 10"></polyline>
                                <line x1="12" y1="15" x2="12" y2="3"></line>
                            </svg>
                        </a>
                    </div>

                    <div className="iqac-pdf-container">
                        <div className="iqac-pdf-header-bar">
                            <div className="iqac-window-dot dot-red"></div>
                            <div className="iqac-window-dot dot-yellow"></div>
                            <div className="iqac-window-dot dot-green"></div>
                            <span style={{ marginLeft: '15px', color: '#64748b', fontSize: '13px', fontWeight: '500' }}>iqac-chart.jpg</span>
                        </div>
                        <div className="iqac-image-wrapper">
                            <img
                                src="/files/iqac/IQAC chart.JPG"
                                className="iqac-hierarchy-image"
                                alt="IQAC Organizational Chart"
                            />
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    );
};
export default IqacHierarchy;
