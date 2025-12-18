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

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // Center menu
  const [activeUtilityMenu, setActiveUtilityMenu] = useState(false); // Top utility

  const [moreOpen, setMoreOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation(); // ✅ REQUIRED
  const moreRef = useRef(null);
  let timeoutId = null;

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
      <div className="top-utility-bar">
        <div className="utility-left">
          <div class="marquee">
            <div class="marquee-track">
              <span>📣 Admission Enquiry 2026</span>
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
                <a href="#">NBA</a>
                <a href="#">NAAC</a>
                <a href="#">IQAC</a>
                <a href="#">NIRF</a>
                <a href="#">AICTE - E&I</a>
                <a href="#">AICTE - MCA</a>
                <a href="#">AICTE - MBA</a>
              </div>
            )}
          </div>

          <a>Research & Innovation</a>
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
                <a href="#">Linways Portal</a>
                <a href="#">KMS Portal</a>
              </div>
            )}
          </div>
          <a>Admission</a>
          <a>Alumni</a>
          <a>Online Payment</a>
          <a>Contact</a>
        </div>
      </div>
      {/* ================= EXISTING NAVBAR ================= */}
      <nav className={`main-navbar ${sticky ? "sticky" : ""}`}>
        {/* LEFT */}
        <div className="nav-left">
          <img src={logo} alt="KEC Logo" className="nav-logo" />

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
            className={
              location.pathname.startsWith("/about")
                ? "active has-dropdown"
                : "has-dropdown"
            }
            onMouseEnter={() => setActiveDropdown(1)}
          >
            About Us
            {activeDropdown === 1 && (
              <div
                className="card-dropdown"
                onMouseEnter={() => setActiveDropdown(1)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <span onClick={() => navigate("/vision")}>
                  <VisionIcon className="submenu-icon" />
                  Vision & Mission
                </span>

                <span onClick={() => navigate("/management")}>
                  <ManagementIcon className="submenu-icon" />
                  Management / Trust
                </span>

                <span onClick={() => navigate("/milestones")}>
                  <MilestonesIcon className="submenu-icon" />
                  Milestones & History
                </span>

                <span onClick={() => navigate("/approvals")}>
                  <ApprovalsIcon className="submenu-icon" />
                  Approvals & Accreditations
                </span>

                <span onClick={() => navigate("/governing")}>
                  <GoverningIcon className="submenu-icon" />
                  Governing Council
                </span>
              </div>
            )}
          </li>

          <li
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
          </li>
          <li
            className={
              location.pathname.startsWith("/departments")
                ? "active has-dropdown"
                : "has-dropdown"
            }
            onMouseEnter={() => setActiveDropdown(3)}
          >
            Departments
            {activeDropdown === 3 && (
              <div
                className="card-dropdown"
                onMouseEnter={() => setActiveDropdown(3)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <span onClick={() => navigate("/vision")}>
                  <GraduateIcon className="submenu-icon" />
                  Under Graduate
                </span>

                <span onClick={() => navigate("/management")}>
                  <GraduateIcon className="submenu-icon" />
                  Post Graduate
                </span>

                <span onClick={() => navigate("/milestones")}>
                  <DoctoralIcon className="submenu-icon" />
                  Doctoral
                </span>

                <span onClick={() => navigate("/approvals")}>
                  <AppliedIcon className="submenu-icon" />
                  Applied Science
                </span>
              </div>
            )}
          </li>

          <li
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
          </li>

          <li
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
          </li>
        </ul>

        {/* RIGHT CTA */}
        <div className="nav-actions">
          <button className="enquiry-btn">Enquiry Now</button>
          <img
            src={tneaBadge}
            alt="TNEA Code 2711"
            className="tnea-badge-img"
          />
        </div>

        {/* MOBILE ICON */}
        <FontAwesomeIcon
          icon={mobileMenu ? faXmark : faBars}
          className="mobile-icon"
          onClick={() => setMobileMenu(!mobileMenu)}
        />

        {/* MOBILE MENU */}
        {mobileMenu && (
          <ul className="mobile-menu">
            <li onClick={() => navigate("/")}>Home</li>
            <li onClick={() => toggleDropdown(10)}>
              About Us <FontAwesomeIcon icon={faChevronDown} />
            </li>
            {activeDropdown === 10 && (
              <>
                <li onClick={() => navigate("/aboutkec")}>About KEC</li>
                <li onClick={() => navigate("/vision")}>Vision & Mission</li>
              </>
            )}
            <li onClick={() => navigate("/placement")}>Placement</li>
            <li onClick={() => navigate("/onlinepayment")}>Online Payment</li>
            <li onClick={() => navigate("/contact")}>Contact</li>
          </ul>
        )}
      </nav>
    </>
  );
};

export default Navbar;
