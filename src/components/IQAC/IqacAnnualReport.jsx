import React from 'react';
import Navbar from '../HomePage/navbar/Navbar';
import Footer from '../HomePage/Footer/Footer';
import IqacNavbar from './IqacNavbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { iqacData } from './iqacData';
import './IQAC.css';

const IqacAnnualReport = () => {
    return (
        <div className="iqac-wrapper">
            <Navbar />
            <div className="iqac-container container-fluid p-4">
                <IqacNavbar />
                <div className="iqac-content">
                    <h1 className="iqac-section-title">ANNUAL REPORTS</h1>
                    <div className="mb-4">
                        <p className="alignment-justify iqac-text">
                            Reports are essential documents that provide structured and detailed accounts of various aspects of an organization’s activities, performance, or research. They serve as a formal means of communication, enabling stakeholders to understand, assess, and act upon critical information. Reports typically summarize findings, analyze data, and present conclusions in a clear and organized manner, facilitating informed decision-making and strategic planning.
                        </p>
                        <p className="alignment-justify iqac-text">
                            In Kongu Engineering College an annual report is prepared by Planning Cell and presented by principal during the Annual day celebrations, The during consists of Enrollment and student data, academic highlights, curriculum and programs, Faculty and staff, research and innovation campus development, student life and activities, community engagement, accreditation and compliance, future plans and initiatives.
                        </p>
                    </div>

                    <div className="iqac-file-grid">
                        {iqacData.annualReport.map((file, idx) => (
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
export default IqacAnnualReport;
