import React, { useEffect, useState } from "react";
import "./HeadoftheInstitution.css";
import Section from "../../HomePage/Section/Section";
import Navbar from "../../HomePage/navbar/Navbar";
import Footer from "../../HomePage/Footer/Footer";
import ScrollToTopButton from "../../ScrollToTopButton";
import ProfilePic from "../../../assets/images/principal.jpg";
import Spinner from "../../Spinner";
import "../../../App.css";

const HeadoftheInstitution = () => {
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
      <div className="profile-container">
        <div className="profile-header">
          <img src={ProfilePic} alt="Principal" className="profile-image" />
          <div className="profile-details">
            <h2 className="page-title">Dr.R.Parameshwaran</h2>
            <p className="profile-title">
              Principal, Kongu Engineering College
            </p>
            {/* <p className="profile-location">@KEC</p> */}
          </div>
        </div>

        <div className="profile-bio">
          <h3 className="page-sub_title">Head of the Institution</h3>
          <p>
            Dr. R. Parameshwaran is a distinguished academician, prolific
            researcher, and innovation-driven educator with 25 years of
            experience in Engineering Education and Applied Research. He
            completed his B.E. degree in Mechanical Engineering from Madras
            University, M.E. in Industrial Engineering from NIT Trichy, and
            Ph.D. in Mechanical Engineering from Anna University, Chennai. His
            academic and research contributions span diverse fields including
            New Product Development, Quality Engineering, Intelligent Systems,
            and Advanced Manufacturing Processes.
          </p>
          <p>
            He has published 65 research papers in reputed international
            journals, including 45 SCI-indexed publications, and presented over
            70 papers at national and international conferences. He has also
            authored 4 book chapters and successfully completed 7 funded R&D
            projects with a financial outlay of Rs.2.86 crores from leading
            bodies including AICTE, UGC, DST, and MSME with the most notable
            being the on-going DST-funded project on “Development of an
            intelligent powder-based 3D metal printer”. He has guided 10 Ph.D.
            scholars under Anna University and continues to mentor researchers
            and students in areas such as composite materials, welding, and
            optimization. A strong proponent of industry-academia collaboration,
            he has executed 11 consultancy projects and organized 8 funded
            programs, along with several national and international conferences.
          </p>
          <p>
            Dr. R. Parameshwaran served as the Head of the Department of
            Mechatronics Engineering at Kongu Engineering College, from 2010 to
            2019, where he spearheaded academic, research, and industry-aligned
            initiatives. A dynamic leader in innovation and entrepreneurship
            development, he has been heading the Technology Business Incubator
            (TBI) at KEC since 2020 and also been serving as the President of
            the Institution’s Innovation Council (IIC) since 2018. Under his
            headship, TBI@KEC secured funding under prestigious national schemes
            such as NIDHI-PRAYAS, NIDHI-EIR, and the MSME Incubation Scheme,
            attracting over ₹7.5 crores of grants and supporting more than 60
            start-ups. He has also been leading the Placement and Training Cell
            at KEC since 2021. Under his leadership, nearly 300 companies
            conduct recruitment drives annually, resulting in an average of 1250
            student placements each year.
          </p>
          <p>
            His accolades include the Best Faculty Award, the Best Performing
            Placement Team Award, and multiple Best Department Awards for his
            academic and industry-linked excellence. As a Certified Innovation
            Ambassador, he continues to inspire a culture of creativity,
            research, innovation, and impact-driven education throughout the
            institution.
          </p>
        </div>
      </div>
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default HeadoftheInstitution;
