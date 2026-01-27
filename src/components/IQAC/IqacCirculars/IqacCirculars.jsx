import React, { useState } from 'react';
import Navbar from '../../HomePage/navbar/Navbar';
import Footer from '../../HomePage/Footer/Footer';
import IqacNavbar from '../IqacNavbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { recentCirculars, archivedCirculars } from '../circularsData';
import '../IQAC.css';
import './IqacCirculars.css';

const IqacCirculars = () => {
    const [isArchiveOpen, setIsArchiveOpen] = useState(false);

    const toggleArchive = () => {
        setIsArchiveOpen(!isArchiveOpen);
    };

    return (
        <div className="iqac-wrapper">
            <Navbar />
            <div className="iqac-container container-fluid p-0">
                <IqacNavbar />

                <div className="iqac-content">
                    <h1 className="iqac-section-title">Circulars</h1>

                    <div className="iqac-card">
                        <h2 className="iqac-card-title">Recent Circulars</h2>
                        <div className="iqac-card-body">
                            <div className="file-grid">
                                {recentCirculars.map((file, idx) => (
                                    <a
                                        key={idx}
                                        href={file.path}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="file-card"
                                    >
                                        <div className="file-icon-wrapper">
                                            <i className="fa-regular fa-file-pdf"></i>
                                        </div>
                                        <div className="file-info" style={{ flexGrow: 1, minWidth: 0 }}>
                                            <div className="file-name" style={{ marginBottom: '2px' }}>{file.name}</div>
                                            <div className="text-muted small">{file.date}</div>
                                        </div>
                                        <i className="fa-solid fa-download download-icon"></i>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="iqac-card">
                        <div
                            className="iqac-card-title d-flex justify-content-between align-items-center"
                            style={{ cursor: 'pointer' }}
                            onClick={toggleArchive}
                        >
                            <span>Archived Circulars</span>
                            <FontAwesomeIcon icon={isArchiveOpen ? faChevronUp : faChevronDown} />
                        </div>
                        {isArchiveOpen && (
                            <div className="iqac-card-body">
                                <div className="file-grid">
                                    {archivedCirculars.map((file, idx) => (
                                        <a
                                            key={idx}
                                            href={file.path}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="file-card"
                                        >
                                            <div className="file-icon-wrapper">
                                                <i className="fa-regular fa-file-pdf"></i>
                                            </div>
                                            <div className="file-info" style={{ flexGrow: 1, minWidth: 0 }}>
                                                <div className="file-name" style={{ marginBottom: '2px' }}>{file.name}</div>
                                                <div className="text-muted small">{file.date}</div>
                                            </div>
                                            <i className="fa-solid fa-download download-icon"></i>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    );
};

export default IqacCirculars;
