import React,{useEffect,useState} from 'react';
import './Endownments.css';
import Section from '../../HomePage/Section/Section';
import Navbar from '../../HomePage/navbar/Navbar';
import Footer from '../../HomePage/Footer/Footer';
import ScrollToTopButton from '../../ScrollToTopButton';
import Spinner from '../../Spinner';
import '../../../App.css';

const studentAwards = [
  ['CEEDEE\'s Award', 'Venbro Polymers', 'Best Overall Outgoing Student BE (Boy)'],
  ['T.M. Periyathambi Gounder Award', 'KVITT', 'Best Overall Outgoing Student BE (Girl)'],
  ['R. Pongianna Gounder Award', 'R. Pongianna Gounder', 'Best Student CSE'],
  ['P.C. Palanisamy Award', 'P.C. Palanisamy, Patron Member, KVITT', 'Best Student MBA'],
  ['Vishal Bharath M. Murugesan Award', 'Vishal Bharath M. Murugesan, Patron Member, KVITT', 'Best Student MCA'],
  ['C.R. Nallasamy Gounder Award', 'KVITT', 'Best Overall Student in BSc Programme'],
  ['Masimalai Rangasamy Gounder Award', 'V.R. Sivasubramamian, Patron Member, KVITT', 'Differently Abled Student'],
  ['E.R. Rangasamy Gounder Award', 'E.R. Kaarthikeyan, Patron Member, KVITT', 'Differently Abled Student'],
  ['Dr. K.Kaliannan Memorial Award', 'Dr. K.Senkottuvelan, Patron Member, KVITT', 'Differently Abled Student'],
  ['Dr. A.M. Natarajan Award', 'A.M. Natarajan, Former Principal/KEC', 'Scholarship for Physically Challenged'],
  ['Jeya Visvesvaran Award', 'V. Hariharan, Engineering Consultant, Chennai', 'Best BE Final Year Project Civil'],
  ['Dr. H. Visvesvaran Award', 'V. Hariharan, Engineering Consultant, Chennai', 'Best BE Final year Project in Mechatronics'],
  ['Chancellor Viswanathan Gold Medal Award', 'G.Viswanathan, Chancellor, VIT University', 'Best Outgoing Student'],
  ['Late Dr. G.M. Shanmugam D.Ortho Award', 'Dr.Shanmugam', 'Best Overall Student in Extra-Curricular Activities'],
  ['NSIT M. Murugesan Award', 'Dr. M. Murugesan, Former Patron Member, KVITT', 'Best Co-ordinated Placement Team'],
  ['Dr. A.M. Natarajan Award', 'A.M. Natarajan, Former Principal-KEC', 'Best Overall Sports Person (Boy and Girl)'],
  ['Late V.K. Muthusamy Special Award', 'Late V.K. Muthusamy, Patron Member, KVITT', 'Best Creative Writing in English and Tamil']
];

const facultyAwards = [
  ['U.R. Chinnusamy Gounder Award', 'U.R. Chinnusamy Gounder', 'Best Faculty in Civil'],
  ['SKM. Maeilanandhan Award', 'SKM. Maeilanandhan, Patron Member, KVITT', 'Best Faculty in Mechanical'],
  ['V.S. Kittusamy Award', 'KVITT', 'Best Faculty in Mechatronics'],
  ['M.N. Palanisamy Gounder Award', 'P. Shanmugam', 'Best Faculty in EEE'],
  ['M.N. Palanisamy Gounder Award', 'P. Shanmugam', 'Best Faculty in EIE'],
  ['V.S. Kittusamy Award', 'KVITT', 'Best Faculty in ECE'],
  ['Dr. M. Shanmuga Vadivu Award', 'Dr. M. Shanmuga Vadivu', 'Best Faculty in CSE'],
  ['V.S. Kittusamy Award', 'KVITT', 'Best Faculty in IT'],
  ['T.C. Palanisamy Award', 'KVITT', 'Best Faculty in Chemical'],
  ['T.C. Palanisamy Award', 'KVITT', 'Best Faculty in Food Technology'],
  ['T.C. Palanisamy Award', 'KVITT', 'Best Faculty in S&H'],
  ['V.S. Kittusamy Award', 'KVITT', 'Best Faculty in MBA'],
  ['KEC Old Students and KVB Award', 'KEC Old Students A/c , Karur Vysya Bank', 'Best Faculty in MCA'],
  ['Dr. A.M. Natarajan Award', 'A.M. Natarajan, Former Principal-KEC', 'Best Researcher Award'],
  ['T.C. Palanisamy Award', 'KVITT', 'Best Faculty in CT - UG'],
  ['T.C. Palanisamy Award', 'KVITT', 'Best Faculty in CT - PG']
];

const Endowments = () => {
  const [loading, setLoading] = useState(true);
    
      useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1500);
        return () => clearTimeout(timer);
      }, []);
    
    
      return loading ? <Spinner /> : (
    <>
      <Section />
      <Navbar />
      <div className="endowments-container">
        <h1 className="page-title">Endowments</h1>

        <h2 className="sub-heading">For Students</h2>
        <table className="endowments-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name of the Award</th>
              <th>Instituted by</th>
              <th>Granted for</th>
            </tr>
          </thead>
          <tbody>
            {studentAwards.map((row, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{row[0]}</td>
                <td>{row[1]}</td>
                <td>{row[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2 className="sub-heading">For Faculty</h2>
        <table className="endowments-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name of the Award</th>
              <th>Instituted by</th>
              <th>Granted for</th>
            </tr>
          </thead>
          <tbody>
            {facultyAwards.map((row, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{row[0]}</td>
                <td>{row[1]}</td>
                <td>{row[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default Endowments;
