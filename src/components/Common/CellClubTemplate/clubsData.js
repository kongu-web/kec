import { nssData } from '../NSS/nssData';
import { nccData } from '../NCC/nccData';

import cc1 from '../../../assets/images/Clubs/citizen/cc1.webp';
import cc2 from '../../../assets/images/Clubs/citizen/cc2.webp';
import cc3 from '../../../assets/images/Clubs/citizen/cc3.webp';
import cc4 from '../../../assets/images/Clubs/citizen/cc4.webp';
import cc5 from '../../../assets/images/Clubs/citizen/cc5.webp';
import cc6 from '../../../assets/images/Clubs/citizen/cc6.webp';

import cii1 from '../../../assets/images/Clubs/cii-yuva/cii1.webp';
import cii2 from '../../../assets/images/Clubs/cii-yuva/cii2.webp';
import cii3 from '../../../assets/images/Clubs/cii-yuva/cii3.webp';
import cii4 from '../../../assets/images/Clubs/cii-yuva/cii4.webp';
import cii5 from '../../../assets/images/Clubs/cii-yuva/cii5.webp';
import cii6 from '../../../assets/images/Clubs/cii-yuva/cii6.webp';
import cii7 from '../../../assets/images/Clubs/cii-yuva/cii7.webp';
import cii8 from '../../../assets/images/Clubs/cii-yuva/cii8.webp';
import cii9 from '../../../assets/images/Clubs/cii-yuva/cii9.webp';
import cii10 from '../../../assets/images/Clubs/cii-yuva/cii10.webp';

export const clubsData = [
    // {
    //     id: "innovation-hub",
    //     name: "KEC Innovation & Startup Hub",
    //     category: "Technical",
    //     about: "Dedicated to fostering a culture of innovation and entrepreneurship among students by providing technical resources, mentorship, and a platform to launch startups.",
    //     objectives: [
    //         "To provide a collaborative workspace for student inventors.",
    //         "To mentor students on intellectual property and patent filing.",
    //         "To connect student startups with venture capitalists and investors.",
    //         "To conduct regular hackathons and idea pitching competitions."
    //     ],
    //     coordinators: [
    //         {
    //             name: "Dr. A. Arulvel",
    //             designation: "Chief Coordinator",
    //             dept: "Innovation Center",
    //             phone: "+91 98765 43210",
    //             email: "arulvel@kongu.ac.in",
    //             image: "" // Mock image
    //         },
    //         {
    //             name: "Mr. S. Karthick",
    //             designation: "Assistant Coordinator",
    //             dept: "CSE",
    //             phone: "+91 91234 56789",
    //             email: "karthick.cse@kongu.ac.in",
    //             image: "" // Mock image
    //         }
    //     ],
    //     activitiesSummary: {
    //         "2025-26": 5,
    //         "2024-25": 12,
    //         "2023-24": 8
    //     },
    //     eventDetails: [
    //         {
    //             year: "2025-26",
    //             events: [
    //                 {
    //                     sno: 1,
    //                     name: "Idea Pitchathon 2026",
    //                     date: "Feb 10, 2026",
    //                     details: "A campus-wide competition where students pitched their startup ideas to a panel of industrial experts."
    //                 },
    //                 {
    //                     sno: 2,
    //                     name: "Workshop on Patent Filing",
    //                     date: "Jan 15, 2026",
    //                     details: "Hands-on session on how to transform academic projects into legal patents."
    //                 }
    //             ]
    //         },
    //         {
    //             year: "2024-25",
    //             events: [
    //                 {
    //                     sno: 1,
    //                     name: "Startup Expo",
    //                     date: "Oct 22, 2024",
    //                     details: "Showcasing student-led ventures to local business leaders and alumni."
    //                 }
    //             ]
    //         }
    //     ],
    //     gallery: [
    //         "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
    //         "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800",
    //         "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
    //         "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800",
    //         "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
    //         "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800",
    //         "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
    //         "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800",
    //         "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
    //         "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800",
    //         "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
    //         "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
    //     ],
    //     driveLink: "https://drive.google.com/sample",
    //     reports: [
    //         { title: "Annual Innovation Report 2025", link: "#" },
    //         { title: "Success Stories: KEC Startups", link: "#" }
    //     ],
    //     otherDetails: "The Hub is accessible 24/7 for registered members working on approved projects."
    // },
    {
        id: "citizen-consumer",
        name: "Citizen Consumer / Legal Literacy Club",
        category: "Social",
        about: "Empowering students with knowledge about consumer rights and legal literacy to become responsible citizens.",
        objectives: [
            "To spread awareness about consumer rights and responsibilities.",
            "To promote legal literacy among the student community.",
            "To organize seminars on consumer protection laws."
        ],
        coordinators: [
            { name: "Dr. V. Vaishnavi", designation: "Coordinator", dept: "MBA", phone: "9003463969" }
        ],
        activitiesSummary: { "2025-26": 7, "2024-25": 8},
        eventDetails: [
            {
                year: "2025-26",
                events: [
                    {
                        sno: 1,
                        name: "Inaugural Function: Digital Addiction",
                        date: "Oct 13, 2025",
                        details: "Chief Guest Mr. Vinoth Sudarsanam (DSP) spoke on Overcoming Digital Addiction to promote mindful technology use and mental well-being."
                    },
                     {
                        sno: 2,
                        name: "Disaster Preparedness Project",
                        date: "Oct 4, 2025",
                        details: "Educated the local community on natural disaster prevention, early warning systems, and evacuation procedures."
                    },
                     {
                        sno: 3,
                        name: "First Aid Awareness: Act Fast, Save Lives",
                        date: "Oct 4, 2025",
                        details: "Trained 50 community participants in essential life-saving skills, including CPR, wound dressing, and fracture management."
                    },
                     {
                        sno: 4,
                        name: "Marathon for Breast Cancer Awareness",
                        date: "Oct 5, 2025",
                        details: "Organized a 10km marathon titled “Hope in Every Ribbon” to spread awareness about early detection and raise funds for patients."
                    },
                    {
                        sno: 5,
                        name: "Blood Donation Camp",
                        date: "Oct 5, 2025",
                        details: "Collected approximately 50 units of blood from public donors under medical supervision to support local healthcare needs."
                    },
                    {
                        sno: 6,
                        name: "Drug Awareness Rally & Lecture",
                        date: "Oct 8, 2025",
                        details: "Students led a rally and attended a lecture on the physical and legal consequences of addiction to promote a drug-free lifestyle."
                    },
                       {
                        sno: 7,
                        name: "Consumer Day: Intra College Fest",
                        date: "Jan 31, 2026",
                        details: "Conducted competitions in Slogan Writing, Quiz, and Essay Writing under the theme “Not Every Ad Is Your Friend”."
                    },
                       {
                        sno: 8,
                        name: "Consumer Awareness event",
                        date: "Feb 19, 2026",
                        details: "Organized by the Tamil Nadu Government to educate students on rights, responsibilities, and grievance redressal. 20 students from Kongu Engineering College participated and received certificates."
                    },

                ]
            },
             {
                year: "2024-25",
                events: [
                    {
                        sno: 1,
                        name: "Independence Day Oratorical Event",
                        date: "August 16, 2024",
                        details: "Competition on A Teens Contribution to Viksit Bharat 2047, encouraging students to share visions for India’s centenary."
                    },
                     {
                        sno: 2,
                        name: "Village Awareness: Product Safety",
                        date: "Aug 23, 2024",
                        details: "Promoted community health and safety by educating residents on product standards and safe consumption practices."
                    },
                     {
                        sno: 3,
                        name: "Community Outreach: Nutrition & Literacy",
                        date: "Aug 24, 2024",
                        details: "Conducted sessions on food security, e-banking safety, and financial literacy for rural populations."
                    },
                     {
                        sno: 4,
                        name: "CCC Inaugural Function",
                        date: "Sep 12, 2024",
                        details: "Guest Lecture by Mr.R.Rajkumar on Turning Passion into Prosperity, focusing on consumer behavior and entrepreneurial mindset."
                    },
                    {
                        sno: 5,
                        name: "National Consumer Day Rally",
                        date: "Dec 10, 2024",
                        details: "A massive rally of 500 participants urged the public to be informed about fraudulent practices and product safety laws."
                    },
                    {
                        sno: 6,
                        name: "Consumer Rights Week Competitions",
                        date: "Dec, 2024",
                        details: "Organized week-long events in drawing and poetry to highlight Digital Era Challenges and Educated Consumers."
                    },
                       {
                        sno: 7,
                        name: "World Consumer Rights Day",
                        date: "Mar 15, 2025",
                        details: "Inter-college competitions where KEC students secured top prizes in Quiz and Drawing categories."
                    },
                       {
                        sno: 8,
                        name: "Valedictory Function",
                        date: "Mar 21, 2025",
                        details: "Recognition of office bearers and academic year summary."
                    },

                ]
            }
        ],
         gallery: [cc1, cc2, cc3, cc4, cc5, cc6]
    },
    {
        id: "cii-yi-yuva",
        name: "CII – Yi Yuva Kongu Engineering College",
        category: "Professional",
        about: "CII Yi YUVA KEC Club is to inspire, mentor, and empower students to become responsible leaders, entrepreneurs, and change-makers in society through innovation, leadership development, and social impact initiatives.",
        objectives: [
            "Promote Entrepreneurship – Encourage students to develop entrepreneurial thinking and start innovative ventures.",
            "Develop Leadership Skills – Provide opportunities for students to build leadership, communication, and decision-making skills.",
            "Industry Interaction – Connect students with industry leaders and entrepreneurs for knowledge sharing and mentorship.",
            "Encourage Innovation – Motivate students to create innovative solutions for real-world problems.",
            "Social Responsibility – Engage students in community development and social impact projects.",
            "Skill Development – Conduct workshops, training programs, and competitions to enhance professional skills.",
            "Networking Opportunities – Provide a platform for students to interact with members of Young Indians and industry experts.",
            "Career and Startup Guidance – Help students explore career paths and support them in building startups."
        ],
        coordinators: [
            { name: "Ms. M. Dharshne", designation: "Coordinator", dept: "MBA", phone: "9443752057" },
            { name: "Dr.M.Mohanasundari", designation: "Coordinator", dept: "MBA", phone: "9486763908" },
        ],
        activitiesSummary: { "2025-26": 6},
        eventDetails: [
               {
                   year: "2025-26",
                   events: [    
                     {
                   sno: 1,
                   name: "Emergency responders training program",
                   date: "August 11, 2025",
                   details: "CII YI YUVA KEC CLUB organized an organized an Emergency Responders Training Program on August 11, 2025, in Young Indians (Yi) – Erode Chapter, in partnership with EMRI Green Health Services and GVK. The session was conducted by Mr. Chandru, who provided hands-on training in first aid and emergency response techniques. Held at the 120 Lecturer Hall, the program trained MBA and B.Arch students (FN session) and NCC cadets (AN session) to respond effectively during medical emergencies. The initiative aimed to build a safety - conscious campus community and promote responsible citizenship. The program was coordinated by Dr. N. Prakash (AP – Sr.Grade/MBA), and Ms. M. Dharshne (AP/MBA)."
                  } ,
                 {
                   sno: 2,
                   name: "Certified Emergency First Aid and Basic Life Support (BLS) Training Program",
                   date: "August 18, 2025",
                   details: "CII YI YUVA KEC CLUB organized an Emergency Responders Training Program on August 18, 2025, in collaboration with Young Indians (Yi) – Erode Chapter, in partnership with EMRI Green Health Services, GVK. The session was conducted by Mr.Chandru, a certified EMRI trainer, who provided hands-on training on first aid, CPR, and emergency response techniques. Held at C.K. Prahlad Hall, MBA Block, the program trained sports students and NSS volunteers to effectively handle medical emergencies. The initiative aimed to equip students with life-saving skills and strengthen campus emergency preparedness, reflecting the institution’s commitment to student development and community service. The program was coordinated by Dr. N. Prakash (Associate Professor – Sr. Grade), and Ms. M.Dharshne (Associate Professor)."
                  },
                   {
                   sno: 3,
                   name: "Inaugural of the Club and Valedictory of Erode Varnam Vizha",
                   date: "September 16, 2025",
                   details: "The Erode Varnam Vizha Valedictory Session was held on September 16, 2025, at Kongu Engineering College, marking the conclusion of the cultural festival and the inauguration of the CII–Yi Yuva KEC Club. The event was graced by S.Kandasamy, IAS, District Collector of Erode, as Chief Guest. The program included cultural performances celebrating the heritage of Tamil Nadu and the formal inauguration of the Yi Yuva KEC Club by Ms.M.Dharshne, creating a platform for student leadership and entrepreneurship. A strategic panel discussion, moderated by Mr.T.Thiagarajan, Director of TIME Institute, featured distinguished panellists including Mr.D.Venkateswaran (Partner, CD Techno Tex LLP), Dr.K.Sudhakar (Managing Director, Sudha Hospitals), Mr. M. Chinnasami (Chairman &amp; Managing Director, Agni Steels Pvt.Ltd.), and Mr. Arachalur Selvam (State Co-ordinator,Tamil Nadu Organic Farmers Federation). The discussion focused on Erode’s development roadmap, highlighting industry modernization, healthcare expansion, sustainable agriculture, entrepreneurship, and skill development. The event also marked the launch of the Vision 2035 AI Assistant, a digital platform aimed at supporting community development and citizen engagement for the district’s future growth."
                  },
                   {
                   sno: 4,
                   name: "CII-Young Indians Thalir Young Indians Parliament",
                   date: "June 19 - 20, 2025",
                   details: "The CII Young Indians (Yi) Erode Chapter, in association with CII–Yi Yuva at Kongu Engineering College, organized the Young Indians Parliament on 19–20 June 2025 to promote democratic values, leadership, and public speaking among school students. Over 200 students from various schools participated, engaging in parliamentary- style debates and discussions to understand democratic processes and civic responsibility. The inaugural session was graced by T. Stalin Gunasekaran, while the valedictory session was attended by K. E. Prakash, MP (Lok Sabha), and Ganapathi P. Rajkumar, MP (Lok Sabha). Awards were presented to outstanding participants, and traditional Jamakkalam table mats were gifted to dignitaries to promote the local weaving heritage of Erode. The event served as a valuable platform to inspire youth to become responsible and informed citizens."
                  },
                    {
                   sno: 5,
                   name: "Yuva Entrepreneur Pitch fest - 2026",
                   date: "March 10, 2026",
                   details: "The YUVA Entrepreneur Pitch Fest 2026 was organized on 10 March 2026 at C.K. Prahalad Seminar all, MBA Block, Kongu Engineering College, Erode by the CII–Yi YUVA KEC Club in association with young Indians, an initiative of the Confederation of Indian Industry, as part of Bharat Entrepreneurship Week. The event provided a platform for student entrepreneurs to present their startup ideas and develop pitching and innovation skills. The program was graced by Krithika Shivkumar, Executive Director of TIPS and Managing Trustee of Arram Charity Trust, as the Chief Guest. Participating teams presented their business ideas, and the top three teams were recognized or their innovation and presentation. The event encouraged entrepreneurial thinking and provided networking opportunities with industry leaders."
                  },
                   {
                   sno: 6,
                   name: "Strategy Room - 2026",
                   date: "March 10, 2026",
                   details: "The Strategy Room – Case Study Challenge was organized on 10 March 2026 at C.K. Prahalad Seminar Hall, MBA Block, Kongu Engineering College, Erode by the CII–Yi YUVA KEC Club in association with Young Indians, an initiative of the Confederation of Indian Industry, as part of Bharat Entrepreneurship Week. The event aimed to enhance students’ strategic thinking and problem-solving skills through a case study challenge. Teams were given a business case 30 minutes prior to the program and presented their solutions in 10 minutes (7 minutes presentation and 3 minutes Q&A) following the format of Problem, Analysis, Strategy, and Conclusion. The program was graced by Krithika Shivkumar, Executive Director of TIPS and Managing Trustee of Arram Charity Trust, as the Chief Guest, and the best teams were recognized for their strategic insights andpresentations."
                  },
                          ]
              },
                      ],
                       gallery: [cii1, cii2, cii3, cii4, cii5, cii6, cii7, cii8, cii9, cii10]
    },

    {
        id: "cloud-users",
        name: "Cloud Users Group",
        category: "Technical",
        about: "A forum for students to explore, learn and implement cloud computing technologies and architectures.",
        objectives: [
            "To provide hands-on training in cloud platforms like AWS, Azure, and Google Cloud.",
            "To foster innovation in cloud-native applications.",
            "To prepare students for cloud certifications."
        ],
        coordinators: [
            { name: "Dr. PCD. Kalaivaani", designation: "Coordinator", dept: "CSE", phone: "9659447988" },
            { name: "Dr. N. Sasipriyaa", designation: "Coordinator", dept: "CSE", phone: "9976798392" }
        ],
        activitiesSummary: { "2025-26": 9, "2024-25": 5, "2023-24": 9 },
        eventDetails: [
             {
                   year: "2025-26",
                   events: [    
                     {
                   sno: 1,
                   name: "Inauguration of CUG",
                   date: "August 18, 2025",
                   details: "The programme marked the inauguration of the Cloud Users Group (CUG), introducing students to the objectives and activities of the club. It emphasized the importance of cloud technologies and encouraged students to explore cloud computing for innovation and career growth."
                  } ,
                 {
                   sno: 2,
                   name: "AWS Workshop",
                   date: "September 20, 2025",
                   details: "This workshop introduced students to the fundamentals of cloud computing and provided basic knowledge of Amazon Web Services (AWS). The session focused on understanding core cloud concepts and gaining initial hands-on exposure to AWS tools and services."
                  },
                   {
                   sno: 3,
                   name: "Workshop on basics of Cloud with AWS",
                   date: "September 22, 2025",
                   details: "The workshop on Basics of Cloud with AWS highlighted how cloud computing is transforming modern industries. Participants learned essential cloud concepts, AWS services, and practical applications that support digital transformation."
                  },
                   {
                   sno: 4,
                   name: "Workshop on Your first AWS Experience",
                   date: "Dec 27, 2025",
                   details: "The workshop focused on strengthening students’ understanding of cloud technologies through interactive sessions and practical demonstrations. It aimed to help participants develop technical knowledge and explore real-world cloud computing applications."
                  },
                    {
                   sno: 5,
                   name: "Cloud Wars",
                   date: "Dec 27, 2025",
                   details: "The Cloud Wars event included a quiz and dashboard design competition based on AWS concepts. The activities encouraged students to test their cloud knowledge, improve analytical skills, and apply cloud-based data visualization techniques."
                  },
                   {
                   sno: 6,
                   name: "CloudSpark",
                   date: "Jan 31, 2026",
                   details: "CLOUDSPARK’26 was an exclusive project presentation event where students showcased innovative cloud-based projects. The programme encouraged creativity, technical problem solving, and practical implementation of cloud technologies. "
                  },
                   {
                   sno: 7,
                   name: "Workshop on from code to cloud",
                   date: "Feb 21, 2026",
                   details: "This workshop titled “From Code to Cloud” focused on DevOps practices and cloud automation techniques. Students gained insights into deploying applications in cloud environments and presenting cloud-based project ideas."
                  },
                   {
                   sno: 8,
                   name: "CloudX",
                   date: "March 7, 2026",
                   details: "CLOUDX’26 was a national-level cloud symposium aimed at promoting knowledge sharing in cloud computing. The event provided a platform for experts and students to discuss emerging cloud technologies and industry applications."
                  },
                     ]
              },
               {
                year: "2024-25",
                events: [
                    {
                        sno: 1,
                        name: "Inaugural and special lecture ",
                        date: "August 17, 2024",
                        details: "The programme aimed to provide students with insights into cloud computing and its real-world applications in the industry. The session highlighted how cloud technologies are transforming modern businesses and enabling scalable digital solutions. The guest speaker shared practical knowledge about industry practices, career opportunities, and the importance of cloud architecture in today’s technology-driven environment."
                    },
                     {
                        sno: 2,
                        name: "Introduction to AWS ",
                        date: "Sep 21, 2024",
                        details: "This session was conducted to introduce students to the fundamentals of Amazon Web Services (AWS) and cloud computing. The programme focused on guiding beginners through the initial steps required to start working with AWS platforms. The speakers explained essential cloud concepts, practical usage of AWS tools, and strategies for building a successful career in cloud technologies."
                    },
                     {
                        sno: 3,
                        name: "Engineering for impact",
                        date: "Nov 9, 2024",
                        details: "The objective of this programme was to educate students on developing scalable and efficient software systems. The guest speaker discussed modern software development practices, system architecture, and techniques used to improve performance and scalability in applications. The session helped students understand how software systems are designed to handle large-scale users and complex operations."
                    },
                     {
                        sno: 4,
                        name: "Essential Skills to Land your first internship ",
                        date: "Feb 8, 2025",
                        details: "This programme was organized to help students understand the key skills required to secure and succeed in internships. The session focused on technical skills, communication abilities, problem-solving techniques, and professional behavior expected in the workplace. The speaker also shared industry insights and tips to help students prepare effectively for internship opportunities."
                    },
                    {
                        sno: 5,
                        name: "Nacreous’25 (Inter Department Symposium) ",
                        date: "March 29, 2025",
                        details: "This programme was organized as an interactive session aimed at engaging students in discussions related to emerging technologies and career development. The event provided a platform for students to interact, exchange ideas, and gain valuable guidance on industry expectations. The session encouraged participation and helped students broaden their understanding of professional growth and technological advancements."
                    },
                ] 
            },
                     {
                year: "2023-24",
                events: [
                    {
                        sno: 1,
                        name: "Inaugural and special lecture of Cloud and its Applications in the Industry Perspective ",
                        date: "August 12, 2023",
                        details: "The programme aimed to provide insights on “Cloud and its Applications in the Industry Perspective” through a special lecture delivered by Dr. Naveen Durai K from Gyanmatrix Technologies Private Limited. The session highlighted the importance of Azure training certification, information about AWS free login, the opportunities of Cloud in the industry, and exposure to current Cloud trends. The programme benefited 150 students."
                    },
                     {
                        sno: 2,
                        name: "AWS Workshop Introduction to AWS",
                        date: "Sep 16, 2023",
                        details: "The programme aimed to introduce students to the fundamentals of Amazon Web Services (AWS) through a workshop conducted by Hariharan Krishnamurthi, Senior Cloud Engineer, Presidio. The session covered topics such as Introduction to AWS, Static Web Hosting, Amazon Simple Storage Service (Amazon S3), and Amazon Elastic Compute Cloud (Amazon EC2). The workshop benefited 50 students."
                    },
                     {
                        sno: 3,
                        name: "Introduction to the Cloud Phase - 2",
                        date: "Oct 28, 2023",
                        details: "The programme aimed to provide further learning on Cloud technologies through the session “Introduction to the Cloud Phase – 2” delivered by Hariharan Krishnamurthi, Senior Cloud Engineer, Presidio and Shankar Dhandapani, Engineer, Presidio Cloud Solutions, Bangalore. The session highlighted Introduction to AWS, Static Web Hosting, Amazon Simple Storage Service (Amazon S3), and Docker. The programme benefited 40 students."
                    },
                     {
                        sno: 4,
                        name: "Exposure to Cloud Services ",
                        date: "Nov 8, 2023",
                        details: "The programme aimed to provide students with practical exposure to Cloud Services through a session delivered by Mr. Ram Akaashu B, Student, CSE, Kongu Engineering College. The session covered Introduction to AWS Cloud, Before and After AWS, Agility, Fault Tolerance, Security and Compliance, Amazon Virtual Private Cloud (VPC), Amazon Elastic Compute Cloud (EC2), and Elastic Load Balancing (ELB). The programme benefited 63 students."
                    },
                    {
                        sno: 5,
                        name: "Industry Lecture on Machine Learning and Cloud Framework",
                        date: "Nov 14, 2023",
                        details: "The programme aimed to provide knowledge on Machine Learning and Cloud Framework through an industry lecture delivered by Mr. Vishnu Kiran, R&D Engineer (DevOps), Jukshio Technology. The session highlighted topics such as GCP (Google Cloud Platform), Microsoft Azure, S3 (Simple Storage Service), AWS, Docker, and Kubernetes. The programme benefited 150 students."
                    },
                    {
                        sno: 6,
                        name: "Workshop on AWS Professional Certification",
                        date: "Dec 30, 2023",
                        details: "The programme aimed to guide students about AWS Professional Certification through a workshop delivered by Mr. Aravindh Chinnasamy, Hadoop Big-Data Architect and Principal Architect, Scala Technology. The session covered topics such as AWS, Cloud Computing, Industry applications, Functional Languages, Azure, GCP, and Hackathon opportunities. The programme benefited 106 students."
                    },
                       {
                        sno: 7,
                        name: "Workshop on Cloud and its Services ",
                        date: "March 16, 2024",
                        details: "The programme aimed to provide an understanding of Cloud and its Services through a workshop delivered by Mr. K. Gokula Krishnan, DevOps Engineer, HID Global, Chennai. The session highlighted topics such as what is cloud, uses of cloud, types of cloud, services of cloud, industrial usage of cloud, and operating systems. The programme benefited 50 students."
                    },
                       {
                        sno: 8,
                        name: "Nacreous- Technical Symposium",
                        date: "April 24, 2024",
                        details: "The programme aimed to conduct the Nacreous Technical Symposium to encourage students to participate in various technical and non-technical events. The technical events included Techshout, Technodium, Rush Hour, Code Bidding, and Tech Quiz, while the non-technical events included IPL Auction, Treasure Hunt, and Can You Guess. The symposium benefited 300 students."
                    },
                      {
                        sno: 9,
                        name: "CUG Valedictory",
                        date: "June 15, 2024",
                        details: "The programme aimed to mark the CUG Valedictory function and to provide insights into the current trends in the IT industry and placement opportunities. The session was delivered by Mr. Gandhamathan V, Software Associate Developer, Guvi Geek Networks and Mr. Abhimanyu V, Designer/Marketing, Practica A Fabrics. The programme benefited 60 students."
                    },
                ]
            },
        ]
    },

    {
        id: "coding-forum",
        name: "Coding Forum",
        category: "Technical",
        about: "The premier hub for competitive programmers and software enthusiasts to sharpen their coding skills.",
        objectives: [
            "To conduct regular coding contests and hackathons.",
            "To provide mentorship for placements in top product-based companies.",
            "To explore new algorithms and data structures."
        ],
        coordinators: [
            { name: "Dr. R. S. Latha", designation: "Coordinator", dept: "AI", phone: "	9500459161" },
            { name: "Ms. K. Karthika", designation: "Coordinator", dept: "CT-PG", phone: "8056515700" },
            { name: "Ms. R. Subapriya", designation: "Coordinator", dept: "AI", phone: "9442732285" }
        ],
        activitiesSummary: { "2025-26": 5},
        eventDetails: []
    },

    {
        id: "cultural-music",
        name: "Cultural & Music Club",
        category: "Cultural",
        about: "Celebrating the vibrant artistic talents of KEC through music, dance, and creative expressions.",
        objectives: [
            "To provide a platform for students to showcase their musical and artistic talents.",
            "To organize annual cultural festivals and Swaram events.",
            "To train students in various art forms and instruments."
        ],
        coordinators: [
            { name: "Mr. K. V. Satheesh Kumar", designation: "Coordinator", dept: "Mech", phone: "6383219802" },
            { name: "Dr. V. N. Kowshalya", designation: "Coordinator", dept: "Chemistry", phone: "9715557900" },
             { name: "Ms. S.Sharvanthika", designation: "Coordinator", dept: "CT-UG", phone: "8778955508" },
            { name: "Ms. S. Keerthana", designation: "Coordinator", dept: "CT-UG", phone: "8870756287" }
        ],
        activitiesSummary: { "2025-26": 10, "2024-25": 13, "2023-24": 9 },
        eventDetails: [
             {
                year: "2025-26",
                events: [
                    {
                        sno: 1,
                        name: "Inaugural Function",
                        date: "July 28, 2025",
                        details: "The academic year was formally inaugurated with a welcome address and introduction to upcoming events."
                    },
                     {
                        sno: 2,
                        name: "Techno Cultural Fest",
                        date: "Aug 21 - 22, 2025",
                        details: "A two-day fest with technical competitions by students."
                    },
                     {
                        sno: 3,
                        name: "Founders day",
                        date: "Aug 23, 2025",
                        details: "A celebration honoring the institution’s founder with speeches and cultural programs."
                    },
                     {
                        sno: 4,
                        name: "Onam 2k25",
                        date: "Sep 9, 2025",
                        details: "The festival of Onam was celebrated with traditional activities and student participation."
                    },
                    {
                        sno: 5,
                        name: "Raaga 3.0",
                        date: "Sep 29, 2025",
                        details: "A musical event where students showcased their singing and instrumental talents."
                    },
                    {
                        sno: 6,
                        name: "Special Performance",
                        date: "Nov 24, 2025",
                        details: "A special stage event featuring selected student performances."
                    },
                       {
                        sno: 7,
                        name: "Guest Reveal Performance",
                        date: "Feb 27, 2026",
                        details: "The guest performer for the main fest was revealed through an exciting performance."
                    },
                       {
                        sno: 8,
                        name: "Enthusia 2k26",
                        date: "March 2 - 3, 2026",
                        details: "A major two-day cultural fest with competitions, shows, and entertainment."
                    },
                    {
                        sno: 9,
                        name: "Instrument audition",
                        date: "March 13, 2026",
                        details: "Auditions were conducted to select instrumentalists for upcoming events."
                    },
                    {
                        sno: 10,
                        name: "Valedictory",
                        date: "March 16, 2026",
                        details: "The closing ceremony concluded the events and recognized participants."
                    },

                ]
            },
             {
                year: "2024-25",
                events: [
                    {
                        sno: 1,
                        name: "Inaugural Function",
                        date: "August 14, 2024",
                        details: "The academic year was formally inaugurated with a welcome address and introduction to upcoming events."
                    },
                     {
                        sno: 2,
                        name: "Independence Day",
                        date: "Aug 14, 2024",
                        details: "Independence Day was celebrated with patriotic performances and speeches honoring the nation's freedom."
                    },
                     {
                        sno: 3,
                        name: "Founders Day",
                        date: "Aug 17, 2024",
                        details: "A celebration honoring the institution’s founder with speeches and cultural programs."
                    },
                     {
                        sno: 4,
                        name: "Raaga 2.0",
                        date: "Oct 23, 2024",
                        details: "A musical event where students showcased their singing and instrumental talents."
                    },
                     {
                        sno: 5,
                        name: "Ruby year celebration",
                        date: "Oct 15, 2024",
                        details: "The institution celebrated its Ruby Jubilee with cultural events and special programs."
                    },
                    {
                        sno: 6,
                        name: "Special Performance 1(outside KEC -Texvalley)",
                        date: "Jan 1, 2025",
                        details: "A special cultural performance conducted outside the KEC at Texvalley showcasing student talents."
                    },
                   
                       {
                        sno: 7,
                        name: "Special Performance 2(Inside KEC-MBA Performance)",
                        date: "Jan 30, 2025",
                        details: "Students delivered a special performance for the MBA event."
                    },
                       {
                        sno: 8,
                        name: "Anchoring Workshop",
                        date: "Feb 14, 2025",
                        details: "A workshop conducted to train students in stage anchoring and communication skills."
                    },
                      {
                        sno: 9,
                        name: "Flash Mob",
                        date: "Feb 14, 2025",
                        details: "Students performed an energetic flash mob"
                    },
                      {
                        sno: 10,
                        name: "Special Performance 3(Inside KEC-Placement cell-Meet and Great)",
                        date: "Feb 15, 2025",
                        details: "A special performance was presented during the Placement Cell meet and greet program."
                    },
                      {
                        sno: 11,
                        name: "Enthusia 2k25",
                        date: "Feb 19 - 20, 2025",
                        details: "A major two-day cultural fest with competitions, shows, and entertainment."
                    },
                      {
                        sno: 12,
                        name: "Chemathon",
                        date: "Mar 1, 2025",
                        details: "Orchestra performance at Chemathon"
                    },
                      {
                        sno: 13,
                        name: "Special Performance 4(Inside KEC-E Horizon FlashMob)",
                        date: "Mar 3, 2025",
                        details: "A flash mob performance was conducted as part of the E-Horizon event to engage the audience."
                    },

                ]
            },
            {
                year: "2023-24",
                events: [
                    {
                        sno: 1,
                        name: "Inaugural Function",
                        date: "July 15, 2023",
                        details: "The academic year was formally inaugurated with a welcome address and introduction to upcoming events."
                    },
                     {
                        sno: 2,
                        name: "Founders Day",
                        date: "Aug 12, 2023",
                        details: "A celebration honoring the institution’s founder with speeches and cultural programs."
                    },
                     {
                        sno: 3,
                        name: "Raaga",
                        date: "Sep 16, 2023",
                        details: "A musical event where students showcased their singing and instrumental talents."
                    },
                     {
                        sno: 4,
                        name: "Drug Awareness Flashmob",
                        date: "Sep 13, 2023",
                        details: "A flash mob was performed to create awareness among students about the drug."
                    },
                    {
                        sno: 5,
                        name: "Erode Marathon-Drug Awareness Flahmob ",
                        date: "Oct 15, 2023",
                        details: "Students performed a flash mob during the Erode Marathon to promote drug awareness."
                    },
                   
                       {
                        sno: 6,
                        name: "Enthusia 2k24",
                        date: "Jan 8 - 9, 2024",
                        details: "A major two-day cultural fest with competitions, shows, and entertainment."
                    },
                       {
                        sno: 7,
                        name: "Mirchi FM-Kaloori Stars",
                        date: "March 1, 2024",
                        details: "Intra College Cultural Contest."
                    },
                      {
                        sno: 8,
                        name: "E-Horizon Awareness Flashmob",
                        date: "March 6, 2024",
                        details: "A flash mob performance was conducted as part of the E-Horizon event to engage and entertain the audience."
                    },
                      {
                        sno: 9,
                        name: "Students Participation",
                        date: "Sep 13, 2024",
                        details: "Students presented various cultural performances showcasing their creativity and talents."
                    },
                ]
            }
        ]
    },
    {
        id: "energy-environment",
        name: "Energy and Environment Conservation Club",
        category: "Social",
        about: "Dedicated to promoting sustainable energy practices and environmental protection within and outside the campus.",
        objectives: [
            "To create awareness about energy conservation and renewable energy.",
            "To organize environment-friendly initiatives like tree plantation.",
            "To conduct audits and workshops on sustainability."
        ],
        coordinators: [
            { name: "Dr. S. Gomathy", designation: "Coordinator", dept: "EEE", phone: "9715063781" },
            { name: "Mr. R. Sathish Raam", designation: "Coordinator", dept: "Chemical", phone: "9789535777" }
        ],
        activitiesSummary: { "2025-26": 11, "2024-25": 8, "2023-24": 7 },
        eventDetails: [
            {
                year: "2025-26",
                events: [
                    {
                        sno: 1,
                        name: "Inauguration function",
                        date: "Aug 2, 2025",
                        details: "Latest Trends & Opportunity in Photovoltaic Energy."
                    },
                     {
                        sno: 2,
                        name: "Patriotic Pen",
                        date: "Aug 15, 2025",
                        details: "Independence Day celebration."
                    },
                     {
                        sno: 3,
                        name: "Eco Graphica",
                        date: "Oct 22, 2025",
                        details: "Conservation of Energy and Environment."
                    },
                     {
                        sno: 4,
                        name: "Eco vista",
                        date: "Oct 29, 2025",
                        details: "Awareness in nature."
                    },
                    {
                        sno: 5,
                        name: "One Nation One Mission - National Hackathon",
                        date: "Oct 4, 2025",
                        details: "Eco-Alternatives to Single use Plastics."
                    },
                    {
                        sno: 6,
                        name: "Kottuna Valikkuma",
                        date: "Dec 11, 2025",
                        details: "Reels Contest short videos promoting environmental responsibility."
                    },
                       {
                        sno: 7,
                        name: "Palette Spectrum",
                        date: "Jan 26, 2026",
                        details: "Republic day."
                    },
                       {
                        sno: 8,
                        name: "Sustainx",
                        date: "Jan 31, 2026",
                        details: "Energy Watt Matters."
                    },
                    {
                        sno: 9,
                        name: "Eco-Photo Fusion",
                        date: "Feb 23, 2026",
                        details: "Photographs of Nature and Tricky in KEC."
                    },
                    {
                        sno: 10,
                        name: "Rise in AI – Energy & Environment",
                        date: "March 6, 2026",
                        details: "How to utilize AI for energy and environment."
                    },
                      {
                        sno: 11,
                        name: "Dry Waste Management, Segregation and Recycling",
                        date: "March 9, 2026",
                        details: "Waste segregation, recycling and waste management."
                    },

                ]
            },
             {
                year: "2024-25",
                events: [
                    {
                        sno: 1,
                        name: "Inauguration Function",
                        date: "August 28, 2024",
                        details: "Conversion Of Energy."
                    },
                     {
                        sno: 2,
                        name: "Patriotic Pen",
                        date: "Aug 15, 2024",
                        details: "Independence Day Celebration."
                    },
                     {
                        sno: 3,
                        name: "ECO-GRAPHICA",
                        date: "Oct 9, 2024",
                        details: "Conservation of Energy and Environment."
                    },
                     {
                        sno: 4,
                        name: "ECO PHOTO FUSION",
                        date: "Jan 1, 2025",
                        details: "Awareness In Nature."
                    },
                     {
                        sno: 5,
                        name: "GREENSCAPE",
                        date: "March 29, 2025",
                        details: "Craft Making."
                    },
                    {
                        sno: 6,
                        name: "ECOQUIZ",
                        date: "April 26 - May 1, 2025",
                        details: "Online Quiz."
                    },
                   
                       {
                        sno: 7,
                        name: "DEBATE",
                        date: "May 7, 2025",
                        details: "Next Gen Earth Talks."
                    },
                       {
                        sno: 8,
                        name: "VALEDICTORY-2025",
                        date: "May 7, 2025",
                        details: "Feedback On Past Events and Suggestions for Conducting Events."
                    },
                ]
            },
            {
                year: "2023-24",
                events: [
                    {
                        sno: 1,
                        name: "Inauguration & Guest Lecture on theme Clean Energy Cultivation",
                        date: "Aug 19, 2023",
                        details: "Conversion of Energy."
                    },
                     {
                        sno: 2,
                        name: "District level workshop on Climate Change",
                        date: "Oct 20, 2023",
                        details: "Conservation Of Energy and Environment."
                    },
                     {
                        sno: 3,
                        name: "Energy Conversion Photography Challenge on ECO PHOTO FUSION",
                        date: "Nov 10, 2023",
                        details: "Awareness in Nature."
                    },
                     {
                        sno: 4,
                        name: "Environment and Nature",
                        date: "Dec 13, 2023",
                        details: "Awareness in conservation of Energy & Nature."
                    },
                    {
                        sno: 5,
                        name: "MILLETS",
                        date: "Dec 27, 2023",
                        details: "Awareness in Environmental conservation."
                    },
                   
                       {
                        sno: 6,
                        name: "Valedictory",
                        date: "May 21, 2024",
                        details: "Feedback on past events and suggestions for conducting Events."
                    },
                ]
            }
        ]
    },
    {
        id: "english-proficiency",
        name: "English Proficiency & Readers Club",
        category: "Skill",
        about: "Enhancing communication skills and fostering a love for literature and reading among students.",
        objectives: [
            "To improve verbal and written communication in English.",
            "To encourage students to read and review books regularly.",
            "To organize debating and public speaking sessions."
        ],
        coordinators: [
            { name: "Dr. T. Geetha", designation: "Coordinator", dept: "English", phone: "8489788914" },
            { name: "Dr. B. Priyadharishini", designation: "Coordinator", dept: "English", phone: "9940902480" }
        ],
        activitiesSummary: { "2025-26": 10, "2024-25": 14, "2023-24": 12 },
        eventDetails: [
             {
                year: "2025-26",
                events: [
                    {
                        sno: 1,
                        name: "Inaugural and Guest Lecture",
                        date: "Aug 25, 2025",
                        details: "Topic: From Curiosity to conversation: Building Communication Skills."
                    },
                     {
                        sno: 2,
                        name: "Techno Cultural Event",
                        date: "Aug 21 - 22, 2025",
                        details: "Essay English Essay Writing, English Poetry Writing and English Oratorical Events."
                    },
                     {
                        sno: 3,
                        name: "Comic'on 25",
                        date: "Sep 29, 2025",
                        details: "Language enrichment Competition."
                    },
                     {
                        sno: 4,
                        name: "Aurora'25",
                        date: "Oct 10, 2025",
                        details: "An Intercollegiate Event."
                    },
                    {
                        sno: 5,
                        name: "Lingua Fest",
                        date: "Dec 8, 2025",
                        details: "Competition to enhance Vocabulary Skills."
                    },
                    {
                        sno: 6,
                        name: "Bibliomania",
                        date: "Dec 10 - Feb 10, 2026",
                        details: "Reading Competition for II,III and IV year students."
                    },
                       {
                        sno: 7,
                        name: "Book Bingo",
                        date: "Nov 19 - Jan 19, 2026",
                        details: "Reading Competition exclusively for I year students."
                    },
                       {
                        sno: 8,
                        name: "Illume'26",
                        date: "Feb 2, 2026",
                        details: "Listening and Writing Competition."
                    },
                    {
                        sno: 9,
                        name: "Guest Lecture ",
                        date: "Feb 16, 2026",
                        details: "Topic: English Language Proficiency: A Gateway to Global Opportunities."
                    },
                    {
                        sno: 10,
                        name: "Make it Epic",
                        date: "March 11 - 18, 2026",
                        details: "Cover page designing Competition for EPIC magazine."
                    },
                ]
            },
             {
                year: "2024-25",
                events: [
                    {
                        sno: 1,
                        name: "Inaugural and Guest Lecture",
                        date: "August 28, 2024",
                        details: "Topic: Communication in Digital Age: Leveraging LSRW Skills for Success."
                    },
                     {
                        sno: 2,
                        name: "Inspire",
                        date: "Aug 14, 2024",
                        details: "Essay Writing Competition."
                    },
                     {
                        sno: 3,
                        name: "Litfest",
                        date: "Sep 11, 2024",
                        details: "Language enrichment Competition."
                    },
                     {
                        sno: 4,
                        name: "Prologue: A fresh Start",
                        date: "Oct 5, 2024",
                        details: "Creative Excellence Competition."
                    },
                     {
                        sno: 5,
                        name: "Guest lecture for the Club members",
                        date: "Oct 26, 2024",
                        details: "Topic: Speaking (S)kills."
                    },
                    {
                        sno: 6,
                        name: "Verse and Universe",
                        date: "Nov 16, 2024",
                        details: "Language enrichment Competition."
                    },
                   
                       {
                        sno: 7,
                        name: "Bibliomania",
                        date: "Oct 24 - Dec 24, 2024",
                        details: "Reading Competition for II,III and IV year students."
                    },
                       {
                        sno: 8,
                        name: "Book Bingo",
                        date: "Dec 14 - Feb 14, 2025",
                        details: "Reading Competition exclusively for I year students."
                    },
                     {
                        sno: 9,
                        name: "Ruby Year ",
                        date: "Jan 23 - 24, 2025",
                        details: "Essay English Essay Writing, English Handwriting and English Oratorical Events."
                    },
                     {
                        sno: 10,
                        name: "Alphaverse",
                        date: "March 1, 2025",
                        details: "Communication Enrichment Competitions."
                    },
                     {
                        sno: 11,
                        name: "Adoption Class ",
                        date: "March 15, 2025",
                        details: "Interactive Event."
                    },
                     {
                        sno: 12,
                        name: "Opera ",
                        date: "April 12, 2025",
                        details: "A Drama Event."
                    },
                     {
                        sno: 13,
                        name: "Thiru V.K.Muthusamy award for Best creative writing in English",
                        date: "May 2, 2025",
                        details: "Release of EPIC magazine and Thiru V.K.Muthusamy award for Best creative writing in English."
                    },
                     {
                        sno: 14,
                        name: "Valedictory and Guest Lecture",
                        date: "May 2, 2025",
                        details: "Topic: Master soft skills, Unlock Success."
                    },
                ]
            },
            {
                year: "2023-24",
                events: [
                    {
                        sno: 1,
                        name: "Inaugural & Guest Lecture",
                        date: "July 26, 2023",
                        details: "Topic: Importance of Reading."
                    },
                     {
                        sno: 2,
                        name: "Bibliomania ",
                        date: "Aug 18 - Nov 18, 2023",
                        details: "Reading Competition for II,III and IV year students."
                    },
                     {
                        sno: 3,
                        name: "A Viaduct of Discourse ",
                        date: "Sep 27, 2023",
                        details: "Language enrichment Competition."
                    },
                     {
                        sno: 4,
                        name: "Workshop",
                        date: "Oct 25, 2023",
                        details: "Importance of Communication in Interviews."
                    },
                    {
                        sno: 5,
                        name: "Book Bingo",
                        date: "Nov 2- Feb 2, 2024",
                        details: "Reading Competition exclusively for I year students."
                    },
                   
                       {
                        sno: 6,
                        name: "Haiku Harmony ",
                        date: "Nov 8, 2023",
                        details: "Poetry Writing Competition."
                    },
                    {
                        sno: 7,
                        name: "Inception day ",
                        date: "Nov 18, 2023",
                        details: "Guest Lecture on Just Speak it out and Language enrichment Competition."
                    },
                    {
                        sno: 8,
                        name: "Speak for India",
                        date: "Dec 14, 2023",
                        details: "Debate Competition."
                    },
                    {
                        sno: 9,
                        name: "Adoption Class",
                        date: "March 11, 2024",
                        details: "Interactive Event."
                    },
                    {
                        sno: 10,
                        name: "Creativity Carnival",
                        date: "March 6, 2024",
                        details: "Listening and Speaking Competition."
                    },
                    {
                        sno: 11,
                        name: "Thiru V.K.Muthusamy award for Best creative writing in English",
                        date: "April 24, 2024",
                        details: "Release of EPIC magazine and Thiru V.K.Muthusamy award for Best creative writing in English."
                    },
                    {
                        sno: 12,
                        name: "Valedictory and Guest Lecture",
                        date: "March 24, 2024",
                        details: "Topic: Reading: A Joyful Ride with Books."
                    },
                ]
            }
        ]
    },
    {
        id: "freelancers",
        name: "Freelancers Club",
        category: "Professional",
        about: "Connecting students with real-world projects and helping them build professional portfolios while studying.",
        objectives: [
            "To guide students on how to start their freelancing journey.",
            "To organize workshops on trending professional skills.",
            "To bridge the gap between academic learning and industry projects."
        ],
        coordinators: [
            { name: "Dr. M. Geetha", designation: "Coordinator", dept: "CSE", phone: "9489241573" },
            { name: "Mr. S. Selvaraj", designation: "Coordinator", dept: "CSD", phone: "9994284106" },
            { name: "Ms.T.E.Ramya", designation: "Coordinator", dept: "CSE", phone: "8883677334" }
        ],
        activitiesSummary: { "2025-26": 11 },
        eventDetails: [

        ]
    },
    {
        id: "gender-equality",
        name: "Gender Equality Club",
        category: "Social",
        about: "Promoting inclusive and equal opportunities for all genders on campus.",
        objectives: [
            "To foster a culture of respect and equity.",
            "To organize awareness programs on gender sensitivity.",
            "To provide a platform for discussing gender-related issues."
        ],
        coordinators: [
            { name: "Dr. K. Dinesh", designation: "Coordinator", dept: "CSE", phone: "9944846480" },
            { name: "Ms. S. Mohana Saranya", designation: "Coordinator", dept: "CSE", phone: "9942974490" }
        ],
        activitiesSummary: { "2025-26": 5, "2024-25": 6, "2023-24": 6 },
        eventDetails: [
             {
                year: "2025-26",
                events: [
                    {
                        sno: 1,
                        name: "Inaugural function",
                        date: "Aug 11, 2025",
                        details: "The programme aimed at highlighting the importance of gender balance and inclusivity, along with a special guest lecture on “Promoting Gender Equality for a Balanced Society” by Rtn. Dr. S.Rajalakshmi."
                    },
                     {
                        sno: 2,
                        name: "Guest Lecture",
                        date: "Aug 30, 2025",
                        details: "The lecture delivered by Rtn. G.Padmapriya Kiruthika, Service Project Chair, Rotary Tirupur Bharati, had the main objective of creating awareness on the importance of gender balance in corporate leadership and encouraging students to work towards building a just and fair society."
                    },
                     {
                        sno: 3,
                        name: "TechnoCanvas’25",
                        date: "Oct 11, 2025",
                        details: "The event comprised two competitions Coding Fusion and Poster Fusion ,where the day witnessed vibrant participation and a strong display of talent, creativity, and teamwork from students across different disciplines."
                    },
                     {
                        sno: 4,
                        name: "Balancebytes",
                        date: "Jan 3, 2026",
                        details: "BalanceBytes, a 7-hour hackathon, with the objective of encouraging innovative problem-solving and promoting inclusivity through technology."
                    },
                    {
                        sno: 5,
                        name: "Prometheus 2026",
                        date: "Feb 16, 2026",
                        details: "The event was conducted with objective of encouraging innovation, creativity, and collaborative learning among students across various departments."
                    },
                ]
            },
             {
                year: "2024-25",
                events: [
                    {
                        sno: 1,
                        name: "Independence Day Event",
                        date: "August 15, 2024",
                        details: "The event was conducted to celebrate Independence Day by encouraging students to express their patriotic thoughts through poetry and to enhance their knowledge about India’s history, freedom struggle, and national leaders through an interactive online quiz conducted on Quizizz."
                    },
                     {
                        sno: 2,
                        name: "Inaugural Function",
                        date: "Aug 21, 2024",
                        details: "The programme aimed to mark the inauguration of the Gender Equality Club and create awareness about the importance of gender equality in building an inclusive society, along with a special guest lecture on “Building Equality: Building Nation” by Rtn. Bharath Manoharan."
                    },
                     {
                        sno: 3,
                        name: "Guest Lecture",
                        date: "Nov 11, 2024",
                        details: "The lecture delivered by Rtn. G.Padmapriya Kiruthika, Treasurer of Rotary Tirupur Bharathi, had the main objective of creating awareness about Women Empowerment, highlighting the importance of equal opportunities, leadership, and education in empowering women and building an inclusive and progressive society."
                    },
                     {
                        sno: 4,
                        name: "Guest Lecture",
                        date: "Feb 1, 2025",
                        details: "The lecture delivered by Rtn. Vichitra Senthilkumar, public speaker, social activist, and smart life coach, was conducted with the objective of highlighting Student Vision on Society, encouraging students to develop a positive outlook towards societal development, promoting social awareness, gender equality, leadership, and motivating them to contribute towards building a progressive and inclusive society."
                    },
                     {
                        sno: 5,
                        name: "Workshop",
                        date: "March 28, 2025",
                        details: "The workshop handled by Sanchay M, placed in Soliton Technologies, was conducted with the objective of introducing students to the importance of data analysis and interpretation, highlighting “Delve into Data” concepts to enhance analytical thinking, decision-making skills, and encouraging students to explore data-driven technologies and career opportunities."
                    },
                    {
                        sno: 6,
                        name: "Valedictory Function",
                        date: "May 7, 2025",
                        details: "The guest lecture delivered by Rtn. Ravindran Kamatchi, President of the Rotary Club of Tirupur and Nature Society of Tirupur, aimed to promote Environmental Leadership Beyond Gender Equality, highlighting the importance of collaborative green communities environmental responsibility, and encouraging students to contribute towards sustainable and inclusive development."
                    },
                ]
            },
            {
                year: "2023-24",
                events: [
                    {
                        sno: 1,
                        name: "Inaugural Function",
                        date: "Sep 16, 2023",
                        details: "The programme aimed to mark the inauguration of the Gender Equality Club and to create awareness about the importance of gender justice and equality in building an inclusive society, along with a special guest lecture on “Gender Justice and Equality” by Dr. Salha Sabeeha Shajahan."
                    },
                     {
                        sno: 2,
                        name: "Guest Lecture",
                        date: "Oct 18, 2023",
                        details: "The guest lecture on “Law Relating to Gender Equality” delivered by Mr. R.Balasubramanian, General Secretary, Federation of Consumer Organisations Tamil Nadu & Pondicherry, was conducted with the objective of creating awareness about gender equality laws among students. The session highlighted the provisions for gender equality in the Indian Constitution and emphasized the importance of legal rights and responsibilities. It encouraged students to promote fairness, equality, and respect in society."
                    },
                     {
                        sno: 3,
                        name: "Intra-college Essay and drawing competition",
                        date: "Oct 21, 2023",
                        details: "The Essay and Drawing Competition organized by the Gender Equality Club of Kongu Engineering College aimed to encourage students to participate in extracurricular activities related to gender equality. The competition provided a platform for students to express their views on issues such as violence against women, transgender discrimination, and gender equality in society. The event helped create awareness and motivated students to support an inclusive and equal society."
                    },
                     {
                        sno: 4,
                        name: "Intra-college GEC Drawing, Speech and Quiz Competition- SPARKLE 2K24",
                        date: "Feb 28, 2024",
                        details: "The SPARKLE 2K24 – Intra-college Drawing, Speech and Quiz Competition organized by the Gender Equality Club of Kongu Engineering College aimed to encourage students to actively participate in activities that promote awareness about gender equality. The event provided a platform for students to express their ideas and talents through various competitions."
                    },
                    {
                        sno: 5,
                        name: "Intra-college technical symposium",
                        date: "March 23, 2024",
                        details: "The Intra-college Technical Symposium organized by the Gender Equality Club of Kongu Engineering College aimed to encourage students to showcase their technical knowledge and innovative ideas. The event provided a platform for students to participate in technical discussions and presentations."
                    },
                   
                       {
                        sno: 6,
                        name: "Valedictory function",
                        date: "April 24, 2024",
                        details: "The Valedictory Function and Special Guest Lecture organized by the Gender Equality Club of Kongu Engineering College aimed to create awareness about “Gender Equality and Digital Inclusion.” The session was delivered by Mr. Pradeep Kumar Narasimhan, Social Auditor & Development Consultant, Project Head, INK Educational and Research Trust, Chennai. The programme highlighted the importance of equal opportunities and digital access for all genders."
                    },
                ]
            }
        ]
    },
    {
        id: "ielts-club",
        name: "IELTS Club",
        category: "Skill",
        about: "Preparing students for international English language standards for global education and career opportunities.",
        objectives: [
            "To conduct mock tests and training for IELTS exams.",
            "To provide resources for language skill development.",
            "To guide students on study-abroad opportunities."
        ],
        coordinators: [
            { name: "Dr. R. Ramya Sri", designation: "Coordinator", dept: "English", phone: "8012617387" },
            { name: "Ms. S. Shobana", designation: "Coordinator", dept: "English", phone: "9360038345" }
        ],
        activitiesSummary: { "2025-26": 7, "2024-25": 9, "2023-24": 6 },
        eventDetails: [
             {
                year: "2025-26",
                events: [
                    {
                        sno: 1,
                        name: "Inaugural & Guest Lecture",
                        date: "Aug 30, 2025",
                        details: "The IELTS Club Inaugural featuring welcome, introduction of office bearers, year plan presentation, and an interactive guest lecture on IELTS awareness and opportunities abroad."
                    },
                     {
                        sno: 2,
                        name: "Awareness Programme",
                        date: "July 31, 2025",
                        details: "A special programme to create an awareness among the students about IELTS exam and its uses and on how to crack the exam."
                    },
                     {
                        sno: 3,
                        name: "IGNITE’25- Competition for I year Students",
                        date: "Oct 4, 2025",
                        details: "Ignite ’25 was another competition where students’ ability to understand and the command over the language was tested."
                    },
                     {
                        sno: 4,
                        name: "Prolingua - Competition for I year Students",
                        date: "Dec 15, 2025",
                        details: "Though a small event was effective where students’ creativity and interest was understood."
                    },
                    {
                        sno: 5,
                        name: "IELTS Masterclass",
                        date: "Feb 2, 2026",
                        details: "The first IELTS Masterclass for the academic year where Mr. Paul Srinivasan provided interactive training and guidance on IELTS preparation."
                    },
                    {
                        sno: 6,
                        name: "Brain Blitz",
                        date: "Feb 21, 2026",
                        details: "The last competition of the academic year where students gained experience on how English language can be used in academic and professional needs."
                    },
                       {
                        sno: 7,
                        name: "IELTS Training",
                        date: "Jan - Oct, 2025",
                        details: "Interested students were given training for the IELTS examination from the top educators from various sources."
                    },
                ]
            },
             {
                year: "2024-25",
                events: [
                    {
                        sno: 1,
                        name: "Inaugural & Guest Lecture",
                        date: "Sep 11, 2024",
                        details: "The IELTS Club Inaugural for the academic year 2024–2025 was held on 11.09.2024 at Sir C V Raman Seminar Hall, featuring welcome and principal addresses, introduction of office bearers, year plan presentation, and an interactive guest lecture on IELTS awareness and opportunities abroad."
                    },
                     {
                        sno: 2,
                        name: "Voice Of Freedom",
                        date: "Aug 16, 2024",
                        details: "The IELTS Club conducted a Speaking Competition as part of the 78th Independence Day celebrations, where participants spoke on themes of Independence and Patriotism, and winners were selected based on content, confidence, speech delivery, and body language."
                    },
                     {
                        sno: 3,
                        name: "Moxie Phase – I",
                        date: "Oct 9, 2024",
                        details: "The guest lecture titled “An Interactive Experience Sharing Session for IELTS Aspirants” where Mr. Melvin Jones Lourdusamy shared his IELTS preparation journey, study methods, and experiences studying abroad with students."
                    },
                     {
                        sno: 4,
                        name: "Linguaquest",
                        date: "Nov 9, 2024",
                        details: "The LinguaQuest’24 featuring six technical and non-technical competitions in communication and creativity."
                    },
                     {
                        sno: 5,
                        name: "IELTS Masterclass",
                        date: "Feb 15, 2025",
                        details: "The first IELTS Masterclass for the academic year where Mr. Paul Srinivasan provided interactive training and guidance on IELTS preparation."
                    },
                    {
                        sno: 6,
                        name: "Moxie Phase - II",
                        date: "March 1, 2025",
                        details: "The event “MOXIE Phase – II” where the chief guest Swethika Ramesh shared her IELTS preparation journey and insights with aspiring students."
                    },
                   
                       {
                        sno: 7,
                        name: "Sign Of Four",
                        date: "March 23, 2025",
                        details: "The event “Sign of Four” featured four competitions aimed at improving students’ Listening, Speaking, Reading, and Writing (LSRW) skills."
                    },
                       {
                        sno: 8,
                        name: "IELTS Preparation Course – 1 Credit",
                        date: "-",
                        details: "A course was conducting for students aspiring to write the IELTS Exam to go for studies abroad."
                    },
                     {
                        sno: 9,
                        name: "Valedictory & Guest Lecture",
                        date: "April 30, 2025",
                        details: "To Conclude the Academic year a guest lecture and all the prize distribution were conducted."
                    },
                ]
            },
            {
                year: "2023-24",
                events: [
                    {
                        sno: 1,
                        name: "Inaugural & Guest Lecture",
                        date: "Apr 19, 2023",
                        details: "The IELTS Club Inaugural featuring welcome, introduction of office bearers, year plan presentation, and an interactive guest lecture on IELTS awareness and opportunities abroad."
                    },
                     {
                        sno: 2,
                        name: "Essay Writing Competition",
                        date: "Nov 8, 2023",
                        details: "As a part of inception day celebration, an essay writing competition was conducted by IELTSClub on 08.11.2023 02:45pm to 04:30 pm exclusively for the first-year students."
                    },
                     {
                        sno: 3,
                        name: "Talking Titans",
                        date: "Nov 29, 2023",
                        details: "As a part of inception day, a speaking competition for the first-year students was conducted. Out of 45 registrations 15 students were selected for the competition."
                    },
                     {
                        sno: 4,
                        name: "Moxie: Phase I",
                        date: "Dec 22, 2023",
                        details: "The guest lecture titled “An Interactive Experience Sharing Session for IELTS Aspirants” where Mr. Bhupesh Gupta shared his IELTS preparation journey, study methods, and experiences studying abroad with students."
                    },
                    {
                        sno: 5,
                        name: "Special Guest Lecture",
                        date: "March 23, 2024",
                        details: "In the Special Guest Lecture, the students were given insights on how IELTS training is useful in daily communication abroad with native and foreign English speakers."
                    },
                   
                       {
                        sno: 6,
                        name: "Valedictory & Guest Lecture",
                        date: "May 22, 2024",
                        details: "To Conclude the Academic year a guest lecture and all the prize distribution were conducted."
                    },
                ]
            }
        ]
    },
    {
        id: "karate-martial-arts",
        name: "Karate & Martial Arts Club",
        category: "Social",
        about: "Focusing on self-defense, physical fitness, and mental discipline through martial arts training.",
        objectives: [
            "To provide karate training sessions for students.",
            "To build physical endurance and mental strength.",
            "To empower students with self-defense techniques."
        ],
        coordinators: [
            { name: "Ms. K. Krishnaveni", designation: "Coordinator", dept: "Chemistry", phone: "9994814845" },
            { name: "Mr. D. Gurukumaresan", designation: "Coordinator", dept: "Maths", phone: "9751285352" }
        ],
        activitiesSummary: { "2025-26": 4, "2024-25": 7, "2023-24": 7 },
        eventDetails: [
             {
                year: "2025-26",
                events: [
                    {
                        sno: 1,
                        name: "Inaugural Function and Guest Lecture on Silambam",
                        date: "Sep 1, 2025",
                        details: "The event was formally inaugurated to promote awareness about martial arts and encourage students to learn self-defense for confidence and safety."
                    },
                     {
                        sno: 2,
                        name: "Defensio ",
                        date: "Sep 22, 2025",
                        details: "This program focused on teaching self-defense techniques through martial arts like Karate to help students protect themselves."
                    },
                     {
                        sno: 3,
                        name: "Ignite",
                        date: "Jan 5, 2026",
                        details: "The session motivated participants to develop courage, leadership, and physical fitness through regular martial arts practice."
                    },
                     {
                        sno: 4,
                        name: "Girls On Action",
                        date: "Feb 23, 2026",
                        details: "The initiative encouraged girls to actively participate in martial arts training to build confidence, independence, and personal safety skills."
                    },
                ]
            },
             {
                year: "2024-25",
                events: [
                    {
                        sno: 1,
                        name: "Inaugural Function",
                        date: "August 21, 2024",
                        details: "The program was inaugurated to introduce and promote martial arts training among students, highlighting the importance of discipline and self-defense."
                    },
                     {
                        sno: 2,
                        name: "Guest Lecture on Silambam",
                        date: "Sep 21, 2024",
                        details: "An expert explained the history, techniques, and benefits of Silambam as a traditional martial art that improves discipline, strength, and focus."
                    },
                     {
                        sno: 3,
                        name: "Evening Practice Classes",
                        date: "Nov 19, 2024",
                        details: "Regular evening sessions were conducted to train students in techniques, fitness, and discipline in Silambam and other martial arts."
                    },
                     {
                        sno: 4,
                        name: "District Level Silambam Competition",
                        date: "Nov 21, 2024",
                        details: "Students participated in a district-level competition showcasing their skills and techniques in Silambam."
                    },
                     {
                        sno: 5,
                        name: "Defensio",
                        date: "Jan 22, 2025",
                        details: "A self-defense program aimed at teaching practical protection techniques and building confidence among participants."
                    },
                    {
                        sno: 6,
                        name: "Digi rias",
                        date: "April 9, 2025",
                        details: "Certificates and belt promotions were awarded to students who won the competition different questions on martial."
                    },
                   
                       {
                        sno: 7,
                        name: "Valedictory",
                        date: "April 27, 2025",
                        details: "The program concluded with a valedictory ceremony recognizing participants, winners, and trainers for their achievements and efforts."
                    },
                ]
            },
            {
                year: "2023-24",
                events: [
                    {
                        sno: 1,
                        name: "Inaugural Function",
                        date: "Aug 23, 2023",
                        details: "The event was inaugurated to encourage students to learn martial arts and understand the importance of discipline and self-defense."
                    },
                     {
                        sno: 2,
                        name: "Defensio",
                        date: "Nov 22, 2023",
                        details: "A special program focused on teaching practical self-protection techniques through martial arts like Karate."
                    },
                     {
                        sno: 3,
                        name: "Quiz Dojo",
                        date: "Dec 21, 2023",
                        details: "Language enrichment Competition."
                    },
                     {
                        sno: 4,
                        name: "Self Defense Workshop",
                        date: "March 16, 2024",
                        details: "A hands-on training session where participants learned basic self-defense moves and safety strategies."
                    },
                    {
                        sno: 5,
                        name: "Digiries",
                        date: "April 7 - 14, 2024",
                        details: "A special performance session where students showcased their talent and skills in martial arts such as Silambam and Karate."
                    },
                   
                       {
                        sno: 6,
                        name: "Evening Practice Classes",
                        date: "April 27, 2024",
                        details: "Regular evening sessions were conducted to improve skills, fitness, and techniques in Silambam and other martial arts."
                    },
                    {
                        sno: 7,
                        name: "Valedictory",
                        date: "May 29, 2024",
                        details: "The program concluded with a closing ceremony appreciating participants, trainers, and achievers."
                    },
                ]
            }
        ]
    },
    {
        id: "mobile-app-dev",
        name: "Mobile Application Development Club",
        category: "Technical",
        about: "Fostering creativity and technical skills in mobile platform applications and multi-platform development.",
        objectives: [
            "To train students in Android and iOS development.",
            "To organize workshops on Flutter and React Native.",
            "To help students build and publish their own apps."
        ],
        coordinators: [
            { name: "Mr. A. P. Pon Selva Kumar", designation: "Coordinator", dept: "IT", phone: "9942074214" },
            { name: "Ms. P. Vanitha", designation: "Coordinator", dept: "IT", phone: "9488066933 " }
        ],
        activitiesSummary: { "2025-26": 6, "2024-25": 7, "2023-24": 7 },
        eventDetails: [
            
        ]
    },
    {
        id: "pasumaivanam",
        name: "Pasumaivanam Club",
        category: "Social",
        about: "The green initiative of KEC focused on campus afforestation and environmental awareness.",
        objectives: [
            "To encourage planting and conservation of native tree varieties, develop green spaces using modern ecological concepts, and motivate community participation in nature conservation.",
            "To support and promote natural farming and healthy food practices inspired by Dr. G. Nammalvar, while fostering environmental awareness and sustainable living.",
            "To restore ecological balance and protect biodiversity through native tree conservation, community-driven afforestation, and adoption of eco-friendly habits including proper waste management."
        ],
        coordinators: [
            { name: "Mr. A. Saravanan", designation: "Coordinator", dept: "Mech", phone: " 9789467617" },
            { name: "Dr. P. Srinivasan", designation: "Coordinator", dept: "Chemistry", phone: "9788632868" }
            
        ],
        activitiesSummary: { "2025-26": 11, "2024-25": 14, "2023-24": 8 },
        eventDetails: [
            {
                year: "2025-26",
                events: [
                    {
                        sno: 1,
                        name: "Inaugural for the Academic Year 2025 - 2026",
                        date: "July 30, 2025",
                        details: "Mr. Kaarthik S, CEO, The COCO Brothers, Coimbatore. Inaugurated and Gave guest lecture."
                    },
                     {
                        sno: 2,
                        name: "Eco Fest for outside college students",
                        date: "Sep 15, 2025",
                        details: "National Level Technical and Non Technical Event."
                    },
                     {
                        sno: 3,
                        name: "Walkathon – Environment Awareness & Organic Farm ",
                        date: "Sep 15 - 27, 2025",
                        details: "Environmental awareness program for public."
                    },
                     {
                        sno: 4,
                        name: "Awareness Program on Health & Safety by Sub Inspector of Police - Perundurai",
                        date: "Sep 29, 2025",
                        details: "Health and Safety Awareness program for students."
                    },
                    {
                        sno: 5,
                        name: "Greening the Grounds with Professors – Sapling plantation at faculty house",
                        date: "Sep 29, 2025",
                        details: "Students planted saplings in faculty house."
                    },
                    {
                        sno: 6,
                        name: "KEC Rain water Harvesting pit cleaning",
                        date: "Oct 25, 2025",
                        details: "Students know importance of Rain water."
                    },
                       {
                        sno: 7,
                        name: "Pasumai Thiruvila - Guest Lecture & Sapling Plantation Inauguration",
                        date: "Dec 6, 2025",
                        details: "Inaugurated and Guest lecture by Thiru. Athikadavu Subramaniam."
                    },
                       {
                        sno: 8,
                        name: "Guest lecture on Accupuncture – The art of healing",
                        date: "Dec 10 -11, 2026",
                        details: "Acupuncture – The art of healing. Guest lecture by Ms.Mythili."
                    },
                    {
                        sno: 9,
                        name: "Environmental Awareness Program – In government school (Sapling Plantation & Competitions)",
                        date: "Jan 31, 2026",
                        details: "Sapling plantation and competitions for school students."
                    },
                    {
                        sno: 10,
                        name: "Cooking without fire & Best out of waste",
                        date: "Feb 11, 2026",
                        details: "Students prepared healthy food and convert waste to useful products."
                    },
                      {
                        sno: 11,
                        name: "Valedictory",
                        date: "March, 2026",
                        details: "Thank to Secretory of club and Conclusion of the 2025-26 events."
                    },

                ]
            },
             {
                year: "2024-25",
                events: [
                    {
                        sno: 1,
                        name: "Inaugural for the Academic Year 2024 - 2025 ",
                        date: "August 23, 2024",
                        details: "Dr.V.Saravanan, Publicity Officer, Forest Department, Erode Division. Inaugurated the club activity 2024-25."
                    },
                     {
                        sno: 2,
                        name: "Guest Lecture & Sapling Distribution",
                        date: "Aug 23, 2024",
                        details: "Dr.V.Saravanan, Publicity Officer, Forest Department – Gave Guest lecture about forest and distributed saplings ."
                    },
                     {
                        sno: 3,
                        name: "World Environmental Day – Awareness program in Government School, Thiruvachi",
                        date: "June 21, 2024",
                        details: "Environmental awareness program conducted in government school."
                    },
                     {
                        sno: 4,
                        name: "Independence Day Celebration- Sapling Plantation",
                        date: "Aug 14, 2024",
                        details: "Saplings planted in KEC campus."
                    },
                     {
                        sno: 5,
                        name: "Wall Painting in Government School Thiruvachi – Collaboration with KSA’s Youth Red Cross",
                        date: "Aug 16 - 17, 2024",
                        details: "Nature oriented wall painting activity done by students in government school."
                    },
                    {
                        sno: 6,
                        name: "KEC Inception Day Celebration – Sapling Plantation ",
                        date: "Sep 9, 2024",
                        details: "Sapling planted in KEC campus."
                    },
                   
                       {
                        sno: 7,
                        name: "World Environment Day - “Eek Ped Maa Ki Naam”- A National Level Plantation Event in KEC",
                        date: "Sep 18, 2024",
                        details: "Sapling planted in KEC campus."
                    },
                       {
                        sno: 8,
                        name: "Hands on Training - Vertical Farming, Chittode",
                        date: "Oct 26, 2024",
                        details: "Shanmugasundaram, A renowned agricultural scientist - Students gain knowledge on vertical farming."
                    },
                    {
                        sno: 9,
                        name: "World Soil Day 2024 – Face Mud Bath and Field visit Thiruchangode",
                        date: "Dec 5, 2024",
                        details: "Students know the importance of soil."
                    },
                    {
                        sno: 10,
                        name: "Pasumai Thiruvila 2024 – Sapling distribution to students, faculties and farmers",
                        date: "Nov - Dec, 2024",
                        details: "15000 saplings distributed to students, farmers."
                    },
                    {
                        sno: 11,
                        name: "ECO Fest – Nature oriented Technical & Non-technical event",
                        date: "Jan 25, 2025",
                        details: "Nature oriented National Level technical and non technical event."
                    },
                    {
                        sno: 12,
                        name: "Student Volunteers for Iearkai Ulavar Unavu Paadhakapu Manadu,Tex Valley",
                        date: "Feb 15 - 16, 2025",
                        details: "Students helped local farmers for one day."
                    },
                    {
                        sno: 13,
                        name: "Field Visit - Tamilnadu Agriculture University, Coimbatore",
                        date: "March 12, 2025",
                        details: "Students gain knowledge about various agriculture tools and systems."
                    },
                    {
                        sno: 14,
                        name: "Valedictory",
                        date: "March 18, 2025",
                        details: "Thank to Secretory of club and Conclusion of the 2024-25 events."
                    },
                ]
            },
            {
                year: "2023-24",
                events: [
                    {
                        sno: 1,
                        name: "Inaugural for the Academic Year 2023 - 2024",
                        date: "Oct 21, 2023",
                        details: "Dr. Ayisha, BAMS, DFPVMD, Managing Director, Ayisha Ayurvedic Hospital, Dharmapuri, Inaugural for the Academic Year 2023 – 2024 and conducted medical camp."
                    },
                     {
                        sno: 2,
                        name: "One Volunteer One Tree - Saplings Plantation",
                        date: "July 15, 2023",
                        details: "Students planted saplings in their house."
                    },
                     {
                        sno: 3,
                        name: "Guest Lecture on Ayurveda - Reboot Yourself with Ayurveda, a Scientific Art of Living",
                        date: "Oct 21, 2023",
                        details: "Dr. Ayisha, BAMS - Reboot Yourself with Ayurveda, a Scientific Art of Living."
                    },
                     {
                        sno: 4,
                        name: "Medical Camp – Traditional Ayurvedic / Naturopathy consultation",
                        date: "Oct 21, 2023",
                        details: "Dr. Ayisha, BAMS - conducted medical camp."
                    },
                    {
                        sno: 5,
                        name: "Celebration on International Year of Millets -Millets for Healthy Life -Cooking without fire event",
                        date: "Nov 29, 2023",
                        details: "Students prepare healthy food without cooking."
                    },
                   
                       {
                        sno: 6,
                        name: "Ulavanai Orunal - Helping local farmers for one day",
                        date: "Feb 22, 2024",
                        details: "Students helped local farmers for one day."
                    },
                      {
                        sno: 7,
                        name: "Guest Lecture - Global Warming",
                        date: "March 2, 2024",
                        details: "Dr.T.Maruthavanan, Associate Professor of Chemistry, Sona college of Technology, Salem. Students know about global warming."
                    },
                      {
                        sno: 8,
                        name: "Valedictory",
                        date: "April, 2024",
                        details: "Thank to Secretory of club and Conclusion of the 2023-24 events."
                    },
                ]
            }
        ]
    },
    {
        id: "photography-design",
        name: "Photography & Design Club",
        category: "Cultural",
        about: "Visualizing the spirit of KEC through the lens and creative digital design.",
        objectives: [
            "To document college events through professional photography.",
            "To train students in graphic design and video editing.",
            "To conduct workshops and exhibitions of student work."
        ],
        coordinators: [
            { name: "Mr. N. P. Saravanan", designation: "Coordinator", dept: "CSE", phone: "9976874089" },
            { name: "Mr. S. K. Logesh", designation: "Coordinator", dept: "EEE", phone: "9443350335" }
        ],
        activitiesSummary: { "2025-26": 6, "2024-25": 8, "2023-24": 8 },
        eventDetails: [
             {
                year: "2025-26",
                events: [
                    {
                        sno: 1,
                        name: "Inaugural function & Guest Lecture",
                        date: "July 21, 2025",
                        details: "Modern World Photography Technology."
                    },
                     {
                        sno: 2,
                        name: "Guest Lecture",
                        date: "Sep 25, 2025",
                        details: "The Role of Colors and Light in Visual Narratives."
                    },
                     {
                        sno: 3,
                        name: "Pixel’25",
                        date: "Sep 25, 2025",
                        details: "National Level Technical Symposium."
                    },
                     {
                        sno: 4,
                        name: "Poster Competition",
                        date: "Nov 8, 2025",
                        details: "-"
                    },
                    {
                        sno: 5,
                        name: "Workshop",
                        date: "Jan 3, 2026",
                        details: "Fundamentals of Digital Photography."
                    },
                    {
                        sno: 6,
                        name: "Workshop",
                        date: "Feb 15, 2026",
                        details: "Fundamentals of Design and Software."
                    },
                       {
                        sno: 7,
                        name: "SCINTILLA’2K26",
                        date: "March 14, 2026",
                        details: "Intra College Photography Symposium."
                    },
                       {
                        sno: 8,
                        name: "Valedictory Function",
                        date: "March 14, 2026",
                        details: "From Light to Story: Visual Story Telling in photography."
                    },
                ]
            },
             {
                year: "2024-25",
                events: [
                    {
                        sno: 1,
                        name: "Inaugural Function & Guest Lecture",
                        date: "August 14, 2024",
                        details: "Modern World Photography Technology."
                    },
                     {
                        sno: 2,
                        name: "Poster Design Contest",
                        date: "Aug 15, 2024",
                        details: "Independence Day."
                    },
                     {
                        sno: 3,
                        name: "Guest Lecture",
                        date: "Sep 21, 2024",
                        details: "Modern World Photography Technology."
                    },
                     {
                        sno: 4,
                        name: "Workshop ",
                        date: "Feb 14, 2025",
                        details: "Canva for Beginners: Retouch, Enhance & Create."
                    },
                     {
                        sno: 5,
                        name: "Workshop ",
                        date: "Feb 15, 2025",
                        details: "Dynamic Video Creation: Learning After Effects."
                    },
                    {
                        sno: 6,
                        name: "Workshop ",
                        date: "Feb 15, 2025",
                        details: "The Art of Photography: Understanding Cameras & DSLRs."
                    },
                   
                       {
                        sno: 7,
                        name: "SCINTILLA’2K25",
                        date: "March 7, 2025",
                        details: "Intra College Photography Symposium."
                    },
                       {
                        sno: 8,
                        name: "Valedictory Function",
                        date: "March 7, 2025",
                        details: "Understanding Light in Photography."
                    },
                ]
            },
            {
                year: "2023-24",
                events: [
                    {
                        sno: 1,
                        name: "Inaugural Function",
                        date: "Aug 9, 2023",
                        details: "Cinematography."
                    },
                     {
                        sno: 2,
                        name: "Guest Lecture",
                        date: "Aug 9, 2023",
                        details: "Digital Intermediate."
                    },
                     {
                        sno: 3,
                        name: "Workshop",
                        date: "Nov 8, 2023",
                        details: "Hands on Manual Photography."
                    },
                     {
                        sno: 4,
                        name: "Short Film Fiesta",
                        date: "Jan 29, 2024",
                        details: "-"
                    },
                    {
                        sno: 5,
                        name: "Scintilla 2k23 ",
                        date: "March 15, 2024",
                        details: "-"
                    },
                   
                       {
                        sno: 6,
                        name: "Valedictory Function",
                        date: "March 15, 2024",
                        details: "AI in Photography."
                    },
                ]
            }
        ]
    },
    {
        id: "quiz-club",
        name: "Quiz Club",
        category: "Skill",
        about: "Challenging minds and expanding horizons through intellectual competition and knowledge sharing.",
        objectives: [
            "To foster a culture of quizzing and general knowledge.",
            "To prepare students for national level quiz competitions.",
            "To organize regular brain-storming sessions."
        ],
        coordinators: [
            { name: "Dr. K. Senthilkumar", designation: "Coordinator", dept: "Food Tech", phone: "9842844880" },
            { name: "Dr. S. Sathya", designation: "Coordinator", dept: "Maths", phone: "9688009938" }
        ],
        activitiesSummary: { "2025-26": 5, "2024-25": 8, "2023-24": 8 },
        eventDetails: [
             {
                year: "2025-26",
                events: [
                    {
                        sno: 1,
                        name: "Independence Day Quiz",
                        date: "Aug 15, 2025",
                        details: "To celebrate the 79th year of India’s freedom, a digital quiz was organized as an interactive way of learning. Instead of a usual program, the online format allowed participants from different places and age groupsto join easily. The quiz covered wide-ranging themes such as India’s independence journey, cultural richness, and modern achievements. The active participation reflected both enthusiasm and national pride. By combining knowledge with technology, the quiz became a creative medium to involve people and spread the spirit of Independence Day."
                    },
                     {
                        sno: 2,
                        name: "Inauguration",
                        date: "Aug 25, 2025",
                        details: "Dr. S. Easwaramoorthi is a Senior Principal Scientist at the Central Leather Research Institute (CLRI), Chennai, with extensive expertise in leather testing and research. He specializes in material testing, quality assurance, and developing sustainable solutions for the leather industry. With years of experience in scientific research, he has contributed significantly to innovation and industry standards. Based in Chennai, he is passionate about advancing research in leather technology and inspiring young minds to pursue excellence."
                    },
                     {
                        sno: 3,
                        name: "Eerie Enigmas",
                        date: "Sep 15, 2025",
                        details: "Eerie Enigmas is a fun filled, thrilling event made specially for first and second year students. This event consists of 3 exciting rounds to challenge the participants in different aspects such as knowledge, creativity, problem-solving, and presence of mind. The event makes sure every participant stays involved, whether it’s by solving tricky puzzles, showing creative ideas, or facing surprising challenges. It’s a perfect opportunity to learn, compete, and have fun all at once. By the end of Eerie Enigmas, the participants will not only walk away with memories of a thrilling experience but also with a boost in their confidence, team spirit, and creative thinking skills."
                    },
                     {
                        sno: 4,
                        name: "Quiz Fest",
                        date: "Feb 21, 2026",
                        details: "Quiz Fest is an exciting and knowledge-driven event designed for students to test and expand their intellectual abilities. The event consists of multiple engaging rounds that challenge participants in areas such as general knowledge, current affairs, logical thinking, and quick decision-making. It encourages healthy competition while keeping the atmosphere lively and interactive. Participants will have the opportunity to showcase their knowledge, think under pressure, and work as a team. By the end of Quiz Fest, students will gain valuable learning experiences along with improved confidence, awareness, and analytical skills."
                    },
                    {
                        sno: 5,
                        name: "Maneedhi - Women’s day quiz",
                        date: "March 8, 2026",
                        details: "Maneedhi – Women’s Day Quiz is a special event organized to celebrate International Women's Day and promote awareness about women's achievements and rights.The quiz encourages participants to learn about inspiring women, gender equality, and social contributions.It provides a platform for students to test their knowledge while honoring the role of women in society. More than 300 students participated from various institutions."
                    },
                ]
            },
             {
                year: "2024-25",
                events: [
                    {
                        sno: 1,
                        name: "Quiz for 78th Independence day for Kec students",
                        date: "August 15, 2024",
                        details: "Independence Day Quiz is a special online event organized for students of Kongu Engineering College to celebrate the 78th Independence Day of India in an engaging and informative way. The quiz aims to test participants’ knowledge about Indian history, freedom fighters, constitution, culture, and important national achievements. Conducted in an online format, the event allows students to participate easily while enjoying a healthy spirit of competition. It provides a great opportunity for students to learn more about the nation’s heritage while improving their awareness, confidence, and quick thinking skills."
                    },
                     {
                        sno: 2,
                        name: "Inaguration of quiz club activities for the year 2024-2025",
                        date: "Sep 18, 2024",
                        details: "Inauguration of Quiz Club Activities (2024–2025) is organized to officially commence the quiz club events for the academic year 2024–2025. The event aims to introduce the club’s objectives, encourage student participation, and promote a culture of knowledge sharing and intellectual competition among students. It marks the beginning of various quiz-based activities that help enhance general knowledge, critical thinking, and confidence through engaging and interactive sessions."
                    },
                     {
                        sno: 3,
                        name: "Quiz Event for I year students 2024-2025 INFOGNITE 2K24",
                        date: "Oct 5, 2024",
                        details: "INFOGNITE 2K24 – Quiz Event is an offline quiz competition organized for first-year students during the academic year 2024–2025. The event aims to encourage students to showcase their knowledge, quick thinking, and problem-solving abilities through a series of engaging quiz rounds. It provides a platform for participants to learn, compete, and interact with peers while promoting general awareness, confidence, and teamwork in a fun and competitive environment."
                    },
                     {
                        sno: 4,
                        name: "World Food day Quiz",
                        date: "Oct 20, 2024",
                        details: "World Food Day Quiz is an online quiz event organized to create awareness about food security, nutrition, agriculture, and sustainable food practices. The event encourages students to enhance their knowledge about global food issues, healthy eating habits, and the importance of reducing food waste. Through this interactive quiz, participants get an opportunity to learn, compete, and develop awareness about building a hunger-free and sustainable world."
                    },
                     {
                        sno: 5,
                        name: "Women’s Day Quiz – Manidhi 2025",
                        date: "March 8, 2025",
                        details: "Women’s Day Quiz – Manidhi 2025 is an online quiz event organized to celebrate International Women’s Day and recognize the achievements and contributions of women in various fields. The quiz aims to create awareness about inspiring women leaders, social progress, equality, and women’s empowerment. It provides an engaging platform for students to test their knowledge, learn about influential women, and promote respect and appreciation for women’s role in society."
                    },
                    {
                        sno: 6,
                        name: "World Water Day Quiz ",
                        date: "March 22, 2025",
                        details: "World Water Day Quiz is an online quiz event organized to raise awareness about the importance of water conservation, sustainable water management, and global water issues. The event encourages students to enhance their knowledge about water resources, environmental protection, and the need for responsible water usage while participating in an engaging and competitive learning activity."
                    },
                   
                       {
                        sno: 7,
                        name: "Quiz event for Kec students - Infinity",
                        date: "April 12, 2025",
                        details: "Infinity – Quiz Event is an offline quiz competition organized for students of Kongu Engineering College to promote knowledge sharing and intellectual engagement. The event features multiple exciting rounds that test participants’ general knowledge, logical thinking, and quick decision-making skills. It provides a platform for students to compete, learn, and interact while enhancing their confidence, teamwork, and analytical abilities in a fun and competitive environment."
                    },
                       {
                        sno: 8,
                        name: "Valedictory of Quiz club for the year 2024-2025",
                        date: "April 12, 2025",
                        details: "Valedictory of Quiz Club (2024–2025) marks the closing ceremony of the quiz club activities for the academic year 2024–2025. The event highlights the achievements and successful completion of various quiz events conducted throughout the year. It also recognizes and appreciates the active participation and contributions of students, encouraging them to continue their enthusiasm for knowledge, learning, and healthy competition."
                    },
                ]
            },
            {
                year: "2023-24",
                events: [
                    {
                        sno: 1,
                        name: "Inaguration of quiz club activities for the year 2024-2025",
                        date: "Oct 19, 2023",
                        details: "The inauguration of Quiz Club activities for the academic year 2024–2025 was conducted in offline mode to officially begin the club’s events for the year. The program aimed to introduce the objectives of the club, encourage student participation, and promote knowledge sharing through various quiz competitions."
                    },
                     {
                        sno: 2,
                        name: "Indian Constitution day Quiz",
                        date: "Nov 26, 2023",
                        details: "The Indian Constitution Day Quiz was conducted online to create awareness among students about the Indian Constitution, its values, fundamental rights, and duties. The event encouraged participants to learn about the nation’s legal framework and democratic principles."
                    },
                     {
                        sno: 3,
                        name: "Enigma 2023",
                        date: "Dec 20, 2023",
                        details: "Enigma 2023 was an offline quiz event designed to challenge students through interesting and competitive rounds that tested their general knowledge, logical thinking, and problem-solving abilities in an engaging environment."
                    },
                     {
                        sno: 4,
                        name: "73rd  Republic Day Quiz",
                        date: "Jan 26, 2024",
                        details: "The 73rd Republic Day Quiz was organized online to celebrate the spirit of the nation and increase awareness about India’s history, constitution, freedom struggle, and national achievements through an interactive quiz competition."
                    },
                    {
                        sno: 5,
                        name: "World Cancer Day Quiz",
                        date: "Feb 4, 2024",
                        details: "The World Cancer Day Quiz was conducted online to spread awareness about cancer prevention, early detection, treatment, and global health initiatives, encouraging students to understand the importance of health awareness."
                    },
                   
                       {
                        sno: 6,
                        name: "Women’s Day Quiz for female students",
                        date: "March 8, 2024",
                        details: "Women’s Day Quiz was conducted in online , specially for female students. Certificates were sent through mail to the participants."
                    },
                    {
                        sno: 7,
                        name: "Master Mind Quiz",
                        date: "May 15 2024",
                        details: "Master Mind Quiz was an online quiz competition aimed at testing participants’ intelligence, quick thinking, and general knowledge through challenging questions and interactive rounds, promoting learning in a competitive yet enjoyable way."
                    },
                    {
                        sno: 8,
                        name: "Valedictory",
                        date: "May 15, 2024",
                        details: "Valedictory was conducted to conclude the events conducted throughout the academic year. In this event the annual report was presented."
                    },
                ]
            }
        ]
    },
    {
        id: "ravi-varma-creative",
        name: "Ravi Varma Creative Club",
        category: "Cultural",
        about: "Bringing out the inner artist through fine arts, sketching, and traditional creative disciplines.",
        objectives: [
            "To encourage students in sketching, painting and digital arts.",
            "To host art exhibitions on campus.",
            "To organize workshops on traditional and modern art forms."
        ],
        coordinators: [
            { name: "Dr. V. Sampath Kumar", designation: "Coordinator", dept: "Civil", phone: "9047151001" },
            { name: "Mr. S. Jegan", designation: "Coordinator", dept: "EIE", phone: "7598279706" }
        ],
        activitiesSummary: { "2025-26": 6, "2024-25": 6, "2023-24": 8 },
        eventDetails: [
            {
                year: "2025-26",
                events: [
                    {
                        sno: 1,
                        name: "Inaugural and Guest Lecture on Artistic photography  ",
                        date: "Aug 18, 2025",
                        details: "Guest Lecture on Artistic photography."
                    },
                     {
                        sno: 2,
                        name: "Workshop on The Painted Palette (Face painting)  n",
                        date: "Oct 9, 2025",
                        details: "Workshop on The Painted Palette (Face painting)."
                    },
                     {
                        sno: 3,
                        name: "Workshop",
                        date: "Dec 20, 2025",
                        details: "Workshop on Sustainable Sacks and Green Threads."
                    },
                     {
                        sno: 4,
                        name: "ELYSIAN 2K26 ",
                        date: "Feb 21, 2026",
                        details: "Intra-College Event."
                    },
                    {
                        sno: 5,
                        name: "BAKING WORKSHOP ",
                        date: "March 14, 2026",
                        details: "Mastering The Art of Pastry and Bakery."
                    },
                ]
            },
             {
                year: "2024-25",
                events: [
                    {
                        sno: 1,
                        name: "Inaugural Function & Guest Lectures ",
                        date: "August 14, 2024",
                        details: "Wild Life and Documentary Film Making."
                    },
                     {
                        sno: 2,
                        name: "Inception Day",
                        date: "Aug 17, 2024",
                        details: "Iconic ruby year logo design contest."
                    },
                     {
                        sno: 3,
                        name: "Guest Lecture & Workshop",
                        date: "Sep 18, 2024",
                        details: "Resin Art and Its Business Opportunity."
                    },
                     {
                        sno: 4,
                        name: "ELYSIAN 2K24",
                        date: "Oct 19, 2024",
                        details: "Intra-College Event."
                    },
                     {
                        sno: 5,
                        name: "Colour Crest 2K25",
                        date: "March 12, 2025",
                        details: "Colour Crest 2K25."
                    },
                    {
                        sno: 6,
                        name: "Guest Lecture & valedictory",
                        date: "March 18, 2025",
                        details: "From idea to startup : HOW BUSINESS WORKKS."
                    },
                ]
            },
            {
                year: "2023-24",
                events: [
                    {
                        sno: 1,
                        name: "Inaugural Function & Guest Lectures",
                        date: "Aug, 2023",
                        details: "A Travel Through Fine Arts at Kalingarayan Seminar Hall Chief Guest : Mrs.R.Dhivyapriya B.Sc.,DJ FINE ARTS."
                    },
                     {
                        sno: 2,
                        name: "Guest Lecture & Workshop",
                        date: "Sep, 2023",
                        details: "The Importance Of Creative In Business."
                    },
                     {
                        sno: 3,
                        name: "Intra – College Event – ELYSIAN 2K23",
                        date: "Oct, 2023",
                        details: "DREAMSCAPES : Unleash your desire for art."
                    },
                     {
                        sno: 4,
                        name: "Guest Lecture",
                        date: "Nov, 2023",
                        details: "Sustainable Yarn and Bags."
                    },
                    {
                        sno: 5,
                        name: "Dream scapes",
                        date: "Jan, 2024",
                        details: "Dream scapes Art of drawing the dreams."
                    },
                   
                       {
                        sno: 6,
                        name: "Colors Crest",
                        date: "Feb, 2024",
                        details: "Colors Crest 2K24."
                    },
                    {
                        sno: 7,
                        name: "Workshop ",
                        date: "Feb, 2024",
                        details: "Mastering The Art of Pastry and Bakery."
                    },
                    {
                        sno: 8,
                        name: "Valedictory & Guest Lecture",
                        date: "March, 2024",
                        details: "Valedictory Function."
                    },
                ]
            }
        ]
    },
    {
        id: "red-ribbon",
        name: "Red Ribbon Club",
        category: "Social",
        about: "Focusing on health awareness, voluntary blood donation and youth social impact.",
        objectives: [
            "To promote voluntary blood donation among youth.",
            "To create awareness about health issues like HIV/AIDS.",
            "To encourage students to participate in social service."
        ],
        coordinators: [
            { name: "Dr. V. Yamuna", designation: "Coordinator", dept: "Maths", phone: "	9698919364 " },
            { name: "Mr. V. Parthibaraj", designation: "Coordinator", dept: "Physics", phone: "9080554215" }
        ],
        activitiesSummary: { "2025-26": 8, "2024-25": 5},
        eventDetails: [
            // {
            //     year: "2025-26",
            //     events: [
            //         {
            //             sno: 1,
            //             name: "Inauguration function",
            //             date: "Aug 2, 2025",
            //             details: "Latest Trends & Opportunity in Photovoltaic Energy."
            //         },
            //          {
            //             sno: 2,
            //             name: "Patriotic Pen",
            //             date: "Aug 15, 2025",
            //             details: "Independence Day celebration."
            //         },
            //          {
            //             sno: 3,
            //             name: "Eco Graphica",
            //             date: "Oct 22, 2025",
            //             details: "Conservation of Energy and Environment."
            //         },
            //          {
            //             sno: 4,
            //             name: "Eco vista",
            //             date: "Oct 29, 2025",
            //             details: "Awareness in nature."
            //         },
            //         {
            //             sno: 5,
            //             name: "One Nation One Mission - National Hackathon",
            //             date: "Oct 4, 2025",
            //             details: "Eco-Alternatives to Single use Plastics."
            //         },
            //         {
            //             sno: 6,
            //             name: "Kottuna Valikkuma",
            //             date: "Dec 11, 2025",
            //             details: "Reels Contest short videos promoting environmental responsibility."
            //         },
            //            {
            //             sno: 7,
            //             name: "Palette Spectrum",
            //             date: "Jan 26, 2026",
            //             details: "Republic day."
            //         },
            //            {
            //             sno: 8,
            //             name: "Sustainx",
            //             date: "Jan 31, 2026",
            //             details: "Energy Watt Matters."
            //         },
            //         {
            //             sno: 9,
            //             name: "Eco-Photo Fusion",
            //             date: "Feb 23, 2026",
            //             details: "Photographs of Nature and Tricky in KEC."
            //         },
            //         {
            //             sno: 10,
            //             name: "Rise in AI – Energy & Environment",
            //             date: "March 6, 2026",
            //             details: "How to utilize AI for energy and environment."
            //         },
            //           {
            //             sno: 11,
            //             name: "Dry Waste Management, Segregation and Recycling",
            //             date: "March 9, 2026",
            //             details: "Waste segregation, recycling and waste management."
            //         },

            //     ]
            // },
            //  {
            //     year: "2024-25",
            //     events: [
            //         {
            //             sno: 1,
            //             name: "Inauguration Function",
            //             date: "August 28, 2024",
            //             details: "Conversion Of Energy."
            //         },
            //          {
            //             sno: 2,
            //             name: "Patriotic Pen",
            //             date: "Aug 15, 2024",
            //             details: "Independence Day Celebration."
            //         },
            //          {
            //             sno: 3,
            //             name: "ECO-GRAPHICA",
            //             date: "Oct 9, 2024",
            //             details: "Conservation of Energy and Environment."
            //         },
            //          {
            //             sno: 4,
            //             name: "ECO PHOTO FUSION",
            //             date: "Jan 1, 2025",
            //             details: "Awareness In Nature."
            //         },
            //          {
            //             sno: 5,
            //             name: "GREENSCAPE",
            //             date: "March 29, 2025",
            //             details: "Craft Making."
            //         },
            //         {
            //             sno: 6,
            //             name: "ECOQUIZ",
            //             date: "April 26 - May 1, 2025",
            //             details: "Online Quiz."
            //         },
                   
            //            {
            //             sno: 7,
            //             name: "DEBATE",
            //             date: "May 7, 2025",
            //             details: "Next Gen Earth Talks."
            //         },
            //            {
            //             sno: 8,
            //             name: "VALEDICTORY-2025",
            //             date: "May 7, 2025",
            //             details: "Feedback On Past Events and Suggestions for Conducting Events."
            //         },
            //     ]
            // },
            // {
            //     year: "2023-24",
            //     events: [
            //         {
            //             sno: 1,
            //             name: "Inauguration & Guest Lecture on theme Clean Energy Cultivation",
            //             date: "Aug 19, 2023",
            //             details: "Conversion of Energy."
            //         },
            //          {
            //             sno: 2,
            //             name: "District level workshop on Climate Change",
            //             date: "Oct 20, 2023",
            //             details: "Conservation Of Energy and Environment."
            //         },
            //          {
            //             sno: 3,
            //             name: "Energy Conversion Photography Challenge on ECO PHOTO FUSION",
            //             date: "Nov 10, 2023",
            //             details: "Awareness in Nature."
            //         },
            //          {
            //             sno: 4,
            //             name: "Environment and Nature",
            //             date: "Dec 13, 2023",
            //             details: "Awareness in conservation of Energy & Nature."
            //         },
            //         {
            //             sno: 5,
            //             name: "MILLETS",
            //             date: "Dec 27, 2023",
            //             details: "Awareness in Environmental conservation."
            //         },
                   
            //            {
            //             sno: 6,
            //             name: "Valedictory",
            //             date: "May 21, 2024",
            //             details: "Feedback on past events and suggestions for conducting Events."
            //         },
            //     ]
            // }
        ]
    },
    {
        id: "robotics-club",
        name: "Robotics Club",
        category: "Technical",
        about: "Where machines come to life through student innovation and engineering excellence.",
        objectives: [
            "To design and build autonomous and manual robots.",
            "To compete in state and national level robotics events.",
            "To provide a workspace for student hardware projects."
        ],
        coordinators: [
            { name: "Dr. S. K. Thangarasu", designation: "Coordinator", dept: "MTS", phone: "9942783338" },
            { name: "Mr. S. Santhoshkumar", designation: "Coordinator", dept: "MTS", phone: "9025232091" }
        ],
        activitiesSummary: { "2025-26": 8, "2024-25": 9, "2023-24": 9 },
        eventDetails: [
            {
                year: "2025-26",
                events: [
                    {
                        sno: 1,
                        name: "Inaugural function",
                        date: "Aug 4, 2025",
                        details: "Unlock your inner potential."
                    },
                     {
                        sno: 2,
                        name: "Guest Lecture",
                        date: "Aug 30, 2025",
                        details: "Bridging the skill gap: What Industry Really Experts."
                    },
                     {
                        sno: 3,
                        name: "Guest Lecture",
                        date: "Aug 30, 2025",
                        details: "Role of Mechatronics Engineers in Automation Company."
                    },
                     {
                        sno: 4,
                        name: "Guest Lecture",
                        date: "Dec 4, 2025",
                        details: "Underwater Robotics and Career opportunities in robotics."
                    },
                    {
                        sno: 5,
                        name: "Workshop on GLIDER",
                        date: "Dec 26 - 28, 2025",
                        details: "Fly Robotics Workshop."
                    },
                    {
                        sno: 6,
                        name: "Guest Lecture",
                        date: "Dec 27, 2025",
                        details: "Career Guidance programme."
                    },
                       {
                        sno: 7,
                        name: "EXPELLIARMUS 2K26",
                        date: "Feb 13, 2026",
                        details: "National level Robotics competition."
                    },
                       {
                        sno: 8,
                        name: "ROBOTHON, SMART SOLUTIONS FOR MODERN INDUSTRIES 24 HOURS HACKTHON",
                        date: "Feb 21 - 22, 2026",
                        details: "Industry 4.0: Smart solutions for modern industries."
                    },
                ]
            },
             {
                year: "2024-25",
                events: [
                    {
                        sno: 1,
                        name: "Guest Lecture – I",
                        date: "July 13, 2024",
                        details: "Career Guidance Programme."
                    },
                     {
                        sno: 2,
                        name: "Inaugural Function",
                        date: "Aug 10, 2024",
                        details: "Challenges and opportunity in Robotics and Drones."
                    },
                     {
                        sno: 3,
                        name: "Teachers and Engineers Day Celebration",
                        date: "Sep 11, 2024",
                        details: "-"
                    },
                     {
                        sno: 4,
                        name: "Tech Minds",
                        date: "Sep 30, 2024",
                        details: "Quiz competition."
                    },
                     {
                        sno: 5,
                        name: "Sumo Bot",
                        date: "Oct 5 - 6, 2024",
                        details: "Sumo Bot."
                    },
                    {
                        sno: 6,
                        name: "Workshop on Autonomous Vehicles",
                        date: "Jan 25, 2026",
                        details: "Autonomous vehicles."
                    },
                   
                       {
                        sno: 7,
                        name: "Guest Lecture – II",
                        date: "Feb 2, 2025",
                        details: "Career Guidance Programme."
                    },
                       {
                        sno: 8,
                        name: "Expelliarmus event",
                        date: "March 11, 2025",
                        details: "National level Robotics competition."
                    },
                    {
                        sno: 9,
                        name: "Quiztronics",
                        date: "May 20, 2025",
                        details: "Quiz competition."
                    },
                ]
            },
            {
                year: "2023-24",
                events: [
                    {
                        sno: 1,
                        name: "Guest Lecture on Career Guidance Program",
                        date: "July 15, 2023",
                        details: "Career Guidance ."
                    },
                     {
                        sno: 2,
                        name: "Guest Lecture ",
                        date: "Sep 17, 2023",
                        details: "Opportunities for Mechatronics in Higher Studies."
                    },
                     {
                        sno: 3,
                        name: "Inaugural Function",
                        date: "Sep 27, 2023",
                        details: "Emerging technologies in areas of automation."
                    },
                     {
                        sno: 4,
                        name: "workshop",
                        date: "Oct 14 - 15, 2023",
                        details: "Maker’s."
                    },
                    {
                        sno: 5,
                        name: "Tech Minds",
                        date: "Oct 17, 2023",
                        details: "Quiz competition."
                    },
                   
                       {
                        sno: 6,
                        name: "workshop",
                        date: "Feb 21 - 23, 2024",
                        details: "Fundamentals of Robotics and autonomous Bot Buildings."
                    },
                    {
                        sno: 7,
                        name: "Workshop",
                        date: "Feb 26 - 28, 2024",
                        details: "Trackers."
                    },
                    {
                        sno: 8,
                        name: "Competition",
                        date: "March 14, 2024",
                        details: "Quiz competition."
                    },
                    {
                        sno: 9,
                        name: "Guest Lecture",
                        date: "April 12, 2024",
                        details: "Alumni Interaction."
                    },
                ]
            }
        ]
    },
    {
        id: "rotaract-club",
        name: "Rotaract Club",
        category: "Social",
        about: "Developing young leaders through community service and international friendship projects.",
        objectives: [
            "To organize community outreach programs.",
            "To provide leadership and professional development training.",
            "To collaborate on international community projects."
        ],
        coordinators: [
            { name: "Dr. K. Vishnuvardhan", designation: "Coordinator", dept: "Civil", phone: "9791674174" }
        ],
        activitiesSummary: { "2025-26": 4, "2024-25": 4, "2023-24": 6 },
        eventDetails: [
            {
                year: "2025-26",
                events: [
                    {
                        sno: 1,
                        name: "Installation Function",
                        date: "Aug 18, 2025",
                        details: "Inaugural function and Motivational talk."
                    },
                     {
                        sno: 2,
                        name: "Breast Cancer Awareness Program",
                        date: "Oct 10, 2025",
                        details: "Awarness program on Breast cancer."
                    },
                     {
                        sno: 3,
                        name: "Navigating And Overcoming Students Burnout",
                        date: "-",
                        details: "Brief introduction highlighting the relevance of mental well-being in today’s fast-paced academic environment, where students often struggle to balance internal examinations, project deadlines, extracurricular activities, and social commitments."
                    },
                     {
                        sno: 4,
                        name: "SWARAM 2K26",
                        date: "Feb 26, 2026",
                        details: "Fund Raising Event."
                    },
                ]
            },
             {
                year: "2024-25",
                events: [
                    {
                        sno: 1,
                        name: "Installation Function",
                        date: "August 28, 2024",
                        details: "Inaugural function and Motivational talk."
                    },
                     {
                        sno: 2,
                        name: "Independence Ignite",
                        date: "Aug 15, 2024",
                        details: "Speeches and Discussion with the club members reading Independence day."
                    },
                     {
                        sno: 3,
                        name: "Guest Lecture",
                        date: "Dec 23, 2024",
                        details: "Importance of Consitutuion and Fundamental Duties."
                    },
                     {
                        sno: 4,
                        name: "Swaram",
                        date: "March 17, 2025",
                        details: "Musical Fund Raising Event."
                    },
                ]
            },
            {
                year: "2023-24",
                events: [
                    {
                        sno: 1,
                        name: "Installation Function",
                        date: "Aug 2, 2023",
                        details: "Inaugural function and Motivational talk."
                    },
                     {
                        sno: 2,
                        name: "Guest Lecture",
                        date: "Sep 27, 2023",
                        details: "Guest lecture on motivational Industrial Expectation vs Reality."
                    },
                     {
                        sno: 3,
                        name: "Blood Donation Camp",
                        date: "Nov 11, 2023",
                        details: "Blood Donation Camp."
                    },
                     {
                        sno: 4,
                        name: "Awarness Program",
                        date: "Dec 27, 2023",
                        details: "Guest lecture on cancer awareness."
                    },
                    {
                        sno: 5,
                        name: "Swaram",
                        date: "March 20, 2024",
                        details: "Fund Rasing Musical Event."
                    },
                   
                       {
                        sno: 6,
                        name: "Valedictory Function",
                        date: "April 3, 2024",
                        details: "Happiness is the key to success and in what ways we can make our self happy is the main content of the lecture."
                    },
                ]
            }
        ]
    },
    {
        id: "self-development",
        name: "Self-Development Club",
        category: "Skill",
        about: "Unlocking human potential through personality development, life skills, and soft skill training.",
        objectives: [
            "To build student self-confidence and public speaking skills.",
            "To conduct workshops on life-skills and emotional intelligence.",
            "To help students develop a positive and growth-oriented mindset."
        ],
        coordinators: [
            { name: "Dr. N. Prakash", designation: "Coordinator", dept: "MBA", phone: " 9842721589" },
            { name: "Dr. S. Kavitha Bharathi", designation: "Coordinator", dept: "CT-UG", phone: "9965540601" }
        ],
        activitiesSummary: { "2025-26": 8, "2024-25": 5, "2023-24": 9 },
        eventDetails: [
            {
                year: "2025-26",
                events: [
                    {
                        sno: 1,
                        name: "Inaugural Motivational Guest Lecture – Life Long Learning and Adaptability: The Key to Professional and Personal Growth",
                        date: "Sep 29, 2025",
                        details: "The inaugural session was delivered by Dr. P. Ramesh, Founder of Aarthy Eye Hospital, focusing on lifelong learning, adaptability, resilience, and positive thinking for personal and professional success."
                    },
                     {
                        sno: 2,
                        name: "Guest Lecture – Entrepreneurship Journey: Idhayam Global Brand",
                        date: "Oct 6, 2025",
                        details: "Thiru. V. R. Muthu, CEO of Idhayam Oil, shared his entrepreneurial journey and highlighted the importance of quality, perseverance, and customer trust in building a successful brand."
                    },
                     {
                        sno: 3,
                        name: "All in the Family",
                        date: "Dec 23, 2025",
                        details: "An interactive club activity conducted for SDC members to strengthen relationships among students through team-building games and engaging activities."
                    },
                     {
                        sno: 4,
                        name: "Wellness and Empowerment Session for Girls",
                        date: "Jan 5, 2026",
                        details: "A special awareness program was conducted by doctors from Kongunadu Medical College & Hospital – Dr. T. Selvanmeenakshi, Dr. G. Subbulakshmi, and Dr. Ahalya P.G. The session focused on health awareness, wellness, and empowerment of girl students."
                    },
                    {
                        sno: 5,
                        name: "Guest Lecture – The Role of Youth in Modern India",
                        date: "Jan 27, 2026",
                        details: "Thiru. K. Annamalai, Ex-IPS Officer and Chief Mentor, We The Leaders Foundation, addressed students about leadership, national responsibility, and the role of youth in building a stronger India."
                    },
                    {
                        sno: 6,
                        name: "Guest Lecture – Shaping Your Life Beyond the Classroom",
                        date: "Jan 30, 2026",
                        details: "Dr. Jayanthasri Balakrishnan, Motivational Speaker, delivered an inspiring session encouraging students to develop life skills and focus on personal growth beyond academics."
                    },
                       {
                        sno: 7,
                        name: "Infobytes 2K26 – Day 1",
                        date: "Feb 16, 2026",
                        details: "Dr. Kavitha Karunakaran delivered a session on “Lifestyle Factors Influencing Mental Well-Being in Students.” The talk focused on mental health awareness and maintaining a balanced lifestyle."
                    },
                       {
                        sno: 8,
                        name: "Infobytes 2K26 – Day 2",
                        date: "Feb 17, 2026",
                        details: "Mr. M. Sethushankar conducted a session on “Stock Market – Fundamentals From Basics to Smart Investing.” The session introduced students to financial literacy and investment fundamentals."
                    },
                ]
            },
             {
                year: "2024-25",
                events: [
                    {
                        sno: 1,
                        name: "Inaugural Motivational Guest Lecture – Muarchiye Mulathanam",
                        date: "August 21, 2024",
                        details: "Dr. I. Kavidhasan, Director HR of Roots Industries, motivated students on self-confidence, discipline and personal success."
                    },
                     {
                        sno: 2,
                        name: "Guest Lecture – Driving Innovation: Role of R&D and IP in Making India a Product Nation",
                        date: "Sep 20, 2024",
                        details: "Padma Shri Dr. Sridhar Vembu, CEO of Zoho Corporation, spoke about innovation, research and product development in India."
                    },
                     {
                        sno: 3,
                        name: "All in the Family",
                        date: "Oct 9, 2024",
                        details: "Club bonding activity involving games and teamwork to enhance interaction among members."
                    },
                     {
                        sno: 4,
                        name: "SDC Fest – Technical and Non-Technical Symposium",
                        date: "Nov 9, 2024",
                        details: "Intra-college event including technical and creative competitions encouraging student participation and skill development."
                    },
                     {
                        sno: 5,
                        name: "Skills N Thrills – Season 7",
                        date: "March 7, 2025",
                        details: "Intra-college online event where students showcased talents in multiple creative and technical activities."
                    },
                ]
            },
            {
                year: "2023-24",
                events: [
                    {
                        sno: 1,
                        name: "Inaugural Motivational Guest Lecture – Embracing Your Potential",
                        date: "Sep 27, 2023",
                        details: "A motivational guest lecture was delivered by Ms. Kritanya Krishnamurthy, Founder of Mind Fresh Training. The session inspired students to identify their inner potential, develop confidence, and avoid being influenced by societal expectations."
                    },
                     {
                        sno: 2,
                        name: "Multimedia Workshop – Premier Pro Unleashed: Mastering the Basics",
                        date: "Oct 25, 2023",
                        details: "A hands-on multimedia workshop was conducted to train students in video editing using Adobe Premiere Pro. Participants learned editing fundamentals and practical techniques for multimedia content creation."
                    },
                     {
                        sno: 3,
                        name: "Guest Lecture – ISRO’s Journey from Aryabhatta to Aditya",
                        date: "Nov 4, 2023",
                        details: "Mrs. Kalpana Arvind, ISRO Scientist, delivered an inspiring lecture explaining the history and achievements of ISRO, including Chandrayaan missions and satellite technology."
                    },
                     {
                        sno: 4,
                        name: "Guest Lecture – Youth Power in Building a Self-Reliant Bharat",
                        date: "Jan 31, 2024",
                        details: "Prof. Dr. K. Subrahmanyam, Former Principal of Vivekananda College, Madurai, spoke about youth potential, entrepreneurship, and innovation in building a self-reliant nation."
                    },
                    {
                        sno: 5,
                        name: "Infobytes Season 4 – Day 1 Webinar",
                        date: "Feb 13, 2024",
                        details: "A webinar on “Experience AWS: Zero to Hero” by Mr. Sampathkumar Kathirvel, Solution Architect at AWS, introduced students to cloud computing concepts and services."
                    },
                   
                       {
                        sno: 6,
                        name: "Infobytes Season 4 – Day 2 Webinar",
                        date: "Feb 14, 2024",
                        details: "Mr. Dinesh Balaji, Senior Consultant at ThoughtCrest Software, delivered a session on Trends in Web Development, discussing responsive design, PWAs, and web security."
                    },
                     {
                        sno: 7,
                        name: "Infobytes Season 4 – Day 3 Webinar",
                        date: "Feb 15, 2024",
                        details: "Ms. Ramya Dharshini, CEO of GlobalCare-Bhuvika, delivered a session on entrepreneurship and developing a business mindset."
                    },
                     {
                        sno: 8,
                        name: "SWOT Analysis Workshop – Reprogram Your Mind for Success",
                        date: "Feb 28, 2024",
                        details: "The workshop was conducted by Dr. N. Prakash and Dr. K. Krishnamoorthy, focusing on personal SWOT analysis, risk management, and building resilience."
                    },
                     {
                        sno: 9,
                        name: "Skills and Thrills – Season 6",
                        date: "March 1 - 13, 2024",
                        details: "A large intra-college online event where students showcased talents in arts, photography, videography, cooking, and other creative activities."
                    },
                ]
            }
        ]
    },
    {
        id: "mathematics-club",
        name: "Srinivasa Ramanujan Mathematics Club",
        category: "Skill",
        about: "Exploring the beauty and power of mathematics beyond the standard curriculum.",
        objectives: [
            "To popularize mathematics as a fascinating subject.",
            "To conduct monthly math quizzes and puzzles.",
            "To help students prepare for competitive exams."
        ],
        coordinators: [
            { name: "Dr. AL. Nachammai", designation: "Coordinator", dept: "Maths", phone: "9095059729" },
            { name: "Dr. K. Radhika", designation: "Coordinator", dept: "Maths", phone: "	9150780480" }
        ],
        activitiesSummary: { "2025-26": 11, "2024-25": 13, "2023-24": 10 },
        eventDetails: [
            {
                year: "2025-26",
                events: [
                    {
                        sno: 1,
                        name: "Inaugural function",
                        date: "Sep 1, 2025",
                        details: "The inaugural of Srinivasa Ramanujan Mathematics club for the academic year 2025-2026 was held on 01.09.2025 and the office bearers for the academic year 2025-2026 were introduced."
                    },
                     {
                        sno: 2,
                        name: "Guest Lecture",
                        date: "Sep 1, 2025",
                        details: "The guest speaker delivered a guest lecture on the topic “Matrices & Gradients: Ramanujan’s Eye, Hardy’s Rule, and How AI Learns”."
                    },
                     {
                        sno: 3,
                        name: "INFINYX",
                        date: "Sep 22, 2025",
                        details: "The event INFINYX was conducted on 22.09.2025, featuring multiple mathematical competition rounds, and witnessed active participation from 62 teams (124 students), highlighting analytical skills, teamwork, and problem-solving abilities."
                    },
                     {
                        sno: 4,
                        name: "EQUATRIX",
                        date: "Oct 13, 2025",
                        details: "The event EQUATRIX was conducted as a mathematics- focused competition featuring multiple problem-solving and interactive rounds, with strong student participation that highlighted analytical thinking, teamwork, and creativity, making it an engaging and intellectually enriching program."
                    },
                    {
                        sno: 5,
                        name: "MATHVERSE LIVE",
                        date: "Oct 25, 2025",
                        details: "The “MATHVERSE LIVE” online event was organized on 25.10.2025 by the Srinivasa Ramanujan Mathematics Club to promote mathematical thinking, creativity, and problem-solving skills. The program featured interactive rounds including a Kahoot quiz and poster designing, with results announced on 26.10.2025, and saw enthusiastic student participation throughout."
                    },
                    {
                        sno: 6,
                        name: "CIPHER QUEST",
                        date: "Dec 22, 2025",
                        details: "The online event Cipher Quest was conducted with the theme “Escape the Room,” where participants solved a series of coded clues, logical puzzles, and mathematical challenges to progress through virtual stages. The event promoted critical thinking, teamwork, and time- bound problem-solving in an engaging and game-based format."
                    },
                       {
                        sno: 7,
                        name: "MYSTIQ",
                        date: "Feb 9, 2026",
                        details: "MYSTIQ was a multi-round mathematics event featuring a dataset-based problem round, a one-on-one challenge, and a Math Auction round. The event tested participants’ analytical skills, speed, and strategic thinking in a competitive format."
                    },
                       {
                        sno: 8,
                        name: "BRAIN BOOSTER – VEDIC MATHS",
                        date: "Feb 16, 2026",
                        details: "Brain Booster – Vedic Maths was an interactive session where the office bearers of the Srinivasa Ramanujan Mathematics Club guided students on key Vedic Mathematics techniques, helping them improve calculation speed and problem-solving skills."
                    },
                    {
                        sno: 9,
                        name: "MATHFIESTA’26",
                        date: "March 17, 2026",
                        details: "Inter-college and intra-college competition was organized with the objective of enhancing students’ mathematical knowledge, logical thinking, creativity, and technical skills. Students from various departments."
                    },
                    {
                        sno: 10,
                        name: "Guest Lecture",
                        date: "April 11, 2026",
                        details: "The guest speaker delivered the special lecture on the topiv “Bridging Theory and Practise:mathematics in modern Engineering’."
                    },
                      {
                        sno: 11,
                        name: "Valedictory",
                        date: "April 11, 2026",
                        details: "Prize winners are awarded with certificates and prizes. Executive members are honoured with shield and Certificates."
                    },

                ]
            },
             {
                year: "2024-25",
                events: [
                    {
                        sno: 1,
                        name: "online quiz contest on Vedic Maths",
                        date: "August 15, 2024",
                        details: "In celebration of the 78th Independence Day,  online quiz  contest  was  organized on the topic Vedic Maths on August 15, 2024."
                    },
                     {
                        sno: 2,
                        name: "Inaugural Function ",
                        date: "Sep 18, 2024",
                        details: "The inaugural of Srinivasa Ramanujan Mathematics club for the academic year 2024-2025 was held on 18.09.2024 and the office bearers for the academic year 2024-2025 were introduced. "
                    },
                     {
                        sno: 3,
                        name: "Guest Lecture I",
                        date: "Sep 18, 2024",
                        details: "Dr.P.Kandaswamy was invited to address our students on the topic “Importance of Mathematics in Engineering”.  The insightful lecture explored the significance of mathematical concepts and their practical applications, captivating the audience with its depth of knowledge and expertise."
                    },
                     {
                        sno: 4,
                        name: "Event-LOGIQUE",
                        date: "Oct 9, 2024",
                        details: "The  Event-LOGIQUE  provided a perfect platform for students to demonstrate their analytical skills while working together to overcome challenging mathematical problems."
                    },
                     {
                        sno: 5,
                        name: "Event- DIGITIZ",
                        date: "Nov 9, 2024",
                        details: "The event DIGITIZ designed to foster logical thinking and problem-solving skills among first-year B.E. students."
                    },
                    {
                        sno: 6,
                        name: "Online Quiz in commemoration with National Mathematics Day Celebration",
                        date: "Dec 22, 2025",
                        details: "Online Quiz was conducted on Life History of Srinivasa Ramanujan and his findings"
                    },
                       {
                        sno: 7,
                        name: "National Mathematics Day Celebration-Guest Lecture",
                        date: "Jan 10, 2025",
                        details: "She delivered a lecture on the topic : Beauty and Reality of Mathematics Students were benefitted by the Guest Lecture."
                    },
                       {
                        sno: 8,
                        name: "Sodoku Competition",
                        date: "Jan 23, 2025",
                        details: "On celebration of Ruby year 2025,  Sodoku Competition was organized for the school students. They have participated enthuasitically."
                    },
                    {
                        sno: 9,
                        name: "Quiz Competition",
                        date: "Jan 23, 2025",
                        details: "On celebration of Ruby year 2025, Quiz Competition was organized for the school students."
                    },
                    {
                        sno: 10,
                        name: "Math E magic",
                        date: "Jan 24, 2025",
                        details: "On celebration of Ruby year 2025, Math E magic was organized for the school students."
                    },
                    {
                        sno: 11,
                        name: "EXPLORIX",
                        date: "March 1, 2025",
                        details: "To develop critical thinking, comprehension, and problem- solving skills, we conduct event."
                    },
                    {
                        sno: 12,
                        name: "MATH FIESTA 2K25",
                        date: "March 24, 2025",
                        details: "Math Relay, Flyer Design contest, fast-paced Rapid Fire quiz, Rubik’s Cube competition, solve puzzles conducted."
                    },
                    {
                        sno: 13,
                        name: "Significance of Mathematics in Engineering",
                        date: "March 29, 2025",
                        details: "Guest lecture on the topic Significance of Mathematics in Engineering."
                    },
                    {
                        sno: 14,
                        name: "Valedictory",
                        date: "March 29, 2025",
                        details: "Certificate distribution ceremony was conducted."
                    },
                ]
            },
            {
                year: "2023-24",
                events: [
                    {
                        sno: 1,
                        name: "Inaugural Function ",
                        date: "July 31, 2023",
                        details: "The inaugural of Srinivasa Ramanujan Mathematics club for the academic year 2023-2024 was held on 31.07.2023 and the office bearers for the academic year 2023-2024 were introduced."
                    },
                     {
                        sno: 2,
                        name: "Guest Lecture I ",
                        date: "Oct 1, 2023",
                        details: "Dr.P. Geetha was invited to address our students on the topic “Mathematics in our Modern World”. It was a good experience to learn the importance of Maths in Engineering."
                    },
                     {
                        sno: 3,
                        name: "CON-FUE TRIX",
                        date: "Sep 27, 2023",
                        details: "CON-FUE TRIX was a fun event where aptitude questions and some random maths questions where given to solve to recall their knowledge in maths."
                    },
                     {
                        sno: 4,
                        name: "Fibanacci Fete",
                        date: "Nov 8, 2023",
                        details: "Fibanacci Fete was an innovative event that made the students analyze their own analytical skills and develop them."
                    },
                    {
                        sno: 5,
                        name: "Guest Lecture II",
                        date: "Dec 13, 2023",
                        details: "Topic : Application of Mathematics in Engineering. The Guest Lecture was very useful for the students."
                    },
                   
                       {
                        sno: 6,
                        name: "National Mathematics Day Celebration-Guest Lecture",
                        date: "Dec 20, 2023",
                        details: "Topic : Mathematics for Coding Students were benefitted by the Guest Lecture."
                    },
                    {
                        sno: 7,
                        name: "Online Quiz incommemoration with National Mathematics Day Celebration",
                        date: "Dec 22, 2023",
                        details: "Online Quiz was conducted on Life History of Srinivasa Ramanujan."
                    },
                    {
                        sno: 8,
                        name: "MATH FIESTA 2K24",
                        date: "April 17, 2024",
                        details: "TRIASTA, MATAPOSTA, ADVOZAPST, COLORISTA,ORATYSTA, BIDDING were conducted."
                    },
                    {
                        sno: 9,
                        name: "Guest Lecture on Speed Maths",
                        date: "March 16, 2024",
                        details: "Guest Lecture on Speed Maths."
                    },
                    {
                        sno: 10,
                        name: "ART OF LEARMING MATHEMATICS",
                        date: "April 29, 2024",
                        details: "Topic : ART OF LEARMING MATHEMATICS."
                    },
                    {
                        sno: 11,
                        name: "Valedictory Function",
                        date: "April 29, 2024",
                        details: "Prizes and Shield were distributed to the winners and executive members."
                    },
                ]
            }
        ]
    },
    {
        id: "tamil-mandram",
        name: "Tamil Mandram",
        category: "Cultural",
        about: "Preserving and promoting the rich cultural heritage and literature of the Tamil language.",
        objectives: [
            "To organize debates and literary events in Tamil.",
            "To celebrate Tamil traditional festivals on campus.",
            "To encourage writing and creative expression in Tamil."
        ],
        coordinators: [
            { name: "Dr. A. S. Periasamy Manikandan", designation: "Coordinator", dept: "Chemical", phone: "9442520334" },
            { name: "Dr. R. Mouleeshuwarapprabu", designation: "Coordinator", dept: "EIE", phone: "9786664799" }
        ],
        activitiesSummary: { "2025-26": 17, "2024-25": 16, "2023-24": 18 },
        eventDetails: [
            //  {
            //     year: "2025-26",
            //     events: [
            //         {
            //             sno: 1,
            //             name: "Inauguration function",
            //             date: "Aug 2, 2025",
            //             details: "Latest Trends & Opportunity in Photovoltaic Energy."
            //         },
            //          {
            //             sno: 2,
            //             name: "Patriotic Pen",
            //             date: "Aug 15, 2025",
            //             details: "Independence Day celebration."
            //         },
            //          {
            //             sno: 3,
            //             name: "Eco Graphica",
            //             date: "Oct 22, 2025",
            //             details: "Conservation of Energy and Environment."
            //         },
            //          {
            //             sno: 4,
            //             name: "Eco vista",
            //             date: "Oct 29, 2025",
            //             details: "Awareness in nature."
            //         },
            //         {
            //             sno: 5,
            //             name: "One Nation One Mission - National Hackathon",
            //             date: "Oct 4, 2025",
            //             details: "Eco-Alternatives to Single use Plastics."
            //         },
            //         {
            //             sno: 6,
            //             name: "Kottuna Valikkuma",
            //             date: "Dec 11, 2025",
            //             details: "Reels Contest short videos promoting environmental responsibility."
            //         },
            //            {
            //             sno: 7,
            //             name: "Palette Spectrum",
            //             date: "Jan 26, 2026",
            //             details: "Republic day."
            //         },
            //            {
            //             sno: 8,
            //             name: "Sustainx",
            //             date: "Jan 31, 2026",
            //             details: "Energy Watt Matters."
            //         },
            //         {
            //             sno: 9,
            //             name: "Eco-Photo Fusion",
            //             date: "Feb 23, 2026",
            //             details: "Photographs of Nature and Tricky in KEC."
            //         },
            //         {
            //             sno: 10,
            //             name: "Rise in AI – Energy & Environment",
            //             date: "March 6, 2026",
            //             details: "How to utilize AI for energy and environment."
            //         },
            //           {
            //             sno: 11,
            //             name: "Dry Waste Management, Segregation and Recycling",
            //             date: "March 9, 2026",
            //             details: "Waste segregation, recycling and waste management."
            //         },

            //     ]
            // },
            //  {
            //     year: "2024-25",
            //     events: [
            //         {
            //             sno: 1,
            //             name: "Inauguration Function",
            //             date: "August 28, 2024",
            //             details: "Conversion Of Energy."
            //         },
            //          {
            //             sno: 2,
            //             name: "Patriotic Pen",
            //             date: "Aug 15, 2024",
            //             details: "Independence Day Celebration."
            //         },
            //          {
            //             sno: 3,
            //             name: "ECO-GRAPHICA",
            //             date: "Oct 9, 2024",
            //             details: "Conservation of Energy and Environment."
            //         },
            //          {
            //             sno: 4,
            //             name: "ECO PHOTO FUSION",
            //             date: "Jan 1, 2025",
            //             details: "Awareness In Nature."
            //         },
            //          {
            //             sno: 5,
            //             name: "GREENSCAPE",
            //             date: "March 29, 2025",
            //             details: "Craft Making."
            //         },
            //         {
            //             sno: 6,
            //             name: "ECOQUIZ",
            //             date: "April 26 - May 1, 2025",
            //             details: "Online Quiz."
            //         },
                   
            //            {
            //             sno: 7,
            //             name: "DEBATE",
            //             date: "May 7, 2025",
            //             details: "Next Gen Earth Talks."
            //         },
            //            {
            //             sno: 8,
            //             name: "VALEDICTORY-2025",
            //             date: "May 7, 2025",
            //             details: "Feedback On Past Events and Suggestions for Conducting Events."
            //         },
            //     ]
            // },
            // {
            //     year: "2023-24",
            //     events: [
            //         {
            //             sno: 1,
            //             name: "Inauguration & Guest Lecture on theme Clean Energy Cultivation",
            //             date: "Aug 19, 2023",
            //             details: "Conversion of Energy."
            //         },
            //          {
            //             sno: 2,
            //             name: "District level workshop on Climate Change",
            //             date: "Oct 20, 2023",
            //             details: "Conservation Of Energy and Environment."
            //         },
            //          {
            //             sno: 3,
            //             name: "Energy Conversion Photography Challenge on ECO PHOTO FUSION",
            //             date: "Nov 10, 2023",
            //             details: "Awareness in Nature."
            //         },
            //          {
            //             sno: 4,
            //             name: "Environment and Nature",
            //             date: "Dec 13, 2023",
            //             details: "Awareness in conservation of Energy & Nature."
            //         },
            //         {
            //             sno: 5,
            //             name: "MILLETS",
            //             date: "Dec 27, 2023",
            //             details: "Awareness in Environmental conservation."
            //         },
                   
            //            {
            //             sno: 6,
            //             name: "Valedictory",
            //             date: "May 21, 2024",
            //             details: "Feedback on past events and suggestions for conducting Events."
            //         },
            //     ]
            // }
        ]
    },
    {
        id: "women-development",
        name: "Women Development Cell",
        category: "Social",
        about: "Empowering women students and faculty through awareness, safety, and leadership initiatives.",
        objectives: [
            "To promote women's empowerment and leadership on campus.",
            "To create awareness about women's rights and safety.",
            "To organize workshops on entrepreneurship for women."
        ],
        coordinators: [
            { name: "Dr. D. Malathi", designation: "Coordinator", dept: "ECE", phone: "9842780385" },
            { name: "Dr. A. Revathi", designation: "Coordinator", dept: "Chemistry", phone: "9942303014" }
        ],
        activitiesSummary: { "2025-26": 24, "2024-25": 28, "2023-24": 15 },
        eventDetails: [
             {
                year: "2025-26",
                events: [
                    {
                        sno: 1,
                        name: "Inaugural Function & Guest Lecture",
                        date: "Aug 11, 2025",
                        details: "The inaugural event marked the commencement of WDC’s activities for the academic year and served as a platform to promote health awareness and community engagement."
                    },
                     {
                        sno: 2,
                        name: "Independence Day Drawing Competition ",
                        date: "Aug 15, 2025",
                        details: "The drawing competition provided an accessible virtual platform, enabling students to express their love for the nation through imaginative sketches and vibrant colours that highlighted values such as sacrifice, diversity and progress."
                    },
                     {
                        sno: 3,
                        name: "Cervical Cancer Camp",
                        date: "Aug 30, 2025",
                        details: "A Cervical Cancer Awareness and Screening Camp was organized exclusively for the women staff to promote health awareness and early detection. The program provided medical guidance and screening support, emphasizing the importance of regular check-ups and preventive care for women’s health."
                    },
                     {
                        sno: 4,
                        name: "Drawing Competition (DHRITI’25)",
                        date: "Sep 27, 2025",
                        details: "The Drawing Competition conducted as part of DHRITI’25 by the Women Development Cell provided an inclusive platform for students to express themes related to women empowerment, equality, resilience, and social awareness through creative sketches and thoughtful use of colours."
                    },
                    {
                        sno: 5,
                        name: "Goddess Makeover (DHRITI’25)",
                        date: "Sep 28, 2025",
                        details: "Each participant explained the significance of the chosen goddess for example Durga representing courage and protection, Lakshmi symbolising prosperity and leadership or Saraswati reflecting knowledge and wisdom."
                    },
                    {
                        sno: 6,
                        name: "Art & Craft (DHRITI’25) ",
                        date: "Sep 29, 2025",
                        details: "The event aimed to showcase the talent & and provide a platform for students to showcase."
                    },
                       {
                        sno: 7,
                        name: "Singing Competition (DHRITI’25)",
                        date: "Sep 30, 2025",
                        details: "The event aimed to encourage musical talent and provide a platform for students to showcase their voices."
                    },
                       {
                        sno: 8,
                        name: "Golu Fest",
                        date: "Oct 1, 2025",
                        details: "The event featured beautifully arranged Golu displays, each representing themes of women empowerment, unity and devotion. The fest created a festive and spiritual atmosphere on campus, encouraging teamwork, creativity and cultural appreciation."
                    },
                    {
                        sno: 9,
                        name: "Logo Design Competition",
                        date: "Nov 16 - 17, 2025",
                        details: "The competition focused on the theme “Women’s Empowerment and Safety.” This initiative encouraged students to translate powerful ideas about women’s rights, safety and empowerment into meaningful visual symbols."
                    },
                    {
                        sno: 10,
                        name: "Guest Lecture – Kavalan App: A Digital Initiative For Women Safety And Security",
                        date: "Dec 29, 2025",
                        details: "The expert session analysed digital tools for women’s safety and security, a detailed overview of the KAVALAN app Discussed on technology’s role in personal safety, emergency response and legal context. Interactive Q&A to establish practical understanding, which encourages student awareness of digital safety strategies and responsible usage."
                    },
                      {
                        sno: 11,
                        name: "Group Singing(SHRISTI’26)",
                        date: "Jan 31, 2026",
                        details: "Showcase harmony and teamwork in Group Singing. Participants perform together, blending voices to present melodious songs that highlight coordination, musical talent, and stage presence."
                    },
                    {
                        sno: 12,
                        name: "Solo Singing(SHRISTI’26)",
                        date: "Jan 31, 2026",
                        details: "Express your musical talent in Solo Singing. Participants perform individually, showcasing vocal strength, melody, rhythm, and emotional connection with the audience through their song choice."
                    },
                    {
                        sno: 13,
                        name: "Craving & Cook Without Fire (SHRISTI’26)",
                        date: "Feb 7, 2026",
                        details: "Unleash your creativity in the kitchen without using fire. Prepare tasty, innovative dishes using simple ingredients while focusing on presentation, nutrition, and creativity."
                    },
                    {
                        sno: 14,
                        name: "Rangoli (SHRISTI’26)",
                        date: "Feb 7, 2026",
                        details: "Display artistic skills by creating vibrant Rangoli designs using colors and patterns. Participants transform the floor into beautiful traditional artwork reflecting culture, creativity, and imagination."
                    },
                    {
                        sno: 15,
                        name: "Mehandi (SHRISTI’26)",
                        date: "Feb 7, 2026",
                        details: "Showcase intricate henna artistry in the Mehandi competition. Participants create beautiful, detailed designs on hands, highlighting creativity, precision, and traditional decorative skills."
                    },
                    {
                        sno: 16,
                        name: "Fashion Parade And Solo Dance(SHRISTI’26)",
                        date: "Feb 9, 2026",
                        details: "Combine style and performance in Fashion Parade and Solo Dance. Participants present creative outfits and showcase confidence, elegance, and energetic dance moves on stage."
                    },
                    {
                        sno: 17,
                        name: "Solo Dance (SHRISTI’26",
                        date: "Feb 9, 2026",
                        details: "Express rhythm and emotion through Solo Dance. Participants perform individually, displaying creativity, coordination, expression, and energetic movements that captivate the audience."
                    },
                    {
                        sno: 18,
                        name: "Debate (SHRISTI’26)",
                        date: "Feb 16, 2026",
                        details: "Engage in thought-provoking discussions, present strong arguments, and showcase confidence, knowledge, and communication skills."
                    },
                    {
                        sno: 19,
                        name: "Solo Instrument And Unique Talent(SHRISTI’26)",
                        date: "Feb 16, 2026",
                        details: "Showcase musical instrument skills or extraordinary talents, expressing creativity, originality, and confidence on stage."
                    },
                    {
                        sno: 20,
                        name: "Craft",
                        date: "Feb 16, 2026",
                        details: "Display creativity by making beautiful handmade items using simple materials, highlighting artistic skills and imagination."
                    },
                    {
                        sno: 21,
                        name: "Group Dance (SHRISTI’26)",
                        date: "Feb 23, 2026",
                        details: "Teams perform energetic dance routines together, demonstrating coordination, creativity, synchronization, and entertaining stage presence."
                    },
                    {
                        sno: 22,
                        name: "Dual Dance(SHRISTI’26)",
                        date: "Feb 23, 2026",
                        details: "Two participants perform together, showcasing coordination, chemistry, rhythm, creativity, and expressive dance movements."
                    },
                    {
                        sno: 23,
                        name: "Photography(SHRISTI’26)",
                        date: "Feb 24, 2026",
                        details: "Capture stunning moments through your lens, showcasing creativity, perspective, storytelling, and photographic skills."
                    },
                    {
                        sno: 24,
                        name: "Treasure Hunt(SHRISTI’26)",
                        date: "Feb 16, 2026",
                        details: "An exciting adventure where teams solve clues, explore locations, and race together to find hidden treasure."
                    },

                ]
            },
             {
                year: "2024-25",
                events: [
                    {
                        sno: 1,
                        name: "Inaugural And Guest Lecture",
                        date: "August 14, 2024",
                        details: "About Women Independence and Rights.Ms.N.Rajarajeswari, Director of Dreamwin Academy, Erode, Corporate  Trainer and Author."
                    },
                     {
                        sno: 2,
                        name: "Guest Lecture",
                        date: "Sep 11, 2024",
                        details: "Embracing Sexuality in a Responsible Way.Ms.Sneha Govindarajan, Founder of “Komorebi Academy for Empowered Living [KAEL]"
                    },
                     {
                        sno: 3,
                        name: "Workshop",
                        date: "Sep 18, 2024",
                        details: "Mostly about Self Grooming.Ms.Banu Priya, Makeup Expert and Trainer from Pop Up Beauty Lounge."
                    },
                     {
                        sno: 4,
                        name: "DHRITI’24 - Drawing",
                        date: "Oct 9, 2024",
                        details: "The Drawing event encouraged participants to showcase their creativity and artistic skills through visual expression. Students illustrated their ideas and imagination based on the given theme, making the event vibrant and engaging."
                    },
                     {
                        sno: 5,
                        name: "DHRITI’24 – Logo Designing",
                        date: "Oct 9, 2024",
                        details: "The Logo Designing event provided a platform for students to demonstrate their creativity and design thinking. Participants created unique logos representing innovation, originality, and visual communication skills."
                    },
                    {
                        sno: 6,
                        name: "DHRITI’24 – Story Narration",
                        date: "Oct 11, 2024",
                        details: "The Story Narration event allowed participants to express their storytelling abilities with confidence and creativity. Students narrated inspiring and imaginative stories, captivating the audience through their voice, expression, and presentation."
                    },
                   
                       {
                        sno: 7,
                        name: "DHRITI’24 - Quiz",
                        date: "Oct 11, 2024",
                        details: "The Quiz event tested the knowledge, quick thinking, and teamwork of participants through multiple rounds of challenging questions. It created an exciting and competitive atmosphere while enhancing learning in a fun way."
                    },
                       {
                        sno: 8,
                        name: "DHRITI’24 - Golu Fest",
                        date: "Oct 12, 2024",
                        details: "The Golu Fest celebrated the traditional spirit of Navaratri by displaying beautifully arranged Golu dolls. Participants presented creative and culturally rich displays, highlighting tradition, devotion, and artistic arrangement."
                    },
                    {
                        sno: 9,
                        name: "CODHERS’24 Genesis Level -I",
                        date: "Dec 4, 2024",
                        details: "CODHERS’24 Genesis Level–I was conducted to introduce participants to the fundamentals of coding and logical thinking. The event encouraged students to enhance their programming skills and problem-solving abilities in a competitive environment."
                    },
                    {
                        sno: 10,
                        name: "Republic Day Special Event - Poster Making Competition",
                        date: "Jan 26, 2025",
                        details: "A Poster Making Competition was organized to celebrate Republic Day and promote patriotic spirit among students. Participants creatively expressed themes related to national unity, democracy, and social responsibility."
                    },
                    {
                        sno: 11,
                        name: "Group Singing(SHRISTI’25)",
                        date: "Feb 1, 2025",
                        details: "The Group Singing event brought together participants to showcase their musical talents and teamwork. The performances created a lively atmosphere and highlighted harmony, rhythm, and coordination among team members."
                    },
                    {
                        sno: 12,
                        name: "Rangoli(SHRISTI’25)",
                        date: "Feb 1, 2025",
                        details: "The Rangoli event encouraged students to display their creativity through traditional floor art designs. Participants used vibrant colors and innovative patterns to create beautiful and meaningful rangoli designs."
                    },
                    {
                        sno: 13,
                        name: "Mehandi(SHRISTI’25)",
                        date: "Feb 7, 2025",
                        details: "The Mehandi competition showcased the intricate art of henna design. Participants demonstrated their creativity and precision by creating elegant and traditional patterns."
                    },
                    {
                        sno: 14,
                        name: "Unique Talent & Solo Instrumental(SHRISTI’25)",
                        date: "Feb 7, 2025",
                        details: "This event allowed participants to showcase their unique talents and musical abilities through instrumental performances. It highlighted creativity, passion, and confidence among students."
                    },
                    {
                        sno: 15,
                        name: "Craft Work(SHRISTI’25)",
                        date: "Feb 1, 2025",
                        details: "The Craft Work event provided a platform for students to exhibit their artistic and handmade creations. Participants presented innovative crafts made from various materials, reflecting creativity and skill."
                    },
                    {
                        sno: 16,
                        name: "Group Dance(SHRISTI’25)",
                        date: "Feb 14, 2025",
                        details: "The Group Dance event featured energetic and coordinated performances by teams. Participants displayed their talent, creativity, and teamwork through vibrant dance routines."
                    },
                    {
                        sno: 17,
                        name: "Reels Making(SHRISTI’25)",
                        date: "Feb 15, 2025",
                        details: "The Reels Making competition encouraged students to create short, engaging videos using their creativity and digital skills. Participants presented innovative content through storytelling and visual editing."
                    },
                    {
                        sno: 18,
                        name: "Cooking Without Fire(SHRISTI’25)",
                        date: "Feb 21, 2025",
                        details: "The Cooking Without Fire event tested the creativity and culinary skills of participants. Students prepared innovative and healthy dishes without using any heating source."
                    },
                    {
                        sno: 19,
                        name: "Pencil/Fruit Carving(SHRISTI’25)",
                        date: "Feb 21, 2025",
                        details: "The Pencil/Fruit Carving competition highlighted the artistic skills and precision of participants. Students creatively carved intricate designs, showcasing patience and craftsmanship."
                    },
                    {
                        sno: 20,
                        name: "Solo Dance(SHRISTI’25)",
                        date: "Feb 21, 2025",
                        details: "The Solo Dance event allowed participants to express their passion for dance through individual performances. Students displayed confidence, rhythm, and creativity on stage."
                    },
                    {
                        sno: 21,
                        name: "Dual Dance(SHRISTI’25)",
                        date: "March 1, 2025",
                        details: "The Dual Dance event featured pairs performing coordinated dance routines. The performances emphasized synchronization, teamwork, and expressive storytelling through dance."
                    },
                    {
                        sno: 22,
                        name: "Photography(SHRISTI’25)",
                        date: "March 1, 2025",
                        details: "The Photography competition encouraged participants to capture meaningful moments and creative perspectives through the lens. Students showcased their talent in visual storytelling and composition."
                    },
                    {
                        sno: 23,
                        name: "Guest Lecture(SHRISTI’25)",
                        date: "Feb 28, 2025",
                        details: "A Guest Lecture was organized to provide students with valuable insights and inspiration from an experienced speaker. The session focused on motivation, career guidance, and personal development."
                    },
                    {
                        sno: 24,
                        name: "SHRISTI -2K25",
                        date: "March 5, 2024",
                        details: "Shristi 2K25 was conducted as a vibrant technical and cultural event, bringing together students to showcase their talents and innovative ideas. The event promoted creativity, collaboration, and learning through various competitions."
                    },
                    {
                        sno: 25,
                        name: "CODHERS’24 Genesis Level -II",
                        date: "April 15, 2025",
                        details: "CODHERS’24 Genesis Level–II was conducted to enhance advanced coding and analytical skills among participants. The event encouraged students to solve complex programming challenges and improve their technical expertise."
                    },
                    {
                        sno: 26,
                        name: "Guest Lecture",
                        date: "April 19, 2025",
                        details: "A Guest Lecture was organized to inspire and educate students on important academic and professional topics. The session provided valuable knowledge and practical insights from an industry expert."
                    },
                    {
                        sno: 27,
                        name: "Aval Magazine",
                        date: "April 25, 2025",
                        details: "The Aval Magazine was released to highlight the achievements, creativity, and contributions of women students. It served as a platform to share inspiring stories, articles, and artistic works."
                    },
                    {
                        sno: 28,
                        name: "Valedictory Function- Guest Lecture",
                        date: "May 3, 2025",
                        details: "The Valedictory Function marked the successful completion of the year’s activities of the Women Development Cell. The program included a special guest lecture and appreciation of participants and organizers for their contributions."
                    },
                ]
            },
            {
                year: "2023-24",
                events: [
                    {
                        sno: 1,
                        name: "Inaugural and Guest Lecture",
                        date: "Aug 2, 2023",
                        details: "An inaugural function along with a guest lecture on Yoga and Health Care was organized. The session was delivered by Ms. Rama Ramachandran, Therapist and Founder of GYAN Centre, highlighting the importance of yoga, meditation, and healthy lifestyle practices."
                    },
                     {
                        sno: 2,
                        name: "Awareness Program",
                        date: "Oct 7, 2023",
                        details: "An awareness program on Anti-Sexual Harassment Policy was conducted to educate students about maintaining a safe and respectful campus environment. The session explained rights, responsibilities, and preventive measures."
                    },
                     {
                        sno: 3,
                        name: "Guest Lecture",
                        date: "Oct 28, 2023",
                        details: "A guest lecture on Menstrual Health and Hygiene was organized to create awareness about women’s health. The session emphasized hygiene practices, health awareness, and breaking social myths related to menstruation."
                    },
                     {
                        sno: 4,
                        name: "Awareness Program",
                        date: "Nov 29, 2023",
                        details: "An awareness session on the Importance of Millets was conducted to highlight their nutritional value and benefits for a healthy lifestyle. The program encouraged students to include traditional and nutritious foods in their diet."
                    },
                    {
                        sno: 5,
                        name: "Cooking Without Fire",
                        date: "Feb 28, 2024",
                        details: "The Cooking Without Fire competition encouraged participants to prepare innovative and healthy dishes without using any heating source. The event showcased creativity and culinary skills among students."
                    },
                   
                       {
                        sno: 6,
                        name: "Mehendi Competition",
                        date: "Feb 28, 2024",
                        details: "The Mehendi competition highlighted the artistic skills of participants through intricate henna designs. Students created beautiful traditional patterns demonstrating creativity and precision."
                    },
                    {
                        sno: 7,
                        name: "Fruit Carving",
                        date: "Feb 28, 2024",
                        details: "The Fruit Carving competition provided a platform for students to demonstrate their artistic carving skills. Participants creatively designed attractive shapes and patterns on fruits."
                    },
                    {
                        sno: 8,
                        name: "Treasure Hunt",
                        date: "March 2, 2024",
                        details: "The Treasure Hunt event was conducted as an interactive activity where participants solved clues and challenges to reach the final destination. The event promoted teamwork and problem-solving skills."
                    },
                    {
                        sno: 9,
                        name: "Singing",
                        date: "March 2, 2024",
                        details: "The Singing competition allowed students to showcase their musical talents and stage confidence through individual performances, creating a lively and entertaining atmosphere."
                    },
                    {
                        sno: 10,
                        name: "Rangoli",
                        date: "March 2, 2024",
                        details: "The Rangoli competition encouraged participants to create vibrant designs using colors and patterns. The event reflected creativity and traditional artistic expression."
                    },
                    {
                        sno: 11,
                        name: "Photography",
                        date: "March 6, 2024",
                        details: "The Photography competition encouraged students to capture creative moments and unique perspectives through the lens, promoting visual storytelling and artistic photography skills."
                    },
                    {
                        sno: 12,
                        name: "Dance",
                        date: "March 6, 2024",
                        details: "The Dance event provided a platform for students to showcase their passion for dance and stage performance. Participants presented energetic and expressive performances."
                    },
                    {
                        sno: 13,
                        name: "Reels Making",
                        date: "March 6, 2024",
                        details: "The Reels Making competition encouraged students to create short and engaging videos using their creativity and digital editing skills. Participants presented innovative storytelling through social media style content."
                    },
                    {
                        sno: 14,
                        name: "Shristi 2K24 – International Women’s Day Celebration",
                        date: "March 8, 2024",
                        details: "Shristi 2K24 was organized in celebration of International Women’s Day, featuring various cultural and creative competitions. The event promoted confidence, creativity, and active participation among women students."
                    },
                    {
                        sno: 15,
                        name: "Workshop",
                        date: "March, 2024",
                        details: "A workshop was conducted to provide students with practical knowledge and skill development opportunities. The session focused on enhancing personal development and awareness among participants."
                    },
                ]
            }
        ]
    },
    {
        id: "yoga-meditation",
        name: "Yoga and Meditation Club",
        category: "Social",
        about: "Nurturing physical health and mental peace through the ancient practices of Yoga and Meditation.",
        objectives: [
            "To conduct regular yoga and meditation sessions.",
            "To promote mental wellness and stress reduction.",
            "To teach life-balancing techniques for students."
        ],
        coordinators: [
            { name: "Dr. R. Thamilselvan", designation: "Coordinator", dept: "CSE", phone: "9443916069" },
            { name: "Dr. P. Vadivel", designation: "Coordinator", dept: "Maths", phone: "9842122611" },
            { name: "Dr. L. Rahunathan", designation: "Coordinator", dept: "MCA", phone: "9095296777" }
        ],
        activitiesSummary: { "2025-26": 2, "2024-25": 3, "2023-24": 2 },
        eventDetails: [
             {
                year: "2025-26",
                events: [
                    {
                        sno: 1,
                        name: "International Yoga Day - 2025",
                        date: "June 21, 2025",
                        details: "International Yoga Day 2025 was celebrated at Kongu Engineering College, Perundurai, Erode, Tamilnadu on 21.06.2025. The programme started at 6.00 am with Prayer, followed by Asanas, Pranayama and ended with Meditation. About 150 students and officials participated in International Yoga Day."
                    },
                     {
                        sno: 2,
                        name: "Yoga And Values For Holistic Development(B.E.Students)",
                        date: "Aug 25 -30 & Jan 24 - 31, 2026",
                        details: "Yoga and Values for Holistic Development was successfully conducted for the first-year engineering students from all the branches . The program was organized from 25.08.2025 to 30.08.2025 & 24.01.2026 to 31.01.2026 and was held at the S&H Seminar Hall and Maharaja Auditorium. Both theory and practical sessions were included to ensure comprehensive learning and experiential engagement."
                    },
                ]
            },
             {
                year: "2024-25",
                events: [
                     {
                        sno: 1,
                        name: "International Yoga Day - 2024",
                        date: "June 21, 2024",
                        details: "International Yoga Day 2024 was celebrated at Kongu Engineering College, Perundurai, Erode, Tamilnadu on 21.06.2024. The programme started at 6.00 am with Prayer, followed by Asanas, Pranayama and ended with Meditation. About 150 students and officials participated in International Yoga Day."
                    },
                     {
                        sno: 2,
                        name: "Yoga And Values For Holistic Development(B.E.Students)",
                        date: "Sep 9 - 13 & Feb 12 - 18, 2025",
                        details: "This programme was organized for all the first year BE/BTech students as one credit course. Aim of this programme is to teach asanas for physical health, meditation for mental well being and Pranayama Exercise."
                    },
                     {
                        sno: 3,
                        name: "Yoga And Values For Holistic Development (BSc, MSc)",
                        date: "Sep 4 - 11, 2023",
                        details: "This programme was organized for all the BSc/MSc students , this programme is to teach asanas for physical health, meditation for mental well being and Pranayama Exercise."
                    },
                ]
            },
             {
                year: "2023-24",
                events: [
                    {
                        sno: 1,
                        name: "International Yoga Day - 2023",
                        date: "June 21, 2023",
                        details: "International Yoga Day 2023 was celebrated at Kongu Engineering College, Perundurai, Erode, Tamilnadu on 21.06.2023. The programme started at 6.00 am with Prayer, followed by Asanas, Pranayama and ended with Meditation. About 150 students and officials participated in International Yoga Day."
                    },
                     {
                        sno: 2,
                        name: "Yoga And Values For Holistic Development",
                        date: "Nov 14 -24 & Feb 20 - 26 & Mar 3, 2024",
                        details: "Yoga and Values for Holistic Development was successfully conducted for the first-year engineering students. The program was organized from 14.11.2023 to 24.11.2023 & 20.02.2024 to 03.03.2024 and was held at the S&H Seminar Hall and Maharaja Auditorium. Both theory and practical sessions were included to ensure comprehensive learning and experiential engagement. "
                    },
            
                ]
            }
        ]
    },
    {
        id: "youth-red-cross",
        name: "Youth Red Cross",
        category: "Social",
        about: "Training youth in humanitarian values and disaster preparedness.",
        objectives: [
            "To provide first-aid and medical disaster training.",
            "To promote health and hygiene awarenes.",
            "To organize community service and relief camps."
        ],
        coordinators: [
            { name: "Dr. G. Mugaishudeen", designation: "Coordinator", dept: "Chemical", phone: "9842040470" },
            { name: "Dr. S. Yamunadevi", designation: "Coordinator", dept: "Maths", phone: "9942663067" }
        ],
        activitiesSummary: { "2025-26": 3, "2024-25": 5, "2023-24": 5 },
        eventDetails: [
            {
                year: "2025-26",
                events: [
                    {
                        sno: 1,
                        name: "Inauguration & Workshop",
                        date: "Aug 25, 2025",
                        details: "Workshop on First Aid Measures"
                    },
                     {
                        sno: 2,
                        name: "Online Photography Event",
                        date: "Sep 29 - 30, 2025",
                        details: "Clean and Green KEC Contest"
                    },
                      {
                        sno: 3,
                        name: "Run for Swadeshi",
                        date: "Jan 10, 2026",
                        details: "Marathon on commemorating Swami Vivekanandha 164 th birth anniversary (National Youth Day)"
                    },
                ]
            },
             {
                year: "2024-25",
                events: [
                     {
                        sno: 1,
                        name: "Pencil Art Competition on Drug Free Society",
                        date: "Aug 15, 2024",
                        details: "Health Awareness"
                    },
                    {
                        sno: 2,
                        name: "Inaugural Function & Workshop on National Youth Parliamentary Sitting - IV",
                        date: "Oct 10, 2024",
                        details: "Awareness in Trends in Technology"
                    },
                    {
                        sno: 3,
                        name: "Drawing Competition on JANJATIYA GAURAV DIWAS",
                        date: "Nov 23, 2024",
                        details: "Life skill "
                    },
                    {
                        sno: 4,
                        name: "Poster Making competition on WORLD RED CROSS DAY",
                        date: "May 8, 2025",
                        details: "Life skill"
                    },
                    {
                        sno: 5,
                        name: "Valedictory Function ",
                        date: "May 14, 2025",
                        details: "Life skill "
                    },
                ]
            },
             {
                year: "2023-24",
                events: [
                    {
                        sno: 1,
                        name: "Inaugural Function & Guest Lecture on Youth for Better Society",
                        date: "Oct 27, 2023",
                        details: "Awareness in Trends in Technology"
                    },
                     {
                        sno: 2,
                        name: "National Youth Parliamentary Sitting - III ",
                        date: "Feb 29, 2024",
                        details: "Soft Skill/ Communication skill/Awareness in Trends in Technology"
                    },
                     {
                        sno: 3,
                        name: "Rare Disease Day ",
                        date: "Feb 29, 2024",
                        details: "Life skill"
                    },
                     {
                        sno: 4,
                        name: "Cleaning Campaign Swachh Bharat",
                        date: "March 2, 2024",
                        details: "Awareness in cleanliness"
                    },
                     {
                        sno: 5,
                        name: "Campaign on Mera Pehla Vote Desh Ke Liye",
                        date: "March 4 - 14, 2024",
                        details: "Awareness in voting rights"
                    },
            
                ]
            }
        ]
    },
    {
        id: "road-safety",
        name: "Road Safety Club",
        category: "Social",
        about: "Dedicated to saving lives through awareness and adherence to road safety rules.",
        objectives: [
            "To create awareness about safe driving practices.",
            "To organize rallies and seminars on traffic rules.",
            "To conduct mock safety drills."
        ],
        coordinators: [
            { name: "Mr. R. Gowtham", designation: "Coordinator", dept: "Automobile", phone: "9629702739" },
            { name: "Mr. T. Surendran", designation: "Coordinator", dept: "Mechatronics", phone: "7358761043" },

        ],
        activitiesSummary: { "2025-26": 2 },
        eventDetails: [
             {
                year: "2025-26",
                events: [
                    {
                        sno: 1,
                        name: "Inauguration & Seminar",
                        date: "Jan 30, 2026",
                        details: "Seminar on Road Safety Awareness"
                    },
                ]
            }
        ]
    },
    {
        id: "sdg-cell",
        name: "SDG Cell",
        category: "Social",
        about: "Working towards the United Nations Sustainable Development Goals on campus.",
        objectives: [
            "To promote awareness about the 17 UN SDGs.",
            "To implement projects addressing sustainability and poverty.",
            "To align institutional practices with global sustainability goals."
        ],
        coordinators: [
            { name: "Dr. M. Sivachitra", designation: "Coordinator", dept: "EEE", phone: "9787325879" },
            { name: "Dr. C. Gomadurai", designation: "Coordinator", dept: "Civil", phone: "94430 29421" },
            { name: "Dr. M.Sambathkumar", designation: "Coordinator", dept: "Mechanical", phone: "9952306585" },
            { name: "P.Vanitha", designation: "Coordinator", dept: "IT", phone: "9488066933" }
        ],
        activitiesSummary: { "2025-26": 3 },
        eventDetails: [
             {
                year: "2025-26",
                events: [
                    {
                        sno: 1,
                        name: "Inaugural Function",
                        date: "March 17, 2026",
                        details: "Inauguration of SDG Cell."
                    },
                     {
                        sno: 2,
                        name: "Guest Lecture",
                        date: "March 17, 2026",
                        details: "Guest Lecture on Transforming our world through progress towards SDG's."
                    },
                     {
                        sno: 3,
                        name: "Guest Lecture",
                        date: "April 4, 2023",
                        details: "Guest Lecture on Software Engineering for sustainable development : Building solutions for SDG's."
                    },
                ]
            }
         ]
    },
    {
        id: "watts-next",
        name: "WATT’S NEXT ",
        category: "Technical",
        about: "To create a dynamic platform that nurtures innovation and practical learning by strengthening students’ technical knowledge, inspiring them to design and develop product-based solutions, providing industry and research exposure, and enhancing their problem-solving and presentation skills.",
        objectives: [
            "To develop the technical knowledge of first-year students to conceptualize and present product development ideas.",
            "To create a platform for product development through industrial training.",
            "To impart hands-on experience in essential engineering practices, including case studies, problem-solving, and scholarly presentations.",
            "To coordinate visits to reputed research laboratories and promote research and development (R&D) activities among students and faculty."

        ],
        coordinators: [
            { name: "Dr. P. Manikandan", designation: "Coordinator", dept: "Chemistry", phone: "9715508383" },
            { name: "Mr. V. Parthibaraj", designation: "Coordinator", dept: "Physics", phone: "	9080554215" },
            { name: "Mr. R. Thirumalairajan", designation: "Coordinator", dept: "English", phone: "7904544862" }
        ],
        activitiesSummary: {  },
        eventDetails: []
    },
 {
        id: "csi-cell",
        name: "Computer Society of India",
        category: "Professional Societies",
        about: "-",
        objectives: [
            "To promote technical excellence and continuous learning through structured programs and hands-on training.",
            "To provide training, certifications, and skill development in emerging and future technologies.",
            "To develop leadership, teamwork, communication, and organisational skills through technical events and workshops.",
            "To support technology-driven Sustainable Development Goals (SDGs) by organising hackathons and innovative project initiatives."
        ],
        coordinators: [
            { name: "Dr. P. S. Nandhini ", designation: "Coordinator", dept: "CSE", phone: "9962073299" },
            { name: "G. Balashanthi ", designation: "Coordinator", dept: "AIDS", phone: "9344860238" },
            { name: "K. Swathi", designation: "Coordinator", dept: "CSD", phone: "8056914461" },
            { name: "E. Sowmiya ", designation: "Coordinator", dept: "IT", phone: "6381812241" },
            { name: "T. Kalpana  ", designation: "Coordinator", dept: "MCA", phone: "9943113333" }
        ],
        activitiesSummary: { "2025-26": 10, "2024-25": 11, "2023-24": 11 },
        eventDetails: [
            {
                year: "2025-26",
                events: [
                    {
                        sno: 1,
                        name: "Inaugural Function 2025 - 2026",
                        date: "Sep 16, 2025",
                        details: "Inaugural function followed by Guest Lecture on Strongest Together: Security, Resilience and Sustainability in Software Development."
                    },
                     {
                        sno: 2,
                        name: "Work Shop",
                        date: "Sep 20, 2025",
                        details: "Workshop on Fundamentals of Data Analysis."
                    },
                      {
                        sno: 3,
                        name: "Design It Right",
                        date: "Sep 22, 2025",
                        details: "To showcase the creativity and design of the students using Figma."
                    },
                    {
                        sno: 4,
                        name: "Aptitude Quest",
                        date: "Oct 11, 2025",
                        details: "An enriching platform for students to strengthen their aptitude and problem-solving skills."
                    },
                    {
                        sno: 5,
                        name: "Techno Task",
                        date: "Oct 17, 2025",
                        details: "A platform to showcase technical skills, solve real-world problems, and develop innovative solutions."
                    },
                    {
                        sno: 6,
                        name: "Aventrix’25",
                        date: "Dec 20, 2025",
                        details: "From Code to Creativity includes a variety of technical events that unleash the superpower of students."
                    },
                    {
                        sno: 7,
                        name: "Innovatix’26",
                        date: "Feb 18, 2026",
                        details: "A National level symposium exclusively for other college students."
                    },
                    {
                        sno: 8,
                        name: "Workshop",
                        date: "Feb 26, 2026",
                        details: "Hands-on workshop designed to provide practical exposure to real world Machine Learning workflows."
                    },
                    {
                        sno: 9,
                        name: "Project Skill X’26",
                        date: "Feb 27, 2026",
                        details: "A platform for students to present their innovative projects, practical implementations and technology driven solutions across various domains."
                    },
                    {
                        sno: 10,
                        name: "Hackhub’26",
                        date: "March 12 - 13, 2026",
                        details: "A 24-hour Intra college Hackathon in association with Algo Tutor for the innovators to build and compete on Industry inspired problem statements."
                    },
                ]
            },
             {
                year: "2024-25",
                events: [
                     {
                        sno: 1,
                        name: "Inaugural Function 2024-2025",
                        date: "Oct 1, 2024",
                        details: "Guest Lecture on Reengineer and Resilience Self."
                    },
                    {
                        sno: 2,
                        name: "Design It Right",
                        date: "Oct 23, 2024",
                        details: "Chance to showcase the creativity of the students in design using Figma."
                    },
                    {
                        sno: 3,
                        name: "Aventrix’24",
                        date: "Nov 6, 2024",
                        details: "From Code to Creativity, Unleash the Superpower of the students."
                    },
                    {
                        sno: 4,
                        name: "Codefest’25",
                        date: "Jan 25, 2025",
                        details: "Fun and Exciting coding challenge event."
                    },
                    {
                        sno: 5,
                        name: "Envistas’25",
                        date: "Feb 1, 2025",
                        details: "Intra-college fest to explore technical and creative events."
                    },
                    {
                        sno: 6,
                        name: "Innovatix 2k25",
                        date: "Feb 15, 2025",
                        details: "A National level symposium exclusively for other college students."
                    },
                    {
                        sno: 7,
                        name: "Ncitt’25",
                        date: "March 1, 2025",
                        details: "A National Level Conference on Innovative Trends in Technologies."
                    },
                    {
                        sno: 8,
                        name: "Techno Task’25",
                        date: "March 21, 2025",
                        details: "Platform to showcase the technical skills, real world problem solving and develop innovative solutions."
                    },
                    {
                        sno: 9,
                        name: "Next-Gen Coding",
                        date: "March 28, 2025",
                        details: "Workshop based on Full Stack Development with AI Agents."
                    },
                    {
                        sno: 10,
                        name: "Project Expo",
                        date: "April 12, 2025",
                        details: "Technical exhibition event for innovators to showcase creative technical projects."
                    },
                    {
                        sno: 11,
                        name: "Valedictory Function",
                        date: "May 3, 2025",
                        details: "Lecture on Level UP for Placements : What you should start doing now."
                    },
                ]
            },
             {
                year: "2023-24",
                events: [
                    {
                        sno: 1,
                        name: "Inaugural Function 2023-2024",
                        date: "Aug 12, 2023",
                        details: "Inaugural followed by lecture on Cloud and its Applications in the Industry Perspective."
                    },
                     {
                        sno: 2,
                        name: "Design It Right",
                        date: "Aug 30, 2023",
                        details: "Chance to showcase the creativity of students in design using Figma."
                    },
                     {
                        sno: 3,
                        name: "Naevus’23",
                        date: "Nov 4, 2023",
                        details: "From Code to Creativity, Unleash Your Superpowers."
                    },
                     {
                        sno: 4,
                        name: "Workshop – Figma’s Design Symphonyt",
                        date: "Dec 15, 2023",
                        details: "Workshop on Figma’s Design Symphony."
                    },
                     {
                        sno: 5,
                        name: "Project Expo",
                        date: "March 7, 2024",
                        details: "Technical exhibition event for innovators to showcase creative technical projects."
                    },
                    {
                        sno: 6,
                        name: "Innovatix’24",
                        date: "March 15, 2024",
                        details: "A National level symposium exclusively for other college Students."
                    },
                    {
                        sno: 7,
                        name: "Code Fest",
                        date: "April 13, 2024",
                        details: "Fun and Exciting coding challenge event."
                    },
                    {
                        sno: 8,
                        name: "Techno Task",
                        date: "April 24, 2024",
                        details: "Platform to showcase their technical skills, real worlds problem solving and develop innovative solutions."
                    },
                    {
                        sno: 9,
                        name: "UI Design Sprint",
                        date: "April 24, 2024",
                        details: "Chance to showcase your creativity and design in UI."
                    },
                    {
                        sno: 10,
                        name: "Envistas’24",
                        date: "June 15, 2024",
                        details: "Intra-college fest to explore technical and creative events."
                    },
                    {
                        sno: 11,
                        name: "Valedictory",
                        date: "June 15, 2024",
                        details: "Valedictory Current trends in IT industry and about the placements."
                    },
            
                ]
            }
         ]
    },

    nssData,
    nccData



     
];
