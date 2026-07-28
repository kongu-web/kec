import React, { useEffect, useState, useRef, useMemo } from "react";
import "./Navbar.css";
import logo from "../../../assets/images/kec11.webp";
import badge41 from "../../../assets/images/41years2.webp";
import nif from "../../../assets/images/nirf.webp";
import naac from "../../../assets/images/naac.webp";
import tneaBadge from "../../../assets/images/tneacode.webp";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faSearch,
  faTimes,
  faGraduationCap
} from "@fortawesome/free-solid-svg-icons";

import { ReactComponent as VisionIcon } from "../../../assets/images/Icon/menu/vision.svg";
import { ReactComponent as ManagementIcon } from "../../../assets/images/Icon/menu/management.svg";
import { ReactComponent as MilestonesIcon } from "../../../assets/images/Icon/menu/milestones.svg";
import { ReactComponent as ApprovalsIcon } from "../../../assets/images/Icon/menu/approvals.svg";
import { ReactComponent as GoverningIcon } from "../../../assets/images/Icon/menu/governing.svg";

import { ReactComponent as BusIcon } from "../../../assets/images/Icon/menu/bus.svg";
import { ReactComponent as ClubIcon } from "../../../assets/images/Icon/menu/club.svg";
import { ReactComponent as DanceIcon } from "../../../assets/images/Icon/menu/dance.svg";
import { ReactComponent as GeneralIcon } from "../../../assets/images/Icon/menu/general.svg";
import { ReactComponent as HealthIcon } from "../../../assets/images/Icon/menu/health.svg";
import { ReactComponent as HostelIcon } from "../../../assets/images/Icon/menu/hostel.svg";
import { ReactComponent as LibraryIcon } from "../../../assets/images/Icon/menu/library.svg";
import { ReactComponent as LifeIcon } from "../../../assets/images/Icon/menu/life.svg";
import { ReactComponent as SportsIcon } from "../../../assets/images/Icon/menu/sports.svg";
import { ReactComponent as WelfareIcon } from "../../../assets/images/Icon/menu/welfare.svg";

import { ReactComponent as IndustryIcon } from "../../../assets/images/Icon/menu/industry.svg";
import { ReactComponent as CareerIcon } from "../../../assets/images/Icon/menu/career.svg";
import { ReactComponent as RecruitersIcon } from "../../../assets/images/Icon/menu/recruiters.svg";
import { ReactComponent as PlacementIcon } from "../../../assets/images/Icon/menu/placement.svg";
import { ReactComponent as TrainingIcon } from "../../../assets/images/Icon/menu/training.svg";

import { ReactComponent as AppliedIcon } from "../../../assets/images/Icon/menu/applied.svg";
import { ReactComponent as DoctoralIcon } from "../../../assets/images/Icon/menu/doctoral.svg";
import { ReactComponent as GraduateIcon } from "../../../assets/images/Icon/menu/graduate.svg";

import { ReactComponent as ValueaddIcon } from "../../../assets/images/Icon/menu/valueadd.svg";
import { ReactComponent as ExaminationsIcon } from "../../../assets/images/Icon/menu/examinations.svg";
import { ReactComponent as CalendarIcon } from "../../../assets/images/Icon/menu/calendar.svg";
import { ReactComponent as SyllabusIcon } from "../../../assets/images/Icon/menu/syllabus.svg";
import { ReactComponent as ProgramsIcon } from "../../../assets/images/Icon/menu/programs.svg";

import { useLocation } from "react-router-dom";
import AdmissionForm from "../../AdmissionForm/AdmissionForm"; // Add this import
import collegeData from "../../kongu.json";

const coursePathMap = {
  cse: "/cse",
  it: "/it",
  ece: "/ece",
  eee: "/eee",
  eie: "/eie",
  mech: "/mech",
  mts: "/mts",
  auto: "/auto",
  civil: "/civil",
  chem: "/chem",
  food: "/foodtech",
  aids: "/aids",
  aiml: "/aiml",
  csd: "/csd",
  mca: "/mca",
  mba: "/mba",
  bsc_csd: "/ctug",
  bsc_is: "/ctug",
  bsc_ss: "/ctug",
  msc_ss: "/ctpg",
  phd: "/doctoral",
  me: "/pg"
};

const searchPages = [
  { name: "About KEC", path: "/aboutkec" },
  { name: "Vision & Mission", path: "/vision" },
  { name: "Management / Trust", path: "/officebearers" },
  { name: "Head of the Institution", path: "/headoftheinstitution" },
  { name: "Governing Council", path: "/governingcouncil" },
  { name: "Academic Council", path: "/academiccouncil" },
  { name: "University Ranks", path: "/universityranks" },
  { name: "Endowments", path: "/endownments" },
  { name: "College Rules", path: "/collegerules" },
  { name: "Placement Cell", path: "/placement" },
  { name: "Admission", path: "/admission" },
  { name: "Centre of Excellence (COE)", path: "/coe" },
  { name: "Hackathons", path: "/hackathons" },
  { name: "Under Graduate Departments (UG)", path: "/ug" },
  { name: "Post Graduate Departments (PG)", path: "/pg" },
  { name: "Doctoral / PhD", path: "/doctoral" },
  { name: "Computer Technology (Applied Science)", path: "/appliedscience" },
  { name: "Science & Humanities", path: "/snh" },
  // { name: "Online Payment", path: "/onlinepayment" },
  { name: "Online Payment", path: "/kec.linways.com" },
  { name: "Contact Us", path: "/contact" },
  { name: "Campus Life", path: "/campus-life" },
  { name: "Facilities", path: "/facilities" },
  { name: "Student Centric Activities / Clubs", path: "/student-centric-activities" },
  { name: "NCC", path: "/clubs/ncc" },
  { name: "NSS", path: "/clubs/nss" },
  { name: "IQAC / Accreditation", path: "/iqac" },
  { name: "Automobile Engineering", path: "/auto" },
  { name: "AI & Data Science (AIDS)", path: "/aids" },
  { name: "AI & Machine Learning (AIML)", path: "/aiml" },
  { name: "Chemical Engineering", path: "/chem" },
  { name: "Civil Engineering", path: "/civil" },
  { name: "Computer Science and Design (CSD)", path: "/csd" },
  { name: "Computer Science & Engineering (CSE)", path: "/cse" },
  { name: "Electronics & Communication Engineering (ECE)", path: "/ece" },
  { name: "Electrical & Electronics Engineering (EEE)", path: "/eee" },
  { name: "Electronics & Instrumentation Engineering (EIE)", path: "/eie" },
  { name: "Food Technology", path: "/foodtech" },
  { name: "Information Technology (IT)", path: "/it" },
  { name: "Architecture", path: "/architecture" },
  { name: "MBA", path: "/mba" },
  { name: "MCA", path: "/mca" },
  { name: "Mechanical Engineering", path: "/mech" },
  { name: "Mechatronics Engineering", path: "/mts" },
];

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // Center menu
  const [activeUtilityMenu, setActiveUtilityMenu] = useState(false); // Top utility

  const [isOpen, setIsOpen] = useState(false);

  const [openMobileMenu, setOpenMobileMenu] = useState(null);

  const [moreOpen, setMoreOpen] = useState(false);
  const [showForm, setShowForm] = useState(false); // Add state for form modal
  
  const [searchQuery, setSearchQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [searchDrawerOpen, setSearchDrawerOpen] = useState(false);
  const searchRef = useRef(null);
  const searchInputRef = useRef(null);

  const navigate = useNavigate();
  const location = useLocation(); // ✅ REQUIRED
  const moreRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (searchDrawerOpen) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 300);
    }
  }, [searchDrawerOpen]);

  const [searchIndex, setSearchIndex] = useState([]);

  useEffect(() => {
    const allIndex = [];

    // 1. Add static pages from searchPages
    searchPages.forEach(page => {
      allIndex.push({
        name: page.name,
        path: page.path,
        type: "Page",
        category: "Quick Navigation"
      });
    });

    // 2. Index Undergraduate Courses
    if (collegeData?.courses?.undergraduate) {
      collegeData.courses.undergraduate.forEach(course => {
        allIndex.push({
          name: course.course_name,
          description: course.description,
          tags: course.search_tags || [],
          path: coursePathMap[course.id] || "/ug",
          type: "Course/Department",
          category: "Undergraduate"
        });
      });
    }

    // 3. Index Postgraduate Courses
    if (collegeData?.courses?.postgraduate) {
      collegeData.courses.postgraduate.forEach(course => {
        allIndex.push({
          name: course.course_name,
          description: course.description,
          tags: course.search_tags || [],
          path: coursePathMap[course.id] || "/pg",
          type: "Course/Department",
          category: "Postgraduate"
        });
      });
    }

    // 4. Index Applied Science Courses
    if (collegeData?.courses?.applied_science) {
      collegeData.courses.applied_science.forEach(course => {
        allIndex.push({
          name: course.course_name,
          description: course.description,
          tags: course.search_tags || [],
          path: coursePathMap[course.id] || "/appliedscience",
          type: "Course/Department",
          category: "Applied Science"
        });
      });
    }

    // 5. Index Doctorate Courses
    if (collegeData?.courses?.doctorate) {
      collegeData.courses.doctorate.forEach(course => {
        allIndex.push({
          name: course.course_name,
          description: course.description,
          tags: course.search_tags || [],
          path: coursePathMap[course.id] || "/doctoral",
          type: "Course/Department",
          category: "Research/Doctorate"
        });
      });
    }

    // 6. Index Placement Highlights & Recruiters
    if (collegeData?.placements) {
      const placement = collegeData.placements;
      if (placement.recruiters?.list) {
        allIndex.push({
          name: "Placement - Top Recruiters",
          description: `Recruiters: ${placement.recruiters.list.join(", ")}. ${placement.recruiters.desc}`,
          tags: ["placement", "jobs", "recruiters", "companies", ...placement.recruiters.list],
          path: "/placement",
          type: "Placement Info",
          category: "Placements"
        });
      }
      if (placement.highlights?.stats) {
        allIndex.push({
          name: "Placement - Statistics and Packages",
          description: `${placement.highlights.desc} ${placement.highlights.stats.join(" | ")}`,
          tags: ["packages", "lpa", "salary", "placed stats", "placement statistics"],
          path: "/placement",
          type: "Placement Info",
          category: "Placements"
        });
      }
    }

    // 7. Index Admission Details
    if (collegeData?.admissions) {
      const adm = collegeData.admissions;
      allIndex.push({
        name: "Admission Eligibility - UG, PG, MBA, MCA",
        description: `Eligibility: ${adm.eligibility?.ug || ""} | ${adm.eligibility?.pg || ""} | ${adm.eligibility?.mba || ""}`,
        tags: ["eligibility", "cutoff", "marks", "hsc", "admissions", "criteria"],
        path: "/admission",
        type: "Admission Info",
        category: "Admissions"
      });
      allIndex.push({
        name: "Admission Process & Steps",
        description: `Application process steps: ${adm.process?.steps?.join(" ") || ""}`,
        tags: ["admission process", "how to apply", "enquiry form", "apply"],
        path: "/admission",
        type: "Admission Info",
        category: "Admissions"
      });
    }

    // 9. Index Subdomains & External Portals
    const subdomains = [
      {
        name: "Academic (Student & Faculty Login)",
        description: "Official Academic portal of Kongu Engineering College for students and faculty.",
        tags: ["academic portal", "student login", "faculty login", "subdomain", "academic.kongu.edu"],
        path: "https://academic.kongu.edu/",
        type: "Subdomain",
        category: "Quick Navigation"
      },
      {
        name: "Controller of Examinations (COE)",
        description: "Office of the Controller of Examinations (COE) - exam schedules, results, circulars.",
        tags: ["coe portal", "examinations", "results", "exam schedule", "coe.kongu.edu"],
        path: "https://coe.kongu.edu/",
        type: "Subdomain",
        category: "Quick Navigation"
      },
      {
        name: "COE - Semester Examination Results",
        description: "Check semester examination results and marks details online.",
        tags: ["exam results", "semester results", "results link", "coe results", "grades", "gpa"],
        path: "https://coe.kongu.edu/",
        type: "Subdomain",
        category: "Quick Navigation"
      },
      {
        name: "COE - Exam Schedule & Time Table",
        description: "View semester theory and practical exam schedules and time tables.",
        tags: ["exam schedule", "time table", "practical schedule", "exam dates", "theory timetable"],
        path: "https://coe.kongu.edu/",
        type: "Subdomain",
        category: "Quick Navigation"
      },
      {
        name: "COE - Revaluation Circulars & Forms",
        description: "Find information and circulars regarding revaluation and photocopy requests.",
        tags: ["revaluation", "photocopy", "paper verification", "paper correction"],
        path: "https://coe.kongu.edu/",
        type: "Subdomain",
        category: "Quick Navigation"
      },
      {
        name: "Research & Development (R&D)",
        description: "R&D activities, funded projects, publications, doctoral supervisors list.",
        tags: ["r&d portal", "research", "projects", "publications", "supervisors", "phd supervisors", "rnd.kongu.edu"],
        path: "https://rnd.kongu.edu/",
        type: "Subdomain",
        category: "Quick Navigation"
      },
      {
        name: "R&D - Ph.D / Doctoral Supervisors List",
        description: "View the list of recognized Ph.D supervisors and research guidelines.",
        tags: ["supervisors", "phd supervisors", "guides", "research guide", "doctoral supervisors"],
        path: "https://rnd.kongu.edu/",
        type: "Subdomain",
        category: "Quick Navigation"
      },
      {
        name: "R&D - Funded Research Projects",
        description: "Ongoing and completed research projects funded by external agencies.",
        tags: ["funded projects", "research grants", "funding", "dst", "drdo", "isro", "aicte projects"],
        path: "https://rnd.kongu.edu/",
        type: "Subdomain",
        category: "Quick Navigation"
      },
      {
        name: "R&D - Publications (Journals & Conferences)",
        description: "List of research papers, journals, and conference proceedings published by faculty.",
        tags: ["publications", "research papers", "journals", "scopus", "web of science", "conferences"],
        path: "https://rnd.kongu.edu/",
        type: "Subdomain",
        category: "Quick Navigation"
      },
      {
        name: "IIPC - Industry Institute Partnership Cell",
        description: "Industry Collaboration, training programs, consulting, MoUs, iipc.kongu.edu.",
        tags: ["iipc", "industry partnership", "collaboration", "consulting", "mou", "iipc.kongu.edu"],
        path: "http://iipc.kongu.edu",
        type: "Subdomain",
        category: "Quick Navigation"
      },
      {
        name: "IIPC - Value Added & Industry Training",
        description: "Specialized training programs and courses offered in partnership with industries.",
        tags: ["industry training", "value added courses", "specialized courses", "internships"],
        path: "http://iipc.kongu.edu",
        type: "Subdomain",
        category: "Quick Navigation"
      },
      {
        name: "KEC AICTE Idea Lab",
        description: "AICTE sponsored facility supporting student projects, prototyping, and hands-on training.",
        tags: ["idea lab", "aicte", "prototyping", "student projects", "kecidealab.kongu.edu"],
        path: "https://kecidealab.kongu.edu/",
        type: "Subdomain",
        category: "Quick Navigation"
      },
      {
        name: "Linways ERP",
        description: "Linways Academic ERP management system for students, attendance, internal marks.",
        tags: ["linways portal", "erp", "attendance", "internal marks", "kec.linways.com"],
        path: "https://kec.linways.com/",
        type: "Subdomain",
        category: "Quick Navigation"
      },
      {
        name: "Linways - Attendance Check & Internal Marks",
        description: "Check your academic progress, daily attendance percentage, and internal exam marks.",
        tags: ["attendance check", "check marks", "internal marks", "linways student login", "marks portal"],
        path: "https://kec.linways.com/",
        type: "Subdomain",
        category: "Quick Navigation"
      },
      {
        name: "KMS (Knowledge Management System)",
        description: "Official KMS Portal of Kongu Engineering College.",
        tags: ["kms portal", "knowledge management", "kms.kongu.edu"],
        path: "https://kms.kongu.edu/",
        type: "Subdomain",
        category: "Quick Navigation"
      },
      {
        name: "Teaching Recruitment (KMS)",
        description: "Recruitment portal for teaching faculty applications.",
        tags: ["recruitment", "careers", "teaching jobs", "faculty recruitment"],
        path: "https://kms.kongu.edu/recruitment/",
        type: "Subdomain",
        category: "Quick Navigation"
      },
      {
        name: "Non-Teaching Recruitment (KMS)",
        description: "Recruitment portal for non-teaching staff applications.",
        tags: ["recruitment", "careers", "non-teaching jobs", "staff recruitment"],
        path: "https://kms.kongu.edu/nt_recruitment/",
        type: "Subdomain",
        category: "Quick Navigation"
      },
      {
        name: "Alumni",
        description: "Connect with KEC Alumni, events, directory, and network.",
        tags: ["alumni association", "alumni portal", "graduates", "alumni.kongu.edu"],
        path: "https://alumni.kongu.edu/",
        type: "Subdomain",
        category: "Quick Navigation"
      }
    ];

    subdomains.forEach(sub => {
      allIndex.push(sub);
    });

    // Initialize with static content
    setSearchIndex(allIndex);

    // 8. Fetch and parse 22 Faculty CSV lists
    const depts = [
      { csv: "aids.csv", path: "/aids", dept: "AI & Data Science (AIDS)" },
      { csv: "aiml.csv", path: "/aiml", dept: "AI & Machine Learning (AIML)" },
      { csv: "automobile.csv", path: "/auto", dept: "Automobile Engineering" },
      { csv: "chemical.csv", path: "/chem", dept: "Chemical Engineering" },
      { csv: "chemistry.csv", path: "/chemistry", dept: "Chemistry" },
      { csv: "civil.csv", path: "/civil", dept: "Civil Engineering" },
      { csv: "csd.csv", path: "/csd", dept: "Computer Science and Design (CSD)" },
      { csv: "cse.csv", path: "/cse", dept: "Computer Science & Engineering (CSE)" },
      { csv: "ctpg.csv", path: "/ctpg", dept: "Computer Technology (CT - PG)" },
      { csv: "ctug.csv", path: "/ctug", dept: "Computer Technology (CT - UG)" },
      { csv: "ece.csv", path: "/ece", dept: "Electronics & Communication Engineering (ECE)" },
      { csv: "eee.csv", path: "/eee", dept: "Electrical & Electronics Engineering (EEE)" },
      { csv: "eie.csv", path: "/eie", dept: "Electronics & Instrumentation Engineering (EIE)" },
      { csv: "english.csv", path: "/english", dept: "English" },
      { csv: "foodtech.csv", path: "/foodtech", dept: "Food Technology" },
      { csv: "it.csv", path: "/it", dept: "Information Technology (IT)" },
      { csv: "maths.csv", path: "/maths", dept: "Mathematics" },
      { csv: "mba.csv", path: "/mba", dept: "MBA" },
      { csv: "mca.csv", path: "/mca", dept: "MCA" },
      { csv: "mech.csv", path: "/mech", dept: "Mechanical Engineering" },
      { csv: "mts.csv", path: "/mts", dept: "Mechatronics Engineering" },
      { csv: "physics.csv", path: "/physics", dept: "Physics" }
    ];

    const fetchFaculty = async () => {
      const allFaculty = [];
      await Promise.all(
        depts.map(async (d) => {
          try {
            const res = await fetch(`/Faculty/${d.csv}`);
            if (!res.ok) return;
            const text = await res.text();
            const lines = text.split("\n");
            lines.forEach((line) => {
              const trimmed = line.trim();
              if (!trimmed) return;
              const cleanPart = (str) =>
                str ? str.replace(/^["']|["']$/g, "").trim() : "";
              const parts = trimmed.split(",").map(cleanPart);
              if (parts.length >= 2) {
                const name = parts[1];
                const designation = parts[2] || "";
                const profileLink = parts[3] || "";
                if (name) {
                  allFaculty.push({
                    name: name,
                    designation: designation,
                    deptName: d.dept,
                    path: d.path,
                    profileLink: profileLink || d.path,
                    type: "Faculty",
                    category: "Faculty & Staff"
                  });
                }
              }
            });
          } catch (err) {
            console.error(`Error loading faculty CSV: ${d.csv}`, err);
          }
        })
      );
      setSearchIndex((prev) => [...prev, ...allFaculty]);
    };

    fetchFaculty();
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setShowResults(true);
  };

  const handleResultClick = (path) => {
    navigate(path);
    setSearchQuery("");
    setShowResults(false);
    setSearchDrawerOpen(false);
  };

  const handleItemClick = (item) => {
    if (item.type === "Subdomain") {
      window.open(item.path, "_blank");
    } else if (item.type === "Faculty" && item.profileLink) {
      window.open(item.profileLink, "_blank");
    } else {
      navigate(item.path);
    }
    setSearchQuery("");
    setShowResults(false);
    setSearchDrawerOpen(false);
  };

  const filteredPages = useMemo(() => {
    if (searchQuery.trim() === "") return [];

    const terms = searchQuery.toLowerCase().split(/\s+/).filter(Boolean);
    if (terms.length === 0) return [];

    const matched = searchIndex.filter((item) => {
      return terms.every((term) => {
        const nameMatch = item.name?.toLowerCase().includes(term);
        const descMatch = item.description?.toLowerCase().includes(term);
        const typeMatch = item.type?.toLowerCase().includes(term);
        const categoryMatch = item.category?.toLowerCase().includes(term);
        const deptMatch = item.deptName?.toLowerCase().includes(term);
        const designationMatch = item.designation?.toLowerCase().includes(term);
        const tagsMatch = item.tags?.some((tag) => tag.toLowerCase().includes(term));

        return (
          nameMatch ||
          descMatch ||
          typeMatch ||
          categoryMatch ||
          deptMatch ||
          designationMatch ||
          tagsMatch
        );
      });
    });

    const seen = new Set();
    const uniqueResults = [];

    for (const item of matched) {
      const key = item.type === "Faculty" ? item.profileLink : item.path;
      if (!seen.has(key)) {
        seen.add(key);
        uniqueResults.push(item);
      }
    }

    return uniqueResults.slice(0, 50);
  }, [searchQuery, searchIndex]);

  const handleMouseEnter = (index) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(index);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  const menuRoutes = {
    about: [
      "/about",
      "/vision",
      "/management",
      "/milestones",
      "/approvals",
      "/governing",
    ],
    academics: [
      "/academics",
      "/programs",
      "/syllabus",
      "/calendar",
      "/examinations",
      "/value-added",
    ],
    departments: ["/departments", "/ug", "/pg", "/phd", "/applied-science"],
    placement: [
      "/placement",
      "/training",
      "/statistics",
      "/recruiters",
      "/career",
      "/industry",
    ],
    campus: [
      "/campus-life",
      "/clubs",
      "/ncc",
      "/nss",
      "/yrc",
      "/sports",
      "/library",
      "/hostel",
      "/transport",
      "/health",
      "/welfare",
    ],
    others: ["/facilities", "/ief"],
  };

  const isMenuActive = (routes) =>
    routes.some((route) => location.pathname.startsWith(route));

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e) => {
      if (moreRef.current && !moreRef.current.contains(e.target)) {
        setMoreOpen(false);
      }
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowResults(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => {
    const setPadding = () => {
      const header = document.querySelector(".header-container");
      if (header) {
        const headerHeight = header.offsetHeight;
        document.body.style.paddingTop = `${headerHeight}px`;
      }
    };
    
    // Set padding initially
    setPadding();
    
    // Set padding after images/DOM nodes are loaded and settled
    const timer = setTimeout(setPadding, 100);
    const timer2 = setTimeout(setPadding, 500);
    
    // Listen for window resize to adjust dynamically
    window.addEventListener("resize", setPadding);
    
    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
      window.removeEventListener("resize", setPadding);
      document.body.style.paddingTop = "0"; // Cleanup on unmount
    };
  }, []);

  // Prevent background scrolling when mobile menu, form, or search drawer is open
  useEffect(() => {
    const lockScroll = mobileMenu || showForm || searchDrawerOpen;
    if (lockScroll) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      document.body.style.height = "100%";
      document.documentElement.style.height = "100%";
    } else {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
      document.body.style.height = "auto";
      document.documentElement.style.height = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
      document.body.style.height = "auto";
      document.documentElement.style.height = "auto";
    };
  }, [mobileMenu, showForm, searchDrawerOpen]);

  const toggleDropdown = (i) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(activeDropdown === i ? null : i);
  };

  return (
    <>
      {/* ================= TOP UTILITY BAR ================= */}
      <div className="header-container">
        <div className="top-utility-bar">
          <div className="utility-left">
            <div className="marquee">
              <div className="marquee-track">
                <a
                  href="https://kongu.ac.in/admission"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  📣 Admission Enquiry 2026
                </a>

                {/* international conference */}
                {/* <a
                  href="https://ngcast2026.kongu.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ⚡ International conference - NG-CAST 2026
                </a> */}

                 {/* <a
                  href="https://grad2026.kongu.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ⚡ 38th Graduation Day Registration Link
                </a> */}
              </div>

            </div>
          </div>

          <div className="utility-right">
            {/* <div
              className="nav-item has-submenu"
              onMouseEnter={() => {
                setActiveUtilityMenu(true);
                setActiveDropdown(null); // 🔥 CLOSE CENTER MENU
              }}
              onMouseLeave={() => setActiveUtilityMenu(false)}
            > */}
            <a href="/iqac">Accreditation & IQAC</a>

            {/* {activeUtilityMenu && (
                <div className="submenu">
                  <a href="/nba">NBA</a>
                  <a href="/naac">NAAC</a>
                  {/* <a href="/iqac">IQAC</a> */}
            {/* <a href="/nirf">NIRF</a>
                  <a href="/aicteet">AICTE - E&T</a>
                  <a href="/aictemca">AICTE - MCA</a>
                  <a href="/aictemba">AICTE - MBA</a>
                </div>
              )}
            </div> */}

            <a href="https://kongu.ac.in/blogs/">Blogs</a>

            {/* <a>Research & Innovation</a> */}
            <div
              className="nav-item has-submenu"
              onMouseEnter={() => {
                setActiveUtilityMenu(true);
                setActiveDropdown(null); // 🔥 CLOSE CENTER MENU
              }}
              onMouseLeave={() => setActiveUtilityMenu(false)}
            >
              <a href="#">ERP</a>

              {activeUtilityMenu && (
                <div className="submenu">
                  <a href="https://kec.linways.com/">Linways Portal</a>
                  <a href="https://kms.kongu.edu/">KMS Portal</a>
                </div>
              )}
            </div>

            <div
              className="nav-item has-submenu"
              onMouseEnter={() => {
                setActiveUtilityMenu(true);
                setActiveDropdown(null); // 🔥 CLOSE CENTER MENU
              }}
              onMouseLeave={() => setActiveUtilityMenu(false)}
            >
              <a href="#">Careers</a>

              {activeUtilityMenu && (
                <div className="submenu">
                  <a href="https://kms.kongu.edu/recruitment/">Teaching</a>
                  <a href="https://kms.kongu.edu/nt_recruitment/">
                    Non-Teaching
                  </a>

                 {/* <a href="studentcounsellor.webp" target="_blank" rel="noopener noreferrer">
                    Student Counsellor
                </a> */}
                
                </div>
              )}
            </div>

            {/* <a href="/admission">Admission</a> */}
            <a href="https://alumni.kongu.edu/">Alumni</a>
            <a href="https://kec.linways.com/">Online Payment</a>
            <a href="/contact" onClick={(e) => { e.preventDefault(); navigate("/contact"); }}>Contact</a>
            
            <button 
              className="utility-search-trigger-btn"
              onClick={() => setSearchDrawerOpen(true)}
              title="Search KEC"
            >
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </div>
        {/* ================= EXISTING NAVBAR ================= */}
        <nav className={`main-navbar ${sticky ? "sticky" : ""}`}>
          {/* LEFT */}
          <div className="nav-left">
            <img
              src={logo}
              alt="KEC Logo"
              className="nav-logo"
              onClick={() => navigate("/")}
              style={{ cursor: "pointer" }}
            />

            {/* BADGES */}
            <div className="nav-badges">
              <img src={badge41} alt="41 Years" />
              {/* <img src={nif} alt="NIRF" /> */}
              <img src={naac} alt="NAAC" className="naac-badge" />
            </div>
          </div>

          {/* CENTER MENU */}
          <ul className="nav-menu">
            <li
              className={location.pathname === "/" ? "active" : ""}
              onMouseEnter={() => handleMouseEnter(null)}
              onClick={() => navigate("/")}
            >
              Home
            </li>

            <li
              className={`${isMenuActive(menuRoutes.about) ? "active" : ""
                } has-dropdown`}
              onMouseEnter={() => handleMouseEnter(1)}
              onMouseLeave={handleMouseLeave}
            >
              About Us
              {activeDropdown === 1 && (
                <div
                  className="card-dropdown"
                  onMouseEnter={() => handleMouseEnter(1)}
                  onMouseLeave={handleMouseLeave}
                >
                  <span onClick={() => navigate("/aboutkec")}>
                    <MilestonesIcon className="submenu-icon" />
                    About KEC
                  </span>

                  <span onClick={() => navigate("/vision")}>
                    <VisionIcon className="submenu-icon" />
                    Vision & Mission
                  </span>

                  <span onClick={() => navigate("/officebearers")}>
                    <ManagementIcon className="submenu-icon" />
                    Management / Trust
                  </span>

                  <span onClick={() => navigate("/headoftheinstitution")}>
                    <MilestonesIcon className="submenu-icon" />
                    Head of the Institution
                  </span>

                  <span onClick={() => navigate("/governingcouncil")}>
                    <GoverningIcon className="submenu-icon" />
                    Governing Council
                  </span>

                  <span onClick={() => navigate("/academiccouncil")}>
                    <ApprovalsIcon className="submenu-icon" />
                    Academic Council
                  </span>

                  <span onClick={() => navigate("/universityranks")}>
                    <ProgramsIcon className="submenu-icon" />
                    University Ranks
                  </span>

                  <span onClick={() => navigate("/endownments")}>
                    <SyllabusIcon className="submenu-icon" />
                    Endowments
                  </span>

                  <span onClick={() => navigate("/collegerules")}>
                    <ExaminationsIcon className="submenu-icon" />
                    College Rule
                  </span>

                  {/* <span onClick={() => navigate("/approvals")}>
                    <ExaminationsIcon className="submenu-icon" />
                    Office of the COE / Examinations
                  </span> */}
                </div>
              )}
            </li>

            {/* <li
              className={
                location.pathname.startsWith("/academics")
                  ? "active has-dropdown"
                  : "has-dropdown"
              }
              onMouseEnter={() => setActiveDropdown(2)}
            >
              Academics
              {activeDropdown === 2 && (
                <div
                  className="card-dropdown"
                  onMouseEnter={() => setActiveDropdown(2)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <span onClick={() => navigate("/vision")}>
                    <ProgramsIcon className="submenu-icon" />
                    Programs Offered (UG | PG | PhD)
                  </span>

                  <span onClick={() => navigate("/management")}>
                    <SyllabusIcon className="submenu-icon" />
                    Academic Regulations & Syllabus
                  </span>

                  <span onClick={() => navigate("/milestones")}>
                    <CalendarIcon className="submenu-icon" />
                    Academic Calendar
                  </span>

                  <span onClick={() => navigate("/approvals")}>
                    <ExaminationsIcon className="submenu-icon" />
                    Office of the COE / Examinations
                  </span>

                  <span onClick={() => navigate("/governing")}>
                    <ValueaddIcon className="submenu-icon" />
                    Value-Added & Skill Courses
                  </span>
                </div>
              )}
            </li> */}
            <li
              className={`${isMenuActive(menuRoutes.departments) ? "active" : ""
                } has-dropdown`}
              onMouseEnter={() => handleMouseEnter(3)}
              onMouseLeave={handleMouseLeave}
            >
              Departments
              {activeDropdown === 3 && (
                <div
                  className="card-dropdown"
                  onMouseEnter={() => handleMouseEnter(3)}
                  onMouseLeave={handleMouseLeave}
                >
                  <span onClick={() => navigate("/ug")}>
                    <GraduateIcon className="submenu-icon" />
                    Under Graduate
                  </span>

                  <span onClick={() => navigate("/pg")}>
                    <GraduateIcon className="submenu-icon" />
                    Post Graduate
                  </span>

                  <span onClick={() => navigate("/doctoral")}>
                    <DoctoralIcon className="submenu-icon" />
                    Doctoral
                  </span>

                  <span onClick={() => navigate("/appliedscience")}>
                    <AppliedIcon className="submenu-icon" />
                    Computer Technology
                  </span>

                  <span onClick={() => navigate("/snh")}>
                    <AppliedIcon className="submenu-icon" />
                    Science & Humanities
                  </span>
                </div>
              )}
            </li>

            {/* <li
              className={
                location.pathname.startsWith("/placement")
                  ? "active has-dropdown"
                  : "has-dropdown"
              }
              onMouseEnter={() => setActiveDropdown(4)}
            >
              Placement
              {activeDropdown === 4 && (
                <div
                  className="card-dropdown"
                  onMouseEnter={() => setActiveDropdown(4)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <span onClick={() => navigate("/vision")}>
                    <TrainingIcon className="submenu-icon" />
                    Training & Placement Cell
                  </span>

                  <span onClick={() => navigate("/management")}>
                    <PlacementIcon className="submenu-icon" />
                    Placement Statistics
                  </span>

                  <span onClick={() => navigate("/milestones")}>
                    <RecruitersIcon className="submenu-icon" />
                    Recruiters
                  </span>

                  <span onClick={() => navigate("/approvals")}>
                    <TrainingIcon className="submenu-icon" />
                    Training Programs
                  </span>

                  <span onClick={() => navigate("/governing")}>
                    <CareerIcon className="submenu-icon" />
                    Career Guidance & Higher Studies Cell
                  </span>

                  <span onClick={() => navigate("/governing")}>
                    <IndustryIcon className="submenu-icon" />
                    Industry–Institute Interaction
                  </span>
                </div>
              )}
            </li> */}
            <li
              className={location.pathname === "/placement" ? "active" : ""}
              onMouseEnter={() => handleMouseEnter(null)}
              onClick={() => navigate("/placement")}
            >
              Placement
            </li>

            {/* <li
              className={
                location.pathname.startsWith("/campus-life")
                  ? "active has-dropdown"
                  : "has-dropdown"
              }
              onMouseEnter={() => setActiveDropdown(5)}
            >
              Campus Life
              {activeDropdown === 5 && (
                <div
                  className="card-dropdown"
                  onMouseEnter={() => setActiveDropdown(5)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <span onClick={() => navigate("/vision")}>
                    <LifeIcon className="submenu-icon" />
                    Life @ KEC
                  </span>

                  <span onClick={() => navigate("/management")}>
                    <ClubIcon className="submenu-icon" />
                    Clubs & Associations
                  </span>

                  <span onClick={() => navigate("/milestones")}>
                    <GeneralIcon className="submenu-icon" />
                    NCC
                  </span>

                  <span onClick={() => navigate("/approvals")}>
                    <GeneralIcon className="submenu-icon" />
                    NSS
                  </span>

                  <span onClick={() => navigate("/governing")}>
                    <GeneralIcon className="submenu-icon" />
                    YRC
                  </span>

                  <span onClick={() => navigate("/governing")}>
                    <SportsIcon className="submenu-icon" />
                    Sports & Games
                  </span>

                  <span onClick={() => navigate("/milestones")}>
                    <DanceIcon className="submenu-icon" />
                    Cultural & Flagship Events
                  </span>

                  <span onClick={() => navigate("/approvals")}>
                    <LibraryIcon className="submenu-icon" />
                    Library
                  </span>

                  <span onClick={() => navigate("/governing")}>
                    <HostelIcon className="submenu-icon" />
                    Hostel
                  </span>

                  <span onClick={() => navigate("/governing")}>
                    <BusIcon className="submenu-icon" />
                    Transport
                  </span>

                  <span onClick={() => navigate("/governing")}>
                    <HealthIcon className="submenu-icon" />
                    Health Centre
                  </span>

                  <span onClick={() => navigate("/governing")}>
                    <WelfareIcon className="submenu-icon" />
                    Student Support & Welfare
                  </span>
                </div>
              )}
            </li> */}
            <li
              className={`${location.pathname === "/admission" ? "active" : ""} admission-blink`}
              onMouseEnter={() => handleMouseEnter(null)}
              onClick={() => navigate("/admission")}
            >
              Admission
            </li>

            <li
              onMouseEnter={() => handleMouseEnter(null)}
              onClick={() => window.open("https://rnd.kongu.edu/", "_blank")}
            >
              R&amp;D
            </li>

            <li
              className={`${isMenuActive(menuRoutes.others) ? "active" : ""
                } has-dropdown`}
              onMouseEnter={() => handleMouseEnter(6)}
              onMouseLeave={handleMouseLeave}
            >
              Explore
              {activeDropdown === 6 && (
                <div
                  className="card-dropdown"
                  onMouseEnter={() => handleMouseEnter(6)}
                  onMouseLeave={handleMouseLeave}
                >
                  {/* External pages (open in new tab) */}
                  <span
                    onClick={() =>
                      window.open("https://academic.kongu.edu/", "_blank")
                    }
                  >
                    <LibraryIcon className="submenu-icon" />
                    Academic
                  </span>

                  <span
                    onClick={() =>
                      window.open("http://iipc.kongu.edu", "_blank")
                    }
                  >
                    <DanceIcon className="submenu-icon" />
                    IIPC
                  </span>

                  <span
                    onClick={() =>
                      window.open("https://coe.kongu.edu/", "_blank")
                    }
                  >
                    <ClubIcon className="submenu-icon" />
                    COE
                  </span>

                  <span onClick={() => navigate("/ief")}>
                    <HostelIcon className="submenu-icon" />
                    IEF
                  </span>

                  <span
                    onClick={() =>
                      window.open("https://kecidealab.kongu.edu/", "_blank")
                    }
                  >
                    <SportsIcon className="submenu-icon" />
                    KEC - AICTE Idea Lab
                  </span>

                  <span onClick={() =>
                    window.open("https://www.aicte.gov.in/schemes/students-development-schemes", "_blank")
                  }>
                    <ValueaddIcon className="submenu-icon" />
                    AICTE Students Development schemes
                  </span>

                  {/* Internal pages */}
                  <span onClick={() => navigate("/campus-life")}>
                    <LifeIcon className="submenu-icon" />
                    Campus Life
                  </span>

                  <span onClick={() => window.open("https://cpf-frontend.onrender.com/", "_blank")}>
                    <GeneralIcon className="submenu-icon" />
                    SCC (Student Counselling Cell - Portal)
                  </span>

                  <span onClick={() => navigate("/student-centric-activities")}>
                    <HostelIcon className="submenu-icon" />
                    Student Centric Activities
                  </span>

                  <span onClick={() => navigate("/coe")}>
                    <GeneralIcon className="submenu-icon" />
                    Centre of Excellence
                  </span>

                  <span onClick={() => navigate("/clubs/ncc")}>
                    <GeneralIcon className="submenu-icon" />
                    NCC
                  </span>

                  <span onClick={() => navigate("/clubs/nss")}>
                    <GeneralIcon className="submenu-icon" />
                    NSS
                  </span>

                  <span
                    onClick={() =>
                      window.open("https://kongu.irins.org/", "_blank")
                    }
                  >
                    <GeneralIcon className="submenu-icon" />
                    Faculty Profile
                  </span>
                </div>
              )}
            </li>
          </ul>

          {/* RIGHT CTA */}
          {/* <div className="nav-actions">
            <button className="enquiry-btn" onClick={() => setShowForm(true)}>
              Enquiry Now
            </button>{" "} */}
          {/* Add onClick */}
          {/* <img
              src={tneaBadge}
              alt="TNEA Code 2711"
              className="tnea-badge-img"
            />
          </div> */}

          <div className="nav-actions">
            <a
              href="/admission"
              className="enquiry-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Enquire Now
            </a>

            <img
              src={tneaBadge}
              alt="TNEA Code 2711"
              className="tnea-badge-img"
            />
          </div>

          {/* MOBILE ICON */}
          <FontAwesomeIcon
            icon={faBars}
            className="mobile-icon"
            onClick={() => setMobileMenu(true)}
          />

          {/* OVERLAY */}
          <div
            className={`mobile-overlay ${mobileMenu ? "show" : ""}`}
            onClick={() => setMobileMenu(false)}
          />

          {/* MOBILE MENU */}
          {/* {mobileMenu && ( */}
          <div className={`mobile-drawer ${mobileMenu ? "open" : ""}`}>
            <div className="mobile-drawer-header">
              <img
                src={logo}
                alt="KEC"
                className="mobile-logo"
                onClick={() => {
                  navigate("/");
                  setMobileMenu(false);
                }}
              />

              <div className="mobile-header-actions">
                {/* <button
                  className="mobile-enquiry-btn"
                  onClick={() => setShowForm(true)}
                >
                  Enquiry Now
                </button> */}

                <div 
                  className="mobile-search-trigger" 
                  onClick={() => { 
                    setSearchDrawerOpen(true); 
                    setMobileMenu(false); 
                  }}
                >
                  <FontAwesomeIcon icon={faSearch} />
                  <span>Search...</span>
                </div>

                <a
                  href="/admission"
                  className="mobile-enquiry-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Enquire Now
                </a>

                {/* <FontAwesomeIcon
                  icon={faXmark}
                  className="mobile-close"
                  onClick={() => setMobileMenu(false)}
                /> */}
              </div>
            </div>

            <div className="mobile-drawer-body">
              <ul className="mobile-menu-list">
                <li onClick={() => navigate("/")}>Home</li>

                {/* ABOUT */}
                <li
                  className="mobile-menu-item"
                  onClick={() =>
                    setOpenMobileMenu(
                      openMobileMenu === "about" ? null : "about"
                    )
                  }
                >
                  About Us <span className="arrow">▾</span>
                </li>
                {openMobileMenu === "about" && (
                  <ul className="mobile-submenu">
                    <li onClick={() => navigate("/aboutkec")}>About KEC</li>
                    <li onClick={() => navigate("/vision")}>
                      Vision & Mission
                    </li>
                    <li onClick={() => navigate("/officebearers")}>
                      Management / Trust
                    </li>
                    <li onClick={() => navigate("/headoftheinstitution")}>
                      Head of the Institution
                    </li>
                    <li onClick={() => navigate("/governingcouncil")}>
                      Governing Council
                    </li>

                    <li onClick={() => navigate("/academiccouncil")}>
                      Academic Council
                    </li>

                    <li onClick={() => navigate("/universityranks")}>
                      University Ranks
                    </li>

                    <li onClick={() => navigate("/endownments")}>Endowments</li>

                    <li onClick={() => navigate("/collegerules")}>
                      College Rules
                    </li>
                  </ul>
                )}

                {/* ACADEMICS */}
                {/* <li
                  className="mobile-menu-item"
                  onClick={() =>
                    setOpenMobileMenu(
                      openMobileMenu === "academics" ? null : "academics"
                    )
                  }
                >
                  Academics <span className="arrow">▾</span>
                </li>
                {openMobileMenu === "academics" && (
                  <ul className="mobile-submenu">
                    <li>Programs Offered (UG | PG | PhD)</li>
                    <li>Academic Regulations & Syllabus</li>
                    <li>Academic Calendar</li>
                    <li>Office of the COE / Examinations</li>
                    <li>Value-Added & Skill Courses</li>
                  </ul>
                )} */}

                {/* DEPARTMENTS */}
                <li
                  className="mobile-menu-item"
                  onClick={() =>
                    setOpenMobileMenu(
                      openMobileMenu === "departments" ? null : "departments"
                    )
                  }
                >
                  Departments <span className="arrow">▾</span>
                </li>
                {openMobileMenu === "departments" && (
                  <ul className="mobile-submenu">
                    <li onClick={() => navigate("/ug")}>Under Graduate</li>
                    <li onClick={() => navigate("/pg")}>Post Graduate</li>
                    <li onClick={() => navigate("/doctoral")}>Doctoral</li>
                    <li onClick={() => navigate("/appliedscience")}>
                      Computer Technology
                    </li>
                    <li onClick={() => navigate("/snh")}>
                      Science & Humanities
                    </li>
                  </ul>
                )}

                {/* PLACEMENT */}
                {/* <li
                  className="mobile-menu-item"
                  onClick={() =>
                    setOpenMobileMenu(
                      openMobileMenu === "placement" ? null : "placement"
                    )
                  }
                >
                  Placement <span className="arrow">▾</span>
                </li>
                {openMobileMenu === "placement" && (
                  <ul className="mobile-submenu">
                    <li>Training & Placement Cell</li>
                    <li>Placement Statistics</li>
                    <li>Recruiters</li>
                    <li>Training Programs</li>
                    <li>Career Guidance & Higher Studies Cell</li>
                    <li>Industry–Institute Interaction</li>
                  </ul>
                )} */}

                <li onClick={() => navigate("/placement")}>Placement</li>
                <li onClick={() => navigate("/admission")}>Admission</li>

                {/* PLACEMENT */}
                {/* <li
                  className="mobile-menu-item"
                  onClick={() =>
                    setOpenMobileMenu(
                      openMobileMenu === "placement" ? null : "placement"
                    )
                  }
                >
                  Placement <span className="arrow">▾</span>
                </li>
                {openMobileMenu === "placement" && (
                  <ul className="mobile-submenu">
                    <li>Training & Placement Cell</li>
                    <li>Placement Statistics</li>
                    <li>Recruiters</li>
                    <li>Training Programs</li>
                    <li>Career Guidance & Higher Studies Cell</li>
                    <li>Industry–Institute Interaction</li>
                  </ul>
                )} */}

                <li
                  onClick={() =>
                    window.open("https://rnd.kongu.edu/", "_blank")
                  }
                >
                  R&amp;D
                </li>

                {/* Others */}
                <li
                  className="mobile-menu-item"
                  onClick={() =>
                    setOpenMobileMenu(
                      openMobileMenu === "others" ? null : "others"
                    )
                  }
                >
                  Explore <span className="arrow">▾</span>
                </li>

                {openMobileMenu === "others" && (
                  <ul className="mobile-submenu">
                    {/* External pages */}
                    <li
                      onClick={() =>
                        window.open("https://academic.kongu.edu/", "_blank")
                      }
                    >
                      Academic
                    </li>

                    <li
                      onClick={() =>
                        window.open("http://iipc.kongu.edu", "_blank")
                      }
                    >
                      IIPC
                    </li>

                    <li
                      onClick={() =>
                        window.open("https://coe.kongu.edu/", "_blank")
                      }
                    >
                      COE
                    </li>

                    <li onClick={() => navigate("/ief")}>IEF</li>

                    <li
                      onClick={() =>
                        window.open("https://kecidealab.kongu.edu/", "_blank")
                      }
                    >
                      KEC - AICTE Idea Lab
                    </li>
                    <li
                      onClick={() =>
                        window.open("https://www.aicte.gov.in/schemes/students-development-schemes", "_blank")
                      }
                    >
                      AICTE Students Development schemes
                    </li>

                    {/* Internal pages */}
                    <li onClick={() => navigate("/campus-life")}>Campus Life</li>


                    <li onClick={() => window.open("https://cpf-frontend.onrender.com/", "_blank")}>SCC (Student Counselling Cell - Portal)</li>

                    <li onClick={() => navigate("/student-centric-activities")}>Student Centric Activities</li>
                    <li onClick={() => { navigate("/coe"); setMobileMenu(false); }}>Centre of Excellence</li>
                    <li onClick={() => navigate("/clubs/ncc")}>NCC</li>
                    <li onClick={() => navigate("/clubs/nss")}>NSS</li>

                    <li
                      onClick={() =>
                        window.open("https://kongu.irins.org/", "_blank")
                      }
                    >
                      Faculty Profile
                    </li>
                  </ul>
                )}

                {/* ===== SEPARATE SECTION (NOT INSIDE CAMPUS LIFE) ===== */}
                <li className="divider">Utility Menu</li>
                <li onClick={() => navigate("/iqac")}>Accreditation & IQAC</li>

                <li onClick={() => window.open("https://kongu.ac.in/blogs/", "_blank")}>
                  Blogs
                </li>

                {/* ERP */}
                <li
                  className="mobile-menu-item"
                  onClick={() =>
                    setOpenMobileMenu(openMobileMenu === "erp" ? null : "erp")
                  }
                >
                  ERP <span className="arrow">▾</span>
                </li>
                {openMobileMenu === "erp" && (
                  <ul className="mobile-submenu">
                    <li
                      onClick={() =>
                        window.open("https://kec.linways.com/", "_blank")
                      }
                    >
                      Linways Portal
                    </li>

                    <li
                      onClick={() =>
                        window.open("https://kms.kongu.edu/", "_blank")
                      }
                    >
                      KMS Portal
                    </li>
                  </ul>
                )}

                {/* Careers */}
                <li
                  className="mobile-menu-item"
                  onClick={() =>
                    setOpenMobileMenu(
                      openMobileMenu === "careers" ? null : "careers"
                    )
                  }
                >
                  Careers <span className="arrow">▾</span>
                </li>
                {openMobileMenu === "careers" && (
                  <ul className="mobile-submenu">
                    <li
                      onClick={() =>
                        window.open(
                          "https://kms.kongu.edu/recruitment/",
                          "_blank"
                        )
                      }
                    >
                      Teaching
                    </li>

                    <li
                      onClick={() =>
                        window.open(
                          "https://kms.kongu.edu/nt_recruitment/",
                          "_blank"
                        )
                      }
                    >
                      Non-Teaching
                    </li>

                    {/* <li
                      onClick={() =>
                        window.open(
                          "/studentcounsellor.webp",
                          "_blank"
                    )
                    }
                  >
                  Student Counsellor
                  </li> */}
                  
                  </ul>
                )}

                <li onClick={() => window.open("https://alumni.kongu.edu/", "_blank")}>
                  Alumni
                </li>

                {/* <li onClick={() => navigate("/onlinepayment")}>
                  Online Payment
                </li> */}

                 <li onClick={() => window.open("https://kec.linways.com/", "_blank")}>
                  Online Payment
                </li>
                <li onClick={() => navigate("/contact")}>Contact</li>
              </ul>
            </div>
          </div>
          {/* )} */}
        </nav>

        {/* ===== ADMISSION ANNOUNCEMENT CAPSULE BAR ===== */}
        <div className="admission-capsule-wrapper">
          <div 
            className="admission-capsule-bar"
            onClick={() => window.open("/tnea%20counsiling/admission/index.html", "_blank")}
            style={{ cursor: "pointer" }}
          >
            <div className="capsule-left">
              <span className="chevrons-left">«</span>
              <div className="grad-badge-ring">
                <div className="grad-badge-inner">
                  <FontAwesomeIcon icon={faGraduationCap} />
                </div>
              </div>
            </div>

            <div className="capsule-center">
              <span className="capsule-title">BE/BTech Admission 2026-27</span>
              <span className="tnea-tag">TNEA Category</span>
            </div>

            <div className="capsule-right">
              <span className="chevrons-right">»»»</span>
            </div>
          </div>
        </div>
      </div>

      {/* SEARCH DRAWER */}
      <div 
        className={`search-drawer-overlay ${searchDrawerOpen ? "show" : ""}`} 
        onClick={() => setSearchDrawerOpen(false)} 
      />
      <div className={`search-drawer ${searchDrawerOpen ? "open" : ""}`} ref={searchRef}>
        <div className="search-drawer-header">
          <h3>Explore KEC</h3>
          <button className="search-drawer-close" onClick={() => setSearchDrawerOpen(false)}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <div className="search-drawer-body">
          <div className="search-drawer-input-wrapper">
            <input
              type="text"
              placeholder="Type to search pages, departments..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="search-drawer-input"
              ref={searchInputRef}
            />
            <button className="search-input-button" type="button">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
          
          <div className="search-drawer-results">
            {searchQuery.trim() === "" ? (
              <div className="search-drawer-popular">
                <h4>Popular Links</h4>
                <div className="popular-links-list">
                  <span onClick={() => handleResultClick("/admission")}>Admission Enquiry</span>
                  <span onClick={() => handleResultClick("/coe")}>Centres of Excellence</span>
                  <span onClick={() => handleResultClick("/placement")}>Placement Cell</span>
                  <span onClick={() => handleResultClick("/contact")}>Contact Us</span>
                  <span onClick={() => handleResultClick("/aboutkec")}>About KEC</span>
                </div>
              </div>
            ) : filteredPages.length > 0 ? (
              <div className="search-results-list">
                {filteredPages.map((page, idx) => (
                  <div
                    key={idx}
                    className="search-drawer-result-item"
                    onClick={() => handleItemClick(page)}
                  >
                    <div className="result-info">
                      <span className="result-name">{page.name}</span>
                      {page.type === "Faculty" && (
                        <div className="result-sub-info">
                          <span className="result-designation">{page.designation}</span>
                          <span className="result-dept">{page.deptName}</span>
                        </div>
                      )}
                      {page.type === "Course/Department" && (
                        <div className="result-sub-info">
                          <span className="result-course-desc">{page.description}</span>
                        </div>
                      )}
                      {page.type !== "Faculty" && page.type !== "Course/Department" && page.category && (
                        <div className="result-sub-info">
                          <span className="result-category">{page.category}</span>
                        </div>
                      )}
                    </div>
                    <span className="result-arrow">➔</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="search-drawer-no-results">
                No matching results found for "{searchQuery}"
              </div>
            )}
          </div>
        </div>
      </div>

      {/* FORM MODAL */}
      <AdmissionForm isOpen={showForm} onClose={() => setShowForm(false)} />
    </>
  );
};

export default Navbar;
