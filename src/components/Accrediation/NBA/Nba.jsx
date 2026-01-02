import React, { useState, useEffect } from "react";
import "./Nba.css";
import Navbar from "../../HomePage/navbar/Navbar";
import Footer from "../../HomePage/Footer/Footer";
import ScrollToTopButton from "../../ScrollToTopButton";
import Section from "../../HomePage/Section/Section";

import nba18042022 from "../../../assets/docs/Nba/KEC_nba_18_04_2022.pdf";
import nba22062022 from "../../../assets/docs/Nba/KEC_nba_22_06_22.pdf";
import nba28112022 from "../../../assets/docs/Nba/KEC_nba_28_11_22.pdf";
import nbaAuto19102022 from "../../../assets/docs/Nba/KEC_NBA_AUTO_19_10_2022.pdf";
import nbaMBA12122022 from "../../../assets/docs/Nba/KEC_NBA_MBA_12_12_2022.pdf";
import nba03012024 from "../../../assets/docs/Nba/NBA_Accreditation_Letter_03012024.pdf";
import nba28052020 from "../../../assets/docs/Nba/NBA_Accreditation_Letter_28052020.pdf";
import nba05082021 from "../../../assets/docs/Nba/NBA_ECE_CHEM_MECH_EIE_05082021.pdf";
import nba11062018 from "../../../assets/docs/Nba/NBA_KEC_11.06.2018.pdf";
import nba11092020 from "../../../assets/docs/Nba/NBA_KEC_11.09.2020_MECH_ECE_CHEM_EIE_oneyearextension.pdf";
import nba13102017 from "../../../assets/docs/Nba/NBA_KEC_13.10.2017.pdf";
import Spinner from "../../Spinner";
import "../../../App.css";

const accreditationData = [
  {
    slNo: 1,
    programme: "B.E. Mechanical Engineering",
    letters: [
      {
        letter: "F.No. 33-50-2010-NBA dated 18.04.2022",
        period: "From 2022-2023 to 2024-2025",
        pdf: nba18042022,
      },
      {
        letter: "F.No. 33-50-2010-NBA dated 05.08.2021",
        period: "From 2021-2022",
        pdf: nba05082021,
      },
      {
        letter: "F.No. 33-50-2010-NBA dated 11.09.2020",
        period: "From 2020-2021",
        pdf: nba11092020,
      },
      {
        letter: "F.No. 33-50-2010-NBA dated 11.06.2018",
        period: "From 2017-2018 to 2019-2020",
        pdf: nba11062018,
      },
    ],
  },
  {
    slNo: 2,
    programme: "B.E. Electronics and Communication Engineering",
    letters: [
      {
        letter: "F.No. 33-50-2010-NBA dated 18.04.2022",
        period: "From 2022-2023 to 2024-2025",
        pdf: nba18042022,
      },
      {
        letter: "F.No. 33-50-2010-NBA dated 05.08.2021",
        period: "From 2021-2022",
        pdf: nba05082021,
      },
      {
        letter: "F.No. 33-50-2010-NBA dated 11.09.2020",
        period: "From 2020-2021",
        pdf: nba11092020,
      },
      {
        letter: "F.No. 33-50-2010-NBA dated 11.06.2018",
        period: "From 2017-2018 to 2019-2020",
        pdf: nba11062018,
      },
    ],
  },
  {
    slNo: 3,
    programme: "B.E. Electronics and Instrumentation Engineering",
    letters: [
      {
        letter: "F.No. 33-50-2010-NBA dated 18.04.2022",
        period: "From 2022-2023 to 2024-2025",
        pdf: nba18042022,
      },
      {
        letter: "F.No. 33-50-2010-NBA dated 05.08.2021",
        period: "From 2021-2022",
        pdf: nba05082021,
      },
      {
        letter: "F.No. 33-50-2010-NBA dated 11.09.2020",
        period: "From 2020-2021",
        pdf: nba11092020,
      },
      {
        letter: "F.No. 33-50-2010-NBA dated 11.06.2018",
        period: "From 2017-2018 to 2019-2020",
        pdf: nba11062018,
      },
    ],
  },
  {
    slNo: 4,
    programme: "B.Tech. Chemical Engineering",
    letters: [
      {
        letter: "F.No. 33-50-2010-NBA dated 18.04.2022",
        period: "From 2022-2023 to 2024-2025",
        pdf: nba18042022,
      },
      {
        letter: "F.No. 33-50-2010-NBA dated 05.08.2021",
        period: "From 2021-2022",
        pdf: nba05082021,
      },
      {
        letter: "F.No. 33-50-2010-NBA dated 11.09.2020",
        period: "From 2020-2021",
        pdf: nba11092020,
      },
      {
        letter: "F.No. 33-50-2010-NBA dated 11.06.2018",
        period: "From 2017-2018 to 2019-2020",
        pdf: nba11062018,
      },
    ],
  },
  {
    slNo: 5,
    programme: "B.E. Mechatronics",
    letters: [
      {
        letter: "F.No. 33-50-2010-NBA dated 03.01.2024",
        period: "From 2023-2024 to 2028-2029",
        pdf: nba03012024,
      },
      {
        letter: "F.No. 33-50-2010-NBA dated 28.05.2020",
        period: "From 2020-2021 to 2022-2023",
        pdf: nba28052020,
      },
      {
        letter: "F.No. 33-50-2010-NBA dated 13.10.2017",
        period: "From 2017-2018 to 2019-2020",
        pdf: nba13102017,
      },
    ],
  },
  {
    slNo: 6,
    programme: "B.E. Computer Science and Engineering",
    letters: [
      {
        letter: "F.No. 33-50-2010-NBA dated 03.01.2024",
        period: "From 2023-2024 to 2025-2026",
        pdf: nba03012024,
      },
      {
        letter: "F.No. 33-50-2010-NBA dated 28.05.2020",
        period: "From 2020-2021 to 2022-2023",
        pdf: nba28052020,
      },
      {
        letter: "F.No. 33-50-2010-NBA dated 13.10.2017",
        period: "From 2017-2018 to 2019-2020",
        pdf: nba13102017,
      },
    ],
  },
  {
    slNo: 7,
    programme: "B.Tech. Information Technology",
    letters: [
      {
        letter: "F.No. 33-50-2010-NBA dated 03.01.2024",
        period: "From 2023-2024 to 2025-2026",
        pdf: nba03012024,
      },
      {
        letter: "F.No. 33-50-2010-NBA dated 28.05.2020",
        period: "From 2020-2021 to 2022-2023",
        pdf: nba28052020,
      },
      {
        letter: "F.No. 33-50-2010-NBA dated 13.10.2017",
        period: "From 2017-2018 to 2019-2020",
        pdf: nba13102017,
      },
    ],
  },
  {
    slNo: 8,
    programme: "B.E. Electrical and Electronics Engineering",
    letters: [
      {
        letter: "F.No. 33-50-2010-NBA dated 03.01.2024",
        period: "From 2023-2024 to 2025-2026",
        pdf: nba03012024,
      },
      {
        letter: "F.No. 33-50-2010-NBA dated 28.05.2020",
        period: "From 2020-2021 to 2022-2023",
        pdf: nba28052020,
      },
      {
        letter: "F.No. 33-50-2010-NBA dated 13.10.2017",
        period: "From 2017-2018 to 2019-2020",
        pdf: nba13102017,
      },
    ],
  },
  {
    slNo: 9,
    programme: "B.Tech. Food Technology",
    letters: [
      {
        letter: "F.No. 33-50-2010-NBA dated 03.01.2024",
        period: "From 2023-2024 to 2028-2029",
        pdf: nba03012024,
      },
      {
        letter: "F.No. 33-50-2010-NBA dated 28.05.2020",
        period: "From 2020-2021 to 2022-2023",
        pdf: nba28052020,
      },
      {
        letter: "F.No. 33-50-2010-NBA dated 13.10.2017",
        period: "From 2017-2018 to 2019-2020",
        pdf: nba13102017,
      },
    ],
  },
  {
    slNo: 10,
    programme: "BE Civil Engineering",
    letters: [
      {
        letter: "F.No. 33-50-2010-NBA dated 18.04.2022",
        period: "From 2022-2023 to 2024-2025",
        pdf: nba18042022,
      },
    ],
  },
  {
    slNo: 11,
    programme: "BE Automobile Engineering",
    letters: [
      {
        letter: "F.No. 33-50-2010-NBA dated 19.10.2022",
        period: "From 2022-2023 to 2024-2025",
        pdf: nbaAuto19102022,
      },
    ],
  },
  {
    slNo: 12,
    programme: "MBA",
    letters: [
      {
        letter: "F.No. 33-50-2010-NBA dated 12.12.2022",
        period: "From 2022-2023 to 2024-2025",
        pdf: nbaMBA12122022,
      },
    ],
  },
];

const Nba = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return loading ? (
    <Spinner />
  ) : (
    <>
      {/* <Section/> */}
      <Navbar />
      <div className="nba-container">
        <h2 className="page-title">
          Program Bharathidasan University Affiliation
        </h2>
        {accreditationData.map((item) => (
          <div key={item.slNo} className="nba-programme">
            <h3 className="page-sub_title">
              {item.slNo}. {item.programme}
            </h3>
            <ul>
              {item.letters.map((l, idx) => (
                <li key={idx}>
                  <a href={l.pdf} target="_blank" rel="noopener noreferrer">
                    <strong>{l.letter}</strong>
                  </a>{" "}
                  — {l.period}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default Nba;
