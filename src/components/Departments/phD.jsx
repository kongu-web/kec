import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import "./Ug.css";
import Footer from "../HomePage/Footer/Footer";
import Section from "../HomePage/Section/Section";
import ScrollToTopButton from "../ScrollToTopButton";
import Navbar from "../HomePage/navbar/Navbar";
import Spinner from "../Spinner";
import "../../App.css";

const phDProgrammes = [
  { sno: 1, name: "B.E Civil Engineering", duration: "4 Years", year: 1984, route: "civil" },
  { sno: 2, name: "B.E Mechanical Engineering", duration: "4 Years", year: 1984, route: "mech" },
  { sno: 3, name: "B.E Electronics and Communication Engineering", duration: "4 Years", year: 1984, route: "ece" },
  { sno: 4, name: "B.E Computer Science and Engineering", duration: "4 Years", year: 1988, route: "cse" },
  { sno: 5, name: "B.Tech Chemical Engineering", duration: "4 Years", year: 1994, route: "chem" },
  { sno: 6, name: "B.E Electrical and Electronics Engineering", duration: "4 Years", year: 1994, route: "eee" },
  { sno: 7, name: "B.E Electronics and Instrumentation Engineering", duration: "4 Years", year: 1998, route: "eie" },
  { sno: 8, name: "B.Tech Information Technology", duration: "4 Years", year: 1998, route: "it" },
  { sno: 9, name: "B.E Mechatronics Engineering", duration: "4 Years", year: 1999, route: "mts" },
  { sno: 10, name: "B.Tech Food Technology", duration: "4 Years", year: 2006, route: "foodtech" },
  { sno: 11, name: "Master of Business Administration (MBA)", duration: "2 Years", year: 1994,route: "mba" },
  { sno: 12, name: "Master of Computer Applications (MCA)", duration: "2 Years", year: 1993, route: "mca" },
  { sno: 13, name: "Mathematics", route: "maths"  },
  { sno: 14, name: "Physics", route: "physics" },
  { sno: 15, name: "Chemistry", route: "chemistry" },
  { sno: 16, name: "English", route: "english"}

];

const Phd = () => {
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
      <h2 className="page-title">Doctoral Programmes</h2>
      <div className="ugpage-table-wrapper">
        <table className="ugpage-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name of the Programme</th>
            </tr>
          </thead>
          <tbody>
            {phDProgrammes.map((prog) => (
              <tr key={prog.sno}>
                <td>{prog.sno}</td>
                <td>
                  <span
                    className="ugpage-link"
                    onClick={() => handleNavigate(prog.route)}
                  >
                    {prog.name}
                  </span>
                </td>
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

export default Phd;
