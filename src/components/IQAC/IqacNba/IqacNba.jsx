import React from "react";
import Navbar from '../../HomePage/navbar/Navbar';
import Footer from '../../HomePage/Footer/Footer';
import IqacNavbar from '../IqacNavbar';
import '../IQAC.css';
import './IqacNba.css';

const IqacNba = () => {
    // Define base path for documents
    const docPath = "/assets/docs/Nba/";

    const accreditationData = [
        {
            slNo: 1,
            programme: "B.E. Mechanical Engineering",
            letters: [
                { letter: "F.No. 33-50-2010-NBA dated 15.04.2025", period: "From 2025-2026 to 2027-2028", pdf: `${docPath}18_AUTO_CIVIL_MECH_ECE_EIE_CHEM_ 15_04_2025.pdf` },
                { letter: "F.No. 33-50-2010-NBA dated 18.04.2022", period: "From 2022-2023 to 2024-2025", pdf: `${docPath}KEC_nba_18_04_2022.pdf` },
                { letter: "F.No. 33-50-2010-NBA dated 05.08.2021", period: "For 2021-2022", pdf: `${docPath}NBA_ECE_CHEM_MECH_EIE_05082021.pdf` },
                { letter: "F.No. 33-50-2010-NBA dated 11.09.2020", period: "For 2020-2021", pdf: `${docPath}NBA_KEC_11.09.2020_MECH_ECE_CHEM_EIE_oneyearextension.pdf` },
                { letter: "F.No. 33-50-2010-NBA dated 11.06.2018", period: "From 2017-2018 to 2019-2020", pdf: `${docPath}NBA_KEC_11.06.2018.pdf` }
            ]
        },
        {
            slNo: 2,
            programme: "B.E. Electronics and Communication Engineering",
            letters: [
                { letter: "F.No. 33-50-2010-NBA dated 15.04.2025", period: "From 2025-2026 to 2027-2028", pdf: `${docPath}18_AUTO_CIVIL_MECH_ECE_EIE_CHEM_ 15_04_2025.pdf` },
                { letter: "F.No. 33-50-2010-NBA dated 18.04.2022", period: "From 2022-2023 to 2024-2025", pdf: `${docPath}KEC_nba_18_04_2022.pdf` },
                { letter: "F.No. 33-50-2010-NBA dated 05.08.2021", period: "For 2021-2022", pdf: `${docPath}NBA_ECE_CHEM_MECH_EIE_05082021.pdf` },
                { letter: "F.No. 33-50-2010-NBA dated 11.09.2020", period: "For 2020-2021", pdf: `${docPath}NBA_KEC_11.09.2020_MECH_ECE_CHEM_EIE_oneyearextension.pdf` },
                { letter: "F.No. 33-50-2010-NBA dated 11.06.2018", period: "From 2017-2018 to 2019-2020", pdf: `${docPath}NBA_KEC_11.06.2018.pdf` }
            ]
        },
        {
            slNo: 3,
            programme: "B.E. Electronics and Instrumentation Engineering",
            letters: [
                { letter: "F.No. 33-50-2010-NBA dated 15.04.2025", period: "From 2025-2026 to 2027-2028", pdf: `${docPath}18_AUTO_CIVIL_MECH_ECE_EIE_CHEM_ 15_04_2025.pdf` },
                { letter: "F.No. 33-50-2010-NBA dated 18.04.2022", period: "From 2022-2023 to 2024-2025", pdf: `${docPath}KEC_nba_18_04_2022.pdf` },
                { letter: "F.No. 33-50-2010-NBA dated 05.08.2021", period: "For 2021-2022", pdf: `${docPath}NBA_ECE_CHEM_MECH_EIE_05082021.pdf` },
                { letter: "F.No. 33-50-2010-NBA dated 11.09.2020", period: "For 2020-2021", pdf: `${docPath}NBA_KEC_11.09.2020_MECH_ECE_CHEM_EIE_oneyearextension.pdf` },
                { letter: "F.No. 33-50-2010-NBA dated 11.06.2018", period: "From 2017-2018 to 2019-2020", pdf: `${docPath}NBA_KEC_11.06.2018.pdf` }
            ]
        },
        {
            slNo: 4,
            programme: "B.Tech. Chemical Engineering",
            letters: [
                { letter: "F.No. 33-50-2010-NBA dated 15.04.2025", period: "From 2025-2026 to 2027-2028", pdf: `${docPath}18_AUTO_CIVIL_MECH_ECE_EIE_CHEM_ 15_04_2025.pdf` },
                { letter: "F.No. 33-50-2010-NBA dated 18.04.2022", period: "From 2022-2023 to 2024-2025", pdf: `${docPath}KEC_nba_18_04_2022.pdf` },
                { letter: "F.No. 33-50-2010-NBA dated 05.08.2021", period: "For 2021-2022", pdf: `${docPath}NBA_ECE_CHEM_MECH_EIE_05082021.pdf` },
                { letter: "F.No. 33-50-2010-NBA dated 11.09.2020", period: "For 2020-2021", pdf: `${docPath}NBA_KEC_11.09.2020_MECH_ECE_CHEM_EIE_oneyearextension.pdf` },
                { letter: "F.No. 33-50-2010-NBA dated 11.06.2018", period: "From 2017-2018 to 2019-2020", pdf: `${docPath}NBA_KEC_11.06.2018.pdf` }
            ]
        },
        {
            slNo: 5,
            programme: "B.E. Mechatronics Engineering",
            letters: [
                { letter: "F.No. 33-50-2010-NBA dated 03.01.2024", period: "From 2023-2024 to 2028-2029", pdf: `${docPath}NBA_Accreditation_Letter_03012024.pdf` },
                { letter: "F.No. 33-50-2010-NBA dated 28.05.2020", period: "For 2020-2021 to 2022-2023", pdf: `${docPath}NBA_Accreditation_Letter_28052020.pdf` },
                { letter: "F.No. 33-50-2010-NBA dated 13.10.2017", period: "From 2017-2018 to 2019-2020", pdf: `${docPath}NBA_KEC_13.10.2017.pdf` }
            ]
        },
        {
            slNo: 6,
            programme: "B.E. Computer Science and Engineering",
            letters: [
                { letter: "F.No. 33-50-2010-NBA dated 03.01.2024", period: "From 2023-2024 to 2025-2026", pdf: `${docPath}NBA_Accreditation_Letter_03012024.pdf` },
                { letter: "F.No. 33-50-2010-NBA dated 28.05.2020", period: "From 2020-2021 to 2022-2023", pdf: `${docPath}NBA_Accreditation_Letter_28052020.pdf` },
                { letter: "F.No. 33-50-2010-NBA dated 13.10.2017", period: "From 2017-2018 to 2019-2020", pdf: `${docPath}NBA_KEC_13.10.2017.pdf` }
            ]
        },
        {
            slNo: 7,
            programme: "B.Tech. Information Technology",
            letters: [
                { letter: "F.No. 33-50-2010-NBA dated 03.01.2024", period: "From 2023-2024 to 2025-2026", pdf: `${docPath}NBA_Accreditation_Letter_03012024.pdf` },
                { letter: "F.No. 33-50-2010-NBA dated 28.05.2020", period: "From 2020-2021 to 2022-2023", pdf: `${docPath}NBA_Accreditation_Letter_28052020.pdf` },
                { letter: "F.No. 33-50-2010-NBA dated 13.10.2017", period: "From 2017-2018 to 2019-2020", pdf: `${docPath}NBA_KEC_13.10.2017.pdf` }
            ]
        },
        {
            slNo: 8,
            programme: "B.E. Electrical and Electronics Engineering",
            letters: [
                { letter: "F.No. 33-50-2010-NBA dated 03.01.2024", period: "From 2023-2024 to 2025-2026", pdf: `${docPath}NBA_Accreditation_Letter_03012024.pdf` },
                { letter: "F.No. 33-50-2010-NBA dated 28.05.2020", period: "From 2020-2021 to 2022-2023", pdf: `${docPath}NBA_Accreditation_Letter_28052020.pdf` },
                { letter: "F.No. 33-50-2010-NBA dated 13.10.2017", period: "From 2017-2018 to 2019-2020", pdf: `${docPath}NBA_KEC_13.10.2017.pdf` }
            ]
        },
        {
            slNo: 9,
            programme: "B.Tech. Food Technology",
            letters: [
                { letter: "F.No. 33-50-2010-NBA dated 03.01.2024", period: "From 2023-2024 to 2028-2029", pdf: `${docPath}NBA_Accreditation_Letter_03012024.pdf` },
                { letter: "F.No. 33-50-2010-NBA dated 28.05.2020", period: "From 2020-2021 to 2022-2023", pdf: `${docPath}NBA_Accreditation_Letter_28052020.pdf` },
                { letter: "F.No. 33-50-2010-NBA dated 13.10.2017", period: "From 2017-2018 to 2019-2020", pdf: `${docPath}NBA_KEC_13.10.2017.pdf` }
            ]
        },
        {
            slNo: 10,
            programme: "BE Civil Engineering",
            letters: [
                { letter: "F.No. 33-50-2010-NBA dated 15.04.2025", period: "From 2025-2026 to 2027-2028", pdf: `${docPath}18_AUTO_CIVIL_MECH_ECE_EIE_CHEM_ 15_04_2025.pdf` },
                { letter: "F.No. 33-50-2010-NBA dated 18.04.2022", period: "From 2022-2023 to 2024-2025", pdf: `${docPath}KEC_nba_18_04_2022.pdf` },
            ]
        },
        {
            slNo: 11,
            programme: "BE Automobile Engineering",
            letters: [
                { letter: "F.No. 33-50-2010-NBA dated 15.04.2025", period: "From 2025-2026 to 2027-2028", pdf: `${docPath}18_AUTO_CIVIL_MECH_ECE_EIE_CHEM_ 15_04_2025.pdf` },
                { letter: "F.No. 33-50-2010-NBA dated 19.10.2022", period: "From 2022-2023 to 2024-2025", pdf: `${docPath}KEC_NBA_AUTO_19_10_2022.pdf` },
            ]
        },
        {
            slNo: 12,
            programme: "MBA",
            letters: [
                { letter: "F.No. 33-50-2010-NBA dated 12.12.2022", period: "From 2022-2023 to 2024-2025", pdf: `${docPath}KEC_NBA_MBA_12_12_2022.pdf` },
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

                    <div className="iqac-card">
                        <h2 className="iqac-card-title">About NBA</h2>
                        <div className="iqac-card-body">
                            <p className="alignment-justify iqac-text">
                                The National Board of Accreditation (NBA), India was initially established by the All India Council of Technical Education (AICTE) under section 10(u) of AICTE Act, in the year 1994, in order to assess the qualitative competence of the programs offered by educational institution from diploma level to post-graduate level in engineering and technology, management, pharmacy, architecture and related disciplines, which are approved by AICTE. NBA came into existence as an independent autonomous body with effect from 7th January 2010 with the objectives of assurance of quality and relevance to technical education, especially of the programs in professional and technical disciplines, i.e., Engineering and Technology, Management, Architecture, Pharmacy and Hotel Management and Catering Technology, through the mechanism of accreditation of programs offered by technical institutions.
                            </p>
                            <p className="alignment-justify iqac-text mt-3">
                                On June 13, 2014, the National Board of Accreditation (NBA) of India became a permanent signatory member of the Washington Accord. The undergraduate and postgraduate programs accredited by the NBA under Tier-1 are eligible for recognition by other signatories of the Washington Accord.
                            </p>
                        </div>
                    </div>

                    <div className="iqac-card">
                        <h2 className="iqac-card-title">NBA @ KEC</h2>
                        <div className="iqac-card-body">
                            <p className="alignment-justify iqac-text">
                                KEC association with NBA dated back to 2001. Since 2001 all eligible programs have been accredited time to time. When NBA came under Washington accord, Kongu Engineering College was one among the few intuitions accredited by the new framework. Presently Kongu Engineering College offers 14 undergraduate (UG) programs and 8 postgraduate (PG) programs in Engineering and Technology. Out of these, 11 UG programs and MBA program were accredited under Tier I.
                            </p>
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
