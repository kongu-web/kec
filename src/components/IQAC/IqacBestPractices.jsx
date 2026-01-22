import React from 'react';
import Navbar from '../HomePage/navbar/Navbar';
import Footer from '../HomePage/Footer/Footer';
import IqacNavbar from './IqacNavbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { iqacData } from './iqacData';
import './IQAC.css';

const IqacBestPractices = () => {
    return (
        <div className="iqac-wrapper">
            <Navbar />
            <div className="iqac-container container-fluid p-4">
                <IqacNavbar />
                <div className="iqac-content">
                    <h1 className="iqac-section-title">BEST PRACTICES</h1>
                    <div className="mb-4">
                        <p className="alignment-justify iqac-text">
                            In pursuit of academic excellence and fostering a positive learning environment, it is essential for our educational community to adhere to establishing the best practices. These practices are designed to support effective teaching, enhance student learning, and promote a culture of continuous improvement and sustainable development.
                        </p>
                    </div>

                    <div className="iqac-file-grid">
                        {iqacData.bestPractices.map((file, idx) => (
                            <a key={idx} href={file.path} target="_blank" rel="noopener noreferrer" className="iqac-file-link">
                                <FontAwesomeIcon icon={faFilePdf} className="iqac-file-icon" />
                                {file.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};
export default IqacBestPractices;
