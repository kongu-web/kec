import React, { useState, useEffect } from "react";
import Navbar from '../../HomePage/navbar/Navbar';
import Footer from '../../HomePage/Footer/Footer';
import IqacNavbar from '../IqacNavbar';
import '../IQAC.css';
import './IqacNba.css';

const API_URL = ((typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')) ? 'http://localhost:8000' : (process.env.REACT_APP_API_URL || 'https://api.kongu.edu'));

const IqacNba = () => {
    const [dbData, setDbData] = useState([]);
    const [dcsData, setDcsData] = useState([]);

    useEffect(() => {
        fetch(`${API_URL}/kec/nba`)
            .then(res => {
                if (!res.ok) throw new Error("Failed to fetch NBA records");
                return res.json();
            })
            .then(data => {
                if (Array.isArray(data)) {
                    setDbData(data.filter(item => item && item.file_path && String(item.file_path).trim().length > 0));
                }
            })
            .catch(err => {
                console.error("Error fetching NBA records", err);
            });

        fetch(`${API_URL}/kec/nba/dcs`)
            .then(res => res.json())
            .then(data => {
                if (Array.isArray(data)) {
                    setDcsData(data.filter(item => item && item.file_path && String(item.file_path).trim().length > 0));
                }
            })
            .catch(err => {
                console.error("Error fetching NBA DCS documents", err);
            });
    }, []);

    const accreditationData = React.useMemo(() => {
        // Program Order list for consistent sorting
        const programOrder = [
            "B.E. Mechanical Engineering",
            "B.E. Electronics and Communication Engineering",
            "B.E. Electronics and Instrumentation Engineering",
            "B.Tech. Chemical Engineering",
            "B.E. Mechatronics Engineering",
            "B.E. Computer Science and Engineering",
            "B.Tech. Information Technology",
            "B.E. Electrical and Electronics Engineering",
            "B.Tech. Food Technology",
            "B.E. Civil Engineering",
            "B.E. Automobile Engineering",
            "MBA"
        ];

        const groups = {};

        // Append dynamic dbData to groups (uploaded by admin only)
        dbData.forEach(item => {
            if (!item.programme) return;
            if (!groups[item.programme]) {
                groups[item.programme] = [];
            }
            groups[item.programme].push({
                id: item.id,
                letter: item.letter,
                period: item.period,
                pdf: item.file_path
            });
        });

        const ordered = [];
        let slNo = 1;

        programOrder.forEach(prog => {
            if (groups[prog]) {
                ordered.push({
                    slNo: slNo++,
                    programme: prog,
                    letters: groups[prog]
                });
                delete groups[prog];
            }
        });

        Object.keys(groups).forEach(prog => {
            ordered.push({
                slNo: slNo++,
                programme: prog,
                letters: groups[prog]
            });
        });

        return ordered;
    }, [dbData]);

    return (
        <div className="iqac-wrapper">
            <Navbar />
            <div className="iqac-container container-fluid p-0">
                <IqacNavbar />
                <div className="iqac-content">
                    <h1 className="iqac-section-title">The National Board of Accreditation (NBA)</h1>

                    <div className="iqac-card">
                        <h2 className="iqac-card-title">NBA - DCS</h2>
                        <div className="iqac-card-body">
                            {dcsData.length === 0 ? (
                                <p className="text-muted mb-0">No DCS documents available.</p>
                            ) : (
                                <div className="row">
                                    {dcsData.map((doc, idx) => {
                                        const downloadUrl = !doc.file_path ? '#' : (
                                            doc.file_path.startsWith('http://') || doc.file_path.startsWith('https://')
                                                ? doc.file_path
                                                : (doc.file_path.startsWith('/') ? `${API_URL}${doc.file_path}` : `${API_URL}/${doc.file_path}`)
                                        );
                                        return (
                                            <div key={idx} className="col-md-4 col-sm-6 mb-3">
                                                <a
                                                    href={downloadUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="file-card h-100"
                                                >
                                                    <div className="file-icon-wrapper">
                                                        <i className="fa-regular fa-file-pdf"></i>
                                                    </div>
                                                    <span className="file-name">{doc.title}</span>
                                                    <i className="fa-solid fa-download download-icon"></i>
                                                </a>
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="iqac-card">
                        <h2 className="iqac-card-title">Programs Accredited by NBA</h2>
                        <div className="iqac-card-body p-0">
                            {accreditationData.length === 0 ? (
                                <p className="text-muted p-4 mb-0">No NBA accreditation records uploaded yet.</p>
                            ) : (
                                <div className="nba-table-wrapper">
                                    <table className="nba-table" cellSpacing="0" cellPadding="0">
                                    <thead>
                                        <tr>
                                            <th>S.No</th>
                                            <th>Name of the Programme</th>
                                            <th>NBA Letter No. and Date</th>
                                            <th>Accreditation Period</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {accreditationData.map((item, index) => (
                                            <React.Fragment key={index}>
                                                {item.letters.map((letterItem, lIndex) => {
                                                    const downloadUrl = !letterItem.pdf ? '#' : (
                                                        letterItem.pdf.startsWith('http://') || letterItem.pdf.startsWith('https://')
                                                            ? letterItem.pdf
                                                            : (letterItem.pdf.startsWith('/') ? `${API_URL}${letterItem.pdf}` : `${API_URL}/${letterItem.pdf}`)
                                                    );
                                                    return (
                                                        <tr key={`${index}-${lIndex}`}>
                                                            {lIndex === 0 && (
                                                                <>
                                                                    <td rowSpan={item.letters.length} className="text-center font-weight-bold sn-col">
                                                                        {item.slNo}
                                                                    </td>
                                                                    <td rowSpan={item.letters.length} className="prog-col">
                                                                        {item.programme}
                                                                    </td>
                                                                </>
                                                            )}
                                                            <td className="letter-col">
                                                                <a href={downloadUrl} target="_blank" rel="noopener noreferrer" className="nba-link">
                                                                    <i className="fa-solid fa-file-pdf mr-2"></i>
                                                                    {letterItem.letter}
                                                                </a>
                                                            </td>
                                                            <td className="period-col">{letterItem.period}</td>
                                                        </tr>
                                                    );
                                                })}
                                            </React.Fragment>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            )}
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    );
};
export default IqacNba;
