import React,{useState,useEffect} from "react";
import Section from "../../HomePage/Section/Section";
import Navbar from "../../HomePage/navbar/Navbar";
import Footer from "../../HomePage/Footer/Footer";
import ScrollToTopButton from "../../ScrollToTopButton";
import "./Aictemba.css";
import Spinner from "../../Spinner";

// Importing PDF files for MCA Approvals
import mca000 from '../../../assets/docs/Aicte/MBA/MBA-001-1994-96 firt approval 31.03.1994.pdf';
import mca001 from '../../../assets/docs/Aicte/MBA/MBA-002-1996-97-98 ext of approval 07.06.1996.pdf';
import mca002 from '../../../assets/docs/Aicte/MBA/MBA-003-1996-97 ext of approval increase in intkae 40 to 60 06.11.1996.pdf';
import mca003 from '../../../assets/docs/Aicte/MBA/MBA-004-1998-99  ext  of approval 20.07.1998.pdf';
import mca004 from '../../../assets/docs/Aicte/MBA/MBA-005-1999-2000 ext of approval 18.08.1999 005.pdf';
import mca005 from '../../../assets/docs/Aicte/MBA/MBA-006-2000-2003 EXT OF APPROVAL 16.07.2000.pdf';
import mca006 from '../../../assets/docs/Aicte/MBA/MBA-007-2001-2003 EXTENSION OF APPROVAL 19.06.2001.pdf';
import mca007 from '../../../assets/docs/Aicte/MBA/MBA-008-2003-2006 EXTENSION OF APPROVAL 07.05.2003.pdf';
import mca008 from '../../../assets/docs/Aicte/MBA/MBA-009-2005-2006 EOA APPROVAL ALONGWITH E&T APPROVAL 19.09.2005.pdf';
import mca009 from '../../../assets/docs/Aicte/MBA/MBA-010-2006-2007 EOA & CONDITIONAL APPROVAL REMOVED STATUS25.05.2006.pdf';
import mca010 from '../../../assets/docs/Aicte/MBA/MBA-011-2007-2008 EXTENSION OF APPROVAL 10.05.2007.pdf';
import mca011 from '../../../assets/docs/Aicte/MBA/MBA-012-2007-2008 INCREASE IN INTAKE  60 TO 120 24.08.2007.pdf';
import mca012 from '../../../assets/docs/Aicte/MBA/MBA-013-2008-2009 extension of approval 17.06.2008.pdf';
import mca013 from '../../../assets/docs/Aicte/MBA/MBA-014-2009-2012 EXTENSION OF APPROVAL 02.06.2009.pdf';
import mca014 from '../../../assets/docs/Aicte/MBA/MBA-015-2010-2011 EXTENSION OF APPROVAL 23.08.2010.pdf';
import mca015 from '../../../assets/docs/Aicte/MBA/MBA-016-2011-2012 EXTENSION OF APPROVAL 01.09.2011.pdf';
import mca016 from '../../../assets/docs/Aicte/MBA/MBA-017-2012-2013 Extension of approval 10.05.2012.PDF';
import mca017 from '../../../assets/docs/Aicte/MBA/MBA-018-2013-2014 Extension of approval 19.03.2013.PDF';
import mca018 from '../../../assets/docs/Aicte/MBA/MBA-019-2014-2015 Extension of approval 4.6.2014.PDF';
import mca019 from '../../../assets/docs/Aicte/MBA/MBA-019-2015-2016 Extension of approval 07.06.2015.PDF';
import mca020 from '../../../assets/docs/Aicte/MBA/MBA-020-2016-2017 Extension of Approval 25.04.2016.pdf';
import mca021 from '../../../assets/docs/Aicte/MBA/MBA-021-2017-2018 Extension of Approval 20.04.2017.pdf';
import mca022 from '../../../assets/docs/Aicte/MBA/MBA-022-2018-2019 Extension of Approval 21.04.2018.PDF';
import mca023 from '../../../assets/docs/Aicte/MBA/MBA-023-2019-2020 Extension of Approval 04.05.2019.PDF';


const mcaApprovals = [
    { slNo: "01", name: "MBA", intake: "40", approvalNo: "F.No: 453/BII/BOS(M)/94 23880", approvalDate: "31.03.1994", period: "1994-1995", pdf: mca000 },
    { slNo: "02", name: "MBA", intake: "40", approvalNo: "F.No: 431/45-3/MCP(M)/94", approvalDate: "13.06.1996", period: "1995-1996", pdf: mca001 },
    { slNo: "03", name: "MBA", intake: "40 to 60", approvalNo: "F.No: 431/45-3/MCP-APR(M)/96", approvalDate: "06.11.1996", period: "1996-1997", pdf: mca002 },
    { slNo: "04", name: "MBA", intake: "60", approvalNo: "F.No: 431/45-3/MCP-(M)/94", approvalDate: "20.07.1998", period: "1998-1999", pdf: mca003 },
    { slNo: "05", name: "MBA", intake: "60", approvalNo: "F.No: 431/45-3/MCP-(M)/94", approvalDate: "18.08.1999", period: "1999-2000", pdf: mca004 },
    { slNo: "06", name: "MBA", intake: "60", approvalNo: "F.No: 431/45-3/MCP-(M)/94", approvalDate: "16.07.2000", period: "2000-2001", pdf: mca005 },
    { slNo: "07", name: "MBA", intake: "60", approvalNo: "F.No: 431/45-3/MCP-(M)/94", approvalDate: "19.06.2001", period: "2001-2003", pdf: mca006 },
    { slNo: "08", name: "MBA", intake: "60", approvalNo: "F.No: 431/45-3/MCP-(M)/94", approvalDate: "07.05.2003", period: "2003-2006", pdf: mca007 },
    { slNo: "09", name: "MBA", intake: "60", approvalNo: "F.No : 730-52-230 (E)/ET/97", approvalDate: "19.09.2005", period: "2005-2006", pdf: mca008 },
    { slNo: "10", name: "MBA", intake: "60", approvalNo: "F.No: 431/45-2/MCP(M)/94", approvalDate: "25.05.2006", period: "2006-2007", pdf: mca009 },
    { slNo: "11", name: "MBA", intake: "60", approvalNo: "F.No: 431/45-2/MCP(M)/94", approvalDate: "10.05.2007", period: "2007-2008", pdf: mca010 },
    { slNo: "12", name: "MBA", intake: "60 To 120", approvalNo: "F.No: 431/45-2/MCP(M)/94", approvalDate: "24.08.2007", period: "2007-2008", pdf: mca011 },
    { slNo: "13", name: "MBA", intake: "120", approvalNo: "F.No: 431/45-2/MCP(M)/94", approvalDate: "17.06.2008", period: "2008-2009", pdf: mca012 },
    { slNo: "14", name: "MBA", intake: "120", approvalNo: "F.No: 431/45-2/MCP(M)/94", approvalDate: "02.06.2009", period: "2009-2012", pdf: mca013 },
    { slNo: "15", name: "MBA", intake: "120", approvalNo: "Southern Region/1-10174461/2010/EOA", approvalDate: "23.08.2010", period: "2010-2011", pdf: mca014 },
    { slNo: "16", name: "MBA", intake: "120", approvalNo: "F.No: Southern/1-428254321/2011/EOA", approvalDate: "01.09.2011", period: "2011-2012", pdf: mca015 },
    { slNo: "17", name: "MBA", intake: "120", approvalNo: "F.No: Southern/1-709001562/2012/EOA", approvalDate: "10.05.2012", period: "2012-2013", pdf: mca016 },
    { slNo: "18", name: "MBA", intake: "120", approvalNo: "F.No: Southern/1-1406862122/2013/EOA", approvalDate: "19.03.2013", period: "2013-2014", pdf: mca017 },
    { slNo: "19", name: "MBA", intake: "120", approvalNo: "F.No: Southern/1-2017025665/2014/EOA", approvalDate: "04.06.2014", period: "2014-2015", pdf: mca018 },
    { slNo: "20", name: "MBA", intake: "120", approvalNo: "F.No: Southern/1-2454242505/2015/EOA", approvalDate: "07.04.2015", period: "2015-2016", pdf: mca019 },
    { slNo: "21", name: "MBA", intake: "120", approvalNo: "F.No: Southern/1-2810903855/2016/EOA", approvalDate: "25.04.2016", period: "2016-2017", pdf: mca020 },
    { slNo: "22", name: "MBA", intake: "120", approvalNo: "F.No: Southern/1-3324836349/2017/EOA", approvalDate: "30.03.2017", period: "2017-2018", pdf: mca021 },
    { slNo: "23", name: "MBA", intake: "120", approvalNo: "F.No. Southern/1-3517173811/2018/EOA", approvalDate: "04.04.2018", period: "2018-2019", pdf: mca022 },
    { slNo: "24", name: "MBA", intake: "120", approvalNo: "F.No. Southern/1-4262183587/2019/EOA", approvalDate: "10.04.2019", period: "2019-2020", pdf: mca023 },
  ];
    

const AicteMba = () => {
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
        <h2 className="mca-title">AICTE Approvals for MBA</h2>
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

export default AicteMba;
