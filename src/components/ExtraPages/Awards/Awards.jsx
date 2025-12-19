import React, { useEffect, useState } from "react";
import "./Awards.css";
import Navbar from "../../HomePage/navbar/Navbar";
import Section from "../../HomePage/Section/Section";
import Footer from "../../HomePage/Footer/Footer";
import ScrollToTopButton from "../../ScrollToTopButton";
import Spinner from "../../Spinner";

const Awards = () => {
  const [pdfs, setPdfs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPDFs = async () => {
      const context = require.context(
        "../../../assets/docs/Awards",
        false,
        /\.pdf$/
      );
      let files = context.keys().map((key) => {
        const fullName = key.replace("./", "").replace(".pdf", "");
        const displayName = fullName.substring(3); // remove prefix
        return {
          name: displayName,
          original: fullName, // use this for sorting
          url: context(key),
        };
      });

      // Sort based on original name (with aa, ab...) in descending order
      files.sort((a, b) => b.original.localeCompare(a.original));

      setPdfs(files);
      setLoading(false);
    };

    fetchPDFs();
  }, []);

  return (
    <>
      {/* <Section/> */}
      <Navbar />
      <div className="awards-container">
        <h2 className="awards-heading">Awards & Recognitions</h2>
        {loading ? (
          <Spinner />
        ) : (
          <div className="awards-list">
            {pdfs.map((pdf, index) => (
              <a
                key={index}
                href={pdf.url}
                target="_blank"
                className="award-card"
              >
                {pdf.name}
              </a>
            ))}
          </div>
        )}
      </div>
      <ScrollToTopButton />
      <Footer />
    </>
  );
};

export default Awards;
