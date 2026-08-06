import React from "react";
import "./AntiraggingCell.css";
import Section from "../../../HomePage/Section/Section";
import Navbar from "../../../HomePage/navbar/Navbar";
import Footer from "../../../HomePage/Footer/Footer";
import "../../../../App.css";

const antiraggingData = [
  {
    name: "Dr.R.Parameshwaran (Principal)",
    category: "Chairman",
    phone: "9942820583",
  },
  { name: "Dr.G.Murugesan (ECE)", category: "Member", phone: "9865273774" },
  { name: "Dr. R.Viswanathan (S&H)", category: "Member", phone: "9487151694" },
  { name: "Dr. S.Shanthi (CSE)", category: "Member", phone: "9942911551" },
  {
    name: "Inspector of Police, Perundurai",
    category: "Police Department",
    phone: "04294220548",
  },
  {
    name: "Tahsildar, Perundurai",
    category: "Taluk Office",
    phone: "04294220577",
  },
  {
    name: "Ms.G.Priya Naveen",
    category: "Official of NGO",
    phone: "9047036969",
  },
  {
    name: "Mr. P. Ravichandran, Dhinamani",
    category: "Member from Print Media",
    phone: "9842914895",
  },
  {
    name: "Dr.K.Manjula Rani",
    category: "Parent representative",
    phone: "9443087977",
  },
  {
    name: "Mr.C.Mohanraj",
    category: "Non Teaching representative",
    phone: "9865721106",
  },
  {
    name: "Mr.S.Janish, 24ECR085",
    category: "Student representative",
    phone: "8089365701",
  },
  {
    name: "Ms.G.P.Rajamithra, 25CSR230",
    category: "Student representative",
    phone: "7845010918",
  },
];

const AntiraggingCell = () => {
  return (
    <>
      {/* <Section/> */}
      <Navbar />
      <div className="antiragging-container">
        <h1 className="page-title">Anti-Ragging Cell</h1>
        <p className="antiragging-info">
          Students may contact the following committee in case of any ragging
          activity:
        </p>
        <div className="antiragging-table-wrapper">
          <table className="antiragging-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Mobile Number</th>
              </tr>
            </thead>
            <tbody>
              {antiraggingData.map((person, index) => (
                <tr key={index}>
                  <td>{person.name}</td>
                  <td>{person.category}</td>
                  <td>{person.phone}</td>
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

export default AntiraggingCell;
