import React from "react";
import { useNavigate } from "react-router-dom";
import "./AppliedScience.css";
import Section from "../HomePage/Section/Section";
import Navbar from "../HomePage/navbar/Navbar";
import Footer from "../HomePage/Footer/Footer";
import ScrollToTopButton from "../ScrollToTopButton";
import "../../App.css";

const ugPrograms = [
    { sno: 1, name: "B.Sc Computer Systems and Design", duration: "3 Years", year: 1996, route:"ctug" },
    { sno: 2, name: "B.Sc Information Systems", duration: "3 Years", year: 2000, route:"ctug" },
    { sno: 3, name: "B.Sc Software Systems", duration: "3 Years", year: 2007, route:"ctug" },
  ];
  
  const pgPrograms = [
    { sno: 1, name: "M.Sc Software Systems", duration: "5 Years", year: 1998, route:"ctpg" },
  ];

const AppliedScience = () => {
    const navigate = useNavigate();

    const handleNavigate = (route) => {
      navigate(`/${route}`);
    };
  
    return (
      <>
      <Section/>
      <Navbar/>
      <div className="ug-container">
        <h2 className="page-title">Applied Sciences Programmes (UG)</h2>
        <div className="aps-table-wrapper">
          <table className="aps-table">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Name of the Programme</th>
                <th>Duration</th>
                <th>Year of Starting</th>
              </tr>
            </thead>
            <tbody>
              {ugPrograms.map((prog) => (
                <tr key={prog.sno}>
                  <td>{prog.sno}</td>
                  <td>
                    <span
                      className="aps-link"
                      onClick={() => handleNavigate(prog.route)}
                    >
                      {prog.name}
                    </span>
                  </td>
                  <td>{prog.duration}</td>
                  <td>{prog.year}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h2 className="page-title">Master of Science</h2>
        <div className="aps-table-wrapper">
          <table className="aps-table">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Name of the Programme</th>
                <th>Duration</th>
                <th>Year of Starting</th>
              </tr>
            </thead>
            <tbody>
              {pgPrograms.map((prog) => (
                <tr key={prog.sno}>
                  <td>{prog.sno}</td>
                  <td>
                    <span
                      className="aps-link"
                      onClick={() => handleNavigate(prog.route)}
                    >
                      {prog.name}
                    </span>
                  </td>
                  <td>{prog.duration}</td>
                  <td>{prog.year}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer/>
      <ScrollToTopButton/>
      </>
    );
  };
  export default AppliedScience;

