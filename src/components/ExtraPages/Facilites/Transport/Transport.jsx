import React, { useEffect, useState } from "react";
import "./Transport.css";
import Section from "../../../HomePage/Section/Section";
import Navbar from "../../../HomePage/navbar/Navbar";
import Footer from "../../../HomePage/Footer/Footer";
import ScrollToTopButton from "../../../ScrollToTopButton";
import Spinner from "../../../Spinner";

const collegeRoutes = [
  ["Erode - College", "20 Buses"],
  ["Sathyamangalam - College", "2 Buses"],
  ["Gobi - College", "6 Buses"],
  ["Athani - College", "2 Buses"],
  ["Anthiyur - College", "2 Buses"],
  ["Komarapalayam - College", "2 Buses"],
  ["Bhavani - College", "2 Buses"],
  ["Ammapettai - College", "1 Bus"],
  ["Edapadi - College", "1 Bus"],
  ["Sankagiri - College", "2 Buses"],
  ["Tiruchengode - College", "3 Buses"],
  ["SPB Colony - College", "2 Buses"],
  ["Kodumudi - College", "1 Bus"],
  ["Vellakovil - College", "1 Bus"],
  ["Kangeyam - College", "3 Buses"],
  ["Palladam - College", "1 Bus"],
  ["Tiruppur - College", "13 Buses"],
  ["Avinashi - College", "1 Bus"],
  ["Nambiyur - College", "1 Bus"],
  ["Appakoodal - College", "1 Bus"],
  ["Chennimalai - College", "2 Buses"],
  ["Sivagiri - College", "2 Buses"],
  ["Nathakadiyur - College", "1 Bus"],
  ["Thandapalayam - College", "1 Bus"],
  ["Getticheviyur - College", "1 Bus"],
  ["Perundurai Bus Stand - College", "7 Buses"],
];

const publicRoutes = [
  [
    "From Erode to Perundurai (Via - KEC Arch)",
    "Route Nos. 18, 39, 39-A, 20-B",
  ],
  ["From Kodumudi (Via - Vellode, KEC Arch)", "Kongu Raja Bus Service"],
  ["From Modakkurichi (Via - Vellode, KEC Arch)", "Route No. P-9"],
  ["From Perundurai (Via - KEC)", "Mini Bus Services"],
];

const Transport = () => {
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
      <div className="transport-container">
        <h2 className="transport-title">College Transport Facilities</h2>

        <div className="transport-section">
          <h3>Routes</h3>
          <ul className="transport-list">
            {collegeRoutes.map(([route, count], index) => (
              <li key={index}>
                <span>{route}</span>
                <span>{count}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="transport-section">
          <h3>Public Transport Facilities Serving the Campus</h3>
          <ul className="transport-list">
            {publicRoutes.map(([route, detail], index) => (
              <li key={index}>
                <span>{route}</span>
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="transport-extra">
          <p>
            <strong>Frequent trips</strong> between Perundurai and College from{" "}
            <strong>7.40 A.M. to 8.20 P.M.</strong> and{" "}
            <strong>4.15 P.M. to 7.15 P.M.</strong>
          </p>
          <p>
            <strong>Location:</strong> 3.00 Kms. from Perundurai Bus Stand on
            the way to Perundurai Railway Station.
          </p>
          <p>
            <strong>Nearest Railway Junction:</strong> Erode Junction (18 Kms.)
          </p>
          <p>
            <strong>Nearest Airport:</strong> Coimbatore (70 Kms.)
          </p>
        </div>
      </div>
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default Transport;
