import React, { useState, useEffect } from "react";
import "./CollegeRules.css";
import ruleImg from "../../../assets/images/rules.png";
import codeofConduct from "../../../assets/images/codeofconduct.webp";
import antiragging from "../../../assets/images/antiragging.webp";
import dresscode from "../../../assets/images/dresscode.jpg";
import attendance from "../../../assets/images/attendance.png";
import idcard from "../../../assets/images/idcard.png";
import helmet from "../../../assets/images/helmet.jpg";
import mobile from "../../../assets/images/mobile.webp";
import Section from "../../HomePage/Section/Section";
import Navbar from "../../HomePage/navbar/Navbar";
import Footer from "../../HomePage/Footer/Footer";
import ScrollToTopButton from "../../ScrollToTopButton";
import Spinner from "../../Spinner";
const rules = [
  {
    title: "General Information",
    content: [
      "Working Days: Monday to Saturday (except Second and Fourth Saturdays)",
      "Working Hours: 8.40 A.M. to 4.30 P.M.",
      "Library: 8.00 AM to 8.00 PM (Working Days), 9.00 AM to 5.00 PM (Holidays)",
      "Computer Centre: 8.45 A.M. to 7.00 PM (Mon to Sat), 8.45 AM to 4.30 PM (Govt. Holidays)",
      "Kongu FM Radio Broadcast (90.4MHz): 6.30 AM to 10.00 AM & 12.00 PM to 7.30 PM (All Days)",
    ],
    img: ruleImg,
  },
  {
    title: "Rules of Conduct and Discipline",
    content: [
      "The conduct of each student should be satisfactory.",
      "Students should wear clean and simple dress.",
      "They should be punctual and attentive in class.",
      "Any damage to college property will be penalized.",
      "Tampering with electrical fittings is prohibited.",
      "Read all notifications on the notice board.",
      "Malpractice and misbehavior are serious offenses.",
      "Meetings require prior written permission.",
      "Day-Scholars need permission to enter hostels.",
      "Violation of rules can lead to suspension or expulsion.",
      "Cell phone usage is banned on campus.",
    ],
    img: codeofConduct,
  },
  {
    title: "Prohibition of Ragging",
    content: [
      "Ragging is strictly prohibited on and off campus.",
      "Act No.7 of 1997 prohibits ragging in Tamil Nadu.",
      "Ragging includes teasing, practical jokes, or harassment.",
      "Penalty: Up to 2 years imprisonment and ₹10,000 fine.",
      "Convicted students will be dismissed and banned from other institutions.",
      "Suspension on valid complaints is mandatory.",
    ],
    img: antiragging,
  },
  {
    title: "Dress Code",
    content: [
      "Girls: Churidar with dupatta or sarees, black/brown shoes, overcoat in workshop.",
      "Boys: Full trousers, shirts with decent design, black/brown shoes.",
    ],
    img: dresscode,
  },
  {
    title: "Students Attendance and Leave",
    content: [
      "Students must attend regularly.",
      "Leave requires HoD approval, with medical certificate if sick.",
      "Attendance is calculated per lecture hour.",
      "Tests and assignments are mandatory.",
      "Insufficient attendance results in exam disqualification.",
    ],
    img: attendance,
  },
  {
    title: "Identity Card",
    content: ["Students must wear identity card inside campus."],
    img: idcard,
  },
  {
    title: "Helmet",
    content: ["Helmets are compulsory for riders and pillion riders."],
    img: helmet,
  },
  {
    title: "Mobile Phones",
    content: ["Mobile phones are banned inside campus and buses."],
    img: mobile,
  },
];

const CollegeRules = () => {
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
      <div className="college-rules-container">
        {rules.map((rule, index) => (
          <div key={index} className="rule-card animate-fade-slide">
            <div className="rule-image">
              <img src={rule.img} alt={`${rule.title} Illustration`} />
            </div>
            <div className="rule-text">
              <h2 className="page-sub_title">{rule.title}</h2>
              <ul>
                {rule.content.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default CollegeRules;
