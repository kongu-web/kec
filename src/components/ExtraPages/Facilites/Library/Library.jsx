import React, { useState,useEffect } from "react";
import "./Library.css";
import Spinner from "../../../Spinner";

import Footer from "../../../HomePage/Footer/Footer";
import ScrollToTopButton from "../../../ScrollToTopButton";
import Section from "../../../HomePage/Section/Section";
import Navbar from "../../../HomePage/navbar/Navbar";

const Library = () => {
  const [activeSection, setActiveSection] = useState("Home");

  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const timer = setTimeout(() => setLoading(false), 1500);
      return () => clearTimeout(timer);
    }, []);
  
  
    return loading ? <Spinner /> : (
    <>
      <Section />
      <Navbar />
      <div className="library-wrapper">
        <h1 className="library-title">Central Library</h1>
        <nav className="library-nav">
        {[
            "Home",
            "Sections",
            "Journals & Magazines",
            "Digital Library",
            "Institutional Memberships",
            "Circulation Information",
            "Staff",
            "AUERC",
            "Contact Us",
        ].map((item, index) => (
            item === "AUERC" ? (
            <a
                key={index}
                href="https://access.auerc.com/keca"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-button"
            >
                {item}
            </a>
            ) : (
            <button
                key={index}
                onClick={() => handleNavClick(item)}
                className={`nav-button ${activeSection === item ? "active" : ""}`}
            >
                {item}
            </button>
            )
        ))}
        </nav>


        {activeSection === "Home" && (
          <section className="library-section">
            <p>
              Welcome to the Central Library which is one of the central support services of KEC. The Central Library is well equipped with modern facilities and resources in the form of On-line databases, e-books, e-journals, theses, back volumes etc. The library homepage provides access to various full-text & bibliographic databases & e-journals.
            </p>
            <p>
              The Library transactions are carried out using RFID and Bar Code Technology. It features KOHA automation software and Web OPAC for online search. The catalogue is accessible via intranet and internet. 42 CCTV cameras ensure security and discipline in the library.
            </p>

            <h3>Vision</h3>
            <p>
              To become one of the pioneer Science and Engineering Libraries in the world in the field of information resources, management, and technology applications.
            </p>

            <h3>Mission</h3>
            <p>
              To utilize available learning resources effectively and create new resources and modernize library operations to create technically vibrant and quality professionals.
            </p>

            <h3>Library Area and Collections</h3>
            <ul className="library-bullet-list">
            <li><strong>Library Area (Total):</strong> 3,286 sqm</li>
            </ul>

            <h4>Collections</h4>
            <ul className="library-bullet-list">
            <li><strong>Books:</strong></li>
            <ul className="library-bullet-list">
                <li>Volumes: 95,959</li>
                <li>Titles: 40,718</li>
            </ul>
            <li><strong>Periodicals:</strong></li>
            <ul className="library-bullet-list">
                <li>Journals: 259</li>
                <li>Magazines: 20</li>
            </ul>
            </ul>
            <h3>Details of Library Book</h3>
            <div className="library-table-container">
            <table className="mainlibrary-table">
                <thead>
                <tr>
                    <th>Sl.No.</th>
                    <th>Department</th>
                    <th>Title</th>
                    <th>Volume</th>
                </tr>
                </thead>
                <tbody>
                {[
                    ["Civil Engineering", 2487, 6211],
                    ["Mechanical Engineering", 2907, 6215],
                    ["Automobile Engineering", 722, 2589],
                    ["Mechatronics Engineering", 2066, 4605],
                    ["Chemical Engineering", 2209, 4794],
                    ["Food Technology", 1690, 3907],
                    ["Electronics and Communication Engineering", 2375, 6341],
                    ["Electrical and Electronics Engineering", 2180, 5328],
                    ["Electronics and Instrumentation Engineering", 2004, 4686],
                    ["Computer Science and Engineering", 2578, 5678],
                    ["Information Technology", 1908, 4620],
                    ["Artificial Intelligence and Machine Learning", 407, 1655],
                    ["Artificial Intelligence and Data Science", 393, 1639],
                    ["Computer Science and Design", 479, 1342],
                    ["B.Sc", 2801, 6182],
                    ["M.Sc", 237, 589],
                    ["Science and Humanities", 4272, 8990],
                    ["Master of Computer Applications", 3943, 9205],
                    ["Master of Business Administration", 4297, 9604],
                    ["PG Courses in Engineering", 763, 1779],
                    ["Total", 40718, 95959]
                ].map((row, i) => (
                    <tr key={i}>
                    <td>{i + 1 <= 20 ? i + 1 : ""}</td>
                    <td>{row[0]}</td>
                    <td>{row[1]}</td>
                    <td>{row[2]}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>

            <h3>National and International Journal</h3>
            <div className="library-table-container">
            <table className="mainlibrary-table">
                <thead>
                <tr>
                    <th>S.No.</th>
                    <th>Department</th>
                    <th>National Journals</th>
                    <th>International Journals</th>
                </tr>
                </thead>
                <tbody>
                {[
                    ["Civil Engineering", 22, 35],
                    ["Mechanical Engineering", 12, 56],
                    ["Automobile Engineering", 7, 37],
                    ["Mechatronics Engineering", 12, 59],
                    ["Electronics and Communication Engineering", 17, 22],
                    ["Electrical and Electronics Engineering", 6, 19],
                    ["Electronics and Instrumentation Engineering", 7, 25],
                    ["Computer Science and Engineering", 12, 35],
                    ["Computer Science and Design", 6, 11],
                    ["Information Technology", 6, 15],
                    ["Artificial Intelligence", 12, 23],
                    ["Chemical Engineering", 6, 91],
                    ["Food Technology", 25, 16],
                    ["Computer Technology - UG", 19, 34],
                    ["Computer Technology - PG", 6, 15],
                    ["Master Of Business Administration", 15, 45],
                    ["Master Of Computer Applications", 7, 20],
                    ["Science And Humanities", 62, 38],
                    ["TOTAL", 259, 596]
                ].map((row, i) => (
                    <tr key={i}>
                    <td>{i + 1 <= 18 ? i + 1 : ""}</td>
                    <td>{row[0]}</td>
                    <td>{row[1]}</td>
                    <td>{row[2]}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>

            <h3>Digital Resources</h3>

            <h4>AUERC Subscription - E-Journals</h4>
            <div className="library-table-container">
            <table className="mainlibrary-table">
                <thead>
                <tr>
                    <th>S.No</th>
                    <th>Publisher's Platform</th>
                    <th>No. of E-Journals</th>
                </tr>
                </thead>
                <tbody>
                {[
                    ["Cambridge University Press", 454],
                    ["Elsevier", 1545],
                    ["Springer", 693],
                    ["Wiley Online", 334],
                ].map((row, i) => (
                    <tr key={i}>
                    <td>{i < 4 ? i + 1 : ""}</td>
                    <td>{row[0]}</td>
                    <td>{row[1]}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>

            <h4>SELF Subscription</h4>
            <div className="library-table-container">
            <table className="mainlibrary-table">
                <thead>
                <tr>
                    <th>S.No</th>
                    <th>Publisher's Platform</th>
                    <th>No. of E-Journals</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>5</td>
                    <td>IEEE ASPP </td>
                    <td>230</td>
                </tr>
                 <tr>
                    <td>6</td>
                    <td>EBSCO - Business Source Elite</td>
                    <td>7537</td>
                </tr>
                <tr>
                    <td></td>
                    <td><strong>Total</strong></td>
                    <td><strong>10793</strong></td>
                </tr>
                </tbody>
            </table>
            </div>



            <h4>E-Books</h4>
            <div className="library-table-container">
            <table className="mainlibrary-table">
                <thead>
                <tr>
                    <th>S.No</th>
                    <th>Publisher</th>
                    <th>No. of E-Books</th>
                </tr>
                </thead>
                <tbody>
                {[
                    ["Cambridge University Press", 6946],
                    ["CBS", 731],
                    ["Elsevier", 195],
                    ["NewAge", 112],
                    ["Pearson", 215],
                    ["PHI", 146],
                    ["SChand", 99],
                    ["Springer", 7463],
                    ["Wiley India", 159],
                    ["Wiley Online", 1657],
                    ["Total", 17723]
                ].map((row, i) => (
                    <tr key={i}>
                    <td>{i < 10 ? i + 1 : ""}</td>
                    <td>{row[0]}</td>
                    <td>{row[1]}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>

            <h4>Plagiarism Check Tools</h4>
            <div className="library-table-container">
            <table className="mainlibrary-table">
                <thead>
                <tr>
                    <th>Tool</th>
                    <th>Count</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Originality Check, Turnitin Originality</td>
                    <td>1</td>
                </tr>
                </tbody>
            </table>
            </div>

            <h4>Digimate - NPTEL</h4>
            <div className="library-table-container">
            <table className="mainlibrary-table">
                <thead>
                <tr>
                    <th>Platform</th>
                    <th>Details</th>
                </tr>
                </thead>
                <tbody>
                
                <tr>
                    <td>NPTEL PDF Lecturers</td>
                    <td>56647</td>
                </tr>
                </tbody>
            </table>
            </div>

            <h4>Reading Facility for Partially Impaired Students</h4>
            <div className="library-table-container">
            <table className="mainlibrary-table">
                <thead>
                <tr>
                    <th>Facility</th>
                    <th>Access</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Lex Scanner</td>
                    <td>1 Access</td>
                </tr>
                </tbody>
            </table>
            </div>

            <h4>Remote Access</h4>
            <div className="library-table-container">
            <table className="mainlibrary-table">
                <thead>
                <tr>
                    <th>Platform</th>
                    <th>Access Type</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>INFED – Shibboleth</td>
                    <td>Multi Access</td>
                </tr>
                </tbody>
            </table>
            </div>



            <h3>LIBRARY RESOURCES (Values)</h3>
            <ul className="library-bullet-list">
            <li>Value of Books: Rs. 4.77 Crore</li>
            <li>Value of Journals: Rs. 2.30 Lakhs</li>
            <li>Value of Back Volumes (bounded Volumes): Rs. 4.10 Crore</li>
            <li>Value of Digital & Other Resources: Rs. 4.25 Lakhs</li>
            <li>AUERC Online Journals Subscription: Rs. 49.70 Lakhs</li>
            <li>E-Resources : Rs.10.67 Lakhs</li>
            <li>Plagiarism Check Tools : 10.67 Lakhs</li>
            </ul>

            <h3>LIBRARY RESOURCES (In Numbers)</h3>
            <ul className="library-bullet-list">
            <li>Total No. of Newspapers Subscribed: 10</li>
            <li>Total No. of Back Volumes: 9,212</li>
            <li>No. of Book Bank Books: 7,087</li>
            <li>No. of Online Journals Subscription: 10,793</li>
            <li>Other Digital Resources: 7,850 <br /> (Including Book CDs/Audio/Video)</li>
            <li>Ph.D Thesis: 476</li>
            </ul>


           
          </section>
        )}

        {activeSection === "Sections" && (
        <div className="library-section-content">
            <h2>STACK ROOM</h2>
            <p>
            There are 516 bookshelves housing the books for lending. The books are classified according to the Dewey decimal classification. Bay guides are available for easy access. Open access system is followed which goes a long way to help the readers in locating books and making search easy. Glass doors to prevent the books from insects and dust close the bookshelves.
            </p>

            <h2>READING HALL</h2>
            <p>
            It is a spacious and ventilated area for comfortable reading for a long time. It has 12 bookshelves exclusively holding the syllabus copies. It includes 16 tables with a seating capacity of 96 chairs. Students are permitted to bring the books from the stacks for their reading. Besides that there are 10 stone tables with 80 chairs in the open air.
            </p>

            <h2>REFERENCE HALL</h2>
            <p>
            There are 6,179 reference books including Encyclopedias, Dictionaries and Hand Books (General, Science and Technology, Chemical) on all branches of Engineering and Science and humanities. The reference hall is equipped with 5 full-size and 15 half-size wooden, glass-sliding cupboards. It consists of 10 tables with a seating capacity of 40 chairs exclusively for reference purposes with air conditioning facilities.
            </p>

            <h2>PERIODICAL SECTION</h2>
            <p>
            A separate Air-conditioned section is available for Periodicals in the First floor of the new building. It has 8 tables with the seating capacity of 48 chairs. Additional chairs are available, when necessary. This section has both technical and Non-technical Journals and Magazines of National and International levels. The latest issue of Journal / Magazine will be exhibited outside in the respective shelves. Previous issues will be in order for ready reference.
            </p>

            <h2>NEW ARRIVALS SECTION</h2>
            <p>
            In this section, latest titles and editions are displayed for the attention of the users to update their knowledge.
            </p>

            <h2>NEWS PAPER SECTION</h2>
            <p>
            There is a separate hexagon shaped hall to read Newspapers and magazines like Reader’s Digest, Wisdom, Sportstar. This section has 4 sets of double sofa and 14 single sofas for pleasure readings.
            </p>
            <p><strong>The following Newspapers are subscribed for the Library:</strong></p>
            <ul>
            <li>The Hindu - English</li>
            <li>The Hindu - Tamil</li>
            <li>The New Indian Express</li>
            <li>Business Line</li>
            <li>Dina Mani</li>
            <li>Dina Malar</li>
            <li>Daily Thanthi</li>
            <li>Dinakaran</li>
            <li>Kaalaikathir</li>
            <li>Maalai Malar</li>
            </ul>

            <h2>BOOK BANK SECTION</h2>
            <p>
            There are 7087 books in the Book Bank section. The books can be provided exclusively for Post Matric Scholarship holders of the SC & ST students. Each student can take up to 10 books, which can be kept for one semester.
            </p>

            <h2>REPROGRAPHY SECTION</h2>
            <p>
            There are three Photocopiers available in the Library. Library provides reprographic service to the users at a nominal cost. This service is helpful to the students for preparing their paper presentations, projects etc.
            </p>
        </div>
        )}

        {activeSection === "Journals & Magazines" && (
        <div className="library-section-content">
            <h2>JOURNALS AND MAGAZINES</h2>
            <p><strong>No. of National & International Subscriptions:</strong> 855</p>

            <h2>ONLINE JOURNALS & MAGAZINES (E-Resources)</h2>
            <p><strong>No. of Online Journals Subscription:</strong> 10,793</p>

            <h2>AUERC SUBSCRIPTION - E-Journals</h2>
            <table className="mainlibrary-table">
            <thead>
                <tr>
                <th>Sl.No.</th>
                <th>Publisher's Platform</th>
                </tr>
            </thead>
            <tbody>
                <tr><td>1</td><td>Cambridge University Press</td></tr>
                <tr><td>2</td><td>Elsevier</td></tr>
                <tr><td>3</td><td>Springer</td></tr>
                <tr><td>4</td><td>Wiley Online</td></tr>
            </tbody>
            </table>

            <h2>E-BOOKS</h2>
            <ul>
            <li>Cambridge University Press</li>
            <li>CBS</li>
            <li>Elsevier</li>
            <li>NewAge</li>
            <li>Pearson</li>
            <li>PHI</li>
            <li>SChand</li>
            <li>Springer</li>
            <li>Wiley India</li>
            <li>Wiley Online</li>
            </ul>
        </div>
        )}

        {activeSection === "Digital Library" && (
        <div className="library-section-content">
            <h2>Digital Library</h2>
            <p>
            It has the collection of <strong>CDs and Floppy Disks around 7850</strong> of all disciplines including sources like <strong>GRE, GMAT, TOEFL, ISI codes etc</strong>. In addition, <strong>529 Audio and Video Cassettes</strong> are available in the department libraries. It provides a number of Online Electronic Database like <strong>IEEE, ACM, ASME and ASCE online CD-ROM databases</strong>. Proquest science online journals are also available in CD-ROMs. This section also has well-equipped furniture and computers.        
            </p>

            <h3>Online Journals</h3>
            <p>
            The web address and access through Remote Access (Internet) and also IP based Access (Intranet) Wireless access points are better for businesses because of its broad transmission range, high users access, and stronger signal sending and receiving capabilities. Wireless APs also have a better safety performance, which is essential for any business from 23-Oct-2019.  
            </p>

            <h2>E-RESOURCES SELF SUBSCRIPTION</h2>
            <p><strong>1. IEEE ASPP Online:</strong> <a href=" https://ieeexplore.ieee.org/Xplore/home.jsp" target="_blank" rel="noopener noreferrer">ieeexplore.ieee.org</a></p>
            <p><strong>2. EBSCO Business Source Elite:</strong> <a href="https://research.ebsco.com/c/ndiofi/search" target="_blank" rel="noopener noreferrer">research.ebsco.com</a></p>
            <p><strong>3. DELNET Discovery Portal:</strong> <a href="https://discovery1.delnet.in/" target="_blank" rel="noopener noreferrer">discovery1.delnet.in</a></p>

            <h2>WEB ACCESS (AUERC Consortium)</h2>
            <p><strong>Link for web access:</strong> <a href="https://access.auerc.com/keca" target="_blank" rel="noopener noreferrer">access.auerc.com/keca</a></p>
            
            
            <h2>PLAGIARISM CHECK TOOLS</h2>
            <p><strong>1. Originality Check, Turnitin Originality:</strong> <a href="www.turnitin.com/login_page.asp" target="_blank" rel="noopener noreferrer">www.turnitin.com</a></p>

            <h3>Free E-Journals</h3>
            <ul>
            <li><a href="https://doaj.org/" target="_blank">Directory of Open Access Journals</a></li>
            <li><a href="http://www.freemedicaljournals.com/" target="_blank">Free Medical Journals</a></li>
            <li><a href="http://liblicense.crl.edu/" target="_blank">Indian Academy of Sciences</a></li>
            <li><a href="http://mf2jx2lg4r.search.serialssolutions.com/" target="_blank">Memorial University Libraries</a></li>
            <li><a href="http://www.icast.org.in/" target="_blank">ICAST</a></li>
            <li><a href="http://lib.manhattan.edu/" target="_blank">Manhattan College Library</a></li>
            <li><a href="http://www.ndu.edu.lb/Library/free_journals.htm" target="_blank">NDU</a></li>
            <li><a href="http://www.informationr.net/ir/titlepages.html" target="_blank">InformationR</a></li>
            <li><a href="http://library.curtin.edu.au/ebooks/direct_journals.html" target="_blank">Curtin University of Technology</a></li>
            <li><a href="http://www.tjprc.org/" target="_blank">Thomson Reuters Indexed Journals</a></li>
            </ul>

            <h3>Open Educational Resources</h3>
            <ul>
            <li><a href="https://colcommons.org/" target="_blank">Commonwealth of Learning</a></li>
            <li><a href="https://collection.bccampus.ca/" target="_blank">British Columbia Open Text Book Project</a></li>
            <li><a href="https://openstax.org/" target="_blank">Rice University Open Stax:</a></li>
            <li><a href="https://ecampusontario.ca/" target="_blank">e-Campus Ontario</a></li>
            <li><a href="https://partner.skillscommons.org/" target="_blank">Skills Commons</a></li>
            <li><a href="https://libretexts.org/" target="_blank">Libre Texts</a></li>
            <li><a href="https://www.saylor.org/" target="_blank">Saylor Academy</a></li>
            </ul>

            <h3>Free E-Books</h3>
            <ul>
            <li><a href="http://www.ebooklobby.com/" target="_blank">eBooks Lobby</a></li>
            <li><a href="http://www.free-ebooks.net/" target="_blank">Free E-Books</a></li>
            <li><a href="http://www.sharewarebooks.com/" target="_blank">Shareware eBooks</a></li>
            <li><a href="https://www.annauniv.edu/Library/digi_free_ebooks.html" target="_blank">Anna University - Free eBooks</a></li>
            <li><a href="http://www.planetpublish.com/" target="_blank">Planet PDF</a></li>
            <li><a href="https://nook.barnesandnoble.com/redeem" target="_blank">Fictionwise</a></li>
            <li><a href="http://www.etext.lib.virginia.edu/ebooks" target="_blank">Virginia eBooks</a></li>
            <li><a href="http://manybooks.net/" target="_blank">Many Books</a></li>
            <li><a href="http://www.easymediabroadcast.com/" target="_blank">Easy Media Broadcast</a></li>
            <li><a href="http://www.web-source.net/free_ebooks.htm" target="_blank">Web Source</a></li>
            <li><a href="http://www.web-books.com/cool/ebooks/library.htm" target="_blank">Web Books</a></li>
            </ul>

            <h3>Remote Access (INFED – Shibboleth)</h3>
            <p>
            <a href="https://idp.kongu.edu/" target="_blank">https://idp.kongu.edu/</a>
            </p>
            <h3>INFLIBNET-(INFED)</h3>

            <p>
            The INDIAN Access Management Federation (INFED) provides remote access to scholarly e-resources to our college in India under the e-shodhsindhu. It has adopted Shibboleth, standard-based open source software, for authenticating authorized users from our institute. Shibboleth offers a mechanism for users to access multiple resources within a federated single sign-on framework from anywhere, anytime. The goal of the INFED is to allow users to access internal and external resources seamlessly using a single, institutionally controlled identity.
            </p>

            <h3>Lex Instant Reader and Scanner</h3>
            <p>
            Lex is for any visually impaired computer user, who wants near instant, easy and accurate access to printed documents. It has been specifically designed for the requirements of our students with a computer system.
            </p>

            <h3>RFID</h3>
            <p>
            RFID based Library Management System is a unique system implemented in our college library to manage the books automatically and efficiently. It will use the RFID reader to identify and manage the books efficiently. The data can be managed using the interface created for the library staffs. The use of RFID reduces the amount of time required to perform circulation operations. This technology helps librarians eliminate valuable staff time spent scanning barcodes while checking out and checking in borrowed items. For the students and staffs, RFID speeds up the borrowing and return procedures.
            </p>

            <h3>Wi-Fi</h3>
            <p>
            Wireless encryption provides a high level of assurance that only authorized users can access the library data through WIFI facility
            </p>
        </div>
        )}

        {activeSection === "Institutional Memberships" && (
        <div className="library-section-content">
            <h2>Institutional Membership</h2>
            <p>
            We have institutional memberships with the following organizations:
            </p>
            <ul>
            <li>DELNET (Developing Library Network), New Delhi</li>
            <li>CIPET (Central Institute of Plastics Engg & Tech), Chennai</li>
            <li>INFED (INFLIBNET Access Management Federation), Gandhinagar</li>
            <li>NDLI (National Digital Library of India), Kolkata</li>
            </ul>
            <p>
            Additionally, links to various national and international library networks are available in the library portal for resource sharing.
            </p>

            <h3>Links to Other Libraries</h3>
            <ul>
            <li><a href="http://www.iitb.ac.in/" target="_blank">IIT Bombay</a></li>
            <li><a href="http://www.iitd.ac.in/" target="_blank">IIT Delhi</a></li>
            <li><a href="http://www.iitg.ac.in/" target="_blank">IIT Guwahati</a></li>
            <li><a href="http://www.iitk.ac.in/" target="_blank">IIT Kanpur</a></li>
            <li><a href="http://www.iitkgp.ac.in/" target="_blank">IIT Kharagpur</a></li>
            <li><a href="https://www.iitm.ac.in/" target="_blank">IIT Madras</a></li>
            <li><a href="http://www.iitr.ac.in/" target="_blank">IIT Roorkee</a></li>
            <li><a href="http://www.iisc.ernet.in/" target="_blank">IISc Bangalore</a></li>
            <li><a href="http://www.icast.org.in/" target="_blank">ICAST</a></li>
            <li><a href="http://ncsinet.org/ncsi" target="_blank">NCSI Bangalore</a></li>
            <li><a href="https://www.iimk.ac.in/" target="_blank">IIM Kozhikode</a></li>
            <li><a href="https://www.iimcal.ac.in/" target="_blank">IIM Calcutta</a></li>
            <li><a href="http://www.iimb.ernet.in/" target="_blank">IIM Bangalore</a></li>
            <li><a href="http://www.iimidr.ac.in/" target="_blank">IIM Indore</a></li>
            <li><a href="http://www.iimahd.ernet.in/" target="_blank">IIM Ahmedabad</a></li>
            <li><a href="http://www.isical.ac.in/" target="_blank">Indian Statistical Institute</a></li>
            <li><a href="http://www.nitc.ac.in/" target="_blank">NIT Calicut</a></li>
            </ul>

            <h3>National Library Networks</h3>
            <ul>
            <li><a href="http://www.alibnet.org/" target="_blank">Ahmedabad Library Network</a></li>
            <li><a href="http://www.webpages.uidaho.edu/~mbolin/jebaraj-networks.htm" target="_blank">Bombay Library Network</a></li>
            <li><a href="http://www.calibnet.org/" target="_blank">Calcutta Library Network</a></li>
            <li><a href="http://www.delnet.nic.in/" target="_blank">DELNET</a></li>
            <li><a href="http://www.inflibnet.ac.in/" target="_blank">INFLIBNET</a></li>
            <li><a href="http://www.punenet.ernet.in/" target="_blank">Pune Library Network</a></li>
            <li><a href="http://www.mylibnet.org/" target="_blank">Mysore Library Network</a></li>
            <li><a href="http://sunsite.berkeley.edu/Libweb/" target="_blank">Library Servers via WWW</a></li>
            </ul>

            <h3>International Library Networks</h3>
            <ul>
            <li><a href="http://libraries.mit.edu/" target="_blank">MIT</a></li>
            <li><a href="http://www.library.gatech.edu/" target="_blank">Georgia Tech</a></li>
            <li><a href="http://library.caltech.edu/" target="_blank">Caltech</a></li>
            <li><a href="http://cisti-icist.nrc-cnrc.gc.ca/" target="_blank">CISTI Canada</a></li>
            <li><a href="http://library.caltech.edu/" target="_blank">Stanford University</a></li>
            <li><a href="http://www.loc.gov/" target="_blank">Library of Congress</a></li>
            <li><a href="http://www.bl.uk/" target="_blank">British Library</a></li>
            <li><a href="http://www.lib.uts.edu.au/" target="_blank">University of Technology Sydney</a></li>
            <li><a href="http://www1.rmit.edu.au/library" target="_blank">RMIT</a></li>
            <li><a href="http://cit.edu.au/cit_library_services" target="_blank">Canberra Institute of Technology</a></li>
            <li><a href="http://www.theeuropeanlibrary.org/tel4/" target="_blank">European Library</a></li>
            <li><a href="http://www.lib.umd.edu/epsl" target="_blank">Virtual Technical Reports Center</a></li>
            <li><a href="http://library.ust.hk/" target="_blank">HKUST Library</a></li>
            <li><a href="http://www.umist.ac.uk/library" target="_blank">UMIST UK</a></li>
            <li><a href="https://vt.libapps.com/libapps" target="_blank">Virginia Tech Library</a></li>
            </ul>
        </div>
        )}

        {activeSection === "Circulation Information" && (
        <div className="library-section-content">
            <h2>Circulation Information</h2>

            <h3>Who Can Borrow Library Materials?</h3>
            <ul>
            <li>Current Students, Faculty, Staff, and Alumni</li>
            </ul>

            <h4>Borrowing Privileges:</h4>
            <ul>
            <li><strong>Graduate Students:</strong> Up to 4 items for 14 days</li>
            <li><strong>Postgraduate Students:</strong> Up to 6 items for 14 days</li>
            <li><strong>Faculty/Staff:</strong> Up to 6 items for 3 months</li>
            <li><strong>Alumni:</strong>
                <ul>
                <li>May obtain photocopies (Xerox copies)</li>
                <li>Reference access only, allowed at all times</li>
                </ul>
            </li>
            </ul>

            <h3>How to Borrow Library Materials?</h3>
            <ul>
            <li>Present a valid KEC ID card at checkout</li>
            <li>Items can be renewed in person for another 14 days</li>
            <li>Overdue fine: ₹1 per item per day</li>
            </ul>

            <h4>Items That Can Be Borrowed</h4>
            <ul>
            <li><strong>Circulation Collection</strong>
                <ul>
                <li>Books available in the Library</li>
                <li>Checked out at the Circulation Desk on the Main Level</li>
                </ul>
            </li>
            <li><strong>Media Collection</strong>
                <ul>
                <li>Includes video tapes, audio tapes, CDs, CD-ROMs, DVDs</li>
                <li>Available in the Library's Digital Section</li>
                <li>Checked out at the Media Desk</li>
                <li>Loan duration: 1 day for all users</li>
                </ul>
            </li>
            <li><strong>Interlibrary Loan (ILL):</strong> Books, Articles, Digital Resources</li>
            </ul>

            <h3>Information & Assistance</h3>
            <p>
            For any queries or support regarding library borrowing or resources, please contact the library staff for assistance.
            </p>
        </div>
        )}


        {activeSection === "Staff" && (
        <div className="library-section-content">
            <h2>Library Staff</h2>

            <h3>Professor In-charge - Library</h3>
            <p><strong>Dr. R. Baskar</strong><br />Department of Food Technology</p>

            <h3>Library Staff Members</h3>
            <div className="staff-table-wrapper">
            <table className="staff-table">
                <thead>
                <tr>
                    <th>Sl. No.</th>
                    <th>Name</th>
                    <th>Qualification</th>
                    <th>Designation</th>
                </tr>
                </thead>
                <tbody>
                {[
                    ["1", "Dr. S. ARJUNAN", "MA., M.Lib.I.Sc., M.Phil., Ph.D.", "LIBRARIAN (Sl.G)"],
                    ["2", "Mr. D. SHANMUGASUNDARAM", "MA., M.Lib.I.Sc., M.Phil., PGDCA.", "ASSISTANT LIBRARIAN"],
                    ["3", "Mr. S. JAGANATHAN", "BA., M.Lib.I.Sc., PGDCA.", "ASSISTANT LIBRARIAN"],
                    ["4", "Mr. R. THANGARAJ", "B.Com., M.Lib.I.Sc.", "LIB. ASST. (Sr.G)"],
                    ["5", "Mr. C. SWAMINATHAN", "B.Com., M.Lib.I.Sc., DPCS.", "LIB. ASST. (Sr.G)"],
                    ["6", "Mr. S. SURESH", "C.Lib.I.Sc.", "LIBRARY ASSISTANT"],
                    ["7", "Mr. S. SHANMUGAM", "C.Lib.I.Sc.", "LIBRARY ASSISTANT"],
                    ["8", "Ms. N. GOMATHIPRIYA", "M.Sc., B.Lib.I.Sc.", "LIBRARY ASSISTANT"],
                    ["9", "Mr. K. DURAISWAMI", "T/W BOTH HIGHER/SHORT HAND (English Jr.)", "DATA ENTRY OPERATOR"],
                    ["10", "Mr. V. NANDHAKUMAR", "B.Com (CS)", "TECHNICAL ASSISTANT"],
                    ["11", "Ms. M. SATHYA", "B.A", "LIBRARY ASSISTANT"],
                    ["12", "Mr. J. KARTHIK", "BBA", "TECHNICAL ASSISTANT"]
                ].map(([sl, name, qualification, designation]) => (
                    <tr key={sl}>
                    <td>{sl}</td>
                    <td>{name}</td>
                    <td>{qualification}</td>
                    <td>{designation}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        </div>
        )}

        {activeSection === "Contact Us" && (
        <div className="contact-container">
            <h2 className="contact-title">Contact Us</h2>

            <div className="contact-list">
            <div className="contact-item">
                <p className="contact-name">Dr. R. Baskar</p>
                <p className="contact-role">Professor In-Charge</p>
                <p className="contact-phone">Phone: 04294 226630</p>
            </div>
            <div className="contact-item">
                <p className="contact-name">Dr. S. Arjunan</p>
                <p className="contact-role">Librarian (Sr.G)</p>
                <p className="contact-phone">Phone: 04294 226842</p>
            </div>
            <div className="contact-item">
                <p className="contact-name">Mr. D. Shanmugasundaram</p>
                <p className="contact-role">Assistant Librarian (Acquisition Section)</p>
                <p className="contact-phone">Phone: 04294 226631</p>
            </div>
            <div className="contact-item">
                <p className="contact-name">Mr. S. Jaganathan</p>
                <p className="contact-role">Assistant Librarian (Digital & Periodical Section)</p>
                <p className="contact-phone">Phone: 04294 226630</p>
            </div>
            </div>

            <div className="contact-email">
            <p>
                For any queries or feedback, email us at:{" "}
                <a href="mailto:keclib@kongu.ac.in" className="email-link">
                keclib@kongu.ac.in
                </a>
            </p>
            </div>
        </div>
        )}






        {/* Add other sections here using the same pattern */}
      </div>
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default Library;
