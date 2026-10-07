import React, { useState, useEffect, useRef } from "react";
import "./PlacementStatus.css";

const API_URL = process.env.REACT_APP_API_URL || '';

const PlacementStatus = () => {
  const [year, setYear] = useState("");
  const [availableYears, setAvailableYears] = useState([]);
  const [data, setData] = useState(null);
  const [dbSummaries, setDbSummaries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on click outside or escape key
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isDropdownOpen]);

  useEffect(() => {
    const loadYears = async () => {
      setLoading(true);
      setError("");
      try {
        const res = await fetch(`${API_URL}/kec/placement-summary`);
        if (res.ok) {
          const fetchedSummaries = await res.json();
          setDbSummaries(fetchedSummaries);
          
          const dbYears = fetchedSummaries.map((s) => s.year).sort((a, b) => {
            const aStart = parseInt(a.split("-")[0]);
            const bStart = parseInt(b.split("-")[0]);
            return bStart - aStart; // latest year first
          });

          setAvailableYears(dbYears);
          if (dbYears.length > 0) {
            setYear(dbYears[0]);
          } else {
            setData(null);
          }
        } else {
          setError("Failed to fetch placement summaries.");
        }
      } catch (err) {
        console.error("Error fetching placement summaries from DB:", err);
        setError("Error connecting to server.");
      } finally {
        setLoading(false);
      }
    };

    loadYears();
  }, []);

  useEffect(() => {
    if (!year) {
      setData(null);
      return;
    }

    const fetchYearData = async () => {
      setLoading(true);
      setError("");
      const dbMatch = dbSummaries.find((s) => s.year === year);
      if (dbMatch) {
        try {
          const res = await fetch(`${API_URL}/kec/placement-summary/${dbMatch.id}`);
          if (res.ok) {
            const details = await res.json();
            setData(details);
          } else {
            setError("Failed to load details for " + year);
          }
        } catch (err) {
          console.error("Error fetching details for year from DB:", year, err);
          setError("Error loading details from server.");
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    fetchYearData();
  }, [year, dbSummaries]);

  const getPlacementHeading = (yr) => {
    if (!yr) return "Placement Status";

    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.toLocaleString("en-US", { month: "long" });

    const yrStr = String(yr).trim();
    const isCurrentYear = yrStr.includes(String(currentYear));

    if (isCurrentYear) {
      return `Placement Status (As on ${currentMonth}, ${currentYear}*)`;
    }

    return "Placement Status";
  };

  const renderSummary = () => {
    if (data?.summary) {
      const offersVal = data.summary.offers !== null && data.summary.offers !== undefined && data.summary.offers !== "" ? data.summary.offers : "-";
      const placedVal = data.summary.placed !== null && data.summary.placed !== undefined && data.summary.placed !== "" ? data.summary.placed : "-";
      const companiesVal = data.summary.companies !== null && data.summary.companies !== undefined && data.summary.companies !== "" ? data.summary.companies : "-";

      return (
        <div className="status-metric-cards-grid">
          {/* Card 1: Total Offers */}
          <div className="status-metric-card">
            <div className="metric-icon-circle blue-circle">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
              </svg>
            </div>
            <div className="metric-info">
              <span className="metric-label">Total Offers</span>
              <div className="metric-number color-blue">{offersVal}</div>
            </div>
          </div>

          {/* Card 2: Students Placed */}
          <div className="status-metric-card">
            <div className="metric-icon-circle green-circle">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <div className="metric-info">
              <span className="metric-label">Students Placed</span>
              <div className="metric-number color-green">{placedVal}</div>
            </div>
          </div>

          {/* Card 3: Companies Visited */}
          <div className="status-metric-card">
            <div className="metric-icon-circle indigo-circle">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 21h18"/>
                <path d="M9 8h1"/>
                <path d="M9 12h1"/>
                <path d="M9 16h1"/>
                <path d="M14 8h1"/>
                <path d="M14 12h1"/>
                <path d="M14 16h1"/>
                <path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"/>
              </svg>
            </div>
            <div className="metric-info">
              <span className="metric-label">Companies Visited</span>
              <div className="metric-number color-indigo">{companiesVal}</div>
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  const formatOffers = (val) => {
    if (val === null || val === undefined) return "-";
    const str = String(val).trim();
    if (str === "" || str === "0" || str === "-" || str === "null" || Number(str) === 0) {
      return "-";
    }
    return val;
  };

  const renderCompaniesTable = () => {
    if (data?.companies && data.companies.length > 0) {
      return (
        <div className="status-table-container">
          <table className="status-table">
            <thead>
              <tr>
                <th>Company Name</th>
                <th>No. of Offers</th>
              </tr>
            </thead>
            <tbody>
              {data.companies.map((company, index) => (
                <tr key={index}>
                  <td className="company-cell">{company.name}</td>
                  <td className="offers-cell">{formatOffers(company.offers)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="placement-status-wrapper">
      <div className="status-top-bar">
        <h2 className="status-main-heading">
          {getPlacementHeading(year)}
        </h2>

        {availableYears.length > 0 && (
          <div className="custom-year-dropdown-container" ref={dropdownRef}>
            <div
              className="year-select-moving-border"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setIsDropdownOpen(!isDropdownOpen);
                }
              }}
              title="Select Academic Year"
            >
              <span className="year-border-spin"></span>
              <div className="year-select-inner">
                <span className="selected-year-text">{year}</span>
                <span className={`select-dropdown-arrow ${isDropdownOpen ? "open" : ""}`}>▼</span>
              </div>
            </div>

            {isDropdownOpen && (
              <div className="custom-year-dropdown-menu">
                {availableYears.map((y) => (
                  <div
                    key={y}
                    className={`custom-year-dropdown-item ${y === year ? "active" : ""}`}
                    onClick={() => {
                      setYear(y);
                      setIsDropdownOpen(false);
                    }}
                  >
                    <span>{y}</span>
                    {y === year && <span className="dropdown-item-check">✓</span>}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {loading ? (
        <div className="status-loading" style={{ textAlign: "center", padding: "40px 20px", color: "#666", fontSize: "16px" }}>
          Loading placement status...
        </div>
      ) : error ? (
        <div className="status-error" style={{ textAlign: "center", padding: "40px 20px", color: "red", fontSize: "16px" }}>
          {error}
        </div>
      ) : availableYears.length === 0 ? (
        <div className="status-empty" style={{ textAlign: "center", padding: "40px 20px", color: "#888", fontSize: "16px" }}>
          No placement records uploaded yet by admin.
        </div>
      ) : (
        <>
          {renderSummary()}
          {renderCompaniesTable()}
        </>
      )}
    </div>
  );
};

export default PlacementStatus;

