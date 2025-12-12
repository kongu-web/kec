import React,{useState,useEffect} from 'react';
import './OfficeBearers.css';
import Section from '../../HomePage/Section/Section';
import Navbar from '../../HomePage/navbar/Navbar';
import Footer from '../../HomePage/Footer/Footer';
import ScrollToTopButton from '../../ScrollToTopButton';
import Kvit from '../../../assets/images/kvitbuilding.jpg'
import Spinner from '../../Spinner';
import '../../../App.css';

const OfficeBearers = () => {
  const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const timer = setTimeout(() => setLoading(false), 1500);
      return () => clearTimeout(timer);
    }, []);
  
  
    return loading ? <Spinner /> : (
    <>
      <Section />
      <Navbar />
      <div className="office-container">
      <div className="office-intro">
        <div className="office-text">
            <h2 className="page-title">KVITT Trust</h2>
            <p className="office-description">
            The Kongu Vellalar Institute of Technology Trust" (KVITT), came into being on account of the continuous and magnanimous efforts of a group of illustrious people from all walks of life during 1983. The origin of the term " K O N G U " dates back to putative race called " C H E R A " who ruled the south in those days. Thus, the word "Kongu Vellalar" refers to a community called Kongu Vellalar Gounders, mainly concentrated in and around Erode District. The Community "KONGU" as it is called, was pushed to the background, owing to the privatisation of facilities in the field of education, especially, Technical Education. Hence, this Trust was created by a group of philanthropists from Kongu Vellalar Gounders to promote technical education and cultural activities and to encourage literary and scientific knowledge.
            </p>
        </div>
        <div className="office-image">
            <img src={Kvit} alt="KVIT Building" />
        </div>
        </div>

        <h2 className="page-title">Management</h2>
        <div className="office-grid">
          {/* <div className="office-card"><strong>THIRU. P. C. PALANISAMY, B.Sc., B.L.</strong><br />PRESIDENT</div> */}
          <div className="office-card"><strong>Dr. M. MANICKAM, M.Sc., M.B.A.</strong><br />VICE PRESIDENT</div>
          <div className="office-card"><strong>THIRU. A. VENKATACHALAM, B.Sc.</strong><br />VICE PRESIDENT</div>
          <div className="office-card"><strong>THIRU. A. K. ILANGO, B.Com., M.B.A., LLB.</strong><br />VICE PRESIDENT</div>
          <div className="office-card"><strong>Dr. R. KUMARASWAMY, M.B.B.S.</strong><br />VICE PRESIDENT</div>
          <div className="office-card"><strong>THIRU. R. R. SATHIYAMURTHI, B.Arch., M.S.</strong><br />SECRETARY</div>
          <div className="office-card"><strong>THIRU. P. D. THANGAVEL, B.B.M.</strong><br />JOINT SECRETARY</div>
          <div className="office-card"><strong>THIRU. R. BALAKRISHNAN, D.M.E.</strong><br />JOINT SECRETARY</div>
          <div className="office-card"><strong>THIRU. E.R.KAARTHIKEYAN, M.A.</strong><br />TREASURER</div>
          <div className="office-card"><strong>THIRU. E. R. K. KRISHNAN, M.Com.</strong><br />CORRESPONDENT / KEC </div>
          <div className="office-card"><strong>THIRU. K. KARTHIKEYAN, B.Sc.,MOM(Aus).</strong><br />CORRESPONDENT / KPC, KPITI & KNYMCH</div>
          <div className="office-card"><strong>THIRU. P. SACHITHANANDAN</strong><br />CORRESPONDENT / KASC</div>
          <div className="office-card"><strong>Dr. K. SENGOTTUVELAN, M.B.B.S., D.C.H.</strong><br />CORRESPONDENT / KNMHSS</div>
          <div className="office-card"><strong>THIRU. A. K. C. THIYAGARAJAN</strong><br />LIFE MEMBER</div>
          
          {/* Patron and Life Members */}
          {[
            "THIRU. P. BALASUBRAMANIAM, M.L.",
            "THIRU. R. M. DEVARAJA",
            "THIRU. C. DEVARAJAN, B.E.",
            "THIRU. P. DHARANIDHARAN, B.B.A(Aus)",
            "TMT. HARITHA KUMARASAMY, B.E.",
            "THIRU. KAARTHIK M MURUGESAN, B.E., M.B.A.(UK)",
            "THIRU. C. KANAGASABAPATHY, B.A.",            
            // "THIRU. “VISHAL BHARATH” M. MURUGESAN",
            "THIRU. S. MUTHUSAMY, M.A.",
            "DR. G. I. NAMBI, M.S., M.Ch., F.I.C.S.",
            "THIRU. L. NARESH CHANDRAN, M.A.",
            "THIRU. K. PALANISAMY, B.E., M.B.A.,M.S.",
            "THIRU. S. PALANISWAMY RAJA, M.B.A.",
            "THIRU. M. RAJA",
            "THIRU. K. V. RAVISHANKAR, B.A.",
            "THIRU. L. SARAVANAN, B.A.",
            "THIRU. P. SATHIYAMOORTHY, B.E., M.B.A., M.S.",
            "THIRU. D. SHANMUGASUNDARAM, B.E., M.B.A.",
            "THIRU. SKM. SHREE SHIVKUMAR, B.E.",
            "THIRU. SIVAKUMAR MURUGESAN, B.Tech., M.B.A.",
            "THIRU. V. R. SIVASUBRAMANIAN, B.Com., B.L.",
            "THIRU. M. M. SUNDRESH, B.A., B.L.",
            "THIRU. V. K. SWAMINATHAN, B.Com.",
            "THIRU. D. VENKATESHWARAN, B.E., M.S. (U.S.A)"            
          ].map((name, index) => (
            <div className="office-card" key={index}><strong>{name}</strong><br />PATRON MEMBER</div>
          ))}
        </div>
      </div>
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default OfficeBearers;
