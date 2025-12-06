import React,{useState,useEffect} from 'react';
import './University.css';
import Section from '../../HomePage/Section/Section';
import Navbar from '../../HomePage/navbar/Navbar';
import Footer from '../../HomePage/Footer/Footer';
import ScrollToTopButton from '../../ScrollToTopButton';
import Spinner from '../../Spinner';

// Importing PDF files
import aff2025_26 from '../../../assets/docs/University/affiliation_2025_26.pdf';
import aff2024_25 from '../../../assets/docs/University/affiliation_2024_25.pdf';
import aff2023_24 from '../../../assets/docs/University/affiliation_2023_24.pdf';
import aff2022_23 from '../../../assets/docs/University/affiliation_2022_23.pdf';
import aff2021_22 from '../../../assets/docs/University/affiliation_2021_22.pdf';
import aff2020_21 from '../../../assets/docs/University/affiliation_2020_21.pdf';
import aff2019_20 from '../../../assets/docs/University/affiliation_2019_20.pdf';
import aff2018_19 from '../../../assets/docs/University/affiliation_2018_19.pdf';
import aff2017_18 from '../../../assets/docs/University/affiliation_2017_18.pdf';
import aff2016_17 from '../../../assets/docs/University/affiliation_2016_17.pdf';
import aff2015_16 from '../../../assets/docs/University/affiliation_2015_16.pdf';
import aff2014_15 from '../../../assets/docs/University/affiliation_2014_15.pdf';
import aff2013_14 from '../../../assets/docs/University/affiliation_2013_14.pdf';
import aff2012_13 from '../../../assets/docs/University/affiliation_2012_13.pdf';
import aff2011_12 from '../../../assets/docs/University/affiliation_2011_12.pdf';

import permAff2011_12 from '../../../assets/docs/University/permanent_affiliation_2011_12.pdf';
import permAff2012_13 from '../../../assets/docs/University/permanent_affiliation_2012_13.pdf';
import permAff2013_14 from '../../../assets/docs/University/permanent_affiliation_2013_14.pdf';
import permAff2013_14_10courses from '../../../assets/docs/University/permanent_affiliation_2013_14_10courses.pdf';
import permAff2014_15_ME_MTS from '../../../assets/docs/University/permanent_affiliation_2014_15_ME_MTS.pdf';
import permAff2016_17_BTECH_FT from '../../../assets/docs/University/permanent_affiliation_2016_17_BTECH_FT.pdf';
import permAff2018_19_Renaming_MTS from '../../../assets/docs/University/permanent_affiliation_2018_19_Renaming_MTS.pdf';
import permAff2019_20_ME_Structural_Embedded from '../../../assets/docs/University/permanent_affiliation_2019_20_ME_Structural_Embedded.pdf';
import permAff2020_21_MTech_FoodTech from '../../../assets/docs/University/permanent_affiliation_2020_21_MTech_FoodTech.pdf';

const University = () => {
  const affiliationOrders = [
    { year: '2025-26', file: aff2025_26 },
    { year: '2024-25', file: aff2024_25 },
    { year: '2023-24', file: aff2023_24 },
    { year: '2022-23', file: aff2022_23 },
    { year: '2021-22', file: aff2021_22 },
    { year: '2020-21', file: aff2020_21 },
    { year: '2019-20', file: aff2019_20 },
    { year: '2018-19', file: aff2018_19 },
    { year: '2017-18', file: aff2017_18 },
    { year: '2016-17', file: aff2016_17 },
    { year: '2015-16', file: aff2015_16 },
    { year: '2014-15', file: aff2014_15 },
    { year: '2013-14', file: aff2013_14 },
    { year: '2012-13', file: aff2012_13 },
    { year: '2011-12', file: aff2011_12 },
  ];

  const permanentAffiliationOrders = [
    { title: 'Permanent Affiliation order 2011-2012', file: permAff2011_12 },
    { title: 'Permanent Affiliation order 2012-2013', file: permAff2012_13 },
    { title: 'Permanent Affiliation order 2013-2014', file: permAff2013_14 },
    { title: 'Permanent Affiliation order 2013-2014 (10 courses: BE EIE MTS BTECH IT ME MTECH)', file: permAff2013_14_10courses },
    { title: 'Permanent Affiliation order 2014-2015 (ME MTS)', file: permAff2014_15_ME_MTS },
    { title: 'Permanent Affiliation order 2016-2017 (BTECH FT)', file: permAff2016_17_BTECH_FT },
    { title: 'Permanent Affiliation order 2018-2019 (Renaming of MTS)', file: permAff2018_19_Renaming_MTS },
    { title: 'Permanent Affiliation order 2019-2020 (ME Structural and ME Embedded)', file: permAff2019_20_ME_Structural_Embedded },
    { title: 'Permanent Affiliation M.Tech Food Tech 2020-2021', file: permAff2020_21_MTech_FoodTech },
  ];

  const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const timer = setTimeout(() => setLoading(false), 1500);
      return () => clearTimeout(timer);
    }, []);
  
  
    return loading ? <Spinner /> : (
    <>
      <Section />
      <Navbar />
      <div className="university-container">
        <h2 className="university-heading">Anna University Affiliation</h2>
        <h3 className="university-subheading">Affiliation Orders:</h3>
        <ul className="university-list">
          {affiliationOrders.map((order, index) => (
            <li key={index}>
              Anna University Affiliation order for the year {order.year}{' '}
              <a
                href={order.file}
                target="_blank"
                rel="noopener noreferrer"
                className="download-link"
              >
                Download
              </a>
            </li>
          ))}
        </ul>

        <h3 className="university-subheading">Permanent Affiliation Orders:</h3>
        <ul className="university-list">
          {permanentAffiliationOrders.map((order, index) => (
            <li key={index}>
              {order.title}{' '}
              <a
                href={order.file}
                target="_blank"
                rel="noopener noreferrer"
                className="download-link"
              >
                Download
              </a>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default University;
