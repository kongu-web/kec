import React from "react";
import Navbar from '../../HomePage/navbar/Navbar';
import Footer from '../../HomePage/Footer/Footer';
import IqacNavbar from '../IqacNavbar';
import '../IQAC.css';
import './IqacNba.css';

const IqacNba = () => {
    // Define base path for documents (per-programme subfolders)
    const docPath = "/assets/docs/Nba/";

    const accreditationData = [
        {
            slNo: 1,
            programme: "B.E. Mechanical Engineering",
            letters: [
                 { letter: "F.No. 33-50-2010-NBA dated 15.04.2025", period: "From 2025-2026 to 2027-2028", pdf: `${docPath}MECH/7.F.No.33-50-2010 NBA dated 15.04.2025.pdf` },
                { letter: "F.No. 33-50-2010-NBA dated 18.04.2022", period: "From 2022-2023 to 2024-2025", pdf: `${docPath}MECH/6.F.No.33-50-2010 NBA dated 18.04.2022.pdf` },
                { letter: "F.No. 33-50-2010-NBA dated 11.06.2018", period: "From 2017-2018 to 2019-2020", pdf: `${docPath}MECH/5.F.No.33-50-2010 NBA dated 11.06.2018.pdf` },
                { letter: "F.No. 33-50-2010-NBA dated 08.07.2016", period: "From 2016-2017", pdf: `${docPath}MECH/4.F.No.33-50-2010 NBA dated 08.07.2016.pdf` },
                { letter: "F.No. 33-50-2010-NBA dated 22.09.2014", period: "From 2014-2015 to 2015-2016", pdf: `${docPath}MECH/3.F.No.33-50-2010 NBA dated 22.09.2014.pdf` },
                { letter: "F.No. NBA ACCR-666-04 dated 22.01.2008", period: "From 2008-2009 to 2010-2011", pdf: `${docPath}MECH/2.F.No. NBA ACCR-666-04 dated 22.01.2008.pdf` },
                { letter: "F.No. NBA 23rd-BRD-ATR-2001 dated 21.11.2001", period: "From 2001-2002", pdf: `${docPath}MECH/1.F.No. NBA 23rd-BRD-ATR-2001dated 21.11.2001.pdf` },
            ]
        },
        {
            slNo: 2,
            programme: "B.E. Electronics and Communication Engineering",
            letters: [
                { letter: "F.No. 33-50-2010-NBA dated 15.04.2025", period: "From 2025-2026 to 2027-2028", pdf: `${docPath}ECE/7.F.No.33-50-2010 NBA dated 15.04.2025.pdf` },
                { letter: "F.No. 33-50-2010-NBA dated 18.04.2022", period: "From 2022-2023 to 2024-2025", pdf: `${docPath}ECE/6.F.No.33-50-2010 NBA dated 18.04.2022.pdf` },
                { letter: "F.No. 33-50-2010-NBA dated 11.06.2018", period: "From 2017-2018 to 2019-2020", pdf: `${docPath}ECE/5.F.No.33-50-2010 NBA dated 11.06.2018.pdf` },
                { letter: "F.No. 33-50-2010-NBA dated 08.07.2016", period: "From 2016-2017", pdf: `${docPath}ECE/4.F.No.33-50-2010 NBA dated 08.07.2016.pdf` },
                { letter: "F.No. 33-50-2010-NBA dated 22.09.2014", period: "From 2014-2015 to 2015-2016", pdf: `${docPath}ECE/3.F.No.33-50-2010 NBA dated 22.09.2014.pdf` },
                { letter: "F.No. NBA ACCR-666-04 dated 22.01.2008", period: "From 2008-2009 to 2010-2011", pdf: `${docPath}ECE/2.F.No. NBA ACCR-666-04 dated 22.01.2008.pdf` },
                { letter: "F.No. NBA 23rd-BRD-ATR-2001 dated 21.11.2001", period: "From 2001-2002", pdf: `${docPath}ECE/1.F.No. NBA 23rd-BRD-ATR-2001dated 21.11.2001.pdf` },
            ]
        },
        {
            slNo: 3,
            programme: "B.E. Electronics and Instrumentation Engineering",
            letters: [
                { letter: "F.No. 33-50-2010-NBA dated 15.04.2025", period: "From 2025-2026 to 2027-2028", pdf: `${docPath}EIE/7.F.No.33-50-2010 NBA dated 15.04.2025.pdf` },
                { letter: "F.No. 33-50-2010-NBA dated 18.04.2022", period: "From 2022-2023 to 2024-2025", pdf: `${docPath}EIE/6.F.No.33-50-2010 NBA dated 18.04.2022.pdf` },
                { letter: "F.No. 33-50-2010-NBA dated 11.06.2018", period: "From 2017-2018 to 2019-2020", pdf: `${docPath}EIE/5.F.No.33-50-2010 NBA dated 11.06.2018.pdf` },
                { letter: "F.No. 33-50-2010-NBA dated 08.07.2016", period: "From 2016-2017", pdf: `${docPath}EIE/4.F.No.33-50-2010 NBA dated 08.07.2016.pdf` },
                { letter: "F.No. 33-50-2010-NBA dated 22.09.2014", period: "From 2014-2015 to 2015-2016", pdf: `${docPath}EIE/3.F.No.33-50-2010 NBA dated 22.09.2014.pdf` },
                { letter: "F.No. NBA ACCR-666-2004 dated 02.06.2009", period: "From 2009-2010 to 2011-2012", pdf: `${docPath}EIE/2.F.No. NBA ACCR-666-2004 dated 02.06.2009.pdf` },
                { letter: "F.No. NBA ACCR-666-2004 dated 15.09.2004", period: "From 2004-2005", pdf: `${docPath}EIE/1.F.No. NBA ACCR-666-2004 dated 15.09.2004.pdf` },
            ]
        },
        {
            slNo: 4,
            programme: "B.Tech. Chemical Engineering",
            letters: [
                { letter: "F.No. 33-50-2010-NBA dated 15.04.2025", period: "From 2025-2026 to 2027-2028", pdf: `${docPath}CHEMICAL/7.F.No.33-50-2010 NBA dated 15.04.2025.pdf` },
                { letter: "F.No. 33-50-2010-NBA dated 18.04.2022", period: "From 2022-2023 to 2024-2025", pdf: `${docPath}CHEMICAL/6.F.No.33-50-2010 NBA dated 18.04.2022.pdf` },
                { letter: "F.No. 33-50-2010-NBA dated 11.06.2018", period: "From 2017-2018 to 2019-2020", pdf: `${docPath}CHEMICAL/5.F.No.33-50-2010 NBA dated 11.06.2018.pdf` },
                { letter: "F.No. 33-50-2010-NBA dated 08.07.2016", period: "From 2016-2017", pdf: `${docPath}CHEMICAL/4.F.No.33-50-2010 NBA dated 08.07.2016.pdf` },
                { letter: "F.No. 33-50-2010-NBA dated 03.06.2014", period: "From 2014-2015 to 2015-2016", pdf: `${docPath}CHEMICAL/3.F.No.33-50-2010 NBA dated 03.06.2014.pdf` },
                { letter: "F.No. NBA ACCR-666-04 dated 22.01.2008", period: "From 2008-2009 to 2010-2011", pdf: `${docPath}CHEMICAL/2.F.No. NBA ACCR-666-04 dated 22.01.2008.pdf` },
                { letter: "F.No. NBA 23rd-BRD ATR-2001 dated 21.11.2001", period: "From 2001-2002", pdf: `${docPath}CHEMICAL/1.F.No. NBA 23rd-BRD ATR-2001 21.11.2001.pdf` },
            ]
        },
        {
            slNo: 5,
            programme: "B.E. Mechatronics Engineering",
            letters: [
                { letter: "F.No. 33-50-2010-NBA dated 03.01.2024", period: "From 2023-2024 to 2028-2029", pdf: `${docPath}MTS/5.F.No.33-50-2010 NBA dated 03.01.2024.pdf` },
                { letter: "F.No. 33-50-2010-NBA dated 28.05.2020", period: "From 2020-2021 to 2022-2023", pdf: `${docPath}MTS/4.F.No.33-50-2010 NBA dated 28.05.2020.pdf` },
                { letter: "F.No. 33-50-2010-NBA dated 13.10.2017", period: "From 2017-2018 to 2019-2020", pdf: `${docPath}MTS/3.F.No.33-50-2010 NBA dated 13.10.2017.pdf` },
                { letter: "F.No. NBA ACCR-666-2004 dated 02.06.2009", period: "From 2009-2010 to 2011-2012", pdf: `${docPath}MTS/2.F.No. NBA ACCR-666-2004 dated 02.06.2009.pdf` },
                { letter: "F.No. NBA ACCR-666-2004 dated 15.09.2004", period: "From 2004-2005", pdf: `${docPath}MTS/1.F.No. NBA ACCR-666-2004 dated 15.09.2004.pdf` },
            ]
        },
        {
            slNo: 6,
            programme: "B.E. Computer Science and Engineering",
            letters: [
                { letter: "F.No. 33-50-2010-NBA dated 03.01.2024", period: "From 2023-2024 to 2025-2026", pdf: `${docPath}CSE/6.F.No.33-50-2010 NBA dated 03.01.2024.pdf` },
                { letter: "F.No. 33-50-2010-NBA dated 28.05.2020", period: "From 2020-2021 to 2022-2023", pdf: `${docPath}CSE/5.F.No.33-50-2010 NBA dated 28.05.2020.pdf` },
                { letter: "F.No. 33-50-2010-NBA dated 13.10.2017", period: "From 2017-2018 to 2019-2020", pdf: `${docPath}CSE/4.F.No.33-50-2010 NBA dated 13.10.2017.pdf` },
                { letter: "F.No. 33-50-2010-NBA dated 17.09.2012", period: "From 2012-2013 to 2014-2015", pdf: `${docPath}CSE/3.F.No.33-50-2010 NBA dated 17.09.2012.pdf` },
                { letter: "F.No. NBA ACCR-666-2005 dated 19.09.2006", period: "From 2006-2007 to 2008-2009", pdf: `${docPath}CSE/2.F.No. NBA ACCR-666-2005 dated 19.09.2006.pdf` },
                { letter: "F.No. NBA 24-BRD-ATR-2002 dated 13.05.2002", period: "From 2002-2003", pdf: `${docPath}CSE/1.F.No. NBA 24-BRD-ATR-2002dated 13.05.2002.pdf` },
            ]
        },
        {
            slNo: 7,
            programme: "B.Tech. Information Technology",
            letters: [
                { letter: "F.No. 33-50-2010-NBA dated 03.01.2024", period: "From 2023-2024 to 2025-2026", pdf: `${docPath}IT/5.F.No.33-50-2010 NBA dated 03.01.2024.pdf` },
                { letter: "F.No. 33-50-2010-NBA dated 28.05.2020", period: "From 2020-2021 to 2022-2023", pdf: `${docPath}IT/4.F.No.33-50-2010 NBA dated 28.05.2020.pdf` },
                { letter: "F.No. 33-50-2010-NBA dated 13.10.2017", period: "From 2017-2018 to 2019-2020", pdf: `${docPath}IT/3.F.No.33-50-2010 NBA dated 13.10.2017.pdf` },
                { letter: "F.No. NBA ACCR-666-2004 dated 02.06.2009", period: "From 2009-2010 to 2011-2012", pdf: `${docPath}IT/2.F.No. NBA ACCR-666-2004 dated 02.06.2009.pdf` },
                { letter: "F.No. NBA ACCR-666-2004 dated 15.09.2004", period: "From 2004-2005", pdf: `${docPath}IT/1.F.No. NBA ACCR-666-2004 dated15.09.2004.pdf` },
            ]
        },
        {
            slNo: 8,
            programme: "B.E. Electrical and Electronics Engineering",
            letters: [
                { letter: "F.No. 33-50-2010-NBA dated 03.01.2024", period: "From 2023-2024 to 2025-2026", pdf: `${docPath}EEE/6.F.No.33-50-2010 NBA dated 03.01.2024.pdf` },
                { letter: "F.No. 33-50-2010-NBA dated 28.05.2020", period: "From 2020-2021 to 2022-2023", pdf: `${docPath}EEE/5.F.No.33-50-2010 NBA dated 28.05.2020.pdf` },
                { letter: "F.No. 33-50-2010-NBA dated 13.10.2017", period: "From 2017-2018 to 2019-2020", pdf: `${docPath}EEE/4.F.No.33-50-2010 NBA dated 13.10.2017.pdf` },
                { letter: "F.No. 33-50-2010-NBA dated 17.09.2012", period: "From 2012-2013 to 2014-2015", pdf: `${docPath}EEE/3.F.No.33-50-2010 NBA dated 17.09.2012.pdf` },
                { letter: "F.No. NBA ACCR-666-2005 dated 19.09.2006", period: "From 2006-2007 to 2008-2009", pdf: `${docPath}EEE/2.F.No. NBA ACCR-666-2005 dated 19.09.2006.pdf` },
                { letter: "F.No. NBA 23rd-BRD-ATR 2001 dated 21.11.2001", period: "From 2001-2002", pdf: `${docPath}EEE/1.F.No. NBA 23rd-BRD-ATR 2001dated 21.11.2001.pdf` },
            ]
        },
        {
            slNo: 9,
            programme: "B.Tech. Food Technology",
            letters: [
                { letter: "F.No. 33-50-2010-NBA dated 03.01.2024", period: "From 2023-2024 to 2028-2029", pdf: `${docPath}FT/3.F.No.33-50-2010 NBA dated 03.01.2024.pdf` },
                { letter: "F.No. 33-50-2010-NBA dated 28.05.2020", period: "From 2020-2021 to 2022-2023", pdf: `${docPath}FT/2.F.No.33-50-2010 NBA dated 28.05.2020.pdf` },
                { letter: "F.No. 33-50-2010-NBA dated 13.10.2017", period: "From 2017-2018 to 2019-2020", pdf: `${docPath}FT/1.F.No.33-50-2010 NBA dated 13.10.2017.pdf` },
            ]
        },
        {
            slNo: 10,
            programme: "B.E. Civil Engineering",
            letters: [
                { letter: "F.No. 33-50-2010-NBA dated 15.04.2025", period: "From 2025-2026 to 2027-2028", pdf: `${docPath}CIVIL/7.F.No.33-50-2010 NBA dated 15.04.2025.pdf` },
                { letter: "F.No. 33-50-2010-NBA dated 18.04.2022", period: "From 2022-2023 to 2024-2025", pdf: `${docPath}CIVIL/6.F.No.33-50-2010 NBA dated 18.04.2022.pdf` },
                { letter: "F.No. 33-50-2010-NBA dated 11.06.2018", period: "From 2017-2018 to 2019-2020", pdf: `${docPath}CIVIL/5.F.No.33-50-2010 NBA dated 11.06.2018.pdf` },
                { letter: "F.No. 33-50-2010-NBA dated 08.07.2016", period: "From 2016-2017", pdf: `${docPath}CIVIL/4.F.No.33-50-2010 NBA dated 08.07.2016.pdf` },
                { letter: "F.No. 33-50-2010-NBA dated 03.06.2014", period: "From 2014-2015 to 2015-2016", pdf: `${docPath}CIVIL/3.F.No.33-50-2010 NBA dated 03.06.2014.pdf` },
                { letter: "F.No. NBA ACCR-666-04 dated 22.01.2008", period: "From 2008-2009 to 2010-2011", pdf: `${docPath}CIVIL/2.F.No. NBA ACCR-666-04 dated 22.01.2008.pdf` },
                { letter: "F.No. NBA 23rd-BRD-ATR-2001 dated 21.11.2001", period: "From 2001-2002", pdf: `${docPath}CIVIL/1.F.No. NBA 23rd-BRD-ATR-2001dated 21.11.2001.pdf` },
            ]
        },
        {
            slNo: 11,
            programme: "B.E. Automobile Engineering",
            letters: [
                { letter: "F.No. 33-50-2010-NBA dated 15.04.2025", period: "From 2025-2026 to 2027-2028", pdf: `${docPath}AUTO/2.F.No.33-50-2010 NBA dated 15.04.2025.pdf` },
                { letter: "F.No. 33-50-2010-NBA dated 19.10.2022", period: "From 2022-2023 to 2024-2025", pdf: `${docPath}AUTO/1.F.No.33-50-2010 NBA dated 19.10.2022.pdf` },
            ]
        },
        {
            slNo: 12,
            programme: "MBA",
            letters: [
                { letter: "F.No. 33-50-2010-NBA dated 12.12.2022", period: "From 2022-2023 to 2024-2025", pdf: `${docPath}MBA/2.F.No.33-50-2010 NBA dated 12.12.2022.pdf` },
                { letter: "F.No. NBA 24-BRD-ATR-2002 dated 13.05.2002", period: "From 2002-2003", pdf: `${docPath}MBA/1.F.No. NBA 24-BRD-ATR-2002dated 13.05.2002.pdf` },
            ]
        },
           {
            slNo: 13,
            programme: "MCA",
            letters: [
                { letter: "F.No. 33-50-2010-NBA dated 12.06.2026", period: "From 2026-2028", pdf: `${docPath}MCA/1.F.No. 33-50-2010-NBA dated 12.06.2026.pdf` },
            ]
        },
    ];

    return (
        <div className="iqac-wrapper">
            <Navbar />
            <div className="iqac-container container-fluid p-0">
                <IqacNavbar />
                <div className="iqac-content">
                    <h1 className="iqac-section-title">The National Board of Accreditation (NBA)</h1>

                    {/* <div className="iqac-card">
                        <h2 className="iqac-card-title">About NBA</h2>
                        <div className="iqac-card-body">
                            <p className="alignment-justify iqac-text">
                                The National Board of Accreditation (NBA), India was initially established by the All India Council of Technical Education (AICTE) under section 10(u) of AICTE Act, in the year 1994, in order to assess the qualitative competence of the programs offered by educational institution from diploma level to post-graduate level in engineering and technology, management, pharmacy, architecture and related disciplines, which are approved by AICTE. NBA came into existence as an independent autonomous body with effect from 7th January 2010 with the objectives of assurance of quality and relevance to technical education, especially of the programs in professional and technical disciplines, i.e., Engineering and Technology, Management, Architecture, Pharmacy and Hotel Management and Catering Technology, through the mechanism of accreditation of programs offered by technical institutions.
                            </p>
                            <p className="alignment-justify iqac-text mt-3">
                                On June 13, 2014, the National Board of Accreditation (NBA) of India became a permanent signatory member of the Washington Accord. The undergraduate and postgraduate programs accredited by the NBA under Tier-1 are eligible for recognition by other signatories of the Washington Accord.
                            </p>
                        </div>
                    </div> */}

                    <div className="iqac-card">
                        <h2 className="iqac-card-title">NBA @ KEC</h2>
                        <div className="iqac-card-body">
                            <p className="alignment-justify iqac-text">
                                KEC association with NBA dated back to 2001. Since 2001 all eligible programs have been accredited time to time. When NBA came under Washington accord, Kongu Engineering College was one among the few intuitions accredited by the new framework. Presently Kongu Engineering College offers 14 undergraduate (UG) programs and 8 postgraduate (PG) programs in Engineering and Technology. Out of these, 11 UG programs and MBA program were accredited under Tier I.
                            </p>
                        </div>
                    </div>

                    
                      <div className="iqac-card">
    <h2 className="iqac-card-title">NBA - DCS</h2>

    <div className="iqac-card-body">
        <div className="file-grid">

            <a
                href="/files/iqac/Nba-dcs/B.E - Computer Science and Engineering.pdf"
                className="file-card"
                target="_blank"
                rel="noopener noreferrer"
            >
                <div className="file-icon-wrapper">
                    <i className="fa-regular fa-file-pdf"></i>
                </div>
                <span className="file-name">B.E - Computer Science and Engineering</span>
                <i className="fa-solid fa-download download-icon"></i>
            </a>

            <a
                href="/files/iqac/Nba-dcs/B.E - Electrical and Electronics Engineering.pdf"
                className="file-card"
                target="_blank"
                rel="noopener noreferrer"
            >
                <div className="file-icon-wrapper">
                    <i className="fa-regular fa-file-pdf"></i>
                </div>
                <span className="file-name">B.E - Electrical and Electronics Engineering</span>
                <i className="fa-solid fa-download download-icon"></i>
            </a>

            <a
                href="/files/iqac/Nba-dcs/B.Tech - Information Technology.pdf"
                className="file-card"
                target="_blank"
                rel="noopener noreferrer"
            >
                <div className="file-icon-wrapper">
                    <i className="fa-regular fa-file-pdf"></i>
                </div>
                <span className="file-name">B.Tech - Information Technology</span>
                <i className="fa-solid fa-download download-icon"></i>
            </a>

        </div>
    </div>
</div>

                    <div className="iqac-card">
                        <h2 className="iqac-card-title">Programs Accredited by NBA</h2>
                        <div className="iqac-card-body p-0">
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
                                                {item.letters.map((letterItem, lIndex) => (
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
                                                            <a href={letterItem.pdf} target="_blank" rel="noopener noreferrer" className="nba-link">
                                                                <i className="fa-solid fa-file-pdf mr-2"></i>
                                                                {letterItem.letter}
                                                            </a>
                                                        </td>
                                                        <td className="period-col">{letterItem.period}</td>
                                                    </tr>
                                                ))}
                                            </React.Fragment>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    );
};
export default IqacNba;
