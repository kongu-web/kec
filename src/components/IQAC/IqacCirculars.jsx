import React, { useState } from 'react';
import Navbar from '../HomePage/navbar/Navbar';
import Footer from '../HomePage/Footer/Footer';
import IqacNavbar from './IqacNavbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { recentCirculars, archivedCirculars } from './circularsData';
import './IQAC.css';

const IqacCirculars = () => {
    const [isArchiveOpen, setIsArchiveOpen] = useState(false);

    const toggleArchive = () => {
        setIsArchiveOpen(!isArchiveOpen);
    };

    return (
        <div className="iqac-wrapper">
            <Navbar />
            <div className="iqac-container container-fluid p-4">
                <IqacNavbar />

                <div className="iqac-content">
                    <h1 className="iqac-section-title text-center">CIRCULARS</h1>

                    <div className="mb-5">
                        <h4 className="mb-3">Recent Circulars</h4>
                        <div className="iqac-file-grid">
                            {recentCirculars.map((file, idx) => (
                                <a
                                    key={idx}
                                    href={file.path}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="iqac-file-link"
                                >
                                    <FontAwesomeIcon icon={faFilePdf} className="iqac-file-icon" />
                                    <div>
                                        <div className="small font-weight-bold">{file.name}</div>
                                        <div className="text-muted small">{file.date}</div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="archive-section">
                        <button
                            className="btn btn-light w-100 d-flex justify-content-between align-items-center p-3 border"
                            onClick={toggleArchive}
                        >
                            <span className="font-weight-bold">Archived Circulars</span>
                            <FontAwesomeIcon icon={isArchiveOpen ? faChevronUp : faChevronDown} />
                        </button>

                        {isArchiveOpen && (
                            <div className="iqac-file-grid mt-3 p-3 border rounded bg-white">
                                {archivedCirculars.map((file, idx) => (
                                    <a
                                        key={idx}
                                        href={file.path}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="iqac-file-link"
                                    >
                                        <FontAwesomeIcon icon={faFilePdf} className="iqac-file-icon" />
                                        <div>
                                            <div className="small font-weight-bold">{file.name}</div>
                                            <div className="text-muted small">{file.date}</div>
                                        </div>
                                    </a>
                                ))}
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
