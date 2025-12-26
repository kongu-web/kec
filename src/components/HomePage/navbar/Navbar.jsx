import React, { useEffect, useState, useRef } from "react";
import "./Navbar.css";
import logo from "../../../assets/images/kec11.jpg";
import badge41 from "../../../assets/images/41years.png";
import nif from "../../../assets/images/nirf.png";
import naac from "../../../assets/images/naac.png";
import tneaBadge from "../../../assets/images/tneacode.png";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faChevronDown,
  faSquareCaretDown,
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

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // Center menu
  const [activeUtilityMenu, setActiveUtilityMenu] = useState(false); // Top utility

  const [isOpen, setIsOpen] = useState(false);

  const [openMobileMenu, setOpenMobileMenu] = useState(null);

  const [moreOpen, setMoreOpen] = useState(false);
  const [showForm, setShowForm] = useState(false); // Add state for form modal

  const navigate = useNavigate();
  const location = useLocation(); // ✅ REQUIRED
  const moreRef = useRef(null);
  let timeoutId = null;

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
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const toggleDropdown = (i) => {
    clearTimeout(timeoutId);
    setActiveDropdown(activeDropdown === i ? null : i);
  };

  return (
    <>
      {/* ================= TOP UTILITY BAR ================= */}
      <div className="header-container">
        <div className="top-utility-bar">
          <div className="utility-left">
            <div class="marquee">
              <div class="marquee-track">
                <span onClick={() => setShowForm(true)}>
                  📣 Admission Enquiry 2026
                </span>
                <span className="divider">⚡Hands-on Training!</span>
              </div>
            </div>
          </div>

          <div className="utility-right">
            <div
              className="nav-item has-submenu"
              onMouseEnter={() => {
                setActiveUtilityMenu(true);
                setActiveDropdown(null); // 🔥 CLOSE CENTER MENU
              }}
              onMouseLeave={() => setActiveUtilityMenu(false)}
            >
              <a href="#">Accreditation</a>

              {activeUtilityMenu && (
                <div className="submenu">
                  <a href="/nba">NBA</a>
                  <a href="/naac">NAAC</a>
                  {/* <a href="/iqac">IQAC</a> */}
                  <a href="/nirf">NIRF</a>
                  <a href="/aicteet">AICTE - E&T</a>
                  <a href="/aictemca">AICTE - MCA</a>
                  <a href="/aictemba">AICTE - MBA</a>
                </div>
              )}
            </div>

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
            {/* <a href="/admission">Admission</a> */}
            <a href="https://alumni.kongu.edu/">Alumni</a>
            <a href="/onlinepayment">Online Payment</a>
            <a href="/contact">Contact</a>
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
              <img src={nif} alt="NIRF" />
              <img src={naac} alt="NAAC" className="naac-badge" />
            </div>
          </div>

          {/* CENTER MENU */}
          <ul className="nav-menu">
            <li
              className={location.pathname === "/" ? "active" : ""}
              onMouseEnter={() => setActiveDropdown(null)}
              onClick={() => navigate("/")}
            >
              Home
            </li>

            <li
              className={`${
                isMenuActive(menuRoutes.about) ? "active" : ""
              } has-dropdown`}
              onMouseEnter={() => setActiveDropdown(1)}
            >
              About Us
              {activeDropdown === 1 && (
                <div
                  className="card-dropdown"
                  onMouseEnter={() => setActiveDropdown(1)}
                  onMouseLeave={() => setActiveDropdown(null)}
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
              className={`${
                isMenuActive(menuRoutes.departments) ? "active" : ""
              } has-dropdown`}
              onMouseEnter={() => setActiveDropdown(3)}
            >
              Departments
              {activeDropdown === 3 && (
                <div
                  className="card-dropdown"
                  onMouseEnter={() => setActiveDropdown(3)}
                  onMouseLeave={() => setActiveDropdown(null)}
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
                    Applied Science
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
              onMouseEnter={() => setActiveDropdown(null)}
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
              className={location.pathname === "/admission" ? "active" : ""}
              onMouseEnter={() => setActiveDropdown(null)}
              onClick={() => navigate("/admission")}
            >
              Admission
            </li>

            <li
              className={`${
                isMenuActive(menuRoutes.others) ? "active" : ""
              } has-dropdown`}
              onMouseEnter={() => setActiveDropdown(6)}
            >
              Others
              {activeDropdown === 6 && (
                <div
                  className="card-dropdown"
                  onMouseEnter={() => setActiveDropdown(6)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {/* Internal pages */}
                  <span onClick={() => navigate("/facilities")}>
                    <LifeIcon className="submenu-icon" />
                    Facilities
                  </span>

                  <span onClick={() => navigate("/ief")}>
                    <HostelIcon className="submenu-icon" />
                    IEF
                  </span>

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
                      window.open("https://coe.kongu.edu/", "_blank")
                    }
                  >
                    <ClubIcon className="submenu-icon" />
                    COE
                  </span>

                  <span
                    onClick={() =>
                      window.open("https://rnd.kongu.edu/", "_blank")
                    }
                  >
                    <WelfareIcon className="submenu-icon" />
                    R&amp;D
                  </span>

                  <span
                    onClick={() =>
                      window.open("https://kecidealab.kongu.edu/", "_blank")
                    }
                  >
                    <SportsIcon className="submenu-icon" />
                    KEC - AICTE Idea Lab
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
          <div className="nav-actions">
            <button className="enquiry-btn" onClick={() => setShowForm(true)}>
              Enquiry Now
            </button>{" "}
            {/* Add onClick */}
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
                <button
                  className="mobile-enquiry-btn"
                  onClick={() => setShowForm(true)}
                >
                  Enquiry Now
                </button>

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
                      Applied Science
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

                {/* Others */}
                <li
                  className="mobile-menu-item"
                  onClick={() =>
                    setOpenMobileMenu(
                      openMobileMenu === "others" ? null : "others"
                    )
                  }
                >
                  Others <span className="arrow">▾</span>
                </li>

                {openMobileMenu === "others" && (
                  <ul className="mobile-submenu">
                    {/* Internal pages */}
                    <li onClick={() => navigate("/facilities")}>
                      Facilities
                    </li>

                    <li onClick={() => navigate("/ief")}>
                      IEF
                    </li>

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
                        window.open("https://coe.kongu.edu/", "_blank")
                      }
                    >
                      COE
                    </li>

                    <li
                      onClick={() =>
                        window.open("https://rnd.kongu.edu/", "_blank")
                      }
                    >
                      R&amp;D
                    </li>

                    <li
                      onClick={() =>
                        window.open("https://kecidealab.kongu.edu/", "_blank")
                      }
                    >
                      KEC - AICTE Idea Lab
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
                        window.open("https://kongu.irins.org/", "_blank")
                      }
                    >
                      Faculty Profile
                    </li>
                  </ul>
                )}

                {/* ===== SEPARATE SECTION (NOT INSIDE CAMPUS LIFE) ===== */}
                <li className="divider">Utility Menu</li>

                {/* ACCREDITATION */}
                <li
                  className="mobile-menu-item"
                  onClick={() =>
                    setOpenMobileMenu(
                      openMobileMenu === "accreditation"
                        ? null
                        : "accreditation"
                    )
                  }
                >
                  Accreditation <span className="arrow">▾</span>
                </li>
                {openMobileMenu === "accreditation" && (
                  <ul className="mobile-submenu">
                    <li onClick={() => navigate("/nba")}>NBA</li>
                    <li onClick={() => navigate("/naac")}>NAAC</li>
                    <li onClick={() => navigate("/nirf")}>NIRF</li>
                    <li>AICTE - E&T</li>
                    <li>AICTE - MCA</li>
                    <li>AICTE - MBA</li>
                  </ul>
                )}

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
                    <li>Linways Portal</li>
                    <li>KMS Portal</li>
                  </ul>
                )}

                <li onClick={() => navigate("/admission")}>Admission</li>
                <li onClick={() => navigate("/onlinepayment")}>
                  Online Payment
                </li>
                <li onClick={() => navigate("/contact")}>Contact</li>
              </ul>
            </div>
          </div>
          {/* )} */}
        </nav>
      </div>

      {/* FORM MODAL */}
      <AdmissionForm isOpen={showForm} onClose={() => setShowForm(false)} />
    </>
  );
};

export default Navbar;
