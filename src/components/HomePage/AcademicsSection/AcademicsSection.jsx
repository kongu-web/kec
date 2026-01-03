import React, { useState } from "react";
import "./AcademicsSection.css";
import card1 from "../../../assets/images/HomePage/ACADEMICS_card1.png";
import card2 from "../../../assets/images/HomePage/ACADEMICS_card2.png";
import card3 from "../../../assets/images/HomePage/ACADEMICS_card3.png";
import card4 from "../../../assets/images/HomePage/ACADEMICS_card4.png";



const ugProgrammes = [
  {
    sno: 1,
    name: "B.E Civil Engineering",
    icon: "🏗️",
    duration: "4 Years",
    route: "civil",
  },
  {
    sno: 2,
    name: "B.E Mechanical Engineering",
    icon: "⚙️",
    duration: "4 Years",
    route: "mech",
  },
  {
    sno: 3,
    name: "B.E Electronics and Communication Engineering",
    icon: "📡",
    duration: "4 Years",
    route: "ece",
  },
  {
    sno: 4,
    name: "B.E Computer Science and Engineering",
    icon: "💻",
    duration: "4 Years",
    route: "cse",
  },
  {
    sno: 5,
    name: "B.Tech Chemical Engineering",
    icon: "🧪",
    duration: "4 Years",
    route: "chem",
  },
  {
    sno: 6,
    name: "B.E Electrical and Electronics Engineering",
    icon: "⚡",
    duration: "4 Years",
    route: "eee",
  },
  {
    sno: 7,
    name: "B.E Electronics and Instrumentation Engineering",
    icon: "🎛️",
    duration: "4 Years",
    route: "eie",
  },
  {
    sno: 8,
    name: "B.Tech Information Technology",
    icon: "🌐",
    duration: "4 Years",
    route: "it",
  },
  {
    sno: 9,
    name: "B.E Mechatronics Engineering",
    icon: "🤖",
    duration: "4 Years",
    route: "mts",
  },
  {
    sno: 10,
    name: "B.Tech Food Technology",
    icon: "🍎",
    duration: "4 Years",
    route: "foodtech",
  },
  {
    sno: 11,
    name: "B.E Automobile Engineering",
    icon: "🚗",
    duration: "4 Years",
    route: "auto",
  },
  {
    sno: 12,
    name: "B.E Computer Science and Design",
    icon: "🎨",
    duration: "4 Years",
    route: "csd",
  },
  {
    sno: 13,
    name: "B.Tech Artificial Intelligence and Machine Learning",
    icon: "🧠",
    duration: "4 Years",
    route: "aiml",
  },
  {
    sno: 14,
    name: "B.Tech Artificial Intelligence and Data Science",
    icon: "📊",
    duration: "4 Years",
    route: "aids",
  },
  {
    sno: 15,
    name: "B.Arch",
    icon: "🏛️",
    duration: "5 Years",
    route: "architecture",
  },
];


const pgPrograms = [
  {
    sno: 1,
    name: "M.E Computer Science and Engineering",
    duration: "2 Years",
    year: 1999,
    route: "cse",
  },
  {
    sno: 2,
    name: "M.E. VLSI Design",
    duration: "2 Years",
    year: 2003,
    route: "ece",
  },
  {
    sno: 3,
    name: "M.E Structural Engineering",
    duration: "2 Years",
    year: 2012,
    route: "civil",
  },
  {
    sno: 4,
    name: "M.Tech Food Technology",
    duration: "2 Years",
    year: 2013,
    route: "foodtech",
  },
  {
    sno: 5,
    name: "Master of Business Administration (MBA)",
    duration: "2 Years",
    year: 1994,
    route: "mba",
  },
  {
    sno: 6,
    name: "Master of Computer Applications (MCA)",
    duration: "2 Years",
    year: 1993,
    route: "mca",
  },
];

const phDProgrammes = [
  {
    sno: 1,
    name: "B.E Civil Engineering",
    duration: "4 Years",
    year: 1984,
    route: "civil",
  },
  {
    sno: 2,
    name: "B.E Mechanical Engineering",
    duration: "4 Years",
    year: 1984,
    route: "mech",
  },
  {
    sno: 3,
    name: "B.E Electronics and Communication Engineering",
    duration: "4 Years",
    year: 1984,
    route: "ece",
  },
  {
    sno: 4,
    name: "B.E Computer Science and Engineering",
    duration: "4 Years",
    year: 1988,
    route: "cse",
  },
  {
    sno: 5,
    name: "B.Tech Chemical Engineering",
    duration: "4 Years",
    year: 1994,
    route: "chem",
  },
  {
    sno: 6,
    name: "B.E Electrical and Electronics Engineering",
    duration: "4 Years",
    year: 1994,
    route: "eee",
  },
  {
    sno: 7,
    name: "B.E Electronics and Instrumentation Engineering",
    duration: "4 Years",
    year: 1998,
    route: "eie",
  },
  {
    sno: 8,
    name: "B.Tech Information Technology",
    duration: "4 Years",
    year: 1998,
    route: "it",
  },
  {
    sno: 9,
    name: "B.E Mechatronics Engineering",
    duration: "4 Years",
    year: 1999,
    route: "mts",
  },
  {
    sno: 10,
    name: "B.Tech Food Technology",
    duration: "4 Years",
    year: 2006,
    route: "foodtech",
  },
  {
    sno: 11,
    name: "Master of Business Administration (MBA)",
    duration: "2 Years",
    year: 1994,
    route: "mba",
  },
  {
    sno: 12,
    name: "Master of Computer Applications (MCA)",
    duration: "2 Years",
    year: 1993,
    route: "mca",
  },
  { sno: 13, name: "Mathematics", route: "maths" },
  { sno: 14, name: "Physics", route: "physics" },
  { sno: 15, name: "Chemistry", route: "chemistry" },
  { sno: 16, name: "English", route: "english" },
];

const ApsPrograms = [
  {
    sno: 1,
    name: "B.Sc Computer Systems and Design",
    duration: "3 Years",
    year: 1996,
    route: "ctug",
  },
  {
    sno: 2,
    name: "B.Sc Information Systems",
    duration: "3 Years",
    year: 2000,
    route: "ctug",
  },
  {
    sno: 3,
    name: "B.Sc Software Systems",
    duration: "3 Years",
    year: 2007,
    route: "ctug",
  },
];

const programMap = {
  ug: ugProgrammes,
  pg: pgPrograms,
  as: ApsPrograms,
  sh: phDProgrammes,
};

const programTitles = {
  ug: "Undergraduate Programs",
  pg: "Postgraduate Programs",
  as: "Applied Science Programs",
  sh: "Science & Humanities Programs",
};

function AcademicsSection() {
  const [active, setActive] = useState("ug");

  return (
    <section className="academics-section">
      <span className="section-pill">ACADEMICS @ KEC</span>
      <h2>World-Class Academic Programs</h2>
      <p className="subtitle">
        Choose from our diverse range of programs designed to meet industry
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
              <p>B.E / B.Tech / B.Arch</p>
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
              <p>M.E / M.Tech / MBA / MCA</p>
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
              <h4>Applied Science</h4>
              <p>Computer Technology</p>
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
              <h4>Science & Humanities</h4>
              <p>Foundation of Engineering</p>
            </div>
          </div>
        </div>

        <div className="program-list">
          <h3>{programTitles[active]}</h3>

          <div className="program-grid">
            {programMap[active].map((item) => (
              <div key={item.sno} className="program-item">
                <span className="program-icon">{item.icon}</span>
                <span>{item.name}</span>
                {/* {item.duration && (
                  <span className="duration">{item.duration}</span>
                )} */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AcademicsSection;
