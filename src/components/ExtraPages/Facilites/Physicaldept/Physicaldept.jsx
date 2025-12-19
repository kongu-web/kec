import React, { useState, useEffect } from "react";
import "./Physicaldept.css";
import Spinner from "../../../Spinner";

import achi2015 from "../../../../assets/docs/Sports/Achievements 2015-16.pdf";
import achi2016 from "../../../../assets/docs/Sports/Achievements 2016-17.pdf";
import achi2017 from "../../../../assets/docs/Sports/Achievements 2017-18.pdf";
import achi2018 from "../../../../assets/docs/Sports/Achievements 2018-19.pdf";
import achi2019 from "../../../../assets/docs/Sports/Achievements 2019-20.pdf";
import achi2021 from "../../../../assets/docs/Sports/Achievement_2021_2022.pdf";
import achi2022 from "../../../../assets/docs/Sports/Achievement_2022_23.pdf";
import achi2023 from "../../../../assets/docs/Sports/Achievement 2023-2024.pdf";
import Footer from "../../../HomePage/Footer/Footer";
import ScrollToTopButton from "../../../ScrollToTopButton";
import Section from "../../../HomePage/Section/Section";
import Navbar from "../../../HomePage/navbar/Navbar";

const achievements = [
  { year: "2015-16", file: achi2015 },
  { year: "2016-17", file: achi2016 },
  { year: "2017-18", file: achi2017 },
  { year: "2018-19", file: achi2018 },
  { year: "2019-20", file: achi2019 },
  { year: "2021-22", file: achi2021 },
  { year: "2022-23", file: achi2022 },
  { year: "2023-24", file: achi2023 },
];

// Dynamically import all images from the folder
const scrollerImages = require
  .context(
    "../../../../assets/images/PhysicalDept/Scroller",
    false,
    /\.(png|jpe?g|svg)$/
  )
  .keys()
  .map((image) =>
    require(`../../../../assets/images/PhysicalDept/Scroller/${image.replace(
      "./",
      ""
    )}`)
  );

const Physicaldept = () => {
  const [activeSection, setActiveSection] = useState("Home");

  const handleNavClick = (section) => {
    setActiveSection(section);
  };

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
      <div className="physical-wrapper">
        <h1 className="physical-title">Department of Physical Education</h1>

        <nav className="physical-nav">
          {[
            "Home",
            "Facilities",
            "Activities Calendar",
            "Gallery",
            "Achievements",
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleNavClick(item)}
              className={`phy-nav-button ${
                activeSection === item ? "active" : ""
              }`}
            >
              {item}
            </button>
          ))}
        </nav>

        {activeSection === "Home" && (
          <section className="physical-section" id="home">
            <p>
              The Department of Physical Education aims to instill the spirit of
              sportsmanship in technical students, helping them learn
              discipline, leadership, teamwork, and encouraging participation in
              sports and games to lead a healthy life. The department is
              well-equipped with all facilities for both indoor and outdoor
              games and events.
            </p>
            <p>
              Our college encourages students admitted under the sports quota by
              providing full free education along with free boarding and lodging
              for 15 students every year.
            </p>
            <p>
              To promote sports activities, we conduct the{" "}
              <strong>Kongu Trophy</strong> — a state-level inter-collegiate
              tournament in ten disciplines for both men and women. We also
              organize coaching camps for Badminton, Basketball, Tennis, Table
              Tennis, Volleyball, Football, Hockey, Kabaddi, and Athletics teams
              of our institution every year.
            </p>

            <h3> Highlights</h3>
            <div className="autoscroll-gallery">
              <div className="scroll-track">
                {scrollerImages.map((imgSrc, i) => (
                  <div className="scroll-image" key={i}>
                    <img src={imgSrc} alt={`Scroller ${i + 1}`} />
                  </div>
                ))}
              </div>
            </div>

            <h3>Vision</h3>
            <p>
              To strive for the centre of excellence in sports and to develop
              the overall personality of students for the country and beyond.
            </p>

            <h3>Mission</h3>
            <p>
              We are committed to promoting sports in the institution by
              providing excellent sports facilities and systematic coaching
              programs to bring out sports talents and make them physically and
              mentally strong engineering professionals ready to thrive in a
              competitive world.
            </p>

            <h3>Facilities Available</h3>
            <ul>
              <li>Indoor Stadium</li>
              <li>Basketball Court</li>
              <li>Volleyball Court</li>
              <li>Playground</li>
              <li>Track</li>
              <li>Gym</li>
            </ul>

            <h3>Staff</h3>
            <ul>
              <li>
                <strong>Professor-Incharge:</strong>
                <br /> Dr. K. Kannan, M.Tech, Ph.D
              </li>
              <li>
                <strong>Director of Physical Education:</strong>
                <br /> Dr. R. Jeyaraman, M.P.Ed, M.Phil, Ph.D
              </li>
              <li>
                <strong>Assistant Physical Director:</strong>
                <br /> Mr. V. Kannan, M.P.Ed, M.Phil
              </li>
              <li>
                <strong>Assistant Physical Director:</strong>
                <br /> Ms. D. Pavithra, M.P.Ed
              </li>
            </ul>

            <h3>Contact</h3>
            <p>
              <strong>Phone:</strong> 04294 226640
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:pd@kongu.ac.in">pd@kongu.ac.in</a>
            </p>
          </section>
        )}

        {activeSection === "Facilities" && (
          <section className="physical-section" id="facilities">
            <h2>Facilities</h2>

            <div className="facilities-table">
              <table>
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Outdoor Facilities</th>
                    <th>Nos</th>
                    <th>Indoor Facilities</th>
                    <th>Nos</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Acupressure Walk Way</td>
                    <td>01</td>
                    <td>Badminton Court</td>
                    <td>03</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Athletic Track - 400 MTS</td>
                    <td>01</td>
                    <td>Table Tennis</td>
                    <td>06</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Ball Badminton with Flood Light</td>
                    <td>01</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Basketball Court with Flood Light</td>
                    <td>03</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Cricket Field</td>
                    <td>01</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>Cricket Nets (Concrete)</td>
                    <td>02</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>Football Field</td>
                    <td>01</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>Hockey Field</td>
                    <td>01</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td>Handball Court</td>
                    <td>01</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td>Kabaddi Court with Flood Light</td>
                    <td>01</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>11</td>
                    <td>Kho Kho Court</td>
                    <td>01</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>12</td>
                    <td>Obstacle Race</td>
                    <td>01</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>13</td>
                    <td>Roman Ring</td>
                    <td>01</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>14</td>
                    <td>Tennikoit Court</td>
                    <td>03</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>15</td>
                    <td>Tennis Clay Court with Flood Light</td>
                    <td>02</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>16</td>
                    <td>Tennis Wall Practice</td>
                    <td>01</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>17</td>
                    <td>Volleyball Court with Flood Light</td>
                    <td>03</td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="facilities-notes">
              <p>
                <strong>Total area of play field:</strong> 8 acres
              </p>
              <p>
                <strong>Total area of indoor stadium:</strong> 1002 sq. m
              </p>
              <p>
                The college provides a well-equipped fitness centre for both men
                and women exclusively.
              </p>
            </div>

            <div className="sports-list">
              <h3>Sports Facilities</h3>
              <ul>
                <li>Acupressure Walk</li>
                <li>Athletics</li>
                <li>Badminton Court</li>
                <li>Ball Badminton Court</li>
                <li>Basketball Court</li>
                <li>Basketball Court (Synthetic)</li>
                <li>Cricket Field</li>
                <li>Cricket Nets</li>
                <li>Football Field</li>
                <li>Handball Court</li>
                <li>Hockey Field</li>
                <li>Kabaddi Court</li>
                <li>Kho Kho Court</li>
                <li>Roman Ring</li>
                <li>Table Tennis</li>
                <li>Tennis Court</li>
                <li>Tennis Wall Practice</li>
                <li>Volleyball Court</li>
                <li>Fitness Centre</li>
              </ul>
            </div>
          </section>
        )}

        {activeSection === "Activities Calendar" && (
          <section id="activities-calendar" className="physical-section">
            <h2>Activities Calendar</h2>
            <div className="activities-table">
              <h3>Annual Activities</h3>
              <table>
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Month</th>
                    <th>Activities</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>JUNE</td>
                    <td>
                      General practice for Anna University Zone sports
                      activities
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>JULY</td>
                    <td>
                      Selection trials for all the games and finalizing the team
                      members
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>AUGUST</td>
                    <td>
                      Anna University Zone Tournament participation & Inter
                      collegiate invitation tournament
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>SEPTEMBER</td>
                    <td>
                      KONGU TROPHY & Anna University Zone Tournament and
                      preparation of Anna University Inter zone Tournament
                    </td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>OCTOBER</td>
                    <td>Anna University Interzone Tournament</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>NOVEMBER</td>
                    <td>Anna University Interzone Tournament</td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>DECEMBER</td>
                    <td>
                      KONGU Alumni Trophy in Football, Hockey, Kho-Kho and
                      Invitation tournament preparation for CENTIES & Inter
                      University tournament
                    </td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>JANUARY</td>
                    <td>CENTIES and Invitation tournaments</td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td>FEBRUARY</td>
                    <td>
                      CENTIES & Intramural activities for students & staff
                    </td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td>MARCH</td>
                    <td>
                      Intramural activities for students & staff and SPORTS DAY
                      celebrations
                    </td>
                  </tr>
                  <tr>
                    <td>11</td>
                    <td>APRIL</td>
                    <td>
                      Call for sports quota selection trials, ground maintenance
                      work (if any) and stock verification
                    </td>
                  </tr>
                  <tr>
                    <td>12</td>
                    <td>MAY</td>
                    <td>Sports quota selection trials</td>
                  </tr>
                </tbody>
              </table>

              <h3>Extramural Tournaments Organized</h3>
              <table>
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Name of the Tournament</th>
                    <th>Month (Tentative)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Kongu Trophy (State Level)</td>
                    <td>Second Weekend of September</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Hockey Alumni Trophy (State Level)</td>
                    <td>December/February</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Football Alumni Trophy (State Level)</td>
                    <td>December/February</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Kho-Kho Alumni Trophy (District Level)</td>
                    <td>December/February</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>AUSB Zone Tournament (2 or 3 Games)</td>
                    <td>September or October</td>
                  </tr>
                </tbody>
              </table>

              <h3>Extramural Activities Participated</h3>
              <table>
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Name of the Tournament</th>
                    <th>Month (Tentative)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>AUSB Zone Tournament (District Level)</td>
                    <td>Last week of July to First Week of October</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>AUSB Inter Zone Tournament (State Level)</td>
                    <td>September to December</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>
                      M.Kumarasamy Alumni (KITS), JCI Trophy, & KCT Trophy
                      (State Level)
                    </td>
                    <td>August</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>CENTIES (District Level)</td>
                    <td>Last Week of January & February</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>M.Kumarasamy Trophy (State Level)</td>
                    <td>First Week of March</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>PSG Tech Trophy (State Level)</td>
                    <td>Last Week of February</td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>Kongu Arts College Trophy (District Level)</td>
                    <td>January</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        )}

        {activeSection === "Gallery" && (
          <section className="physical-gallery" id="gallery">
            <h2>Gallery</h2>
            <div className="gallery-grid">
              {[
                "All India Winner - Tennis",
                "Anna University OverAll Winner",
                "Athletic Zone Winner",
                "Badminton Inter Zone Runner",
                "Badminton Zone Runner",
                "Badminton Zone Winner",
                "Basketball Zone Winner",
                "Basketball Zone Winner",
                "Football Zone Third Position",
                "Handball Inter Zone Runner",
                "Handball Inter Zone Winner",
                "Handball MKCE Trophy Winner",
                "Handball Zone Winner",
                "Hockey Zone Winner",
                "KhoKho Zone Runner",
                "Table Tennis Inter Zone Runner",
                "Table Tennis Zone Winner",
                "Tennis Khelo India Winner",
                "Tennis Zone Winner",
                "Volleyball Zone and Inter Zone Winner",
                "Volleyball Zone Winner",
                "Kongu Trophy Chief Guest 2022",
                "Kongu Trophy Chief Guest 2023",
                "Kongu Trophy",
                "Kongu Trophy",
                "Kongu Trophy",
                "Kongu Trophy",
                "Kongu Trophy",
                "Kongu Trophy",
                "Kongu Trophy",
                "Kongu Trophy",
                "Kongu Trophy",
                "Kongu Trophy",
                "Kongu Trophy",
                "Sports Day",
                "Sports Day March Past",
                "Sports Day Events",
                "Sports Day",
              ].map((title, i) => (
                <div className="gallery-item" key={i}>
                  <img
                    src={require(`../../../../assets/images/PhysicalDept/Achievements/achievement-${
                      i + 1
                    }.jpg`)}
                    alt={title}
                  />
                  <p>{title}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeSection === "Achievements" && (
          <div className="achievements-section">
            <h2>Achievements</h2>
            <div className="achievements-table">
              <table>
                <thead>
                  <tr>
                    <th>Year</th>
                    <th>Download</th>
                  </tr>
                </thead>
                <tbody>
                  {achievements.map((item, index) => (
                    <tr key={index}>
                      <td>{item.year}</td>
                      <td>
                        <a href={item.file} download className="download-btn">
                          Click Here
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default Physicaldept;
