import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHome, faUsers, faSitemap, faChartBar, faGraduationCap,
    faCheckDouble, faStar, faThumbsUp, faHistory, faCalculator,
    faBezierCurve, faLightbulb, faFileContract, faDownload, faBullhorn, faImages
} from '@fortawesome/free-solid-svg-icons';
import './IQAC.css';

const IqacNavbar = () => {
    return (
        <nav className="iqac-navbar">
            <div className="iqac-nav-section">
                <h4 className="iqac-nav-category">Overview</h4>
                <ul className="iqac-nav-items">
                    <li><NavLink to="/iqac" end className={({ isActive }) => `iqac-nav-link ${isActive ? 'active' : ''}`}><FontAwesomeIcon icon={faHome} className="iqac-nav-icon" /> Home</NavLink></li>
                    <li><NavLink to="/iqac/composition" className={({ isActive }) => `iqac-nav-link ${isActive ? 'active' : ''}`}><FontAwesomeIcon icon={faUsers} className="iqac-nav-icon" /> Composition</NavLink></li>
                    <li><NavLink to="/iqac/hierarchy" className={({ isActive }) => `iqac-nav-link ${isActive ? 'active' : ''}`}><FontAwesomeIcon icon={faSitemap} className="iqac-nav-icon" /> Organization Hierarchy</NavLink></li>
                </ul>
            </div>

            <div className="iqac-nav-section">
                <h4 className="iqac-nav-category">Accreditation</h4>
                <ul className="iqac-nav-items">
                    <li><NavLink to="/iqac/naac" className={({ isActive }) => `iqac-nav-link ${isActive ? 'active' : ''}`}><FontAwesomeIcon icon={faChartBar} className="iqac-nav-icon" /> NAAC</NavLink></li>
                    <li><NavLink to="/iqac/nba" className={({ isActive }) => `iqac-nav-link ${isActive ? 'active' : ''}`}><FontAwesomeIcon icon={faGraduationCap} className="iqac-nav-icon" /> NBA</NavLink></li>
                    <li><NavLink to="/iqac/nirf" className={({ isActive }) => `iqac-nav-link ${isActive ? 'active' : ''}`}><FontAwesomeIcon icon={faCheckDouble} className="iqac-nav-icon" /> NIRF & Other Rankings</NavLink></li>
                    <li><NavLink to="/iqac/iso" className={({ isActive }) => `iqac-nav-link ${isActive ? 'active' : ''}`}><FontAwesomeIcon icon={faStar} className="iqac-nav-icon" /> ISO</NavLink></li>
                    <li><NavLink to="/iqac/affiliation" className={({ isActive }) => `iqac-nav-link ${isActive ? 'active' : ''}`}><FontAwesomeIcon icon={faThumbsUp} className="iqac-nav-icon" /> Affiliation & Approvals</NavLink></li>
                </ul>
            </div>

            <div className="iqac-nav-section">
                <h4 className="iqac-nav-category">Quality Assurance</h4>
                <ul className="iqac-nav-items">
                    <li><NavLink to="/iqac/meetings" className={({ isActive }) => `iqac-nav-link ${isActive ? 'active' : ''}`}><FontAwesomeIcon icon={faHistory} className="iqac-nav-icon" /> Meeting Minutes</NavLink></li>
                    <li><NavLink to="/iqac/audit" className={({ isActive }) => `iqac-nav-link ${isActive ? 'active' : ''}`}><FontAwesomeIcon icon={faCalculator} className="iqac-nav-icon" /> Audit Details</NavLink></li>
                    <li><NavLink to="/iqac/strategic-plan" className={({ isActive }) => `iqac-nav-link ${isActive ? 'active' : ''}`}><FontAwesomeIcon icon={faBezierCurve} className="iqac-nav-icon" /> Strategic Plan</NavLink></li>
                    <li><NavLink to="/iqac/best-practices" className={({ isActive }) => `iqac-nav-link ${isActive ? 'active' : ''}`}><FontAwesomeIcon icon={faLightbulb} className="iqac-nav-icon" /> Best Practices</NavLink></li>
                    <li><NavLink to="/iqac/annual-report" className={({ isActive }) => `iqac-nav-link ${isActive ? 'active' : ''}`}><FontAwesomeIcon icon={faFileContract} className="iqac-nav-icon" /> Annual Report</NavLink></li>
                </ul>
            </div>

            <div className="iqac-nav-section">
                <h4 className="iqac-nav-category">Resources</h4>
                <ul className="iqac-nav-items">
                    {/* <li><NavLink to="/iqac/downloads" className={({ isActive }) => `iqac-nav-link ${isActive ? 'active' : ''}`}><FontAwesomeIcon icon={faDownload} className="iqac-nav-icon" /> Download IQAC Files</NavLink></li> */}
                    <li>
                        <NavLink to="/iqac/circulars" className={({ isActive }) => `iqac-nav-link ${isActive ? 'active' : ''}`}>
                            <FontAwesomeIcon icon={faBullhorn} className="iqac-nav-icon" /> Circulars
                            {/* <span className="iqac-badge-new">NEW</span> */}
                        </NavLink>
                    </li>
                    <li><NavLink to="/iqac/gallery" className={({ isActive }) => `iqac-nav-link ${isActive ? 'active' : ''}`}><FontAwesomeIcon icon={faImages} className="iqac-nav-icon" /> Gallery</NavLink></li>
                </ul>
            </div>
        </nav>
    );
};

export default IqacNavbar;
