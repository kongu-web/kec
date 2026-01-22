import React from "react";
import Navbar from '../HomePage/navbar/Navbar';
import Footer from '../HomePage/Footer/Footer';
import IqacNavbar from './IqacNavbar';
// Assets (Assuming these are in public/assets/docs/Naac/)
const gradeSheet = "/assets/docs/Naac/NAAC_CERTIFICATE_2022.pdf";
const ssrDVV = "/assets/docs/Naac/SSR_DVV_31_01_2022.pdf";


const IqacNaac = () => {
    return (
        <div className="iqac-wrapper">
            <Navbar />
            <div className="iqac-container container-fluid p-4">
                <IqacNavbar />
                <div className="iqac-content">
                    <h1 className="iqac-section-title">NAAC</h1>

                    <div className="naac-container">
                        <h2 className="iqac-title">
                            NAAC (National Assessment and Accreditation Council)
                        </h2>
                        <p className="alignment-justify iqac-text">
                            Kongu Engineering College has been accredited by NAAC with{" "}
                            <strong>A++ Grade</strong> valid up to <strong>March 28, 2027</strong>
                            .&nbsp;
                            <a
                                href={gradeSheet}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary font-weight-bold"
                                download
                            >
                                [Grade Sheet]
                            </a>
                        </p>

                        <div className="naac-section mt-4">
                            <h3 className="text-primary">SSR after DVV Clarification</h3>
                            <a
                                href={ssrDVV}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="iqac-file-link mt-2"
                                style={{ width: 'fit-content' }}
                                download
                            >
                                <i className="fa-regular fa-file-pdf mr-2 text-danger"></i>
                                View PDF
                            </a>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    );
};
export default IqacNaac;
