import React from "react";
import CellClubTemplate from "../../../Common/CellClubTemplate/CellClubTemplate";

const StudentsCounsellingCell = () => {
  const counsellingData = {
    name: "Students Counselling Cell",
    about: "The Students Counselling Cell is dedicated to fostering the mental health and well-being of our students, providing a safe space for personal growth and academic success.",
    objectives: [
      "To provide professional counselling services to students for academic and personal issues.",
      "To conduct stress management and emotional wellness workshops.",
      "To foster a supportive environment within the campus community.",
      "To identify and assist students with learning disabilities or psychological challenges.",
      "To ensure student confidentiality and ethical support practices."
    ],
    coordinators: [
      { name: "Dr. P. VidhyaPriya", designation: "Chairman", dept: "Mgt. Studies", email: "vidhyapriya@kongu.ac.in", phone: "9443722211" },
      { name: "Dr. S. Varadhaganapathy", designation: "Member", dept: "IT", email: "varadhaganapathy@kongu.ac.in", phone: "9443034110" },
      { name: "Dr. V. Marutharaj", designation: "Member (BNYS, M.Sc Psychology)", dept: "Medical Center", email: "marutharaj@kongu.ac.in", phone: "9865201144" },
      { name: "Dr. S. Rajarathinam", designation: "Counsellor (BNYS, M.S)", dept: "Medical Center", email: "rajarathinam@kongu.ac.in", phone: "9842792277" }
    ],
    activitiesSummary: {
      "2025-26": 4,
      "2024-25": 8,
      "2023-24": 6
    },
    eventDetails: [
      {
        year: "2025-26",
        events: [
          { sno: 1, name: "Student Orientation Program", date: "2025-07-15", details: "Overview of counselling services for first-year students." },
          { sno: 2, name: "Mindfulness Session", date: "2025-08-20", details: "Morning session on meditation and focus." },
          { sno: 3, name: "Stress Relief Workshop", date: "2026-02-12", details: "Practical techniques for exam stress management." }
        ]
      },
      {
        year: "2024-25",
        events: [
          { sno: 1, name: "Global Mental Health Day Seminar", date: "2024-10-10", details: "Expert talk by renowned psychologists." },
          { sno: 2, name: "Self-Discovery Workshop", date: "2024-11-05", details: "Interactive session on personality development." },
          { sno: 3, name: "Anti-Bullying Campaign", date: "2024-12-15", details: "Awareness drive across all departments." }
        ]
      },
      {
        year: "2023-24",
        events: [
          { sno: 1, name: "Inaugural Workshop", date: "2023-08-01", details: "Launch of the updated counselling portal." },
          { sno: 2, name: "One-on-One Session series", date: "Weekly", details: "Open sessions for students." }
        ]
      }
    ],
    reports: [
      { title: "Annual Mental Health Review 2024-25", link: "#" },
      { title: "Workshop Report - Stress Management", link: "#" }
    ],
    otherDetails: "The counselling portal is accessible 24/7 for students to book appointments securely and confidentially. Feel free to reach out to any of the committee members for immediate assistance."
  };

  return <CellClubTemplate {...counsellingData} />;
};

export default StudentsCounsellingCell;
