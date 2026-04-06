import React, { useState, useEffect } from "react";
import "./Contact.css";
import Navbar from "../../HomePage/navbar/Navbar";
import Footer from "../../HomePage/Footer/Footer";
import Contactimg from "../../../assets/images/aboutkec.webp";
import Spinner from "../../Spinner";
import { FaPhoneAlt, FaEnvelope, FaFax, FaMapMarkerAlt, FaGlobe, FaClock, FaUniversity, FaUserGraduate, FaHandshake, FaUserShield, FaBuilding, FaBus, FaTrain, FaPlane } from "react-icons/fa";
import { MdOutlineAssignmentInd, MdAdminPanelSettings } from "react-icons/md";

const Contact = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Spinner />;

  return (
    <>
      <Navbar />
      <div className="contact-page-wrapper fade-in">
        {/* Hero Section */}
        <section className="contact-hero">
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h1>Get In Touch</h1>
            <p>We are here to help and answer any questions you might have.</p>
          </div>
        </section>

        <div className="contact-main-container">
          {/* Top Section: Quick Stats/Info */}
          <div className="contact-header-info">
            <div className="header-info-item">
              <FaMapMarkerAlt className="info-icon" />
              <div>
                <h4>Address</h4>
                <p>Perundurai, Erode - 638060, Tamil Nadu</p>
              </div>
            </div>
            <div className="header-info-item">
              <FaPhoneAlt className="info-icon" />
              <div>
                <h4>Call Us</h4>
                <p>04294 - 226555, 226666</p>
              </div>
            </div>
            <div className="header-info-item">
              <FaEnvelope className="info-icon" />
              <div>
                <h4>Email Us</h4>
                <p>principal@kongu.ac.in</p>
              </div>
            </div>
            <div className="header-info-item">
              <FaClock className="info-icon" />
              <div>
                <h4>Timing</h4>
                <p>Mon - Sat: 9:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>

          <div className="contact-flex-grid">
            {/* Contact Details Column */}
            <div className="contact-details-col">
              <h2 className="section-title">Department Contacts</h2>

              <div className="details-card">
                <div className="card-header">
                  <MdAdminPanelSettings className="card-icon" />
                  <h3>Administration</h3>
                </div>
                <div className="card-body">
                  <p><FaUniversity className="inline-icon" /> <strong>KONGU ENGINEERING COLLEGE</strong></p>
                  <p><FaPhoneAlt className="inline-icon" /> Reception: 04294 - 226555, 226666, 226500</p>
                  <p><FaFax className="inline-icon" /> Fax: 04294 - 220087</p>
                </div>
              </div>

              <div className="details-card">
                <div className="card-header">
                  <MdOutlineAssignmentInd className="card-icon" />
                  <h3>Admission Enquiry</h3>
                </div>
                <div className="card-body">
                  <p><FaPhoneAlt className="inline-icon" /> Direct: 04294-226515 / 226517</p>
                  <p><FaPhoneAlt className="inline-icon" /> Mobile: 9965277765 / 9443020583</p>
                </div>
              </div>

              <div className="details-card">
                <div className="card-header">
                  <FaUserGraduate className="card-icon" />
                  <h3>Placement Cell</h3>
                </div>
                <div className="card-body">
                  <p><FaPhoneAlt className="inline-icon" /> Phone: 04294 - 226644, 226564</p>
                  <p><FaEnvelope className="inline-icon" /> Email: <a href="mailto:placement@kongu.ac.in">placement@kongu.ac.in</a></p>
                </div>
              </div>

              <div className="details-card">
                <div className="card-header">
                  <FaHandshake className="card-icon" />
                  <h3>IIP Cell</h3>
                </div>
                <div className="card-body">
                  <p><FaPhoneAlt className="inline-icon" /> Phone: 04294 - 225777, 226642</p>
                  <p><FaPhoneAlt className="inline-icon" /> Mobile: +91 9952460698</p>
                  <p><FaEnvelope className="inline-icon" /> Email: <a href="mailto:keciipc@kongu.ac.in">keciipc@kongu.ac.in</a></p>
                </div>
              </div>
            </div>

            {/* Map Column */}
            <div className="contact-map-col">
              <div className="map-container-card">
                <h3>Find Us on Campus</h3>
                <div className="iframe-wrapper">
                  <iframe
                    title="KEC Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.871066050514!2d77.6047243750519!3d11.27421118881267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96d7810fe32d5%3A0x85cf49e0b793a03e!2sKongu%20Engineering%20College!5e0!3m2!1sen!2sin!4v1710682000000!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                  </iframe>
                </div>
                <div className="map-footer">
                  <img src={Contactimg} alt="College Campus" className="footer-map-img" />
                  <p>Kongu Engineering College, Perundurai, Erode, Tamil Nadu 638060</p>
                </div>
              </div>
              <div className="how-to-reach-card">
                <h3>How to Reach Us</h3>
                <div className="reach-grid">
                  <div className="reach-item">
                    <div className="reach-header">
                      <FaBus className="reach-icon" />
                      <h4>By Bus</h4>
                    </div>
                    <p>Regular buses are available from Erode and Coimbatore to Perundurai. The campus is located 2 km from Perundurai.</p>
                  </div>
                  <div className="reach-item">
                    <div className="reach-header">
                      <FaTrain className="reach-icon" />
                      <h4>By Train</h4>
                    </div>
                    <p>Nearest station: Erode Junction (20 km). Taxis/buses available.</p>
                  </div>
                  <div className="reach-item full-width">
                    <div className="reach-header">
                      <FaPlane className="reach-icon" />
                      <h4>By Air</h4>
                    </div>
                    <p>Nearest airport: Coimbatore International Airport (70 km).</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hostel Section */}
          <section className="hostel-section">
            <h2 className="section-title centered">Hostel Contacts</h2>
            <div className="hostel-modern-grid">
              <div className="hostel-card">
                <div className="h-card-badge">Associate Warden</div>
                <div className="h-icon-wrap">
                  <FaUserShield className="h-icon" />
                </div>
                <h4>Dr. K. Kannan</h4>
                <p>All Hostels</p>
                <div className="h-card-phone">04294 - 226602</div>
              </div>
              <div className="hostel-card">
                <div className="h-card-badge">Dety. Warden</div>
                <div className="h-icon-wrap">
                  <FaUserShield className="h-icon" />
                </div>
                <h4>Dr. K. Manjula Rani</h4>
                <p>Girls Hostels</p>
                <div className="h-card-phone">04294 - 226401</div>
              </div>
              <div className="hostel-card">
                <div className="h-card-badge">Manager</div>
                <div className="h-icon-wrap">
                  <FaBuilding className="h-icon" />
                </div>
                <h4>Mr. K. M. Prakash</h4>
                <p>Administration</p>
                <div className="h-card-phone">9965902006</div>
              </div>
              <div className="hostel-card">
                <div className="h-card-badge">Asst. Manager</div>
                <div className="h-icon-wrap">
                  <FaBuilding className="h-icon" />
                </div>
                <h4>Ms. J. Balasaraswathi</h4>
                <p>Administration</p>
                <div className="h-card-phone">9600162009</div>
              </div>
              <div className="hostel-card">
                <div className="h-card-badge">General</div>
                <div className="h-icon-wrap">
                  <FaPhoneAlt className="h-icon-large" />
                </div>
                <h4>Hostel Office</h4>
                <p>Main Reception</p>
                <div className="h-card-phone">04294 - 226651</div>
              </div>
            </div>


          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
