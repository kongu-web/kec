import React from 'react';
import Navbar from '../../HomePage/navbar/Navbar';
import Footer from '../../HomePage/Footer/Footer';
import IqacNavbar from '../IqacNavbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { iqacData } from '../iqacData';
import '../IQAC.css';
import './IqacStrategicPlan.css';

const IqacStrategicPlan = () => {
    return (
        <div className="iqac-wrapper">
            <Navbar />
            <div className="iqac-container container-fluid p-0">
                <IqacNavbar />
                <div className="iqac-content">
                    <h1 className="iqac-section-title">STRATEGIC PLAN</h1>
                    <div className="mb-4">
                        <p className="alignment-justify iqac-text">
                            Kongu Engineering College has completed more than three decades of dedicated service in the field of technical education and has established a name for itself in offering high quality professional education. The college has developed and successfully implemented its first Strategic Plan for the period of five years (2015-2020) and a majority of the goals envisioned in the first plan were achieved. In order to further scale new heights in this highly competitive dynamic global scenario and to meet the expectations of the stakeholders, the college intended to renew the strategic plan for the duration of 2020-2025. Based on the results of implementation of the first strategic plan, a detailed SWOT Analysis was undertaken. After a thorough analysis and several deliberations, the new strategic plan has been developed.
                        </p>
                        <p className="alignment-justify iqac-text">
                            A strategic plan is a document that outlines an organization’s goals, objectives, and strategies for achieving success. It defines where the organization wants to go, how it will get there, and what resources it will need to allocate to achieve its objectives.
                        </p>
                        <p className="iqac-text">A strategic plan for an educational institution typically includes:</p>
                        <ol className="iqac-ol">
                            <li>Mission and Vision statements: Define the institution’s purpose, values, and goals.</li>
                            <li>SWOT Analysis: Identify Strengths, Weaknesses, Opportunities, and Threats to inform strategic decisions.</li>
                            <li>Strategic Objectives: Set specific, measurable, achievable, relevant, and time-bound (SMART) goals.</li>
                            <li>Academic Excellence: Enhance teaching, learning, research, and innovation.</li>
                            <li>Student Experience: Foster a supportive, inclusive, and engaging environment.</li>
                            <li>Infrastructure and Resources: Develop and maintain modern facilities, technology, and resources.</li>
                            <li>Community Engagement: Build partnerships with local communities, industries, and organizations.</li>
                            <li>Governance and Leaderships: Ensure effective management, leadership, and decision–making processes.</li>
                            <li>Quality Assurance: Establish processes for continuous evaluation and improvement.</li>
                            <li>Financial Sustainability: Ensure stable funding, resource allocation, and budget management.</li>
                            <li>Marketing and Communication: Promote the institution’s brand, programs, and achievements.</li>
                            <li>Monitoring and Evaluation: Regularly assess progress, identify areas for improvement, and adjust strategies accordingly.</li>
                        </ol>
                    </div>

                    <div className="iqac-file-grid">
                        {iqacData.strategic.map((file, idx) => (
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
export default IqacStrategicPlan;
