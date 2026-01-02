import React, { useState } from 'react';
import './IEF.css'; // Import the CSS file

const Navbar = () => {
  const [activeDropdowns, setActiveDropdowns] = useState({});
  const [showContactModal, setShowContactModal] = useState(false);

  const handleMouseEnter = (dropdownName) => {
    setActiveDropdowns(prev => ({
      ...prev,
      [dropdownName]: true
    }));
  };

  const handleMouseLeave = (dropdownName) => {
    setActiveDropdowns(prev => ({
      ...prev,
      [dropdownName]: false
    }));
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    setShowContactModal(true);
  };

  const handleCloseModal = () => {
    setShowContactModal(false);
  };

  return (
    <>
      <nav className="nav"> {/* Apply className */}
        <ul className="navItems"> {/* Apply className */}

          <li className="dropdown"
              onMouseEnter={() => handleMouseEnter('policies')}
              onMouseLeave={() => handleMouseLeave('policies')}>
            Policies
            {activeDropdowns.policies && (
              <ul className="dropdownMenu"> {/* Apply className */}
                <li><a href="/ief/docs/kisp2020.pdf" className="link">KEC Innovation and Startup Policy - KISP 2020</a></li>
                <li><a href="/ief/docs/STARTUP-TN-Policy.pdf" className="link">Tamil Nadu Startup & Innovation Policy 2023</a></li>
                <li><a href="/ief/docs/nisp2020.pdf" className="link">National Innovation and Startup Policy - NISP 2019</a></li>
              </ul>
            )}
          </li>

          <li><a href="/ief/docs/memberslist2024-2025.pdf" className="link">Members</a></li>

          <li className="dropdown"
              onMouseEnter={() => handleMouseEnter('yearPlan')}
              onMouseLeave={() => handleMouseLeave('yearPlan')}>
            Year Plan
            {activeDropdowns.yearPlan && (
              <ul className="dropdownMenu">
                <li><a href="/ief/docs/calendar_activities2024-2025.pdf" className="link">Calendar Activities</a></li>
                <li><a href="/ief/docs/celebration_activities.pdf" className="link">Celebration Activities</a></li>
                <li><a href="/ief/docs/year_plan2024-2025.pdf" className="link">KEC Year Plan 2024-2025</a></li>
                <li className="nestedDropdown"
                    onMouseEnter={() => handleMouseEnter('previousYearPlan')}
                    onMouseLeave={() => handleMouseLeave('previousYearPlan')}>
                  Previous Year Plan
                  {activeDropdowns.previousYearPlan && (
                    <ul className="nestedDropdownMenu">
                      <li><a href="ief/docs/PreviousYear/Action PLan_2023-24.pdf" className="link">2023-2024</a></li>
                      <li><a href="ief/docs/PreviousYear/Action PLan_2022-23.pdf" className="link">2022-2023</a></li>
                      <li><a href="ief/docs/PreviousYear/Action PLan_2021-22.pdf" className="link">2021-2022</a></li>
                      <li><a href="ief/docs/PreviousYear/Action PLan_2020-21.pdf"className="link">2020-2021</a></li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>

          <li className="dropdown"
              onMouseEnter={() => handleMouseEnter('iicActivities')}
              onMouseLeave={() => handleMouseLeave('iicActivities')}>
            IIC - Activities
            {activeDropdowns.iicActivities && (
              <ul className="dropdownMenu">
                <li><a href="/ief/docs/iicactivities_2023_24.pdf" className="link">2023-2024</a></li>
                <li><a href="/ief/docs/iic_2022_23.pdf" className="link">2022-2023</a></li>
                <li><a href="/ief/docs/iic_2021_22.pdf" className="link">2021-2022</a></li>
                <li><a href="/ief/docs/iic_2020_21.pdf" className="link">2020-2021</a></li>
                <li><a href="/ief/docs/iic_2019_20.pdf" className="link">2019-2020</a></li>
                <li><a href="/ief/docs/iic_2018_19.pdf" className="link">2018-2019</a></li>
                <li className="nestedDropdown"
                    onMouseEnter={() => handleMouseEnter('overallReport')}
                    onMouseLeave={() => handleMouseLeave('overallReport')}>
                  Overall Report Year
                  {activeDropdowns.overallReport && (
                    <ul className="nestedDropdownMenu">
                      <li><a href="/ief/docs/OverallReprt_Sep2023-Aug2024.pdf" className="link">2023-2024</a></li>
                      <li><a href="/ief/docs/OverallReprt_Sep2022-Aug2023.pdf" className="link">2022-2023</a></li>
                      <li><a href="/ief/docs/OverallReprt_Sep2021-Aug2022.pdf" className="link">2021-2022</a></li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>

          <li className="dropdown"
              onMouseEnter={() => handleMouseEnter('emdcActivities')}
              onMouseLeave={() => handleMouseLeave('emdcActivities')}>
            EMDC- Activities
            {activeDropdowns.emdcActivities && (
              <ul className="dropdownMenu">
                <li><a href="/ief/docs/EMDC_2023_24.pdf" className="link">2023-2024</a></li>
                <li><a href="/ief/docs/EMDC_2022_23.pdf" className="link">2022-2023</a></li>
                <li><a href="/ief/docs/EMDC_2021_22.pdf" className="link">2021-2022</a></li>
                <li><a href="/ief/docs/EMDC_2020_21.pdf" className="link">2020-2021</a></li>
                <li><a href="/ief/docs/EMDC_2019_20.pdf" className="link">2019-2020</a></li>
              </ul>
            )}
          </li>

          <li className="dropdown"
              onMouseEnter={() => handleMouseEnter('ratings')}
              onMouseLeave={() => handleMouseLeave('ratings')}>
            Ratings
            {activeDropdowns.ratings && (
              <ul className="dropdownMenu">
                <li className="nestedDropdown"
                    onMouseEnter={() => handleMouseEnter('nirfAriia')}
                    onMouseLeave={() => handleMouseLeave('nirfAriia')}>
                  NIRF/ARIIA
                  {activeDropdowns.nirfAriia && (
                    <ul className="nestedDropdownMenu">
                      <li><a href="/ief/docs/ARIIA_2023.pdf" className="link">NIRF 2023</a></li>
                      <li><a href="/ief/docs/ARIIA_2021.pdf" className="link">ARIIA 2021</a></li>
                      <li><a href="/ief/docs/ARIIA_2020.pdf" className="link">ARIIA 2020</a></li>
                      <li><a href="/ief/docs/ARIIA_2019.pdf" className="link">ARIIA 2019</a></li>
                    </ul>
                  )}
                </li>
                <li className="nestedDropdown"
                    onMouseEnter={() => handleMouseEnter('iicRatings')}
                    onMouseLeave={() => handleMouseLeave('iicRatings')}>
                  IIC Ratings
                  {activeDropdowns.iicRatings && (
                    <ul className="nestedDropdownMenu">
                      <li><a href="/ief/docs/IICRating2023-2024.pdf" className="link">2023-2024</a></li>
                      <li><a href="/ief/docs/IIC_ 2022-23.pdf" className="link">2022-2023</a></li>
                      <li><a href="/ief/docs/IIC_ 2021-22.pdf" className="link">2021-2022</a></li>
                      <li><a href="/ief/docs/RatingCertificate_2020-21.pdf" className="link">2020-2021</a></li>
                      <li><a href="/ief/docs/RatingCertificate_2019-20.pdf" className="link">2019-2020</a></li>
                      <li><a href="/ief/docs/RatingCertificate_2018-19.pdf" className="link">2018-2019</a></li>
                      <li><a href="/ief/docs/EstablismentCertificate.pdf" className="link">Establishment Certificate</a></li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>

          <li className="dropdown"
              onMouseEnter={() => handleMouseEnter('sparkFund')}
              onMouseLeave={() => handleMouseLeave('sparkFund')}>
            Spark Fund
            {activeDropdowns.sparkFund && (
              <ul className="dropdownMenu">
                <li><a href="/ief/docs/Sparkfund_Application.pdf" className="link">Application Form</a></li>
                <li><a href="/ief/docs/Spark Fund_Guidelines.pdf" className="link">Guidelines</a></li>
                <li><a href="/ief/docs/Spark Fund_Project consolidated 261023.pdf" className="link">Sanctioned Projects</a></li>
              </ul>
            )}
          </li>

          <li className="dropdown"
              onMouseEnter={() => handleMouseEnter('annualReport')}
              onMouseLeave={() => handleMouseLeave('annualReport')}>
            Annual Report
            {activeDropdowns.annualReport && (
              <ul className="dropdownMenu">
                <li><a href="/ief/docs/AnnualReport_2023-24.pdf" className="link">2023-2024</a></li>
                <li><a href="/ief/docs/AnnualReport_2022-23.pdf" className="link">2022-2023</a></li>
                <li><a href="/ief/docs/AnnualReport_2021-2022.pdf" className="link">2021-2022</a></li>
                <li><a href="/ief/docs/AnnualReport_2020-21.pdf" className="link">2020-2021</a></li>
              </ul>
            )}
          </li>

          <li className="dropdown"
              onMouseEnter={() => handleMouseEnter('kapilaIpr')}
              onMouseLeave={() => handleMouseLeave('kapilaIpr')}>
            KAPILA / IPR
            {activeDropdowns.kapilaIpr && (
              <ul className="dropdownMenu">
                <li><a href="/ief/docs/KAPILA1.pdf" className="link">Activity - 1</a></li>
                <li><a href="/ief/docs/KAPILA2.pdf" className="link">Activity - 2</a></li>
                <li><a href="/ief/docs/KAPILA3.pdf" className="link">Activity - 3</a></li>
                <li><a href="/ief/docs/KAPILA4.pdf" className="link">Activity - 4</a></li>
                <li><a href="/ief/docs/KAPILA5.pdf" className="link">Activity - 5</a></li>
                <li><a href="/ief/docs/KAPILA6.pdf" className="link">Activity - 6</a></li>
              </ul>
            )}
          </li>

          <li><a href="/ief/docs/ipr_idf.pdf" className="link">Invention Disclosure Form</a></li>
          <li><a href=" https://rnd.kongu.edu/patents.php" target="_blank" rel="noopener noreferrer" className="link">Patent Details</a></li>
          <li><a href="" className="link" onClick={handleContactClick}>Contact Us</a></li> {/* Apply className */}

        </ul>
      </nav>

      {showContactModal && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={handleCloseModal}>&times;</button>
            <h3>Contact Us</h3>
            <div className="modal-grid">
              <div className="modal-column">
                <p>
                  <strong>Dr. Praveen Kumar Subramanian</strong><br />
                  Convener – Innovation and Entrepreneurship Forum KEC (IEF @ KEC)
                </p>
              </div>

              <div className="modal-column">
                <ul className="contact-info">
                  <li><i className="fas fa-phone"></i> Whatsapp: +91-9500-575-414</li>
                  <li><i className="fas fa-phone-alt"></i> Call: +91-6382-650-340</li>
                  <li><i className="fas fa-envelope"></i> Personal: <a href="mailto:praveenkumar.mts@kongu.edu">praveenkumar.mts@kongu.edu</a></li>
                  <li><i className="fas fa-envelope"></i> Official: <a href="mailto:iickec@kongu.edu">iickec@kongu.edu</a></li>
                </ul>
              </div>

              <div className="modal-column">
                <ul className="social-links">
                  <li><a href="https://www.facebook.com/iickec"><i className="fab fa-facebook"></i> Facebook</a></li>
                  <li><a href="https://twitter.com/IicKongu"><i className="fab fa-twitter"></i> Twitter</a></li>
                  <li><a href="https://www.instagram.com/iic_kec/"><i className="fab fa-instagram"></i> Instagram</a></li>
                </ul>
              </div>
              <a>Designed by karan <a href="https://kongu.ac.in/kecwebteam ">kecwebteam</a></a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;