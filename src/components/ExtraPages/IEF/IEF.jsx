import './IEF.css';
import Navbar from './navbar';
import AnimatedBackground from './AnimatedBackground';

const IEF = () => {
  return (
    <div>

      <div className="land">
        <AnimatedBackground />
        <Navbar />
        <div className='info'>
          <h1> KEC Innovation and Entrepreneurship Forum (KEC IEF)</h1>
          <p>is a combined platform of Entrepreneurship and Management Development Centre (EMDC), Institution's Innovation Council (IIC) and Technology Business Incubator (TBI). IEF creates awareness about Entrepreneurship; kindles ideas and nurtures innovation and incubates campus startups. Initiatives of IEF are: KEC Spark Fund, Freelancer forum, Business Cell, Women Entrepreneurship Cell, Ideathon, Hackathon, Proof of Concept (PoC) & Prototype expos.
          </p>
        </div>
      </div>
      
        <div className='sec1'>
              <img src="ief/images/ief.jpg"  alt="image" />
              <h2>Entrepreneurship and Management Development Centre (EMDC)</h2>
              <ul>
                <li>EMDC established during 1993 with funds from Central government creates awareness among students, faculty and staff about the value of entrepreneurship and its role in career development</li>
                <li>EMDC promotes entrepreneurship as a viable career and provide pre-incubation support to innovators / students to culminate in campus start-ups / new ventures</li>
                <li>EMDC comprises of Overall Coordinator, Departmental Faculty Coordinators, Departmental Student Coordinators and student members</li>
              </ul>
          </div>

        <div className='sec2'>
            <h2>Institution's Innovation Council</h2>
            <ul>
              <li>IIC @ KEC established during 2018-19 under the guidance of MoE Innovation Cell (MIC) works in accordance with the Annual calendar activities prescribed by the MIC and promote innovation-led activities</li>
              <li>IIC organizes periodic workshops / seminars / interactions with entrepreneurs, eco system partners, investors / Hackathons, Idea competition and Prototype Expos, mini-challenges etc. with the involvement of industries</li>
              <li>IIC KEC comprises of President, Vice President, Convenor, Faculty Coordinator, Innovation Ambassadors, Faculty and Student Coordinators for various activities, Departmental Faculty Coordinators and student members</li>
            </ul>
            <a href="https://iic.mic.gov.in/" target="blank">Click here for more details</a>
        </div>

        <div className='sec3'>
            <h2>Technology Business Incubator @ Kongu Engineering College (TBI@KEC)</h2>
            <ul>
              <li>TBI@KEC was established in 2003 as a joint venture by KEC with the generous grant-in-aid and support of NSTEDB/DST, Govt. of India (at a total project cost of Rs.3.95 Crore) for nurturing and promoting innovation and entrepreneurship development in cutting edge technology areas (with thrust in Electronics & ICT)</li>
              <li>TBI in an area of 26,800 Sq.ft provides total support to the incubatees right from "Concept to Commercialization" under various stages</li>
              <li>TBI conducts capacity building programs, validates problem - solution fit & product-market fit, provides mentoring support, financial assistance, networking with other agencies, helps in pitching to national & international investors, provides infrastructure & lab support of TBI and HI in addition to spotting and involving talented students (Interns) and faculty to work with the entrepreneurs for a win-win situation</li>
            </ul>
            <a href="https://tbi-kec.org/" target="blank">Click here for more details</a>
        </div>
    

    </div>
  );
};

export default IEF;
