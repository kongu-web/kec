import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./AcademicsSection.css";
import card1 from "../../../assets/images/HomePage/ACADEMICS_card1.webp";
import card2 from "../../../assets/images/HomePage/ACADEMICS_card2.webp";
import card3 from "../../../assets/images/HomePage/ACADEMICS_card3.webp";
import card4 from "../../../assets/images/HomePage/ACADEMICS_card4.webp";


import {
  FaBuilding,
  FaCogs,
  FaBroadcastTower,
  FaLaptopCode,
  FaFlask,
  FaBolt,
  FaMicrochip,
  FaGlobe,
  FaRobot,
  FaAppleAlt,
  FaCar,
  FaPalette,
  FaBrain,
  FaChartBar,
  FaUniversity,
  FaCalculator,
  FaAtom,
  FaVial,
  FaBookOpen,
  FaGraduationCap,
} from "react-icons/fa";



const ugProgrammes = [
  {
    sno: 1,
    name: "B.E Civil Engineering",
    icon: <FaBuilding />,
    duration: "4 Years",
    route: "civil",
  },
  {
    sno: 2,
    name: "B.E Mechanical Engineering",
    icon: <FaCogs />,
    duration: "4 Years",
    route: "mech",
  },
  {
    sno: 3,
    name: "B.E Electronics and Communication Engineering",
    icon: <FaBroadcastTower />,
    duration: "4 Years",
    route: "ece",
  },
  {
    sno: 4,
    name: "B.E Computer Science and Engineering",
    icon: <FaLaptopCode />,
    duration: "4 Years",
    route: "cse",
  },
  {
    sno: 5,
    name: "B.Tech Chemical Engineering",
    icon: <FaFlask />,
    duration: "4 Years",
    route: "chem",
  },
  {
    sno: 6,
    name: "B.E Electrical and Electronics Engineering",
    icon: <FaBolt />,
    duration: "4 Years",
    route: "eee",
  },
  {
    sno: 7,
    name: "B.E Electronics and Instrumentation Engineering",
    icon: <FaMicrochip />,
    duration: "4 Years",
    route: "eie",
  },
  {
    sno: 8,
    name: "B.Tech Information Technology",
    icon: <FaGlobe />,
    duration: "4 Years",
    route: "it",
  },
  {
    sno: 9,
    name: "B.E Mechatronics Engineering",
    icon: <FaRobot />,
    duration: "4 Years",
    route: "mts",
  },
  {
    sno: 10,
    name: "B.Tech Food Technology",
    icon: <FaAppleAlt />,
    duration: "4 Years",
    route: "foodtech",
  },
  {
    sno: 11,
    name: "B.E Automobile Engineering",
    icon: <FaCar />,
    duration: "4 Years",
    route: "auto",
  },
  {
    sno: 12,
    name: "B.E Computer Science and Design",
    icon: <FaPalette />,
    duration: "4 Years",
    route: "csd",
  },
  {
    sno: 13,
    name: "B.Tech Artificial Intelligence and Machine Learning",
    icon: <FaBrain />,
    duration: "4 Years",
    route: "aiml",
  },
  {
    sno: 14,
    name: "B.Tech Artificial Intelligence and Data Science",
    icon: <FaChartBar />,
    duration: "4 Years",
    route: "aids",
  },
  {
    sno: 15,
    name: "B.Arch",
    icon: <FaUniversity />,
    duration: "5 Years",
    route: "architecture",
  },
];



const pgPrograms = [
  {
    sno: 1,
    name: "M.E Computer Science and Engineering",
    icon: <FaLaptopCode />,
    duration: "2 Years",
    year: 1999,
    route: "cse",
  },
  {
    sno: 2,
    name: "M.E. VLSI Design",
    icon: <FaMicrochip />,
    duration: "2 Years",
    year: 2003,
    route: "ece",
  },
  {
    sno: 3,
    name: "M.E Structural Engineering",
    icon: <FaBuilding />,
    duration: "2 Years",
    year: 2012,
    route: "civil",
  },
  {
    sno: 4,
    name: "M.Tech Food Technology",
    icon: <FaAppleAlt />,
    duration: "2 Years",
    year: 2013,
    route: "foodtech",
  },
  {
    sno: 5,
    name: "Master of Business Administration (MBA)",
    icon: <FaUniversity />,
    duration: "2 Years",
    year: 1994,
    route: "mba",
  },
  {
    sno: 6,
    name: "Master of Computer Applications (MCA)",
    icon: <FaGraduationCap />,
    duration: "2 Years",
    year: 1993,
    route: "mca",
  },
];


const phDProgrammes = [
  { sno: 1, name: "Computer Science and Engineering", icon: <FaLaptopCode />, route: "cse" },
  { sno: 2, name: "Information Technology", icon: <FaGlobe />, route: "it" },
  { sno: 3, name: "Artificial Intelligence and Data Science", icon: <FaChartBar />, route: "aids" },
  { sno: 4, name: "Artificial Intelligence and Machine Learning", icon: <FaBrain />, route: "aiml" },
  { sno: 5, name: "Computer Science and Design", icon: <FaPalette />, route: "csd" },
  { sno: 6, name: "Electronics and Communication Engineering", icon: <FaBroadcastTower />, route: "ece" },
  { sno: 7, name: "Electrical and Electronics Engineering", icon: <FaBolt />, route: "eee" },
  { sno: 8, name: "Electronics and Instrumentation Engineering", icon: <FaMicrochip />, route: "eie" },
  { sno: 9, name: "Chemical Engineering", icon: <FaFlask />, route: "chem" },
  { sno: 10, name: "Food Technology", icon: <FaAppleAlt />, route: "foodtech" },
  { sno: 11, name: "Mechanical Engineering", icon: <FaCogs />, route: "mech" },
  { sno: 12, name: "Mechatronics Engineering", icon: <FaRobot />, route: "mts" },
  { sno: 13, name: "Automobile Engineering", icon: <FaCar />, route: "auto" },
  { sno: 14, name: "Civil Engineering", icon: <FaBuilding />, route: "civil" },
  { sno: 15, name: "Computer Technology", icon: <FaLaptopCode />, route: "ctug" },
  { sno: 16, name: "Master of Computer Applications", icon: <FaGraduationCap />, route: "mca" },
  { sno: 17, name: "Master of Business Administration", icon: <FaUniversity />, route: "mba" },
  { sno: 18, name: "Mathematics", icon: <FaCalculator />, route: "maths" },
  { sno: 19, name: "Physics", icon: <FaAtom />, route: "physics" },
  { sno: 20, name: "Chemistry", icon: <FaVial />, route: "chemistry" },
  { sno: 21, name: "English", icon: <FaBookOpen />, route: "english" },
];



const ApsPrograms = [
  {
    sno: 1,
    name: "B.Sc Computer Systems and Design",
    icon: <FaLaptopCode />,
    duration: "3 Years",
    year: 1996,
    route: "ctug",
  },
  {
    sno: 2,
    name: "B.Sc Information Systems",
    icon: <FaLaptopCode />,
    duration: "3 Years",
    year: 2000,
    route: "ctug",
  },
  {
    sno: 3,
    name: "B.Sc Software Systems",
    icon: <FaLaptopCode />,
    duration: "3 Years",
    year: 2007,
    route: "ctug",
  }
];

const ApsPgPrograms = [
  {
    sno: 1,
    name: "M.Sc Software Systems",
    icon: <FaLaptopCode />,
    duration: "5 Years",
    year: 2007,
    route: "ctpg",
  },
];


const programMap = {
  ug: ugProgrammes,
  pg: pgPrograms,
  as: ApsPrograms,
  sh: phDProgrammes,
};

const programTitles = {
  ug: "Undergraduate Programmes",
  pg: "Postgraduate Programmes",
  as: "Computer Technology (UG)",
  sh: "Doctorate Programmes",
};

function AcademicsSection() {
  const [active, setActive] = useState("ug");

  return (
    <section className="academics-section">
      <span className="section-pill">Academics @ KEC</span>
      <h2>Programmes Offered</h2>
      <p className="subtitle">
        Choose from our diverse range of programmes designed to meet industry
        demands and foster innovation
      </p>

      <div className="academics-layout">
        <div className="program-types">
          <div
            className={`program-card ${active === "ug" && "active"}`}
            onClick={() => setActive("ug")}
          >
            <div className="card-icon">
              <img src={card1} />
            </div>
            <div>
              <h4>Undergraduate</h4>
              <p>B.E. / B.Tech / B.Arch</p>
            </div>
          </div>

          <div
            className={`program-card ${active === "pg" && "active"}`}
            onClick={() => setActive("pg")}
          >
            <div className="card-icon">
              <img src={card2} />
            </div>
            <div>
              <h4>Postgraduate</h4>
              <p>M.E. / M.Tech / MBA / MCA</p>
            </div>
          </div>

          <div
            className={`program-card ${active === "as" && "active"}`}
            onClick={() => setActive("as")}
          >
            <div className="card-icon">
              <img src={card3} />
            </div>
            <div>
              <h4>Computer Technology</h4>
              <p>B.Sc. / M.Sc.</p>
            </div>
          </div>

          <div
            className={`program-card ${active === "sh" && "active"}`}
            onClick={() => setActive("sh")}
          >
            <div className="card-icon">
              <img src={card4} />
            </div>
            <div>
              <h4>Doctorate Programmes</h4>
              <p>Ph.D.</p>
            </div>
          </div>
        </div>

        <div className="program-list">
          <h3>{programTitles[active]}</h3>

          <div className="program-grid">
            {programMap[active].map((item) => (
              <Link
                key={item.sno}
                to={`/${item.route}`}
                className="program-item"
              >
                <span className="program-icon">{item.icon}</span>
                <span>{item.name}</span>
              </Link>
            ))}
          </div>

          {active === "as" && (
            <>
              <h3 style={{ marginTop: "30px" }}>Computer Technology (PG)</h3>
              <div className="program-grid">
                {ApsPgPrograms.map((item) => (
                  <Link
                    key={item.sno}
                    to={`/${item.route}`}
                    className="program-item"
                  >
                    <span className="program-icon">{item.icon}</span>
                    <span>{item.name}</span>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default AcademicsSection;
