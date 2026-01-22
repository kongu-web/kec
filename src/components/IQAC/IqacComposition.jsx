import React from 'react';
import Navbar from '../HomePage/navbar/Navbar';
import Footer from '../HomePage/Footer/Footer';
import IqacNavbar from './IqacNavbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import './IQAC.css';

const teamMembers = [
    {
        id: 'principal',
        name: 'Dr.R.Parameshwaran',
        role: 'Chairman, IQAC',
        image: '/assets/iqac/Team/Dr.R.Parameshwaran.jpg',
        link: 'https://docs.google.com/document/u/2/d/e/2PACX-1vTe3K-ddwT5IklzhB0e-tc5tqOhlwkGBJNWmRPVZDNFcd0-IeEeUkjK83plS6k8nA/pub'
    },
    {
        id: '1',
        name: 'Dr.N.Senthilnathan',
        role: 'Chief Coordinator, IQAC',
        image: '/assets/iqac/Team/senthilnathan.jpg',
        link: '//sites.google.com/a/kongu.edu/eee-dept/'
    },
    {
        id: '2',
        name: 'Dr.P.Nirmala devi',
        role: 'Coordinator, IQAC',
        image: '/assets/iqac/Team/nirmaladevi.jpg',
        link: 'https://sites.google.com/a/kongu.edu/p-nirmala-devi/'
    },
    {
        id: '3',
        name: 'Dr.S J suji prasad',
        role: 'Coordinator, IQAC',
        image: '/assets/iqac/Team/sujiprasad.jpg',
        link: 'https://sites.google.com/a/kongu.edu/sjsujiprasad/'
    },
    {
        id: '4',
        name: 'Dr.T.Abirami',
        role: 'Coordinator, IQAC',
        image: '/assets/iqac/Team/abirami.jpeg',
        link: 'https://sites.google.com/kongu.edu/abirami/kec-faculty-profile'
    },
    {
        id: '6',
        name: 'Dr.V.Surendar',
        role: 'Coordinator, IQAC',
        image: '/assets/iqac/Team/surendar.jpg',
        link: 'https://sites.google.com/a/kongu.edu/surendar-v/'
    },
    {
        id: '5',
        name: 'Dr.B.Venkatesan',
        role: 'Coordinator, IQAC',
        image: '/assets/iqac/Team/venkatesan.jpg',
        link: 'https://sites.google.com/a/kongu.edu/venkatesan-balakrishnan/'
    },
    {
        id: '7',
        name: 'Dr.P.Sundharesalingam',
        role: 'Coordinator, IQAC',
        image: '/assets/iqac/Team/sundharesalingam.jpg',
        link: 'https://sites.google.com/a/kongu.edu/sundaresalingam-mba/'
    },
    {
        id: '8',
        name: 'Mr.A.Ganesh',
        role: 'Coordinator, IQAC',
        image: '/assets/iqac/Team/ganesh.jpg',
        link: 'https://sites.google.com/a/kongu.edu/ganesh-a/'
    },
    {
        id: '9',
        name: 'Ms.N.Dhivya bharathi',
        role: 'Coordinator, IQAC',
        image: '/assets/iqac/Team/diviya.jpg',
        link: 'https://sites.google.com/a/kongu.edu/dhivya-bharathi-food-technology/'
    },
    {
        id: '10',
        name: 'Ms.P.Ananthi',
        role: 'Coordinator, IQAC',
        image: '/assets/iqac/Team/Ms.P.Ananthi.png',
        link: 'https://docs.google.com/document/d/e/2PACX-1vS5FFf7_UfYT4PF1a5ySn647zlbZMaQZ4Z6b-cbx0YmEV1oTjIBtAIJ8xMXR1Vxvg/pub'
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
            <div className="iqac-container container-fluid p-4">
                <IqacNavbar />

                <div className="iqac-content">
                    <h2 className="iqac-title">COMPOSITION OF IQAC</h2>
                    <p>The composition of the IQAC in KEC is as follows:</p>
                    <ul className="mb-4">
                        <li><b>Chairperson:</b> Head of the Institution</li>
                        <li>A few senior administrative officers</li>
                        <li>Three to eight teachers</li>
                        <li>One member from the Management</li>
                        <li>One/two nominees from local society, students, and alumni</li>
                        <li>One/two nominees from employers, industrialists, or stakeholders</li>
                        <li>The Chief Coordinator of the IQAC</li>
                    </ul>

                    <h2 className="iqac-section-title text-center">TEAM IQAC @ KEC</h2>

                    {/* Faculty Grid */}
                    <div className="row justify-content-center p-3">
                        {teamMembers.map((member) => (
                            <div key={member.id} className="col-lg-3 col-md-4 col-sm-6 mb-4 d-flex justify-content-center">
                                <div
                                    className="iqac-member-card card1"
                                    style={{ width: '250px', cursor: member.link ? 'pointer' : 'default' }}
                                    onClick={() => handleCardClick(member.link)}
                                >
                                    <div className="card-border-top" style={{ borderRadius: '15px 15px 0 0', height: '5px', background: '#010582', width: '100%' }}></div>
                                    <div
                                        className="profile-image mt-3 mx-auto"
                                        style={{
                                            width: '100px',
                                            height: '100px',
                                            borderRadius: '50%',
                                            backgroundSize: 'cover',
                                            backgroundImage: `url('${member.image}')`,
                                            backgroundColor: '#f0f0f0',
                                            border: '3px solid #fff',
                                            boxShadow: '0 0 10px rgba(0,0,0,0.1)'
                                        }}
                                    ></div>
                                    <div className="mt-3">
                                        <div className="iqac-member-name">{member.name}</div>
                                        <div className="iqac-member-role text-muted small">{member.role}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Staff Grid */}
                    <div className="row justify-content-center p-3">
                        {staffMembers.map((member, index) => (
                            <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-4 d-flex justify-content-center">
                                <div
                                    className="iqac-member-card card1"
                                    style={{ width: '250px' }}
                                >
                                    <div className="card-border-top" style={{ borderRadius: '15px 15px 0 0', height: '5px', background: '#010582', width: '100%' }}></div>
                                    <div
                                        className="profile-image mt-3 mx-auto"
                                        style={{
                                            width: '100px',
                                            height: '100px',
                                            borderRadius: '50%',
                                            backgroundSize: 'cover',
                                            backgroundImage: `url('${member.image}')`,
                                            backgroundColor: '#f0f0f0',
                                            border: '3px solid #fff',
                                            boxShadow: '0 0 10px rgba(0,0,0,0.1)'
                                        }}
                                    ></div>
                                    <div className="mt-3">
                                        <div className="iqac-member-name">{member.name}</div>
                                        <div className="iqac-member-role text-muted small">{member.role}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>


                    <h2 className="iqac-section-title">FORMATION OF IQAC</h2>
                    <div className="iqac-file-grid">
                        {formationFiles.map((file, idx) => (
                            <a
                                key={idx}
                                href={`/files/iqac/Formation of IQAC/${file}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="iqac-file-link"
                            >
                                <FontAwesomeIcon icon={faFilePdf} className="iqac-file-icon" />
                                {file}
                            </a>
                        ))}
                    </div>

                    <div className="mt-5 text-center text-muted small">
                        <p>Developed By Karan T - 22ITR041 - Department of Information Technology</p>
                        <p>Maintained by IQAC Cell</p>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    );
};

export default IqacComposition;
