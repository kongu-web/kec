import React from 'react';
import Navbar from '../HomePage/navbar/Navbar';
import Footer from '../HomePage/Footer/Footer';
import IqacNavbar from './IqacNavbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { iqacData } from './iqacData';
import './IQAC.css';

const IqacDownloads = () => {
    return (
        <div className="iqac-wrapper">
            <Navbar />
            <div className="iqac-container container-fluid p-0">
                <IqacNavbar />
                <div className="iqac-content">
                    <h1 className="iqac-section-title">DOWNLOADS</h1>
                    <div className="mb-4">
                        <p>Access important documents and files related to IQAC.</p>
                    </div>

                    <h3 className="text-primary mt-4">IQAC Formation & Composition</h3>
                    <div className="iqac-file-grid mb-4">
                        {iqacData.composition.map((file, idx) => (
                            <a key={idx} href={file.path} target="_blank" rel="noopener noreferrer" className="iqac-file-link">
                                <FontAwesomeIcon icon={faFilePdf} className="iqac-file-icon" />
                                {file.name}
                            </a>
                        ))}
                    </div>
                    {/* Add more download sections here if needed */}
                </div>
            </div>
            <Footer />
        </div>
    );
};
export default IqacDownloads;
