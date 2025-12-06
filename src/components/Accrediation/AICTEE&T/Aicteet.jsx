import React,{useEffect,useState} from "react";
import "./Aicteet.css";
import Footer from "../../HomePage/Footer/Footer";
import Section from "../../HomePage/Section/Section";
import Navbar from "../../HomePage/navbar/Navbar";
import ScrollToTopButton from "../../ScrollToTopButton";
import Spinner from "../../Spinner";

import pdf1 from "../../../assets/docs/Aicte/ET/E&T-001-1993-94 FIRST APPROVAL OF THE COLLEGE (E&T) 19.04.1993 001.pdf";
import pdf2 from "../../../assets/docs/Aicte/ET/E&T-002-1993-94 ext of  APPROVAL 28.10.1993.pdf";
import pdf3 from "../../../assets/docs/Aicte/ET/E&T-003-1994-95-96 EXT OF APPROVAL 17.04.1994.pdf";
import pdf4 from "../../../assets/docs/Aicte/ET/E&T-004-1994-95 APPROVAL of CHEM & EEE 12.08.1994.pdf";
import pdf5 from "../../../assets/docs/Aicte/ET/E&T-005-1995-97 ext OF APPROVAL 05.06.1995.pdf";
import pdf6 from "../../../assets/docs/Aicte/ET/E&T-006-1996-97 increase in intake OF CSE 30 to 60  07.06.1995.pdf";
import pdf7 from "../../../assets/docs/Aicte/ET/E&T-007-1996-99 ext of approval 08.04.1996.pdf";
import pdf8 from "../../../assets/docs/Aicte/ET/E&T-008-1996-99 increase in intake OF EEE 40 to 60 24.05.1996.pdf";
import pdf9 from "../../../assets/docs/Aicte/ET/E&T-009-1996-97 approval OF ME ED 14.11.1996.pdf";
import pdf10 from "../../../assets/docs/Aicte/ET/E&T-010-1997-99 approval of EIE  29.08.1997 .pdf";
import pdf11 from "../../../assets/docs/Aicte/ET/E&T-011-1998-99 approval of IT 09.06.1998.pdf";
import pdf12 from "../../../assets/docs/Aicte/ET/E&T-012-1999-2002 EOA & INCREASE IN INTKAE  OF EIE, IT AND NEW COURSE MTS 29.06.1999.pdf";
import pdf13 from "../../../assets/docs/Aicte/ET/E&T-013-1999-2000 APPROVAL OF ME CSE 25.08.1999.pdf";
import pdf14 from "../../../assets/docs/Aicte/ET/E&T-014-2000-2001 EOA & INCREASE IN INTAKE OF ECE CSE IT FROM 60 TO 90 14.11.2000.pdf";
import pdf15 from "../../../assets/docs/Aicte/ET/E&T-015-2001-2003 EOA AND INCREASE IN INTKAE OF CSE 90 TO 120 22.06.2001.pdf";
import pdf16 from "../../../assets/docs/Aicte/ET/E&T-016-2002-2003 APPROVAL OF ME AE 08.02.2002.pdf";
import pdf17 from "../../../assets/docs/Aicte/ET/E&T-017-2002-2005 EOA & INCREASE IN INTAKE OF ECE 90 TO 120, CIVIL 30 TO 60.pdf";
import pdf18 from "../../../assets/docs/Aicte/ET/E&T-018-2002-2003 INCREASE IN INTAKE OF ME CSE & ED 18 TO 2529.08.2002.pdf";
import pdf19 from "../../../assets/docs/Aicte/ET/E&T-019-2003-05 APPROVAL OF ME CONST ENGG AND MGMT 27.03.2003.pdf";
import pdf20 from "../../../assets/docs/Aicte/ET/E&T-020-2003-2005 APPROVAL OF ME CAD CAM 07.07.2003.pdf";
import pdf21 from "../../../assets/docs/Aicte/ET/E&T-021-2003-2005 APPROVAL OF ME CHEMICAL Engg  07.07.2003.pdf";
import pdf22 from "../../../assets/docs/Aicte/ET/E&T-022-2003-2005 APPROVAL OF ME VLSI 25.08.2003.pdf";
import pdf23 from "../../../assets/docs/Aicte/ET/E&T-023-2003-2005 EXT OF APPROVAL ME ED CSE CEM 21.08.2003.pdf";
import pdf24 from "../../../assets/docs/Aicte/ET/E&T-024-2004-2006 APPROVAL OF ME ME MECHATRONICS 22.07.2004.pdf";
import pdf25 from "../../../assets/docs/Aicte/ET/E&T-025-2003-2005 CHANGE OF NOMENCLATURE ME TO MTECH Chemical 21.12.2004.pdf";
import pdf26 from "../../../assets/docs/Aicte/ET/E&T-026-2005-2006 EXTENSION OF APPROVAL 24.06.2005.pdf";
import pdf27 from "../../../assets/docs/Aicte/ET/E&T-027-2005-2006 EOA & IN INTAKE OF CHEM 60, EEE 120 , MECH 120, EIE 60, MTS 60  & NEW COU FT 19.09.2005.pdf";
import pdf28 from "../../../assets/docs/Aicte/ET/E&T-028-2006-2007 EXT OF APPROVAL & CONDITIONAL APPROVAL REMOVAL 24.05.2006.pdf";
import pdf29 from "../../../assets/docs/Aicte/ET/E&T-029-2007-2008 EXT OF APPROVAL 22.05.2007.pdf";
import pdf30 from "../../../assets/docs/Aicte/ET/E&T-030-2007-2008 EOA AND INCREASE IN INTKAE 60 TO 120 02.07.2007.pdf";
import pdf31 from "../../../assets/docs/Aicte/ET/E&T-031-2008-2011 EXTENSION OF APPROVAL 27.05.2008.pdf";
import pdf32 from "../../../assets/docs/Aicte/ET/E&T-032-2008-09-2010 INCREASE IN INTKAE OF EIE & MTS 60 TO 120,  IT 90 TO 120 23.05.2008.pdf";
import pdf33 from "../../../assets/docs/Aicte/ET/E&T-033-2010-2011 EOA AND APPROVAL OF ME C&I COMP& COMM ENGG 23.08.2010.pdf";
import pdf34 from "../../../assets/docs/Aicte/ET/E&T-034-2011-2012 EOA AND INCREASE IN INTAKE OF MECH,ECE,CSE 120 TO 180 NEW ME COMM SYS &PED 01.09.2011.pdf";
import pdf35 from "../../../assets/docs/Aicte/ET/E&T-035-2012-2013 EOA AND INC IN MECH  ECE CSE 180 to 240 NEW ME EMB SYS & STR ENGG 10.05.2012.pdf";
import pdf36 from "../../../assets/docs/Aicte/ET/E&T-036-2013-2014 EOA AND INC. IN INTAKE CIVIL 120 to240 chem 60 to120 NEW MTECH FT & IT (CW) 19.03.2013.pdf";
import pdf37 from "../../../assets/docs/Aicte/ET/E&T-037-2014-2015 EOA  2014.pdf";
import pdf38 from "../../../assets/docs/Aicte/ET/E&T-38-2015-16 BTECH Autonomobile EOA 07.04.20152015.pdf";
import pdf39 from "../../../assets/docs/Aicte/ET/E&T-039- 2016-2017 EOA 25.4.2016.pdf";
import pdf40 from "../../../assets/docs/Aicte/ET/E&T-040- 2017-2018 EOA 20.4.2017.pdf";
import pdf41 from "../../../assets/docs/Aicte/ET/E&T-041 -2018-2019 EOA Corrigendum 4.7.2018 for mechatronics engineering instead MECHATRONICS.pdf";
import pdf42 from "../../../assets/docs/Aicte/ET/E&T-042 -2019-2020 EOA 04.05.2019.pdf";
import pdf43 from "../../../assets/docs/Aicte/ET/AICTE_Approval_2020-21.pdf";
import pdf44 from "../../../assets/docs/Aicte/ET/AICTE_Approval_2021_22.pdf";
import pdf45 from "../../../assets/docs/Aicte/ET/AICTE_Approval_2022_23.pdf";
import pdf46 from "../../../assets/docs/Aicte/ET/AICTE_Approval_2023_24.pdf";
import pdf47 from "../../../assets/docs/Aicte/ET/AICTE_Approval_2024_25.pdf";
import pdf48 from "../../../assets/docs/Aicte/ET/AICTE_3yrsApproval_2024_27.pdf";
import pdf49 from "../../../assets/docs/Aicte/ET/AICTE_Approval_2025_26.pdf";


const approvals = [
  {
    slNo: "01",
    courses: [
      {
        name: "B.E. Civil Engineering",
        intake: "30",
        approvalNo: "F.No. 45-46/91-AICTE/586",
        approvalDate: "19.04.1993",
        period: "1992-1994",
        pdfLink: pdf1
      },
      {
        name: "B.E. Mechanical Engineering",
        intake: "60",
        pdfLink: ""
      },
      {
        name: "B.E. Electronics and Communication Engineering",
        intake: "60",
        pdfLink: ""
      },
      {
        name: "B.E. Computer Science and Engineering",
        intake: "30",
        pdfLink: ""
      },
    ],
  },
  {
    slNo: "02",
    courses: [
      {
        name: "B.E. Civil Engineering",
        intake: "30",
        approvalNo: "F.No. 45-46/91-AICTE/9532",
        approvalDate: "28.10.1993",
        period: "1993-1994",
        pdfLink: pdf2
      },
      {
        name: "B.E. Mechanical Engineering",
        intake: "60",
        pdfLink: ""
      },
      {
        name: "B.E. Electronics and Communication Engineering",
        intake: "60",
        pdfLink: ""
      },
      {
        name: "B.E. Computer Science and Engineering",
        intake: "30",
        pdfLink: ""
      },
    ],
  },
  {
    slNo: "03",
    courses: [
      {
        name: "B.E. Civil Engineering",
        intake: "30",
        approvalNo: "F.No. 2-15/BIII/RC(M)/93",
        approvalDate: "17.04.1994",
        period: "1994-1997",
        pdfLink: pdf3
      },
      {
        name: "B.E. Mechanical Engineering",
        intake: "60",
        pdfLink: ""
      },
      {
        name: "B.E. Electronics and Communication Engineering",
        intake: "60",
        pdfLink: ""
      },
      {
        name: "B.E. Computer Science and Engineering",
        intake: "30",
        pdfLink: ""
      },
    ],
  },
  {
    slNo: "04",
    courses: [
      {
        name: "B.Tech. Chemical Engineering",
        intake: "4(New Course)",
        approvalNo: "F.No. 732-50-10/RC/94",
        approvalDate: "12.08.1994",
        period: "1994-1995",
        pdfLink: pdf4
      },
      {
        name: "B.E. Electrical and Electronics Engineering",
        intake: "40(New Course)",
        pdfLink: ""
      },
    ],
  },
  {
    slNo: "05",
    courses: [
      {
        name: "B.E. Civil Engineering",
        intake: "30",
        approvalNo: "F.No. 730-52-230/RC/94",
        approvalDate: "05.06.1995",
        period: "1995-1997",
        pdfLink: pdf5
      },
      {
        name: "B.E. Mechanical Engineering",
        intake: "60",
        pdfLink: ""
      },
      {
        name: "B.E. Electronics and Communication Engineering",
        intake: "60",
        pdfLink: ""
      },
      {
        name: "B.E. Computer Science and Engineering",
        intake: "30",
        pdfLink: ""
      },
      {
        name: "B.Tech. Chemical Engineering",
        intake: "40",
        pdfLink: ""
      },
      {
        name: "B.E. Electrical and Electronics Engineering",
        intake: "40",
        pdfLink: ""
      },
    ],
  },
  {
    slNo: "06",
    courses: [
      {
        name: "B.E. Computer Science and Engineering",
        intake: "30 to 60",
        approvalNo: "F.No. 730-52-230/RC/94",
        approvalDate: "07.06.1995",
        period: "1996-1997",
        pdfLink: pdf6
      },
    ],
  },
  {
    slNo: "07",
    courses: [
      {
        name: "B.E. Civil Engineering",
        intake: "30",
        approvalNo: "F.No. 730-52-230(E)/ET/96",
        approvalDate: "08.04.1996",
        period: "1996-1999",
        pdfLink: pdf7
      },
      {
        name: "B.E. Mechanical Engineering",
        intake: "60",
        pdfLink: ""
      },
      {
        name: "B.E. Electronics and Communication Engineering",
        intake: "60",
        pdfLink: ""
      },
      {
        name: "B.E. Computer Science and Engineering",
        intake: "60",
        pdfLink: ""
      },
      {
        name: "B.Tech. Chemical Engineering",
        intake: "40",
        pdfLink: ""
      },
      {
        name: "B.E. Electrical and Electronics Engineering",
        intake: "40",
        pdfLink: ""
      },
    ],
  },
  {
    slNo: "08",
    courses: [
      {
        name: "B.E. Electrical and Electronics Engineering",
        intake: "40 to 60",
        approvalNo: "F.No. 730-52-230(E)/ET/96",
        approvalDate: "24.05.1996",
        period: "1996-1999",
        pdfLink: pdf8
      },
      {
        name: "B.E. Civil Engineering",
        intake: "30",
        pdfLink: ""
      },
      {
        name: "B.E. Mechanical Engineering",
        intake: "60",
        pdfLink: ""
      },
      {
        name: "B.E. Electronics and Communication Engineering",
        intake: "60",
        pdfLink: ""
      },
      {
        name: "B.E. Computer Science and Engineering",
        intake: "60",
        pdfLink: ""
      },
      {
        name: "B.Tech. Chemical Engineering",
        intake: "40",
        pdfLink: ""
      },
    ],
  },
  {
    slNo: "09",
    courses: [
      {
        name: "M.E. Engineering Design",
        intake: "18(New Course)",
        approvalNo: "F.No.441/TND-93/E&T(PG)/92",
        approvalDate: "14.11.1996",
        period: "1996-1997",
        pdfLink: pdf9
      },
    ],
  },
  {
    slNo: "10",
    courses: [
      {
        name: "B.E. Electronics and Instrumentation Engineering",
        intake: "30(New Course)",
        approvalNo: "F.No. 730-52-230(E)/ET/97",
        approvalDate: "29.08.1997",
        period: "1997-1999",
        pdfLink: pdf10
      },
    ],
  },
  {
    slNo: "11",
    courses: [
      {
        name: "B.Tech Information Technology",
        intake: "30(New Course)",
        approvalDate: "09.06.1998",
        period: "1998-1999",
        pdfLink: pdf11
      },
    ],
  },
  {
    slNo: "12",
    courses: [
      {
        name: "B.E. Civil Engineering",
        intake: "30",
        approvalNo: "F.No. 730-52-230(E)/ET/97",
        approvalDate: "29.06.1999",
        period: "1999-2002",
        pdfLink: pdf12
      },
      {
        name: "B.E. Mechanical Engineering",
        intake: "60",
        pdfLink: ""
      },
      {
        name: "B.E. Electronics and Communication Engineering",
        intake: "60",
        pdfLink: ""
      },
      {
        name: "B.E. Computer Science and Engineering",
        intake: "60",
        pdfLink: ""
      },
      {
        name: "B.Tech. Chemical Engineering",
        intake: "40",
        pdfLink: ""
      },
      {
        name: "B.Tech. Information Technology",
        intake: "30 to 60",
        pdfLink: ""
      },
      {
        name: "B.E. Electrical and Electronics Engineering",
        intake: "60",
        pdfLink: ""
      },
      {
        name: "B.E. Electronics and Instrumentation Engineering",
        intake: "30 to 40",
        pdfLink: ""
      },
      {
        name: "B.E. Mechatronics Engineering",
        intake: "40(New Course)",
        pdfLink: ""
      },
    ],
  },
  {
    slNo: "13",
    courses: [
      {
        name: "M.E. Computer Science and Engineering",
        intake: "18",
        approvalNo: "F.No.441/TND-93/BOS(PG)/92",
        approvalDate: "25.08.1999",
        period: "1999-2000",
        pdfLink: pdf13
      },
    ],
  },
  {
    slNo: "14",
    courses: [
      {
        name: "B.E. Civil Engineering",
        intake: "30",
        approvalNo: "F.No. 730-52-230(E)/ET/97",
        approvalDate: "14.11.2000",
        period: "2000-2001",
        pdfLink: pdf14
      },
      {
        name: "B.E. Mechanical Engineering",
        intake: "60",
        pdfLink: ""
      },
      {
        name: "B.E. Electronics and Communication Engineering",
        intake: "60 to 90",
        pdfLink: ""
      },
      {
        name: "B.E. Computer Science and Engineering",
        intake: "60 to 90",
        pdfLink: ""
      },
      {
        name: "B.Tech. Chemical Engineering",
        intake: "40",
        pdfLink: ""
      },
      {
        name: "B.Tech. Information Technology",
        intake: "60 to 90",
        pdfLink: ""
      },
      {
        name: "B.E. Electrical and Electronics Engineering",
        intake: "60",
        pdfLink: ""
      },
      {
        name: "B.E. Electronics and Instrumentation Engineering",
        intake: "30 to 40",
        pdfLink: ""
      },
      {
        name: "B.E. Mechatronics Engineering",
        intake: "40(New Course)",
        pdfLink: ""
      },
    ],
  },
  {
    slNo: "15",
    courses: [
      {
        name: "B.E. Civil Engineering",
        intake: "30",
        approvalNo: "F.No. 730-52-230(E)/ET/97",
        approvalDate: "22.06.2001",
        period: "2001-2003",
        pdfLink: pdf15
      },
      {
        name: "B.E. Mechanical Engineering",
        intake: "60",
        pdfLink: ""
      },
      {
        name: "B.E. Electronics and Communication Engineering",
        intake: "90",
        pdfLink: ""
      },
      {
        name: "B.E. Computer Science and Engineering",
        intake: "90 to 120",
        pdfLink: ""
      },
      {
        name: "B.Tech. Chemical Engineering",
        intake: "40",
        pdfLink: ""
      },
      {
        name: "B.Tech. Information Technology",
        intake: "90",
        pdfLink: ""
      },
      {
        name: "B.E. Electrical and Electronics Engineering",
        intake: "60",
        pdfLink: ""
      },
      {
        name: "B.E. Electronics and Instrumentation Engineering",
        intake: "40",
        pdfLink: ""
      },
      {
        name: "B.E. Mechatronics Engineering",
        intake: "40",
        pdfLink: ""
      },
    ],
  },
  {
    slNo: "16",
    courses: [
      {
        name: "M.E. Applied Electronics",
        intake: "25(New Course)",
        approvalNo: "F.No. XVII-AIBPG/APP-1602/ET/2001",
        approvalDate: "08.02.2002",
        period: "2002-2003",
        pdfLink: pdf16
      },
    ],
  },
  {
    slNo: "17",
    courses: [
      {
        name: "B.E. Civil Engineering",
        intake: "30 to 60",
        approvalNo: "F.No. 730-52-230(E)/ET/97",
        approvalDate: "19.06.2002",
        period: "2002-2005",
        pdfLink: pdf17
      },
      {
        name: "B.E. Mechanical Engineering",
        intake: "60",
        pdfLink: ""
      },
      {
        name: "B.E. Electronics and Communication Engineering",
        intake: "90 to 120",
        pdfLink: ""
      },
      {
        name: "B.E. Computer Science and Engineering",
        intake: "120",
        pdfLink: ""
      },
      {
        name: "B.Tech. Chemical Engineering",
        intake: "40",
        pdfLink: ""
      },
      {
        name: "B.Tech. Information Technology",
        intake: "90",
        pdfLink: ""
      },
      {
        name: "B.E. Electrical and Electronics Engineering",
        intake: "60",
        pdfLink: ""
      },
      {
        name: "B.E. Electronics and Instrumentation Engineering",
        intake: "40",
        pdfLink: ""
      },
      {
        name: "B.E. Mechatronics Engineering",
        intake: "40",
        pdfLink: ""
      },
    ],
  },
  {
    slNo: "18",
    courses: [
      {
        name: "M.E. Computer Science and Engineering",
        intake: "18 to 25",
        approvalNo: "F.No. 441/TND-93/E&T(PG)/92",
        approvalDate: "29.08.2002",
        period: "2002-2003",
        pdfLink: pdf18
      },
      {
        name: "M.E. Engineering Design",
        intake: "18 to 25",
        pdfLink: ""
      },
    ],
  },
  {
    slNo: "19",
    courses: [
      {
        name: "M.E. Construction Engineering and Management",
        intake: "18(New Course)",
        approvalNo: "F.No. 07/05/TN/PG/2002/CIVIL-19",
        approvalDate: "27.03.2003",
        period: "2003-2005",
        pdfLink: pdf19
      },
    ],
  },
  {
    slNo: "20",
    courses: [
      {
        name: "M.E. CAD/CAM",
        intake: "18(New Course)",
        approvalNo: "F.No.PG/TN/ME/MECH/2003/57",
        approvalDate: "07.07.2003",
        period: "2003-2005",
        pdfLink: pdf20
      },
    ],
  },
  {
    slNo: "21",
    courses: [
      {
        name: "M.E. Chemical Engineering",
        intake: "18(New Course)",
        approvalNoDetails: "F.No.PG/TN/M.TECH/CHEM/2003/75",
        approvalDate: "07.07.2003",
        period: "2003-2005",
        pdfLink: pdf21
      },
    ],
  },
  {
    slNo: "22",
    courses: [
      {
        name: "M.E. VLSI Design",
        intake: "18(New Course)",
        approvalNoDetails: "ECE F.No. Nil",
        approvalDate: "25.08.2003",
        period: "2003-2005",
        pdfLink: pdf22
      },
    ],
  },
  {
    slNo: "23",
    courses: [
      {
        name: "M.E. Computer Science and Engineering",
        intake: "25",
        approvalNo: "F.No. 441/TND-93/E&T(PG)/92",
        approvalDate: "21.08.2003",
        period: "2003-2005",
        pdfLink: pdf23
      },
      {
        name: "M.E. Engineering Design",
        intake: "25",
        pdfLink: ""
      },
      {
        name: "M.E. Construction Engineering and Management",
        intake: "18",
        pdfLink: ""
      },
    ],
  },
  {
    slNo: "24",
    courses: [
      {
        name: "M.E. Mechatronics Engineering",
        intake: "18(New Course)",
        approvalNoDetails: "F.No.PG/TN/M.E/2004/MECH-50/75",
        approvalDate: "22.07.2004",
        period: "2004-2006",
        pdfLink:pdf24
      },
    ],
  },
  {
    slNo: "25",
    courses: [
      {
        name: "M.Tech Chemical Engineering(Change of Nomenclature M.Tech. Chemical Engineering instead of M.E. Chemical Engineering)",
        intake: "---",
        approvalNo: "F.No.255-50/PG/TN/2003/186",
        approvalDate: "21.12.2004",
        period: "2003-2005",
        pdfLink: pdf25
      },
    ],
  },
  {
    slNo: "26",
    courses: [
      {
        name: "B.Tech. Chemical Engineering",
        intake: "40",
        approvalNo: "F.No.730-52-230(E)/ET/97",
        approvalDate: "24.06.2005",
        period: "2005-2006",
        pdfLink: pdf26
      },
      {
        name: "B.E. Civil Engineering",
        intake: "60",
        pdfLink: ""
      },
      {
        name: "Computer Science and Engineering",
        intake: "120",
        pdfLink: ""
      },
      {
        name: "Electrical and Electronics Engineering",
        intake: "60",
        pdfLink: ""
      },
      {
        name: "Electronics and Communication Engineering",
        intake: "120",
        pdfLink: ""
      },
      {
        name: "Electronics and Instrumentation Engineering",
        intake: "40",
        pdfLink: ""
      },
      {
        name: "Information Technology",
        intake: "90",
        pdfLink: ""
      },
      {
        name: "M.E. Applied Electronics",
        intake: "25",
        pdfLink: ""
      },
      {
        name: "M.E. Computer Science and Engineering",
        intake: "25",
        pdfLink: ""
      },
      {
        name: "M.E. Mechatronics Engineering",
        intake: "18",
        pdfLink: ""
      },
      {
        name: "M.E. VLSI Design",
        intake: "18",
        pdfLink: ""
      },
      {
        name: "M.E. CAD/CAM",
        intake: "18",
        pdfLink: ""
      },
      {
        name: "M.E. Construction Engineering and Management",
        intake: "18",
        pdfLink: ""
      },
      {
        name: "M.E. Engineering Design",
        intake: "25",
        pdfLink: ""
      },
      {
        name: "M.Tech. Chemical Engineering",
        intake: "18",
        pdfLink: ""
      },
      {
        name: "M.B.A. (Standalone)",
        intake: "60",
        pdfLink: ""
      },
      {
        name: "M.C.A. (Standalone)",
        intake: "60",
        pdfLink: ""
      },
      {
        name: "B.E. Mechanical Engineering",
        intake: "60",
        pdfLink: ""
      },
      {
        name: "B.E. Mechatronics Engineering",
        intake: "40",
        pdfLink: ""
      },
    ],
  },
  {
    slNo: "27",
    courses: [
      {
        name: "B.Tech. Chemical Engineering",
        intake: "40 to 60",
        approvalNo: "F.No.730-52-230(E)/ET/97",
        approvalDate: "19.09.2005",
        period: "2005-2006",
        pdfLink: pdf27
      },
      {
        name: "B.E. Civil Engineering",
        intake: "60",
        pdfLink: ""
      },
      {
        name: "Computer Science and Engineering",
        intake: "120",
        pdfLink: ""
      },
      {
        name: "Electrical and Electronics Engineering",
        intake: "60 to 120",
        pdfLink: ""
      },
      {
        name: "Electronics and Communication Engineering",
        intake: "120",
        pdfLink: ""
      },
      {
        name: "Electronics and Instrumentation Engineering",
        intake: "40 to 60",
        pdfLink: ""
      },
      {
        name: "Food Technology",
        intake: "60(New Course)",
        pdfLink: ""
      },
      {
        name: "Information Technology",
        intake: "90",
        pdfLink: ""
      },
      {
        name: "M.E. Applied Electronics",
        intake: "25",
        pdfLink: ""
      },
      {
        name: "M.E. Computer Science and Engineering",
        intake: "25",
        pdfLink: ""
      },
      {
        name: "M.E. Mechatronics Engineering",
        intake: "18",
        pdfLink: ""
      },
      {
        name: "M.E. VLSI Design",
        intake: "18",
        pdfLink: ""
      },
      {
        name: "M.E. CAD/CAM",
        intake: "18",
        pdfLink: ""
      },
      {
        name: "M.E. Construction Engineering and Management",
        intake: "18",
        pdfLink: ""
      },
      {
        name: "M.E. Engineering Design",
        intake: "25",
        pdfLink: ""
      },
      {
        name: "M.Tech. Chemical Engineering",
        intake: "18",
        pdfLink: ""
      },
      {
        name: "M.B.A. (Standalone)",
        intake: "60",
        pdfLink: ""
      },
      {
        name: "M.C.A. (Standalone)",
        intake: "60",
        pdfLink: ""
      },
      {
        name: "B.E. Mechanical Engineering",
        intake: "60 to 120",
        pdfLink: ""
      },
      {
        name: "B.E. Mechatronics Engineering",
        intake: "40 to 60",
        pdfLink: ""
      },
    ],
  },
  {
    slNo: "28",
    courses: [
      {
        name: "B.Tech. Chemical Engineering",
        intake: "60",
        approvalNo: "F.No.730-52-230(E)/ET/97",
        approvalDate: "24.05.2006",
        period: "2006-2007",
        pdfLink: pdf28
      },
      {
        name: "B.E. Civil Engineering",
        intake: "60",
        pdfLink: ""
      },
      {
        name: "Computer Science and Engineering",
        intake: "120",
        pdfLink: ""
      },
      {
        name: "Electrical and Electronics Engineering",
        intake: "120",
        pdfLink: ""
      },
      {
        name: "Electronics and Communication Engineering",
        intake: "120",
        pdfLink: ""
      },
      {
        name: "Electronics and Instrumentation Engineering",
        intake: "60",
        pdfLink: ""
      },
      {
        name: "Food Technology",
        intake: "60",
        pdfLink: ""
      },
      {
        name: "Information Technology",
        intake: "90",
        pdfLink: ""
      },
      {
        name: "M.E. Applied Electronics",
        intake: "25",
        pdfLink: ""
      },
      {
        name: "M.E. Computer Science and Engineering",
        intake: "25",
        pdfLink: ""
      },
      {
        name: "M.E. Mechatronics Engineering",
        intake: "18",
        pdfLink: ""
      },
      {
        name: "M.E. VLSI Design",
        intake: "18",
        pdfLink: ""
      },
      {
        name: "M.E. CAD/CAM",
        intake: "18",
        pdfLink: ""
      },
      {
        name: "M.E. Construction Engineering and Management",
        intake: "18",
        pdfLink: ""
      },
      {
        name: "M.E. Engineering Design",
        intake: "25",
        pdfLink: ""
      },
      {
        name: "M.Tech. Chemical Engineering",
        intake: "18",
        pdfLink: ""
      },
      {
        name: "M.B.A. (Standalone)",
        intake: "60",
        pdfLink: ""
      },
      {
        name: "M.C.A. (Standalone)",
        intake: "60",
        pdfLink: ""
      },
      {
        name: "B.E. Mechanical Engineering",
        intake: "120",
        pdfLink: ""
      },
      {
        name: "B.E. Mechatronics Engineering",
        intake: "60",
        pdfLink: ""
      },
    ],
  },
  {
    slNo: "29",
    courses: [
      {
        name: "B.Tech. Chemical Engineering",
        intake: "60",
        approvalNo: "F.No.730-52-230(E)/ET/97",
        approvalDate: "22.05.2007",
        period: "2007-2008",
        pdfLink: pdf29
      },
      {
        name: "B.E. Civil Engineering",
        intake: "60",
        pdfLink: ""
      },
      {
        name: "Computer Science and Engineering",
        intake: "120",
        pdfLink: ""
      },
      {
        name: "Electrical and Electronics Engineering",
        intake: "120",
        pdfLink: ""
      },
      {
        name: "Electronics and Communication Engineering",
        intake: "120",
        pdfLink: ""
      },
      {
        name: "Electronics and Instrumentation Engineering",
        intake: "60",
        pdfLink: ""
      },
      {
        name: "Food Technology",
        intake: "60",
        pdfLink: ""
      },
      {
        name: "Information Technology",
        intake: "90",
        pdfLink: ""
      },
      {
        name: "M.E. Applied Electronics",
        intake: "25",
        pdfLink: ""
      },
      {
        name: "M.E. Computer Science and Engineering",
        intake: "25",
        pdfLink: ""
      },
      {
        name: "M.E. Mechatronics Engineering",
        intake: "18",
        pdfLink: ""
      },
      {
        name: "M.E. VLSI Design",
        intake: "18",
        pdfLink: ""
      },
      {
        name: "M.E. CAD/CAM",
        intake: "18",
        pdfLink: ""
      },
      {
        name: "M.E. Construction Engineering and Management",
        intake: "18",
        pdfLink: ""
      },
      {
        name: "M.E. Engineering Design",
        intake: "25",
        pdfLink: ""
      },
      {
        name: "M.Tech. Chemical Engineering",
        intake: "18",
        pdfLink: ""
      },
      {
        name: "M.B.A. (Standalone)",
        intake: "60",
        pdfLink: ""
      },
      {
        name: "M.C.A. (Standalone)",
        intake: "60",
        pdfLink: ""
      },
      {
        name: "B.E. Mechanical Engineering",
        intake: "120",
        pdfLink: ""
      },
      {
        name: "B.E. Mechatronics Engineering",
        intake: "60",
        pdfLink: ""
      },
    ],
  },
  {
    slNo: "30",
    courses: [
      {
        name: "B.Tech. Chemical Engineering",
        intake: "60",
        approvalNo: "F.No.730-52-230(E)/ET/97",
        approvalDate: "02.07.2007",
        period: "2007-2008",
        pdfLink: pdf30
      },
      {
        name: "B.E. Civil Engineering",
        intake: "60 to 120",
        pdfLink: ""
      },
      {
        name: "Computer Science and Engineering",
        intake: "120",
        pdfLink: ""
      },
      {
        name: "Electrical and Electronics Engineering",
        intake: "120",
        pdfLink: ""
      },
      {
        name: "Electronics and Communication Engineering",
        intake: "120",
        pdfLink: ""
      },
      {
        name: "Electronics and Instrumentation Engineering",
        intake: "60",
        pdfLink: ""
      },
      {
        name: "Food Technology",
        intake: "60",
        pdfLink: ""
      },
      {
        name: "Information Technology",
        intake: "90",
        pdfLink: ""
      },
      {
        name: "M.E. Applied Electronics",
        intake: "25",
        pdfLink: ""
      },
      {
        name: "M.E. Computer Science and Engineering",
        intake: "25",
        pdfLink: ""
      },
      {
        name: "M.E. Mechatronics Engineering",
        intake: "18",
        pdfLink: ""
      },
      {
        name: "M.E. VLSI Design",
        intake: "18",
        pdfLink: ""
      },
      {
        name: "M.E. CAD/CAM",
        intake: "18",
        pdfLink: ""
      },
      {
        name: "M.E. Construction Engineering and Management",
        intake: "18",
        pdfLink: ""
      },
      {
        name: "M.E. Engineering Design",
        intake: "25",
        pdfLink: ""
      },
      {
        name: "M.Tech. Chemical Engineering",
        intake: "18",
        pdfLink: ""
      },
      {
        name: "B.E. Mechanical Engineering",
        intake: "120",
        pdfLink: ""
      },
      {
        name: "B.E. Mechatronics Engineering",
        intake: "60",
        pdfLink: ""
      },
    ],
  },
  {
  slNo: "31",
  courses: [
    {
      name: "B.Tech. Chemical Engineering",
      intake: "60",
      approvalNo: "F.No.730-52-230(E)/ET/97",
      approvalDate: "02.07.2007",
      period: "2008-2011",
      pdfLink: pdf31
    },
    {
      name: "B.E. Civil Engineering",
      intake: "120",
      pdfLink: ""
    },
    {
      name: "Computer Science and Engineering",
      intake: "120",
      pdfLink: ""
    },
    {
      name: "Electrical and Electronics Engineering",
      intake: "120",
      pdfLink: ""
    },
    {
      name: "Electronics and Communication Engineering",
      intake: "120",
      pdfLink: ""
    },
    {
      name: "Electronics and Instrumentation Engineering",
      intake: "60",
      pdfLink: ""
    },
    {
      name: "Food Technology",
      intake: "60",
      pdfLink: ""
    },
    {
      name: "Information Technology",
      intake: "90",
      pdfLink: ""
    },
    {
      name: "M.E. Applied Electronics",
      intake: "25",
      pdfLink: ""
    },
    {
      name: "M.E. Computer Science and Engineering",
      intake: "25",
      pdfLink: ""
    },
    {
      name: "M.E. Mechatronics Engineering",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. VLSI Design",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. CAD/CAM",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. Construction Engineering and Management",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. Engineering Design",
      intake: "25",
      pdfLink: ""
    },
    {
      name: "M.Tech. Chemical Engineering",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "B.E. Mechanical Engineering",
      intake: "120",
      pdfLink: ""
    },
    {
      name: "B.E. Mechatronics Engineering",
      intake: "60",
      pdfLink: ""
    }
  ]
},
{
  slNo: "32",
  courses: [
    {
      name: "B.E. Electronics and Instrumentation Engineering",
      intake: "60 to 120",
      approvalNo: "F.No.730-52-230(E)/ET/97",
      approvalDate: "23.05.2008",
      period: "2008-2009",
      pdfLink: pdf32
    },
    {
      name: "B.Tech. Information Technology",
      intake: "90 to 120",
      pdfLink: ""
    },
    {
      name: "B.E. Mechatronics Engineering",
      intake: "60 to 120",
      pdfLink: ""
    }
  ]
},
{
  slNo: "33",
  courses: [
    {
      name: "B.E. Mechatronics Engineering",
      intake: "120",
      approvalNo: "F.No.Southern Region/1-3589631/2010/EOA",
      approvalDate: "23.08.2010",
      period: "2010-2011",
      pdfLink: pdf33
    },
    {
      name: "B.E. Civil Engineering",
      intake: "120",
      pdfLink: ""
    },
    {
      name: "B.E. Computer Science and Engineering",
      intake: "120",
      pdfLink: ""
    },
    {
      name: "B.E. Electrical and Electronics Engineering",
      intake: "120",
      pdfLink: ""
    },
    {
      name: "B.E. Electronics and Communication Engineering",
      intake: "120",
      pdfLink: ""
    },
    {
      name: "B.E. Electronics and Instrumentation Engineering",
      intake: "120",
      pdfLink: ""
    },
    {
      name: "B.Tech. Food Technology",
      intake: "60",
      pdfLink: ""
    },
    {
      name: "B.Tech. Information Technology",
      intake: "120",
      pdfLink: ""
    },
    {
      name: "B.Tech. Chemical Engineering",
      intake: "60",
      pdfLink: ""
    },
    {
      name: "B.E. Mechanical Engineering",
      intake: "120",
      pdfLink: ""
    },
    {
      name: "M.E. Control and Instrumentation Engineering",
      intake: "18 (New Course)",
      pdfLink: ""
    },
    {
      name: "M.E. CAD/CAM",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.Tech. Chemical Engineering",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. Computer Science and Engineering",
      intake: "25",
      pdfLink: ""
    },
    {
      name: "M.E. Construction Engineering and Management",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. Engineering Design",
      intake: "25",
      pdfLink: ""
    },
    {
      name: "M.E. Mechatronics Engineering",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. VLSI Design",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. Computer and Communication Engineering",
      intake: "18 (New course)",
      pdfLink: ""
    },
    {
      name: "M.E. Applied Electronics",
      intake: "25",
      pdfLink: ""
    }
  ]
},
{
  slNo: "34",
  courses: [
    {
      name: "B.E. Civil Engineering",
      intake: "120",
      approvalNo: "F.No.Southern/1-401662465/2011/EOA",
      approvalDate: "01.09.2011",
      period: "2011-2012",
      pdfLink: pdf34
    },
    {
      name: "B.E. Mechanical Engineering",
      intake: "120 to 180",
      pdfLink: ""
    },
    {
      name: "B.E. Electronics and Communication Engineering",
      intake: "120 to 180",
      pdfLink: ""
    },
    {
      name: "B.E. Computer Science and Engineering",
      intake: "120 to 180",
      pdfLink: ""
    },
    {
      name: "B.E. Electrical and Electronics Engineering",
      intake: "120",
      pdfLink: ""
    },
    {
      name: "B.E. Electronics and Instrumentation Engineering",
      intake: "120",
      pdfLink: ""
    },
    {
      name: "B.E. Mechatronics",
      intake: "120",
      pdfLink: ""
    },
    {
      name: "B.Tech. Information Technology",
      intake: "120",
      pdfLink: ""
    },
    {
      name: "B.Tech. Chemical Engineering",
      intake: "60",
      pdfLink: ""
    },
    {
      name: "M.E. Construction Engineering and Management",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.Tech. Chemical Engineering",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "B.Tech. Food Technology",
      intake: "60",
      pdfLink: ""
    },
    {
      name: "M.E. CAD CAM",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. Computer Science and Engineering",
      intake: "25",
      pdfLink: ""
    },
    {
      name: "M.E. Applied Electronics",
      intake: "25",
      pdfLink: ""
    },
    {
      name: "M.E. VLSI Design",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. Control and Instrumentation Engineering",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. Mechatronics",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. Engineering Design",
      intake: "25",
      pdfLink: ""
    },
    {
      name: "M.E. Computer and Communication Engineering",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. Communication Systems",
      intake: "18 (New course)",
      pdfLink: ""
    },
    {
      name: "M.E. Power Electronics and Drives",
      intake: "18 (New Course)",
      pdfLink: ""
    }
  ]
},
{
  slNo: "35",
  courses: [
    {
      name: "B.E. Civil Engineering",
      intake: "120",
      approvalNo: "F.No.Southern/1-709413652/2012/EOA",
      approvalDate: "10.05.2012",
      period: "2012-2013",
      pdfLink: pdf35
    },
    {
      name: "B.E. Mechanical Engineering",
      intake: "180 to 240",
      pdfLink: ""
    },
    {
      name: "B.E. Electronics and Communication Engineering",
      intake: "180 to 240",
      pdfLink: ""
    },
    {
      name: "B.E. Computer Science and Engineering",
      intake: "180 to 240",
      pdfLink: ""
    },
    {
      name: "B.E. Electrical and Electronics Engineering",
      intake: "120",
      pdfLink: ""
    },
    {
      name: "B.E. Electronics and Instrumentation Engineering",
      intake: "120",
      pdfLink: ""
    },
    {
      name: "B.E. Mechatronics",
      intake: "120",
      pdfLink: ""
    },
    {
      name: "B.Tech. Information Technology",
      intake: "120",
      pdfLink: ""
    },
    {
      name: "B.Tech. Chemical Engineering",
      intake: "60",
      pdfLink: ""
    },
    {
      name: "M.E. Construction Engineering and Management",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.Tech. Chemical Engineering",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "B.Tech. Food Technology",
      intake: "60",
      pdfLink: ""
    },
    {
      name: "M.E. CAD CAM",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. Computer Science and Engineering",
      intake: "25",
      pdfLink: ""
    },
    {
      name: "M.E. Applied Electronics",
      intake: "25",
      pdfLink: ""
    },
    {
      name: "M.E. VLSI Design",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. Control and Instrumentation Engineering",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. Mechatronics",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. Engineering Design",
      intake: "25",
      pdfLink: ""
    },
    {
      name: "M.E. Computer and Communication Engineering",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. Communication Systems",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. Power Electronics and Drives",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. Structural Engineering",
      intake: "18(New Course)",
      pdfLink: ""
    },
    {
      name: "M.E. Embedded Systems",
      intake: "18(New Course)",
      pdfLink: ""
    }
  ]
},
{
  slNo: "36",
  courses: [
    {
      name: "B.E. Civil Engineering",
      intake: "120 to 240",
      approvalNo: "F.No.Southern/1-1345541702/2013/EOA",
      approvalDate: "19.03.2013",
      period: "2013-2014",
      pdfLink: pdf36
    },
    {
      name: "B.E. Mechanical Engineering",
      intake: "240",
      pdfLink: ""
    },
    {
      name: "B.E. Electronics and Communication Engineering",
      intake: "240",
      pdfLink: ""
    },
    {
      name: "B.E. Computer Science and Engineering",
      intake: "240",
      pdfLink: ""
    },
    {
      name: "B.E. Electrical and Electronics Engineering",
      intake: "120",
      pdfLink: ""
    },
    {
      name: "B.E. Electronics and Instrumentation Engineering",
      intake: "120",
      pdfLink: ""
    },
    {
      name: "B.E. Mechatronics",
      intake: "120",
      pdfLink: ""
    },
    {
      name: "B.Tech. Information Technology",
      intake: "120",
      pdfLink: ""
    },
    {
      name: "B.Tech. Chemical Engineering",
      intake: "60 to 120",
      pdfLink: ""
    },
    {
      name: "M.E. Construction Engineering and Management",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.Tech. Chemical Engineering",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "B.Tech. Food Technology",
      intake: "60",
      pdfLink: ""
    },
    {
      name: "M.E. CAD CAM",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. Computer Science and Engineering",
      intake: "25",
      pdfLink: ""
    },
    {
      name: "M.E. Applied Electronics",
      intake: "25",
      pdfLink: ""
    },
    {
      name: "M.E. VLSI Design",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. Control and Instrumentation Engineering",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. Mechatronics",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. Engineering Design",
      intake: "25",
      pdfLink: ""
    },
    {
      name: "M.E. Computer and Communication Engineering",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. Communication Systems",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. Power Electronics and Drives",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. Structural Engineering",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. Embedded Systems",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.Tech. Food Technology",
      intake: "18(New course)",
      pdfLink: ""
    },
    {
      name: "M.Tech. Information Technology (Information and Cyber warfare)",
      intake: "18(New course)",
      pdfLink: ""
    }
  ]
},
{
  slNo: "37",
  courses: [
    {
      name: "B.E. Civil Engineering",
      intake: "240",
      approvalNo: "F.No. Southern/1-2017386438/2014/EOA",
      approvalDate: "10.06.2014",
      period: "2014-2015",
      pdfLink: pdf37
    },
    {
      name: "B.E. Mechanical Engineering",
      intake: "240",
      pdfLink: ""
    },
    {
      name: "B.E. Electronics and Communication Engineering",
      intake: "240",
      pdfLink: ""
    },
    {
      name: "B.E. Computer Science and Engineering",
      intake: "240",
      pdfLink: ""
    },
    {
      name: "B.E. Electrical and Electronics Engineering",
      intake: "120",
      pdfLink: ""
    },
    {
      name: "B.E. Electronics and Instrumentation Engineering",
      intake: "120",
      pdfLink: ""
    },
    {
      name: "B.E. Mechatronics",
      intake: "120",
      pdfLink: ""
    },
    {
      name: "B.Tech. Information Technology",
      intake: "120",
      pdfLink: ""
    },
    {
      name: "B.Tech. Chemical Engineering",
      intake: "120",
      pdfLink: ""
    },
    {
      name: "M.E. Construction Engineering and Management",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.Tech. Chemical Engineering",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "B.Tech. Food Technology",
      intake: "60",
      pdfLink: ""
    },
    {
      name: "M.E. CAD CAM",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. Computer Science and Engineering",
      intake: "25",
      pdfLink: ""
    },
    {
      name: "M.E. Applied Electronics",
      intake: "25",
      pdfLink: ""
    },
    {
      name: "M.E. VLSI Design",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. Control and Instrumentation Engineering",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. Mechatronics",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. Engineering Design",
      intake: "25",
      pdfLink: ""
    },
    {
      name: "M.E. Computer and Communication Engineering",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. Communication Systems",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. Power Electronics and Drives",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. Structural Engineering",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. Embedded Systems",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.Tech. Food Technology",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.Tech. Information Technology (Information and Cyber warfare)",
      intake: "18",
      pdfLink: ""
    }
  ]
},
{
  slNo: "38",
  courses: [
    {
      name: "B.E. Civil Engineering",
      intake: "240",
      approvalNo: "F.No.Southern/1-2456278780/2015/EOA",
      approvalDate: "07.04.2015",
      period: "2015-2016",
      pdfLink: pdf38
    },
    {
      name: "B.E. Mechanical Engineering",
      intake: "240",
      pdfLink: ""
    },
    {
      name: "B.E. Electronics and Communication Engineering",
      intake: "240",
      pdfLink: ""
    },
    {
      name: "B.E. Computer Science and Engineering",
      intake: "240",
      pdfLink: ""
    },
    {
      name: "B.E. Electrical and Electronics Engineering",
      intake: "120",
      pdfLink: ""
    },
    {
      name: "B.E. Electronics and Instrumentation Engineering",
      intake: "120",
      pdfLink: ""
    },
    {
      name: "B.E. Mechatronics",
      intake: "120",
      pdfLink: ""
    },
    {
      name: "B.Tech. Information Technology",
      intake: "120",
      pdfLink: ""
    },
    {
      name: "B.Tech. Chemical Engineering",
      intake: "120",
      pdfLink: ""
    },
    {
      name: "B.E Automobile Engineering",
      intake: "60(New Course)",
      pdfLink: ""
    },
    {
      name: "M.E. Construction Engineering and Management",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.Tech. Chemical Engineering",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "B.Tech. Food Technology",
      intake: "60",
      pdfLink: ""
    },
    {
      name: "M.E. CAD CAM",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. Computer Science and Engineering",
      intake: "25",
      pdfLink: ""
    },
    {
      name: "M.E. Applied Electronics",
      intake: "25",
      pdfLink: ""
    },
    {
      name: "M.E. VLSI Design",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. Control and Instrumentation Engineering",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. Mechatronics",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. Engineering Design",
      intake: "25",
      pdfLink: ""
    },
    {
      name: "M.E. Computer and Communication Engineering",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. Communication Systems",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. Power Electronics and Drives",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. Structural Engineering",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. Embedded Systems",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.Tech. Food Technology",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.Tech. Information Technology (Information and Cyber warfare)",
      intake: "18",
      pdfLink: ""
    }
  ]
},
{
  slNo: "39",
  courses: [
    {
      name: "B.E. Civil Engineering",
      intake: "240",
      approvalNo: "F.No.Southern/1-2811168221/2016/EOA",
      approvalDate: "25.04.2016",
      period: "2016-2017",
      pdfLink: pdf39
    },
    {
      name: "B.E. Mechanical Engineering",
      intake: "240",
      pdfLink: ""
    },
    {
      name: "B.E. Electronics and Communication Engineering",
      intake: "240",
      pdfLink: ""
    },
    {
      name: "B.E. Computer Science and Engineering",
      intake: "240",
      pdfLink: ""
    },
    {
      name: "B.E. Electrical and Electronics Engineering",
      intake: "120",
      pdfLink: ""
    },
    {
      name: "B.E. Electronics and Instrumentation Engineering",
      intake: "120",
      pdfLink: ""
    },
    {
      name: "B.E. Mechatronics",
      intake: "120",
      pdfLink: ""
    },
    {
      name: "B.Tech. Information Technology",
      intake: "120",
      pdfLink: ""
    },
    {
      name: "B.Tech. Chemical Engineering",
      intake: "120",
      pdfLink: ""
    },
    {
      name: "B.E Automobile Engineering",
      intake: "60",
      pdfLink: ""
    },
    {
      name: "M.E. Construction Engineering and Management",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.Tech. Chemical Engineering",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "B.Tech. Food Technology",
      intake: "60",
      pdfLink: ""
    },
    {
      name: "M.E. CAD CAM",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. Computer Science and Engineering",
      intake: "25",
      pdfLink: ""
    },
    {
      name: "M.E. Applied Electronics",
      intake: "25",
      pdfLink: ""
    },
    {
      name: "M.E. VLSI Design",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. Control and Instrumentation Engineering",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. Mechatronics",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. Engineering Design",
      intake: "25",
      pdfLink: ""
    },
    {
      name: "M.Tech. Information Technology",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. Communication Systems",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. Power Electronics and Drives",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. Structural Engineering",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. Embedded Systems",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.Tech. Food Technology",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.Tech. Information Technology (Information and Cyber warfare)",
      intake: "18",
      pdfLink: ""
    }
  ]
},
{
  slNo: "40",
  courses: [
    {
      name: "B.E. Civil Engineering",
      intake: "240",
      approvalNo: "F.No.Southern/1-2811168221/2016/EOA",
      approvalDate: "30.03.2017",
      period: "2017-2018",
      pdfLink: pdf40
    },
    {
      name: "B.E. Mechanical Engineering",
      intake: "240",
      pdfLink: ""
    },
    {
      name: "B.E. Electronics and Communication Engineering",
      intake: "240",
      pdfLink: ""
    },
    {
      name: "B.E. Computer Science and Engineering",
      intake: "240",
      pdfLink: ""
    },
    {
      name: "B.E. Electrical and Electronics Engineering",
      intake: "120",
      pdfLink: ""
    },
    {
      name: "B.E. Electronics and Instrumentation Engineering",
      intake: "120",
      pdfLink: ""
    },
    {
      name: "B.E. Mechatronics",
      intake: "120",
      pdfLink: ""
    },
    {
      name: "B.Tech. Information Technology",
      intake: "120",
      pdfLink: ""
    },
    {
      name: "B.Tech. Chemical Engineering",
      intake: "120",
      pdfLink: ""
    },
    {
      name: "B.E Automobile Engineering",
      intake: "60",
      pdfLink: ""
    },
    {
      name: "M.E. Construction Engineering and Management",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.Tech. Chemical Engineering",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "B.Tech. Food Technology",
      intake: "60",
      pdfLink: ""
    },
    {
      name: "M.E. CAD CAM",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. Computer Science and Engineering",
      intake: "25",
      pdfLink: ""
    },
    {
      name: "M.E. Applied Electronics",
      intake: "25",
      pdfLink: ""
    },
    {
      name: "M.E. VLSI Design",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. Control and Instrumentation Engineering",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. Mechatronics",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. Engineering Design",
      intake: "25",
      pdfLink: ""
    },
    {
      name: "M.Tech. Information Technology",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. Communication Systems",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. Power Electronics and Drives",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. Structural Engineering",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. Embedded Systems",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.Tech. Food Technology",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.Tech. Information Technology (Information and Cyber warfare)",
      intake: "18",
      pdfLink: ""
    }
  ]
},
    {
      slNo: 41,
      courses: [
        {
          name: "B.E. Civil Engineering",
          intake: 240,
          approvalNo: "F.No. Southern/1-3517175928/2018/EOA/Corrigendum-1",
          approvalDate: "05.06.2018",
          period: "2018-19",
          pdfLink: pdf41
        },
        {
          name: "B.E. Mechanical Engineering",
          intake: 240,
          pdfLink: ""
        },
        {
          name: "B.E. Electronics and Communication Engineering",
          intake: 240,
          pdfLink: ""
        },
        {
          name: "B.E. Computer Science and Engineering",
          intake: 240,
          pdfLink: ""
        },
        {
          name: "B.E. Electrical and Electronics Engineering",
          intake: 120,
          pdfLink: ""
        },
        {
          name: "B.E. Electronics and Instrumentation Engineering",
          intake: 120,
          pdfLink: ""
        },
        {
          name: "B.E. Mechatronics",
          intake: 120,
          pdfLink: ""
        },
        {
          name: "B.Tech. Information Technology",
          intake: 120,
          pdfLink: ""
        },
        {
          name: "B.Tech. Chemical Engineering",
          intake: 120,
          pdfLink: ""
        },
        {
          name: "B.E. Automobile Engineering",
          intake: 60,
          pdfLink: ""
        },
        {
          name: "M.E. Construction Engineering and Management",
          intake: 18,
          pdfLink: ""
        },
        {
          name: "M.Tech. Chemical Engineering",
          intake: 18,
          pdfLink: ""
        },
        {
          name: "B.Tech. Food Technology",
          intake: 60,
          pdfLink: ""
        },
        {
          name: "M.E. CAD CAM",
          intake: 18,
          pdfLink: ""
        },
        {
          name: "M.E. Computer Science and Engineering",
          intake: 25,
          pdfLink: ""
        },
        {
          name: "M.E. Applied Electronics",
          intake: 25,
          pdfLink: ""
        },
        {
          name: "M.E. VLSI Design",
          intake: 18,
          pdfLink: ""
        },
        {
          name: "M.E. Control and Instrumentation Engineering",
          intake: 18,
          pdfLink: ""
        },
        {
          name: "M.E. Mechatronics",
          intake: 18,
          pdfLink: ""
        },
        {
          name: "M.E. Engineering Design",
          intake: 25,
          pdfLink: ""
        },
        {
          name: "M.E. Communication Systems",
          intake: 18,
          pdfLink: ""
        },
        {
          name: "M.E. Power Electronics and Drives",
          intake: 18,
          pdfLink: ""
        },
        {
          name: "M.E. Structural Engineering",
          intake: 18,
          pdfLink: ""
        },
        {
          name: "M.E. Embedded Systems",
          intake: 18,
          pdfLink: ""
        },
        {
          name: "M.Tech. Food Technology",
          intake: 18,
          pdfLink: ""
        },
        {
          name: "M.Tech. Information Technology (Information and Cyber Warfare)",
          intake: 18,
          pdfLink: ""
        }
      ]
    },
    {
      slNo: 42,
      courses: [
        {
          name: "B.E. Civil Engineering",
          intake: 240,
          approvalNo: "F.No. Southern/1-4262186769/2019/EOA",
          approvalDate: "10.04.2019",
          period: "2019-20",
          pdfLink: pdf42
        },
        {
          name: "B.E. Mechanical Engineering",
          intake: 240,
          pdfLink: ""
        },
        {
          name: "B.E. Electronics and Communication Engineering",
          intake: 240,
          pdfLink: ""
        },
        {
          name: "B.E. Computer Science and Engineering",
          intake: 240,
          pdfLink: ""
        },
        {
          name: "B.E. Electrical and Electronics Engineering",
          intake: 120,
          pdfLink: ""
        },
        {
          name: "B.E. Electronics and Instrumentation Engineering",
          intake: 120,
          pdfLink: ""
        },
        {
          name: "B.E. Mechatronics",
          intake: 120,
          pdfLink: ""
        },
        {
          name: "B.Tech. Information Technology",
          intake: 120,
          pdfLink: ""
        },
        {
          name: "B.Tech. Chemical Engineering",
          intake: 120,
          pdfLink: ""
        },
        {
          name: "B.E. Automobile Engineering",
          intake: 60,
          pdfLink: ""
        },
        {
          name: "M.E. Construction Engineering and Management",
          intake: 18,
          pdfLink: ""
        },
        {
          name: "M.Tech. Chemical Engineering",
          intake: 18,
          pdfLink: ""
        },
        {
          name: "B.Tech. Food Technology",
          intake: 60,
          pdfLink: ""
        },
        {
          name: "M.E. CAD CAM",
          intake: 18,
          pdfLink: ""
        },
        {
          name: "M.E. Computer Science and Engineering",
          intake: 25,
          pdfLink: ""
        },
        {
          name: "M.E. Applied Electronics",
          intake: 25,
          pdfLink: ""
        },
        {
          name: "M.E. VLSI Design",
          intake: 18,
          pdfLink: ""
        },
        {
          name: "M.E. Control and Instrumentation Engineering",
          intake: 18,
          pdfLink: ""
        },
        {
          name: "M.E. Mechatronics",
          intake: 18,
          pdfLink: ""
        },
        {
          name: "M.E. Engineering Design",
          intake: 25,
          pdfLink: ""
        },
        {
          name: "M.E. Communication Systems",
          intake: 18,
          pdfLink: ""
        },
        {
          name: "M.E. Power Electronics and Drives",
          intake: 18,
          pdfLink: ""
        },
        {
          name: "M.E. Structural Engineering",
          intake: 18,
          pdfLink: ""
        },
        {
          name: "M.E. Embedded Systems",
          intake: 18,
          pdfLink: ""
        },
        {
          name: "M.Tech. Food Technology",
          intake: 18,
          pdfLink: ""
        },
        {
          name: "M.Tech. Information Technology (Information and Cyber Warfare)",
          intake: 18,
          pdfLink: ""
        }
      ]
    },
    {
      slNo: 43,
      courses: [
        {
          name: "B.E. Civil Engineering",
          intake: 240,
          approvalNo: "F.No. Southern/1-7009681891/2020/EOA",
          approvalDate: "15.06.2020",
          period: "2020-21",
          pdfLink: pdf43
        },
        {
          name: "B.E. Mechanical Engineering",
          intake: 240,
          pdfLink: ""
        },
        {
          name: "B.E. Electronics and Communication Engineering",
          intake: 240,
          pdfLink: ""
        },
        {
          name: "B.E. Computer Science and Engineering",
          intake: 240,
          pdfLink: ""
        },
        {
          name: "B.E. Electrical and Electronics Engineering",
          intake: 120,
          pdfLink: ""
        },
        {
          name: "B.E. Electronics and Instrumentation Engineering",
          intake: 120,
          pdfLink: ""
        },
        {
          name: "B.E. Mechatronics Engineering",
          intake: 120,
          pdfLink: ""
        },
        {
          name: "B.Tech. Information Technology",
          intake: 120,
          pdfLink: ""
        },
        {
          name: "B.Tech. Chemical Engineering",
          intake: 120,
          pdfLink: ""
        },
        {
          name: "B.E. Automobile Engineering",
          intake: 60,
          pdfLink: ""
        },
        {
          name: "M.E. Construction Engineering and Management",
          intake: 6,
          pdfLink: ""
        },
        {
          name: "M.Tech. Chemical Engineering",
          intake: 6,
          pdfLink: ""
        },
        {
          name: "B.Tech. Food Technology",
          intake: 60,
          pdfLink: ""
        },
        {
          name: "M.E. Computer Science and Engineering",
          intake: 12,
          pdfLink: ""
        },
        {
          name: "M.E. VLSI Design",
          intake: 6,
          pdfLink: ""
        },
        {
          name: "M.E. Control and Instrumentation Engineering",
          intake: 6,
          pdfLink: ""
        },
        {
          name: "M.E. Mechatronics Engineering",
          intake: 6,
          pdfLink: ""
        },
        {
          name: "M.E. Engineering Design",
          intake: 6,
          pdfLink: ""
        },
        {
          name: "M.Tech. Information Technology",
          intake: 6,
          pdfLink: ""
        },
        {
          name: "M.E. Power Electronics and Drives",
          intake: 6,
          pdfLink: ""
        },
        {
          name: "M.E. Structural Engineering",
          intake: 18,
          pdfLink: ""
        },
        {
          name: "M.E. Embedded Systems",
          intake: 6,
          pdfLink: ""
        },
        {
          name: "M.Tech. Food Technology",
          intake: 18,
          pdfLink: ""
        },
        {
          name: "MBA",
          intake: 120,
          pdfLink: ""
        },
        {
          name: "Master in Computer Application",
          intake: 120,
          pdfLink: ""
        }
      ]
    },
    {
      slNo: 44,
      courses: [
        {
          name: "B.E. Civil Engineering",
          intake: 120,
          approvalNo: "F.No. Southern/1-9320413679/2021/EOA",
          approvalDate: "02.07.2021",
          period: "2021-22",
          pdfLink: pdf44
        },
        {
          name: "B.E. Mechanical Engineering",
          intake: 120,
          pdfLink: ""
        },
        {
          name: "B.E. Electronics and Communication Engineering",
          intake: 240,
          pdfLink: ""
        },
        {
          name: "B.E. Computer Science and Engineering",
          intake: 240,
          pdfLink: ""
        },
        {
          name: "B.E. Electrical and Electronics Engineering",
          intake: 120,
          pdfLink: ""
        },
        {
          name: "B.E. Electronics and Instrumentation Engineering",
          intake: 120,
          pdfLink: ""
        },
        {
          name: "B.E. Mechatronics Engineering",
          intake: 120,
          pdfLink: ""
        },
        {
          name: "B.Tech. Information Technology",
          intake: 120,
          pdfLink: ""
        },
        {
          name: "B.Tech. Chemical Engineering",
          intake: 120,
          pdfLink: ""
        },
        {
          name: "B.E. Automobile Engineering",
          intake: 60,
          pdfLink: ""
        },
        {
          name: "M.E. Construction Engineering and Management",
          intake: 3,
          pdfLink: ""
        },
        {
          name: "M.Tech. Chemical Engineering",
          intake: 3,
          pdfLink: ""
        },
        {
          name: "B.Tech. Food Technology",
          intake: 60,
          pdfLink: ""
        },
        {
          name: "M.E. Computer Science and Engineering",
          intake: 12,
          pdfLink: ""
        },
        {
          name: "M.E. VLSI Design",
          intake: 3,
          pdfLink: ""
        },
        {
          name: "M.E. Control and Instrumentation Engineering",
          intake: 3,
          pdfLink: ""
        },
        {
          name: "M.E. Mechatronics Engineering",
          intake: 3,
          pdfLink: ""
        },
        {
          name: "M.E. Engineering Design",
          intake: 3,
          pdfLink: ""
        },
        {
          name: "M.Tech. Information Technology",
          intake: 3,
          pdfLink: ""
        },
        {
          name: "M.E. Power Electronics and Drives",
          intake: 3,
          pdfLink: ""
        },
        {
          name: "M.E. Structural Engineering",
          intake: 6,
          pdfLink: ""
        },
        {
          name: "M.E. Embedded Systems",
          intake: 3,
          pdfLink: ""
        },
        {
          name: "M.Tech. Food Technology",
          intake: 6,
          pdfLink: ""
        },
        {
          name: "MBA",
          intake: 60,
          pdfLink: ""
        },
        {
          name: "Master in Computer Application",
          intake: 60,
          pdfLink: ""
        }
      ]
    },
      {
        slNo: "45",
        courses: [
          {
            name: "B.E. Civil Engineering",
            intake: "120",
            approvalNo: "F.No. Southern/1-10969995165/2022/EOA",
            approvalDate: "07.07.2022",
            period: "2022-23",
            pdfLink: pdf45
          },
          {
            name: "B.E. Mechanical Engineering",
            intake: "120",
            pdfLink: ""
          },
          {
            name: "B.E. Electronics and Communication Engineering",
            intake: "240",
            pdfLink: ""
          },
          {
            name: "B.E. Computer Science and Engineering",
            intake: "240",
            pdfLink: ""
          },
          {
            name: "B.E. Electrical and Electronics Engineering",
            intake: "120",
            pdfLink: ""
          },
          {
            name: "B.E. Electronics and Instrumentation Engineering",
            intake: "120",
            pdfLink: ""
          },
          {
            name: "B.E. Mechatronics Engineering",
            intake: "120",
            pdfLink: ""
          },
          {
            name: "B.Tech. Information Technology",
            intake: "120",
            pdfLink: ""
          },
          {
            name: "B.Tech. Chemical Engineering",
            intake: "120",
            pdfLink: ""
          },
          {
            name: "B.E. Automobile Engineering",
            intake: "60",
            pdfLink: ""
          },
          {
            name: "B.Tech. Food Technology",
            intake: "60",
            pdfLink: ""
          },
          {
            name: "M.E. Computer Science and Engineering",
            intake: "12",
            pdfLink: ""
          },
          {
            name: "M.E. VLSI Design",
            intake: "6",
            pdfLink: ""
          },
          {
            name: "M.Tech. Information Technology",
            intake: "6",
            pdfLink: ""
          },
          {
            name: "M.E. Structural Engineering",
            intake: "18",
            pdfLink: ""
          },
          {
            name: "M.E. Embedded Systems",
            intake: "6",
            pdfLink: ""
          },
          {
            name: "M.Tech. Food Technology",
            intake: "18",
            pdfLink: ""
          },
          {
            name: "MBA",
            intake: "120",
            pdfLink: ""
          },
          {
            name: "Maser in Computer Application",
            intake: "120",
            pdfLink: ""
          },
          {
            name: "B.Tech. Artificial Intelligence and Machine Learning",
            intake: "120",
            pdfLink: ""
          },
          {
            name: "B.Tech. Artificial Intelligence and Data Science",
            intake: "120",
            pdfLink: ""
          },
          {
            name: "B.E. Computer Science and Design",
            intake: "120",
            pdfLink: ""
          }
        ]
      },
      {
        slNo: "46",
        courses: [
          {
            name: "B.E. Civil Engineering",
            intake: "60",
            approvalNo: "F.No. Southern/1-36459492110/2023/EOA",
            approvalDate: "02.06.2023",
            period: "2023-24",
            pdfLink: pdf46
          },
          {
            name: "B.Tech. Artificial Intelligence and Machine Learning",
            intake: "120",
            pdfLink: ""
          },
          {
            name: "B.Tech. Artificial Intelligence and Data Science",
            intake: "180",
            pdfLink: ""
          },
          {
            name: "B.E. Chemical Engineering",
            intake: "60",
            pdfLink: ""
          },
          {
            name: "B.E. Automobile Engineering",
            intake: "30",
            pdfLink: ""
          },
          {
            name: "B.E. Computer Science and Design",
            intake: "180",
            pdfLink: ""
          },
          {
            name: "B.E. Computer Science and Engineering",
            intake: "240",
            pdfLink: ""
          },
          {
            name: "B.E. Electrical and Electronics Engineering",
            intake: "120",
            pdfLink: ""
          },
          {
            name: "B.E. Electronics and Communication Engineering",
            intake: "240",
            pdfLink: ""
          },
          {
            name: "B.E. Electronics and Instrumentation Engineering",
            intake: "120",
            pdfLink: ""
          },
          {
            name: "B.Tech. Food Technology",
            intake: "60",
            pdfLink: ""
          },
          {
            name: "B.Tech. Information Technology",
            intake: "180",
            pdfLink: ""
          },
          {
            name: "B.E. Mechanical Engineering",
            intake: "60",
            pdfLink: ""
          },
          {
            name: "B.E. Mechatronics Engineering",
            intake: "120",
            pdfLink: ""
          },
          {
            name: "M.E. Computer Science and Engineering",
            intake: "6",
            pdfLink: ""
          },
          {
            name: "M.E. VLSI Design",
            intake: "6",
            pdfLink: ""
          },
          {
            name: "M.E. Structural Engineering",
            intake: "12",
            pdfLink: ""
          },
          {
            name: "M.Tech. Food Technology",
            intake: "18",
            pdfLink: ""
          },
          {
            name: "MBA",
            intake: "120",
            pdfLink: ""
          },
          {
            name: "Maser in Computer Applications",
            intake: "120",
            pdfLink: ""
          }
        ]
      },
      {
        slNo: "47",
        courses: [
          {
            name: "B.E. Civil Engineering",
            intake: "60",
            approvalNo: "F.No. Southern/1-43663656124/2024/EOA",
            approvalDate: "22.05.2024",
            period: "2024-25",
            pdfLink: pdf47
          },
          {
            name: "B.Tech. Artificial Intelligence and Machine Learning",
            intake: "60",
            pdfLink: ""
          },
          {
            name: "B.Tech. Artificial Intelligence and Data Science",
            intake: "180",
            pdfLink: ""
          },
          {
            name: "B.E. Chemical Engineering",
            intake: "60",
            pdfLink: ""
          },
          {
            name: "B.E. Automobile Engineering",
            intake: "30",
            pdfLink: ""
          },
          {
            name: "B.E. Computer Science and Design",
            intake: "120",
            pdfLink: ""
          },
          {
            name: "B.E. Computer Science and Engineering",
            intake: "360",
            pdfLink: ""
          },
          {
            name: "B.E. Electrical and Electronics Engineering",
            intake: "120",
            pdfLink: ""
          },
          {
            name: "B.E. Electronics and Communication Engineering",
            intake: "240",
            pdfLink: ""
          },
          {
            name: "B.E. Electronics and Instrumentation Engineering",
            intake: "120",
            pdfLink: ""
          },
          {
            name: "B.Tech. Food Technology",
            intake: "60",
            pdfLink: ""
          },
          {
            name: "B.Tech. Information Technology",
            intake: "180",
            pdfLink: ""
          },
          {
            name: "B.E. Mechanical Engineering",
            intake: "60",
            pdfLink: ""
          },
          {
            name: "B.E. Mechatronics Engineering",
            intake: "120",
            pdfLink: ""
          },
          {
            name: "M.E. Computer Science and Engineering",
            intake: "12",
            pdfLink: ""
          },
          {
            name: "M.E. VLSI Design",
            intake: "6",
            pdfLink: ""
          },
          {
            name: "M.E. Structural Engineering",
            intake: "12",
            pdfLink: ""
          },
          {
            name: "M.Tech. Food Technology",
            intake: "18",
            pdfLink: ""
          },
          {
            name: "MBA",
            intake: "120",
            pdfLink: ""
          },
          {
            name: "Maser in Computer Applications",
            intake: "120",
            pdfLink: ""
          }
        ]
      },
      {
        slNo: "48",
        courses: [
          {
            name: "Extended Extension of Approval for the Academic Year 2024-27 (All Programmes)",
            intake: "-",
            approvalNo: "F.No. Southern/1-43663656124/2024/EOA",
            approvalDate: "22.05.2024",
            period: "2024-2027",
            pdfLink: pdf48
          }
        ]
      },
      {
        slNo: "49",
        courses: [
          {
            name: "B.E. Civil Engineering",
            intake: "60",
            approvalNo: "F.No. Southern/1-44643325568/2025/EOA",
            approvalDate: "03.01.2025",
            period: "2025-26",
            pdfLink: pdf49
          },
          {
            name: "B.Tech. Artificial Intelligence and Machine Learning",
            intake: "60",
            pdfLink: ""
          },
          {
            name: "B.Tech. Artificial Intelligence and Data Science",
            intake: "180",
            pdfLink: ""
          },
          {
            name: "B.E. Chemical Engineering",
            intake: "60",
            pdfLink: ""
          },
          {
            name: "B.E. Automobile Engineering",
            intake: "30",
            pdfLink: ""
          },
          {
            name: "B.E. Computer Science and Design",
            intake: "120",
            pdfLink: ""
          },
          {
            name: "B.E. Computer Science and Engineering",
            intake: "360",
            pdfLink: ""
          },
          {
            name: "B.E. Electrical and Electronics Engineering",
            intake: "120",
            pdfLink: ""
          },
          {
            name: "B.E. Electronics and Communication Engineering",
            intake: "240",
            pdfLink: ""
          },
          {
            name: "B.E. Electronics and Instrumentation Engineering",
            intake: "120",
            pdfLink: ""
          },
          {
            name: "B.Tech. Food Technology",
            intake: "60",
            pdfLink: ""
          },
          {
            name: "B.Tech. Information Technology",
            intake: "180",
            pdfLink: ""
          },
          {
            name: "B.E. Mechanical Engineering",
            intake: "60",
            pdfLink: ""
          },
          {
            name: "B.E. Mechatronics Engineering",
            intake: "120",
            pdfLink: ""
          },
          {
            name: "M.E. Computer Science and Engineering",
            intake: "12",
            pdfLink: ""
          },
          {
            name: "M.E. VLSI Design",
            intake: "6",
            pdfLink: ""
          },
          {
            name: "M.E. Structural Engineering",
            intake: "12",
            pdfLink: ""
          },
          {
            name: "M.Tech. Food Technology",
            intake: "18",
            pdfLink: ""
          },
          {
            name: "MBA",
            intake: "120",
            pdfLink: ""
          },
          {
            name: "Maser in Computer Applications",
            intake: "120",
            pdfLink: ""
          }
        ]
      }    
    
];

const Aicteet = () => {

  const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const timer = setTimeout(() => setLoading(false), 1500);
      return () => clearTimeout(timer);
    }, []);
  
  
    return loading ? <Spinner /> : (
    <>
    <Section />
    <Navbar />
    <div className="aicte-container">
      <h2 className="aicte-title">AICTE Approvals for Engineering and Technology</h2>
      {[...approvals].reverse().map((approval, index) => (
        <div key={index} className="aicte-approval">
          <h3 className="aicte-serial">S.No : {index+1}</h3>
          <table className="aicte-table">
            <thead>
              <tr>
                <th>Course Name</th>
                <th>Intake</th>
                <th>Approval No. & Date</th>
                <th>Date</th>
                <th>Approval Period</th>
              </tr>
            </thead>
            <tbody>
              
              {approval.courses.map((course, idx) => (
                <tr key={idx}>
                  <td>{course.name}</td>
                  <td>{course.intake}</td>
                  <td>
                    {course.approvalNo ? (
                      <a href={course.pdfLink} target="_blank" rel="noopener noreferrer" className="aicte-download-link">
                      {course.approvalNo}
                  </a>
                    ) : (
                      "-"
                    )}
                  </td>
                  <td>{course.approvalDate || "-"}</td>
                  <td>{course.period || "-"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
    <Footer />
    <ScrollToTopButton />
  </>
  
  );
};

export default Aicteet;
