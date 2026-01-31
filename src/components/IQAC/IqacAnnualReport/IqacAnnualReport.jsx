import React from 'react';
import Navbar from '../../HomePage/navbar/Navbar';
import Footer from '../../HomePage/Footer/Footer';
import IqacNavbar from '../IqacNavbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { iqacData } from '../iqacData';
import '../IQAC.css';
import './IqacAnnualReport.css';

const IqacAnnualReport = () => {
    return (
        <div className="iqac-wrapper">
            <Navbar />
            <div className="iqac-container container-fluid p-0">
                <IqacNavbar />
                <div className="iqac-content">
                    <h1 className="iqac-section-title">Annual Reports</h1>
                    <div className="iqac-card">
                        <h2 className="iqac-card-title">About Annual Reports</h2>
                        <div className="iqac-card-body">
                            <p className="alignment-justify iqac-text">
                                Reports are essential documents that provide structured and detailed accounts of various aspects of an organization’s activities, performance, or research. They serve as a formal means of communication, enabling stakeholders to understand, assess, and act upon critical information. Reports typically summarize findings, analyze data, and present conclusions in a clear and organized manner, facilitating informed decision-making and strategic planning.
                            </p>
                            <p className="alignment-justify iqac-text">
                                In Kongu Engineering College an annual report is prepared by Planning Cell and presented by principal during the Annual day celebrations, The during consists of Enrollment and student data, academic highlights, curriculum and programs, Faculty and staff, research and innovation campus development, student life and activities, community engagement, accreditation and compliance, future plans and initiatives.
                            </p>
                        </div>
                    </div>

                    <div className="iqac-card">
                        <h2 className="iqac-card-title">Report Archives</h2>
                        <div className="iqac-card-body">
                            <div className="file-grid">
                                {iqacData.annualReport.map((file, idx) => (
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
export default IqacAnnualReport;
