import React, { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import Navbar from '../../HomePage/navbar/Navbar';
import Footer from '../../HomePage/Footer/Footer';
import IqacNavbar from '../IqacNavbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf, faUniversity, faAward, faBuildingColumns, faDownload } from '@fortawesome/free-solid-svg-icons';
import { iqacData } from '../iqacData';
import '../IQAC.css';
import './IqacAffiliation.css';

const FileGrid = ({ files }) => (
    <div className="file-grid mt-4">
        {files.map((file, idx) => (
            <a key={idx} href={file.path} target="_blank" rel="noopener noreferrer" className="iqac-file-card">
                <div className="file-card-content">
                    <div className="file-icon-box">
                        <FontAwesomeIcon icon={faFilePdf} className="file-icon" />
                    </div>
                    <div className="file-info">
                        <h4 className="file-name" title={file.name}>{file.name}</h4>
                        <span className="file-action">View Document</span>
                    </div>
                    <div className="file-arrow-box">
                        <FontAwesomeIcon icon={faDownload} className="action-arrow" />
                    </div>
                </div>
            </a>
        ))}
    </div>
);

const IqacAffiliation = () => {
    return (
        <div className="iqac-wrapper">
            <Navbar />
            <div className="iqac-container container-fluid p-0">
                <IqacNavbar />
                <div className="iqac-content fade-in-up">
                    <h1 className="iqac-section-title">Affiliation & Approval</h1>

                    <div className="iqac-card overview-card">
                        <div className="iqac-card-body">
                            <h2 className="iqac-card-title">Overview</h2>
                            <p className="alignment-justify iqac-text">
                                Affiliation and approvals are crucial for educational institutions to ensure they meet established standards of quality and rigor. These credentials validate the institution's programs and operations, providing assurance to students, parents, and employers about the education provided. They also facilitate access to funding, resources, and collaborative opportunities, enhancing the institution's overall credibility and standing in the academic community.
                            </p>
                        </div>
                    </div>

                    <div className="iqac-card affiliation-tabs-card">
                        <div className="iqac-card-body p-4">
                            <Tabs defaultActiveKey="aicte" id="affiliation-tabs" className="iqac-custom-tabs mb-5">
                                <Tab eventKey="aicte" title={<span><FontAwesomeIcon icon={faBuildingColumns} className="me-2" />AICTE Approval</span>}>
                                    <div className="tab-content-wrapper">
                                        <h3 className="iqac-tab-heading">AICTE Documents</h3>
                                        <div className="sub-tabs-container">
                                            <Tabs defaultActiveKey="eng" id="aicte-tabs" className="iqac-sub-tabs mb-4 mt-2" variant="pills">
                                                <Tab eventKey="eng" title="Engineering">
                                                    <FileGrid files={iqacData.affiliation.aicte.eng} />
                                                </Tab>
                                                <Tab eventKey="mca" title="MCA">
                                                    <FileGrid files={iqacData.affiliation.aicte.mca} />
                                                </Tab>
                                            </Tabs>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab eventKey="au" title={<span><FontAwesomeIcon icon={faUniversity} className="me-2" />Anna University</span>}>
                                    <div className="tab-content-wrapper">
                                        <h3 className="iqac-tab-heading">Anna University Affiliation</h3>
                                        <FileGrid files={iqacData.affiliation.au} />
                                    </div>
                                </Tab>
                                <Tab eventKey="autonomous" title={<span><FontAwesomeIcon icon={faAward} className="me-2" />Autonomous Status</span>}>
                                    <div className="tab-content-wrapper">
                                        <h3 className="iqac-tab-heading">Autonomous Status</h3>
                                        <FileGrid files={iqacData.affiliation.autonomous} />
                                    </div>
                                </Tab>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};
export default IqacAffiliation;
