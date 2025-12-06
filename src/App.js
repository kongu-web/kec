import React,{useState,useEffect} from 'react';
import './index.css';

import HomePage from './components/HomePage/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Department
import Auto from './components/Departments/Auto/Auto.jsx';
import Aids from './components/Departments/Aids/Aids.jsx';
import Aiml from './components/Departments/Aiml/Aiml.jsx';
import Chem from './components/Departments/Chemical/Chem.jsx';
import Chemistry from './components/Departments/Chemistry/Chemistry.jsx';
import Civil from './components/Departments/Civil/Civil.jsx'; 
import Csd from './components/Departments/Csd/Csd.jsx';
import Cse from './components/Departments/Cse/Cse.jsx';
import Ctpg from './components/Departments/Ctpg/Ctpg.jsx';
import Ctug from './components/Departments/Ctug/Ctug.jsx';
import Ece from './components/Departments/Ece/Ece.jsx';
import Eee from './components/Departments/Eee/Eee.jsx';
import Eie from './components/Departments/Eie/Eie.jsx';
import English from './components/Departments/English/English.jsx';
import Foodtech from './components/Departments/Foodtech/Foodtech.jsx';
import Architecture from './components/Departments/Architecture/Architecture.jsx';
import It from './components/Departments/It/It.jsx';
import Maths from './components/Departments/Maths/Maths.jsx';
import Mba from './components/Departments/Mba/Mba.jsx';
import Mca from './components/Departments/Mca/Mca.jsx';
import Mech from './components/Departments/Mech/Mech.jsx';
import Mts from './components/Departments/Mts/Mts.jsx';
import Physics from './components/Departments/Physics/Physics.jsx';

// AboutUs
import AboutKec from './components/AboutUs/AboutKec/AboutKec.jsx';
import AcademicCouncil from './components/AboutUs/AcademicCouncil/AcademicCouncil.jsx';
import CollegeRules from './components/AboutUs/CollegeRules/CollegeRules.jsx';
import Endownments from './components/AboutUs/Endownments/Endownments.jsx';
import GoverningCouncil from './components/AboutUs/GoverningCouncil/GoverningCouncil.jsx';
import HeadoftheInstitution from './components/AboutUs/HeadoftheInstitution/HeadoftheInstitution.jsx';
import UniversityRanks from './components/AboutUs/UniversityRanks/UniversityRanks.jsx';
import Vision from './components/AboutUs/Vision/Vision.jsx';
import OfficeBearers from './components/AboutUs/OfficeBearers/OfficeBearers.jsx';

// Accrediation
import Autonomous from './components/Accrediation/Autonomous/Autonomous.jsx';
import Nba from './components/Accrediation/NBA/Nba.jsx';
import Naac from './components/Accrediation/NAAC/Naac.jsx';
import Nirf from './components/Accrediation/NIRF/Nirf.jsx';
import Aicteet from './components/Accrediation/AICTEE&T/Aicteet.jsx';
import Aictemba from './components/Accrediation/AICTEMBA/Aictemba.jsx';
import Aictemca from './components/Accrediation/AICTEMCA/Aictemca.jsx';
import University from './components/Accrediation/University/University.jsx';

// Other Pages
import Facilites from './components/ExtraPages/Facilites/Facilites.jsx';
import Ug from './components/Departments/Ug.jsx';
import Pg from './components/Departments/Pg.jsx';
import Phd from './components/Departments/phD.jsx';
import Physicaldept from './components/ExtraPages/Facilites/Physicaldept/Physicaldept.jsx';
import Library from './components/ExtraPages/Facilites/Library/Library.jsx';
import HostelsandAccomodations from './components/ExtraPages/Facilites/Hostel and Accomodations/HostelsandAccomodations.jsx';
import Transport from './components/ExtraPages/Facilites/Transport/Transport.jsx';
import Dispensary from './components/ExtraPages/Facilites/Dispensary/Dispensary.jsx';
import AppliedScience from './components/Departments/AppliedScience.jsx';
import Snh from './components/Departments/Snh.jsx';
import PlacementSection from './components/ExtraPages/PlacementSection/PlacementSection.jsx';
import OnlinePayment from './components/ExtraPages/OnlinePayment/OnlinePayment.jsx';
import Contact from './components/ExtraPages/Contact/Contact.jsx';
import NirfPage from './components/FooterContents/QuickLinks/NirfPage/NirfPage.jsx';
import Ariia from './components/FooterContents/QuickLinks/Ariia/Ariia.jsx';
import StrategicPlan from './components/FooterContents/QuickLinks/StrategicPlan/StrategicPlan.jsx';
import StudentCentric from './components/FooterContents/QuickLinks/StudentCentric/StudentCentric.jsx';
import PageUnderDevelopement from './components/PageUnderDevelopement.jsx';
import KonguCRS from './components/FooterContents/QuickLinks/KonguCRS/KonguCRS.jsx';
import WebAlbum from './components/FooterContents/WebAlbum/WebAlbum.jsx';
import AuditReport from './components/FooterContents/QuickLinks/AuditReport/AuditReport.jsx';
import BestPractices from './components/FooterContents/QuickLinks/BestPractices/BestPractices.jsx';
import FitnessProtocol from './components/FooterContents/QuickLinks/FitnessProtocol/FitnessProtocol.jsx';

import HelpDesk from './components/FooterContents/StudentsCorner/HelpDesk/HelpDesk.jsx';
import AntiRaggingCell from './components/FooterContents/StudentsCorner/AntiraggingCell/AntiraggingCell.jsx';
import AntiRaggingSquad from './components/FooterContents/StudentsCorner/AntiraggingSquad/AntiraggingSquad.jsx';
import CodeofConduct from './components/FooterContents/StudentsCorner/CodeofConduct/CodeofConduct.jsx';
import FinanceCommittee from './components/FooterContents/StudentsCorner/FinanceCommittee/FinanceCommittee.jsx';
import GreenEnergyCommittee from './components/FooterContents/StudentsCorner/GreenEnergyCommittee/GreenEnergyCommittee.jsx';
import GrievanceRedressalCommittee from './components/FooterContents/StudentsCorner/GrievanceRedressalCommittee/GrievanceRedressalCommittee.jsx';
import GrievanceRedressalCommitteeSCST from './components/FooterContents/StudentsCorner/GrievanceRedressalCommitteeSCST/GrievanceRedressalCommitteeSCST.jsx';
import IIC from './components/FooterContents/StudentsCorner/IIC/IIC.jsx';
import InstituteIndustryCell from './components/FooterContents/StudentsCorner/InstituteIndustryCell/InstituteIndustryCell.jsx';
import InternalCommiteeSexualPrevention from './components/FooterContents/StudentsCorner/InternalCommiteeSexualPrevention/InternalCommiteeSexualPrevention.jsx';
import IQACAcademicCommittee from './components/FooterContents/StudentsCorner/IQACAcademicCommittee/IQACAcademicCommittee.jsx';
import LibraryCommittee from './components/FooterContents/StudentsCorner/LibraryCommittee/LibraryCommittee.jsx';
import MediaCell from './components/FooterContents/StudentsCorner/MediaCell/MediaCell.jsx';
import ReseaerchIPRCommittee from './components/FooterContents/StudentsCorner/ResearchIPRCommittee/ResearchIPRCommittee.jsx';
import StudentsCounsellingCell from './components/FooterContents/StudentsCorner/StudentsCounsellingCell/StudentsCounsellingCell.jsx';
import UHVCell  from './components/FooterContents/StudentsCorner/UHVCell/Uhvcell.jsx';
import WomenHelpLine from './components/FooterContents/StudentsCorner/WomenHelpLine/WomenHelpLine.jsx';
import Feedback from './components/FooterContents/StudentsCorner/Feedback/Feedback.jsx';
import Recruitment from './components/FooterContents/QuickLinks/Recruitment/Recruitment.jsx';
// import IQAC from './components/FooterContents/QuickLinks/IQAC/IQAC.jsx';

import HelpDeskCommittee from './components/FooterContents/StudentsCorner/HelpDeskCommittee/HelpDeskCommittee.jsx';

import Spinner from './components/Spinner.jsx';
import Rankings from './components/ExtraPages/Rankings/Rankings.jsx';
import Achievements from './components/ExtraPages/Achievements/Achievements.jsx';
import Awards from './components/ExtraPages/Awards/Awards.jsx';
import Updates from './components/ExtraPages/Updates/Updates.jsx';
import NewsClippings from './components/ExtraPages/NewsClippings/NewsClippings.jsx';
import Coe from './components/ExtraPages/COE/Coe.jsx';
import Hackathon from './components/ExtraPages/Hackathons/Hackathon.jsx';
import IEF from './components/ExtraPages/IEF/IEF.jsx';

import ScrollToTop from './components/ScrollToTop.jsx';

import Webteam from './components/FooterContents/Webteam/Webteam.jsx';
// import Admission from  './components/ExtraPages/Admission/Admission.jsx';

const App = () => {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return loading ? <Spinner /> :  (
    <Router>
      <ScrollToTop />

      <Routes>

        <Route path="/" element={<HomePage />} />

        {/* Cards */}
        <Route path='/rankings' element={<Rankings />}/>
        <Route path='/achievements' element={<Achievements />}/>
        <Route path='/awards' element={<Awards />}/>
        <Route path='/updates' element={<Updates />}/>
        <Route path='/news-clippings' element={<NewsClippings />}/>

        {/* Innovation Ecosystem */}
        <Route path='/coe' element={<Coe />}/>
        <Route path='/hackathons' element={<Hackathon />}/>



        {/* Departments */}
        <Route path='/auto' element={<Auto />}/>
        <Route path='/aids' element={<Aids />}/>
        <Route path='/aiml' element={<Aiml />}/>
        <Route path='/chem' element={<Chem />}/>
        <Route path='/civil' element={<Civil />}/>
        <Route path='/csd' element={<Csd />}/>
        <Route path='/cse' element={<Cse />}/>
        <Route path='/ctug' element={<Ctug />}/>
        <Route path='/ctpg' element={<Ctpg />}/>
        <Route path='/ece' element={<Ece />}/>
        <Route path='/eie' element={<Eie />}/>
        <Route path='/eee' element={<Eee />}/>
        <Route path='/foodtech' element={<Foodtech />}/>
        <Route path='/it' element={<It />}/>
         <Route path='/architecture' element={<Architecture />}/>
        <Route path='/mba' element={<Mba />}/>
        <Route path='/mca' element={<Mca />}/>
        <Route path='/mech' element={<Mech />}/>
        <Route path='/mts' element={<Mts />}/>
        <Route path='/maths' element={<Maths />}/>
        <Route path='/english' element={<English />}/>
        <Route path='/physics' element={<Physics />}/>
        <Route path='/chemistry' element={<Chemistry />}/>


        {/* AboutKec */}
        <Route path='/aboutkec' element={<AboutKec />}/>
        <Route path='/vision' element={<Vision />}/>
        <Route path='/officebearers' element={<OfficeBearers />}/>
        <Route path='/headoftheinstitution' element={<HeadoftheInstitution />}/>
        <Route path='/governingcouncil' element={<GoverningCouncil />}/>
        <Route path='/academiccouncil' element={<AcademicCouncil />}/>
        <Route path='/universityranks' element={<UniversityRanks />}/>
        <Route path='/endownments' element={<Endownments />}/>
        <Route path='/collegerules' element={<CollegeRules />}/>

        {/* Accrediation */}
        <Route path='/autonomous' element={<Autonomous />}/>
        <Route path='/university' element={<University/>}/>
        <Route path='/nba' element={<Nba />}/>
        <Route path='/naac' element={<Naac />}/>
        <Route path='/nirf' element={<Nirf />}/>
        <Route path='/aicteet' element={<Aicteet />}/>
        <Route path='/aictemca' element={<Aictemca />}/>
        <Route path='/aictemba' element={<Aictemba />}/>

        {/* Extra Pages */}
        <Route path='/facilities' element={<Facilites />}/>
        <Route path='/ief' element={<IEF />}/>
        <Route path='/ug' element={<Ug />}/>
        <Route path='/pg' element={<Pg />}/>
        <Route path='/doctoral' element={<Phd />}/>

        <Route path='/appliedscience' element={<AppliedScience/>}/>
        <Route path='/snh' element={<Snh/>}/>
        <Route path='/placement' element={<PlacementSection />}/>
        <Route path='/onlinepayment' element={<OnlinePayment/>}/>
        <Route path='/contact' element={<Contact/>}/>

        {/* Facilites */}
        <Route path='/facilities/physicaldept' element={<Physicaldept/>}/>
        <Route path='/facilities/library' element={<Library/>}/>
        <Route path='/facilities/hostelsandaccomodation' element={<HostelsandAccomodations/>}/>
        <Route path='/facilities/transport' element={<Transport/>}/>
        <Route path='/facilities/dispensary' element={<Dispensary/>}/>
        

        {/* Footer - QuickLinks */}
        <Route path='/nirfpage' element={<NirfPage/>}/>
        <Route path='/ariia' element={<Ariia/>}/>
        <Route path='/strategicplan' element={<StrategicPlan/>}/>
        <Route path='/student-centric-activities' element={<StudentCentric/>}/>
        <Route path='/kongucrs' element={<KonguCRS/>}/>
        <Route path='/webalbum' element={<WebAlbum/>}/>
        <Route path='/audit-report' element={<AuditReport/>}/>
        <Route path='/best-practices' element={<BestPractices/>}/>
        <Route path='/fitness-protocols' element={<FitnessProtocol/>}/>

        {/* Footer - Students Corner */}
        <Route path='/help-desk' element={<HelpDesk />}/>
        <Route path='/antiragging-cell' element={<AntiRaggingCell />}/>
        <Route path='/antiragging-squad' element={<AntiRaggingSquad />}/>
        <Route path='/ethics-committee' element={<CodeofConduct />}/>
        <Route path='/industry-cell' element={<InstituteIndustryCell />}/>

        <Route path='/finance-committee' element={<FinanceCommittee />}/>
        <Route path='/grievance-committee' element={<GrievanceRedressalCommittee />}/>
        <Route path='/scst-grievance-committee' element={<GrievanceRedressalCommitteeSCST />}/>
        <Route path='/internal-complaint-committee' element={<InternalCommiteeSexualPrevention />}/>
        <Route path='/helpdeskcommittee' element={<HelpDeskCommittee />}/>
        <Route path='/iqac-audit' element={<IQACAcademicCommittee />}/>
        <Route path='/research-ipr' element={<ReseaerchIPRCommittee />}/>
        <Route path='/green-energy-audit' element={<GreenEnergyCommittee />}/>
        <Route path='/media-cell' element={<MediaCell />}/>
        <Route path='/iic' element={<IIC />}/>
        <Route path='/library-committee' element={<LibraryCommittee />}/>
        <Route path='/counselling-cell' element={<StudentsCounsellingCell />}/>
        <Route path='/Uhvcell' element={<UHVCell />}/>
        <Route path='/women-helpline' element={<WomenHelpLine />}/>
        <Route path='/feedback' element={<Feedback />}/>

        <Route path='/recruitment' element={<Recruitment />}/>
      

        <Route path='/kecwebteam' element={<Webteam />}/>
        {/* <Route path='/Admission' element={<Admission />}/> */}
     

        {/* Page Under Developement */}
        <Route path='/PUD' element={<PageUnderDevelopement/>}/>



      </Routes>
    </Router>
  );
};

export default App;
