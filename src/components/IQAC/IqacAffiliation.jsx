import React, { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import Navbar from '../HomePage/navbar/Navbar';
import Footer from '../HomePage/Footer/Footer';
import IqacNavbar from './IqacNavbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { iqacData } from './iqacData';
import './IQAC.css';

const FileGrid = ({ files }) => (
    <div className="iqac-file-grid mt-3">
        {files.map((file, idx) => (
            <a key={idx} href={file.path} target="_blank" rel="noopener noreferrer" className="iqac-file-link">
                <FontAwesomeIcon icon={faFilePdf} className="iqac-file-icon" />
                {file.name}
            </a>
        ))}
    </div>
);

const IqacAffiliation = () => {
    return (
        <div className="iqac-wrapper">
            <Navbar />
            <div className="iqac-container container-fluid p-4">
                <IqacNavbar />
                <div className="iqac-content">
                    <h1 className="iqac-section-title">AFFILIATION & APPROVAL</h1>
                    <p className="mb-4 iqac-text">
                        Affiliation and approvals are crucial for educational institutions to ensure they meet established standards of quality and rigor. These credentials validate the institution's programs and operations, providing assurance to students, parents, and employers about the education provided. They also facilitate access to funding, resources, and collaborative opportunities, enhancing the institution's overall credibility and standing in the academic community.
                    </p>

                    <Tabs defaultActiveKey="aicte" id="affiliation-tabs" className="mb-3 custom-tabs">
                        <Tab eventKey="aicte" title="AICTE">
                            <h3 className="mt-3 text-primary">AICTE Approval</h3>
                            <Tabs defaultActiveKey="eng" id="aicte-tabs" className="mb-3 mt-3">
                                <Tab eventKey="eng" title="Engineering">
                                    <FileGrid files={iqacData.affiliation.aicte.eng} />
                                </Tab>
                                <Tab eventKey="mca" title="MCA">
                                    <FileGrid files={iqacData.affiliation.aicte.mca} />
                                </Tab>
                            </Tabs>
                        </Tab>
                        <Tab eventKey="au" title="AU Affiliation">
                            <h3 className="mt-3 text-primary">Anna University Affiliation</h3>
                            <FileGrid files={iqacData.affiliation.au} />
                        </Tab>
                        <Tab eventKey="autonomous" title="Autonomous">
                            <h3 className="mt-3 text-primary">Autonomous Status</h3>
                            <FileGrid files={iqacData.affiliation.autonomous} />
                        </Tab>
                    </Tabs>
                </div>
            </div>
            <Footer />
        </div>
    );
};
export default IqacAffiliation;
