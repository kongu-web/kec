import React,{useState,useEffect} from 'react';
import './UniversityRanks.css';
import Section from '../../HomePage/Section/Section';
import Navbar from '../../HomePage/navbar/Navbar';
import Footer from '../../HomePage/Footer/Footer';
import ScrollToTopButton from '../../ScrollToTopButton';
import Spinner from '../../Spinner';

const rankData = [
  { year: '2000-2001', university: 'Bharathiar University', total: 98, obtained: 35, gold: 4 },
  { year: '2001-2002', university: 'Bharathiar University', total: 132, obtained: 48, gold: 8 },
  { year: '2002-2003', university: 'Bharathiar University', total: 160, obtained: 52, gold: 11 },
  { year: '2003-2004', university: 'Bharathiar University', total: 132, obtained: 55, gold: 10 },
  { year: '2003-2004', university: 'Anna University, Chennai', total: 73, obtained: 19, gold: 1 },
  { year: '2004-2005', university: 'Bharathiar University', total: 10, obtained: 1, gold: '-' },
  { year: '2004-2005', university: 'Anna University, Chennai', total: 300, obtained: 44, gold: 7 },
  { year: '2005-2006', university: 'Anna University, Chennai', total: 556, obtained: 46, gold: 5 },
  { year: '2006-2007', university: 'Anna University, Chennai', total: 574, obtained: 62, gold: 8 },
  { year: '2007-2008', university: 'Anna University, Chennai', total: 579, obtained: 75, gold: 6 },
  { year: '2008-2009', university: 'Anna University, Chennai', total: 454, obtained: 65, gold: 3 },
  { year: '2009-2010', university: 'Anna University, Chennai', total: 380, obtained: 46, gold: 4 },
  { year: '2011 (MSc SE 5 Yrs)', university: 'Anna University, Chennai', total: 20, obtained: 2, gold: '-' },
];

const UniversityRanks = () => {
  const [loading, setLoading] = useState(true);
    
      useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1500);
        return () => clearTimeout(timer);
      }, []);
    
    
      return loading ? <Spinner /> : (
    <>
      <Section />
      <Navbar />
      <div className="ranks-container">
        <h1 className="ranks-title">University Ranks</h1>
        <p className="ranks-subtitle">
          The rank holders have placed the college successfully at the top position in University Examinations in different disciplines as follows.
        </p>
        <div className="ranks-table-wrapper">
          <table className="ranks-table">
            <thead>
              <tr>
                <th>Year</th>
                <th>University</th>
                <th>Total Ranks (University)</th>
                <th>Ranks by KEC</th>
                <th>Gold Medals</th>
              </tr>
            </thead>
            <tbody>
              {rankData.map((row, index) => (
                <tr key={index}>
                  <td>{row.year}</td>
                  <td>{row.university}</td>
                  <td>{row.total}</td>
                  <td>{row.obtained}</td>
                  <td>{row.gold}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h3>        From 2010-2011 onwards Autonomous        </h3>

      </div>
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default UniversityRanks;
