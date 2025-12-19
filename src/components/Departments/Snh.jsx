import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Snh.css";
import Section from "../HomePage/Section/Section";
import Navbar from "../HomePage/navbar/Navbar";
import Footer from "../HomePage/Footer/Footer";
import ScrollToTopButton from "../ScrollToTopButton";
import Spinner from "../Spinner";

const pgPrograms = [
  { sno: 1, name: "Mathematics", route: "maths" },
  { sno: 2, name: "Physics", route: "physics" },
  { sno: 3, name: "Chemistry", route: "chemistry" },
  { sno: 4, name: "English", route: "english" },
];

const Snh = () => {
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
        <h2 className="ug-title">Postgraduate Programmes</h2>
        <div className="ug-table-wrapper">
          <table className="ug-table">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Name of the Programme</th>
              </tr>
            </thead>
            <tbody>
              {pgPrograms.map((prog) => (
                <tr key={prog.sno}>
                  <td>{prog.sno}</td>
                  <td>
                    <span
                      className="ug-link"
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
      <ScrollToTopButton />
    </>
  );
};
export default Snh;
