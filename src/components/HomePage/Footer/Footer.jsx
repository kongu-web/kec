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


const Footer = () => {

  const navigate = useNavigate();

  const columns = [
    {
      title: "Quick Links",
      links: [
        { label: "NIRF", path: "/nirfpage" },
        { label: "ARIIA Reports", path: "/ariia" },
        { label: "Mandatory Disclosure", path: mandatoryDisclosurePDF, isPdf: true },
        { label: "Organization Structure", path: organizationStructurePDF, isPdf: true },
        { label: "Strategic Plan", path: "/strategicplan" },
        { label: "Patents", path: "http://rnd.kongu.edu/patents.php", isExternal: true },
        { label: "Student Centric Activities", path: "/student-centric-activities" },
        { label: "Kongu CRS", path: "/kongucrs" },
        { label: "KEC Web Album", path: "/webalbum" },
        { label: "Code of Conduct Handbook",path: codeofConductPDF, isPdf: true },
        { label: "Service Rules & HR Policy", path: rulesandhr2025, isPdf: true },
        { label: "Supporting Staff", path: supporting_staff2025, isPdf: true },
        { label: "Student Details", path: student_details, isPdf: true },
        { label: "Audit Report", path: "/audit-report" },
        { label: "Undertaking", path: kecundertaking, isPdf: true  },
        { label: "Professional Societies",  path: professional_socieites_2025, isPdf: true},
        { label: "Best Practices", path: "/best-practices" },
        { label: "Fitness Protocols and Guidelines", path: "/fitness-protocols" },
        { label: "AICTE-CSS", path: "https://css.aicte.gov.in/login", isExternal: true },
        { label: "Excess Fee Committee",  path: excessfee, isPdf: true},
      ],
    },
    {
      title: "Students Corner",
      links: [
         { label: "Kaaval Uthavi App",path: "https://play.google.com/store/apps/details?id=com.amtexsystems.kaavaluthavi", isExternal: true},
        { label: "Help Desk", path: "https://docs.google.com/forms/d/e/1FAIpQLSeEG2dO3g7BzpzP6c4MSwdsg0QXDNY0c9b2SAZzTfgkcPdFcA/viewform?usp=header" },
        { label: "Help Desk Committee", path: "/helpdeskcommittee" },
        { label: "Vidya Lakshmi Portal for Students",path: "https://www.vidyalakshmi.co.in/", isExternal: true},
        { label: "PM-USP Scholarship Scheme for J&K and Ladakh Students", path: pmsss, isPdf: true},
        { label: "Antiragging Cell", path: "/antiragging-cell" },
        { label: "Antiragging Squad", path: "/antiragging-squad" },
        { label: "Code of Conduct and Ethics Committee", path: "/ethics-committee" },
        { label: "Finance Committee", path: "/finance-committee" },
        { label: "Grievance Redressal Committee", path: "/grievance-committee" },
        { label: "Grievance Redressal and Empowerment Committee for SC/ST Students", path: "/scst-grievance-committee" },
        { label: "Internal Complaint Committee / Anti-Sexual Harassment Cell", path: "/internal-complaint-committee" },
        { label: "IQAC Accrediation and Academic Audit Committee", path: "/iqac-audit" },
        { label: "Institute Industry Cell", path: "/industry-cell" },
        { label: "Research & IPR Committee", path: "/research-ipr" },
        { label: "Institution Policy Document & Green, Energy and Environment Audit Committee", path: "/green-energy-audit" },
        { label: "Media Cell", path: "/media-cell" },
        { label: "Institutions Innovation Council (IIC @ KEC)", path: "/iic" },
        { label: "Library Committee", path: "/library-committee" },
        { label: "Students Counselling Cell", path: "/counselling-cell" },
         { label: "UHV Cell", path: "/Uhvcell" },
        { label: "Grievance Portal", path: "https://kms.kongu.edu/grievance/", isExternal: true },
        { label: "24x7 Women Help Line", path: "/women-helpline" },
        { label: "Feedback", path: "/feedback" },
      ],
    },
    {
      title: "Quick Glance",
      links: [
        { label: "NAAC", path: "/naac" },
        { label: "IQAC", path: "https://kongu.ac.in/kongu.ac.in/iqac.php" },
        { label: "RTI", path: rti, isPdf: true  },
        { label: "Self Declaration", path: selfdeclaration, isPdf: true },
        { label: "Certificate Genuineness Verification",  path: "https://kongu.directverify.in/student/#/", isExternal: true},
        { label: "Full Time PhD", path: fulltimephd, isPdf: true },
        
      ],
    },
  ];

  return (
    <footer className="footer">
        <div className="footer-vertical-text">KONGU ENGINEERING COLLEGE</div>

      <div className="footer-container">
        {columns.map((column, index) => (
          <div className="footer-column" key={index}>
            <h3 className="footer-title">{column.title}</h3>
            <ul className="footer-links">
              {column.links.map((link, idx) => (
                <li key={idx}>
                  {link.isPdf ? (
                    <a
                      href={link.path}
                      className="footer-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                    </a>
                  ) : link.isExternal ? (
                    <a
                      href={link.path}
                      className="footer-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link to={link.path} className="footer-link">
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
          <p class="admission-contact-info">
            For Admission Enquiry Contact <br />
            <a href="tel:9965277765">Mobile: 9965277765</a> / 
            <a href="tel:9443020583">9443020583</a><br />
            <a href="tel:04294226515">Land Line: 04294-226515</a> / 
            <a href="tel:04294226517">04294-226517</a>
          </p>


      </div>

      <div className="footer-globe"></div>


      <div className="creator">

        <p className="rights-reserved">@ 2025 Kongu Engineering College. All rights reserved.</p>
        <p className="rights-reserved">© Designed by
          <a className="created-by"  onClick={() => navigate("/kecwebteam")}
          > KEC Web Team.</a>
          </p>
       

      </div>

    </footer>
  );
};

export default Footer;
