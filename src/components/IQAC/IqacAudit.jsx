import React from 'react';
import Navbar from '../HomePage/navbar/Navbar';
import Footer from '../HomePage/Footer/Footer';
import IqacNavbar from './IqacNavbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { iqacData } from './iqacData';
import './IQAC.css';

const IqacAudit = () => {
    return (
        <div className="iqac-wrapper">
            <Navbar />
            <div className="iqac-container container-fluid p-4">
                <IqacNavbar />
                <div className="iqac-content">
                    <h1 className="iqac-section-title">AUDITS</h1>
                    <div className="mb-4">
                        <p className="alignment-justify iqac-text">
                            Audits are systematic and independent examinations conducted to assess the accuracy, compliance, and efficiency of an organization's operations. The audit process typically includes planning, data collection, testing, and reporting, culminating in an audit report that highlights findings, recommendations, and areas for improvement. By identifying discrepancies, inefficiencies, or non-compliance issues, audits help organizations enhance their internal controls, optimize operations, and build stakeholder trust.
                        </p>
                        <p className="alignment-justify iqac-text">
                            In Kongu Engineering College, the IQAC is responsible for conducting audits at various levels to ensure quality. Every year IQAC and academic audit is conducted at three levels, First is department level once in every Semester. Second is inter department level audit once in every year and third by external member every year.
                        </p>
                    </div>

                    <h3 className="text-primary mt-4 mb-3">Audit Details</h3>
                    <div className="iqac-file-grid mb-5">
                        {iqacData.audit.files.map((file, idx) => (
                            <a key={idx} href={file.path} target="_blank" rel="noopener noreferrer" className="iqac-file-link">
                                <FontAwesomeIcon icon={faFilePdf} className="iqac-file-icon" />
                                {file.name}
                            </a>
                        ))}
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <h3 className="text-primary mb-3">Action Taken Reports</h3>
                            <div className="iqac-file-container-vertical">
                                {iqacData.audit.actionTaken.map((file, idx) => (
                                    <a key={idx} href={file.path} target="_blank" rel="noopener noreferrer" className="iqac-file-link mb-2 d-block">
                                        <FontAwesomeIcon icon={faFilePdf} className="iqac-file-icon" />
                                        {file.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className="col-md-6">
                            <h3 className="text-primary mb-3">Audit Reports</h3>
                            <div className="iqac-file-container-vertical">
                                {iqacData.audit.reports.map((file, idx) => (
                                    <a key={idx} href={file.path} target="_blank" rel="noopener noreferrer" className="iqac-file-link mb-2 d-block">
                                        <FontAwesomeIcon icon={faFilePdf} className="iqac-file-icon" />
                                        {file.name}
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
export default IqacAudit;
