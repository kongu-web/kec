import React, { useState } from 'react';
import './IEF.css'; // Import the CSS file

const Navbar = () => {
  const [activeDropdowns, setActiveDropdowns] = useState({});
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

  const isMobile = () => window.innerWidth <= 768;

  const handleMouseEnter = (dropdownName) => {
    if (isMobile()) return;
    setActiveDropdowns(prev => ({ ...prev, [dropdownName]: true }));
  };

  const handleMouseLeave = (dropdownName) => {
    if (isMobile()) return;
    setActiveDropdowns(prev => ({ ...prev, [dropdownName]: false }));
  };

  const handleDropdownClick = (dropdownName) => {
    if (!isMobile()) return;
    setActiveDropdowns(prev => ({ ...prev, [dropdownName]: !prev[dropdownName] }));
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
      <nav className="nav">
        {/* Brand visible only on mobile */}
        <span className="nav-brand">IEF @ KEC</span>

        {/* Hamburger button */}
        <button
          className="hamburger-btn"
          aria-label="Toggle navigation"
          onClick={() => setIsMobileOpen(prev => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navItems${isMobileOpen ? ' mobile-open' : ''}`}>

          <li className="dropdown"
            onMouseEnter={() => handleMouseEnter('policies')}
<<<<<<< HEAD
            onMouseLeave={() => handleMouseLeave('policies')}>
            Policies
=======
            onMouseLeave={() => handleMouseLeave('policies')}
            onClick={() => handleDropdownClick('policies')}>
            Policies ▾
>>>>>>> cellclub
            {activeDropdowns.policies && (
              <ul className="dropdownMenu">
                <li><a href="/ief/docs/kisp2020.pdf" className="link">KEC Innovation and Startup Policy - KISP 2020</a></li>
                <li><a href="/ief/docs/STARTUP-TN-Policy.pdf" className="link">Tamil Nadu Startup & Innovation Policy 2023</a></li>
                <li><a href="/ief/docs/nisp2020.pdf" className="link">National Innovation and Startup Policy - NISP 2019</a></li>
              </ul>
            )}
          </li>

          <li><a href="/ief/docs/memberslist2024-2025.pdf" className="link">Members</a></li>

          <li className="dropdown"
            onMouseEnter={() => handleMouseEnter('yearPlan')}
<<<<<<< HEAD
            onMouseLeave={() => handleMouseLeave('yearPlan')}>
            Year Plan
=======
            onMouseLeave={() => handleMouseLeave('yearPlan')}
            onClick={() => handleDropdownClick('yearPlan')}>
            Year Plan ▾
>>>>>>> cellclub
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
                      <li><a href="/ief/docs/PreviousYear/Action PLan_2023-24.pdf" className="link">2023-2024</a></li>
                      <li><a href="/ief/docs/PreviousYear/Action PLan_2022-23.pdf" className="link">2022-2023</a></li>
                      <li><a href="/ief/docs/PreviousYear/Action PLan_2021-22.pdf" className="link">2021-2022</a></li>
                      <li><a href="/ief/docs/PreviousYear/Action PLan_2020-21.pdf" className="link">2020-2021</a></li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>

          <li className="dropdown"
            onMouseEnter={() => handleMouseEnter('iicActivities')}
<<<<<<< HEAD
            onMouseLeave={() => handleMouseLeave('iicActivities')}>
            IIC - Activities
=======
            onMouseLeave={() => handleMouseLeave('iicActivities')}
            onClick={() => handleDropdownClick('iicActivities')}>
            IIC - Activities ▾
>>>>>>> cellclub
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
<<<<<<< HEAD
            onMouseLeave={() => handleMouseLeave('emdcActivities')}>
            EMDC- Activities
=======
            onMouseLeave={() => handleMouseLeave('emdcActivities')}
            onClick={() => handleDropdownClick('emdcActivities')}>
            EMDC Activities ▾
>>>>>>> cellclub
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
<<<<<<< HEAD
            onMouseLeave={() => handleMouseLeave('ratings')}>
            Ratings
=======
            onMouseLeave={() => handleMouseLeave('ratings')}
            onClick={() => handleDropdownClick('ratings')}>
            Ratings ▾
>>>>>>> cellclub
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
                      <li><a href="/ief/docs/IIC_2021-22.pdf" className="link">2021-2022</a></li>
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
<<<<<<< HEAD
            onMouseLeave={() => handleMouseLeave('sparkFund')}>
            Spark Fund
=======
            onMouseLeave={() => handleMouseLeave('sparkFund')}
            onClick={() => handleDropdownClick('sparkFund')}>
            Spark Fund ▾
>>>>>>> cellclub
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
<<<<<<< HEAD
            onMouseLeave={() => handleMouseLeave('annualReport')}>
            Annual Report
=======
            onMouseLeave={() => handleMouseLeave('annualReport')}
            onClick={() => handleDropdownClick('annualReport')}>
            Annual Report ▾
>>>>>>> cellclub
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
<<<<<<< HEAD
            onMouseLeave={() => handleMouseLeave('kapilaIpr')}>
            KAPILA / IPR
=======
            onMouseLeave={() => handleMouseLeave('kapilaIpr')}
            onClick={() => handleDropdownClick('kapilaIpr')}>
            KAPILA / IPR ▾
>>>>>>> cellclub
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

          <li><a href="/ief/docs/ipr_idf.pdf" className="link">Invention Disclosure</a></li>
          <li><a href=" https://rnd.kongu.edu/patents.php" target="_blank" rel="noopener noreferrer" className="link">Patent Details</a></li>
          <li><a href="" className="link" onClick={handleContactClick}>Contact</a></li> {/* Apply className */}

        </ul>
      </nav>

      {showContactModal && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={handleCloseModal}>
              <i className="fas fa-times"></i>
            </button>

            <div className="modal-header">
              <h3>Connect With Us</h3>
              <div className="modal-divider"></div>
            </div>

            <div className="modal-body-premium">
              <div className="contact-person-card">
                <div className="person-avatar">
                  <i className="fas fa-user-tie"></i>
                </div>
                <div className="person-details">
                  <h4>Dr. Praveen Kumar Subramanian</h4>
                  <p>Convener – Innovation and Entrepreneurship Forum KEC (IEF @ KEC)</p>
                </div>
              </div>

              <div className="contact-methods-grid">
                <a href="https://wa.me/919500575414" target="_blank" rel="noopener noreferrer" className="contact-method-card whatsapp">
                  <div className="method-icon"><i className="fab fa-whatsapp"></i></div>
                  <div className="method-info">
                    <span>Whatsapp</span>
                    <strong>+91-9500-575-414</strong>
                  </div>
                </a>

                <a href="tel:+916382650340" className="contact-method-card phone">
                  <div className="method-icon"><i className="fas fa-phone-alt"></i></div>
                  <div className="method-info">
                    <span>Call Us</span>
                    <strong>+91-6382-650-340</strong>
                  </div>
                </a>

                <a href="mailto:praveenkumar.mts@kongu.edu" className="contact-method-card email">
                  <div className="method-icon"><i className="fas fa-envelope"></i></div>
                  <div className="method-info">
                    <span>Personal</span>
                    <strong>praveenkumar.mts@kongu.edu</strong>
                  </div>
                </a>

                <a href="mailto:iickec@kongu.edu" className="contact-method-card email-official">
                  <div className="method-icon"><i className="fas fa-building"></i></div>
                  <div className="method-info">
                    <span>Official</span>
                    <strong>iickec@kongu.edu</strong>
                  </div>
                </a>
              </div>

              <div className="social-connect">
                <p>Follow our Journey</p>
                <div className="social-pills">
                  <a href="https://www.facebook.com/iickec" target="_blank" rel="noopener noreferrer" className="social-pill fb">
                    <i className="fab fa-facebook-f"></i> Facebook
                  </a>
                  <a href="https://twitter.com/IicKongu" target="_blank" rel="noopener noreferrer" className="social-pill tw">
                    <i className="fab fa-twitter"></i> Twitter
                  </a>
                  <a href="https://www.instagram.com/iic_kec/" target="_blank" rel="noopener noreferrer" className="social-pill ig">
                    <i className="fab fa-instagram"></i> Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;