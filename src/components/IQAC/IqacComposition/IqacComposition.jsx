import React from 'react';
import Navbar from '../../HomePage/navbar/Navbar';
import Footer from '../../HomePage/Footer/Footer';
import IqacNavbar from '../IqacNavbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import '../IQAC.css';
import './IqacComposition.css';

const teamMembers = [
    {
        id: 'principal',
        name: 'Dr.R.Parameshwaran',
        role: 'Chairman, IQAC',
        image: '/assets/iqac/Team/parameshwaran.webp',
        link: 'https://docs.google.com/document/u/2/d/e/2PACX-1vTe3K-ddwT5IklzhB0e-tc5tqOhlwkGBJNWmRPVZDNFcd0-IeEeUkjK83plS6k8nA/pub'
    },
    {
        id: '1',
        name: 'Dr.N.Senthilnathan',
        role: 'Dean, IQAC',
        image: '/assets/iqac/Team/senthilnathan.webp',
        link: '//sites.google.com/a/kongu.edu/eee-dept/'
    },
    {
        id: '2',
        name: 'Dr.P.Nirmala devi',
        role: 'Coordinator, IQAC',
        image: '/assets/iqac/Team/nirmaladevi.webp',
        link: 'https://sites.google.com/a/kongu.edu/p-nirmala-devi/'
    },
     {
        id: '3',
        name: 'Dr.P.Sundharesalingam',
        role: 'Coordinator, IQAC',
        image: '/assets/iqac/Team/sundharesalingam.webp',
        link: 'https://sites.google.com/a/kongu.edu/sundaresalingam-mba/'
    },
    {
        id: '4',
        name: 'Dr.V.Surendar',
        role: 'Coordinator, IQAC',
        image: '/assets/iqac/Team/surendar.webp',
        link: 'https://sites.google.com/a/kongu.edu/surendar-v/'
    },
    {
        id: '5',
        name: 'Dr.B.Venkatesan',
        role: 'Coordinator, IQAC',
        image: '/assets/iqac/Team/venkatesan.webp',
        link: 'https://sites.google.com/a/kongu.edu/venkatesan-balakrishnan/'
    },
   
    {
        id: '6',
        name: 'Dr.P.Ravichandran',
        role: 'Coordinator, IQAC',
        image: '/assets/iqac/Team/ravichandran.webp',
        link: 'https://sites.google.com/a/kongu.edu/ravichandran-mts/'
    },
    {
        id: '7',
        name: 'Dr.N.Sasipriyaa',
        role: 'Coordinator, IQAC',
        image: '/assets/iqac/Team/sasipriyaa.webp',
        link: 'https://sites.google.com/a/kongu.edu/sasipriya/'
    },
    {
        id: '8',
        name: 'N.Dhivya bharathi',
        role: 'Coordinator, IQAC',
        image: '/assets/iqac/Team/dhivyabharathi.webp',
        link: 'https://sites.google.com/a/kongu.edu/dhivya-bharathi-food-technology/'
    },
    {
        id: '9',
        name: 'K.S.Parthasarathi',
        role: 'Coordinator, IQAC',
        image: '/assets/iqac/Team/parthasarathi.webp',
        link: '-'
    },
    {
        id: '10',
        name: 'P.Ananthi',
        role: 'Coordinator, IQAC',
        image: '/assets/iqac/Team/ananthi.webp',
        link: 'https://docs.google.com/document/d/e/2PACX-1vS5FFf7_UfYT4PF1a5ySn647zlbZMaQZ4Z6b-cbx0YmEV1oTjIBtAIJ8xMXR1Vxvg/pub'
    },
     {
        id: '11',
        name: 'E.Sowmiya',
        role: 'Coordinator, IQAC',
        image: '/assets/iqac/Team/sowmiya.webp',
        link: 'https://docs.google.com/document/d/e/2PACX-1vQg5hECooDHuglo3a63pf6YGhu7lyC2T0hNOUQCOKm5x5_zJhdbP_9JjrtX3iqkeA/pub'
    }
];

const staffMembers = [
    {
        name: 'M.Shankar',
        role: 'DataEntry Operator, IQAC',
        image: '/assets/iqac/Team/Shankar.jpeg'
    },
    {
        name: 'K.Hemanath',
        role: 'Office Assistant, IQAC',
        image: '/assets/iqac/Team/Hemanath.jpeg'
    }
];

const formationFiles = [
    '2023.pdf',
    '2022.pdf',
    '2020.pdf',
    '2017.pdf',
    '2015.pdf'
];

const IqacComposition = () => {
    const handleCardClick = (link) => {
        if (link) {
            window.open(link, '_blank');
        }
    };

    return (
        <div className="iqac-wrapper">
            <Navbar />
            <div className="iqac-container container-fluid p-0">
                <IqacNavbar />

                <div className="iqac-content">
                    <h2 className="iqac-section-title">Composition Of IQAC</h2>
                    <p>The composition of the IQAC in KEC is as follows:</p>
                    <div className="iqac-composition-list">
                        <ul className="mb-0">
                            <li><b>Chairperson:</b> Head of the Institution</li>
                            <li>A few senior administrative officers</li>
                            <li>Three to eight teachers</li>
                            <li>One member from the Management</li>
                            <li>One/two nominees from local society, students, and alumni</li>
                            <li>One/two nominees from employers, industrialists, or stakeholders</li>
                            <li>The Chief Coordinator of the IQAC</li>
                        </ul>
                    </div>

                    <h2 className="iqac-section-title text-center">TEAM IQAC @ KEC</h2>

                    {/* Faculty Grid */}
                    <div className="row justify-content-center p-3">
                        {teamMembers.map((member) => (
                            <div key={member.id} className="col-lg-3 col-md-4 col-sm-6 mb-4 d-flex justify-content-center">
                                <div
                                    className="iqac-composition-card"
                                    style={{ cursor: member.link ? 'pointer' : 'default' }}
                                    onClick={() => handleCardClick(member.link)}
                                >
                                    <div className="iqac-card-accent"></div>
                                    <div className="iqac-profile-container">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="iqac-profile-img"
                                        />
                                        <div className="iqac-member-name">{member.name}</div>
                                        <div className="iqac-member-role">{member.role}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Staff Grid */}
                    <div className="row justify-content-center p-3">
                        {staffMembers.map((member, index) => (
                            <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-4 d-flex justify-content-center">
                                <div className="iqac-composition-card">
                                    <div className="iqac-card-accent"></div>
                                    <div className="iqac-profile-container">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="iqac-profile-img"
                                        />
                                        <div className="iqac-member-name">{member.name}</div>
                                        <div className="iqac-member-role">{member.role}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>



                    <div className="iqac-card">
                        <h2 className="iqac-card-title">Formation of IQAC</h2>
                        <div className="iqac-card-body">
                            <div className="file-grid">
                                {formationFiles.map((file, idx) => (
                                    <a
                                        key={idx}
                                        href={`/files/iqac/Formation of IQAC/${file}`}
                                        className="file-card"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <div className="file-icon-wrapper">
                                            <i className="fa-regular fa-file-pdf"></i>
                                        </div>
                                        <span className="file-name">{file}</span>
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

export default IqacComposition;
