import React, { useState } from "react";
import Navbar from '../../HomePage/navbar/Navbar';
import Footer from '../../HomePage/Footer/Footer';
import IqacNavbar from '../IqacNavbar';
import '../IQAC.css';
import './IqacNirf.css';


// Dynamically load NIRF PDF files
const nirfContext = require.context(
    "../../../assets/docs/Footer/Nirf",
    false,
    /\.pdf$/
);
const nirfFiles = nirfContext
    .keys()
    .map((key) => {
        const mod = nirfContext(key);
        const rawName = key.replace("./", ""); // e.g. "aa-Institution Data Submitted for NIRF 2017.pdf"
        const displayName = rawName
            .replace(/^[a-z]+-/i, "")   // strip leading sort prefix like "aa-"
            .replace(/\.pdf$/i, "");     // strip .pdf extension
        return {
            name: rawName,
            displayName,
            file: mod.default || mod,    // handle both ES module and CJS exports
        };
    })
    .sort((a, b) => b.name.localeCompare(a.name)); // Sort descending (newest first)

// Dynamically load facility images
const imageContext = require.context(
    "../../../assets/images/Footer/NirfPage",
    false,
    /\.(png|jpe?g|webp)$/
);
const nirfImages = imageContext.keys().map((key) => imageContext(key));

const IqacNirf = () => {
    const [lightboxImg, setLightboxImg] = useState(null);

    return (
        <div className="iqac-wrapper">
            <Navbar />
            <div className="iqac-container container-fluid p-0">
                <IqacNavbar />
                <div className="iqac-content">
                    <h1 className="iqac-section-title">National Institutional Ranking Framework (NIRF)</h1>

                    {/* About NIRF */}
                    {/* <div className="iqac-card">
                        <h2 className="iqac-card-title">NIRF &amp; Other Rankings</h2>
                        <div className="iqac-card-body">
                            <p className="alignment-justify iqac-text">
                                Rankings offer a critical overview of higher education institutions, providing a comparative analysis of their performance on various scales. Rankings are compiled by different organizations, each employing distinct methodologies to evaluate and rank institutions based on criteria such as academic reputation, research output, faculty quality, and student satisfaction.
                            </p>
                        </div>
                    </div> */}

                    {/* Ranking @ KEC */}
                    <div className="iqac-card">
                        <h2 className="iqac-card-title">Ranking @ KEC</h2>
                        <div className="iqac-card-body">
                            <p className="alignment-justify iqac-text">
                                National Institutional Ranking Framework (NIRF) is an initiative by the Government of India, introduced in 2015, to evaluate and rank higher education institutions across the country. Developed by the Ministry of Education, NIRF aims to provide a transparent and comprehensive assessment of institutions based on standardized criteria.
                            </p>
                            <p className="alignment-justify iqac-text mt-3">
                                Kongu Engineering College is continuously participating in NIRF ranking from its inception in the year 2015, for the year 2023 Kongu Engineering is ranked in the Band of 101 to 150 in the Engineering Category and in the Band of 51 to 100 in the Innovation Category. Additionally, KEC has secured top positions in several rankings conducted by various organizations and magazines like, Careers 360, Business world etc.
                            </p>
                        </div>
                    </div>

                     {/* NIRF certificate - PDF Downloads */}
                    <div className="iqac-card">
                        <h2 className="iqac-card-title">NIRF Certificate</h2>
                        <div className="iqac-card-body">
                            <div className="file-grid">
                                {nirfFiles.length > 0 ? (
                                    nirfFiles.map((pdf, index) => (
                                        <a
                                            key={index}
                                            href={pdf.file}
                                            className="file-card"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            download
                                        >
                                            <div className="file-icon-wrapper">
                                                <i className="fa-regular fa-file-pdf"></i>
                                            </div>
                                            <span className="file-name">{pdf.displayName}</span>
                                            <i className="fa-solid fa-download download-icon"></i>
                                        </a>
                                    ))
                                ) : (
                                    <p className="iqac-text">No NIRF reports available.</p>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* NIRF Reports - PDF Downloads */}
                    <div className="iqac-card">
                        <h2 className="iqac-card-title">NIRF Reports</h2>
                        <div className="iqac-card-body">
                            <div className="file-grid">
                                {nirfFiles.length > 0 ? (
                                    nirfFiles.map((pdf, index) => (
                                        <a
                                            key={index}
                                            href={pdf.file}
                                            className="file-card"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            download
                                        >
                                            <div className="file-icon-wrapper">
                                                <i className="fa-regular fa-file-pdf"></i>
                                            </div>
                                            <span className="file-name">{pdf.displayName}</span>
                                            <i className="fa-solid fa-download download-icon"></i>
                                        </a>
                                    ))
                                ) : (
                                    <p className="iqac-text">No NIRF reports available.</p>
                                )}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    );
};
export default IqacNirf;
