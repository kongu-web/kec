import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { useNavigate } from "react-router-dom";
  


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
            <div className="footer-heading">
              <IconSvg1 className="heading-icon" />
              <h4>About & Institution</h4>
            </div>

            <ul>
              <li>About KEC</li>
              <li>Organization Structure</li>
              <li>Strategic Plan</li>
              <li>Best Practices</li>
              <li>Service Rules & HR Policy</li>
            </ul>
          </div>

          <div className="footer-col">
            <div className="footer-heading">
              <IconSvg2 className="heading-icon" />
              <h4>Academics & Research</h4>
            </div>

            <ul>
              <li>Student Centric Activities</li>
              <li>Professional Societies</li>
              <li>Patents</li>
              <li>Research & IPR Committee</li>
              <li>Institution Innovation Council</li>
              <li>Institute Industry Cell</li>
              <li>Full Time PhD</li>
            </ul>
          </div>

          <div className="footer-col">
            <div className="footer-heading">
              <IconSvg3 className="heading-icon" />
              <h4>Student Corner</h4>
            </div>
            <ul>
              <li>Kaavul Udhavi App</li>
              <li>Help Desk</li>
              <li>Help Desk Committee</li>
              <li>Vidya Lakshmi Portal</li>
              <li>PM-USP Scholarship</li>
              <li>Library Committee</li>
              <li>24x7 Women Help Line</li>
              <li>Feedback</li>
            </ul>
          </div>

          <div className="footer-col">
            <div className="footer-heading">
              <IconSvg4 className="heading-icon" />
              <h4>Committees & Cells</h4>
            </div>
            <ul>
              <li>Anti-ragging Cell</li>
              <li>Anti-ragging Squad</li>
              <li>Code of Conduct and Ethics</li>
              <li>Finance Committee</li>
              <li>Grievance Redressal Committee</li>
              <li>
                Grievance Redressal and Empowerment Committee for SC/ST Students
              </li>
              <li>
                Internal Complaint Committee / Anti-Sexual Harassment Cell
              </li>
              <li>IQAC Accrediation and Academic Audit Committee</li>
              <li>Institute Industry Cell</li>
              <li>Research & IPR Committee</li>
              <li>
                Institution Policy Document & Green, Energy and Environment
                Audit Committee
              </li>
              <li>Media Cell</li>
              <li>Students Counselling Cell</li>
              <li>UHV Cell</li>
            </ul>
          </div>

          <div className="footer-col">
            <div className="footer-heading">
              <IconSvg5 className="heading-icon" />
              <h4>Accreditation & Statutory</h4>
            </div>
            <ul>
              <li>NAAC</li>
              <li>NIRF</li>
              <li>ARIIA Reports</li>
              <li>IQAC</li>
              <li>RTI</li>
              <li>Mandatory Disclosure</li>
              <li>Audit Report</li>
              <li>Certificate Genuineness Verification</li>
              <li>AICTE - CSS</li>
            </ul>
          </div>

          <div className="footer-col">
            <div className="footer-heading">
              <IconSvg6 className="heading-icon" />
              <h4>Quick Access</h4>
            </div>
            <ul>
              <li>Kongu CRS</li>
              <li>KEC Web Album</li>
              <li>Student Details</li>
              <li>Fitness Protocol</li>
              <li>Grievance Portal</li>
              <li>Supporting Staff</li>
              <li>Undertaking</li>
            </ul>
          </div>
        </div>
      </div>

      {/* FOOTER BOTTOM */}
      <div className="footer-bottom">
        <p>© 2026 KONGU ENGINEERING COLLEGE. All Rights Reserved.</p>

        <div className="footer-social">
          <a href="#">
            <LinkedinIcon />
          </a>
          <a href="#">
            <InstagramIcon />
          </a>
          <a href="#">
            <FacebookIcon />
          </a>
          <a href="#">
            <YoutubeIcon />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;