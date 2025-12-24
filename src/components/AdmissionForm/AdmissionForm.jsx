import React, { useState, useEffect } from "react";

import "./AdmissionForm.css";
import bgImage from "../../assets/images/AdmissionForm/Frame23.png"; // blue abstract
import cutShape from "../../assets/images/AdmissionForm/Subtract.png"; // white cut shape
import kecImage from "../../assets/images/AdmissionForm/Frame23-logo.png"; // logo illustration
import { ReactComponent as CloseIcon } from "../../assets/images/AdmissionForm/closeicon.svg";

import { ReactComponent as PhoneIcon } from "../../assets/images/Icon/footer_icon/phone.svg";
import { ReactComponent as EnvelopeIcon } from "../../assets/images/Icon/footer_icon/mail.svg";
import { ReactComponent as MapMarkerIcon } from "../../assets/images/Icon/footer_icon/map.svg";
import { ReactComponent as LinkedinIcon } from "../../assets/images/Icon/footer_icon/linkedin.svg";
import { ReactComponent as InstagramIcon } from "../../assets/images/Icon/footer_icon/insta.svg";
import { ReactComponent as FacebookIcon } from "../../assets/images/Icon/footer_icon/facebook.svg";
import { ReactComponent as YoutubeIcon } from "../../assets/images/Icon/footer_icon/youtube.svg";

const AdmissionForm = ({ isOpen, onClose }) => {

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    degree: "",
    department: "",
    city: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(""); // for success/error message

   useEffect(() => {
     if (submitStatus) {
       const timer = setTimeout(() => {
         setSubmitStatus("");
       }, 3000);

       return () => clearTimeout(timer);
     }
   }, [submitStatus]);

  const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbyDyKLfIQ8QY9aObFPnhOWlAAV3lF8mBoQbtyJyfK0NeWc5pA3hVulUkQBC7L2dA1u2/exec";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      const response = await fetch(SCRIPT_URL, {
        method: "POST",
        // Change this header to bypass preflight
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(formData), // Still send JSON string
        redirect: "follow", // Optional but helpful
      });

      const result = await response.json();

      if (result.result === "success") {
        setSubmitStatus(
          "Thank you! Your enquiry has been submitted successfully."
        );
        setFormData({
          name: "",
          mobile: "",
          degree: "",
          department: "",
          city: "",
          message: "",
        });
        setTimeout(() => onClose(), 2000);
      } else {
        setSubmitStatus("Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmitStatus("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="admission-popup-overlay">
      <div
        className="admission-popup"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <button className="admission-popup-close" onClick={onClose}>
          <CloseIcon className="close-icon" />
        </button>

        <div className="popup-content">
          <form className="left-form" onSubmit={handleSubmit}>
            <h2>Ready to Join Us?</h2>

            <input
              type="text"
              name="name"
              placeholder="Name *"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number *"
              value={formData.mobile}
              onChange={handleChange}
              required
            />

            <select
              name="degree"
              value={formData.degree}
              onChange={handleChange}
            >
              <option value="">Degree</option>
              <option value="B.E.">B.E.</option>
              <option value="B.Tech.">B.Tech.</option>
              <option value="M.E.">M.E.</option>
              <option value="M.Tech.">M.Tech.</option>
              <option value="Ph.D.">Ph.D.</option>
              {/* Add more as needed */}
            </select>

            <select
              name="department"
              value={formData.department}
              onChange={handleChange}
            >
              <option value="">Department</option>
              <option value="Computer Science">Computer Science</option>
              <option value="Electronics">Electronics</option>
              <option value="Mechanical">Mechanical</option>
              <option value="Civil">Civil</option>
              {/* Add actual KEC departments */}
            </select>

            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
            />

            <textarea
              name="message"
              placeholder="Message to KEC"
              value={formData.message}
              onChange={handleChange}
              rows="4"
            />

            {submitStatus && <p className="submit-message">{submitStatus}</p>}

            <div className="p-50 text-center">
              <button
                type="submit"
                className="btn btn-success btn-sm"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Enquiry"}
              </button>
            </div>
          </form>

          <div className="right-visual">
            <img src={kecImage} alt="KEC Logo" />

            <div className="contact-info">
              <div className="contact-item">
                <PhoneIcon />
                <span>04294-226515 / 226517</span>
              </div>
              <div className="contact-item">
                <EnvelopeIcon />
                <span>contactus@kongu.ac.in</span>
              </div>
              <div className="contact-item">
                <MapMarkerIcon />
                <span>
                  Perundurai, Erode - 638060,
                  <br />
                  Tamil Nadu, India
                </span>
              </div>
            </div>

            <div className="social-icons">
              <a
                href="https://www.instagram.com/konguengineeringcollege/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://www.facebook.com/konguengineeringcollegeperundurai"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://www.youtube.com/c/konguengineeringcollege"
                target="_blank"
                rel="noopener noreferrer"
              >
                <YoutubeIcon />
              </a>
              <a
                href="https://www.linkedin.com/school/kongu-engineering-collegeerode/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionForm;
