import React, { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import Navbar from '../../HomePage/navbar/Navbar';
import Footer from '../../HomePage/Footer/Footer';
import IqacNavbar from '../IqacNavbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { iqacData } from '../iqacData';
import '../IQAC.css';
import './IqacAffiliation.css';

const FileGrid = ({ files }) => (
    <div className="file-grid mt-3">
        {files.map((file, idx) => (
            <a key={idx} href={file.path} target="_blank" rel="noopener noreferrer" className="file-card">
                <div className="file-icon-wrapper">
                    <i className="fa-regular fa-file-pdf"></i>
                </div>
                <span className="file-name">{file.name}</span>
                <i className="fa-solid fa-download download-icon"></i>
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

                    <div className="iqac-card">
                        <h2 className="iqac-card-title">Overview</h2>
                        <div className="iqac-card-body">
                            <p className="alignment-justify iqac-text">
                                Affiliation and approvals are crucial for educational institutions to ensure they meet established standards of quality and rigor. These credentials validate the institution's programs and operations, providing assurance to students, parents, and employers about the education provided. They also facilitate access to funding, resources, and collaborative opportunities, enhancing the institution's overall credibility and standing in the academic community.
                            </p>
                        </div>
                    </div>

                    <div className="iqac-card">
                        <div className="iqac-card-body">
                            <Tabs defaultActiveKey="aicte" id="affiliation-tabs" className="iqac-custom-tabs mb-4">
                                <Tab eventKey="aicte" title="AICTE Approval">
                                    <h3 className="iqac-tab-heading">AICTE Documents</h3>
                                    <Tabs defaultActiveKey="eng" id="aicte-tabs" className="iqac-custom-tabs mb-3 mt-3" variant="pills">
                                        <Tab eventKey="eng" title="Engineering">
                                            <FileGrid files={iqacData.affiliation.aicte.eng} />
                                        </Tab>
                                        <Tab eventKey="mca" title="MCA">
                                            <FileGrid files={iqacData.affiliation.aicte.mca} />
                                        </Tab>
                                    </Tabs>
                                </Tab>
                                <Tab eventKey="au" title="Anna University">
                                    <h3 className="iqac-tab-heading">Anna University Affiliation</h3>
                                    <FileGrid files={iqacData.affiliation.au} />
                                </Tab>
                                <Tab eventKey="autonomous" title="Autonomous Status">
                                    <h3 className="iqac-tab-heading">Autonomous Status</h3>
                                    <FileGrid files={iqacData.affiliation.autonomous} />
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
