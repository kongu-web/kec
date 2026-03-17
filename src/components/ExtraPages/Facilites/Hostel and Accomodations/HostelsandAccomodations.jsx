import React, { useState, useEffect } from "react";
import "./HostelsandAccomodations.css";
import Spinner from "../../../Spinner";

// Importing images
import guesthouse from "../../../../assets/images/HostelandAccomodation/guesthouse.webp";
import alumni from "../../../../assets/images/HostelandAccomodation/alumni.webp";
import kaveri from "../../../../assets/images/HostelandAccomodation/kaveri.webp";
import amaravathi from "../../../../assets/images/HostelandAccomodation/amaravathi.webp";
import bhavani from "../../../../assets/images/HostelandAccomodation/bhavani.webp";
import dheeran from "../../../../assets/images/HostelandAccomodation/dheeran.webp";
import valluvar from "../../../../assets/images/HostelandAccomodation/valluvar.webp";
import ilango from "../../../../assets/images/HostelandAccomodation/ilango.webp";
import bharathi from "../../../../assets/images/HostelandAccomodation/bharathi.webp";
import kamban from "../../../../assets/images/HostelandAccomodation/Kamban.webp";
import ponnar from "../../../../assets/images/HostelandAccomodation/ponnar.webp";
import sankar from "../../../../assets/images/HostelandAccomodation/sankar.webp";
import staff from "../../../../assets/images/HostelandAccomodation/staff.webp";
import Section from "../../../HomePage/Section/Section";
import Navbar from "../../../HomePage/navbar/Navbar";
import Footer from "../../../HomePage/Footer/Footer";

const hostels = {
  "Guest Houses": ["Guest House", "Alumni Guest House"],
  "Ladies Hostels": [
    "Kaveri Ladies Hostel",
    "Amaravathi Ladies Hostel",
    "Bhavani Ladies Hostel",
  ],
  "Men's Hostels": [
    "Dheeran Mens Hostel",
    "Valluvar Mens Hostel",
    "Ilango Mens Hostel",
    "Bharathi Mens Hostel",
    "Kamban Mens Hostel",
    "Ponnar Mens Hostel",
    "Sankar Mens Hostel",
  ],
  Other: ["Staff Quarters"],
};

const imageMap = {
  "Guest House": guesthouse,
  "Alumni Guest House": alumni,
  "Kaveri Ladies Hostel": kaveri,
  "Amaravathi Ladies Hostel": amaravathi,
  "Bhavani Ladies Hostel": bhavani,
  "Dheeran Mens Hostel": dheeran,
  "Valluvar Mens Hostel": valluvar,
  "Ilango Mens Hostel": ilango,
  "Bharathi Mens Hostel": bharathi,
  "Kamban Mens Hostel": kamban,
  "Ponnar Mens Hostel": ponnar,
  "Sankar Mens Hostel": sankar,
  "Staff Quarters": staff,
};

const HostelsandAccommodation = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return loading ? (
    <Spinner />
  ) : (
    <>
      {/* <Section/> */}
      <Navbar />
      <div className="hostels-container">
        <h2 className="page-title">Hostels and Accommodation</h2>
        {Object.entries(hostels).map(([category, items]) => (
          <div key={category} className="hostel-section">
            <h3 className="category-title">{category}</h3>
            <div className="cards-wrapper">
              {items.map((item, index) => (
                <div key={index} className="hostel-card">
                  <img
                    src={imageMap[item]}
                    alt={item}
                    className="hostel-image"
                  />
                  <p className="hostel-name">{item}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default HostelsandAccommodation;
