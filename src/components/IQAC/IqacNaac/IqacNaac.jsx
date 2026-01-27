import React from "react";
import Navbar from '../../HomePage/navbar/Navbar';
import Footer from '../../HomePage/Footer/Footer';
import IqacNavbar from '../IqacNavbar';
import '../IQAC.css';
import './IqacNaac.css';
import { iqacData } from '../iqacData';

const IqacNaac = () => {
    return (
        <div className="iqac-wrapper">
            <Navbar />
            <div className="iqac-container container-fluid p-0">
                <IqacNavbar />
                <div className="iqac-content">
                    <h1 className="iqac-section-title">National Assessment and Accreditation Council (NAAC)</h1>

                    <div className="iqac-card">
                        <h2 className="iqac-card-title">About NAAC</h2>
                        <div className="iqac-card-body">
                            <p className="alignment-justify iqac-text">
                                The National Assessment and Accreditation Council (NAAC) is an autonomous body established by the University Grants Commission (UGC) of India to assess and accredit higher education institutions in the country. Since 1994, NAAC plays a pivotal role in ensuring the quality and standards of education provided by universities and colleges. Its primary objective is to promote a culture of continuous improvement and excellence in higher education institutions by evaluating their performance across various parameters. Accreditation by NAAC is not just a certification but a commitment to maintain and improve quality standards in education, fostering an environment of academic excellence and accountability. It also aids stakeholders, including students, faculty, and employers, in making informed decisions about the institution's credibility and educational offerings.
                            </p>
                        </div>
                    </div>

                    <div className="iqac-card">
                        <h2 className="iqac-card-title">NAAC @ KEC</h2>
                        <div className="iqac-card-body">
                            <p className="alignment-justify iqac-text">
                                Kongu Engineering College first underwent NAAC assessment in 2016, where it received an ‘A’ grade. With a commitment to continuous improvement, the college achieved the highest grade of ‘A++’ in its second cycle, valid for the years 2023-2028.
                            </p>
                        </div>
                    </div>

                    <div className="iqac-card">
                        <h2 className="iqac-card-title">NAAC Certificate</h2>
                        <div className="iqac-card-body">
                            <div className="file-grid">
                                {iqacData.naac.certificates.map((file, index) => (
                                    <a
                                        key={index}
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

                    <div className="iqac-card">
                        <h2 className="iqac-card-title">SSR</h2>
                        <div className="iqac-card-body">
                            <div className="file-grid">
                                {iqacData.naac.ssr.map((file, index) => (
                                    <a
                                        key={index}
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

                    <div className="iqac-card">
                        <h2 className="iqac-card-title">AQAR</h2>
                        <div className="iqac-card-body">
                            <div className="file-grid">
                                {iqacData.naac.aqar.map((file, index) => (
                                    <a
                                        key={index}
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
export default IqacNaac;
