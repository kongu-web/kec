import React from "react";
import "./IIC.css";
import Section from "../../../HomePage/Section/Section";
import Navbar from "../../../HomePage/navbar/Navbar";
import Footer from "../../../HomePage/Footer/Footer";
import ScrollToTopButton from "../../../ScrollToTopButton";
import "../../../../App.css";

const IIC = () => {
  return (
    <>
      {/* <Section/> */}
      <Navbar />
      <section className="iic-container">
        <h2 className="page-title">
          Institutions Innovation Council (IIC@KEC)
        </h2>
        <p className="iic-description">
          Institutions Innovation Council (IIC@KEC) is reconstituted with the
          following members:
        </p>
        <div className="table-wrapper">
          <table className="iic-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Dr. R.Parameshwaran", "President/IEF@KEC"],
                ["Mr.P.S.Kannan", "Vice President/IEF@KEC"],
                ["Dr.S.Praveen Kumar", "Convener/IEF@KEC"],
                ["Mr.R.P.Karthik", "Coordinator - EMDC & Start-Ups Activity"],
                [
                  "Ms.S.Vijayashanthy",
                  "Women Entrepreneurship Activity Coordinator",
                ],
                ["Ms.T.E.Ramya", "Coordinator - Freelance Forum"],
                ["Mr.G.Manikandan", "Coordinator - Freelance Forum"],
                ["Dr.N.Prakash", "Coordinator - Business Cell"],
                ["Mr.M.Thangatamilan", "Coordinator - ATL School Linkage"],
                ["Mr.G.Mageshkumar", "Coordinator (Mentor-Mentee Program)"],
                [
                  "Mr.K.V.Satheesh Kumar",
                  "Coordinator - Design Thinking Activity",
                ],
                ["Dr.S.Anitha", "Coordinator - Internship Activity"],
                ["Ms.S.Mohanapriya", "Coordinator - YUKTI"],
                ["Dr.T.M. Saravanan", "Coordinator - Social Media"],
                ["Mr.P.Karthikeyan", "Coordinator - KPIT Club"],
                ["Mr.P.Bhuvanesh", "Coordinator - CISCO Thingqbator"],
                ["Mr.N.Adhithyaa", "Coordinator - KAPILA Activity"],
                ["Mr.S.Yuvaraj", "Executive Member"],
                ["Ms.S.Hemalatha", "Executive Member"],
                ["Mr.V.Parthibaraj", "Executive Member"],
                ["Mrs.K.Krishnaveni", "Executive Member"],
                ["Mrs.P.Ramya", "Executive Member"],
              ].map(([name, role], index) => (
                <tr key={index}>
                  <td>{name}</td>
                  <td>{role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default IIC;
