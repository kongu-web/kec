import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import Navbar from "../../HomePage/navbar/Navbar";
import Section from "../../HomePage/Section/Section";
import Footer from "../../HomePage/Footer/Footer";
import "../Deptstyle.css";
import autoData from "./maths.json";
import Slider from "./Slider";
import Deptimg from "../../../assets/images/Department Banner/math.avif"
import ScrollToTopButton from "../../ScrollToTopButton";

const NAV_ITEMS = [
  "Home",
  "Highlights",
  "Laboratories",
  "Faculty",
  "Library",
  // "Patents",
  // "Testing/Consultancy",
  "R&D (Academic)",
  "R&D (Activities)",
];

const Maths = () => {
  const [facultyData, setFacultyData] = useState([]);
  const [activeSection, setActiveSection] = useState("Home");
  const [selectedLab, setSelectedLab] = useState(0);

  const [dropdowns, setDropdowns] = useState({
    vision: false,
    mission: false,
    po: false,
    pso: false,
  });

  // Toggle dropdown function
  const toggleDropdown = (section) => {
    setDropdowns((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  useEffect(() => {
    fetch("/Faculty/maths.csv")
      .then((response) => response.text())
      .then((csvData) => {
        Papa.parse(csvData, {
          delimiter: ",",
          skipEmptyLines: true,
          complete: (result) => {
            const formattedData = result.data.map((row) => ({
              image:row[0],
              name: row[1],
              designation: row[2],
              profileLink: row[3],
            }));
            setFacultyData(formattedData);
          },
        });
      })
      .catch((error) => console.error("Error fetching CSV:", error));
  }, []);

  // Redirect to R&D sections
  useEffect(() => {
    if (activeSection === "R&D (Academic)" && autoData.rnd?.academic) {
      window.location.href = autoData.rnd.academic;
    }
    if (activeSection === "R&D (Activities)" && autoData.rnd?.activities) {
      window.location.href = autoData.rnd.activities;
    }
  }, [activeSection]);

  return (
    <div>
      <div className="navbar-section-wrapper">
        <Navbar />
        <Section />
      </div>

      <div className="auto-container">
        <div className="auto-banner-container">
          <img src={Deptimg} alt="Department Banner" className="auto-banner" />
          <div className="overlay"></div>
          <h1 className="auto-header">{autoData["dept-name"]}</h1>
        </div>

        <nav className="auto-navbar">
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              className={activeSection === item ? "active" : ""}
              onClick={() => setActiveSection(item)}
            >
              {item}
            </button>
          ))}
        </nav>

        <div className="auto-content">
        {activeSection === "Home" && autoData && (
            <div className="auto-content">
              <h2>About the Department</h2>
              <p className="bigdata">{autoData.about || "Information not available."}</p>

              <h2>Department Details</h2>
              <table className="dept-details-table">
                <tbody>
                  {[
                    ["HOD", autoData.hod_name],
                   
                  ].map(([label, value], index) => (
                    <tr key={index}>
                      <td><strong>{label}</strong></td>
                      <td>{value || "N/A"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {["vision", "mission"].map((key) => (
                <div key={key} className={`dropdown-section ${dropdowns[key] ? "active" : ""}`}>
                  <button onClick={() => toggleDropdown(key)}>
                    {key.toUpperCase()}
                  </button>
                  <div className="dropdown-content">
                    <ul>
                      {Array.isArray(autoData[key])
                        ? autoData[key].map((point, index) => <li key={index}>{point}</li>)
                        : <li>{autoData[key] || "N/A"}</li>
                      }
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          )}


          {activeSection === "Highlights" && (
            <div>
              <h2>Highlights</h2>
              <ul className="highlights-list">
                {Object.entries(autoData.highlights || {}).map(([category, details], index) =>
                  details === true || details === "" ? <li key={index}>{category.replace(/_/g, " ")}</li> : null
                )}
              </ul>


              
            </div>
          )}

          {activeSection === "Laboratories" && (
            <div>
              <h2>Laboratories</h2>
              <div className="lab-list">
                {autoData.labs.map((lab, index) => (
                  <div
                    key={index}
                    className={`lab-card ${selectedLab === index ? "active" : ""}`}
                    onClick={() => setSelectedLab(index)}
                  >
                    {lab.topic}
                  </div>
                ))}
              </div>

              {selectedLab !== null && (
                <div className="lab-detail">
                  <h3>{autoData.labs[selectedLab].topic}</h3>
                  <img src={autoData.labs[selectedLab].image} alt={autoData.labs[selectedLab].topic} />
                  <p>{autoData.labs[selectedLab].detail}</p>
                </div>
              )}
            </div>
          )}

          {activeSection === "Faculty" && (
            <div>
              <h2>Faculty Members</h2>
              <h3><strong>Total Faculty Members: {facultyData.length}</strong></h3>

              <div className="auto-faculty-container">
                {facultyData.map((faculty, index) => (
                  <div
                    key={index}
                    className="auto-faculty-card"
                    onClick={() => window.open(faculty.profileLink, "_blank")}
                  >
                     <img
                      src={require(`../../../assets/images/faculty images/maths/${faculty.image}`)}
                      alt={faculty.name}
                     
                      style={{ width: "95px", height: "95px", objectFit: "cover",  objectPosition: "top", borderRadius: "50%" }}
                    />  

                    <p><strong>{faculty.name}</strong></p>
                    <p>{faculty.designation}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === "Library" && autoData.library && (
            <div className="library-container">
              <h2>{autoData.library.name || "Library"}</h2>
              <p className="library-description">
                {autoData.library.description || "Library details are provided below."}
              </p>

              <table className="library-table">
                <tbody>
                  {Object.entries(autoData.library.details || {}).map(([key, value], index) => (
                    <tr key={index}>
                      <td className="library-key">{key.replace(/_/g, " ")}</td>
                      <td className="library-value">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

        </div>
      </div>

      <Slider />
      <Footer />
      <ScrollToTopButton/>
    </div>
  );
};

export default Maths;
