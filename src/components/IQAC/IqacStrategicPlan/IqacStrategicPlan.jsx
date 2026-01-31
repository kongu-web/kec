import React from 'react';
import Navbar from '../../HomePage/navbar/Navbar';
import Footer from '../../HomePage/Footer/Footer';
import IqacNavbar from '../IqacNavbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf, faCompass, faMagnifyingGlassChart, faCrosshairs, faGraduationCap, faUsers, faBuilding, faHandshake, faGavel, faAward, faSackDollar, faBullhorn, faClipboardCheck } from '@fortawesome/free-solid-svg-icons';
import { iqacData } from '../iqacData';
import '../IQAC.css';
import './IqacStrategicPlan.css';

const planComponents = [
    { title: "Mission & Vision", desc: "Define the institution’s purpose, values, and goals.", icon: faCompass },
    { title: "SWOT Analysis", desc: "Identify Strengths, Weaknesses, Opportunities, and Threats.", icon: faMagnifyingGlassChart },
    { title: "Strategic Objectives", desc: "Set specific, measurable, achievable, relevant, and time-bound goals.", icon: faCrosshairs },
    { title: "Academic Excellence", desc: "Enhance teaching, learning, research, and innovation.", icon: faGraduationCap },
    { title: "Student Experience", desc: "Foster a supportive, inclusive, and engaging environment.", icon: faUsers },
    { title: "Infrastructure", desc: "Develop and maintain modern facilities, technology, and resources.", icon: faBuilding },
    { title: "Community Engagement", desc: "Build partnerships with local communities and industries.", icon: faHandshake },
    { title: "Governance", desc: "Ensure effective management, leadership, and decision–making.", icon: faGavel },
    { title: "Quality Assurance", desc: "Establish processes for continuous evaluation and improvement.", icon: faAward },
    { title: "Financial Sustainability", desc: "Ensure stable funding, resource allocation, and budget management.", icon: faSackDollar },
    { title: "Marketing", desc: "Promote the institution’s brand, programs, and achievements.", icon: faBullhorn },
    { title: "Monitoring", desc: "Regularly assess progress and adjust strategies accordingly.", icon: faClipboardCheck },
];

const IqacStrategicPlan = () => {
    return (
        <div className="iqac-wrapper">
            <Navbar />
            <div className="iqac-container container-fluid p-0">
                <IqacNavbar />
                <div className="iqac-content">
                    <h1 className="iqac-section-title">Strategic Plan</h1>
                    <div className="iqac-card">
                        <h2 className="iqac-card-title">Overview</h2>
                        <div className="iqac-card-body">
                            <p className="alignment-justify iqac-text">
                                Kongu Engineering College has completed more than three decades of dedicated service in the field of technical education and has established a name for itself in offering high quality professional education. The college has developed and successfully implemented its first Strategic Plan for the period of five years (2015-2020) and a majority of the goals envisioned in the first plan were achieved. In order to further scale new heights in this highly competitive dynamic global scenario and to meet the expectations of the stakeholders, the college intended to renew the strategic plan for the duration of 2020-2025. Based on the results of implementation of the first strategic plan, a detailed SWOT Analysis was undertaken. After a thorough analysis and several deliberations, the new strategic plan has been developed.
                            </p>
                            <p className="alignment-justify iqac-text">
                                A strategic plan is a document that outlines an organization’s goals, objectives, and strategies for achieving success. It defines where the organization wants to go, how it will get there, and what resources it will need to allocate to achieve its objectives.
                            </p>
                            <div className="strategic-components-header">
                                <span className="header-line"></span>
                                <span className="header-text">A strategic plan for an educational institution typically includes:</span>
                                <span className="header-line"></span>
                            </div>
                            <div className="iqac-grid">
                                {planComponents.map((item, index) => (
                                    <div key={index} className="iqac-feature-card">
                                        <div className="strategic-icon-box">
                                            <FontAwesomeIcon icon={item.icon} className="strategic-icon" />
                                        </div>
                                        <div className="feature-content">
                                            <h4 className="feature-title">{item.title}</h4>
                                            <p className="feature-desc">{item.desc}</p>
                                        </div>
                                        <div className="feature-number">{index + 1 < 10 ? `0${index + 1}` : index + 1}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="iqac-card">
                        <h2 className="iqac-card-title">Plan Documents</h2>
                        <div className="iqac-card-body">
                            <div className="file-grid">
                                {iqacData.strategic.map((file, idx) => (
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
export default IqacStrategicPlan;
