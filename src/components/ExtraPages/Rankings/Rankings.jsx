import React from "react";
import "./Rankings.css";

import Section from "../../HomePage/Section/Section";
import Navbar from "../../HomePage/navbar/Navbar";
import Footer from "../../HomePage/Footer/Footer";
import ScrollToTopButton from "../../ScrollToTopButton";

const rankings = [
  {
    head: "NIRF – India Ranking - 2025",
    points: ["Band of 101 to 150 in the Engineering Category"],
    pdf: null,
  },
  {
    head: "Careers 360 Magazine - 2024",
    points: ["KEC graded AAAA"],
    pdf: "Career360_2024.pdf",
  },
  {
    head: "NIRF – India Ranking - 2024",
    points: ["Band of 101 to 150 in the Engineering Category"],
    pdf: null,
  },
  {
    head: "Education World - 2024",
    points: [
      "95th among Top 100 Private Engineering Institutions in India",
      "22nd among Top Private Engineering Institutions in Tamil Nadu",
    ],
    pdf: null,
  },
  {
    head: "Business Today - Best B School - 2024",
    points: [
      "123rd Position in All India Rank",
      "72nd Position in Top 100 selection Process india’s best B school",
      "73rd Position in Top 100 ROI india’s best B school",
      "97th Position in Top 100 Private B Schools india’s best B school",
    ],
    pdf: null,
  },
  {
    head: "The Week – HANSA Research Survey – Best Colleges 2024",
    points: [
      "58th Position among Top Engineering Institutions including IIT in All India",
      "32nd Position among Private Engineering Colleges in All India",
      "15th Position among Private Engineering Colleges in South Zone",
      "6th Position among Private Engineering Colleges in Tamilnadu",
    ],
    pdf: null,
  },
  {
    head: "Business World – Top Engineering Colleges 2024",
    points: [
      "52nd Position among Best Engineering. Colleges including IIT,NIT and University",
      "18th Position among Private Engineering Colleges and Universities in All India",
      "15th Position among Private Engineering Colleges and Universities in South Zone",
    ],
    pdf: null,
  },
  {
    head: "NIRF – India Ranking - 2023",
    points: ["Band of 51 to 100 in the Innovation Category"],
    pdf: "NIRF_2023.pdf",
  },
  {
    head: "Education World 2023",
    points: [
      "65th Position among top Private Engineering Colleges in India including Deemed Universities",
    ],
    pdf: "EducationWorld2023.pdf",
  },
  {
    head: "The Week – HANSA Research Survey – Best Colleges 2023",
    points: [
      "57th Position among Top Engineering Institutions including IIT, NIT, Deemed to be Universities in India",
      "31th Position among Private Engineering Institutions including Deemed to be Universities in India",
      "15th Position among Private Engineering Institutions including Deemed to be Universities in South India",
      "6th Position among Private Engineering Institutions including Deemed to be Universities in Tamilnadu",
    ],
    pdf: "TheWeekHansa2023.pdf",
  },
  {
    head: "Times-Annual Top Engineering Institute Survey 2023",
    points: [
      "25th Rank among Top 170 Engineering Institutions including Govt., Deemed to be Universities and Private Institutions in India",
      "23rd Rank among Top 125 Private Engineering Institutions including Deemed to be Universities in India",
      "14th Rank among Best Engineering Colleges in South India including Deemed Universities",
    ],
    pdf: "Times2023.pdf",
  },
  {
    head: "India Today - MDRA Survey 2023; The Best Colleges in India",
    points: [
      "58th Rank among Top Private Engineering Institutions including Deemed to be Universities in India",
    ],
    pdf: "IndiaToday2023.pdf",
  },
  {
    head: "Careers 360 Magazine - 2023",
    points: ["KEC graded AAAA"],
    pdf: "Career360_2023.pdf",
  },
  {
    head: "Business World – Engineering Colleges Special 2023",
    points: [
      "54th Rank among Best Engineering Colleges including IIT, IIM, NIT Deemed to be Universities in India",
      "20th Rank among Best Private Engineering Colleges including Deemed to be Universities in India",
    ],
    pdf: "BWorld2023.pdf",
  },
  {
    head: "Competition Success Review, CSR - GHRDC Engineering College Survey 2023",
    points: ["Eminent and Well-known Engineering Institutes in India"],
    pdf: "CSR2023.pdf",
  },
  {
    head: "Reader’s Digest 2023",
    points: [
      "58th Rank among Private Engineering Institutions including Deemed to be Universities in India",
    ],
    pdf: "ReadersDigest2023.pdf",
  },
  {
    head: "Anandha Vikatan Magazine, Top Engineering College in Tamilnadu, 2023",
    points: [
      "4th Position among Self Financing Colleges in the Western region of Tamilnadu",
    ],
    pdf: "AnanthaVikatan.pdf",
  },
  {
    head: "The Week – HANSA Research Survey Best B Schools - 2023",
    points: [
      "109th Position among Best B Schools in India (Including IIMs, NITs, Govt., Private Universities, Govt., and Self Financing Management Institutions)",
      "91st Position among Best Private B Schools in India",
      "33rd Position among Best B Schools in South Zone (Including IIMs, NITs, Govt., Private Universities, Govt., and Self Financing Management Institutions)",
      "28th Position among Best Private B Schools in South Zone",
    ],
    pdf: "TheWeek2023.pdf",
  },
  {
    head: "India Today-India’s Best B Schools 2023",
    points: [
      "100th Position among Best Private B Schools in India (Including Private Universities, and Self Financing Management Institutions)",
    ],
    pdf: "IndiaToday2022.pdf",
  },
  {
    head: "Career 360 Magazine 2023 - Indias Best B School",
    points: ["Kongu Engineering College Graded as AAA"],
    pdf: "Career360_2023Bbest.pdf",
  },
  {
    head: "NIRF 2022",
    points: [
      "118th Rank in Engineering Category including IIT, NIT, Deemed to be Universities in India",
    ],
    pdf: "NIRF2022.pdf",
  },
  {
    head: "The Week – HANSA Research Survey – Best Colleges 2022 – The Week, August 2022 issue",
    points: [
      "2nd Position among Self Financing Engineering Colleges in Tamilnadu",
      "6th Position among Private Engineering Institutions including Deemed to be Universities in Tamilnadu",
      "6th Position among Top Engineering Institutions including IIT, NIT, State and Deemed to be Universities in Tamilnadu",
      "14th position among Private Engineering Institutions including Deemed to be Universities in South India",
      "30th Rank among Private Engineering Institutions including Deemed to be Universities in India",
      "54th Rank among Top Engineering Institutions including IIT, NIT, Deemed to be Universities in India",
    ],
    pdf: "TheWeek2022.pdf",
  },
  {
    head: "Times-Annual Top Engineering Institute Survey 2022, Times of India, June 14, 2022 issue",
    points: [
      "2nd position among Self Financing Engineering Colleges in Tamilnadu",
      "13th Rank among Top 20 Engineering Institutions including Deemed to be Universities in South India",
      "21rd Rank among Top 125 Private Engineering Institutions including Deemed to be Universities in India",
      "27nd Rank among Top 170 Engineering Institutions including Govt., Deemed to be Universities and Private Institutions in India",
      "33rd Rank under the category-Top 70 Private Institutions – in Placement",
    ],
    pdf: "Times2022.pdf",
  },
  {
    head: "India Today-MDRA Survey2022;The Best Colleges in India, India Today, July14, 2022 Issue",
    points: [
      "3th Position among Self Financing Engineering Colleges in Tamilnadu",
      "7th Position among Top Private Engineering Institutions including Deemed to be Universities in Tamilnadu",
      "24nd Position among Top Engineering Institutions in South India",
      "56th Rank among Top Private Engineering Institutions including Deemed to be Universities in India",
      "One among Top 4 gainens in Top 100 Colleges – College that made biggest leap sinc last year",
    ],
    pdf: "IndiaTodayMDRA.pdf",
  },
  {
    head: "India’s Best Engineering Colleges 2022-Career 360 Magazine, July 2022",
    points: [
      "Rated AAAA Category among State University and Affiliated Colleges in Tamilnadu and Puducherry",
    ],
    pdf: "Career3602022.pdf",
  },
  {
    head: "Chronicle All India B-School Survey, June 22, 2022",
    points: [
      "Kongu Business Rated under B+++ Category among all B Schools in India",
      "One among Top 20 emerging B -School in India",
    ],
    pdf: "Chronicale2022.pdf",
  },
  {
    head: "Business World – Engineering Colleges Special –June 22, 2022",
    points: [
      "56th Rank among Best Engineering Colleges including IIT, IIM, NIT Deemed to be Universities in India",
      "23rd Rank among Best Private Engineering Colleges including Deemed to be Universities in India",
      "14th Rank among Best Engineering Colleges including IIT, IIM, NIT Deemed to be Universities in Tamilnadu",
      "2nd Position among Self Financing Engineering Colleges in Tamilnadu",
    ],
    pdf: "BW2022.pdf",
  },
  {
    head: "EW India Higher Education Ranking 2022-23, Education World April 2022",
    points: [
      "85th Rank among Top 100 Private Engineering Colleges including Deemed to be Universities in India",
      "23rd Rank among Top 30 Private Engineering Colleges including Deemed to be Universities and Government Aided Institutions in Tamilnadu",
    ],
    pdf: "EW2022.pdf",
  },
  {
    head: "NIRF 2021",
    points: [
      "Kongu Engineering College ranked 164th in Engineering Category in India Ranking 2021 under National Institutional Ranking Framework (NIRF), MHRD, Govt. of India",
    ],
    pdf: "NIRF2021.pdf",
  },
  {
    head: "ARIIA 2021",
    points: [
      "Band Excellent under the category of “College/Institutes (Private/Self finance) (Technical)”",
    ],
    pdf: null,
  },
  {
    head: "Tamil Nadu Government Green Champion Award 2021",
    points: [
      "Kongu Engineering College bagged this award for the year 2021 with a cash prize of Rs.1 Lakh from Government of Tamil Nadu",
    ],
    pdf: null,
  },
  {
    head: "Competition Success Review – GHRDC Ranking – India’s Top Engineering Colleges 2021 – CSR, July 2021",
    points: [
      "2nd Rank among Top Engineering Colleges of Super Excellence in India",
      "8th Rank under Faculty, Research, Consultancy, EDP and other Programmes Category among Top 25 Engineering Institutions including Deemed to be Universities in India",
      "10th Rank under Placements, USP, Social Responsibility, Networking & Industry Interface category among Top 25 Engineering Institutions including Deemed to be Universities in India",
    ],
    pdf: null,
  },
  {
    head: "The Week – HANSA Research Survey – Best Colleges 2021 – The Week, August 2021",
    points: [
      "25th Rank among Private Engineering Institutions including Deemed to be Universities in India",
      "12th Rank among Private Engineering Colleges in South Zone",
      "50th Rank among Top Engineering Institutions including IIT, NIT, Deemed to be Universities in India",
    ],
    pdf: null,
  },
  {
    head: "Outlook - ICARE Rankings 2021 – Outlook, August 2021",
    points: [
      "33rd Rank among Top 100 Private Engineering Institutions including Deemed to be Universities in India",
    ],
    pdf: null,
  },
  {
    head: "Times-Annual Top Engineering Institute Survey 2021, Times of India, July 21, 2021 issue;",
    points: [
      "7th Position among Self Financing Engineering Colleges in Tamil Nadu",
      "15th Rank among Top 20 Engineering Institutions including Deemed to be Universities in South India",
      "23rd Rank among Top 125 Private Engineering Institutions including Deemed to be Universities in India",
      "32nd Rank among Top 175 Engineering Institutions including Govt., Deemed to be Universities and Private Institutions in India",
    ],
    pdf: null,
  },
  {
    head: "India Today – MDRA Survey 2021 – The Best Colleges in India, July 2021",
    points: [
      "64th Rank among Top Private Engineering Institutions including Deemed to be Universities in India",
    ],
    pdf: null,
  },
  {
    head: "Careers 360 Magazine – India’s Best Engineering Colleges 2021, July 2021",
    points: [
      "Rated AAA+ Category among State University and Affiliated Colleges in Tamil Nadu and Puducherry",
    ],
    pdf: null,
  },
  {
    head: "The Week – HANSA Research Survey – Best B-Schools 2021 – The Week, November 14, 2021",
    points: [
      "29th Rank among Top Private Business Schools including Deemed to be Universities in South India",
      "33rd Rank among Top Business Schools including IIMs and Deemed to be Universities in South India",
      "109th Rank among Top Business Schools including IIMs and Deemed to be Universities in India",
    ],
    pdf: null,
  },
  {
    head: "Business Today – Best B-Schools – November 14, 2021",
    points: [
      "143rd Rank among Top Business Schools including IIMs and Deemed to be Universities in India",
      "56th Rank among Top 100 in Return on Investment",
    ],
    pdf: null,
  },
  {
    head: "Business World – Engineering Colleges Special – August 30, 2021",
    points: [
      "57th Rank among Best Engineering Colleges including IITs, IIMs, NITs and Deemed to be Universities in India",
      "23rd Rank among Best Private Engineering Colleges including Deemed to be Universities in India",
    ],
    pdf: null,
  },
  {
    head: "Outlook – September 2020",
    points: [
      "4th Position among Self Financing Colleges in Tamil Nadu",
      "38th Position at all India level including IITs and NITs",
    ],
    pdf: "theweek2020.pdf",
  },
  {
    head: "The Week – August 2020",
    points: [
      "2nd Position among Best Self Financing Engineering Colleges in Tamil Nadu",
      "14th Position among Best Private Engineering Colleges in South Zone",
      "27th Position among Best Private Engineering Colleges in India",
      "56th Position among Best Engineering Colleges in India (Including IITs, NITs, Govt., Private Universities, Govt., Govt Aided and Self Financing Engineering Colleges)",
    ],
    pdf: "theweek2020.pdf",
  },
  {
    head: "ARIIA 2020 – Atal Ranking of Institutions on Innovation Achievements",
    points: [
      "Categorized as 'Band A' institution (Rank between 06-25) in category of 'Private or Self-Financed Colleges/Institutes'",
    ],
    pdf: "ariia2020.pdf",
  },
  {
    head: "Competition Success Review (CSR) – July 2020",
    points: [
      "2nd Position in Top Engineering Colleges of Super Excellence",
      "2nd Position among Self Financing Engineering Colleges in Tamil Nadu",
      "9th Position in Placements, USP, Social Responsibility, Networking & Industry Interface Category in Top 25 Engineering Colleges",
      "9th Position in Faculty, Research, Consultancy, EDP and Other Programmes Category in Top 25 Engineering Colleges",
    ],
    pdf: "csr2020.pdf",
  },
  {
    head: "India Today – July 2020",
    points: ["77th Position among Top Engineering Colleges in India"],
    pdf: "india_today_2020.pdf",
  },
  {
    head: "NIRF 2020 – National Institutional Ranking Framework, MHRD, Govt. of India",
    points: [
      "Kongu Engineering College ranked 135th in Engineering Category in India Rankings 2020",
    ],
    pdf: "nirf2020.pdf",
  },

  {
    head: "EducationWorld, April 2020 has ranked our institute at",
    points: [
      "16th Position among top Engineering Colleges in Tamilnadu.",
      "75th Position among top Engineering Colleges in India.",
    ],
    pdf: "eduworld2020.pdf",
  },
  {
    head: "The Week, June 2019 has ranked our institute at",
    points: [
      "12th Position among Engineering Colleges in South Zone.",
      "16th Position among top 164 Pvt. Engineering Colleges in India.",
      "53th Position among top 100 Engineering Colleges (including IITs, NITs, Govt., Private Universities, Govt., Govt. Aided and Private Engineering Colleges) in India.",
    ],
    pdf: "week2019.pdf",
  },
  {
    head: "The Competition Success Review(CSR), June, 2019",
    points: [
      "3rd Position in Top Engineering Colleges of Super Excellence, 13th Position among 126 Top Engineering Colleges in India (including IITs and NITs), 5th Position among Self Financing Engineering Colleges in Tamilnadu, 12th position in Placements, USP, Social Responsibility, Networking & Industry Interface Category and 16th Position in Faculty, Research, Consultancy, EDP and Other Programmes Category.",
    ],
    pdf: "csrjune2019.pdf",
  },
  {
    head: "NIRF 2019",
    points: [
      "Kongu Engineering College ranked 99 in Engineering Category in India Ranking 2019 under National Institutional Ranking Framework (NIRF), MHRD, Govt. of India",
    ],
    pdf: "nirf2019.pdf",
  },
  {
    head: "Competition Success Review(CSR) June 2018 issue",
    points: [
      "2nd Position among Self Financing Engineering Colleges in Tamilnadu, 9th Position in Top Engineering Colleges of Super Excellence and 10th Position among 126 Top Engineering Colleges in India (including IITs and NITs) in Competition Success Review(CSR) June 2018 issue",
    ],
    pdf: "csr2018.pdf",
  },
  {
    head: "National Institutional Ranking Framework (NIRF) (2018)",
    points: [
      "Kongu Engineering College ranked 68 in Engineering Category in India Ranking 2018 under National Institutional Ranking Framework (NIRF), MHRD, Govt. of India",
    ],
    pdf: "nirf2018.pdf",
  },
  {
    head: "Career 360 magazine (June 2018)",
    points: ["KEC graded AAAA by Career 360 magazine (June 2018)"],
    pdf: null,
  },
  {
    head: "Competition Success Review(CSR), June 2017 issue",
    points: [
      "2nd Position in Top Engineering Colleges of Eminence in The Competition Success Review(CSR), June 2017 issue",
    ],
    pdf: "csr2017.pdf",
  },
  {
    head: "South Zone in The Week, June 2017 issue",
    points: [
      "22nd Position among Engineering Colleges in South Zone in The Week, June 2017 issue",
    ],
    pdf: "theweek2017.pdf",
  },
  {
    head: "Career 360 magazine (April 2017)",
    points: ["KEC graded AAAA by Career 360 magazine (April 2017)"],
    pdf: "career3602017.pdf",
  },
  {
    head: "National Institutional Ranking Framework (NIRF)(2017)",
    points: [
      "Kongu Engineering College ranked 57 in Engineering Category in India Ranking 2017 under National Institutional Ranking Framework (NIRF), MHRD, Govt. of India",
    ],
    pdf: "nirf2017.pdf",
  },
  {
    head: "IITs and NITs in Outlook, July 2016 issue",
    points: [
      "42nd position at all India level including IITs and NITs in Outlook, July 2016 issue",
    ],
    pdf: "csr2016.pdf",
  },
  {
    head: "Competition Success Review(CSR) June 2016 issue",
    points: [
      "2nd Position in Self Financing Engineering Colleges in Tamilnadu and 19th Position among 140 Top Engineering Colleges in India (including IITs and NITs) in Competition Success Review(CSR) June 2016 issue",
    ],
    pdf: "csr2016.pdf",
  },
  {
    head: "Week June 2016 Issue",
    points: [
      "3rd Position all Private Self Financing Colleges in Tamilnadu in The Week June 2016 Issue",
    ],
    pdf: "theweek2016.pdf",
  },
  {
    head: "Carrers 360 Magazine(April 2016)",
    points: [
      "Carrers 360 Magazine(April 2016): Ranked our College at 45th position among top 100 Best Engineering Research Institutues in India and awarded AAAA rating among the top Engineering colleges in Tamilnadu",
    ],
    pdf: "career3602016.pdf",
  },
  {
    head: "National Institutional Ranking Framework (NIRF)(2016)",
    points: [
      "Kongu Engineering College ranked 46th in Engineering Category in India Ranking 2016 under National Institutional Ranking Framework (NIRF), MHRD, Govt. of India",
    ],
    pdf: "nirfranking.pdf",
  },
  {
    head: '"The Week" Magazine 2015',
    points: [
      'Ranked 3rd Position in Tamilnadu and 32nd Position in private engineering colleges in India by "The Week" Magazine',
    ],
    pdf: "week2015.pdf",
  },
  {
    head: "Competition Success Review(CSR) Magazine 2015",
    points: [
      "Ranked 2nd Position in Tamilnadu and 26th Position in India among Engineering Institutes in India (including IITs and NITs) by Competition Success Review(CSR) Magazine",
    ],
    pdf: "csr2015.pdf",
  },
  {
    head: 'Outlook" magazine 2015',
    points: [
      "Ranked 1st Position in Tamilnadu and 39th position at all India level by \"Outlook\" magazine (including IIT's and NIT's)",
    ],
    pdf: "outlook2015.pdf",
  },
  {
    head: "Times Engineering Ranking-2015",
    points: [
      "Ranked 2nd position in Tamilnadu and 24th position in private engineering colleges in India by Times of India - Times Engineering Ranking-2015 (16th June 2015)",
    ],
    pdf: "toi_ter2015.pdf",
  },
  {
    head: "Times Engineering Ranking -2015",
    points: [
      "Ranked 57th position at all India level by Times of India - Times Engineering Ranking -2015 (16th June 2015)",
    ],
    pdf: "toi_ter2015_57.pdf",
  },
  {
    head: "Careers 360 Magazine (April 2015)",
    points: [
      "Careers 360 Magazine (April 2015) ranked our College at 50 th position among top 100 Best Engineering Research Institutes in India and AAA+ position among top Engineering colleges of Tamilnadu",
    ],
    pdf: "careers360_042015.pdf",
  },
  {
    head: "Higher Education Review - December 2014",
    points: [
      "Engineering College of the Year 2014 (Higher Education Review - December 2014",
    ],
    pdf: "kecher.pdf",
  },
  {
    head: "CSR-GHRDC Survey 2014",
    points: [
      "12th Position among Top Emerging Engineering Colleges of Super Excellence (CSR-GHRDC Survey 2014)",
    ],
    pdf: "csr12.pdf",
  },
  {
    head: "The Week magazine -June 2014",
    points: [
      "32nd Position among Top 75 Private Engineering Colleges and 82nd position at All-India level (The Week magazine -June 2014 )",
    ],
    pdf: "week32.pdf",
  },
  {
    head: "Careers 360 Magazine-May 2014",
    points: ["Awarded AAA+ grade(Careers 360 Magazine-May 2014)"],
    pdf: "careers360-aaaplus.pdf",
  },
  {
    head: "Outlook",
    points: ["Composite Ranking : 2011, 2012 & 2013 in Outlook"],
    pdf: "outlook2014.pdf",
  },
  {
    head: "Outlook July 2014",
    points: [
      "43rd Position among Top 75 Engineering Colleges at ALL-India level and 2 nd Position among self financing College in Tamilnadu (Outlook July 2014)",
    ],
    pdf: "outlook_ranking_july_2014.pdf",
  },
];

const Rankings = () => {
  return (
    <>
      {/* <Section/> */}
      <Navbar />
      <div className="rankings-container">
        <h2 className="rankings-title">Rankings</h2>
        <div className="rankings-list">
          {rankings.map((item, index) => (
            <div key={index} className="ranking-card">
              <div className="ranking-header">
                <h3>{item.head}</h3>
              </div>
              <ul className="ranking-points">
                {item.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              {item.pdf && (
                <a
                  href={require(`../../../assets/docs/Rankings/${item.pdf}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ranking-pdf-button"
                >
                  Open PDF
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default Rankings;
