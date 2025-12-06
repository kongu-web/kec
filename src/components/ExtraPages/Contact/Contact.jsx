import React,{useState,useEffect} from "react";
import "./Contact.css";
import Navbar from "../../HomePage/navbar/Navbar";
import Section from "../../HomePage/Section/Section";
import Footer from "../../HomePage/Footer/Footer";
import ScrollToTopButton from "../../ScrollToTopButton";
import Contactimg from '../../../assets/images/aboutkec.jpg';
import Spinner from "../../Spinner";

const Contact = () => {
  const [loading, setLoading] = useState(true);
    
      useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1500);
        return () => clearTimeout(timer);
      }, []);
    
    
      return loading ? <Spinner /> : (
    <>
      <Section />
      <Navbar />
      <div className="contact-container fade-in">
        <h2 className="contact-title">Contact Us</h2>

        <div className="contact-grid">
          <div className="contact-card">
            <h3>Administration / Reception</h3>
            <p>KONGU ENGINEERING COLLEGE</p>
            <p>Perundurai, Erode - 638060, Tamil Nadu, India</p>
            <p>Phone: 04294 - 226555, 226666, 226500</p>
          </div>

          <div className="contact-card">
            <h3>Principal</h3>
            <p>Phone: 04294 - 220583</p>
            <p>Fax: 04294 - 220087</p>
            <p>Email: <a href="mailto:principal@kongu.ac.in">principal@kongu.ac.in</a></p>
          </div>

          <div className="contact-card">
            <h3>Admission Enquiry</h3>
            <p>Phone: 04294-226515 / 226517</p>
            <p>Mobile: 9965277765 / 9443020583</p>
          </div>

          <div className="contact-card">
            <h3>Placement & Training Cell</h3>
            <p>Phone: 04294 - 226644, 226564</p>
            <p>Fax: 04294 - 220087</p>
            <p>Email: <a href="mailto:placement@kongu.ac.in">placement@kongu.ac.in</a>, <a href="mailto:placement@kongu.edu">placement@kongu.edu</a></p>
          </div>

          <div className="contact-card">
            <h3>Industry Institute Partnership Cell</h3>
            <p>Phone: 04294 - 225777 (Direct), 226642</p>
            <p>Telefax: 04294 - 225777</p>
            <p>Mobile: +91 9952460698</p>
            <p>Email: <a href="mailto:keciipc@kongu.ac.in">keciipc@kongu.ac.in</a></p>
          </div>

          <div className="contact-card">
            <img src={Contactimg} alt="College img" />
          </div>
        </div>

        <h3 className="hostel-title">Hostel Contact</h3>
        <div className="hostel-table-container">
          <table className="hostel-table">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Name / Designation</th>
                <th>Mobile Number</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Dr. K. Kannan, Associate Warden (All Hostels)</td>
                <td>04294 - 226602</td>
              </tr>
              {/* <tr>
                <td>2</td>
                <td>Major Dr. P. S. Raghavendran, Sr. Deputy Warden (Boys Hostels)</td>
                <td>9486905006</td>
              </tr> */}
              <tr>
                <td>2</td>
                <td>Dr.K.Manjula Rani, Sr. Deputy Warden (Girls Hostels)</td>
                <td>04294 - 226401</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Mr. K. M. Prakash, Manager</td>
                <td>9965902006</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Ms. J. Balasaraswathi, Assistant Manager</td>
                <td>9600162009</td>
              </tr>
               <tr>
                <td>5</td>
                <td>Hostel Office</td>
                <td>04294 - 226651</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default Contact;
