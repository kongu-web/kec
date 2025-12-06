import React, { useState, useEffect, useRef } from 'react';
import './Data.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar,faPenRuler,faBriefcase,faLaptopCode, faCity, faWrench, faHardDrive,faMicrochip, faPlug,faTowerCell,faComputer, faCode,faBrain,faRobot,faVrCardboard,faAtom,faSeedling,faarrow-right-to-city} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const detailsData = [
  { number: 41, value: '', label: 'Degrees' },
  { number: 487, value: '', label: 'Faculties/Scientists' },
  { number: 4, value: 'K', label: 'Students' },
  { number: 100, value: '', label: 'Labs/Workshops' },
  { number: 14, value: '', label: 'Degrees' },
];


const ugCourses = [
  { name: "Automobile Engineering", abbrev: "AUTO", icon: <FontAwesomeIcon icon={faCar} /> },
  { name: "Civil Engineering", abbrev: "CIVIL", icon: <FontAwesomeIcon icon={faCity} /> },
  { name: "Mechanical Engineering", abbrev: "MECH", icon: <FontAwesomeIcon icon={faWrench} /> },
  { name: "Mechatronics Engineering", abbrev: "MTS", icon:<FontAwesomeIcon icon={faHardDrive} />},
  { name: "Electronics and Instrumentation Engineering", abbrev: "EIE", icon: <FontAwesomeIcon icon={faMicrochip} /> },
  { name: "Electrical and Electronics Engineering", abbrev: "EEE", icon: <FontAwesomeIcon icon={faPlug} /> },
  { name: "Electronics and Communication Engineering", abbrev: "ECE", icon: <FontAwesomeIcon icon={faTowerCell} /> },
  { name: "Computer Science Engineering", abbrev: "CSE", icon: <FontAwesomeIcon icon={faComputer} /> },
  { name: "Information Technology", abbrev: "IT", icon: <FontAwesomeIcon icon={faCode} /> },
  { name: "Artificial Intelligence and Data Science", abbrev: "aids", icon: <FontAwesomeIcon icon={faBrain} /> },
  { name: "Artificial Intelligence and Machine Learning", abbrev: "AI&ML", icon: <FontAwesomeIcon icon={faRobot} />  },
  { name: "Computer Science and Design", abbrev: "CSD", icon: <FontAwesomeIcon icon={faVrCardboard} />},
  { name: "Chemical Engineering", abbrev: "CHEM", icon: <FontAwesomeIcon icon={faAtom} /> },
  { name: "Food Technology", abbrev: "FOODTECH", icon: <FontAwesomeIcon icon={faarrow-right-to-city} />} 
];

const pgCourses = [
  { name: "M.Tech Computer Science", abbrev: "M.Tech CSE", icon:  <FontAwesomeIcon icon={faComputer} /> },
  { name: "M.E VLSI Design", abbrev: "M.Tech AI", icon: <FontAwesomeIcon icon={faMicrochip} /> },
  { name: "M.E Structural Engineering", abbrev: "M.Tech DS", icon: <FontAwesomeIcon icon={faPenRuler} /> },
  { name: "M.Tech Food Technology", abbrev: "M.Tech CS", icon: <FontAwesomeIcon icon={faSeedling} />  },
  { name: "Master of Business Administration (MBA)", abbrev: "M.Tech VLSI", icon: <FontAwesomeIcon icon={faBriefcase} /> },
  { name: "Master of Computer Applications (MCA)", abbrev: "M.Tech ES", icon:<FontAwesomeIcon icon={faLaptopCode} /> }
];

const shCourses = [
  { name: "B.Sc Computer Systems and Design", abbrev: "MATH", icon:<FontAwesomeIcon icon={faComputer} /> },
  { name: "B.Sc Information Systems", abbrev: "PHY", icon: <FontAwesomeIcon icon={faCode} /> },
  { name: "B.Sc Software Systems", abbrev: "CHEM", icon:<FontAwesomeIcon icon={faLaptopCode} />},
  { name: "M.Sc Software Systems", abbrev: "ENG", icon:<FontAwesomeIcon icon={faLaptopCode} /> },
];


const Data = () => {
  const [inView, setInView] = useState(false);
  const [animatedNumbers, setAnimatedNumbers] = useState(detailsData.map(() => 0));
  const [selectedCategory, setSelectedCategory] = useState('UG');
  const containerRef = useRef(null);
  const navigate = useNavigate();

  const handleCourseClick = (abbrev) => {
    navigate(`/${abbrev.toLowerCase()}`);
  };

  const handleScroll = () => {
    if (containerRef.current) {
      const { top, bottom } = containerRef.current.getBoundingClientRect();
      if (top <= window.innerHeight && bottom >= 0) {
        setInView(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (inView) {
      detailsData.forEach((item, index) => {
        let start = 0;
        const end = item.number;
        const duration = 2000;
        let startTime;

        const animate = (timestamp) => {
          if (!startTime) startTime = timestamp;
          const progress = Math.min((timestamp - startTime) / duration, 1);
          const currentValue = Math.floor(progress * end);
          setAnimatedNumbers((prev) => {
            const newNumbers = [...prev];
            newNumbers[index] = currentValue;
            return newNumbers;
          });

          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };

        requestAnimationFrame(animate);
      });
    }
  }, [inView]);

  const getCourses = () => {
    switch (selectedCategory) {
      case 'UG':
        return ugCourses;
      case 'PG':
        return pgCourses;
      case 'S&H':
        return shCourses;
      default:
        return [];
    }
  };

  return (
    <div className="details-container" ref={containerRef}>
      <div className="numbers-container">
        {detailsData.map((item, index) => (
          <div key={index} className="number-item">
            <div className="top-value">
              <div className="number">{animatedNumbers[index]}</div>
              <div className="value">{item.value}</div>
            </div>
            <div className="label">{item.label}</div>
          </div>
        ))}
      </div>

      {/* <div className="campus-video">
        <CampusVideo/>
      </div> */}

      {/* Buttons to Switch Between UG, PG, and S&H */}
      <div className="button-container">
        <button onClick={() => setSelectedCategory('UG')}>UG Programmes</button>
        <button onClick={() => setSelectedCategory('PG')}>PG Programmes</button>
        <button onClick={() => setSelectedCategory('S&H')}>CT-UG & CT-PG</button>
      </div>

      {/* Course Boxes */}
      <div className="courses-container">
  <div className="courses-row">
    {getCourses().slice(0, 14).map((course, index) => (
                <div
                key={index}
                className="course-box"
                onClick={() => handleCourseClick(course.abbrev)}
              >
    
          <div className="icon">{course.icon}</div>
          <div className="abbrev">{course.name}</div>
      </div>
    ))}
  </div>
 
</div>


            
    </div>
  );
};

export default Data;
