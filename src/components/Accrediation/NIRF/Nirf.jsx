import React,{useEffect,useState} from 'react';
import './Nirf.css';
import Navbar from '../../HomePage/navbar/Navbar';
import Footer from '../../HomePage/Footer/Footer';
import ScrollToTopButton from '../../ScrollToTopButton';
import Section from '../../HomePage/Section/Section';
import Spinner from '../../Spinner';

const Nirf = () => {
  const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const timer = setTimeout(() => setLoading(false), 1500);
      return () => clearTimeout(timer);
    }, []);
  
  
    return loading ? <Spinner /> : (
    <>
      <Section />
      <Navbar />
      <div className="nirf-container">
        <h2 className="nirf-heading">NIRF (National Institution Ranking Framework) 2024</h2>
        <p className="nirf-description">
          Kongu Engineering College ranked in the <strong>101–150 band</strong> in Engineering category in India Ranking 2024 under NIRF, MHRD, Govt. of India.
        </p>
      </div>
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default Nirf;
