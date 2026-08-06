import React from "react";
import "./GreenEnergyCommittee.css";
import Section from "../../../HomePage/Section/Section";
import Navbar from "../../../HomePage/navbar/Navbar";
import Footer from "../../../HomePage/Footer/Footer";

const committeeData = [
  {
    policy: "Green Campus Policy",
    members: [
      "Dr.V.Sangeetha (Chemical)",
      "Mr.A.Mohan Kumar (Mechanical)",
    ],
  },
  {
    policy: "Environment and Energy usage Policy",
    members: ["Dr.T.Logeswaran (EEE)", "Dr.T.Pradeep (Civil)"],
  },
  {
    policy: "Divyangan Friendliness Information Policy",
    members: [
      "Dr.P.Ravichandran (Mechatronics)",
      "Dr.K.S.Karthi Vinith (Automobile)",
    ],
  },
  {
    policy: "Information Technology Policy Committee",
    members: ["Dr.R.Thangarajan (CSD)", "Dr.C.S.Kanimozhiselvi (CSE)"],
  },
  {
    policy: "Quality Audit Committee on Energy and Environment",
    members: [
      "Dr.P.Selvakumar (Mechanical) - Energy Audit Member",
      "Dr.C.Gomadurai (Chemical) - Green Audit Member",
      "Dr.T.Logeswaran (EEE) - Energy Audit Member",
      "Dr.T.Pradeep (Civil) - Environment Audit Member",
    ],
  },
];

const GreenEnergyCommittee = () => {
  return (
    <>
      <Navbar />
      {/* <Section/> */}
      <div className="green-container">
        <h2>
          Institution Policy Document & Green, Energy and Environment Audit
          Committee
        </h2>
        <div className="table-wrapper">
          <table className="green-table">
            <thead>
              <tr>
                <th>Policy / Committee</th>
                <th>Members</th>
              </tr>
            </thead>
            <tbody>
              {committeeData.map((item, index) => (
                <tr key={index}>
                  <td>{item.policy}</td>
                  <td>
                    <ul>
                      {item.members.map((member, i) => (
                        <li key={i}>{member}</li>
                      ))}
                    </ul>
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

export default GreenEnergyCommittee;
