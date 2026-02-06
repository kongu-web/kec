import React from 'react';
import Navbar from '../../HomePage/navbar/Navbar';
import Footer from '../../HomePage/Footer/Footer';
import IqacNavbar from '../IqacNavbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf, faFileExcel, faFileWord, faDownload, faUserTie, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import '../IQAC.css';
import './IqacDownloads.css';
import { useAuth } from '../../../context/AuthContext';
import { useState } from 'react';


const BASE_PATH = "/files/iqac/downloads";

const copoFiles = [
    { name: "1.THEORY COURSE V2.xlsx", path: `${BASE_PATH}/copo/1.THEORY COURSE V2.xlsx` },
    { name: "2.LABORATORY COURSE V2.xlsx", path: `${BASE_PATH}/copo/2.LABORATORY COURSE V2.xlsx` },
    { name: "3.THEORY CUM LABORATORY COURSE V2.xlsx", path: `${BASE_PATH}/copo/3.THEORY CUM LABORATORY COURSE    V2.xlsx` },
    { name: "4.Project_Work final year V2.xlsx", path: `${BASE_PATH}/copo/4.Project_Work final year V2.xlsx` },
    { name: "5.Project_Work sixth sem V2.xlsx", path: `${BASE_PATH}/copo/5.Project_Work sixth sem V2.xlsx` }
];

const pdfFiles = [
    "1_Timetable v2.pdf", "2_Academic V2.pdf", "3_Project V1.pdf", "4_CO-PO v1.pdf",
    "5_Lab.pdf", "6_Feedback v2.pdf", "7_IIPC.pdf", "8_Research.pdf",
    "9_TrainingFaculty_Staff.pdf", "10_Association.pdf", "11_Budget v1.pdf", "12_Alumni.pdf",
    "13_Test v1.pdf", "14_Placement.pdf", "15_MinutesofMeeting.pdf",
    "16_Departmental Advisory Committee (DAC).pdf", "17_Field Visit.pdf",
    "COE FORMATS.pdf", "LIBRARY.pdf", "PHYSICAL EDUCATION.pdf", "Transport.pdf"
];

const docFiles = [
    "1_Timetable v2.docx", "2_Academic V2.docx", "3_Project V1.docx", "4_CO-PO v1.docx",
    "5_Lab.docx", "6_Feedback v2 (1).docx", "7_IIPC.docx", "8_Research.doc",
    "9_TrainingFaculty_Staff.doc", "10_Association.doc", "11_Budget v1.doc", "12_Alumni.docx",
    "13_Test v1.docx", "14_Placement.doc", "15_MinutesofMeeting.docx",
    "16_Departmental Advisory Committee (DAC).doc", "17_Field Visit.docx",
    "AC-06 v1.xlsx", "AC-07 v1.xlsx", "AC-08 v1.xlsx",
    "COE FORMATS.doc", "LIBRARY.doc", "PHYSICAL EDUCATION.docx", "Transport.docx"
];

const IqacDownloads = () => {
    const { isAuthenticated, loginWithGoogle, logout, user } = useAuth();
    const [error, setError] = useState('');

    const handleGoogleLogin = async () => {
        setError('');
        const result = await loginWithGoogle();
        if (!result.success) {
            setError(result.error);
        }
    };

    if (!isAuthenticated) {
        return (
            <div className="iqac-wrapper">
                <Navbar />
                <div className="iqac-container container-fluid p-0">
                    <IqacNavbar />
                    <div className="iqac-content downloads-page">
                        <div className="downloads-header-modern">
                            <div className="header-decoration"></div>
                            <div className="header-text-comp">
                                <h1 className="college-title">Kongu Engineering College</h1>
                                <h2 className="dept-title">Internal Quality Assurance Cell (IQAC)</h2>
                            </div>
                            <div className="page-label">
                                <span>IQAC Documents Format</span>
                            </div>
                        </div>

                        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '400px' }}>
                            <div className="card p-4 shadow" style={{ maxWidth: '400px', width: '100%', borderRadius: '15px' }}>
                                <h3 className="text-center mb-4" style={{ color: '#2c3e50', fontWeight: '600' }}>Login to Download</h3>

                                <div className="text-center mb-4">
                                    <p className="text-muted">Please sign in with your institutional account to access IQAC documents.</p>
                                </div>

                                <button onClick={handleGoogleLogin} className="google-sign-in-btn">
                                    <FontAwesomeIcon icon={faGoogle} className="google-icon-wrapper" />
                                    <span>Sign in with Google</span>
                                </button>

                                {error && <div className="alert alert-danger mt-3 p-2" style={{ fontSize: '0.9rem' }}>{error}</div>}

                                <div className="mt-4 text-center text-muted" style={{ fontSize: '0.8rem' }}>
                                    <small>Access provided for @kongu.edu users only</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="iqac-wrapper">
            <Navbar />
            <div className="iqac-container container-fluid p-0">
                <IqacNavbar />
                <div className="iqac-content downloads-page">
                    <div className="downloads-header-modern">
                        <div className="header-decoration"></div>
                        <div className="header-text-comp">
                            <h1 className="college-title">Kongu Engineering College</h1>
                            <h2 className="dept-title">Internal Quality Assurance Cell (IQAC)</h2>
                        </div>
                        <div className="page-label">
                            <span>IQAC Documents Format</span>
                        </div>
                    </div>

                    {/* User Controls */}
                    <div className="user-controls-bar">
                        <div className="user-profile-pill">
                            <div className="user-info">
                                <div className="user-avatar-icon">
                                    <FontAwesomeIcon icon={faUserTie} />
                                </div>
                                <span>{user?.email}</span>
                            </div>
                            <div className="v-divider" style={{ height: '20px', width: '1px', background: '#e2e8f0' }}></div>
                            <button
                                onClick={logout}
                                className="logout-btn-modern"
                            >
                                <FontAwesomeIcon icon={faSignOutAlt} />
                                Logout
                            </button>
                        </div>
                    </div>

                    <div className="downloads-grid">
                        {/* Row 1 */}
                        <div className="download-card quality-plan">
                            <h4>Quality Plan</h4>
                            <ul>
                                <li>
                                    <a
                                        href={`${BASE_PATH}/qualityplan/00_IQAC_PLAN_01.09.2023.pdf`}
                                        className="download-link"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        download
                                    >
                                        <FontAwesomeIcon icon={faDownload} className="me-2" />
                                        Download Quality Plan
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="download-card roles">
                            <h4>Roles and Responsibilities</h4>
                            <ul>
                                <li>
                                    <a
                                        href={`${BASE_PATH}/roles/Roles_v1.pdf`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="roles-link"
                                    >
                                        <div className="icon-box">
                                            <FontAwesomeIcon icon={faUserTie} />
                                        </div>
                                        <span>View Roles</span>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Row 2 / Large Columns */}
                        <div className="download-card copo-sheet">
                            <h4>CO-PO ATTAINMENT SHEET</h4>
                            <ul className="file-list">
                                {copoFiles.map((file, idx) => (
                                    <li key={idx}>
                                        <a href={file.path} download>
                                            <FontAwesomeIcon icon={faFileExcel} className="file-icon excel" />
                                            {file.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="download-card pdf-files">
                            <h4>Download PDF Files</h4>
                            <ul className="file-list">
                                {pdfFiles.map((name, idx) => (
                                    <li key={idx}>
                                        <a href={`${BASE_PATH}/${name}`} target="_blank" rel="noopener noreferrer">
                                            <FontAwesomeIcon icon={faFilePdf} className="file-icon pdf" />
                                            {name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="download-card doc-files">
                            <h4>Download DOC Files</h4>
                            <ul className="file-list">
                                {docFiles.map((name, idx) => (
                                    <li key={idx}>
                                        <a href={`${BASE_PATH}/${name}`} download>
                                            {name.endsWith('.xlsx') ? (
                                                <FontAwesomeIcon icon={faFileExcel} className="file-icon excel" />
                                            ) : (
                                                <FontAwesomeIcon icon={faFileWord} className="file-icon word" />
                                            )}
                                            {name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default IqacDownloads;
