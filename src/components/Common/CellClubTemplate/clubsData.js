export const clubsData = [
    {
        id: "innovation-hub",
        name: "KEC Innovation & Startup Hub",
        category: "Technical",
        about: "Dedicated to fostering a culture of innovation and entrepreneurship among students by providing technical resources, mentorship, and a platform to launch startups.",
        objectives: [
            "To provide a collaborative workspace for student inventors.",
            "To mentor students on intellectual property and patent filing.",
            "To connect student startups with venture capitalists and investors.",
            "To conduct regular hackathons and idea pitching competitions."
        ],
        coordinators: [
            {
                name: "Dr. A. Arulvel",
                designation: "Chief Coordinator",
                dept: "Innovation Center",
                phone: "+91 98765 43210",
                email: "arulvel@kongu.ac.in",
                image: "" // Mock image
            },
            {
                name: "Mr. S. Karthick",
                designation: "Assistant Coordinator",
                dept: "CSE",
                phone: "+91 91234 56789",
                email: "karthick.cse@kongu.ac.in",
                image: "" // Mock image
            }
        ],
        activitiesSummary: {
            "2025-26": 5,
            "2024-25": 12,
            "2023-24": 8
        },
        eventDetails: [
            {
                year: "2025-26",
                events: [
                    {
                        sno: 1,
                        name: "Idea Pitchathon 2026",
                        date: "Feb 10, 2026",
                        details: "A campus-wide competition where students pitched their startup ideas to a panel of industrial experts."
                    },
                    {
                        sno: 2,
                        name: "Workshop on Patent Filing",
                        date: "Jan 15, 2026",
                        details: "Hands-on session on how to transform academic projects into legal patents."
                    }
                ]
            },
            {
                year: "2024-25",
                events: [
                    {
                        sno: 1,
                        name: "Startup Expo",
                        date: "Oct 22, 2024",
                        details: "Showcasing student-led ventures to local business leaders and alumni."
                    }
                ]
            }
        ],
        gallery: [
            "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
        ],
        driveLink: "https://drive.google.com/sample",
        reports: [
            { title: "Annual Innovation Report 2025", link: "#" },
            { title: "Success Stories: KEC Startups", link: "#" }
        ],
        otherDetails: "The Hub is accessible 24/7 for registered members working on approved projects."
    },
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
            { name: "Dr. V. Vaishnavi", designation: "Coordinator", dept: "MBA", phone: "" }
        ],
        activitiesSummary: { "2025-26": 2, "2024-25": 4, "2023-24": 3 },
        eventDetails: []
    },
    {
        id: "cii-yi-yuva",
        name: "CII – Yi Yuva Kongu Engineering College",
        category: "Professional",
        about: "Yi Yuva is a platform for students to engage in nation-building, leadership, and community service initiatives.",
        objectives: [
            "To nurture leadership skills among students.",
            "To involve students in community development projects.",
            "To provide a platform for networking with industry professionals."
        ],
        coordinators: [
            { name: "Ms. M. Dharshne", designation: "Coordinator", dept: "MBA", phone: "" }
        ],
        activitiesSummary: { "2025-26": 3, "2024-25": 5, "2023-24": 4 },
        eventDetails: []
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
            { name: "Dr. PCD. Kalaivani", designation: "Coordinator", dept: "CSE", phone: "" },
            { name: "Dr. N. Sasipriyaa", designation: "Coordinator", dept: "CSE", phone: "" }
        ],
        activitiesSummary: { "2025-26": 4, "2024-25": 6, "2023-24": 5 },
        eventDetails: []
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
            { name: "Dr. R. S. Latha", designation: "Coordinator", dept: "AI", phone: "" },
            { name: "Ms. K. Karthika", designation: "Coordinator", dept: "CT-PG", phone: "" },
            { name: "Ms. R. Subapriya", designation: "Coordinator", dept: "AI", phone: "" }
        ],
        activitiesSummary: { "2025-26": 6, "2024-25": 10, "2023-24": 8 },
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
            { name: "Mr. K. V. Satheesh Kumar", designation: "Coordinator", dept: "Mech", phone: "" },
            { name: "Dr. V. N. Kowshalya", designation: "Coordinator", dept: "Chemistry", phone: "" },
            { name: "Ms. S. Keerthana", designation: "Coordinator", dept: "CT-UG", phone: "" }
        ],
        activitiesSummary: { "2025-26": 8, "2024-25": 12, "2023-24": 10 },
        eventDetails: []
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
            { name: "Dr. S. Gomathy", designation: "Coordinator", dept: "EEE", phone: "" },
            { name: "Mr. R. Sathish Raam", designation: "Coordinator", dept: "Chemical", phone: "" }
        ],
        activitiesSummary: { "2025-26": 3, "2024-25": 5, "2023-24": 4 },
        eventDetails: []
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
            { name: "Dr. T. Geetha", designation: "Coordinator", dept: "English", phone: "" },
            { name: "Dr. B. Priyadharishini", designation: "Coordinator", dept: "English", phone: "" }
        ],
        activitiesSummary: { "2025-26": 4, "2024-25": 6, "2023-24": 5 },
        eventDetails: []
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
            { name: "Dr. M. Geetha", designation: "Coordinator", dept: "CSE", phone: "" },
            { name: "Mr. S. Selvaraj", designation: "Coordinator", dept: "CSD", phone: "" }
        ],
        activitiesSummary: { "2025-26": 2, "2024-25": 4, "2023-24": 3 },
        eventDetails: []
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
            { name: "Dr. K. Dinesh", designation: "Coordinator", dept: "CSE", phone: "" },
            { name: "Ms. S. Mohana Saranya", designation: "Coordinator", dept: "CSE", phone: "" }
        ],
        activitiesSummary: { "2025-26": 2, "2024-25": 3, "2023-24": 2 },
        eventDetails: []
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
            { name: "Dr. R. Ramya Sri", designation: "Coordinator", dept: "English", phone: "" },
            { name: "Ms. S. Shobana", designation: "Coordinator", dept: "English", phone: "" }
        ],
        activitiesSummary: { "2025-26": 5, "2024-25": 8, "2023-24": 6 },
        eventDetails: []
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
            { name: "Ms. K. Krishnaveni", designation: "Coordinator", dept: "Chemistry", phone: "" },
            { name: "Mr. D. Gurukumaresan", designation: "Coordinator", dept: "Maths", phone: "" }
        ],
        activitiesSummary: { "2025-26": 12, "2024-25": 15, "2023-24": 10 },
        eventDetails: []
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
            { name: "Mr. A. P. Pon Selva Kumar", designation: "Coordinator", dept: "IT", phone: "" },
            { name: "Ms. P. Vanitha", designation: "Coordinator", dept: "IT", phone: "" }
        ],
        activitiesSummary: { "2025-26": 4, "2024-25": 6, "2023-24": 5 },
        eventDetails: []
    },
    {
        id: "pasumaivanam",
        name: "Pasumaivanam",
        category: "Social",
        about: "The green initiative of KEC focused on campus afforestation and environmental awareness.",
        objectives: [
            "To increase the green cover of the KEC campus.",
            "To maintain the biodiversity of the institution.",
            "To involve students in nature-friendly projects."
        ],
        coordinators: [
            { name: "Dr. P. Srinivasan", designation: "Coordinator", dept: "Chemistry", phone: "" },
            { name: "Mr. A. Saravanan", designation: "Coordinator", dept: "Mech", phone: "" }
        ],
        activitiesSummary: { "2025-26": 3, "2024-25": 5, "2023-24": 4 },
        eventDetails: []
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
            { name: "Mr. N. P. Saravanan", designation: "Coordinator", dept: "CSE", phone: "" },
            { name: "Mr. S. K. Logesh", designation: "Coordinator", dept: "EEE", phone: "" }
        ],
        activitiesSummary: { "2025-26": 10, "2024-25": 15, "2023-24": 12 },
        eventDetails: []
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
            { name: "Dr. K. Senthilkumar", designation: "Coordinator", dept: "Food Tech", phone: "" },
            { name: "Dr. S. Sathya", designation: "Coordinator", dept: "Maths", phone: "" }
        ],
        activitiesSummary: { "2025-26": 4, "2024-25": 6, "2023-24": 5 },
        eventDetails: []
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
            { name: "Dr. V. Sampath Kumar", designation: "Coordinator", dept: "Civil", phone: "" },
            { name: "Mr. S. Jegan", designation: "Coordinator", dept: "EIE", phone: "" }
        ],
        activitiesSummary: { "2025-26": 3, "2024-25": 5, "2023-24": 4 },
        eventDetails: []
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
            { name: "Dr. V. Yamuna", designation: "Coordinator", dept: "Maths", phone: "" },
            { name: "Mr. V. Parthibaraj", designation: "Coordinator", dept: "Physics", phone: "" }
        ],
        activitiesSummary: { "2025-26": 4, "2024-25": 6, "2023-24": 5 },
        eventDetails: []
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
            { name: "Dr. S. K. Thangarasu", designation: "Coordinator", dept: "MTS", phone: "" },
            { name: "Mr. S. Santhoshkumar", designation: "Coordinator", dept: "MTS", phone: "" }
        ],
        activitiesSummary: { "2025-26": 5, "2024-25": 8, "2023-24": 7 },
        eventDetails: []
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
            { name: "Dr. K. Vishnuvardhan", designation: "Coordinator", dept: "Civil", phone: "" }
        ],
        activitiesSummary: { "2025-26": 4, "2024-25": 7, "2023-24": 6 },
        eventDetails: []
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
            { name: "Dr. N. Prakash", designation: "Coordinator", dept: "MBA", phone: "" },
            { name: "Dr. S. Kavitha Bharathi", designation: "Coordinator", dept: "CT-UG", phone: "" }
        ],
        activitiesSummary: { "2025-26": 5, "2024-25": 8, "2023-24": 7 },
        eventDetails: []
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
            { name: "Dr. AL. Nachammai", designation: "Coordinator", dept: "Maths", phone: "" },
            { name: "Dr. K. Radhika", designation: "Coordinator", dept: "Maths", phone: "" }
        ],
        activitiesSummary: { "2025-26": 3, "2024-25": 5, "2023-24": 4 },
        eventDetails: []
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
            { name: "Dr. A. S. Periasamy Manikandan", designation: "Coordinator", dept: "Chemical", phone: "" },
            { name: "Dr. R. Mouleeshuwarapprabu", designation: "Coordinator", dept: "EIE", phone: "" }
        ],
        activitiesSummary: { "2025-26": 6, "2024-25": 10, "2023-24": 8 },
        eventDetails: []
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
            { name: "Dr. D. Malathi", designation: "Coordinator", dept: "ECE", phone: "" },
            { name: "Dr. A. Revathi", designation: "Coordinator", dept: "Chemistry", phone: "" }
        ],
        activitiesSummary: { "2025-26": 4, "2024-25": 6, "2023-24": 5 },
        eventDetails: []
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
            { name: "Dr. R. Thamilselvan", designation: "Coordinator", dept: "CSE", phone: "" },
            { name: "Dr. P. Vadivel", designation: "Coordinator", dept: "Maths", phone: "" },
            { name: "Dr. L. Rahunathan", designation: "Coordinator", dept: "MCA", phone: "" }
        ],
        activitiesSummary: { "2025-26": 15, "2024-25": 20, "2023-24": 18 },
        eventDetails: []
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
            { name: "Dr. G. Mugaishudeen", designation: "Coordinator", dept: "Chemical", phone: "" },
            { name: "Dr. S. Yamunadevi", designation: "Coordinator", dept: "Maths", phone: "" }
        ],
        activitiesSummary: { "2025-26": 4, "2024-25": 6, "2023-24": 5 },
        eventDetails: []
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
            { name: "Mr. T. Saravanan", designation: "Coordinator", dept: "Mechanical", phone: "" }
        ],
        activitiesSummary: { "2025-26": 2, "2024-25": 4, "2023-24": 3 },
        eventDetails: []
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
            { name: "Dr. S. Karthikeyan", designation: "Coordinator", dept: "Civil", phone: "" }
        ],
        activitiesSummary: { "2025-26": 2, "2024-25": 3, "2023-24": 2 },
        eventDetails: []
    }
];
