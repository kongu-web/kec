import React, { useState } from 'react';
import Navbar from '../../HomePage/navbar/Navbar';
import Footer from '../../HomePage/Footer/Footer';
import IqacNavbar from '../IqacNavbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf, faDownload } from '@fortawesome/free-solid-svg-icons';
import { iqacData } from '../iqacData';
import '../IQAC.css';
import './IqacAffiliation.css';

const FileGrid = ({ files }) => (
    <div className="clean-file-list">
        {files.map((file, idx) => (
            <div key={idx} className="clean-file-item">
                <span className="file-name-text">{file.name}</span>
                <a href={file.path} target="_blank" rel="noopener noreferrer" className="text-download-link">
                    Download
                </a>
            </div>
        ))}
    </div>
);

const IqacAffiliation = () => {
    const [activeMainTab, setActiveMainTab] = useState('autonomous');
    const [activeSubTab, setActiveSubTab] = useState('ENG');

    const renderContent = () => {
        if (activeMainTab === 'autonomous') {
            return (
                <div className="tab-content outer-tab-content active fade-in">
                    <h4 className="heading">Autonomous</h4>
                    <div className="clean-file-list">
                        <div className="clean-file-item">
                            <span className="file-name-text">Kongu Engineering College autonomous status valid upto 2032-2033</span>
                            <a href="/files/iqac/Affliation & Approval/AUTONOMOUS/3.KEC_autonomous_approval_23-33.pdf" target="_blank" rel="noreferrer" className="text-download-link">
                                Download
                            </a>
                        </div>
                        <div className="clean-file-item">
                            <span className="file-name-text">Kongu Engineering College autonomous status valid upto 2022-2023</span>
                            <a href="/files/iqac/Affliation & Approval/AUTONOMOUS/2.KEC_autonomous_approval.pdf" target="_blank" rel="noreferrer" className="text-download-link">
                                Download
                            </a>
                        </div>
                        <div className="clean-file-item">
                            <span className="file-name-text">Kongu Engineering College autonomous status valid upto 2012-2013</span>
                            <a href="/files/iqac/Affliation & Approval/AUTONOMOUS/1.KEC_autonomous_approval.pdf" target="_blank" rel="noreferrer" className="text-download-link">
                                Download
                            </a>
                        </div>
                    </div>
                </div>
            );
        } else if (activeMainTab === 'au') {
            return (
                <div className="tab-content outer-tab-content active fade-in">
                    <h4 className="heading">Anna University Affiliation</h4>
                    <h5> Affiliation Orders: </h5>
                    <div className="table-responsive">
                        <table className="table table-stripped">
                            <thead>
                                <tr>
                                    <th style={{ width: '10%' }} className="text-center">Sl.No.</th>
                                    <th style={{ width: '90%' }} className="text-left">Particulars</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="text-center">1</td>
                                    <td className="text-left"><a href="/files/iqac/Affliation & Approval/AU Affiliation/2025-2026.pdf" target="_blank" rel="noreferrer">Anna University Affiliation order for the year 2025-26</a></td>
                                </tr>
                                <tr>
                                    <td className="text-center">2</td>
                                    <td className="text-left"><a href="/files/iqac/Affliation & Approval/AU Affiliation/2024-2025.pdf" target="_blank" rel="noreferrer">Anna University Affiliation order for the year 2024-25</a></td>
                                </tr>
                                <tr>
                                    <td className="text-center">3</td>
                                    <td className="text-left"><a href="/files/iqac/Affliation & Approval/AU Affiliation/2023-2024.pdf" target="_blank" rel="noreferrer">Anna University Affiliation order for the year 2023-24</a></td>
                                </tr>
                                <tr>
                                    <td className="text-center">4</td>
                                    <td className="text-left"><a href="/files/iqac/Affliation & Approval/AU Affiliation/2022-2023.pdf" target="_blank" rel="noreferrer">Anna University Affiliation order for the year 2022-23</a></td>
                                </tr>
                                <tr>
                                    <td className="text-center">5</td>
                                    <td className="text-left"><a href="/files/iqac/Affliation & Approval/AU Affiliation/19_KEC_AU_affiliation_28.07.2021.pdf" target="_blank" rel="noreferrer">Anna University Affiliation order for the year 2021-22</a></td>
                                </tr>
                                <tr>
                                    <td className="text-center">6</td>
                                    <td className="text-left"><a href="/files/iqac/Affliation & Approval/AU Affiliation/18_KEC_AU_affiliation_30.06.2020.pdf" target="_blank" rel="noreferrer">Anna University Affiliation order for the year 2020-21</a></td>
                                </tr>
                                <tr>
                                    <td className="text-center">7</td>
                                    <td className="text-left"><a href="/files/iqac/Affliation & Approval/AU Affiliation/17_KEC_AU_affiliation_ 03.01.2020.pdf" target="_blank" rel="noreferrer">Anna University Affiliation order for the year 2019-20</a></td>
                                </tr>
                                <tr>
                                    <td className="text-center">8</td>
                                    <td className="text-left"><a href="/files/iqac/Affliation & Approval/AU Affiliation/16_KEC_AU_affiliation_15.05.2019.pdf" target="_blank" rel="noreferrer">Anna University Affiliation order for the year 2018-19</a></td>
                                </tr>
                                <tr>
                                    <td className="text-center">9</td>
                                    <td className="text-left"><a href="/files/iqac/Affliation & Approval/AU Affiliation/15_KEC_AU_affiliation_15.05.2018.pdf" target="_blank" rel="noreferrer">Anna University Affiliation order for the year 2017-18</a></td>
                                </tr>
                                <tr>
                                    <td className="text-center">10</td>
                                    <td className="text-left"><a href="/files/iqac/Affliation & Approval/AU Affiliation/6..20AU.20affiliation.202016-2017.pdf" target="_blank" rel="noreferrer">Anna University Affiliation order for the year 2016-17</a></td>
                                </tr>
                                <tr>
                                    <td className="text-center">11</td>
                                    <td className="text-left"><a href="/files/iqac/Affliation & Approval/AU Affiliation/5..20AU.20Affiliation.202015-2016.pdf" target="_blank" rel="noreferrer">Anna University Affiliation order for the year 2015-16</a></td>
                                </tr>
                                <tr>
                                    <td className="text-center">12</td>
                                    <td className="text-left"><a href="/files/iqac/Affliation & Approval/AU Affiliation/4..20AU.20Affiliation.202014-2015.pdf" target="_blank" rel="noreferrer">Anna University Affiliation order for the year 2014-15</a></td>
                                </tr>
                                <tr>
                                    <td className="text-center">13</td>
                                    <td className="text-left"><a href="/files/iqac/Affliation & Approval/AU Affiliation/3..20AU.20Affiliation.202013-2014.pdf" target="_blank" rel="noreferrer">Anna University Affiliation order for the year 2013-14</a></td>
                                </tr>
                                <tr>
                                    <td className="text-center">14</td>
                                    <td className="text-left"><a href="/files/iqac/Affliation & Approval/AU Affiliation/2..20AU.20Affiliation.202012-2013.pdf" target="_blank" rel="noreferrer">Anna University Affiliation order for the year 2012-13</a></td>
                                </tr>
                                <tr>
                                    <td className="text-center">15</td>
                                    <td className="text-left"><a href="/files/iqac/Affliation & Approval/AU Affiliation/1..20AUT.20affiliation.202011-2012.pdf" target="_blank" rel="noreferrer">Anna University Affiliation order for the year 2011-12</a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h5> Permanent Affiliation Orders: </h5>
                    <div className="table-responsive">
                        <table className="table table-stripped">
                            <thead>
                                <tr>
                                    <th style={{ width: '10%' }} className="text-center">Sl.No.</th>
                                    <th style={{ width: '90%' }} className="text-left">Particulars</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="text-center">1</td>
                                    <td className="text-left"><a href="/files/iqac/Affliation & Approval/AU Affiliation/P1..20Permanent.20affiliation.202011-2012.pdf" target="_blank" rel="noreferrer">Permanent Affiliation order 2011-2012</a></td>
                                </tr>
                                <tr>
                                    <td className="text-center">2</td>
                                    <td className="text-left"><a href="/files/iqac/Affliation & Approval/AU Affiliation/P2..20Permanent.20affiliation.202012-2013.pdf" target="_blank" rel="noreferrer">Permanent Affiliationorder 2012-2013</a></td>
                                </tr>
                                <tr>
                                    <td className="text-center">3</td>
                                    <td className="text-left"><a href="/files/iqac/Affliation & Approval/AU Affiliation/P3..20Permanent.20Affiliation.202013-2014.pdf" target="_blank" rel="noreferrer">Permanent Affiliation order2013-2014</a></td>
                                </tr>
                                <tr>
                                    <td className="text-center">4</td>
                                    <td className="text-left"><a href="/files/iqac/Affliation & Approval/AU Affiliation/P4..20Permanent.20Affiliation.202013-14.20-.2010.20Courses.pdf" target="_blank" rel="noreferrer">Permanent Affiliation order 2013-2014 10 courses BE EIE MTS BTECH IT ME MTECH</a></td>
                                </tr>
                                <tr>
                                    <td className="text-center">5</td>
                                    <td className="text-left"><a href="/files/iqac/Affliation & Approval/AU Affiliation/P5..20Permanent.20Affiliation.20M.E..20MTS.20-.202014-15.pdf" target="_blank" rel="noreferrer">Permanent Affiliation order 2014-2015 ME MTS</a></td>
                                </tr>
                                <tr>
                                    <td className="text-center">6</td>
                                    <td className="text-left"><a href="/files/iqac/Affliation & Approval/AU Affiliation/P6..20Permanent.20affiliation.20for.20BTECH.20FT.20from.202016-2017.pdf" target="_blank" rel="noreferrer">Permanent Affiliation order 2016-2017 BTECH FT</a></td>
                                </tr>
                                <tr>
                                    <td className="text-center">7</td>
                                    <td className="text-left"><a href="/files/iqac/Affliation & Approval/AU Affiliation/p7.Renaming_Mechatronics Engineering.pdf" target="_blank" rel="noreferrer">Permanent Affiliation order 2018-2019 Renaming of MTS</a></td>
                                </tr>
                                <tr>
                                    <td className="text-center">8</td>
                                    <td className="text-left"><a href="/files/iqac/Affliation & Approval/AU Affiliation/P7..20Permanent.20Affiliation.20ME.20Structural.20and.20ME.20Embedded.202019-2020.pdf" target="_blank" rel="noreferrer">Permanent Affiliation order 2019-2020 ME Structural and ME Embedded 2019-2020</a></td>
                                </tr>
                                <tr>
                                    <td className="text-center">9</td>
                                    <td className="text-left"><a href="/files/iqac/Affliation & Approval/AU Affiliation/P8..20Permanent.20Affiliation.20M.Tech.20Food.20Tech.20.202020-2021.pdf" target="_blank" rel="noreferrer">Permanent Affiliation M.Tech Food Tech 2020-2021</a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            );
        } else if (activeMainTab === 'aicte') {
            return (
                <div className="tab-content outer-tab-content active fade-in">
                    <h3 className="iqac-tab-heading">AICTE Approvals</h3>

                    {/* Inner Tabs for AICTE */}
                    <div className="tab-nav inner-tab-nav">
                        <button
                            className={`tab-link ${activeSubTab === 'ENG' ? 'active' : ''}`}
                            onClick={() => setActiveSubTab('ENG')}
                        >
                            E&T
                        </button>
                        <button
                            className={`tab-link ${activeSubTab === 'MBA' ? 'active' : ''}`}
                            onClick={() => setActiveSubTab('MBA')}
                        >
                            MBA
                        </button>
                        <button
                            className={`tab-link ${activeSubTab === 'MCA' ? 'active' : ''}`}
                            onClick={() => setActiveSubTab('MCA')}
                        >
                            MCA
                        </button>
                    </div>

                    {/* Inner Content */}
                    <div className="fade-in">
                        {activeSubTab === 'ENG' && (
                            <div className="full_page">
                                <h4 className="heading">AICTE Approvals for Engineering and Technology</h4>
                                <div className="table-responsive wide-table">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th className="text-center">Sl. No.</th>
                                                <th className="text-center">Name of the Course</th>
                                                <th className="text-center">Sanctioned Intake</th>
                                                <th className="text-center">AICTE Approval No. with Date</th>
                                                <th className="text-center">Date of AICTE approval</th>
                                                <th className="text-center">Period of Approval</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/* 01 */}
                                            <tr>
                                                <td className="text-center">01.</td>
                                                <td>B.E.Civil Engineering</td>
                                                <td className="text-center">30</td>
                                                <td><a href="/files/iqac/Affliation & Approval/AICTE/ENG/1.E&T-001-1993-94 FIRST APPROVAL OF THE COLLEGE (E&T) 19.04.1993 001.pdf" target="_blank" rel="noreferrer">F.No. 45-46/91-AICTE/586</a></td>
                                                <td className="text-center">19.04.1993</td>
                                                <td className="text-center">1992-1994</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>B.E.Mechanical Engineering</td>
                                                <td className="text-center">60</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>B.E.Electronics and Communication<br />Engineering</td>
                                                <td className="text-center">60</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>B.E.Computer Science and Engineering</td>
                                                <td className="text-center">30</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>

                                            {/* 02 */}
                                            <tr>
                                                <td className="text-center">02</td>
                                                <td>B.E.Civil Engineering</td>
                                                <td className="text-center">30</td>
                                                <td><a href="/files/iqac/Affliation & Approval/AICTE/ENG/2.E&T-002-1993-94 ext of APPROVAL 28.10.1993.pdf" target="_blank" rel="noreferrer">F.No. 45-46/91-AICTE/9532</a></td>
                                                <td className="text-center">28.10.1993</td>
                                                <td className="text-center">1993-1994</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>B.E.Mechanical Engineering</td>
                                                <td className="text-center">60</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>B.E.Electronics and Communication<br />Engineering</td>
                                                <td className="text-center">60</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>B.E. Computer Science and Engineering</td>
                                                <td className="text-center">30</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>

                                            {/* 03 */}
                                            <tr>
                                                <td className="text-center">03</td>
                                                <td>B.E. Civil Engineering</td>
                                                <td className="text-center">30</td>
                                                <td><a href="/files/iqac/Affliation & Approval/AICTE/ENG/3.E&T-003-1994-95-96 EXT OF APPROVAL 17.04.1994.pdf" target="_blank" rel="noreferrer">F.No. 2-15/BIII/RC(M)/93</a></td>
                                                <td className="text-center">17.04.1994</td>
                                                <td className="text-center">1994-1997</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>B.E.Mechanical Engineering</td>
                                                <td className="text-center">60</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>B.E.Electronics and Communication<br />Engineering</td>
                                                <td className="text-center">60</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>B.E. Computer Science and Engineering</td>
                                                <td className="text-center">30</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>

                                            {/* 04 */}
                                            <tr>
                                                <td className="text-center">04</td>
                                                <td>B.Tech. Chemical Engineering</td>
                                                <td className="text-center">40<br />(New Course)</td>
                                                <td><a href="/files/iqac/Affliation & Approval/AICTE/ENG/4.E&T-004-1994-95 APPROVAL of CHEM & EEE 12.08.1994.pdf" target="_blank" rel="noreferrer">F.No. 732-50-10/RC/94</a></td>
                                                <td className="text-center">12.08.1994</td>
                                                <td className="text-center">1994-1995</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>B.E. Electrical and Electronics Engineering</td>
                                                <td className="text-center">40<br />(New Course)</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>

                                            {/* 05 */}
                                            <tr>
                                                <td className="text-center">05</td>
                                                <td>B.E. Civil Engineering</td>
                                                <td className="text-center">30</td>
                                                <td><a href="/files/iqac/Affliation & Approval/AICTE/ENG/5.E&T-005-1995-97 ext OF APPROVAL 05.06.1995.pdf" target="_blank" rel="noreferrer">F.No. 730-52-230/RC/94</a></td>
                                                <td className="text-center">05.06.1995</td>
                                                <td className="text-center">1995-1997</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>B.E.Mechanical Engineering</td>
                                                <td className="text-center">60</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>B.E.Electronics and Communication<br />Engineering</td>
                                                <td className="text-center">60</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>B.E. Computer Science and Engineering</td>
                                                <td className="text-center">30</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>B.Tech. Chemical Engineering</td>
                                                <td className="text-center">40</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>B.E. Electrical and Electronics Engineering</td>
                                                <td className="text-center">40</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>

                                            {/* 06 */}
                                            <tr>
                                                <td className="text-center">06</td>
                                                <td>B.E. Computer Science and Engineering</td>
                                                <td className="text-center">30 to 60</td>
                                                <td><a href="/files/iqac/Affliation & Approval/AICTE/ENG/6.E&T-006-1996-97 increase in intake OF CSE 30 to 60 07.06.1995.pdf" target="_blank" rel="noreferrer">F.No. 730-52-230/RC/94</a></td>
                                                <td className="text-center">07.06.1995</td>
                                                <td className="text-center">1996-1997</td>
                                            </tr>

                                            {/* 07 */}
                                            <tr>
                                                <td className="text-center">07</td>
                                                <td>B.E. Civil Engineering</td>
                                                <td className="text-center">30</td>
                                                <td><a href="/files/iqac/Affliation & Approval/AICTE/ENG/7.E&T-007-1996-99 ext of approval 08.04.1996.pdf" target="_blank" rel="noreferrer">F.No. 730-52-230(E)/ET/96</a></td>
                                                <td className="text-center">08.04.1996</td>
                                                <td className="text-center">1996-1999</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>B.E.Mechanical Engineering</td>
                                                <td className="text-center">60</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>B.E.Electronics and Communication<br />Engineering</td>
                                                <td className="text-center">60</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>B.E.Computer Science and Engineering</td>
                                                <td className="text-center">60</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>B.Tech.Chemical Engineering</td>
                                                <td className="text-center">40</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>B.E. Electrical and Electronics Engineering</td>
                                                <td className="text-center">40</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>

                                            {/* 08 */}
                                            <tr>
                                                <td className="text-center">08</td>
                                                <td>B.E. Electrical and Electronics Engineering</td>
                                                <td className="text-center">40 to 60</td>
                                                <td><a href="/files/iqac/Affliation & Approval/AICTE/ENG/8.E&T-008-1996-99 increase in intake OF EEE 40 to 60 24.05.1996.pdf" target="_blank" rel="noreferrer">F.No. 730-52-230(E)/ET/96</a></td>
                                                <td className="text-center">24.05.1996</td>
                                                <td className="text-center">1996-1999</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>B.E. Civil Engineering</td>
                                                <td className="text-center">30</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>B.E.Mechanical Engineering</td>
                                                <td className="text-center">60</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>B.E.Electronics and Communication<br />Engineering</td>
                                                <td className="text-center">60</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>B.E. Computer Science and Engineering</td>
                                                <td className="text-center">60</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>B.Tech. Chemical Engineering</td>
                                                <td className="text-center">40</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>

                                            {/* 09 */}
                                            <tr>
                                                <td className="text-center">09</td>
                                                <td>M.E. Engineering Design</td>
                                                <td className="text-center">18<br />(New Course)</td>
                                                <td><a href="/files/iqac/Affliation & Approval/AICTE/ENG/9.E&T-009-1996-97 approval OF ME ED 14.11.1996.pdf" target="_blank" rel="noreferrer">F.No.441/TND-93/E&amp;T(PG)/92</a></td>
                                                <td className="text-center">14.11.1996</td>
                                                <td className="text-center">1996-1997</td>
                                            </tr>

                                            {/* 10 */}
                                            <tr>
                                                <td className="text-center">10</td>
                                                <td>B.E.Electronics and Instrumentation Engineering</td>
                                                <td className="text-center">30<br />(New Course)</td>
                                                <td><a href="/files/iqac/Affliation & Approval/AICTE/ENG/10.E&T-010-1997-99 approval of EIE 29.08.1997.pdf" target="_blank" rel="noreferrer">F.No. 730-52-230(E)/ET/97</a></td>
                                                <td className="text-center">29.08.1997</td>
                                                <td className="text-center">1997-1999</td>
                                            </tr>

                                            {/* 11 */}
                                            <tr>
                                                <td className="text-center">11</td>
                                                <td>B.Tech Information Technology</td>
                                                <td className="text-center">30<br />(New Course)</td>
                                                <td><a href="/files/iqac/Affliation & Approval/AICTE/ENG/11.E&T-011-1998-99 approval of IT 09.06.1998.pdf" target="_blank" rel="noreferrer">F.No. 730-52-230(E)/ ET/97</a></td>
                                                <td className="text-center">09.06.1998</td>
                                                <td className="text-center">1998-1999</td>
                                            </tr>

                                            {/* 12 */}
                                            <tr>
                                                <td className="text-center">12</td>
                                                <td>B.E. Civil Engineering</td>
                                                <td className="text-center">30</td>
                                                <td><a href="/files/iqac/Affliation & Approval/AICTE/ENG/12.E&T-012-1999-2002 EOA & INCREASE IN INTKAE OF EIE, IT AND NEW COURSE MTS 29.06.1999.pdf" target="_blank" rel="noreferrer">F.No. 730-52-230(E)/ET/97</a></td>
                                                <td className="text-center">29.06.1999</td>
                                                <td className="text-center">1999-2002</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>B.E.Mechanical Engineering</td>
                                                <td className="text-center">60</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>B.E.Electronics and Communication<br />Engineering</td>
                                                <td className="text-center">60</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>B.E. Computer Science and Engineering</td>
                                                <td className="text-center">60</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>B.Tech. Chemical Engineering</td>
                                                <td className="text-center">40</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>B.Tech. Information Technology</td>
                                                <td className="text-center">30 to 60</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>B.E. Electrical and Electronics Engineering</td>
                                                <td className="text-center">60</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>B.E. Electronics and Instrumentation Engineering</td>
                                                <td className="text-center">30 to 40</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>B.E. Mechatronics Engineering</td>
                                                <td className="text-center">40<br />(New Course)</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>

                                            {/* 13 */}
                                            <tr>
                                                <td className="text-center">13</td>
                                                <td>M.E. Computer Science and Engineering</td>
                                                <td className="text-center">18</td>
                                                <td><a href="/files/iqac/Affliation & Approval/AICTE/ENG/13.E&T-013-1999-2000 APPROVAL OF ME CSE 25.08.1999.pdf" target="_blank" rel="noreferrer">F.No.441/TND-93/BOS(PG)/92</a></td>
                                                <td className="text-center">25.08.1999</td>
                                                <td className="text-center">1999-2000</td>
                                            </tr>

                                            {/* 14 */}
                                            <tr>
                                                <td className="text-center">14</td>
                                                <td>B.E. Civil Engineering</td>
                                                <td className="text-center">30</td>
                                                <td><a href="/files/iqac/Affliation & Approval/AICTE/ENG/14.E&T-014-2000-2001 EOA & INCREASE IN INTAKE OF ECE CSE IT FROM 60 TO 90 14.11.2000.pdf" target="_blank" rel="noreferrer">F.No. 730-52-230(E)/ET/97</a></td>
                                                <td className="text-center">14.11.2000</td>
                                                <td className="text-center">2000-2001</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>B.E.Mechanical Engineering</td>
                                                <td className="text-center">60</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>B.E.Electronics and Communication<br />Engineering</td>
                                                <td className="text-center">60 to 90</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>B.E. Computer Science and Engineering</td>
                                                <td className="text-center">60 to 90</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>B.Tech. Chemical Engineering</td>
                                                <td className="text-center">40</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>B.Tech. Information Technology</td>
                                                <td className="text-center">60 to 90</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>B.E. Electrical and Electronics Engineering</td>
                                                <td className="text-center">60</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>B.E. Electronics and Instrumentation Engineering</td>
                                                <td className="text-center">30 to 40</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>B.E. Mechatronics Engineering</td>
                                                <td className="text-center">40<br />(New Course)</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>

                                            {/* 15 */}
                                            <tr>
                                                <td className="text-center">15</td>
                                                <td>B.E. Civil Engineering</td>
                                                <td className="text-center">30</td>
                                                <td><a href="/files/iqac/Affliation & Approval/AICTE/ENG/15.E&T-015-2001-2003 EOA AND INCREASE IN INTKAE OF CSE 90 TO 120 22.06.2001.pdf" target="_blank" rel="noreferrer">F.No. 730-52-230(E)/ET/97</a></td>
                                                <td className="text-center">22.06.2001</td>
                                                <td className="text-center">2001-2003</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>B.E.Mechanical Engineering</td>
                                                <td className="text-center">60</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>B.E.Electronics and Communication<br />Engineering</td>
                                                <td className="text-center">90</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>B.E. Computer Science and Engineering</td>
                                                <td className="text-center">90 to 120</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>B.Tech. Chemical Engineering</td>
                                                <td className="text-center">40</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>B.Tech. Information Technology</td>
                                                <td className="text-center">90</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>B.E. Electrical and Electronics Engineering</td>
                                                <td className="text-center">60</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>B.E. Electronics and Instrumentation Engineering</td>
                                                <td className="text-center">40</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>B.E. Mechatronics Engineering</td>
                                                <td className="text-center">40</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>

                                            {/* 16 */}
                                            <tr>
                                                <td className="text-center">16</td>
                                                <td>M.E.Applied Elcetronics</td>
                                                <td className="text-center">25<br />(New Course)</td>
                                                <td><a href="/files/iqac/Affliation & Approval/AICTE/ENG/16.E&T-016-2002-2003 APPROVAL OF ME AE 08.02.2002.pdf" target="_blank" rel="noreferrer">F.No. XVII-AIBPG/APP-1602/ET/2001</a></td>
                                                <td className="text-center">08.02.2002</td>
                                                <td className="text-center">2002-2003</td>
                                            </tr>

                                            {/* 17 */}
                                            <tr>
                                                <td className="text-center">17</td>
                                                <td>B.E. Civil Engineering</td>
                                                <td className="text-center">30 to 60</td>
                                                <td><a href="/files/iqac/Affliation & Approval/AICTE/ENG/17.E&T-017-2002-2005 EOA & INCREASE IN INTAKE OF ECE 90 TO 120, CIVIL 30 TO 60.pdf" target="_blank" rel="noreferrer">F.No. 730-52-230(E)/ET/97</a></td>
                                                <td className="text-center">19.06.2002</td>
                                                <td className="text-center">2002-2005</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>B.E.Mechanical Engineering</td>
                                                <td className="text-center">60</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>B.E.Electronics and Communication<br />Engineering</td>
                                                <td className="text-center">90 to 120</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>B.E. Computer Science and Engineering</td>
                                                <td className="text-center">120</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>B.Tech. Chemical Engineering</td>
                                                <td className="text-center">40</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>B.Tech. Information Technology</td>
                                                <td className="text-center">90</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>B.E. Electrical and Electronics Engineering</td>
                                                <td className="text-center">60</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>B.E. Electronics and Instrumentation Engineering</td>
                                                <td className="text-center">40</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>B.E. Mechatronics Engineering</td>
                                                <td className="text-center">40</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>

                                            {/* 18 */}
                                            <tr>
                                                <td className="text-center">18</td>
                                                <td>M.E. Computer Science and Engineering</td>
                                                <td className="text-center">18 to 25</td>
                                                <td><a href="/files/iqac/Affliation & Approval/AICTE/ENG/18.E&T-018-2002-2003 INCREASE IN INTAKE OF ME CSE & ED 18 TO 2529.08.2002.pdf" target="_blank" rel="noreferrer">F.No. 441/TND-93/E&amp;T(PG)/92</a></td>
                                                <td className="text-center">29.08.2002</td>
                                                <td className="text-center">2002-2003</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>M.E. Engineering Design</td>
                                                <td className="text-center">18 to 25</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>

                                            {/* 19 */}
                                            <tr>
                                                <td className="text-center">19</td>
                                                <td>M.E. Construction Engineering and Management</td>
                                                <td className="text-center">18<br />(New Course)</td>
                                                <td><a href="/files/iqac/Affliation & Approval/AICTE/ENG/19.E&T-019-2003-05 APPROVAL OF ME CONST ENGG AND MGMT 27.03.2003.pdf" target="_blank" rel="noreferrer">F.No. 07/05/TN/PG/2002/CIVIL-19</a></td>
                                                <td className="text-center">27.03.2003</td>
                                                <td className="text-center">2003-2005</td>
                                            </tr>

                                            {/* 20 */}
                                            <tr>
                                                <td className="text-center">20</td>
                                                <td>M.E. CAD/CAM</td>
                                                <td className="text-center">18<br />(New course)</td>
                                                <td><a href="/files/iqac/Affliation & Approval/AICTE/ENG/20.E&T-020-2003-2005 APPROVAL OF ME CAD CAM 07.07.2003.pdf" target="_blank" rel="noreferrer">F.No.PG/TN/ME/MECH/2003/57</a></td>
                                                <td className="text-center">07.07.2003</td>
                                                <td className="text-center">2003-2005</td>
                                            </tr>

                                            {/* 21 */}
                                            <tr>
                                                <td className="text-center">21</td>
                                                <td>M.E. Chemical Engineering</td>
                                                <td className="text-center">18<br />(New course)</td>
                                                <td><a href="/files/iqac/Affliation & Approval/AICTE/ENG/21.E&T-021-2003-2005 APPROVAL OF ME CHEMICAL Engg 07.07.2003.pdf" target="_blank" rel="noreferrer">F.No.PG/TN/M.TECH/CHEM/2003/75</a></td>
                                                <td className="text-center">07.07.2003</td>
                                                <td className="text-center">2003-2005</td>
                                            </tr>

                                            {/* 22 */}
                                            <tr>
                                                <td className="text-center">22</td>
                                                <td>M.E. VLSI Design</td>
                                                <td className="text-center">18<br />(New Course)</td>
                                                <td><a href="/files/iqac/Affliation & Approval/AICTE/ENG/22.E&T-022-2003-2005 APPROVAL OF ME VLSI 25.08.2003.pdf" target="_blank" rel="noreferrer">ECE F.No. Nil</a></td>
                                                <td className="text-center">25.08.2003</td>
                                                <td className="text-center">2003-2005</td>
                                            </tr>

                                            {/* 23 */}
                                            <tr>
                                                <td className="text-center">23</td>
                                                <td>M.E. Computer Science and Engineering</td>
                                                <td className="text-center">25</td>
                                                <td><a href="/files/iqac/Affliation & Approval/AICTE/ENG/23.E&T-023-2003-2005 EXT OF APPROVAL ME ED CSE CEM 21.08.2003.pdf" target="_blank" rel="noreferrer">F.No. 441/TND-93/E&amp;T(PG)/92</a></td>
                                                <td className="text-center">21.08.2003</td>
                                                <td className="text-center">2003-2005</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>M.E. Engineering Design</td>
                                                <td className="text-center">25</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>M.E. Construction Engineering and Management</td>
                                                <td className="text-center">18</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>

                                            {/* 24 */}
                                            <tr>
                                                <td className="text-center">24</td>
                                                <td>M.E. Mechatronics Engineering</td>
                                                <td className="text-center">18<br />(New Course)</td>
                                                <td><a href="/files/iqac/Affliation & Approval/AICTE/ENG/24.E&T-024-2004-2006 APPROVAL OF ME ME MECHATRONICS 22.07.2004.pdf" target="_blank" rel="noreferrer">F.No.PG/TN/M.E/2004/MECH-50/75</a></td>
                                                <td className="text-center">22.07.2004</td>
                                                <td className="text-center">2004-2006</td>
                                            </tr>

                                            {/* 25 */}
                                            <tr>
                                                <td className="text-center">25</td>
                                                <td>M.Tech Chemical Engineering<br />(Change of Nomenclature M.Tech. Chemical Engineering instead of M.E. Chemical Engineering)</td>
                                                <td className="text-center">---</td>
                                                <td><a href="/files/iqac/Affliation & Approval/AICTE/ENG/25.E&T-025-2003-2005 CHANGE OF NOMENCLATURE ME TO MTECH Chemical 21.12.2004.pdf" target="_blank" rel="noreferrer">F.No.255-50/PG/TN/2003/186</a></td>
                                                <td className="text-center">21.12.2004</td>
                                                <td className="text-center">2003-2005</td>
                                            </tr>

                                            {/* 26 */}
                                            <tr>
                                                <td className="text-center">26</td>
                                                <td>B.Tech. Chemical Engineering</td>
                                                <td className="text-center">40</td>
                                                <td><a href="/files/iqac/Affliation & Approval/AICTE/ENG/26.E&T-026-2005-2006 EXTENSION OF APPROVAL 24.06.2005.pdf" target="_blank" rel="noreferrer">F.No.730-52-230(E)/ET/97</a></td>
                                                <td className="text-center">24.06.2005</td>
                                                <td className="text-center">2005-2006</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>B.E. Civil Engineering</td>
                                                <td className="text-center">60</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>Computer Science and Engineering</td>
                                                <td className="text-center">120</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>Electrical and Electronics Engineering</td>
                                                <td className="text-center">60</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>Electronics and Communication Engineering</td>
                                                <td className="text-center">120</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>Electronics and Instrumentation Engineering</td>
                                                <td className="text-center">40</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>Information Technology</td>
                                                <td className="text-center">90</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>M.E. Applied Electronics</td>
                                                <td className="text-center">25</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>M.E. Computer Science and Engineering</td>
                                                <td className="text-center">25</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>M.E. Mechatronics Engineering</td>
                                                <td className="text-center">18</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>M.E. VLSI Design</td>
                                                <td className="text-center">18</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>M.E. CAD/CAM</td>
                                                <td className="text-center">18</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>M.E. Construction Engineering and Management</td>
                                                <td className="text-center">18</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>M.E. Engineering Design</td>
                                                <td className="text-center">25</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>M.Tech. Chemical Engineering</td>
                                                <td className="text-center">18</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>M.B.A. (Standalone)</td>
                                                <td className="text-center">60</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>M.C.A. (Standalone)</td>
                                                <td className="text-center">60</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>B.E.Mechanical Engineering</td>
                                                <td className="text-center">60</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>B.E.Mechatronics Engineering</td>
                                                <td className="text-center">40</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>

                                            {/* 27 */}
                                            <tr>
                                                <td className="text-center">27</td>
                                                <td>B.Tech. Chemical Engineering</td>
                                                <td className="text-center">40 to 60</td>
                                                <td><a href="/files/iqac/Affliation & Approval/AICTE/ENG/27.E&T-027-2005-2006 EOA & IN INTAKE OF CHEM 60, EEE 120 , MECH 120, EIE 60, MTS 60 & NEW COU FT 19.09.2005.pdf" target="_blank" rel="noreferrer">F.No.730-52-230(E)/ET/97</a></td>
                                                <td className="text-center">19.09.2005</td>
                                                <td className="text-center">2005-2006</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>B.E. Civil Engineering</td>
                                                <td className="text-center">60</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>Computer Science and Engineering</td>
                                                <td className="text-center">120</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>Electrical and Electronics Engineering</td>
                                                <td className="text-center">60 to 120</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                        </tbody>
                                        <tbody>
                                            {/* 28 */}
                                            <tr>
                                                <td className="text-center">28</td>
                                                <td>Extension of Approval & Conditional Approval Removal</td>
                                                <td className="text-center">-</td>
                                                <td><a href="/files/iqac/Affliation & Approval/AICTE/ENG/28.E&T-028-2006-2007 EXT OF APPROVAL & CONDITIONAL APPROVAL REMOVAL 24.05.2006.pdf" target="_blank" rel="noreferrer">F.No.730-52-230(E)/ET/97</a></td>
                                                <td className="text-center">24.05.2006</td>
                                                <td className="text-center">2006-2007</td>
                                            </tr>

                                            {/* 29 */}
                                            <tr>
                                                <td className="text-center">29</td>
                                                <td>Extension of Approval</td>
                                                <td className="text-center">-</td>
                                                <td><a href="/files/iqac/Affliation & Approval/AICTE/ENG/29.E&T-029-2007-2008 EXT OF APPROVAL 22.05.2007.pdf" target="_blank" rel="noreferrer">F.No.730-52-230(E)/ET/97</a></td>
                                                <td className="text-center">22.05.2007</td>
                                                <td className="text-center">2007-2008</td>
                                            </tr>

                                            {/* 30 */}
                                            <tr>
                                                <td className="text-center">30</td>
                                                <td>B.E. Electronics and Instrumentation Engineering</td>
                                                <td className="text-center">60 to 120</td>
                                                <td><a href="/files/iqac/Affliation & Approval/AICTE/ENG/30.E&T-030-2007-2008 EOA AND INCREASE IN INTKAE 60 TO 120 02.07.2007.pdf" target="_blank" rel="noreferrer">F.No.730-52-230(E)/ET/97</a></td>
                                                <td className="text-center">02.07.2007</td>
                                                <td className="text-center">2007-2008</td>
                                            </tr>

                                            {/* 31 */}
                                            <tr>
                                                <td className="text-center">31</td>
                                                <td>Extension of Approval</td>
                                                <td className="text-center">-</td>
                                                <td><a href="/files/iqac/Affliation & Approval/AICTE/ENG/31.E&T-031-2008-2011 EXTENSION OF APPROVAL 27.05.2008.Pdf" target="_blank" rel="noreferrer">F.No.730-52-230(E)/ET/97</a></td>
                                                <td className="text-center">27.05.2008</td>
                                                <td className="text-center">2008-2011</td>
                                            </tr>

                                            {/* 32 */}
                                            <tr>
                                                <td className="text-center">32</td>
                                                <td>B.E. Electronics and Instrumentation Engineering</td>
                                                <td className="text-center">60 to 120</td>
                                                <td><a href="/files/iqac/Affliation & Approval/AICTE/ENG/32.E&T-032-2008-09-2010 INCREASE IN INTKAE OF EIE & MTS 60 TO 120, IT 90 TO 120 23.05.2008.PDF" target="_blank" rel="noreferrer">F.No.730-52-230(E)/ET/97</a></td>
                                                <td className="text-center">23.05.2008</td>
                                                <td className="text-center">2008-2010</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>B.E. Mechatronics Engineering</td>
                                                <td className="text-center">60 to 120</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>B.Tech. Information Technology</td>
                                                <td className="text-center">90 to 120</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>

                                            {/* 33 */}
                                            <tr>
                                                <td className="text-center">33</td>
                                                <td>M.E. Control and Instumentation</td>
                                                <td className="text-center">18</td>
                                                <td><a href="/files/iqac/Affliation & Approval/AICTE/ENG/33.E&T-033-2010-2011 EOA AND APPROVAL OF ME C&I COMP& COMM ENGG 23.08.2010.pdf" target="_blank" rel="noreferrer">F.No. Southern/1-6060451/2010/EOA</a></td>
                                                <td className="text-center">23.08.2010</td>
                                                <td className="text-center">2010-2011</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>M.E. Computer and Communication Engineering</td>
                                                <td className="text-center">18</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>

                                            {/* 34 */}
                                            <tr>
                                                <td className="text-center">34</td>
                                                <td>B.E. Mechanical Engineering</td>
                                                <td className="text-center">120 to 180</td>
                                                <td><a href="/files/iqac/Affliation & Approval/AICTE/ENG/34.E&T-034-2011-2012 EOA AND INCREASE IN INTAKE OF MECH,ECE,CSE 120 TO 180 NEW ME COMM SYS &PED 01.09.2011.pdf" target="_blank" rel="noreferrer">F.No. Southern/1-396035542/2011/EOA</a></td>
                                                <td className="text-center">01.09.2011</td>
                                                <td className="text-center">2011-2012</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>B.E. Electronics and Communication Engineering</td>
                                                <td className="text-center">120 to 180</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>B.E. Computer Science and Engineering</td>
                                                <td className="text-center">120 to 180</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>M.E. Communication Systems</td>
                                                <td className="text-center">18<br />(New Course)</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>M.E. Power Electronics and Drives</td>
                                                <td className="text-center">18<br />(New Course)</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>

                                            {/* 35 */}
                                            <tr>
                                                <td className="text-center">35</td>
                                                <td>B.E. Mechanical Engineering</td>
                                                <td className="text-center">180 to 240</td>
                                                <td><a href="/files/iqac/Affliation & Approval/AICTE/ENG/35.E&T-035-2012-2013 EOA AND INC IN MECH ECE CSE 180 to 240 NEW ME EMB SYS & STR ENGG 10.05.2012.PDF" target="_blank" rel="noreferrer">F.No. Southern/1-689377671/2012/EOA</a></td>
                                                <td className="text-center">10.05.2012</td>
                                                <td className="text-center">2012-2013</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>B.E. Electronics and Communication Engineering</td>
                                                <td className="text-center">180 to 240</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>B.E. Computer Science and Engineering</td>
                                                <td className="text-center">180 to 240</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>M.E. Embedded Systems</td>
                                                <td className="text-center">18<br />(New Course)</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>M.E. Structural Engineering</td>
                                                <td className="text-center">18<br />(New Course)</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>

                                            {/* 36 */}
                                            <tr>
                                                <td className="text-center">36</td>
                                                <td>B.E. Civil Engineering</td>
                                                <td className="text-center">120 to 240</td>
                                                <td><a href="/files/iqac/Affliation & Approval/AICTE/ENG/36.E&T-036-2013-2014 EOA AND INC. IN INTAKE CIVIL 120 to240 chem 60 to120 NEW MTECH FT & IT (CW) 19.03.2013.PDF" target="_blank" rel="noreferrer">F.No. Southern/1-1345155662/2013/EOA</a></td>
                                                <td className="text-center">19.03.2013</td>
                                                <td className="text-center">2013-2014</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>B.Tech. Chemical Engineering</td>
                                                <td className="text-center">60 to 120</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>M.Tech. Food Technology</td>
                                                <td className="text-center">18<br />(New Course)</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>M.Tech. Information Technology (Information and Cyber Warfare)</td>
                                                <td className="text-center">18<br />(New Course)</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>

                                            {/* 37 */}
                                            <tr>
                                                <td className="text-center">37</td>
                                                <td>Extension of Approval</td>
                                                <td className="text-center">-</td>
                                                <td><a href="/files/iqac/Affliation & Approval/AICTE/ENG/37.E&T-037-2014-2015 EOA 2014.PDF" target="_blank" rel="noreferrer">F.No. Southern/1-2016335132/2014/EOA</a></td>
                                                <td className="text-center">04.06.2014</td>
                                                <td className="text-center">2014-2015</td>
                                            </tr>

                                            {/* 38 */}
                                            <tr>
                                                <td className="text-center">38</td>
                                                <td>B.Tech. Automobile Engineering</td>
                                                <td className="text-center">60<br />(New Course)</td>
                                                <td><a href="/files/iqac/Affliation & Approval/AICTE/ENG/38.E&T-38-2015-16 BTECH Autonomobile EOA 07.04.20152015.PDF" target="_blank" rel="noreferrer">F.No. Southern/1-2451457493/2015/EOA</a></td>
                                                <td className="text-center">07.04.2015</td>
                                                <td className="text-center">2015-2016</td>
                                            </tr>

                                            {/* 39 */}
                                            <tr>
                                                <td className="text-center">39</td>
                                                <td>Extension of Approval</td>
                                                <td className="text-center">-</td>
                                                <td><a href="/files/iqac/Affliation & Approval/AICTE/ENG/39.E&T-039- 2016-2017 EOA 25.4.2016.pdf" target="_blank" rel="noreferrer">F.No. Southern/1-2811109033/2016/EOA</a></td>
                                                <td className="text-center">25.04.2016</td>
                                                <td className="text-center">2016-2017</td>
                                            </tr>

                                            {/* 40 */}
                                            <tr>
                                                <td className="text-center">40</td>
                                                <td>Extension of Approval</td>
                                                <td className="text-center">-</td>
                                                <td><a href="/files/iqac/Affliation & Approval/AICTE/ENG/40.E&T-040- 2017-2018 EOA 20.4.2017.pdf" target="_blank" rel="noreferrer">F.No. Southern/1-3324888365/2017/EOA</a></td>
                                                <td className="text-center">10.04.2017</td>
                                                <td className="text-center">2017-2018</td>
                                            </tr>

                                            {/* 41 */}
                                            <tr>
                                                <td className="text-center">41</td>
                                                <td>Extension of Approval (Corrigendum for Mechatronics Engineering)</td>
                                                <td className="text-center">-</td>
                                                <td><a href="/files/iqac/Affliation & Approval/AICTE/ENG/41.E&T-041 -2018-2019 EOA Corrigendum 4.7.2018 for mechatronics engineering instead MECHATRONICS.pdf" target="_blank" rel="noreferrer">F.No. Southern/1-3511116281/2018/EOA/Corrigendum-1</a></td>
                                                <td className="text-center">04.07.2018</td>
                                                <td className="text-center">2018-2019</td>
                                            </tr>

                                            {/* 42 */}
                                            <tr>
                                                <td className="text-center">42</td>
                                                <td>Extension of Approval</td>
                                                <td className="text-center">-</td>
                                                <td><a href="/files/iqac/Affliation & Approval/AICTE/ENG/42.E&T-042 -2019-2020 EOA 04.05.2019.PDF" target="_blank" rel="noreferrer">F.No. Southern/1-4260216668/2019/EOA</a></td>
                                                <td className="text-center">04.05.2019</td>
                                                <td className="text-center">2019-2020</td>
                                            </tr>

                                            {/* 43 */}
                                            <tr>
                                                <td className="text-center">43</td>
                                                <td>Extension of Approval</td>
                                                <td className="text-center">-</td>
                                                <td><a href="/files/iqac/Affliation & Approval/AICTE/ENG/43.AICTE_Approval_2020-21.pdf" target="_blank" rel="noreferrer">F.No. Southern/1-7009968414/2020/EOA</a></td>
                                                <td className="text-center">-</td>
                                                <td className="text-center">2020-2021</td>
                                            </tr>

                                            {/* 44 */}
                                            <tr>
                                                <td className="text-center">44</td>
                                                <td>Extension of Approval</td>
                                                <td className="text-center">-</td>
                                                <td><a href="/files/iqac/Affliation & Approval/AICTE/ENG/44.AICTE_Approval_2021_22.pdf" target="_blank" rel="noreferrer">F.No. Southern/1-9318118029/2021/EOA</a></td>
                                                <td className="text-center">-</td>
                                                <td className="text-center">2021-2022</td>
                                            </tr>

                                            {/* 45 */}
                                            <tr>
                                                <td className="text-center">45</td>
                                                <td>Extension of Approval</td>
                                                <td className="text-center">-</td>
                                                <td><a href="/files/iqac/Affliation & Approval/AICTE/ENG/45.AICTE_Approval_2022_23.pdf" target="_blank" rel="noreferrer">F.No. Southern/1-10969562411/2022/EOA</a></td>
                                                <td className="text-center">-</td>
                                                <td className="text-center">2022-2023</td>
                                            </tr>

                                            {/* 46 */}
                                            <tr>
                                                <td className="text-center">46</td>
                                                <td>Extension of Approval</td>
                                                <td className="text-center">-</td>
                                                <td><a href="/files/iqac/Affliation & Approval/AICTE/ENG/46.AICTE_Approval_2023_24.pdf" target="_blank" rel="noreferrer">F.No. Southern/1-36526189574/2023/EOA</a></td>
                                                <td className="text-center">-</td>
                                                <td className="text-center">2023-2024</td>
                                            </tr>

                                            {/* 47 */}
                                            <tr>
                                                <td className="text-center">47</td>
                                                <td>Extension of Approval</td>
                                                <td className="text-center">-</td>
                                                <td><a href="/files/iqac/Affliation & Approval/AICTE/ENG/47.AICTE_Approval_2024_25.pdf" target="_blank" rel="noreferrer">F.No. Southern/1-43663046033/2024/EOA</a></td>
                                                <td className="text-center">-</td>
                                                <td className="text-center">2024-2025</td>
                                            </tr>

                                             {/* 48 */}
                                            <tr>
                                                <td className="text-center">48</td>
                                                <td>Extension of Approval</td>
                                                <td className="text-center">-</td>
                                                <td><a href="/files/iqac/Affliation & Approval/AICTE/ENG/48.AICTE_Approval_2025_26.pdf" target="_blank" rel="noreferrer">F.No. Southern/1-44643325568/2025/EOA</a></td>
                                                <td className="text-center">-</td>
                                                <td className="text-center">2025-2026</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}
                        {activeSubTab === 'MBA' && (
                            <div className="full_page">
                                <h4 className="heading">AICTE Approvals for MBA</h4>
                                <div className="table-responsive wide-table">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th className="text-center">Sl. No.</th>
                                                <th>Course</th>
                                                <th className="text-center">Sanctioned Intake</th>
                                                <th>AICTE Approval No.</th>
                                                <th className="text-center">Date of Approval</th>
                                                <th className="text-center">Period of Approval</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/* 1 */}
                                            <tr>
                                                <td className="text-center">1</td>
                                                <td>M.B.A</td>
                                                <td className="text-center">40</td>
                                                <td><a href="/files/iqac/Affliation & Approval/AICTE/MBA/MBA-001-1994-96 20firt 20approval 31.03.1994.pdf" target="_blank" rel="noreferrer">F.No: 453/BII/BOS( M)/94 23880</a></td>
                                                <td className="text-center">31.03.1994</td>
                                                <td className="text-center">1994-1995</td>
                                            </tr>
                                            {/* 2 */}
                                            <tr>
                                                <td className="text-center">2</td>
                                                <td>M.B.A</td>
                                                <td className="text-center">40</td>
                                                <td><a href="/files/iqac/Affliation & Approval/AICTE/MBA/MBA-002-1996-97-98 20ext of approval 07.06.1996.pdf" target="_blank" rel="noreferrer">F.No: 431/45-3/MCP(M)/94</a></td>
                                                <td className="text-center">13.06.1996</td>
                                                <td className="text-center">1995-1996</td>
                                            </tr>
                                            {/* 3 */}
                                            <tr>
                                                <td className="text-center">3</td>
                                                <td>M.B.A</td>
                                                <td className="text-center">40 to 60</td>
                                                <td><a href="/files/iqac/Affliation & Approval/AICTE/MBA/MBA-003-1996-97 20ext of approval increase in intkae 40 to 60 06.11.1996.pdf" target="_blank" rel="noreferrer">F.No: 431/45-3/MCP-APR(M)/96</a></td>
                                                <td className="text-center">06.11.1996</td>
                                                <td className="text-center">1996-1997</td>
                                            </tr>
                                            {/* 4 */}
                                            <tr>
                                                <td className="text-center">4</td>
                                                <td>M.B.A</td>
                                                <td className="text-center">60</td>
                                                <td><a href="/files/iqac/Affliation & Approval/AICTE/MBA/MBA-004-1998-99  ext  of approval 20.07.1998.pdf" target="_blank" rel="noreferrer">F.No: 431/45-3/MCP-(M)/94</a></td>
                                                <td className="text-center">20.07.1998</td>
                                                <td className="text-center">1998-1999</td>
                                            </tr>
                                            {/* 5 */}
                                            <tr>
                                                <td className="text-center">5</td>
                                                <td>M.B.A</td>
                                                <td className="text-center">60</td>
                                                <td><a href="/files/iqac/Affliation & Approval/AICTE/MBA/MBA-005-1999-2000 20ext of approval 18.08.1999 20005.pdf" target="_blank" rel="noreferrer">F.No: 431/45-3/MCP-(M)/94</a></td>
                                                <td className="text-center">18.08.1999</td>
                                                <td className="text-center">1999-2000</td>
                                            </tr>
                                            {/* 6 */}
                                            <tr>
                                                <td className="text-center">6</td>
                                                <td>M.B.A</td>
                                                <td className="text-center">60</td>
                                                <td><a href="/files/iqac/Affliation & Approval/AICTE/MBA/MBA-006-2000-2003 EXT OF APPROVAL 16.07.2000.pdf" target="_blank" rel="noreferrer">F.No: 431/45-3/MCP-(M)/94</a></td>
                                                <td className="text-center">16.07.2000</td>
                                                <td className="text-center">2000-2001</td>
                                            </tr>
                                            {/* 7 */}
                                            <tr>
                                                <td className="text-center">7</td>
                                                <td>M.B.A</td>
                                                <td className="text-center">60</td>
                                                <td><a href="/files/iqac/Affliation & Approval/AICTE/MBA/MBA-007-2001-2003 EXTENSION OF APPROVAL 19.06.2001.pdf" target="_blank" rel="noreferrer">F.No: 431/45-3/MCP-(M)/94</a></td>
                                                <td className="text-center">19.06.2001</td>
                                                <td className="text-center">2001-2003</td>
                                            </tr>
                                            {/* 8 */}
                                            <tr>
                                                <td className="text-center">8</td>
                                                <td>M.B.A</td>
                                                <td className="text-center">60</td>
                                                <td><a href="/files/iqac/Affliation & Approval/AICTE/MBA/MBA-008-2003-2006 EXTENSION OF APPROVAL 07.05.2003.pdf" target="_blank" rel="noreferrer">F.No: 431/45-3/MCP-(M)/94</a></td>
                                                <td className="text-center">07.05.2003</td>
                                                <td className="text-center">2003-2006</td>
                                            </tr>
                                            {/* 9 */}
                                            <tr>
                                                <td className="text-center">9</td>
                                                <td>M.B.A</td>
                                                <td className="text-center">60</td>
                                                <td><a href="/files/iqac/Affliation & Approval/AICTE/MBA/MBA-009-2005-2006 EOA APPROVAL ALONGWITH E&T APPROVAL 19.09.2005.pdf" target="_blank" rel="noreferrer">F.No : 730-52-230 (E)/ET/97</a></td>
                                                <td className="text-center">19.09.2005</td>
                                                <td className="text-center">2005-2006</td>
                                            </tr>
                                            {/* 10 */}
                                            <tr>
                                                <td className="text-center">10</td>
                                                <td>M.B.A</td>
                                                <td className="text-center">60</td>
                                                <td><a href="/files/iqac/Affliation & Approval/AICTE/MBA/MBA-010-2006-2007 EOA & CONDITIONAL APPROVAL REMOVED STATUS25.05.2006.pdf" target="_blank" rel="noreferrer">F.No: 431/45-2/MCP(M)/94</a></td>
                                                <td className="text-center">25.05.2006</td>
                                                <td className="text-center">2006-2007</td>
                                            </tr>
                                            {/* 11 */}
                                            <tr>
                                                <td className="text-center">11</td>
                                                <td>M.B.A</td>
                                                <td className="text-center">60</td>
                                                <td><a href="/files/iqac/Affliation & Approval/AICTE/MBA/MBA-011-2007-2008 EXTENSION OF APPROVAL 10.05.2007.pdf" target="_blank" rel="noreferrer">F.No: 431/45-2/MCP(M)/94</a></td>
                                                <td className="text-center">10.05.2007</td>
                                                <td className="text-center">2007-2008</td>
                                            </tr>
                                            {/* 12 */}
                                            <tr>
                                                <td className="text-center">12</td>
                                                <td>M.B.A</td>
                                                <td className="text-center">60 to 120</td>
                                                <td><a href="/files/iqac/Affliation & Approval/AICTE/MBA/MBA-012-2007-2008 INCREASE IN INTAKE  60 TO 120 24.08.2007.pdf" target="_blank" rel="noreferrer">F.No: 431/45-2/MCP(M)/94</a></td>
                                                <td className="text-center">24.08.2007</td>
                                                <td className="text-center">2007-2008</td>
                                            </tr>
                                            {/* 13 */}
                                            <tr>
                                                <td className="text-center">13</td>
                                                <td>M.B.A</td>
                                                <td className="text-center">120</td>
                                                <td><a href="/files/iqac/Affliation & Approval/AICTE/MBA/MBA-013-2008-2009 extension of approval 17.06.2008.pdf" target="_blank" rel="noreferrer">F.No: 431/45-2/MCP(M)/94</a></td>
                                                <td className="text-center">17.06.2008</td>
                                                <td className="text-center">2008-2009</td>
                                            </tr>
                                            {/* 14 */}
                                            <tr>
                                                <td className="text-center">14</td>
                                                <td>M.B.A</td>
                                                <td className="text-center">120</td>
                                                <td><a href="/files/iqac/Affliation & Approval/AICTE/MBA/MBA-014-2009-2012 EXTENSION OF APPROVAL 02.06.2009.pdf" target="_blank" rel="noreferrer">F.No: 431/45-2/MCP(M)/94</a></td>
                                                <td className="text-center">02.06.2009</td>
                                                <td className="text-center">2009-2012</td>
                                            </tr>
                                            {/* 15 */}
                                            <tr>
                                                <td className="text-center">15</td>
                                                <td>M.B.A</td>
                                                <td className="text-center">120</td>
                                                <td><a href="/files/iqac/Affliation & Approval/AICTE/MBA/MBA-015-2010-2011 EXTENSION OF APPROVAL 23.08.2010.pdf" target="_blank" rel="noreferrer">Southern Region/1-10174461/2010/EOA</a></td>
                                                <td className="text-center">23.08.2010</td>
                                                <td className="text-center">2010-2011</td>
                                            </tr>
                                            {/* 16 */}
                                            <tr>
                                                <td className="text-center">16</td>
                                                <td>M.B.A</td>
                                                <td className="text-center">120</td>
                                                <td><a href="/files/iqac/Affliation & Approval/AICTE/MBA/MBA-016-2011-2012 EXTENSION OF APPROVAL 01.09.2011.pdf" target="_blank" rel="noreferrer">F.No: Southern/1-428254321/2011/EOA</a></td>
                                                <td className="text-center">01.09.2011</td>
                                                <td className="text-center">2011-2012</td>
                                            </tr>
                                            {/* 17 */}
                                            <tr>
                                                <td className="text-center">17</td>
                                                <td>M.B.A</td>
                                                <td className="text-center">120</td>
                                                <td><a href="/files/iqac/Affliation & Approval/AICTE/MBA/MBA-017-2012-2013 Extension of approval 10.05.2012.pdf" target="_blank" rel="noreferrer">F.No: Southern/1-709001562/2012/EOA</a></td>
                                                <td className="text-center">10.05.2012</td>
                                                <td className="text-center">2012-2013</td>
                                            </tr>
                                            {/* 18 */}
                                            <tr>
                                                <td className="text-center">18</td>
                                                <td>M.B.A</td>
                                                <td className="text-center">120</td>
                                                <td><a href="/files/iqac/Affliation & Approval/AICTE/MBA/MBA-018-2013-2014 Extension of approval 19.03.2013.pdf" target="_blank" rel="noreferrer">F.No: Southern/1-1406862122/2013/EOA</a></td>
                                                <td className="text-center">19.03.2013</td>
                                                <td className="text-center">2013-2014</td>
                                            </tr>
                                            {/* 19 */}
                                            <tr>
                                                <td className="text-center">19</td>
                                                <td>M.B.A</td>
                                                <td className="text-center">120</td>
                                                <td><a href="/files/iqac/Affliation & Approval/AICTE/MBA/MBA-019-2014-2015 Extension of approval 4.6.2014.pdf" target="_blank" rel="noreferrer">F.No: Southern/1-2017025665/2014/EOA</a></td>
                                                <td className="text-center">04.06.2014</td>
                                                <td className="text-center">2014-2015</td>
                                            </tr>
                                            {/* 20 */}
                                            <tr>
                                                <td className="text-center">20</td>
                                                <td>M.B.A</td>
                                                <td className="text-center">120</td>
                                                <td><a href="/files/iqac/Affliation & Approval/AICTE/MBA/MBA-019-2015-2016 Extension of approval 07.06.2015.pdf" target="_blank" rel="noreferrer">F.No: Southern/1-2454242505/ 2015/EOA</a></td>
                                                <td className="text-center">07.04.2015</td>
                                                <td className="text-center">2015-2016</td>
                                            </tr>
                                            {/* 21 */}
                                            <tr>
                                                <td className="text-center">21</td>
                                                <td>M.B.A</td>
                                                <td className="text-center">120</td>
                                                <td><a href="/files/iqac/Affliation & Approval/AICTE/MBA/MBA-020-2016-2017 Extension of Approval 25.04.2016.pdf" target="_blank" rel="noreferrer">F.No: Southern/1-2810903855/2016/EOA</a></td>
                                                <td className="text-center">25.04.2016</td>
                                                <td className="text-center">2016-2017</td>
                                            </tr>
                                            {/* 22 */}
                                            <tr>
                                                <td className="text-center">22</td>
                                                <td>M.B.A</td>
                                                <td className="text-center">120</td>
                                                <td><a href="/files/iqac/Affliation & Approval/AICTE/MBA/MBA-021-2017-2018 Extension of Approval 20.04.2017.pdf" target="_blank" rel="noreferrer">F.No: Southern/1-3324836349/2017/EOA</a></td>
                                                <td className="text-center">30.03.2017</td>
                                                <td className="text-center">2017-2018</td>
                                            </tr>
                                            {/* 23 */}
                                            <tr>
                                                <td className="text-center">23</td>
                                                <td>M.B.A</td>
                                                <td className="text-center">120</td>
                                                <td><a href="/files/iqac/Affliation & Approval/AICTE/MBA/MBA-022-2018-2019 Extension of Approval 21.04.2018.pdf" target="_blank" rel="noreferrer">F.No. Southern/1-3517173811/2018/EOA</a></td>
                                                <td className="text-center">04.04.2018</td>
                                                <td className="text-center">2018-2019</td>
                                            </tr>
                                            {/* 24 */}
                                            <tr>
                                                <td className="text-center">24</td>
                                                <td>M.B.A</td>
                                                <td className="text-center">120</td>
                                                <td><a href="/files/iqac/Affliation & Approval/AICTE/MBA/MBA-023-2019-2020 Extension of Approval 04.05.2019.pdf" target="_blank" rel="noreferrer">F.No. Southern/1-4262183587/2019/EOA</a></td>
                                                <td className="text-center">10.04.2019</td>
                                                <td className="text-center">2019-2020</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}
                        {activeSubTab === 'MCA' && (
                            <div className="full_page">
                                <h4 className="heading">AICTE Approvals for MCA</h4>
                                <div className="table-responsive wide-table">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th className="text-center">Sl. No.</th>
                                                <th>Name of the Course</th>
                                                <th className="text-center">Sanctioned Intake</th>
                                                <th>AICTE Approval No. with Date</th>
                                                <th className="text-center">Date of AICTE approval</th>
                                                <th className="text-center">Period of Approval</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/* 01 */}
                                            <tr>
                                                <td className="text-center">01.</td>
                                                <td>MCA</td>
                                                <td className="text-center">30</td>
                                                <td><a href="/files/iqac/Affliation & Approval/AICTE/MCA/MCA-001-1995-96 20first 20approval 16.08.1995.pdf" target="_blank" rel="noreferrer">F.No. 411/TN-27/APR(CS)/BOS/95</a></td>
                                                <td className="text-center">16.08.1995</td>
                                                <td className="text-center">1995-1996</td>
                                            </tr>
                                            {/* 02 */}
                                            <tr>
                                                <td className="text-center">02.</td>
                                                <td>MCA</td>
                                                <td className="text-center">30</td>
                                                <td><a href="/files/iqac/Affliation & Approval/AICTE/MCA/MCA-002-1996-97 20ext of approval 01.07.1996.pdf" target="_blank" rel="noreferrer">F.No. TN-27/MCP/APR(CS)/95</a></td>
                                                <td className="text-center">01.07.1996</td>
                                                <td className="text-center">1996-1997</td>
                                            </tr>
                                            {/* 03 */}
                                            <tr>
                                                <td className="text-center">03.</td>
                                                <td>MCA</td>
                                                <td className="text-center">30</td>
                                                <td><a href="/files/iqac/Affliation & Approval/AICTE/MCA/MCA-003-1997-98 20ext of approval 1997-98 18.06.1997.pdf" target="_blank" rel="noreferrer">F.No. 411/TN-27/BOS(CS)/95</a></td>
                                                <td className="text-center">18.06.1997</td>
                                                <td className="text-center">1997-1998</td>
                                            </tr>
                                            {/* 04 */}
                                            <tr>
                                                <td className="text-center">04.</td>
                                                <td>MCA</td>
                                                <td className="text-center">30</td>
                                                <td><a href="/files/iqac/Affliation & Approval/AICTE/MCA/MCA-004-1998-99 20ext of approval 21.07.1998.pdf" target="_blank" rel="noreferrer">F.No. 411/TN-27/BOS(CS)/95</a></td>
                                                <td className="text-center">21.07.1998</td>
                                                <td className="text-center">1998-1999</td>
                                            </tr>
                                            {/* 05 */}
                                            <tr>
                                                <td className="text-center">05.</td>
                                                <td>MCA</td>
                                                <td className="text-center">30 to 60</td>
                                                <td><a href="/files/iqac/Affliation & Approval/AICTE/MCA/MCA-005-1998-99 20ext of approval   & increase in intake 30 to 60 09.09.1998.pdf" target="_blank" rel="noreferrer">F.No. 411/TN-27/APR(CS)/BOS/95</a></td>
                                                <td className="text-center">09.09.1998</td>
                                                <td className="text-center">1998-1999</td>
                                            </tr>
                                            {/* 06 */}
                                            <tr>
                                                <td className="text-center">06.</td>
                                                <td>MCA</td>
                                                <td className="text-center">60</td>
                                                <td><a href="/files/iqac/Affliation & Approval/AICTE/MCA/MCA-006-1999-2001 EXT OF APPROVAL 16.07.1999.pdf" target="_blank" rel="noreferrer">F.No. 411/TN-27/BOS(CS)/95</a></td>
                                                <td className="text-center">16.07.1999</td>
                                                <td className="text-center">1999-2001</td>
                                            </tr>
                                            {/* 07 */}
                                            <tr>
                                                <td className="text-center">07.</td>
                                                <td>MCA</td>
                                                <td className="text-center">60</td>
                                                <td><a href="/files/iqac/Affliation & Approval/AICTE/MCA/MCA-007-2001-2002 EXT OF APPROVAL 21.06.2001.pdf" target="_blank" rel="noreferrer">F.No. 411/TN-27/BOS(CS)/95</a></td>
                                                <td className="text-center">21.06.2001</td>
                                                <td className="text-center">2001-2002</td>
                                            </tr>
                                            {/* 08 */}
                                            <tr>
                                                <td className="text-center">08.</td>
                                                <td>MCA</td>
                                                <td className="text-center">60</td>
                                                <td><a href="/files/iqac/Affliation & Approval/AICTE/MCA/MCA-008-2002-2005 EXT OF APPROVAL 19.06.2002.pdf" target="_blank" rel="noreferrer">F.No. 411/TN-27/BOS(CS)/95</a></td>
                                                <td className="text-center">19.06.2002</td>
                                                <td className="text-center">2002-2005</td>
                                            </tr>
                                            {/* 09 */}
                                            <tr>
                                                <td className="text-center">09.</td>
                                                <td>MCA</td>
                                                <td className="text-center">60</td>
                                                <td><a href="/files/iqac/Affliation & Approval/AICTE/MCA/MCA-009-2005-2006 EOA APPROVAL ALONGWITH E&T APPROVAL 19.09.2005.pdf" target="_blank" rel="noreferrer">F.No.730-52-230(E)/ET/97</a></td>
                                                <td className="text-center">19.09.2005</td>
                                                <td className="text-center">2005-2006</td>
                                            </tr>
                                            {/* 10 */}
                                            <tr>
                                                <td className="text-center">10.</td>
                                                <td>MCA</td>
                                                <td className="text-center">60</td>
                                                <td><a href="/files/iqac/Affliation & Approval/AICTE/MCA/MCA-010-2006-2007 EXT OF APPROVAL 25.05.2006.pdf" target="_blank" rel="noreferrer">F.No.411/TN-27/BOS(CS)/95</a></td>
                                                <td className="text-center">25.05.2006</td>
                                                <td className="text-center">2006-2007</td>
                                            </tr>
                                            {/* 11 */}
                                            <tr>
                                                <td className="text-center">11.</td>
                                                <td>MCA</td>
                                                <td className="text-center">60</td>
                                                <td><a href="/files/iqac/Affliation & Approval/AICTE/MCA/MCA-011-2007-2008 EXT OF APPROVAL 10.05.2007.pdf" target="_blank" rel="noreferrer">F.No.411/TN-27/BOS(CS)/95</a></td>
                                                <td className="text-center">10.05.2007</td>
                                                <td className="text-center">2007-2008</td>
                                            </tr>
                                            {/* 12 */}
                                            <tr>
                                                <td className="text-center">12.</td>
                                                <td>MCA</td>
                                                <td className="text-center">60 to 120</td>
                                                <td><a href="/files/iqac/Affliation & Approval/AICTE/MCA/MCA-012-2007-2008 INCREASE IN INTAKE 60 TO 120 24.08.2007.pdf" target="_blank" rel="noreferrer">F.No.411/TN-27/BOS(CS)/95</a></td>
                                                <td className="text-center">24.08.2007</td>
                                                <td className="text-center">2007-2008</td>
                                            </tr>
                                            {/* 13 */}
                                            <tr>
                                                <td className="text-center">13.</td>
                                                <td>MCA</td>
                                                <td className="text-center">120</td>
                                                <td><a href="/files/iqac/Affliation & Approval/AICTE/MCA/MCA-013-2008-2011 EXT OF APPROVAL 08.05.2008.pdf" target="_blank" rel="noreferrer">F.No.411/TN-27/BOS(CS)/95</a></td>
                                                <td className="text-center">08.05.2008</td>
                                                <td className="text-center">2008-2011</td>
                                            </tr>
                                            {/* 14 */}
                                            <tr>
                                                <td className="text-center">14.</td>
                                                <td>MCA</td>
                                                <td className="text-center">120</td>
                                                <td><a href="/files/iqac/Affliation & Approval/AICTE/MCA/MCA-014-2010-2011EXTENSION OF APPROVAL 23.08.2010.pdf" target="_blank" rel="noreferrer">No.Southern Region/1-7351981/2010/EOA</a></td>
                                                <td className="text-center">23.08.2010</td>
                                                <td className="text-center">2010-2011</td>
                                            </tr>
                                            {/* 15 */}
                                            <tr>
                                                <td className="text-center">15.</td>
                                                <td>MCA</td>
                                                <td className="text-center">120</td>
                                                <td><a href="/files/iqac/Affliation & Approval/AICTE/MCA/MCA-015-2011-2012 EXTENSION OF APPROVAL 01.09.2011.pdf" target="_blank" rel="noreferrer">F.No.Southern/1-404525611/ 2011/EOA</a></td>
                                                <td className="text-center">01.09.2011</td>
                                                <td className="text-center">2011-2012</td>
                                            </tr>
                                            {/* 16 */}
                                            <tr>
                                                <td className="text-center">16.</td>
                                                <td>MCA</td>
                                                <td className="text-center">120</td>
                                                <td><a href="/files/iqac/Affliation & Approval/AICTE/MCA/MCA-016-2012-2013 Extension of approval 10.05.2012.pdf" target="_blank" rel="noreferrer">F.No.Southern/ 1-708969902/ 2012/EOA</a></td>
                                                <td className="text-center">10.05.2012</td>
                                                <td className="text-center">2012-2013</td>
                                            </tr>
                                            {/* 17 */}
                                            <tr>
                                                <td className="text-center">17.</td>
                                                <td>MCA</td>
                                                <td className="text-center">120</td>
                                                <td><a href="/files/iqac/Affliation & Approval/AICTE/MCA/MCA-017-2013-2014 Extension of approval 19.03.2013.pdf" target="_blank" rel="noreferrer">F.No.Southern/1-1364281481/ 2013/EOA</a></td>
                                                <td className="text-center">19.03.2013</td>
                                                <td className="text-center">2013-2014</td>
                                            </tr>
                                            {/* 18 */}
                                            <tr>
                                                <td className="text-center">18.</td>
                                                <td>MCA</td>
                                                <td className="text-center">120</td>
                                                <td><a href="/files/iqac/Affliation & Approval/AICTE/MCA/MCA-018-2014-2015 Extension of approval 04.06.2014.pdf" target="_blank" rel="noreferrer">F.No. Southern/1-2017309969/2014/EOA</a></td>
                                                <td className="text-center">04.06.2014</td>
                                                <td className="text-center">2014-2015</td>
                                            </tr>
                                            {/* 19 */}
                                            <tr>
                                                <td className="text-center">19.</td>
                                                <td>MCA</td>
                                                <td className="text-center">120</td>
                                                <td><a href="/files/iqac/Affliation & Approval/AICTE/MCA/MCA-019-2015-2016 Extension of approval 07.06.2015.pdf" target="_blank" rel="noreferrer">F.No. Southern/1-2454396050/ 2015/EOA</a></td>
                                                <td className="text-center">07.06.2015</td>
                                                <td className="text-center">2015-2016</td>
                                            </tr>
                                            {/* 20 */}
                                            <tr>
                                                <td className="text-center">20.</td>
                                                <td>MCA</td>
                                                <td className="text-center">120</td>
                                                <td><a href="/files/iqac/Affliation & Approval/AICTE/MCA/MCA-020-2016-2017 Extension of Approval 25.04.2016.pdf" target="_blank" rel="noreferrer">F.No. Southern/1-2811121697/2016/EOA</a></td>
                                                <td className="text-center">25.04.2016</td>
                                                <td className="text-center">2016-2017</td>
                                            </tr>
                                            {/* 21 */}
                                            <tr>
                                                <td className="text-center">21.</td>
                                                <td>MCA</td>
                                                <td className="text-center">120</td>
                                                <td><a href="/files/iqac/Affliation & Approval/AICTE/MCA/MCA-021-2017-2018 Extension of Approval 20.04.2017.pdf" target="_blank" rel="noreferrer">F.No. Southern/1-3324892934/2017/EOA</a></td>
                                                <td className="text-center">30.02.2017</td>
                                                <td className="text-center">2017-2018</td>
                                            </tr>
                                            {/* 22 */}
                                            <tr>
                                                <td className="text-center">22.</td>
                                                <td>MCA</td>
                                                <td className="text-center">120</td>
                                                <td><a href="/files/iqac/Affliation & Approval/AICTE/MCA/MCA-022-2018-2019 Extension of Approval 21.04.2018.pdf" target="_blank" rel="noreferrer">F.No. Southern/1-3517174181/2018/EOA</a></td>
                                                <td className="text-center">04.04.2018</td>
                                                <td className="text-center">2018-2019</td>
                                            </tr>
                                            {/* 23 */}
                                            <tr>
                                                <td className="text-center">23.</td>
                                                <td>MCA</td>
                                                <td className="text-center">120</td>
                                                <td><a href="/files/iqac/Affliation & Approval/AICTE/MCA/MCA-023-2019-2020 Extension of Approval 04.05.2019.pdf" target="_blank" rel="noreferrer">F.No. Southern/1-4262184852/2019/EOA</a></td>
                                                <td className="text-center">10.04.2019</td>
                                                <td className="text-center">2019-2020</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            );
        }
    };

    return (
        <div className="iqac-wrapper">
            <Navbar />
            <div className="iqac-container container-fluid p-0">
                <IqacNavbar />
                <div className="iqac-content fade-in-up">
                    <h1 className="iqac-section-title text-center">Affiliation and Approvals</h1>
                    <div className="iqac-title-divider"></div>

                    <div className="iqac-card overview-card no-border shadow-none">
                        <div className="iqac-card-body p-0">
                            <p className="alignment-justify iqac-text">
                                Affiliation under a university is a formal process through which academic institutions gain recognition and accreditation to offer programs and confer degrees that are officially validated by the university. This affiliation ensures that the educational standards and quality of the affiliated institutions align with the university's guidelines and regulations. Kongu Engineering College was established in the year 1984, approved by AICTE, New Delhi, and affiliated with Anna University, Chennai. Initially, it was affiliated with Bharathiar University up to 2000. Subsequently, it was affiliated with Anna University from 2001. The college was granted autonomous status from 2007 by UGC.
                            </p>
                        </div>
                    </div>

                    <div className="iqac-card affiliation-tabs-card">
                        <div className="iqac-card-body p-4">
                            {/* Main Tabs Navigation */}
                            <div className="tab-nav outer-tab-nav">
                                <button
                                    className={`tab-link ${activeMainTab === 'autonomous' ? 'active' : ''}`}
                                    onClick={() => setActiveMainTab('autonomous')}
                                >
                                    Autonomous
                                </button>
                                <button
                                    className={`tab-link ${activeMainTab === 'au' ? 'active' : ''}`}
                                    onClick={() => setActiveMainTab('au')}
                                >
                                    AU Affiliation
                                </button>
                                <button
                                    className={`tab-link ${activeMainTab === 'aicte' ? 'active' : ''}`}
                                    onClick={() => setActiveMainTab('aicte')}
                                >
                                    AICTE
                                </button>
                            </div>

                            {/* Main Tabs Content */}
                            <div className="tab-render-area">
                                {renderContent()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default IqacAffiliation;
