import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import mandatoryDisclosurePDF from "../../../assets/docs/Footer/MandatoryDisclousure/Mandatory Disclosure 29.7.2025.pdf";
import organizationStructurePDF from "../../../assets/docs/Footer/OrganizationStructure/KEC_OrganizationStructure.pdf";
import codeofConductPDF from "../../../assets/docs/Footer/CodeofConductHandbook/KECCodeofConductHandbook.pdf";
import rulesandhr2025 from "../../../assets/docs/Footer/ServiceRulesandHRPolicy/rulesandhr2025.pdf";
import supporting_staff2025 from "../../../assets/docs/Footer/SupportingStaff/supporting_staff2025.pdf";
import student_details from "../../../assets/docs/Footer/Student Details/student_details.pdf";
import kecundertaking from "../../../assets/docs/Footer/Undertaking/kec_undertaking.pdf";
import professional_socieites_2025 from "../../../assets/docs/Footer/KecProfessionalSocieties/professional_socieites_2025.pdf";
import excessfee from "../../../assets/docs/Footer/ExcessFeeCommittee/excess_fee_committee.pdf";

import pmsss from "../../../assets/docs/Footer/PMSSScholarship/pmsss.pdf";
import selfdeclaration from "../../../assets/docs/Footer/SelfDeclaration/kec_selfdeclaration.pdf";
import fulltimephd from "../../../assets/docs/Footer/FulltimePHD/fulltime_phd.pdf";
import rti from "../../../assets/docs/Footer/RTI/kec_rti.pdf";

import "./Footer.css";

import { ReactComponent as PhoneIcon } from "../../../assets/images/Icon/footer_icon/phone.svg";
import { ReactComponent as EnvelopeIcon } from "../../../assets/images/Icon/footer_icon/mail.svg";
import { ReactComponent as MapMarkerIcon } from "../../../assets/images/Icon/footer_icon/map.svg";
import { ReactComponent as LinkedinIcon } from "../../../assets/images/Icon/footer_icon/linkedin.svg";
import { ReactComponent as InstagramIcon } from "../../../assets/images/Icon/footer_icon/insta.svg";
import { ReactComponent as FacebookIcon } from "../../../assets/images/Icon/footer_icon/facebook.svg";
import { ReactComponent as YoutubeIcon } from "../../../assets/images/Icon/footer_icon/youtube.svg";

import { ReactComponent as IconSvg1 } from "../../../assets/images/Icon/footer_icon/icon.svg (1).svg";
import { ReactComponent as IconSvg2 } from "../../../assets/images/Icon/footer_icon/icon.svg (2).svg";
import { ReactComponent as IconSvg3 } from "../../../assets/images/Icon/footer_icon/icon.svg (3).svg";
import { ReactComponent as IconSvg4 } from "../../../assets/images/Icon/footer_icon/icon.svg (4).svg";
import { ReactComponent as IconSvg5 } from "../../../assets/images/Icon/footer_icon/icon.svg (5).svg";
import { ReactComponent as IconSvg6 } from "../../../assets/images/Icon/footer_icon/icon.svg (6).svg";

import footerlogo from "../../../assets/images/Icon/footer_icon/footer-logo.png";

const Footer = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFooter = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <footer className="footer">
      {/* TOP CONTACT BAR */}
      <div className="footer-top">
        <div className="footer-top-item">
          <PhoneIcon />
          <span>+91 9965 277 765</span>
        </div>

        <div className="footer-top-item">
          <EnvelopeIcon />
          <span>kec@kongu.ac.in</span>
        </div>

        <div className="footer-top-item">
          <MapMarkerIcon />
          <span>Perundurai, Erode.</span>
        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="footer-main">
        <img src={footerlogo} alt="KEC" className="footer-watermark" />
        <div className="footer-columns">
          <div className="footer-col">
            <div className="footer-heading" onClick={() => toggleFooter(1)}>
              <div className="heading-left">
                <IconSvg1 className="heading-icon" />
                <h4>About & Institution</h4>
              </div>
              <span className="toggle-icon">+</span>
            </div>

            <ul className={`footer-menu ${openIndex === 1 ? "open" : ""}`}>
              <li>
                <a href="/aboutkec">About KEC</a>
              </li>
              <li>
                <a
                  href={organizationStructurePDF}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Organization Structure
                </a>
              </li>
              <li>
                <a href="/strategicplan">Strategic Plan</a>
              </li>
              <li>
                <a href="/best-practices">Best Practices</a>
              </li>
              <li>
                <a
                  href={rulesandhr2025}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Service Rules & HR Policy
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <div className="footer-heading" onClick={() => toggleFooter(2)}>
              <div className="heading-left">
                <IconSvg2 className="heading-icon" />
                <h4>Academics & Research</h4>
              </div>
              <span className="toggle-icon">+</span>
            </div>

            <ul className={`footer-menu ${openIndex === 2 ? "open" : ""}`}>
              <li>
                <a href="/student-centric-activities">
                  Student Centric Activities
                </a>
              </li>
              <li>
                <a
                  href={professional_socieites_2025}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Professional Societies
                </a>
              </li>
              <li>
                <a href="http://rnd.kongu.edu/patents.php">Patents</a>
              </li>
              <li>
                <a href="/research-ipr">Research & IPR Committee</a>
              </li>
              <li>
                <a href="#">Institution Innovation Council</a>
              </li>
              <li>
                <a href="/industry-cell">Institute Industry Cell</a>
              </li>
              <li>
                <a href={fulltimephd} target="_blank" rel="noopener noreferrer">
                  Full Time PhD
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <div className="footer-heading" onClick={() => toggleFooter(3)}>
              <div className="heading-left">
                <IconSvg3 className="heading-icon" />
                <h4>Student Corner</h4>
              </div>
              <span className="toggle-icon">+</span>
            </div>
            <ul className={`footer-menu ${openIndex === 3 ? "open" : ""}`}>
              <li>
                <a
                  href="https://play.google.com/store/apps/details?id=com.amtexsystems.kaavaluthavi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Kaavul Udhavi App
                </a>
              </li>
              <li>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeEG2dO3g7BzpzP6c4MSwdsg0QXDNY0c9b2SAZzTfgkcPdFcA/viewform?usp=header"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Help Desk
                </a>
              </li>
              <li>
                <a href="/helpdeskcommittee">Help Desk Committee</a>
              </li>
              <li>
                <a
                  href="https://www.vidyalakshmi.co.in/student/registration"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vidya Lakshmi Portal
                </a>
              </li>
              <li>
                <a href={pmsss} target="_blank" rel="noopener noreferrer">
                  PM-USP Scholarship
                </a>
              </li>
              <li>
                <a href="/library-committee">Library Committee</a>
              </li>
              <li>
                <a href="/women-helpline">24x7 Women Help Line</a>
              </li>
              <li>
                <a href="/feedback">Feedback</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <div className="footer-heading" onClick={() => toggleFooter(4)}>
              <div className="heading-left">
                <IconSvg4 className="heading-icon" />
                <h4>Committees & Cells</h4>
              </div>
              <span className="toggle-icon">+</span>
            </div>
            <ul className={`footer-menu ${openIndex === 4 ? "open" : ""}`}>
              <li>
                <a href="/antiragging-cell">Antiragging Cell</a>
              </li>
              <li>
                <a href="/antiragging-squad">Antiragging Squad</a>
              </li>
              <li>
                <a href="/ethics-committee">Code of Conduct and Ethics</a>
              </li>
              <li>
                <a href="/finance-committee">Finance Committee</a>
              </li>
              <li>
                <a href="/grievance-committee">Grievance Redressal Committee</a>
              </li>
              <li>
                <a href="/scst-grievance-committee">
                  Grievance Redressal and Empowerment Committee for SC/ST
                  Students
                </a>
              </li>
              <li>
                <a href="/internal-complaint-committee">
                  Internal Complaint Committee / Anti-Sexual Harassment Cell
                </a>
              </li>
              {/* <li>
                <a href="/iqac-audit">
                  IQAC Accrediation and Academic Audit
                </a>
              </li>
              <li>
                <a href="/industry-cell">Institute Industry Cell</a>
              </li>
              <li>
                <a href="/research-ipr">Research & IPR Committee</a>
              </li> */}
              <li>
                <a href="/green-energy-audit">
                  Institution Policy Document & Green, Energy and Environment
                  Audit Committee
                </a>
              </li>
              <li>
                <a href="/media-cell">Media Cell</a>
              </li>
              <li>
                <a href="/counselling-cell">Students Counselling Cell</a>
              </li>
              <li>
                <a href="/Uhvcell">UHV Cell</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <div className="footer-heading" onClick={() => toggleFooter(5)}>
              <div className="heading-left">
                <IconSvg5 className="heading-icon" />
                <h4>Accreditation & Statutory</h4>
              </div>
              <span className="toggle-icon">+</span>
            </div>
            <ul className={`footer-menu ${openIndex === 5 ? "open" : ""}`}>
              <li>
                <a href="/naac">NAAC</a>
              </li>
              <li>
                <a href="/nirfpage">NIRF</a>
              </li>
              <li>
                <a href="/ariia">ARIIA Reports</a>
              </li>
              <li>
                <a href="/iqac-audit">IQAC</a>
              </li>
              <li>
                <a href={rti} target="_blank" rel="noopener noreferrer">
                  RTI
                </a>
              </li>
              <li>
                <a
                  href={mandatoryDisclosurePDF}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mandatory Disclosure
                </a>
              </li>
              <li>
                <a href="/audit-report">Audit Report</a>
              </li>
              <li>
                <a
                  href="https://kongu.directverify.in/student/#/home"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Certificate Genuineness Verification
                </a>
              </li>
              <li>
                <a href="https://css.aicte.gov.in/login">AICTE - CSS</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <div className="footer-heading" onClick={() => toggleFooter(6)}>
              <div className="heading-left">
                <IconSvg6 className="heading-icon" />
                <h4>Quick Access</h4>
              </div>
            </div>
            <ul className={`footer-menu ${openIndex === 6 ? "open" : ""}`}>
              <li>
                <a href="/kongucrs">Kongu CRS</a>
              </li>
              <li>
                <a href="/webalbum">KEC Web Album</a>
              </li>
              <li>
                <a
                  href={student_details}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Student Details
                </a>
              </li>
              <li>
                <a href="/fitness-protocols">Fitness Protocol</a>
              </li>
              <li>
                <a
                  href="https://kms.kongu.edu/grievance/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Grievance Portal
                </a>
              </li>
              <li>
                <a
                  href={supporting_staff2025}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Supporting Staff
                </a>
              </li>
              <li>
                <a
                  href={kecundertaking}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Undertaking
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* FOOTER BOTTOM */}
      <div className="footer-bottom">
        <p>© 2026 KONGU ENGINEERING COLLEGE. All Rights Reserved.</p>

        <div className="footer-social">
          <a
            href="https://www.instagram.com/konguengineeringcollege/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon />
          </a>
          <a
            href="https://www.facebook.com/konguengineeringcollegeperundurai"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon />
          </a>
          <a
            href="https://www.youtube.com/c/konguengineeringcollege"
            target="_blank"
            rel="noopener noreferrer"
          >
            <YoutubeIcon />
          </a>
          <a
            href="https://www.linkedin.com/school/kongu-engineering-collegeerode/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinIcon />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
