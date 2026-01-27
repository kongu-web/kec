import React from 'react';
import Navbar from '../../HomePage/navbar/Navbar';
import Footer from '../../HomePage/Footer/Footer';
import IqacNavbar from '../IqacNavbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { iqacData } from '../iqacData';
import '../IQAC.css';
import './IqacISO.css';

const IqacISO = () => {
    return (
        <div className="iqac-wrapper">
            <Navbar />
            <div className="iqac-container container-fluid p-0">
                <IqacNavbar />
                <div className="iqac-content fade-in-up">
                    <h1 className="iqac-iso-page-title">International Organization for Standardization (ISO)</h1>

                    <div className="iqac-content-card">
                        <div className="iqac-card-header">
                            <div className="iqac-card-icon-wrapper">
                                <FontAwesomeIcon icon={faFilePdf} />
                            </div>
                            <h2 className="iqac-card-title">ABOUT ISO</h2>
                        </div>
                        <p className="iqac-text-content">
                            ISO certifications represent a commitment to excellence and adherence to internationally recognized standards of quality, safety, and efficiency. The International Organization for Standardization (ISO) is an independent, non-governmental international organization that develops and publishes a wide range of standards across various industries and sectors. ISO certifications are valuable for organizations seeking to enhance their operational efficiency, improve customer satisfaction, and gain a competitive edge in the Nation and beyond.
                        </p>
                    </div>

                    <div className="iqac-content-card">
                        <div className="iqac-card-header">
                            <div className="iqac-card-icon-wrapper">
                                <FontAwesomeIcon icon={faFilePdf} />
                            </div>
                            <h2 className="iqac-card-title">ISO @ KEC</h2>
                        </div>
                        <p className="iqac-text-content">
                            Kongu Engineering College is certified by ISO in accordance with ISO 9001:1993 from 1999, subsequently by ISO 9001:2000, and currently by ISO 9001:2015 in 2020, and recertified in 2023 for the scope of Curriculum Development and Conducting Undergraduate, Post Graduate, and Research Programmes in Engineering, Applied Sciences, and Management.
                        </p>
                    </div>

                    <h2 className="iqac-section-title text-center" style={{ marginTop: '60px' }}>CERTIFICATES & DOWNLOADS</h2>

                    <div className="iqac-iso-certificates-grid">
                        {iqacData.iso.map((file, idx) => (
                            <a key={idx} href={file.path} target="_blank" rel="noopener noreferrer" className="iqac-cert-card">
                                <div className="iqac-cert-icon-box">
                                    <FontAwesomeIcon icon={faFilePdf} />
                                </div>
                                <div className="iqac-cert-name">{file.name}</div>
                                <div className="iqac-cert-arrow">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="12" y1="5" x2="12" y2="19"></line>
                                        <polyline points="19 12 12 19 5 12"></polyline>
                                    </svg>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};
export default IqacISO;
