import React, { useState, useEffect } from "react";
import Navbar from '../HomePage/navbar/Navbar';
import Footer from '../HomePage/Footer/Footer';
import IqacNavbar from './IqacNavbar';
import './IQAC.css';

const IqacNirf = () => {
    return (
        <div className="iqac-wrapper">
            <Navbar />
            <div className="iqac-container container-fluid p-0">
                <IqacNavbar />
                <div className="iqac-content">
                    <h1 className="iqac-section-title">NIRF</h1>
                    <div className="nirf-container">
                        <h2 className="iqac-title">
                            NIRF (National Institution Ranking Framework) 2024
                        </h2>
                        <p className="alignment-justify iqac-text">
                            Kongu Engineering College ranked in the{" "}
                            <span className="text-primary font-weight-bold">101–150 band</span> in Engineering
                            category in India Ranking 2024 under NIRF, MHRD, Govt. of India.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};
export default IqacNirf;
