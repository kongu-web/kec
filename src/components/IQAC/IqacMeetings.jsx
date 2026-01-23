import React from 'react';
import Navbar from '../HomePage/navbar/Navbar';
import Footer from '../HomePage/Footer/Footer';
import IqacNavbar from './IqacNavbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { iqacData } from './iqacData';
import './IQAC.css';

const IqacMeetings = () => {
    return (
        <div className="iqac-wrapper">
            <Navbar />
            <div className="iqac-container container-fluid p-0">
                <IqacNavbar />
                <div className="iqac-content">
                    <h1 className="iqac-section-title">MEETING & MINUTES</h1>
                    <div className="mb-4">
                        <p className="alignment-justify iqac-text">
                            Meetings are essential components of effective administration, serving as platforms for decision-making, coordination, and strategic planning within organizations. Conducting these meetings with clarity and structure is crucial for achieving productive outcomes and ensuring that all participants are aligned with organizational goals. Properly conducted administrative meetings facilitate the efficient exchange of information, foster collaborative problem-solving, and support the implementation of policies and initiatives.
                        </p>
                        <p className="alignment-justify iqac-text">
                            In Kongu Engineering College, the IQAC Core Committee meets at least twice a year. Internal IQAC meetings with the department coordinators occur every six months, and IQAC members meet as and when required.
                        </p>
                    </div>

                    <div className="iqac-file-grid">
                        {iqacData.meetings.map((file, idx) => (
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
export default IqacMeetings;
