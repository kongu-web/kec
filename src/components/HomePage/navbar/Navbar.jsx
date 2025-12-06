import React, { useEffect, useState, useRef } from "react";
import "./Navbar.css";
import logo from "../../../assets/images/kec11.jpg";
// import logo1 from "../../../assets/images/navbar.png";
import { useNavigate } from 'react-router-dom';
// import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars,faXmark, faSquareCaretDown,faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [naviSticky, setNaviSticky] = useState(false);
  const [naviMobileMenu, setNaviMobileMenu] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [naviActiveDropdown, setNaviActiveDropdown] = useState(null);
  const [naviIsLogoDropdownOpen, setNaviIsLogoDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  let naviTimeoutId = null;
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    toggleMenu(); 
    navigate(path);
  };

  const naviToggleLogoDropdown = () => {
    setNaviIsLogoDropdownOpen(prev => !prev);
  };
  
  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  useEffect(() => {
    const naviHandleScroll = () => {
      window.scrollY > 50 ? setNaviSticky(true) : setNaviSticky(false);
    };

    window.addEventListener("scroll", naviHandleScroll);
    return () => window.removeEventListener("scroll", naviHandleScroll);
  }, []);

  useEffect(() => {
    const naviHandleClickOutside = (event) => {
      if (
        !event.target.closest(".navi-dropdown") &&
        !event.target.closest(".navi-dropdown-content")
      ) {
        setNaviActiveDropdown(null);
      }
    };

    document.addEventListener("click", naviHandleClickOutside);
    return () => document.removeEventListener("click", naviHandleClickOutside);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setNaviIsLogoDropdownOpen(false);
      }
    };

    if (naviIsLogoDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [naviIsLogoDropdownOpen]);

  
  const toggleMenu = () => {
    setNaviMobileMenu((prev) => !prev);
  };


  const naviToggleDropdown = (index) => {
    setNaviActiveDropdown(naviActiveDropdown === index ? null : index);
  };

  return (
    <>
      <nav className={`navi-container ${naviSticky ? "navi-dark-nav navi-navbar-shrink" : ""}`}>
        <div className="navi-banner-left">
          <div className="navi-banner-logo">
            <img src={logo} alt="navi-logo" />
          </div>
          <div className="navi-banner-text">
            {/* <h1>KONGU ENGINEERING COLLEGE (Autonomous)</h1> */}
            <p>An Autonomous Institution</p><p>Affiliated to Anna University | Accredited by NAAC with A++ Grade</p>
            <p>Perundurai Erode - 638060 Tamilnadu India</p>
            
          </div>
          {/* <div className="navi-banner-logo1">
            <img src={logo1} alt="navi-logo" />
          </div> */}
        </div>

        <div className="navi-system-nav">
          <div className="navi-top-nav">
            <ul>

              <li onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
                <span className="navi-dropdown-title">Home</span>
              </li>
            

              {/* About Us Dropdown */}
              <li
                className="navi-dropdown"
                onMouseEnter={() => {
                  clearTimeout(naviTimeoutId);
                  naviToggleDropdown(1);
                }}
                onMouseLeave={() => {
                  naviTimeoutId = setTimeout(() => setNaviActiveDropdown(null), 300);
                }}
              >
                <span className="navi-dropdown-title">About Us</span>
                {naviActiveDropdown === 1 && (
                  <div
                    className="navi-dropdown-content"
                    onMouseEnter={() => clearTimeout(naviTimeoutId)}
                    onMouseLeave={() => {
                      naviTimeoutId = setTimeout(() => setNaviActiveDropdown(null), 300);
                    }}
                  >
                    <span onClick={() => navigate('/aboutkec')} style={{ cursor: 'pointer' }}>
                      About KEC
                    </span>
                    <span onClick={() => navigate('/vision')} style={{ cursor: 'pointer' }}>
                      Vision Mission & Quality Policy
                    </span>
                    <span onClick={() => navigate('/officebearers')} style={{ cursor: 'pointer' }}>
                    KVITT Office Bearers
                    </span>
                    <span onClick={() => navigate('/headoftheinstitution')} style={{ cursor: 'pointer' }}>
                      Head of the Institution
                    </span>
                    <span onClick={() => navigate('/governingcouncil')} style={{ cursor: 'pointer' }}>
                      Governing Council
                    </span>
                    <span onClick={() => navigate('/academiccouncil')} style={{ cursor: 'pointer' }}>
                      Academic Council
                    </span>
                    <span onClick={() => navigate('/universityranks')} style={{ cursor: 'pointer' }}>
                      University Ranks
                    </span>
                    <span onClick={() => navigate('/endownments')} style={{ cursor: 'pointer' }}>
                      Endowments
                    </span>
                    <span onClick={() => navigate('/collegerules')} style={{ cursor: 'pointer' }}>
                      College Rules
                    </span>
                    
                  </div>
                )}
              </li>

              {/* Programmes Dropdown */}
              <li
                className="navi-dropdown"
                onMouseEnter={() => {
                  clearTimeout(naviTimeoutId);
                  naviToggleDropdown(2);
                }}
                onMouseLeave={() => {
                  naviTimeoutId = setTimeout(() => setNaviActiveDropdown(null), 300);
                }}
              >
                <span className="navi-dropdown-title">Programmes</span>
                {naviActiveDropdown === 2 && (
                  <div
                    className="navi-dropdown-content"
                    onMouseEnter={() => clearTimeout(naviTimeoutId)}
                    onMouseLeave={() => {
                      naviTimeoutId = setTimeout(() => setNaviActiveDropdown(null), 300);
                    }}
                  >
                    <span onClick={() => navigate('/ug')} style={{ cursor: 'pointer' }}>
                      Undergraduates
                    </span>
                    <span onClick={() => navigate('/pg')} style={{ cursor: 'pointer' }}>
                      Postgraduates
                    </span>
                    <span onClick={() => navigate('/doctoral')} style={{ cursor: 'pointer' }}>
                      Doctoral
                    </span>
                    <span onClick={() => navigate('/appliedscience')} style={{ cursor: 'pointer' }}>
                      Applied Science
                    </span>
                    {/* <span onClick={() => navigate('/mba')} style={{ cursor: 'pointer' }}>
                      Management Studies
                    </span>
                    <span onClick={() => navigate('/mca')} style={{ cursor: 'pointer' }}>
                      Computer Applications
                    </span>
                    <span onClick={() => navigate('/snh')} style={{ cursor: 'pointer' }}>
                      Science & Humanities
                    </span> */}
                  </div>
                )}
              </li>

              

              {/* Accrediation */}
              <li
                className="navi-dropdown"
                onMouseEnter={() => {
                  clearTimeout(naviTimeoutId);
                  naviToggleDropdown(3);
                }}
                onMouseLeave={() => {
                  naviTimeoutId = setTimeout(() => setNaviActiveDropdown(null), 300);
                }}
              >
                  
                <span className="navi-dropdown-title">Accreditation</span>
                {naviActiveDropdown === 3 && (
                  <div
                    className="navi-dropdown-content"
                    onMouseEnter={() => clearTimeout(naviTimeoutId)}
                    onMouseLeave={() => {
                      naviTimeoutId = setTimeout(() => setNaviActiveDropdown(null), 300);
                    }}
                  >

                    <span onClick={() => navigate('/autonomous')} style={{ cursor: 'pointer' }}>
                      Autonomous
                    </span>
                    <span onClick={() => navigate('/university')} style={{ cursor: 'pointer' }}>
                      University
                    </span>
                    <span onClick={() => navigate('/nba')} style={{ cursor: 'pointer' }}>
                      NBA
                    </span>
                    <span onClick={() => navigate('/naac')} style={{ cursor: 'pointer' }}>
                      NAAC
                    </span>
                    <span onClick={() => navigate('/nirf')} style={{ cursor: 'pointer' }}>
                      NIRF
                    </span>
                    <span onClick={() => navigate('/aicteet')} style={{ cursor: 'pointer' }}>
                      AICTE E&T
                    </span>
                    <span onClick={() => navigate('/aictemca')} style={{ cursor: 'pointer' }}>
                      AICTE MCA
                    </span>
                    <span onClick={() => navigate('/aictemba')} style={{ cursor: 'pointer' }}>
                      AICTE MBA
                    </span> 


                  </div>

                )}
                    
              </li>

                {/*Placement*/}
                    <span onClick={() => navigate('/placement')} style={{ cursor: 'pointer' }}>
                      Placement
                    </span>

                {/*Admission*/}
                    {/* <a href="https://kongu.ac.in/admission"> 
                Admission 2025-26
                <span className="new-badge">NEW</span> </a> */}

                {/*Online Payemnt*/}

                {/* <span
                onClick={() => navigate('/onlinepayment')}
                style={{ cursor: 'pointer', whiteSpace: 'nowrap', display: 'inline-block' }}>
                Online Payment
                <span className="new-badge">NEW</span>
              </span> */}

              {/* Careers */}
              <li
                className="navi-dropdown"
                onMouseEnter={() => {
                  clearTimeout(naviTimeoutId);
                  naviToggleDropdown(4);
                }}
                onMouseLeave={() => {
                  naviTimeoutId = setTimeout(() => setNaviActiveDropdown(null), 300);
                }}
              >
                <span className="navi-dropdown-title">Careers</span>
                {naviActiveDropdown === 4 && (
                  <div
                    className="navi-dropdown-content"
                    onMouseEnter={() => clearTimeout(naviTimeoutId)}
                    onMouseLeave={() => {
                      naviTimeoutId = setTimeout(() => setNaviActiveDropdown(null), 300);
                    }}
                  >
                     <span onClick={() => window.open('https://kms.kongu.edu/recruitment/', '_blank')} >
                      Teaching
                    </span>
                    <span onClick={() => window.open('https://kms.kongu.edu/nt_recruitment/', '_blank')} >
                      Non-Teaching
                    </span>
                    {/* <span onClick={() => window.open('https://kms.kongu.edu/recruitment/', '_blank')} >
                      Teaching Fellowship Scheme
                    </span> */}
                   
                  </div>
                )}
              </li>

              {/* Clickdown for Facilities */}
              <li className="navi-clickdown" onClick={naviToggleLogoDropdown}>
                <span className="navi-clickdown-logo">
                  <FontAwesomeIcon icon={faSquareCaretDown} />
                </span>
              </li>

              {naviIsLogoDropdownOpen && (
                <div className="navi-clickdown-content" ref={dropdownRef}>
                    <span onClick={() => navigate('/facilities')} style={{ cursor: 'pointer' }}>
                      Facilities
                    </span>
                    <span onClick={() => window.open('https://academic.kongu.edu/', '_blank')} >
                      Academic
                    </span>

                    <span onClick={() => window.open('https://coe.kongu.edu/', '_blank')} >
                      COE
                    </span>

                    <span onClick={() => window.open('https://rnd.kongu.edu/', '_blank')} >
                      R&D
                    </span>
                    <span onClick={() => navigate('/ief')} style={{ cursor: 'pointer' }}>
                      IEF
                    </span>
                 <span onClick={() => window.open('https://kecidealab.kongu.edu/', '_blank')} >
                     KEC - AICTE Idea Lab
                    </span>
                  <span onClick={() => window.open('https://iipc.kongu.edu/', '_blank')} >
                      IIPC
                    </span>
                    <span onClick={() => window.open('https://alumni.kongu.edu/', '_blank')} >
                      Alumni
                    </span>
                    <span onClick={() => window.open('https://kongu.irins.org/', '_blank')} >
                      Faculty Profile
                    </span>
                    <span onClick={() => navigate('/onlinepayment')} style={{ cursor: 'pointer' }}>
                      Online Payment
                    </span>
                    <span onClick={() => navigate('/contact')} style={{ cursor: 'pointer' }}>
                      Contact
                    </span>
                </div>
              )}
            </ul>
          </div>
        </div>

        <FontAwesomeIcon 
        icon={naviMobileMenu ? faXmark : faBars} 
        className="navi-menu-icon" 
        onClick={toggleMenu} 
      />

<div className={`mobile-view-container ${naviMobileMenu ? "open" : "closed"}`}>
  <ul className="mobile-menu-list">
    <li className="mobile-menu-item" onClick={() => handleNavigation("/")}>Home</li>

    <li className="mobile-menu-item" onClick={() => toggleDropdown(1)}>
      About Us <FontAwesomeIcon icon={faChevronDown} />
      {activeDropdown === 1 && (
        <ul className="mobile-submenu-list">
          <li className="mobile-submenu-item" onClick={() => handleNavigation("/aboutkec")}>About KEC</li>
          <li className="mobile-submenu-item" onClick={() => handleNavigation("/vision")}>Vision Mission & Quality Policy</li>
          <li className="mobile-submenu-item" onClick={() => handleNavigation("/officebearers")}>KVITT Office Bearers</li>
          <li className="mobile-submenu-item" onClick={() => handleNavigation("/headoftheinstitution")}>Head of the Institution</li>
          <li className="mobile-submenu-item" onClick={() => handleNavigation("/governingcouncil")}>Governing Council</li>
          <li className="mobile-submenu-item" onClick={() => handleNavigation("/academiccouncil")}>Academic Council</li>
          <li className="mobile-submenu-item" onClick={() => handleNavigation("/universityranks")}>University Ranks</li>
          <li className="mobile-submenu-item" onClick={() => handleNavigation("/endownments")}>Endowments</li>
          <li className="mobile-submenu-item" onClick={() => handleNavigation("/collegerules")}>College Rules</li>
        </ul>
      )}
    </li>

    <li className="mobile-menu-item" onClick={() => toggleDropdown(2)}>
      Programmes <FontAwesomeIcon icon={faChevronDown} />
      {activeDropdown === 2 && (
        <ul className="mobile-submenu-list">
          <li className="mobile-submenu-item" onClick={() => handleNavigation("/ug")}>Undergraduates</li>
          <li className="mobile-submenu-item" onClick={() => handleNavigation("/pg")}>Postgraduates</li>
          <li className="mobile-submenu-item" onClick={() => handleNavigation("/doctoral")}>Doctoral</li>
          <li className="mobile-submenu-item" onClick={() => handleNavigation("/appliedscience")}>Applied Science</li>
          {/* <li className="mobile-submenu-item" onClick={() => handleNavigation("/mba")}>Management Studies</li>
          <li className="mobile-submenu-item" onClick={() => handleNavigation("/mca")}>Computer Applications</li>
          <li className="mobile-submenu-item" onClick={() => handleNavigation("/snh")}>Science & Humanities</li> */}
        </ul>
      )}
    </li>

    <li className="mobile-menu-item" onClick={() => toggleDropdown(3)}>
    Accreditation <FontAwesomeIcon icon={faChevronDown} />
      {activeDropdown === 3 && (
        <ul className="mobile-submenu-list">
          <li className="mobile-submenu-item" onClick={() => handleNavigation("/autonomous")}>Autonomous</li>
          <li className="mobile-submenu-item" onClick={() => handleNavigation("/university")}>University</li>
          <li className="mobile-submenu-item" onClick={() => handleNavigation("/nba")}>NBA</li>
          <li className="mobile-submenu-item" onClick={() => handleNavigation("/naac")}>NAAC</li>
          <li className="mobile-submenu-item" onClick={() => handleNavigation("/nirf")}>NIRF</li>
          <li className="mobile-submenu-item" onClick={() => handleNavigation("/aicteet")}>AICTE E&T</li>
          <li className="mobile-submenu-item" onClick={() => handleNavigation("/aictemca")}>AICTE MCA</li>
          <li className="mobile-submenu-item" onClick={() => handleNavigation("/aictemba")}>AICTE MBA</li>
        </ul>
      )}
    </li>

      <li className="mobile-menu-item" onClick={() => handleNavigation("/placement")}>Placement</li>
       {/* <li className="mobile-submenu-item" onClick={() => window.open('https://kongu.ac.in/admission')}>Admission 2025-26 </li> */}
       {/* <li className="mobile-menu-item" onClick={() => handleNavigation("/onlinepayment")}>Online Payment</li> */}

    <li className="mobile-menu-item" onClick={() => toggleDropdown(4)}>
      Careers <FontAwesomeIcon icon={faChevronDown} />
      {activeDropdown === 4 && (
        <ul className="mobile-submenu-list">
          <li className="mobile-submenu-item" onClick={() => window.open('https://kms.kongu.edu/recruitment/')}>Teaching</li>
          <li className="mobile-submenu-item" onClick={() => window.open('https://kms.kongu.edu/nt_recruitment/')}>Non-Teaching</li>
        </ul>
      )}
    </li> 

    <li className="mobile-menu-item" onClick={() => handleNavigation("/facilities")}>Facilities</li>
    <li className="mobile-menu-item" onClick={() => window.open('https://academic.kongu.edu/')}>Academic</li>
    <li className="mobile-menu-item" onClick={() => window.open('https://coe.kongu.edu/')}>COE</li>
    <li className="mobile-menu-item" onClick={() => window.open('https://rnd.kongu.edu/')}>R&D</li>
    <li className="mobile-menu-item" onClick={() => handleNavigation("/ief")}>IEF</li>
   <li className="mobile-menu-item" onClick={() => window.open("https://kecidealab.kongu.edu/")}>KEC - AICTE Idea Lab</li>
    <li className="mobile-menu-item" onClick={() => window.open('http://iipc.kongu.edu')}>IIPC</li>
    <li className="mobile-menu-item" onClick={() => window.open('https://alumni.kongu.edu/')}>Alumni</li>
    <li className="mobile-menu-item" onClick={() => window.open('https://kongu.irins.org/')}>Faculty Profile</li>
    <li className="mobile-menu-item" onClick={() => handleNavigation("/onlinepayment")}>Online Payment</li>
    <li className="mobile-menu-item" onClick={() => handleNavigation("/contact")}>Contact</li>
  </ul>
</div>

      </nav>
    </>
  );
};

export default Navbar;
