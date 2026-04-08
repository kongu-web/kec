import React, { useState, useEffect } from "react";
import "./HostelsandAccomodations.css";
import Spinner from "../../../Spinner";
import { FaUserShield, FaUserTie, FaBuilding, FaPhoneAlt, FaHome, FaBed, FaUsers } from "react-icons/fa";

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
  "Other Accommodations": ["Staff Quarters"],
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

const contacts = [
  {
    role: "ASSOCIATE WARDEN",
    name: "Dr. K. Kannan",
    sub: "ALL HOSTELS",
    phone: "04294 - 226602",
    icon: <FaUserShield />
  },
  {
    role: "DETY. WARDEN",
    name: "Dr. K. Manjula Rani",
    sub: "GIRLS HOSTELS",
    phone: "04294 - 226401",
    icon: <FaUserTie />
  },
  {
    role: "MANAGER",
    name: "Mr. K. M. Prakash",
    sub: "ADMINISTRATION",
    phone: "9965902006",
    icon: <FaBuilding />
  },
  {
    role: "ASST. MANAGER",
    name: "Ms. J. Balasaraswathi",
    sub: "ADMINISTRATION",
    phone: "9600162009",
    icon: <FaBuilding />
  },
  {
    role: "GENERAL",
    name: "Hostel Office",
    sub: "MAIN RECEPTION",
    phone: "04294 - 226651",
    icon: <FaPhoneAlt />
  }
];

const HostelsandAccommodation = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return loading ? (
    <Spinner />
  ) : (
    <div className="hostels-page-wrapper">
      <Navbar />
      
      {/* ─── Page Hero ─── */}
      <div className="hostels-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Hostels & Accommodation</h1>
          <p>Providing a home away from home with world-class facilities and a secure environment.</p>
        </div>
      </div>

      <div className="hostels-container">
        {/* ─── Hostels Grid ─── */}
        {Object.entries(hostels).map(([category, items]) => (
          <section key={category} className="hostel-section">
            <div className="section-header">
              <span className="category-tag">{category}</span>
              <div className="header-line"></div>
            </div>
            <div className="cards-grid">
              {items.map((item, index) => (
                <div key={index} className="hostel-card">
                  <div className="card-image-wrapper">
                    <img src={imageMap[item]} alt={item} />
                  </div>
                  <div className="card-content">
                    <div className="card-icon">
                      {category === "Ladies Hostels" ? <FaUsers /> : <FaBed />}
                    </div>
                    <h4>{item}</h4>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* ─── Contact Section ─── */}
        <section className="contacts-section">
          <div className="section-title-wrapper">
            <h2>Hostel Contacts</h2>
            <div className="underline"></div>
          </div>
          
          <div className="contacts-grid">
            {contacts.map((contact, idx) => (
              <div className="contact-card" key={idx}>
                <div className="role-badge">{contact.role}</div>
                <div className="contact-icon-circle">
                  {contact.icon}
                </div>
                <h3 className="contact-name">{contact.name}</h3>
                <p className="contact-desc">{contact.sub}</p>
                <div className="phone-pill">
                  <FaPhoneAlt size={12} />
                  <span>{contact.phone}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default HostelsandAccommodation;
