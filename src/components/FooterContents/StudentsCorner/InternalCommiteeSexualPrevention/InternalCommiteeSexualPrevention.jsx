import React from "react";
import "./InternalCommiteeSexualPrevention.css";
import Section from "../../../HomePage/Section/Section";
import Navbar from "../../../HomePage/navbar/Navbar";
import Footer from "../../../HomePage/Footer/Footer";
import pdf from "../../../../assets/docs/Footer/InternalCompliantandAntiSexual/act_InternalComplaintsCommittee.pdf";
import "../../../../App.css";

const members = [
  {
    name: "Dr.R.R.Rajalaxmi (AIML)",
    category: "Presiding Officier",
    mobile: "9486561199",
    email: "rrr@kongu.ac.in",
  },
  {
    name: "Dr.P.Balasubramanie (Registrar)",
    category: "Member",
    mobile: "9965277765",
    email: "registrar@kongu.ac.in",
  },
  {
    name: "Dr.M.Dhavamani (Mathematics)",
    category: "Member",
    mobile: "9842740601",
    email: "md@kongu.ac.in",
  },
  {
    name: "Dr.K.Sangeetha (CSE)",
    category: "Member",
    mobile: "9943070702",
    email: "Sangeetha_k@kongu.ac.in",
  },
  {
    name: "Dr.P.Vidhya Priya (MBA)",
    category: "Member",
    mobile: "9787742193",
    email: "vidyapriya@kongu.ac.in",
  },
  {
    name: "Dr.E.B.Priyanga (MTS)",
    category: "Member",
    mobile: "8098927503",
    email: "priyanka.auto@kongu.ac.in",
  },
  {
    name: "Dr.T.Logeswaran (EEE)",
    category: "Member",
    mobile: "9787733910",
    email: "logeswaran@kongu.ac.in",
  },
  {
    name: "Ar.V.Sivaranjani (B.Arch)",
    category: "Member",
    mobile: "7358192274",
    email: "Sivaranajani.ksa@kongu.edu",
  },
  {
    name: "Mr.M.Murali (AO)",
    category: "Member",
    mobile: "9842352452",
    email: "mmurali@kongu.ac.in",
  },
  {
    name: "Dr.J.Sudha (Deputy Registrar)",
    category: "Member",
    mobile: "9444192238",
    email: "sudha@kongu.ac.in",
  },
  {
    name: "Ms.A.P.Sailendharani,Advocate",
    category: "Member",
    mobile: "7010292100",
    email: "advsailendharani@gmail.com",
  },
  {
    name: "Ms.A.Abirami (Psychology,KASC)",
    category: "Member",
    mobile: "7810040448",
    email: "abiramianand28d@gmail.com",
  },
 {
    name: "Ms.Harshithaa SV (23CER016)",
    category: "Student Representative",
    mobile: "9444854747",
    email: "harshithaa.23civil@kongu.edu",
  },
   {
    name: "Mr.Sibi R (24ALR057)",
    category: "Student Representative",
    mobile: "6374054121",
    email: "sibir.24aim@kongu.edu",
  },
  {
    name: "Mr.Akshaya S M (25EER005)",
    category: "Student Representative",
    mobile: "6385320769",
    email: "akshayasm.25eee@kongu.edu",
  },
];

const InternalCommiteeSexualPrevention = () => {
  return (
    <>
      {/* <Section/> */}
      <Navbar />
      <div className="icc-container">
        <h1 className="page-title">
          Internal Complaint Committee / Anti Sexual Harassment Cell
        </h1>
        <p className="icc-desc">
          KONGU ENGINEERING COLLEGE is committed to provide safe academic and
          working environment to all girl students and its women employees. As
          per the guidelines of University Grants Commission and the Supreme
          Court, an Anti-Sexual Harassment cell / Internal Complaint Committee
          (ICC) has been established by the College. ICC members who can be contacted by any aggrieved person,
          are as follows:
        </p>

        <div className="icc-table-wrapper">
          <table className="icc-table">
            <thead>
              <tr>
                <th>Name of the Committee Members</th>
                <th>Category</th>
                <th>Mobile No</th>
                <th>Email ID</th>
              </tr>
            </thead>
            <tbody>
              {members.map((member, index) => (
                <tr key={index}>
                  <td>{member.name}</td>
                  <td>{member.category}</td>
                  <td>{member.mobile}</td>
                  <td>{member.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3>
          <a href={pdf} className="icc-act">
            THE SEXUAL HARASSMENT OF WOMEN AT WORKPLACE (PREVENTION, PROHIBITION
            AND REDRESSAL) ACT, 2013
          </a>
        </h3>
      </div>
      <Footer />
    </>
  );
};

export default InternalCommiteeSexualPrevention;
