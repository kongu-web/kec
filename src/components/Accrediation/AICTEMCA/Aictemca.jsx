import React,{useState,useEffect} from "react";
import Section from "../../HomePage/Section/Section";
import Navbar from "../../HomePage/navbar/Navbar";
import Footer from "../../HomePage/Footer/Footer";
import ScrollToTopButton from "../../ScrollToTopButton";
import "./Aictemca.css";
import Spinner from "../../Spinner";

// Importing PDF files for MCA Approvals
import mca000 from '../../../assets/docs/Aicte/MCA/MCA1993-1994.pdf';
import mca001 from '../../../assets/docs/Aicte/MCA/MCA-001-1995-96 first approval 16.08.1995.pdf';
import mca002 from '../../../assets/docs/Aicte/MCA/MCA-002-1996-97 ext of approval 01.07.1996.pdf';
import mca003 from '../../../assets/docs/Aicte/MCA/MCA-003-1997-98 ext of approval 1997-98 18.06.1997.pdf';
import mca004 from '../../../assets/docs/Aicte/MCA/MCA-004-1998-99 ext of approval 21.07.1998.pdf';
import mca005 from '../../../assets/docs/Aicte/MCA/MCA-005-1998-99 ext of approval  & increase in intake 30 to 60 09.09.1998.pdf';
import mca006 from '../../../assets/docs/Aicte/MCA/MCA-006-1999-2001 EXT OF APPROVAL 16.07.1999.pdf';
import mca007 from '../../../assets/docs/Aicte/MCA/MCA-007-2001-2002 EXT OF APPROVAL 21.06.2001.pdf';
import mca008 from '../../../assets/docs/Aicte/MCA/MCA-008-2002-2005 EXT OF APPROVAL 19.06.2002.pdf';
import mca009 from '../../../assets/docs/Aicte/MCA/MCA-009-2005-2006 EOA APPROVAL ALONGWITH E&T APPROVAL 19.09.2005.pdf';
import mca010 from '../../../assets/docs/Aicte/MCA/MCA-010-2006-2007 EXT OF APPROVAL 25.05.2006.pdf';
import mca011 from '../../../assets/docs/Aicte/MCA/MCA-011-2007-2008 EXT OF APPROVAL 10.05.2007.pdf';
import mca012 from '../../../assets/docs/Aicte/MCA/MCA-012-2007-2008 INCREASE IN INTAKE 60 TO 120 24.08.2007.pdf';
import mca013 from '../../../assets/docs/Aicte/MCA/MCA-013-2008-2011 EXT OF APPROVAL 08.05.2008.pdf';
import mca014 from '../../../assets/docs/Aicte/MCA/MCA-014-2010-2011EXTENSION OF APPROVAL 23.08.2010.pdf';
import mca015 from '../../../assets/docs/Aicte/MCA/MCA-015-2011-2012 EXTENSION OF APPROVAL 01.09.2011.pdf';
import mca016 from '../../../assets/docs/Aicte/MCA/MCA-016-2012-2013 Extension of approval 10.05.2012.PDF';
import mca017 from '../../../assets/docs/Aicte/MCA/MCA-017-2013-2014 Extension of approval 19.03.2013.PDF';
import mca018 from '../../../assets/docs/Aicte/MCA/MCA-018-2014-2015 Extension of approval 04.06.2014.PDF';
import mca019 from '../../../assets/docs/Aicte/MCA/MCA-019-2015-2016 Extension of approval 07.06.2015.PDF';
import mca020 from '../../../assets/docs/Aicte/MCA/MCA-020-2016-2017 Extension of Approval 25.04.2016.pdf';
import mca021 from '../../../assets/docs/Aicte/MCA/MCA-021-2017-2018 Extension of Approval 20.04.2017.pdf';
import mca022 from '../../../assets/docs/Aicte/MCA/MCA-022-2018-2019 Extension of Approval 21.04.2018.pdf';
import mca023 from '../../../assets/docs/Aicte/MCA/MCA-023-2019-2020 Extension of Approval 04.05.2019.PDF';


const mcaApprovals = [
  {
    slNo: "01", name: "MCA", intake: "20", approvalNo: "F.No. 6885/A1/93", approvalDate: "18.08.1993", period: "1993-1994", pdf : mca000
  },
  {
    slNo: "02", name: "MCA", intake: "30", approvalNo: "F.No. 411/TN-27/APR(CS)/BOS/95", approvalDate: "16.08.1995", period: "1995-1996", pdf : mca001
  },
  {
    slNo: "03", name: "MCA", intake: "30", approvalNo: "F.No. TN-27/MCP/APR(CS)/95", approvalDate: "01.07.1996", period: "1996-1997", pdf : mca002
  },
  {
    slNo: "04", name: "MCA", intake: "30", approvalNo: "F.No. 411/TN-27/BOS(CS)/95", approvalDate: "18.06.1997", period: "1997-1998", pdf : mca003
  },
  {
    slNo: "05", name: "MCA", intake: "30", approvalNo: "F.No. 411/TN-27/BOS(CS)/95", approvalDate: "21.07.1998", period: "1998-1999", pdf : mca004
  },
  {
    slNo: "06", name: "MCA", intake: "30 to 60", approvalNo: "F.No. 411/TN-27/APR(CS)/BOS/95", approvalDate: "09.09.1998", period: "1998-1999",pdf : mca005
  },
  {
    slNo: "07", name: "MCA", intake: "60", approvalNo: "F.No. 411/TN-27/BOS(CS)/95", approvalDate: "16.07.1999", period: "1999-2001",pdf : mca006
  },
  {
    slNo: "08", name: "MCA", intake: "60", approvalNo: "F.No. 411/TN-27/BOS(CS)/95", approvalDate: "21.06.2001", period: "2001-2002",pdf : mca007
  },
  {
    slNo: "09", name: "MCA", intake: "60", approvalNo: "F.No. 411/TN-27/BOS(CS)/95", approvalDate: "19.06.2002", period: "2002-2005", pdf : mca008
  },
  {
    slNo: "10", name: "MCA", intake: "60", approvalNo: "F.No.730-52-230(E)/ET/97", approvalDate: "19.09.2005", period: "2005-2006",pdf : mca009
  },
  {
    slNo: "11", name: "MCA", intake: "60", approvalNo: "F.No.411/TN-27/BOS(CS)/95", approvalDate: "25.05.2006", period: "2006-2007",pdf : mca010
  },
  {
    slNo: "12", name: "MCA", intake: "60", approvalNo: "F.No.411/TN-27/BOS(CS)/95", approvalDate: "10.05.2007", period: "2007-2008",pdf : mca011
  },
  {
    slNo: "13", name: "MCA", intake: "60 to 120", approvalNo: "F.No.411/TN-27/BOS(CS)/95", approvalDate: "24.08.2007", period: "2007-2008",pdf : mca012
  },
  {
    slNo: "14", name: "MCA", intake: "120", approvalNo: "F.No.411/TN-27/BOS(CS)/95", approvalDate: "08.05.2008", period: "2008-2011",pdf : mca013
  },
  {
    slNo: "15", name: "MCA", intake: "120", approvalNo: "No.Southern Region/1-7351981/2010/EOA", approvalDate: "23.08.2010", period: "2010-2011",pdf : mca014
  },
  {
    slNo: "16", name: "MCA", intake: "120", approvalNo: "F.No.Southern/1-404525611/2011/EOA", approvalDate: "01.09.2011", period: "2011-2012",pdf : mca015
  },
  {
    slNo: "17", name: "MCA", intake: "120", approvalNo: "F.No.Southern/1-708969902/2012/EOA", approvalDate: "10.05.2012", period: "2012-2013",pdf : mca016
  },
  {
    slNo: "18", name: "MCA", intake: "120", approvalNo: "F.No.Southern/1-1364281481/2013/EOA", approvalDate: "19.03.2013", period: "2013-2014",pdf : mca017
  },
  {
    slNo: "19", name: "MCA", intake: "120", approvalNo: "F.No. Southern/1-2017309969/2014/EOA", approvalDate: "04.06.2014", period: "2014-2015",pdf : mca018
  },
  {
    slNo: "20", name: "MCA", intake: "120", approvalNo: "F.No. Southern/1-2454396050/2015/EOA", approvalDate: "07.06.2015", period: "2015-2016",pdf : mca019
  },
  {
    slNo: "21", name: "MCA", intake: "120", approvalNo: "F.No. Southern/1-2811121697/2016/EOA", approvalDate: "25.04.2016", period: "2016-2017",pdf : mca020
  },
  {
    slNo: "22", name: "MCA", intake: "120", approvalNo: "F.No. Southern/1-3324892934/2017/EOA", approvalDate: "30.02.2017", period: "2017-2018",pdf : mca021
  },
  {
    slNo: "23", name: "MCA", intake: "120", approvalNo: "F.No. Southern/1-3517174181/2018/EOA", approvalDate: "04.04.2018", period: "2018-2019",pdf : mca022
  },
  {
    slNo: "24", name: "MCA", intake: "120", approvalNo: "F.No. Southern/1-4262184852/2019/EOA", approvalDate: "10.04.2019", period: "2019-2020",pdf : mca023
  },
];

const AicteMca = () => {
  const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const timer = setTimeout(() => setLoading(false), 1500);
      return () => clearTimeout(timer);
    }, []);
  
  
    return loading ? <Spinner /> : (
    <>
      <Section />
      <Navbar />
      <div className="mca-container">
        <h2 className="mca-title">AICTE Approvals for MCA</h2>
        <div className="mca-table-wrapper">
          <table className="mca-table">
            <thead>
              <tr>
                <th>Sl. No.</th>
                <th>Course</th>
                <th>Intake</th>
                <th>AICTE Approval No. with Date</th>
                <th>Date of Approval</th>
                <th>Period</th>
              </tr>
            </thead>
            <tbody>
                {mcaApprovals.map((item, idx) => (
                    <tr key={idx}>
                    <td>{item.slNo}</td>
                    <td>{item.name}</td>
                    <td>{item.intake}</td>
                    <td>
                        {item.pdf ? (
                        <a href={item.pdf}  target="_blank" rel="noopener noreferrer">
                            {item.approvalNo}
                        </a>
                        ) : (
                        item.approvalNo
                        )}
                    </td>
                    <td>{item.approvalDate}</td>
                    <td>{item.period}</td>
                    </tr>
                ))}
                </tbody>

          </table>
        </div>
      </div>
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default AicteMca;
