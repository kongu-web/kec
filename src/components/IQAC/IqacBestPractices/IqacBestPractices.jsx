import React from 'react';
import Navbar from '../../HomePage/navbar/Navbar';
import Footer from '../../HomePage/Footer/Footer';
import IqacNavbar from '../IqacNavbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { iqacData } from '../iqacData';
import '../IQAC.css';
import './IqacBestPractices.css';

const IqacBestPractices = () => {
    return (
        <div className="iqac-wrapper">
            <Navbar />
            <div className="iqac-container container-fluid p-0">
                <IqacNavbar />
                <div className="iqac-content">
                    <h1 className="iqac-section-title">Best Practices</h1>
                    <div className="iqac-card">
                        <h2 className="iqac-card-title">Overview</h2>
                        <div className="iqac-card-body">
                            <p className="alignment-justify iqac-text">
                                In pursuit of academic excellence and fostering a positive learning environment, it is essential for our educational community to adhere to establishing the best practices. These practices are designed to support effective teaching, enhance student learning, and promote a culture of continuous improvement and sustainable development.
                            </p>
                        </div>
                    </div>

                    <div className="iqac-card">
                        <h2 className="iqac-card-title">Best Practice Documents</h2>
                        <div className="iqac-card-body">
                            <div className="file-grid">
                                {iqacData.bestPractices.map((file, idx) => (
                                    <a
                                        key={idx}
                                        href={file.path}
                                        className="file-card"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <div className="file-icon-wrapper">
                                            <i className="fa-regular fa-file-pdf"></i>
                                        </div>
                                        <span className="file-name">{file.name}</span>
                                        <i className="fa-solid fa-download download-icon"></i>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};
export default IqacBestPractices;
