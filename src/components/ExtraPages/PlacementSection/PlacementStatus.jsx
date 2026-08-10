import React, { useState, useEffect } from "react";
import "./PlacementStatus.css";

const placementFiles = require.context(
  "../../../assets/docs/Placement/Placement Status",
  false,
  /\.json$/
);

const PlacementStatus = () => {
  const [year, setYear] = useState("");
  const [availableYears, setAvailableYears] = useState([]);
  const [data, setData] = useState(null);

  useEffect(() => {
    const yearList = placementFiles.keys().map((path) => {
      const match = path.match(/status-(\d{4}-\d{4})\.json$/);
      if (match) return match[1];
      return null;
    }).filter(Boolean)
      .sort((a, b) => {
        const aStart = parseInt(a.split("-")[0]);
        const bStart = parseInt(b.split("-")[0]);
        return bStart - aStart;
      });

    setAvailableYears(yearList);
    if (yearList.length > 0) setYear(yearList[0]);
  }, []);

  useEffect(() => {
    if (!year) return;

    const filePath = `./status-${year}.json`;

    try {
      const rawData = placementFiles(filePath);
      const fileData = rawData?.default ? rawData.default : rawData;
      setData(fileData);
    } catch (err) {
      console.error("Error loading data for year:", year, err);
    }
  }, [year]);

  const renderSummary = () => {
    if (!data) return null;

    const summary = data.summary || {
      offers: data.companies
        ? data.companies.reduce((acc, c) => acc + (c.offers || 0), 0)
        : 0,
      placed: null,
      companies: data.companies ? data.companies.length : 0,
    };

    const offersVal = summary.offers ?? 0;
    const placedVal =
      summary.placed !== null && summary.placed !== undefined
        ? summary.placed
        : summary.offers
        ? summary.offers
        : "N/A";
    const companiesVal = summary.companies ?? 0;

    return (
      <div className="status-summary-boxes">
        <div className="status-box box-offers">
          <div className="box-icon-circle icon-blue">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
            </svg>
          </div>
          <div className="box-divider"></div>
          <div className="box-content">
            <span className="box-title">Total Offers</span>
            <span className="box-value val-blue">{offersVal}</span>
          </div>
        </div>

        <div className="status-box box-placed">
          <div className="box-icon-circle icon-green">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </div>
          <div className="box-divider"></div>
          <div className="box-content">
            <span className="box-title">Students Placed</span>
            <span className="box-value val-green">{placedVal}</span>
          </div>
        </div>

        <div className="status-box box-companies">
          <div className="box-icon-circle icon-navy">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 21h18"></path>
              <path d="M6 18V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v14"></path>
              <path d="M9 7h2"></path>
              <path d="M9 11h2"></path>
              <path d="M9 15h2"></path>
              <path d="M13 7h2"></path>
              <path d="M13 11h2"></path>
              <path d="M13 15h2"></path>
            </svg>
          </div>
          <div className="box-divider"></div>
          <div className="box-content">
            <span className="box-title">Companies Visited</span>
            <span className="box-value val-navy">{companiesVal}</span>
          </div>
        </div>
      </div>
    );
  };

  const renderCompaniesTable = () => {
    if (data?.companies) {
      return (
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
                <td>{company.name}</td>
                <td>{company.offers}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    }
    return null;
  };
  return (
    <div className="placement-status-wrapper">
      <div className="status-header">
        <h2>Placement Status {year === availableYears[0] && "(As on August,2026*)"}</h2>
        <div className="status-select-wrapper">
          <select value={year} onChange={(e) => setYear(e.target.value)}>
            {availableYears.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </div>
      </div>
      {renderSummary()}
      {renderCompaniesTable()}
    </div>
  );
};

export default PlacementStatus;
