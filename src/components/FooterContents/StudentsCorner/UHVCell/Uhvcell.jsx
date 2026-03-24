import React from "react";
import CellClubTemplate from "../../../Common/CellClubTemplate/CellClubTemplate";

const Uhvcell = () => {
  const uhvData = {
    name: "UHV Cell (Universal Human Values Cell)",
    about: "The UHV Cell is constituted to promote universal human values among students and staff, fostering a holistic and value-based educational environment.",
    objectives: [
      "To introduce and implement Universal Human Values in the curriculum and campus life.",
      "To organize workshops and seminars on human values and professional ethics.",
      "To nurture a culture of mutual respect, trust, and co-existence.",
      "To coordinate with various departments for effective value education."
    ],
    coordinators: [
      { name: "Dr. R. Parameshwaran", designation: "Chairman (Principal)", dept: "Administration", phone: "9942820583" },
      { name: "Dr. G. Murugesan", designation: "Convener (CCO-Academic)", dept: "Administration", phone: "9865273774" },
      { name: "Dr. S. Varadhaganapathy", designation: "Coordinator", dept: "IT", phone: "9443034110" }
    ],
    activitiesSummary: {
      "2025-26": 3,
      "2024-25": 5,
      "2023-24": 4
    },
    eventDetails: [
      {
        year: "2025-26",
        events: [
          { sno: 1, name: "Introductory Workshop on UHV", date: "2025-08-10", details: "Orientation for newly joined faculty members." },
          { sno: 2, name: "Student Value-Education Series", date: "2025-09-05", details: "Weekly sessions for first-year students." }
        ]
      },
      {
        year: "2024-25",
        events: [
          { sno: 1, name: "Five-day FDP on Human Values", date: "2024-11-20", details: "State-level faculty development program." },
          { sno: 2, name: "Community Service Initiative", date: "2024-12-10", details: "Field visit to orphanages for value immersion." }
        ]
      }
    ],
    reports: [
      { title: "Guidelines for UHV Cell in Universities", link: "Guidelines for the formation of UHV Cell at Universities and Institutions.pdf" }
    ],
    otherDetails: "The cell consistently works towards creating a harmonious environment where every individual can thrive based on sound human principles."
  };

  return <CellClubTemplate {...uhvData} />;
};

export default Uhvcell;
