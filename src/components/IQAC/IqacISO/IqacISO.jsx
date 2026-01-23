import React from 'react';
import Navbar from '../../HomePage/navbar/Navbar';
import Footer from '../../HomePage/Footer/Footer';
import IqacNavbar from '../IqacNavbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { iqacData } from '../iqacData';
import '../IQAC.css';
import './IqacISO.css';

const IqacISO = () => {
    return (
        <div className="iqac-wrapper">
            <Navbar />
            <div className="iqac-container container-fluid p-0">
                <IqacNavbar />
                <div className="iqac-content">
                    <h1 className="iqac-section-title">International Organization for Standardization (ISO)</h1>
                    <div className="mb-4">
                        <h2 className="iqac-title">ABOUT ISO</h2>
                        <p className="alignment-justify iqac-text">
                            ISO certifications represent a commitment to excellence and adherence to internationally recognized standards of quality, safety, and efficiency. The International Organization for Standardization (ISO) is an independent, non-governmental international organization that develops and publishes a wide range of standards across various industries and sectors. ISO certifications are valuable for organizations seeking to enhance their operational efficiency, improve customer satisfaction, and gain a competitive edge in the Nation and beyond.
                        </p>
                    </div>
                    <div className="mb-5">
                        <h2 className="iqac-title">ISO@KEC</h2>
                        <p className="alignment-justify iqac-text">
                            Kongu Engineering College is certified by ISO in accordance with ISO 9001:1993 from 1999, subsequently by ISO 9001:2000, and currently by ISO 9001:2015 in 2020, and recertified in 2023 for the scope of Curriculum Development and Conducting Undergraduate, Post Graduate, and Research Programmes in Engineering, Applied Sciences, and Management.
                        </p>
                    </div>

                    <div className="iqac-file-grid">
                        {iqacData.iso.map((file, idx) => (
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
export default IqacISO;
