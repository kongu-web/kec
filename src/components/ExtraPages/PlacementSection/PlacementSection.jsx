import React, { useState, useEffect } from "react";
import "./PlacementSection.css";
import Section from "../../HomePage/Section/Section";
import Navbar from "../../HomePage/navbar/Navbar";
import Footer from "../../HomePage/Footer/Footer";
import ScrollToTopButton from "../../ScrollToTopButton";
import PlacementStatus from "./PlacementStatus";
import Spinner from "../../Spinner";
import Slider from "./Slider";

const PlacementSection = () => {
  const importSliderImages = (r) => r.keys().map(r);
  const sliderImages = importSliderImages(
    require.context(
      "../../../assets/images/Placement/Slider",
      false,
      /\.(png|jpe?g|svg|webp)$/
    )
  );
  const [activeTab, setActiveTab] = useState("Home");

  const renderImages = () => {
    const context = require.context(
      "../../../assets/images/Placement/Companies",
      false,
      /\.(jpg|jpeg|png|webp|svg|avif|jfif)$/
    );

    const sortedKeys = context.keys().sort();

    return sortedKeys.map((key, index) => (
      <div className="placement-card" key={index}>
        <img src={context(key)} alt={key.replace("./", "")} />
      </div>
    ));
  };

  const importAllPdfs = (r) =>
    r.keys().map((key) => ({
      name: key.replace("./", "").replace(".pdf", "").replace(/-/g, "-"),
      file: r(key),
    }));

  const trainingDetailsFiles = importAllPdfs(
    require.context(
      "../../../assets/docs/Placement/Training Details",
      false,
      /\.pdf$/
    )
  );

  const trainingSchedulesFiles = importAllPdfs(
    require.context(
      "../../../assets/docs/Placement/Training Schedules",
      false,
      /\.pdf$/
    )
  );

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
      <div className="placement-section-container">
        <nav className="placement-navbar">
          {["Home", "Training", "Status", "Contact"].map((tab) => (
            <button
              key={tab}
              className={`placement-tab ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </nav>

        {activeTab === "Home" && (
          <div className="placement-home">
            <Slider />
            <h2>About Placement Cell</h2>
            <p>
              The placement cell has been functioning in our campus since 1998.
              Placement Cell serves as a bridge between the academic world and
              the professional realm, facilitating the transition of students
              from the classroom to the workplace.
            </p>
            <p>
              Placement Cells have evolved significantly over the years and
              moved beyond merely organizing campus interviews to offering
              comprehensive career development services. The integration of
              technology has streamlined the job search process, allowing
              students to access job listings and resources online.
            </p>
            <p>
              Furthermore, Placement Cells now recognize the importance of
              holistic development. We focus on nurturing not only technical
              skills but also interpersonal skills, emotional intelligence, and
              adaptability, as these qualities are highly valued by employers.
            </p>
            <h3>Functions of a Placement Cell:</h3>
            <ul>
              <li>
                <strong>Career Guidance:</strong> Guidance and counselling to
                identify career goals, suitable courses, and relevant skills.
              </li>
              <li>
                <strong>Industry Connections:</strong> Collaborations with
                companies for internships, campus drives, and partnerships.
              </li>
              <li>
                <strong>Job Postings:</strong> Disseminates job openings and
                internships, reducing stress during job hunting.
              </li>
            </ul>

            <h3>Prominent Recruiters</h3>
            <div className="placement-gallery">{renderImages()}</div>
          </div>
        )}

        {activeTab === "Training" && (
          <div className="placement-training">
            <div className="training-tab-content fade-in">
              <h2>Training Cell</h2>
              <p>
                The Training Cell plays a vital role in students’ success and is
                one of the cornerstones of the Institute. This cell is committed
                to enhancing the professional skills of the students to meet
                industrial needs. It organizes more than 350 hours of training,
                which includes:
              </p>

              <div className="training-modules">
                <ul>
                  <li>Quantitative Aptitude and Logical Reasoning</li>
                  <li>Soft skills</li>
                  <li>Verbal Ability and Communicative Skills</li>
                  <li>Aptitude Shortcut Methods with Speed Maths</li>
                  <li>Problem Solving Skills</li>
                  <li>Advanced Technical Training</li>
                  <li>Full Stack Development Training</li>
                  <li>Company Specific Training</li>
                  <li>Skill Enhancement Training for Super Dream Companies</li>
                  <li>
                    Mock Interview & Placement Readiness Sessions (via Industry
                    Experts)
                  </li>
                  <li>Professional Grooming Training</li>
                  <li>Core Training</li>
                  <li>Competitive Coding Platform Training</li>
                  <li>Boot Camp</li>
                  <li>Hackathon</li>
                  <li>Coding Contest</li>
                </ul>
              </div>

              <h3>Training Details</h3>
              <div className="training-lists">
                {trainingDetailsFiles.map((doc, i) => (
                  <a
                    key={i}
                    href={doc.file}
                    download
                    className="training-chip"
                    title="Click to download"
                  >
                    {doc.name}
                  </a>
                ))}
              </div>

              <h3>Training Schedules</h3>
              <div className="training-lists">
                {trainingSchedulesFiles.map((doc, i) => (
                  <a
                    key={i}
                    href={doc.file}
                    download
                    className="training-chip"
                    title="Click to download"
                  >
                    {doc.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "Status" && (
          <div className="placement-status">
            <PlacementStatus />
          </div>
        )}
        {activeTab === "Contact" && (
          <div className="placement-contact">
            <div className="placement-contact-section fade-in">
              <h2 className="placement-contact-title">Contact Us</h2>

              <div className="placement-contact-wrapper">
                <div className="placement-contact-card">
                  <h3>Placement Cell</h3>
                  <p>
                    <strong>Mr.P.Dhakshinamoorthy</strong>
                    <br />
                    Placement Officer
                    <br />
                    Mobile: <a href="tel:9790004095">9790004095</a>
                    <br />
                    Phone: <a href="tel:04294226644">04294 – 226644</a>
                  </p>
                  <p>
                    <strong>Mr.S.Kavin</strong>
                    <br />
                    Deputy Placement Officer
                    <br />
                    Mobile: <a href="tel:9600777618">9600777618</a>
                  </p>
                  <p>
                    <strong>Mr.P.Sukumar</strong>
                    <br />
                    Deputy Placement Officer
                    <br />
                    Mobile: <a href="tel:9629455327">9629455327</a>
                  </p>
                  <p>
                    <strong>Mr.P.Dineshkumar</strong>
                    <br />
                    Assistant Placement Officer
                    <br />
                    Mobile: <a href="tel:7373675915">7373675915</a>
                  </p>
                  <p>
                    <strong>Mr.G.Srivaths Karthic</strong>
                    <br />
                    Assistant Placement Officer
                    <br />
                    Mobile: <a href="tel:7373675915">9442751513</a>
                  </p>
                  <p>
                    <strong>Communication Address:</strong>
                    <br />
                    Placement Cell,
                    <br />
                    Kongu Engineering College,
                    <br />
                    Perundurai, Erode – 638 060,
                    <br />
                    Tamil Nadu, India.
                    <br />
                    Ph: <a href="tel:04294226564">04294 - 226 564</a>
                    <br />
                    Fax: 04294 – 220087
                    <br />
                    Email: <br />{" "}
                    <a href="mailto:placement@kongu.edu">placement@kongu.edu</a>
                    <br />{" "}
                    <a href="mailto:placement@kongu.ac.in">
                      placement@kongu.ac.in
                    </a>
                  </p>
                </div>

                <div className="placement-contact-card">
                  <h3>Training Cell</h3>
                  <p>
                    <strong>Dr.N.Shanthi</strong>
                    <br />
                    Training Officer
                    <br />
                    Mobile: <a href="tel:9842013355">9842013355</a>
                    <br />
                    Phone: <a href="tel:04294226262">04294 – 226262</a>
                  </p>
                  <p>
                    <strong>Mr.D.Vijay Anand</strong>
                    <br />
                    Assistant Training Officer
                    <br />
                    Mobile: <a href="tel:9942013143">9942013143</a>
                  </p>
                  <p>
                    <strong>Mr.B.Bizu</strong>
                    <br />
                    Assistant Training Officer
                    <br />
                    Mobile: <a href="tel:9865165228">9865165228</a>
                  </p>
                  <p>
                    <strong>Communication Address:</strong>
                    <br />
                    Training Cell,
                    <br />
                    Kongu Engineering College,
                    <br />
                    Perundurai, Erode – 638 060,
                    <br />
                    Tamil Nadu, India.
                    <br />
                    Ph: <a href="tel:04294226262">04294 - 226 262</a>
                    <br />
                    Fax: 04294 – 220087
                    <br />
                    Email: <br />
                    <a href="mailto:training@kongu.edu">
                      training@kongu.edu
                    </a>{" "}
                    <br />{" "}
                    <a href="mailto:training@kongu.ac.in">
                      training@kongu.ac.in
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default PlacementSection;
