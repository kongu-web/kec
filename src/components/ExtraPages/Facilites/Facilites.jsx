import React,{useState,useEffect} from 'react';
import './Facilities.css';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../HomePage/navbar/Navbar';
import Section from '../../HomePage/Section/Section';
import Footer from '../../HomePage/Footer/Footer';
import ScrollToTopButton from '../../ScrollToTopButton';
import Spinner from '../../Spinner';

import pe from '../../../assets/images/physicaldept.jpg';
import hostel from '../../../assets/images/hostel.jpg';
import transport from '../../../assets/images/bus.jfif';
import dispensary from '../../../assets/images/dispensary.jpg';
import wifi from '../../../assets/images/wifi.jpg';
import ambulance from '../../../assets/images/ambulance.jpg';
import foodcourt from '../../../assets/images/foodcourt.jfif';
import ro from '../../../assets/images/ro.jfif';
import amentiy from '../../../assets/images/amenity.jpg';
import atm from '../../../assets/images/bank.jpg';
import postoffice from '../../../assets/images/postoffice.jpg';
import powersupply from '../../../assets/images/power.jpg';
import library from '../../../assets/images/library.jfif';

const facilities = [
  { name: "Physical Education", image: pe },
  { name: "Library", image: library },
  { name: "Hostels and Accommodation", image: hostel },
  { name: "Transport", image: transport },
  { name: "Dispensary", image: dispensary },
  { name: "WiFi Facility", image: wifi },
  { name: "Ambulance", image: ambulance },
  { name: "Foodcourt", image: foodcourt },
  { name: "RO Purifier", image: ro },
  { name: "Amenity Centre", image: amentiy },
  { name: "KVB Bank & ATM", image: atm },
  { name: "Post Office", image: postoffice },
  { name: "24 x 7 Power Supply", image: powersupply },
];

const Facilities = () => {
  const navigate = useNavigate();

  const handleCardClick = (facilityName) => {
    if (facilityName === "Physical Education") {
      navigate("/facilities/physicaldept");
    } else if (facilityName === "Library") {
      navigate("/facilities/library");
    }   else if (facilityName === "Hostels and Accommodation") {
        navigate("/facilities/hostelsandaccomodation");
      } else if (facilityName === "Transport") {
        navigate("/facilities/transport");
      }else if (facilityName === "Dispensary") {
        navigate("/facilities/dispensary");
      }
  };

  const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const timer = setTimeout(() => setLoading(false), 1500);
      return () => clearTimeout(timer);
    }, []);
  
  
    return loading ? <Spinner /> : (
    <>
      <Section />
      <Navbar />
      <div className="facilities-container">
        {facilities.map((facility, index) => (
          <div
            className="facility-card"
            key={index}
            onClick={() => handleCardClick(facility.name)}
            style={{
              cursor: facility.name === "Physical Education" || facility.name === "Library" || facility.name === "Hostels and Accommodation" ||facility.name === "Transport" ||facility.name === "Dispensary" ? 'pointer' : 'default'
            }}
          >
            <img src={facility.image} alt={facility.name} />
            <p>{facility.name}</p>
          </div>
        ))}
      </div>
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default Facilities;
