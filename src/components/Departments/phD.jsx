import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Ug.css";
import Footer from "../HomePage/Footer/Footer";
import Section from "../HomePage/Section/Section";
import Navbar from "../HomePage/navbar/Navbar";
import Spinner from "../Spinner";
import "../../App.css";

const phDProgrammes = [
  { sno: 1, name: "Civil Engineering", route: "civil" },
  { sno: 2, name: "Mechanical Engineering", route: "mech" },
  { sno: 3, name: "Electronics and Communication Engineering", route: "ece" },
  { sno: 4, name: "Computer Science and Engineering", route: "cse" },
  { sno: 5, name: "Chemical Engineering", route: "chem" },
  { sno: 6, name: "Electrical and Electronics Engineering", route: "eee" },
  { sno: 7, name: "Electronics and Instrumentation Engineering", route: "eie" },
  { sno: 8, name: "Information Technology", route: "it" },
  { sno: 9, name: "Mechatronics Engineering", route: "mts" },
  { sno: 10, name: "Food Technology", route: "foodtech" },
  { sno: 11, name: "Master of Business Administration", route: "mba" },
  { sno: 12, name: "Master of Computer Applications", route: "mca" },
  { sno: 13, name: "Automobile Engineering", route: "auto" },
  { sno: 14, name: "Computer Science and Design", route: "csd" },
  { sno: 15, name: "Artificial Intelligence and Machine Learning", route: "aiml" },
  { sno: 16, name: "Artificial Intelligence and Data Science", route: "aids" },
  { sno: 17, name: "Mathematics", route: "maths" },
  { sno: 18, name: "Physics", route: "physics" },
  { sno: 19, name: "Chemistry", route: "chemistry" },
  { sno: 20, name: "English", route: "english" },
];

const Phd = () => {
  const navigate = useNavigate();

  const handleNavigate = (route) => {
    navigate(`/${route}`);
  };

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
      <div className="ug-container">
        <h2 className="page-title">Doctoral Programmes</h2>
        <div className="ugpage-table-wrapper">
          <table className="ugpage-table">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Name of the Programme</th>
              </tr>
            </thead>
            <tbody>
              {phDProgrammes.map((prog) => (
                <tr key={prog.sno}>
                  <td>{prog.sno}</td>
                  <td>
                    <span
                      className="ugpage-link"
                      onClick={() => handleNavigate(prog.route)}
                    >
                      {prog.name}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Phd;
