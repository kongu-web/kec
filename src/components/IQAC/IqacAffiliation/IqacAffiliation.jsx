import React, { useState } from 'react';

import Navbar from '../../HomePage/navbar/Navbar';
import Footer from '../../HomePage/Footer/Footer';
import IqacNavbar from '../IqacNavbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf, faUniversity, faAward, faBuildingColumns, faDownload } from '@fortawesome/free-solid-svg-icons';
import { iqacData } from '../iqacData';
import '../IQAC.css';
import './IqacAffiliation.css';

const FileGrid = ({ files }) => (
    <div className="simple-file-list mt-4">
        {files.map((file, idx) => (
            <div key={idx} className="simple-doc-item mb-4">
                <p className="doc-text mb-1">
                    {file.name}
                    <a href={file.path} target="_blank" rel="noopener noreferrer" className="download-link ms-2">
                        [Download]
                    </a>
                </p>
            </div>
        ))}
    </div>
);

const IqacAffiliation = () => {
    const [activeMainTab, setActiveMainTab] = useState('autonomous');
    const [activeSubTab, setActiveSubTab] = useState('eng');

    const tabs = [
        { id: 'autonomous', label: 'Autonomous' },
        { id: 'au', label: 'AU Affiliation' },
        { id: 'aicte', label: 'AICTE' }
    ];

    const subTabs = [
        { id: 'eng', label: 'E&T' },
        { id: 'mca', label: 'MCA' }
    ];

    const renderTabContent = () => {
        switch (activeMainTab) {
            case 'autonomous':
                return (
                    <div key="autonomous" className="tab-content-wrapper">
                        <h3 className="iqac-tab-heading">Autonomous Status</h3>
                        <FileGrid files={iqacData.affiliation.autonomous} />
                    </div>
                );
            case 'au':
                return (
                    <div key="au" className="tab-content-wrapper">
                        <h3 className="iqac-tab-heading">Anna University Affiliation</h3>
                        <FileGrid files={iqacData.affiliation.au} />
                    </div>
                );
            case 'aicte':
                return (
                    <div key="aicte" className="tab-content-wrapper">
                        <h3 className="iqac-tab-heading">AICTE Documents</h3>
                        <div className="sub-tabs-container">
                            <div className="iqac-sub-tabs mb-4 mt-2">
                                {subTabs.map((tab) => (
                                    <button
                                        key={tab.id}
                                        className={`nav-link ${activeSubTab === tab.id ? 'active' : ''}`}
                                        onClick={() => setActiveSubTab(tab.id)}
                                    >
                                        {tab.label}
                                    </button>
                                ))}
                            </div>
                            <div className="sub-tab-content">
                                <div key={activeSubTab} className="fade-in">
                                    {activeSubTab === 'eng' ? (
                                        <FileGrid files={iqacData.affiliation.aicte.eng} />
                                    ) : (
                                        <FileGrid files={iqacData.affiliation.aicte.mca} />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="iqac-wrapper">
            <Navbar />
            <div className="iqac-container container-fluid p-0">
                <IqacNavbar />
                <div className="iqac-content fade-in-up">
                    <h1 className="iqac-section-title text-center">Affiliation and Approvals</h1>
                    <div className="iqac-title-divider"></div>

                    <div className="iqac-card overview-card no-border shadow-none">
                        <div className="iqac-card-body p-0">
                            <p className="alignment-justify iqac-text">
                                Affiliation under a university is a formal process through which academic institutions gain recognition and accreditation to offer programs and confer degrees that are officially validated by the university. This affiliation ensures that the educational standards and quality of the affiliated institutions align with the university's guidelines and regulations. Kongu Engineering College was established in the year 1984, approved by AICTE, New Delhi, and affiliated with Anna University, Chennai. Initially, it was affiliated with Bharathiar University up to 2000. Subsequently, it was affiliated with Anna University from 2001. The college was granted autonomous status from 2007 by UGC.
                            </p>
                        </div>
                    </div>

                    <div className="iqac-card affiliation-tabs-card">
                        <div className="iqac-card-body p-4">
                            {/* Main Tabs Navigation */}
                            <div className="iqac-custom-tabs mb-5">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab.id}
                                        className={`nav-link ${activeMainTab === tab.id ? 'active' : ''}`}
                                        onClick={() => setActiveMainTab(tab.id)}
                                    >
                                        {tab.label}
                                    </button>
                                ))}
                            </div>

                            {/* Main Tabs Content */}
                            <div className="tab-content">
                                {renderTabContent()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};
export default IqacAffiliation;
