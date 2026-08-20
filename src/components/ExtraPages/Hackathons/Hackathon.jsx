import React, { useEffect, useState } from "react";
import "./Hackathon.css";
import eventData from "../../../assets/docs/Knowafest/details.json";
import Footer from "../../HomePage/Footer/Footer";
import Section from "../../HomePage/Section/Section";
import Navbar from "../../HomePage/navbar/Navbar";

// Helper to parse dates including ranges like "September 7 - 11 2026" or "July 17 - 18 2026"
const parseEventDate = (dateStr) => {
  if (!dateStr || dateStr.trim() === "-" || dateStr.trim().toLowerCase() === "n/a") {
    return 0;
  }

  const cleanStr = dateStr.trim();

  // Pattern: "Month D1 - D2 Year" e.g., "July 17 - 18 2026", "September 7 - 11 2026"
  const rangeMatch = cleanStr.match(/^([A-Za-z]+)\s+(\d{1,2})\s*-\s*(\d{1,2})\s+(\d{4})$/);
  if (rangeMatch) {
    const [, month, startDay, , year] = rangeMatch;
    const parsed = new Date(`${month} ${startDay}, ${year}`).getTime();
    if (!isNaN(parsed)) return parsed;
  }

  // Pattern: "Month1 D1 - Month2 D2 Year" e.g., "July 30 - August 2 2026"
  const multiMonthMatch = cleanStr.match(/^([A-Za-z]+)\s+(\d{1,2})\s*-\s*([A-Za-z]+)\s+(\d{1,2})\s+(\d{4})$/);
  if (multiMonthMatch) {
    const [, month1, day1, , , year] = multiMonthMatch;
    const parsed = new Date(`${month1} ${day1}, ${year}`).getTime();
    if (!isNaN(parsed)) return parsed;
  }

  // Pattern: "Month Day Year" e.g., "July 18 2026", "July 4 2026"
  const singleMatch = cleanStr.match(/^([A-Za-z]+)\s+(\d{1,2})\s+(\d{4})$/);
  if (singleMatch) {
    const [, month, day, year] = singleMatch;
    const parsed = new Date(`${month} ${day}, ${year}`).getTime();
    if (!isNaN(parsed)) return parsed;
  }

  const fallback = Date.parse(cleanStr);
  return isNaN(fallback) ? 0 : fallback;
};

const Hackathon = () => {
  const [events, setEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortField, setSortField] = useState("dates");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    setEvents(eventData);
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filteredEvents = events
    .filter((event) =>
      Object.values(event).some((val) =>
        String(val).toLowerCase().includes(searchTerm.toLowerCase())
      )
    )
    .sort((a, b) => {
      if (sortField === "dates") {
        const dateA = parseEventDate(a.dates);
        const dateB = parseEventDate(b.dates);
        return dateB - dateA; // Latest date first (descending order)
      } else {
        const aField = a[sortField]?.toLowerCase?.() || "";
        const bField = b[sortField]?.toLowerCase?.() || "";
        return aField.localeCompare(bField);
      }
    });

  const openModal = (imgSrc) => setModalImage(imgSrc);
  const closeModal = () => setModalImage(null);

  return (
    <>
      {/* <Section/> */}
      <Navbar />
      <div className="hackathon-container">
        <h1 className="hackathon-title">Hackathons & Events</h1>
        <div className="hackathon-controls">
          <input
            type="text"
            placeholder="Search events..."
            className="hackathon-search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="hackathon-sort"
            value={sortField}
            onChange={(e) => setSortField(e.target.value)}
          >
            <option value="name">Sort by Name</option>
            <option value="department">Sort by Department</option>
            <option value="dates">Sort by Date (Recent first)</option>
          </select>
        </div>

        {!isMobile ? (
          <div className="hackathon-table-wrapper">
            <table className="hackathon-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Department</th>
                  <th>Venue</th>
                  <th>Dates</th>
                  <th>Description</th>
                  <th>Poster</th>
                  <th>Link</th>
                </tr>
              </thead>
              <tbody>
                {filteredEvents.map((event, index) => (
                  <tr key={index}>
                    <td>{event.name}</td>
                    <td>{event.department}</td>
                    <td>{event.venue}</td>
                    <td>{event.dates}</td>
                    <td>{event.description}</td>
                    <td>
                      {event.poster ? (
                        <img
                          src={event.poster}
                          alt="poster"
                          className="event-poster"
                          onClick={() => openModal(event.poster)}
                          style={{ cursor: "pointer" }}
                        />
                      ) : (
                        "N/A"
                      )}
                    </td>
                    <td>
                      {event.link ? (
                        <a
                          href={event.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View
                        </a>
                      ) : (
                        "N/A"
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="hackathon-cards-wrapper">
            {filteredEvents.map((event, index) => (
              <div className="hackathon-card" key={index}>
                <h3>{event.name}</h3>
                <p>
                  <strong>Department:</strong> {event.department}
                </p>
                <p>
                  <strong>Venue:</strong> {event.venue}
                </p>
                <p>
                  <strong>Date:</strong> {event.dates}
                </p>
                <p>
                  <strong>Description:</strong> {event.description}
                </p>
                {event.poster && (
                  <img
                    src={event.poster}
                    alt="poster"
                    className="card-poster"
                    onClick={() => openModal(event.poster)}
                    style={{ cursor: "pointer" }}
                  />
                )}
                {event.link && (
                  <a
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Details
                  </a>
                )}
              </div>
            ))}
          </div>
        )}

        {modalImage && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeModal}>
                &times;
              </button>
              <img src={modalImage} alt="Full View" className="modal-image" />
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Hackathon;
