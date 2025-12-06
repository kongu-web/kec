import React from "react";
import "./WomenHelpLine.css";
import Navbar from "../../../HomePage/navbar/Navbar";
import Section from "../../../HomePage/Section/Section";
import Footer from "../../../HomePage/Footer/Footer";
import ScrollToTopButton from "../../../ScrollToTopButton";

const WomenHelpLine = () => {
  return (
    <>
      <Navbar />
      <Section title="24x7 Women Help Line" />
      <div className="womenhelp-container">
        <p className="womenhelp-description">
          24x7 Women Help Line is reconstituted with the following members:
        </p>
        <div className="table-wrapper">
          <table className="womenhelp-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Mobile Number</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Dr. R. R. Rajalakshmi (CSE)</td>
                <td>9486561199</td>
              </tr>
              {/* <tr>
                <td>Dr. R. Meenakumari (EEE)</td>
                <td>9443127506</td>
              </tr> */}
              <tr>
                <td>Dr. S. Varadhaganapathy (IT)</td>
                <td>9443034110</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <ScrollToTopButton />
      <Footer />
    </>
  );
};

export default WomenHelpLine;
