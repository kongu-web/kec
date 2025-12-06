import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import "./Pg.css";
import Section from "../HomePage/Section/Section";
import Navbar from "../HomePage/navbar/Navbar";
import Footer from "../HomePage/Footer/Footer";
import ScrollToTopButton from "../ScrollToTopButton";
import Spinner from "../Spinner";

const pgPrograms = [
  { sno: 1, name: "M.E Computer Science and Engineering", duration: "2 Years", year: 1999, route: "cse"  },
  { sno: 2, name: "M.E. VLSI Design", duration: "2 Years", year: 2003,route: "ece" },
  { sno: 3, name: "M.E Structural Engineering", duration: "2 Years", year: 2012,route: "civil" },
  { sno: 4, name: "M.Tech Food Technology", duration: "2 Years", year: 2013 ,route: "foodtech"},
  { sno: 5, name: "Master of Business Administration (MBA)", duration: "2 Years", year: 1994,route: "mba" },
  { sno: 6, name: "Master of Computer Applications (MCA)", duration: "2 Years", year: 1993, route: "mca" },
];

const Pg = () => {
    const navigate = useNavigate();

    const handleNavigate = (route) => {
      navigate(`/${route}`);
    };
  
    const [loading, setLoading] = useState(true);
    
      useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1500);
        return () => clearTimeout(timer);
      }, []);
    
      return loading ? <Spinner /> :  (
      <>
      <Section/>
      <Navbar/>
      <div className="ug-container">
        <h2 className="ug-title">Postgraduate Programmes</h2>
        <div className="ug-table-wrapper">
          <table className="ug-table">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Name of the Programme</th>
                <th>Duration</th>
                <th>Year of Starting</th>
              </tr>
            </thead>
            <tbody>
              {pgPrograms.map((prog) => (
                <tr key={prog.sno}>
                  <td>{prog.sno}</td>
                  <td>
                    <span
                      className="ug-link"
                      onClick={() => handleNavigate(prog.route)}
                    >
                      {prog.name}
                    </span>
                  </td>
                  <td>{prog.duration}</td>
                  <td>{prog.year}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer/>
      <ScrollToTopButton/>
      </>
    );
  };
  export default Pg;
