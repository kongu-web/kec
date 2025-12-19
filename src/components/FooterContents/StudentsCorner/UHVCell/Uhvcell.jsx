import React from "react";
import "./Uhvcell.css";
import Section from "../../../HomePage/Section/Section";
import Navbar from "../../../HomePage/navbar/Navbar";
import Footer from "../../../HomePage/Footer/Footer";
import ScrollToTopButton from "../../../ScrollToTopButton";
import "../../../../App.css";

const data = [
  {
    "": {
      Chairman: "Dr. R. Parameshwaran, Principal / 9942820583",
      Convener: "Dr. G. Murugesan, CCO-Academic / 9865273774",
      Coordinator: "Dr. S. Varadhaganapathy, IT / 9443034110",
    },
    "Faculty Representatives": {
      Members: [
        "Dr. S. Manoj / Civil",
        "Mr. A. Saravanan / Mechanical",
        "Dr. N. Muralidharan / Mechatronics",
        "Dr. K. S. Karthi Vinith / Automobile",
        "Dr. M. Sivachitra / EEE",
        "Dr. R. Rajkumar / EIE",
        "Dr. K. Kavin Kumar / ECE",
        "Ms.S. Ramya / CSE",
        "Ms.S. Sripriya / IT",
        "Ms.S. Santhiya / AI",
        "Dr. P. Jayanthi / CSD",
        "Ms.K.Kalaivani / Chemical",
        "Dr.K.Senthil Kumar / FT",
        "Ms. K.M.Jemima Nilofar / MBA",
        "Ms.T.Kalpana / MCA",
        "Dr.S.Karunakaran / CT-UG",
        "Dr.P.Ananthi / CT-PG",
        "Dr. M. Malathy / Physics",
      ],
    },
    "Staff Representatives": {
      Members: [
        "Ms.B.Gayathri, Junior Assistant / Academic Cell",
        "Mr. K.T.Arun, Lab Assistant / IT",
        "Mr. K. Palanisamy / Security Guard",
        "Mr. S. Prabhakaran / Foreman",
        "Mr. K. Palanisamy / Housekeeper",
        "Mr. S. Kolandhaivel / Driver",
      ],
    },
    "Student Representatives": {
      Members: [
        "Mr. S.Suganth / Civil",
        "Mr. M.Sasibala / Mechanical",
        "Mr. S. Shivakarthikeyan / Mechatronics",
        "Mr. K. Santhosh / Automobile",
        "Mr. S.Vikash Pranesh / EEE",
        "Ms. J. Sanmathi / EIE",
        "Mr. D. Durgesh / ECE",
        "Mr. G. Nithish / CSE",
        "Ms. D. Harini / IT",
        "Ms. R.R. Rakshetha / AI",
        "Mr. S. Rahul / CSD",
        "Mr. N. M. Yohith / Chemical",
        "Mr. S. Mahadevan / FT",
        "Mr. S. Sanjaykumar / MBA",
        "Mr. G. Nisanth / MCA",
        "Mr. N.D. Shiva Sanjay / CT-UG",
        "Mr. P. Madhan / CT-PG",
      ],
    },
  },
];

const Uhvcell = () => {
  const studentData = data[0];

  const renderValue = (value) => {
    if (typeof value === "string") return value;

    if (Array.isArray(value)) {
      return value.map((name, i) => <div key={i}>{name}</div>);
    }

    if (typeof value === "object" && value !== null) {
      return (
        <table className="inner-table">
          <tbody>
            {Object.entries(value).map(([role, val], i) => (
              <tr key={i}>
                <td className="titledataforstudentcentric">
                  <strong>{role}</strong>
                </td>
                <td>{renderValue(val)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    }

    return "-";
  };

  return (
    <>
      {/* <Section/> */}
      <Navbar />

      <div className="student-centric-container">
        <h1 className="student-centric-title">UHV Cell</h1>

        <div className="uhvcell-intro">
          <p>
            <strong>UHV Cell (Universal Human Values Cell)</strong> is
            constituted with the following members.
            <br />
            For further details, refer this link:&nbsp;
            <a
              href="Guidelines for the formation of UHV Cell at Universities and Institutions.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <em>
                Guidelines for the formation of UHV Cell at Universities and
                Institutions.pdf
              </em>
            </a>
          </p>
        </div>

        {Object.entries(studentData).map(([club, details], index) => (
          <div className="student-card" key={index}>
            <h2 className="card-title">{club}</h2>
            <table className="responsive-table">
              <thead>
                <tr>
                  <th>Role</th>
                  <th>Coordinator(s)</th>
                </tr>
              </thead>
              <tbody>
                {typeof details === "string" ? (
                  <tr>
                    <td>Coordinator</td>
                    <td>{details}</td>
                  </tr>
                ) : (
                  Object.entries(details).map(([role, coordinator], idx) => (
                    <tr key={idx}>
                      <td>{role}</td>
                      <td>{renderValue(coordinator)}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        ))}
      </div>

      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default Uhvcell;
