import React, { useEffect, useState, useRef } from "react";
import "./Navbar.css";
import logo from "../../../assets/images/kec11.jpg";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faChevronDown,
  faSquareCaretDown
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [moreOpen, setMoreOpen] = useState(false);

  const navigate = useNavigate();
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
        </div>

        {/* CENTER MENU */}
        <ul className="nav-menu">
          <li onClick={() => navigate("/")}>Home</li>

          <li
            onMouseEnter={() => toggleDropdown(1)}
            onMouseLeave={() => (timeoutId = setTimeout(() => setActiveDropdown(null), 200))}
          >
            About Us
            {activeDropdown === 1 && (
              <div className="dropdown">
                <span onClick={() => navigate("/aboutkec")}>About KEC</span>
                <span onClick={() => navigate("/vision")}>Vision & Mission</span>
                <span onClick={() => navigate("/headoftheinstitution")}>
                  Head of Institution
                </span>
              </div>
            )}
          </li>

          <li
            onMouseEnter={() => toggleDropdown(2)}
            onMouseLeave={() => (timeoutId = setTimeout(() => setActiveDropdown(null), 200))}
          >
            Programmes
            {activeDropdown === 2 && (
              <div className="dropdown">
                <span onClick={() => navigate("/ug")}>Undergraduate</span>
                <span onClick={() => navigate("/pg")}>Postgraduate</span>
                <span onClick={() => navigate("/doctoral")}>Doctoral</span>
              </div>
            )}
          </li>

          <li onClick={() => navigate("/placement")}>Placement</li>

          <li className="more" onClick={() => setMoreOpen(!moreOpen)} ref={moreRef}>
            <FontAwesomeIcon icon={faSquareCaretDown} />
            {moreOpen && (
              <div className="dropdown">
                <span onClick={() => navigate("/facilities")}>Facilities</span>
                <span onClick={() => navigate("/onlinepayment")}>Online Payment</span>
                <span onClick={() => navigate("/contact")}>Contact</span>
              </div>
            )}
          </li>
        </ul>

        {/* RIGHT CTA */}
        <div className="nav-actions">
          <button className="enquiry-btn">Enquiry Now</button>
          <div className="tnea-badge">
            <span>TNEA CODE</span>
            <strong>2711</strong>
          </div>
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
