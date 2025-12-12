import React,{useState,useEffect} from 'react';
import './AboutKec.css';
import aboutImg from '../../../assets/images/aboutkec.jpg';
import Section from '../../HomePage/Section/Section';
import Navbar from '../../HomePage/navbar/Navbar';
import Footer from '../../HomePage/Footer/Footer';
import ScrollToTopButton from '../../ScrollToTopButton';

import Spinner from '../../Spinner';

const AboutKec = () => {
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const timer = setTimeout(() => setLoading(false), 1500);
      return () => clearTimeout(timer);
    }, []);
  
  
    return loading ? <Spinner /> : (
    <>
    <Section/>
    <Navbar/>
    <div className="aboutkec-container">
      
      <div className="aboutkec-content">
        <h2 className='page-title'>ABOUT KEC</h2>
        <img src={aboutImg} alt="About KEC" className="aboutkec-banner" />

        <p>
          Kongu Engineering College, one of the foremost multi professional research-led Institutions is internationally a recognized leader in professional and career-oriented education. It provides an integral, inter-disciplinary education - a unique intersection between theory and practice, passion and reason. The College offers courses of study that are on the frontiers of knowledge and it connects the spiritual and practical dimensions of intellectual life, in a stimulating environment that fosters rigorous scholarship and supportive community. This Institute is a great possession of the committed Trust called 'The Kongu Vellalar Institute of Technology Trust' in Erode District, Tamilnadu. The noble Trust has taken the institute to greater heights since its inception in 1983 and has established the college as a forum for imparting value based education for men and women.
        </p>
        <p>
          The word 'Kongu' refers to a region of the southern state of India and the term 'Kongu Vellalar' specially means the agricultural community, predominated in the west of Tamilnadu, which was deprived of educational facility in those days. To achieve technical excellence in their rural areas, 41 philanthropists from different walks of life who realized the need for technical education for their region's economic strides, formed collectively a Trust called 'The Kongu Vellalar Institute of Technology Trust' and they tried to promote and develop equality of opportunity for the rich and the poor.
        </p>
        <p>
          Affiliated to Anna University Chennai, the college has completed more than three decades of dedicated service to the people of India and abroad in the field of Technical Education. The Institution has an area of 167 acres of land richly endowed with beautiful greeneries. The college with its state-of-the-art infrastructural facilities and excellent academic records has earned recognition as one of the reputed educational institutions for men and women in India.
        </p>

        <p><strong>Tamilnadu Government:</strong> G.O. Ms. No. 1294 dated 29.9.1984</p>
        <p><strong>AICTE Approval:</strong> F.No.45-46/91-AICTE/586 dated 19.4.1993</p>
        <h3 className='page-sub_title'>Other Institutions of the KVIT Trust:</h3>
        <div className="sister-institutions-table-wrapper">
        <table className="sister-institutions-table">
            <thead>
            <tr>
                <th>Institution Name</th>
                <th>Visit</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Kongu Polytechnic College, Perundurai</td>
                <td>
                <a href="https://kongupolytechnic.ac.in/" target="_blank" rel="noopener noreferrer">
                    <button className="visit-button">Click Here</button>
                </a>
                </td>
            </tr>
            <tr>
                <td>Kongu Arts & Science College, Nanjanapuram, Erode</td>
                <td>
                <a href="https://kasc.ac.in/" target="_blank" rel="noopener noreferrer">
                    <button className="visit-button">Click Here</button>
                </a>
                </td>
            </tr>
            <tr>
                <td>Kongu School of Architecture, Perundurai</td>
                <td>
                <a href="https://www.ksakongu.edu.in/" target="_blank" rel="noopener noreferrer">
                    <button className="visit-button">Click Here</button>
                </a>
                </td>
            </tr>
            <tr>
                <td>Kongu Naturopathy and Yoga Medical College & Hospital, Perundurai</td>
                <td>
                <a href="https://www.kongunymc.ac.in/" target="_blank" rel="noopener noreferrer">
                    <button className="visit-button">Click Here</button>
                </a>
                </td>
            </tr>
            <tr>
                <td>Kongu Private Industrial Training Institute, Perundurai</td>
                <td>
                <a href="https://iti.kongu.edu/" target="_blank" rel="noopener noreferrer">
                    <button className="visit-button">Click Here</button>
                </a>
                </td>
            </tr>
            <tr>
                <td>Kongu National Matriculation School, Erode</td>
                <td>
                <a href="http://www.kongunational.com/" target="_blank" rel="noopener noreferrer">
                    <button className="visit-button">Click Here</button>
                </a>
                </td>
            </tr>
            </tbody>
        </table>
        </div>


      </div>
    </div>
    <Footer/>
    <ScrollToTopButton/>
    </>
  );
};

export default AboutKec;
