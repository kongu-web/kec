import React from 'react';
import Navbar from '../../HomePage/navbar/Navbar';
import Footer from '../../HomePage/Footer/Footer';
import IqacNavbar from '../IqacNavbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { iqacData } from '../iqacData';
import '../IQAC.css';
import './IqacAudit.css';

const IqacAudit = () => {
    return (
        <div className="iqac-wrapper">
            <Navbar />
            <div className="iqac-container container-fluid p-0">
                <IqacNavbar />
                <div className="iqac-content">
                    <h1 className="iqac-section-title">Audits</h1>
                    <div className="iqac-card">
                        <h2 className="iqac-card-title">Overview</h2>
                        <div className="iqac-card-body">
                            <p className="alignment-justify iqac-text">
                                Audits are systematic and independent examinations conducted to assess the accuracy, compliance, and efficiency of an organization's operations. The audit process typically includes planning, data collection, testing, and reporting, culminating in an audit report that highlights findings, recommendations, and areas for improvement. By identifying discrepancies, inefficiencies, or non-compliance issues, audits help organizations enhance their internal controls, optimize operations, and build stakeholder trust.
                            </p>
                            <p className="alignment-justify iqac-text">
                                In Kongu Engineering College, the IQAC is responsible for conducting audits at various levels to ensure quality. Every year IQAC and academic audit is conducted at three levels, First is department level once in every Semester. Second is inter department level audit once in every year and third by external member every year.
                            </p>
                        </div>
                    </div>

                    <div className="iqac-card">
                        <h2 className="iqac-card-title">Audit Details</h2>
                        <div className="iqac-card-body">
                            <div className="file-grid mb-5">
                                {iqacData.audit.files.map((file, idx) => (
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

                    <div className="row">
                        <div className="col-md-6">
                            <div className="iqac-card">
                                <h2 className="iqac-card-title">Action Taken Reports</h2>
                                <div className="iqac-card-body">
                                    <div className="file-grid" style={{ gridTemplateColumns: '1fr' }}>
                                        {iqacData.audit.actionTaken.map((file, idx) => (
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
                        <div className="col-md-6">
                            <div className="iqac-card">
                                <h2 className="iqac-card-title">Audit Reports</h2>
                                <div className="iqac-card-body">
                                    <div className="file-grid" style={{ gridTemplateColumns: '1fr' }}>
                                        {iqacData.audit.reports.map((file, idx) => (
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

                </div>
            </div>
            <Footer />
        </div>
    );
};
export default IqacAudit;
