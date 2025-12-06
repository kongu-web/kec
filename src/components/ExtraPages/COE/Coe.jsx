import React, { useState } from 'react';
import './Coe.css';
import Footer from '../../HomePage/Footer/Footer';
import ScrollToTopButton from '../../ScrollToTopButton';
import Section from '../../HomePage/Section/Section';
import Navbar from '../../HomePage/navbar/Navbar';
import topImage from '../../../assets/images/InnovationEcosystem/Coe/coe.jpg';

const coeData = [
  {
    title: "Mechanical Engineering - Centre of Excellence in Automotive Product Development",
    image: require('../../../assets/images/InnovationEcosystem/Coe/mech1.jpg'),
    content: null,
    features: ["Offer INTERNSHIP cum job opportunity to KEC Students @ MACBRO R&DCentre.",
        "Offer training to KEC Trainers in specific product development domain.",
        "Offer in-depth Global Industry Standard specific training in selected subjects at lowest affordable cost to the students of KEC",
        "Support Tear down LAB setup @ COEPremises."
    ],
    objectives: ["To provide Industry Expected Employability Skillset to the students of KEC.",
        "To make KEC students aware of Industry specific tools and techniques in order to make them industry ready at the end of their programtraining."
    ],
    outcomes: null
  },
  {
    title: "Mechanical Engineering - Centre of Excellence in Energy Studies",
    image: require('../../../assets/images/InnovationEcosystem/Coe/mech2.jpg'),
    content: ["Centre of Excellence in Energy Studies serves as an Interdisciplinary Centre catering the training and research needs of Mechanical and EEE Departments. Consultancy on energy management is effectively carried out for industries and institutions. Energy benchmarking for selected industries are carried out with the help of Bureau of Energy Efficiency certified Energy Auditors. This centre supports energy management professionals to become certified Energy Managers and Auditors."],
    features: null,
    objectives: null,
    outcomes: null
  },
  {
    title: "Mechatronics Engineering - Centre of Excellence in Robotics and Automation",
    image: require('../../../assets/images/InnovationEcosystem/Coe/mts1.jpg'),
    content : ["The Centre of Excellence in Robotics and Automation (CoE-R&A) is a cutting-edge state of art platform to learn, build, explore and realize Robot technologies. CoE-R&A established in 2021 and it holds modern equipment namely Fanuc ER-4iA Robot, Fanuc CNC Simulator, 6 Axis Industrial Manipulator ABB IRB 1410, Humanoid Robot: NAO 6th Gen, Dobot Magician Kit with Accessories, e-Yantra lab setup, Aristo Robot (MTAB), LabVIEW Robotics sbRIO Starter Kit, NI 1742 Smart Camera Evaluation Kit, QBot 2e and various software tools with upgraded license to equip the users. It enables the user to experience the Robotic and Automation world to meet the growing demands for trained engineers in industrial automation. It also offers multifold benefits for promoting research, participation in national and international competitions, availing grants, and tailor made as expected by users.All the exercises mentioned in the syllabus of under graduate and postgraduate programs can be carried out in this centre. The dimension of the centre is 24 m x9 m, having total area of 216 m2. The total cost of the equipment is around Rs.1 Crore.",
        "General maintenance like hardware troubleshooting, software reinstallation etc., are normally done by the centre technician and the system administrator of the college. In addition to the laboratory manual prepared by the department, the students have the facility to refer the company manuals. Two teaching faculties are conducting laboratory classes with the help of lab technician. The faculty in-charges have a cabin inside the laboratory itself.",
        "The centre has the facility to get 24 X 7 uninterrupted power supply with the help of UPS (10 kVA), and also by generator and Compressor with 6 bar pressure is available.",
        "Apart from the regular classes, Short-term courses, certification courses are arranged for the benefit of our students in the recent emerging fields during evening hours (4.30 to 7.30 pm) and also during holidays. The centre is kept open till 7 PM during working days. The software and hardware available are fully utilized by both UG and PG students, to do their project work."
    ],
    features: null,
    objectives: null,
    outcomes: null
  },
  {
    title: "Computer Science and Engineering - Centre of Excellence in Cyber Security",
    image: require('../../../assets/images/InnovationEcosystem/Coe/cse1.jpg'),
    content: ["Center of Excellence in Cyber Security aims to create a more diverse, equitable and inclusive cybersecurity workforce. It bridges the gap between learning and careers through access to industry-recognized Fortinet NSE training and certification courses. The Academic Partner Program collaborates with highest education institutions to help learners become part of an elite group of skilled cybersecurity professionals. Fortinet sponsors the training content and exam vouchers for each Authorized Security Academy, along with supporting instructor preparation. COE will prepare students for a career in cyber security and build a workforce skilled in all aspects of Fortinet’s network security platform who will be recognized in the industry among an elite group of security professionals. Fortinet will provide access to self-paced training to Academy students and provide exam vouchers upon request for students who have completed the self-paced learning. Fortinet will inform student who complete the self-paced learning of any potential internships or employment opportunities at Fortinet. Supported by Fortinet, Network Security Academy, California-94086."],
    features:null,
    objectives: null,
    outcomes: null
  },
  {
    title: "Information Technology - Centre of Excellence in Data Science",
    image: require('../../../assets/images/InnovationEcosystem/Coe/it1.jpg'),
    content: ["Name of the Industry Support for the Establishment : TEG Global Infrastructures Private Limited, Coimbatore"],
    features: null,
    objectives: ["Build an infrastructure to support researchers and students in doing research related to big data analytics.",
        "Give training to faculty and students in data science technologies.",
        "Improve the quality of publications.",
        "Equip the students with current industry needs."
    ],
    outcomes: ["Conducted a two-day workshop on the fundamentals of deep learning from 10.01.2022 to 11.01.2022. Thirty-two faculty members participated and successfully completed the NVIDIA DLI Certification on Getting Started with Deep Learning.",
        "Conducted a two-day workshop on building video applications using TAO toolkit from 15.12.2022 to 16.12.2022. Thirty-one faculty members participated and successfully completed the NVIDIA DLI Certification on building real-time video AI applications."
    ]
  },
  {
    title: "Computer Science and Design - Centre of Excellence in Virtual Reality and Augmented Reality",
    image: require('../../../assets/images/InnovationEcosystem/Coe/csd1.jpg'),
    content:["Virtual Reality and Augmented Reality Center of Excellence was established in 06 July 2023. Our lab is equipped with Dell Precision 3660 Tower Workstation (36 Units) Core i9 12900K processor, 32 Gb RAM, 512 SSD, 1 TB Sata HDD, Nvidia GeForce RTX 3070 8 GB, 21.5” Full HD Monitor,Meta Quest -2 VR Headset (10 Units)."],
    features:null,
    objectives: ["To prepare the students as skilled professionals in Immersive Technologies like Virtual Reality (VR), Augmented Reality (AR) by providing global certification programs.",
        "To enrich the knowledge of the faculty members in the Immersive Technology field by conducting hands-on training programs and certification programs.",
        "To train the needy people in the Immersive Technology through consultancy."
    ],
    outcomes: ["Enable the student to acquire job in the Immersive Technologies.",
        "Empower the faculty to collaborate and partnerships with industry experts for knowledge sharing and develop products through research and development in the field of Immersive Technologies.",
        "Facilitates the faculty for generating the revenues through consultancy activities."
    ]
  },
  {
    title: "Electronics and Communication Engineering - Centre of Excellence in Embedded AI",
    image: require('../../../assets/images/InnovationEcosystem/Coe/ece1.jpg'),
    content:["CoE on Embedded AI established in the Department of ECE in collaboration with M/s Digitoad Technologies, Bengaluru focusses on the design and development of Edge AI computing applications based on STMicroelectronics based processors. Driven by the future demand of AI skilled engineers, the Embedded AI Education Program has been designed with the objectives of:"],
    features:null,
    objectives: ["Upskilling the engineering students on the key challenges involved in Embedded AI and Machine Learning based projects and prepare them for the Edge AI industry",
        "Upgrade & enhance the existing curriculum on IoT and Embedded Systems and make them AI Ready"
    ],
    outcomes: ["The CoE delivers Embedded AI Associate Developer Certification Course in collaboration with Digitoad Technologies to make students and faculty updated on the recent trends in ARM architectures. CoE also offers assistance for ideation and project implementation, internship and placement assistance and development of Edge computing applications."]  },
  {
    title: "Electrical and Electronics Engineering - Centre of Excellence in Smart Electrical Lab",
    image: require('../../../assets/images/InnovationEcosystem/Coe/eee1.jpg'),
    content:["The CoE in association with Schneider Electric (P) Ltd aims to develops skill set in building automation and industrial drives among the student community to mould them industry ready. The CoE organizes short term program for a span of 2 days – 5 days on a nominal cost. The training certificate issued after completion is a global certification from Schneider which helps the students to fit into their carrier in any of the core company"],
    features:null,
    objectives: null,
    outcomes: null  },
  {
    title: "Electronics and Instrumentation Engineering - Centre of Excellence on Industrial IoT",
    image: require('../../../assets/images/InnovationEcosystem/Coe/eie1.jpg'),
    content:["To inculcate knowledge in the era of digital transformation by the integration of IT(Information Technology) and OT (Operation Technology) for industrial process",
        "To give a practical exposure in the area of: Intelligent sensors, Industrial networking, and Industrial IoT, Advanced PLC programming and 3D simulation studies in factory automation"
    ],
    features:["PLCs with cloud compatibility",
        "IIoT sensors and LoRA gateway",
        "3D simulation software",
        "Cloud communication API\'s",
        "NVIDIA Jetson TX2 NX edge processor",
        "AI/ML inferencing platform",
        "Phoenix PLCnext Starter Kit",
        "Beckhoff PLC With Twin CAT-3",
        "Siemens PLC S7 1200",
        "LoRa WAN Gateway with IIoT Sensors",
        "AI Face Recognition Access Control",
        "Factory I/O -3-D Simulation",
        "IoT based Communication: Modbus, OPC UA, MQTT, Node-Red",
        "Cloud connectivity",
        "IEC 61131-3 Languages of PLC programming",
        "High level programming languages for PLC and link to Matlab Simulink",
        "IoT based Automation for Industrial use cases using Factory I/O",
        "AI based Industrial Automation - AWS Services",
    ],
    objectives: null,
    outcomes: null  },
  {
    title: "Chemical Engineering - Centre of Excellence on Chemical Simulation Studies",
    image: require('../../../assets/images/InnovationEcosystem/Coe/chem1.png'),
    content:["The Centre of Excellence in Chemical Simulation Studies, inaugurated on 04.12.2024, is dedicated to advancing chemical engineering education by integrating cutting-edge simulation technologies into both training and research environments. Sponsored by Sim Infosystems Private Limited, Chennai, the center focuses on key areas such as dynamic simulation, process control, instrumentation, and industrial automation, equipping students with the necessary skills to excel in the chemical process industries."],
    features: [
      "High-Fidelity Industrial Training Simulator that includes a Dynamic Process Model, Instructor Station, and DCS Emulation Station to replicate real-world plant operations",
      "Data Extraction facility from Simulated Plants that extracts real-time data for troubleshooting and resolving operational issues in simulated industrial scenarios and train students to apply machine learning techniques for predicting failures and optimizing plant operations",
      "Model Development Package that helps in creating Operator Training Simulators (OTS) for process industries, providing hands-on training for industrial control systems"
    ],
    objectives: [
        "To demonstrate engineering principles in real-world plant design, operation, and control",
        "To enhance practical knowledge and skills in instrumentation equipment and process control",
        "To provide an industrial-level simulation environment through the Industrial Simulator - DCS3000",
        "To train students in what-if analysis and troubleshooting techniques",
    ],
    outcomes: [
      "Comprehensive process understanding using industry-relevant simulations",
        "Industrial exposure in process control and instrumentation",
        "Knowledge of process control automation and safety through DCS operations",
        "Hands-on experience with complex process dynamics",
        "Enhanced employability through practical engineering training",

    ]
  },
];

const Coe = () => {
    const [selectedIndex, setSelectedIndex] = useState(null);
  
    const handleClick = (index) => {
      setSelectedIndex(index === selectedIndex ? null : index);
    };
  
    return (
      <>
        <Section />
        <Navbar />
        <div className="coe-container">
          <div className="coe-header">
            <h2 className="coe-title">Centre of Excellence @ KEC</h2>
            <div className="coe-description">
              <div className="coe-text">
                <p>
                  Kongu Engineering College establishes Center of Excellence (CoE) to enhance the skills and knowledge of students and faculty in various emerging technologies. The CoEs are equipped with state-of-the-art infrastructure and facilities relevant to the specific field of study, includes advanced laboratories, specialized equipments, software, and other resources necessary for hands-on learning and practical applications. Students have the opportunity to gain practical experience and hands-on training, preparing them for real-world challenges in their core industry. It also engages students and faculty in industry-relevant projects and provides practical exposure and helps to bridge the gap between academic knowledge and industry requirements.
                </p>
                <p>
                  It serves as hubs for continuous learning and knowledge upgradation. Regular workshops, seminars, and training sessions conducted within the CoE, help the students and faculty to have the insight on latest developments in their field and plays a role in promoting research and innovation within a specific domain.
                </p>
              </div>
              <div className="coe-image-container">
                <img src={topImage} alt="Centre of Excellence" className="coe-top-image" />
              </div>
            </div>
          </div>
  
          <div className="coe-card-section">
            {coeData.map((coe, index) => (
              <div key={index} className="coe-card">
                <button className="coe-card-title" onClick={() => handleClick(index)}>
                  {coe.title}
                </button>
  
                {selectedIndex === index && (
                  <div className="coe-details">
                    <img src={coe.image} alt={coe.title} className="coe-detail-image" />
  
                    {coe.content && (
                      <div className="coe-section">
                        <h3>Content</h3>
                        <ul>{coe.content.map((item, idx) => <li key={idx}>{item}</li>)}</ul>
                      </div>
                    )}
  
                    {coe.features && (
                      <div className="coe-section">
                        <h3>Features</h3>
                        <ul>{coe.features.map((item, idx) => <li key={idx}>{item}</li>)}</ul>
                      </div>
                    )}
  
                    {coe.objectives && (
                      <div className="coe-section">
                        <h3>Objectives</h3>
                        <ul>{coe.objectives.map((item, idx) => <li key={idx}>{item}</li>)}</ul>
                      </div>
                    )}
  
                    {coe.outcomes && (
                      <div className="coe-section">
                        <h3>Outcomes</h3>
                        <ul>{coe.outcomes.map((item, idx) => <li key={idx}>{item}</li>)}</ul>
                      </div>
                    )}
                  </div>
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
  
  export default Coe;
  