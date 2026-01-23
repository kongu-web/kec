import React from 'react';
import Navbar from '../../HomePage/navbar/Navbar';
import Footer from '../../HomePage/Footer/Footer';
import IqacNavbar from '../IqacNavbar';
import '../IQAC.css';
import './IqacHierarchy.css';

const IqacHierarchy = () => {
    return (
        <div className="iqac-wrapper">
            <Navbar />
            <div className="iqac-container container-fluid p-0">
                <IqacNavbar />
                <div className="iqac-content">
                    <h1 className="iqac-section-title">ORGANIZATION HIERARCHY</h1>
                    <iframe
                        src="/files/iqac/iqac chart.pdf"
                        style={{ width: '100%', height: '800px', border: 'none' }}
                        title="Organization Hierarchy"
                    ></iframe>
                </div>
            </div>
            <Footer />
        </div>
    );
};
export default IqacHierarchy;
