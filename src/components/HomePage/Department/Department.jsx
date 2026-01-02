
import React, { useState, useRef } from 'react';
import './Department.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCar, faPenRuler, faBriefcase, faLaptopCode, faCity, faWrench,
  faHardDrive, faMicrochip, faPlug, faTowerCell, faComputer, faCode,
  faBrain, faRobot, faVrCardboard, faAtom, faSeedling,
  faBookOpen,
  faCalculator,faArrowRightToCity,
  faFlask
} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const ugCourses = [
  { name: "Automobile Engineering", abbrev: "AUTO", icon: <FontAwesomeIcon icon={faCar} /> },
  { name: "Civil Engineering", abbrev: "CIVIL", icon: <FontAwesomeIcon icon={faCity} /> },
  { name: "Mechanical Engineering", abbrev: "MECH", icon: <FontAwesomeIcon icon={faWrench} /> },
  { name: "Mechatronics Engineering", abbrev: "MTS", icon: <FontAwesomeIcon icon={faHardDrive} /> },
  { name: "Electronics and Instrumentation Engineering", abbrev: "EIE", icon: <FontAwesomeIcon icon={faMicrochip} /> },
  { name: "Electrical and Electronics Engineering", abbrev: "EEE", icon: <FontAwesomeIcon icon={faPlug} /> },
  { name: "Electronics and Communication Engineering", abbrev: "ECE", icon: <FontAwesomeIcon icon={faTowerCell} /> },
  { name: "Computer Science Engineering", abbrev: "CSE", icon: <FontAwesomeIcon icon={faComputer} /> },
  { name: "Information Technology", abbrev: "IT", icon: <FontAwesomeIcon icon={faCode} /> },
  { name: "Artificial Intelligence and Data Science", abbrev: "aids", icon: <FontAwesomeIcon icon={faBrain} /> },
  { name: "Artificial Intelligence and Machine Learning", abbrev: "AIML", icon: <FontAwesomeIcon icon={faRobot} /> },
  { name: "Computer Science and Design", abbrev: "CSD", icon: <FontAwesomeIcon icon={faVrCardboard} /> },
  { name: "Chemical Engineering", abbrev: "CHEM", icon: <FontAwesomeIcon icon={faAtom} /> },
  { name: "Food Technology", abbrev: "FOODTECH", icon: <FontAwesomeIcon icon={faSeedling} /> },
  { name: "Architecture", abbrev: "Architecture", icon: <FontAwesomeIcon icon={faArrowRightToCity} /> }
];

const pgCourses = [
  { name: "M.E Computer Science and Engineering", abbrev: "cse", icon: <FontAwesomeIcon icon={faComputer} /> },
  { name: "M.E VLSI Design", abbrev: "ece", icon: <FontAwesomeIcon icon={faMicrochip} /> },
  { name: "M.E Structural Engineering", abbrev: "civil", icon: <FontAwesomeIcon icon={faPenRuler} /> },
  { name: "M.Tech Food Technology", abbrev: "foodtech", icon: <FontAwesomeIcon icon={faSeedling} /> },
  { name: "Master of Business Administration (MBA)", abbrev: "mba", icon: <FontAwesomeIcon icon={faBriefcase} /> },
  { name: "Master of Computer Applications (MCA)", abbrev: "mca", icon: <FontAwesomeIcon icon={faLaptopCode} /> }
];

const ctCourses = [
  { name: "CT-UG", abbrev: "ctug", icon: <FontAwesomeIcon icon={faComputer} /> },
  { name: "CT-PG", abbrev: "ctpg", icon: <FontAwesomeIcon icon={faLaptopCode} /> },
];

const shCourses = [
  { name: "Maths", abbrev: "maths", icon: <FontAwesomeIcon icon={faCalculator} /> },
  { name: "English", abbrev: "english", icon: <FontAwesomeIcon icon={faBookOpen} /> },
  { name: "Physics", abbrev: "physics", icon: <FontAwesomeIcon icon={faAtom} /> },
  { name: "Chemistry", abbrev: "chemistry", icon: <FontAwesomeIcon icon={faFlask} /> },

];

const Department = () => {
  const [selectedCategory, setSelectedCategory] = useState('UG');
  const containerRef = useRef(null);
  const navigate = useNavigate();

  const handleCourseClick = (abbrev) => {
    navigate(`/${abbrev.toLowerCase()}`);
  };

  const getCourses = () => {
    switch (selectedCategory) {
      case 'UG':
        return ugCourses;
      case 'PG':
        return pgCourses;
      case 'CT':
        return ctCourses;
      case 'S&H':
        return shCourses;
      default:
        return [];
    }
  };

  return (
    <div className="dep-details-container" ref={containerRef}>
      <div className="dep-button-container">
        <button onClick={() => setSelectedCategory('UG')}>UG Programmes</button>
        <button onClick={() => setSelectedCategory('PG')}>PG Programmes</button>
        <button onClick={() => setSelectedCategory('CT')}>Applied Science</button>
        <button onClick={() => setSelectedCategory('S&H')}>Science & Humanities</button>

      </div>

      <div className="dep-courses-container">
        <div className="dep-courses-row">
          {getCourses().slice(0, 15).map((course, index) => (
            <div
              key={index}
              className="dep-course-box"
              onClick={() => handleCourseClick(course.abbrev)}
            >
              <div className="dep-icon">{course.icon}</div>
              <div className="dep-abbrev">{course.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Department;
