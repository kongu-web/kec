import React, { useState, useEffect, lazy, Suspense } from 'react';
import './index.css';
import { AuthProvider } from './context/AuthContext';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Global Components
import Spinner from './components/Spinner.jsx';
import Chatbot from './components/CollegeChatbot.jsx';
import ScrollToTopButton from './components/ScrollToTopButton.jsx';

// Lazy loaded components
const HomePage = lazy(() => import('./components/HomePage/HomePage'));

// Department
const Auto = lazy(() => import('./components/Departments/Auto/Auto.jsx'));
const Aids = lazy(() => import('./components/Departments/Aids/Aids.jsx'));
const Aiml = lazy(() => import('./components/Departments/Aiml/Aiml.jsx'));
const Chem = lazy(() => import('./components/Departments/Chemical/Chem.jsx'));
const Chemistry = lazy(() => import('./components/Departments/Chemistry/Chemistry.jsx'));
const Civil = lazy(() => import('./components/Departments/Civil/Civil.jsx'));
const Csd = lazy(() => import('./components/Departments/Csd/Csd.jsx'));
const Cse = lazy(() => import('./components/Departments/Cse/Cse.jsx'));
const Ctpg = lazy(() => import('./components/Departments/Ctpg/Ctpg.jsx'));
const Ctug = lazy(() => import('./components/Departments/Ctug/Ctug.jsx'));
const Ece = lazy(() => import('./components/Departments/Ece/Ece.jsx'));
const Eee = lazy(() => import('./components/Departments/Eee/Eee.jsx'));
const Eie = lazy(() => import('./components/Departments/Eie/Eie.jsx'));
const English = lazy(() => import('./components/Departments/English/English.jsx'));
const Foodtech = lazy(() => import('./components/Departments/Foodtech/Foodtech.jsx'));
const Architecture = lazy(() => import('./components/Departments/Architecture/Architecture.jsx'));
const It = lazy(() => import('./components/Departments/It/It.jsx'));
const Maths = lazy(() => import('./components/Departments/Maths/Maths.jsx'));
const Mba = lazy(() => import('./components/Departments/Mba/Mba.jsx'));
const Mca = lazy(() => import('./components/Departments/Mca/Mca.jsx'));
const Mech = lazy(() => import('./components/Departments/Mech/Mech.jsx'));
const Mts = lazy(() => import('./components/Departments/Mts/Mts.jsx'));
const Physics = lazy(() => import('./components/Departments/Physics/Physics.jsx'));

// AboutUs
const AboutKec = lazy(() => import('./components/AboutUs/AboutKec/AboutKec.jsx'));
const AcademicCouncil = lazy(() => import('./components/AboutUs/AcademicCouncil/AcademicCouncil.jsx'));
const CollegeRules = lazy(() => import('./components/AboutUs/CollegeRules/CollegeRules.jsx'));
const Endownments = lazy(() => import('./components/AboutUs/Endownments/Endownments.jsx'));
const GoverningCouncil = lazy(() => import('./components/AboutUs/GoverningCouncil/GoverningCouncil.jsx'));
const HeadoftheInstitution = lazy(() => import('./components/AboutUs/HeadoftheInstitution/HeadoftheInstitution.jsx'));
const UniversityRanks = lazy(() => import('./components/AboutUs/UniversityRanks/UniversityRanks.jsx'));
const Vision = lazy(() => import('./components/AboutUs/Vision/Vision.jsx'));
const OfficeBearers = lazy(() => import('./components/AboutUs/OfficeBearers/OfficeBearers.jsx'));

// Accrediation
const Autonomous = lazy(() => import('./components/Accrediation/Autonomous/Autonomous.jsx'));
const Nba = lazy(() => import('./components/Accrediation/NBA/Nba.jsx'));
const Naac = lazy(() => import('./components/Accrediation/NAAC/Naac.jsx'));
const Nirf = lazy(() => import('./components/Accrediation/NIRF/Nirf.jsx'));
const Aicteet = lazy(() => import('./components/Accrediation/AICTEE&T/Aicteet.jsx'));
const Aictemba = lazy(() => import('./components/Accrediation/AICTEMBA/Aictemba.jsx'));
const Aictemca = lazy(() => import('./components/Accrediation/AICTEMCA/Aictemca.jsx'));
const University = lazy(() => import('./components/Accrediation/University/University.jsx'));

const Admission = lazy(() => import('./components/Admission/AdmissionPage.jsx'));

// Other Pages
const Facilites = lazy(() => import('./components/ExtraPages/Facilites/Facilites.jsx'));
const Ug = lazy(() => import('./components/Departments/Ug.jsx'));
const Pg = lazy(() => import('./components/Departments/Pg.jsx'));
const Phd = lazy(() => import('./components/Departments/phD.jsx'));
const Physicaldept = lazy(() => import('./components/ExtraPages/Facilites/Physicaldept/Physicaldept.jsx'));
const Library = lazy(() => import('./components/ExtraPages/Facilites/Library/Library.jsx'));
const HostelsandAccomodations = lazy(() => import('./components/ExtraPages/Facilites/Hostel and Accomodations/HostelsandAccomodations.jsx'));
const Transport = lazy(() => import('./components/ExtraPages/Facilites/Transport/Transport.jsx'));
const Dispensary = lazy(() => import('./components/ExtraPages/Facilites/Dispensary/Dispensary.jsx'));
const AppliedScience = lazy(() => import('./components/Departments/AppliedScience.jsx'));
const Snh = lazy(() => import('./components/Departments/Snh.jsx'));
const PlacementSection = lazy(() => import('./components/ExtraPages/PlacementSection/PlacementSection.jsx'));
const Placement = lazy(() => import('./components/ExtraPages/PlacementSection/Placement.jsx'));

const OnlinePayment = lazy(() => import('./components/ExtraPages/OnlinePayment/OnlinePayment.jsx'));
const Contact = lazy(() => import('./components/ExtraPages/Contact/Contact.jsx'));
const NirfPage = lazy(() => import('./components/FooterContents/QuickLinks/NirfPage/NirfPage.jsx'));
const Ariia = lazy(() => import('./components/FooterContents/QuickLinks/Ariia/Ariia.jsx'));
const StrategicPlan = lazy(() => import('./components/FooterContents/QuickLinks/StrategicPlan/StrategicPlan.jsx'));
const StudentCentric = lazy(() => import('./components/FooterContents/QuickLinks/StudentCentric/StudentCentric.jsx'));
const PageUnderDevelopement = lazy(() => import('./components/PageUnderDevelopement.jsx'));
const KonguCRS = lazy(() => import('./components/FooterContents/QuickLinks/KonguCRS/KonguCRS.jsx'));
const WebAlbum = lazy(() => import('./components/FooterContents/WebAlbum/WebAlbum.jsx'));
const AuditReport = lazy(() => import('./components/FooterContents/QuickLinks/AuditReport/AuditReport.jsx'));
const BestPractices = lazy(() => import('./components/FooterContents/QuickLinks/BestPractices/BestPractices.jsx'));
const FitnessProtocol = lazy(() => import('./components/FooterContents/QuickLinks/FitnessProtocol/FitnessProtocol.jsx'));
const Nbadcs = lazy(() => import("./components/FooterContents/QuickLinks/NBADCS/nbadcs"));

const HelpDesk = lazy(() => import('./components/FooterContents/StudentsCorner/HelpDesk/HelpDesk.jsx'));
const AntiRaggingCell = lazy(() => import('./components/FooterContents/StudentsCorner/AntiraggingCell/AntiraggingCell.jsx'));
const AntiRaggingSquad = lazy(() => import('./components/FooterContents/StudentsCorner/AntiraggingSquad/AntiraggingSquad.jsx'));
const CodeofConduct = lazy(() => import('./components/FooterContents/StudentsCorner/CodeofConduct/CodeofConduct.jsx'));
const FinanceCommittee = lazy(() => import('./components/FooterContents/StudentsCorner/FinanceCommittee/FinanceCommittee.jsx'));
const GreenEnergyCommittee = lazy(() => import('./components/FooterContents/StudentsCorner/GreenEnergyCommittee/GreenEnergyCommittee.jsx'));
const GrievanceRedressalCommittee = lazy(() => import('./components/FooterContents/StudentsCorner/GrievanceRedressalCommittee/GrievanceRedressalCommittee.jsx'));
const GrievanceRedressalCommitteeSCST = lazy(() => import('./components/FooterContents/StudentsCorner/GrievanceRedressalCommitteeSCST/GrievanceRedressalCommitteeSCST.jsx'));
const IIC = lazy(() => import('./components/FooterContents/StudentsCorner/IIC/IIC.jsx'));
const InstituteIndustryCell = lazy(() => import('./components/FooterContents/StudentsCorner/InstituteIndustryCell/InstituteIndustryCell.jsx'));
const InternalCommiteeSexualPrevention = lazy(() => import('./components/FooterContents/StudentsCorner/InternalCommiteeSexualPrevention/InternalCommiteeSexualPrevention.jsx'));
const IQACAcademicCommittee = lazy(() => import('./components/FooterContents/StudentsCorner/IQACAcademicCommittee/IQACAcademicCommittee.jsx'));
const LibraryCommittee = lazy(() => import('./components/FooterContents/StudentsCorner/LibraryCommittee/LibraryCommittee.jsx'));
const MediaCell = lazy(() => import('./components/FooterContents/StudentsCorner/MediaCell/MediaCell.jsx'));
const ReseaerchIPRCommittee = lazy(() => import('./components/FooterContents/StudentsCorner/ResearchIPRCommittee/ResearchIPRCommittee.jsx'));
const StudentsCounsellingCell = lazy(() => import('./components/FooterContents/StudentsCorner/StudentsCounsellingCell/StudentsCounsellingCell.jsx'));
const UHVCell = lazy(() => import('./components/FooterContents/StudentsCorner/UHVCell/Uhvcell.jsx'));
const WomenHelpLine = lazy(() => import('./components/FooterContents/StudentsCorner/WomenHelpLine/WomenHelpLine.jsx'));
const Feedback = lazy(() => import('./components/FooterContents/StudentsCorner/Feedback/Feedback.jsx'));
const Recruitment = lazy(() => import('./components/FooterContents/QuickLinks/Recruitment/Recruitment.jsx'));

const HelpDeskCommittee = lazy(() => import('./components/FooterContents/StudentsCorner/HelpDeskCommittee/HelpDeskCommittee.jsx'));

// IQAC Module
const IqacHome = lazy(() => import('./components/IQAC/IqacHome/IqacHome.jsx'));
const IqacComposition = lazy(() => import('./components/IQAC/IqacComposition/IqacComposition.jsx'));
const IqacHierarchy = lazy(() => import('./components/IQAC/IqacHierarchy/IqacHierarchy.jsx'));
const IqacISO = lazy(() => import('./components/IQAC/IqacISO/IqacISO.jsx'));
const IqacAffiliation = lazy(() => import('./components/IQAC/IqacAffiliation/IqacAffiliation.jsx'));
const IqacMeetings = lazy(() => import('./components/IQAC/IqacMeetings/IqacMeetings.jsx'));
const IqacAudit = lazy(() => import('./components/IQAC/IqacAudit/IqacAudit.jsx'));
const IqacStrategicPlan = lazy(() => import('./components/IQAC/IqacStrategicPlan/IqacStrategicPlan.jsx'));
const IqacBestPractices = lazy(() => import('./components/IQAC/IqacBestPractices/IqacBestPractices.jsx'));
const IqacAnnualReport = lazy(() => import('./components/IQAC/IqacAnnualReport/IqacAnnualReport.jsx'));
const IqacCirculars = lazy(() => import('./components/IQAC/IqacCirculars/IqacCirculars.jsx'));
const IqacDownloads = lazy(() => import('./components/IQAC/IqacDownloads/IqacDownloads.jsx'));
const IqacGallery = lazy(() => import('./components/IQAC/IqacGallery/IqacGallery.jsx'));
const IqacNaac = lazy(() => import('./components/IQAC/IqacNaac/IqacNaac.jsx'));
const IqacNba = lazy(() => import('./components/IQAC/IqacNba/IqacNba.jsx'));
const IqacNirf = lazy(() => import('./components/IQAC/IqacNirf/IqacNirf.jsx'));

const Rankings = lazy(() => import('./components/ExtraPages/Rankings/Rankings.jsx'));
const Achievements = lazy(() => import('./components/ExtraPages/Achievements/Achievements.jsx'));
const Awards = lazy(() => import('./components/ExtraPages/Awards/Awards.jsx'));
const Updates = lazy(() => import('./components/ExtraPages/Updates/Updates.jsx'));
const NewsClippings = lazy(() => import('./components/ExtraPages/NewsClippings/NewsClippings.jsx'));
const Coe = lazy(() => import('./components/ExtraPages/COE/Coe.jsx'));
const Hackathon = lazy(() => import('./components/ExtraPages/Hackathons/Hackathon.jsx'));
const IEF = lazy(() => import('./components/ExtraPages/IEF/IEF.jsx'));

const CampusLife = lazy(() => import('./components/ExtraPages/CampusLifePage/CampusLife'));

const Webteam = lazy(() => import('./components/FooterContents/Webteam/Webteam.jsx'));
const EventDetails = lazy(() => import('./components/HomePage/EventsSection/EventDetails.jsx'));
const EventsPage = lazy(() => import('./components/HomePage/EventsSection/EventsPage.jsx'));
// import Admission from  './components/ExtraPages/Admission/Admission.jsx';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return loading ? (
    <Spinner />
  ) : (
    <AuthProvider>
      <Router>

        <Chatbot />
        <ScrollToTopButton />
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/event/:id" element={<EventDetails />} />
            <Route path="/events" element={<EventsPage />} />

            {/* Cards */}
            <Route path="/rankings" element={<Rankings />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/awards" element={<Awards />} />
            <Route path="/updates" element={<Updates />} />
            <Route path="/news-clippings" element={<NewsClippings />} />

            {/* Innovation Ecosystem */}
            <Route path="/coe" element={<Coe />} />
            <Route path="/hackathons" element={<Hackathon />} />

            {/* Departments */}
            <Route path="/auto" element={<Auto />} />
            <Route path="/aids" element={<Aids />} />
            <Route path="/aiml" element={<Aiml />} />
            <Route path="/chem" element={<Chem />} />
            <Route path="/civil" element={<Civil />} />
            <Route path="/csd" element={<Csd />} />
            <Route path="/cse" element={<Cse />} />
            <Route path="/ctug" element={<Ctug />} />
            <Route path="/ctpg" element={<Ctpg />} />
            <Route path="/ece" element={<Ece />} />
            <Route path="/eie" element={<Eie />} />
            <Route path="/eee" element={<Eee />} />
            <Route path="/foodtech" element={<Foodtech />} />
            <Route path="/it" element={<It />} />
            <Route path="/architecture" element={<Architecture />} />
            <Route path="/mba" element={<Mba />} />
            <Route path="/mca" element={<Mca />} />
            <Route path="/mech" element={<Mech />} />
            <Route path="/mts" element={<Mts />} />
            <Route path="/maths" element={<Maths />} />
            <Route path="/english" element={<English />} />
            <Route path="/physics" element={<Physics />} />
            <Route path="/chemistry" element={<Chemistry />} />

            {/* AboutKec */}
            <Route path="/aboutkec" element={<AboutKec />} />
            <Route path="/vision" element={<Vision />} />
            <Route path="/officebearers" element={<OfficeBearers />} />
            <Route
              path="/headoftheinstitution"
              element={<HeadoftheInstitution />}
            />
            <Route path="/governingcouncil" element={<GoverningCouncil />} />
            <Route path="/academiccouncil" element={<AcademicCouncil />} />
            <Route path="/universityranks" element={<UniversityRanks />} />
            <Route path="/endownments" element={<Endownments />} />
            <Route path="/collegerules" element={<CollegeRules />} />

            {/* Accrediation */}
            <Route path="/autonomous" element={<Autonomous />} />
            <Route path="/university" element={<University />} />
            <Route path="/nba" element={<Nba />} />
            <Route path="/naac" element={<Naac />} />
            <Route path="/nirf" element={<Nirf />} />
            <Route path="/aicteet" element={<Aicteet />} />
            <Route path="/aictemca" element={<Aictemca />} />
            <Route path="/aictemba" element={<Aictemba />} />

            {/* Extra Pages */}
            <Route path="/campus-life" element={<CampusLife />} />
            <Route path="/facilities" element={<Facilites />} />
            <Route path="/ief" element={<IEF />} />
            <Route path="/ug" element={<Ug />} />
            <Route path="/pg" element={<Pg />} />
            <Route path="/doctoral" element={<Phd />} />

            <Route path="/appliedscience" element={<AppliedScience />} />
            <Route path="/snh" element={<Snh />} />
            <Route path="/placement-details" element={<PlacementSection />} />
            <Route path="/placement" element={<Placement />} />

            <Route path="/onlinepayment" element={<OnlinePayment />} />
            <Route path="/contact" element={<Contact />} />

            {/* Facilites */}
            <Route path="/facilities/physicaldept" element={<Physicaldept />} />
            <Route path="/facilities/library" element={<Library />} />
            <Route
              path="/facilities/hostelsandaccomodation"
              element={<HostelsandAccomodations />}
            />
            <Route path="/facilities/transport" element={<Transport />} />
            <Route path="/facilities/dispensary" element={<Dispensary />} />

            {/* Footer - QuickLinks */}
            <Route path="/nirfpage" element={<NirfPage />} />
            <Route path="/ariia" element={<Ariia />} />
            <Route path="/strategicplan" element={<StrategicPlan />} />
            <Route
              path="/student-centric-activities"
              element={<StudentCentric />}
            />
            <Route path="/kongucrs" element={<KonguCRS />} />
            <Route path="/webalbum" element={<WebAlbum />} />
            <Route path="/audit-report" element={<AuditReport />} />
            <Route path="/best-practices" element={<BestPractices />} />
            <Route path="/fitness-protocols" element={<FitnessProtocol />} />
            <Route path="/Nbadcs" element={<Nbadcs />} />

            {/* Footer - Students Corner */}
            <Route path="/help-desk" element={<HelpDesk />} />
            <Route path="/antiragging-cell" element={<AntiRaggingCell />} />
            <Route path="/antiragging-squad" element={<AntiRaggingSquad />} />
            <Route path="/ethics-committee" element={<CodeofConduct />} />
            <Route path="/industry-cell" element={<InstituteIndustryCell />} />

            <Route path="/finance-committee" element={<FinanceCommittee />} />
            <Route
              path="/grievance-committee"
              element={<GrievanceRedressalCommittee />}
            />
            <Route
              path="/scst-grievance-committee"
              element={<GrievanceRedressalCommitteeSCST />}
            />
            <Route
              path="/internal-complaint-committee"
              element={<InternalCommiteeSexualPrevention />}
            />
            <Route path="/helpdeskcommittee" element={<HelpDeskCommittee />} />
            <Route path="/iqac-audit" element={<IQACAcademicCommittee />} />
            <Route path="/research-ipr" element={<ReseaerchIPRCommittee />} />
            <Route path="/green-energy-audit" element={<GreenEnergyCommittee />} />
            <Route path="/media-cell" element={<MediaCell />} />
            <Route path="/iic" element={<IIC />} />
            <Route path="/library-committee" element={<LibraryCommittee />} />
            <Route path="/counselling-cell" element={<StudentsCounsellingCell />} />
            <Route path="/Uhvcell" element={<UHVCell />} />
            <Route path="/women-helpline" element={<WomenHelpLine />} />
            <Route path="/feedback" element={<Feedback />} />

            <Route path="/recruitment" element={<Recruitment />} />
            <Route path="/kecwebteam" element={<Webteam />} />

            {/* IQAC Routes */}
            <Route path="/iqac" element={<IqacHome />} />
            <Route path="/iqac/composition" element={<IqacComposition />} />
            <Route path="/iqac/hierarchy" element={<IqacHierarchy />} />
            <Route path="/iqac/iso" element={<IqacISO />} />
            <Route path="/iqac/affiliation" element={<IqacAffiliation />} />
            <Route path="/iqac/meetings" element={<IqacMeetings />} />
            <Route path="/iqac/audit" element={<IqacAudit />} />
            <Route path="/iqac/strategic-plan" element={<IqacStrategicPlan />} />
            <Route path="/iqac/best-practices" element={<IqacBestPractices />} />
            <Route path="/iqac/annual-report" element={<IqacAnnualReport />} />
            <Route path="/iqac/circulars" element={<IqacCirculars />} />
            <Route path="/iqac/downloads" element={<IqacDownloads />} />
            <Route path="/iqac/gallery" element={<IqacGallery />} />
            <Route path="/iqac/naac" element={<IqacNaac />} />
            <Route path="/iqac/nba" element={<IqacNba />} />
            <Route path="/iqac/nirf" element={<IqacNirf />} />
            {/* <Route path='/Admission' element={<Admission />}/> */}

            {/* Page Under Developement */}
            <Route path="/PUD" element={<PageUnderDevelopement />} />

            <Route path="/admission" element={<Admission />} />
          </Routes>
        </Suspense>
      </Router>
    </AuthProvider>
  );
};

export default App;
