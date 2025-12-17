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
  faSquareCaretDown
} from "@fortawesome/free-solid-svg-icons";

import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
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
  <div className="nav-item has-submenu">
    <a href="#">Accreditation</a>

    <div className="submenu">
      <a href="#">NBA</a>
      <a href="#">NAAC</a>
      <a href="#">IQAC</a>
      <a href="#">NIRF</a>
      <a href="#">AICTE - E&I</a>
      <a href="#">AICTE - MCA</a>
      <a href="#">AICTE - MBA</a>
    </div>
  </div>

  <a>Research & Innovation</a>
  <a>ERP</a>
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
    <img src={naac} alt="NAAC" className="naac-badge"/>
  </div>
</div>


        {/* CENTER MENU */}
        <ul className="nav-menu">
  <li
    className={location.pathname === "/" ? "active" : ""}
    onClick={() => navigate("/")}
  >
    Home
  </li>

  <li
    className={location.pathname.startsWith("/about") ? "active" : ""}
    onMouseEnter={() => toggleDropdown(1)}
    onMouseLeave={() => setActiveDropdown(null)}
  >
    About Us

    {activeDropdown === 1 && (
      <div className="dropdown card-dropdown">
        <span onClick={() => navigate("/vision")}>
          <i className="icon vision" />
          Vision & Mission
        </span>

        <span onClick={() => navigate("/management")}>
          <i className="icon management" />
          Management / Trust
        </span>

        <span onClick={() => navigate("/milestones")}>
          <i className="icon milestones" />
          Milestones & History
        </span>

        <span onClick={() => navigate("/approvals")}>
          <i className="icon approvals" />
          Approvals & Accreditations
        </span>

        <span onClick={() => navigate("/governing")}>
          <i className="icon governing" />
          Governing Council
        </span>
      </div>
    )}
  </li>

  <li
    className={location.pathname.startsWith("/academics") ? "active" : ""}
  >
    Academics
  </li>

  <li
    className={location.pathname.startsWith("/departments") ? "active" : ""}
  >
    Departments
  </li>

  <li
    className={location.pathname.startsWith("/placement") ? "active" : ""}
  >
    Placement
  </li>

  <li
    className={location.pathname.startsWith("/campus-life") ? "active" : ""}
  >
    Campus Life
  </li>
</ul>


        {/* RIGHT CTA */}
        <div className="nav-actions">
          <button className="enquiry-btn">Enquiry Now</button>
          <img src={tneaBadge} alt="TNEA Code 2711" className="tnea-badge-img"/>
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
