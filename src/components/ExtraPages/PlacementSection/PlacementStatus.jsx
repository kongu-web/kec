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
      if (path.includes("historicaldata")) return "2004-2009"; 
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

    let filePath;
    if (year === "2004-2009") {
      filePath = "./historicaldata.json";
    } else {
      filePath = `./status-${year}.json`;
    }

    try {
      const fileData = placementFiles(filePath);
      setData(fileData);
    } catch (err) {
      console.error("Error loading data for year:", year, err);
    }
  }, [year]);

  const renderSummary = () => {
    if (data?.summary) {
      return (
        <div className="status-summary">
          <p><strong>Total Offers:</strong> {data.summary.offers}</p>
          <p><strong>Students Placed:</strong> {data.summary.placed}</p> 
          <p><strong>Companies Visited:</strong> {data.summary.companies}</p>
        </div>
      );
    } else if (data?.historical) {
      return data.historical.map((entry, index) => (
        <div className="historical-summary" key={index}>
          <h4>{entry.year}</h4>
          <p><strong>Companies Visited:</strong> {entry.visited}</p>
          <p><strong>Hit Rate:</strong> {entry.hit_rate}</p>
          <table className="status-table">
            <thead>
              <tr>
                <th>Department</th>
                <th>Students Placed</th>
                <th>Placement %</th>
              </tr>
            </thead>
            <tbody>
              {entry.departments.map((dept, i) => (
                <tr key={i}>
                  <td>{dept.name}</td>
                  <td>{dept.placed}</td>
                  <td>{dept.percentage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ));
    }

    return null;
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
        <h2>Placement Status (As on December,2025)</h2>
        <select value={year} onChange={(e) => setYear(e.target.value)}>
          {availableYears.map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>
      </div>
      {renderSummary()}
      {renderCompaniesTable()}
    </div>
  );
};

export default PlacementStatus;
