import nssImg1 from '../../../assets/images/Clubs/nss/nss-1.webp';
import nssImg2 from '../../../assets/images/Clubs/nss/nss-2.webp';
import nssImg3 from '../../../assets/images/Clubs/nss/nss-3.webp';
import nssImg4 from '../../../assets/images/Clubs/nss/nss-4.webp';

// Awards
import award1 from '../../../assets/images/Clubs/nss/award01.webp';
import award2 from '../../../assets/images/Clubs/nss/award02.webp';
import award3 from '../../../assets/images/Clubs/nss/award03.webp';
import award4 from '../../../assets/images/Clubs/nss/award04.webp';
import award5 from '../../../assets/images/Clubs/nss/award05.webp';
import award6 from '../../../assets/images/Clubs/nss/award06.webp';
import award7 from '../../../assets/images/Clubs/nss/award07.webp';

// Memories
import family from '../../../assets/images/Clubs/nss/family.webp';
import m2 from '../../../assets/images/Clubs/nss/m2.webp';
import m3 from '../../../assets/images/Clubs/nss/m3.webp';
import m4 from '../../../assets/images/Clubs/nss/m4.webp';
import m5 from '../../../assets/images/Clubs/nss/m5.webp';
import m6 from '../../../assets/images/Clubs/nss/m6.webp';

// Newspaper
import n1 from '../../../assets/images/Clubs/nss/n1.webp';
import n2 from '../../../assets/images/Clubs/nss/n2.webp';

export const nssData = {
    id: "nss",
    name: "National Service Scheme (NSS)",
    category: "NSS",
    about: "Developing student personality through community service and active engagement in social causes.",
    generalInfo: "The National Service Scheme (NSS) is a Government of India–sponsored public service program conducted by the Ministry of Youth Affairs and Sports. At Kongu Engineering College, NSS was established in the academic year 1985–1986 with the intention of instilling a spirit of service and social responsibility among youth. What began with a small group of volunteers has now grown into a strong network of around 900 volunteers in the academic year 2018–2019, extending its service to a wider community and supporting those in need.\n\nNSS actively organizes initiatives such as campus cleaning, awareness programs, blood donation camps, health check-ups, and social rallies. It also conducts a national-level technical symposium, “Prasidhi,” focusing on solving societal issues through technology. Special camps are arranged in nearby villages around Erode, where volunteers contribute to basic needs, educate school students in areas like abacus, computer skills, crafts, yoga, and games, and raise awareness among villagers.\n\nNSS plays a vital role in shaping socially responsible individuals, promoting environmental responsibility, and nurturing a culture of humanity among students. NSS benefits both students as well as the society. It shapes the students for a better youth society. It seeds the nature of humanity in the young minds and enriches the nature of environment around them.",
    generalImage: nssImg3,
    objectives: [
        "To understand the community in which they work.",
        "To identify the needs and problems of the community and involve them in problem-solving.",
        "To develop among themselves a sense of social and civic responsibility."
    ],
    coordinators: [
        { name: "NSS Coordinator", designation: "Coordinator", dept: "Various", phone: "" }
    ],
    activitiesSummary: { "2025-26": 5, "2024-25": 8, "2023-24": 10 },
    eventDetails: [
        {
            year: "2018-19",
            events: [
                { date: "1st - 31st August, 2018", name: "SWACHH BHARAT SUMMER INTERNSHIP (SBSI)", location: "5 Adopted Villages", details: "Swachh Bharat Abhiyan is a campaign in India that aims to clean up the streets, roads and infrastructure. It was a 100-hour internship programme where 8 teams of volunteers worked in different villages, providing awareness on the Clean India movement and hygienic sanitation." },
                { date: "7th August, 2018", name: "BLOOD DONATION CAMP", location: "Indoor Stadium, KEC", details: "Conducted in association with Management Studies. 110 units of blood were donated by students, staff, and workers to help those in emergency situations." },
                { date: "24th September, 2018", name: "ORPHANAGE VISIT", location: "Kongu Arivalayam, Thindal", details: "Visited special and mentally retarded children. Conducted fun and cultural activities to motivate and engage the little minds." },
                { date: "25th September, 2018", name: "NALAM 2K18", location: "Maharaja Auditorium, KEC", details: "A Mega Health Camp aimed at promoting the welfare of students, staff, workers, and drivers in and around the college campus." },
                { date: "17th January, 2019", name: "DISTRICT YOUTH PARLIAMENT", location: "Kongu Arts and Science College", details: "11 volunteers attended the DYP conducted by the Central Government of India, exposing the contribution of youth towards society." },
                { date: "26th January, 2019", name: "REPUBLIC DAY PARADE", location: "Chennai, Tamilnadu", details: "A volunteer from KEC was selected for the state-level Republic Day parade after a rigorous selection process. The parade was performed in front of the Honorable Chief Minister." },
                { date: "01st February, 2019", name: "ACHAMILLAI", location: "Maharaja Auditorium, KEC", details: "A Self-Defense Programme for women. Featured defense activities, twisters, and lectures on handling tough situations and defense mechanisms." },
                { date: "27th February, 2019", name: "VOTING AWARENESS PROGRAMME", location: "MBA Block, KEC", details: "Demonstrated voting mechanisms and machines for new voters. Erode Collector Shri. C. Kathiravan addressed the volunteers about the importance of voting." },
                { date: "7th March, 2019", name: "PENNIYAM 2K19", location: "Kalingarayan Seminar Hall, KEC", details: "Women's Day Celebration focusing on realizing self-worth and the strength of women." },
                { date: "11th - 17th March, 2019", name: "SPECIAL CAMP", location: "Ammapalayam, Chennimalai", details: "Provided unique opportunities for students for group living, collective experience sharing, and constant interaction with the community." },
                { date: "22nd March, 2019", name: "PRASIDHI 2K19", location: "Kalingarayan Seminar Hall, KEC", details: "A National Level Technical Symposium featuring technical and non-technical events based on green environment and youth contribution themes." }
            ]
        }
    ],
    regularActivities: [
        { name: "Campus Cleaning", location: "In and Around College Campus", details: "Maintaining a clean surrounding for the institution by separating bio-degradable and non-bio-degradable wastes safely throughout the year." },
        { name: "Emergency Blood Donation", location: "Nearby Hospitals", details: "Be a hero! Donating blood at emergency situations. Donors are made available at necessary times to respective hospitals." },
        { name: "Paper Bag Making", location: "KEC Campus", details: "Eradicating plastic usage inside the campus by preparing and providing paper bags to shops and stores within the institution." }
    ],
    foundation: {
        title: "Vision & Purpose",
        vision: "Build youth with the mindset and spirit to serve society and uplift underprivileged communities.",
        mission: "Inculcate social responsibility in students and provide unbiased service to improve lives with dignity.",
        objective: "Work together to create meaningful impact and drive positive change in society.",
        milestoneText: "The NSS team aims to achieve greater heights in educating and uplifting the standard of society, particularly in and around the Erode region, while continuously striving to build one of the best teams dedicated to social service."
    },
    activitiesSummary: { "2025-26": 5, "2024-25": 8, "2023-24": 10 },
    gallery: {
        awards: [award1, award2, award3, award4, award5, award6, award7],
        memories: [family, m2, m3, m4, m5, m6],
        newspaper: [n1, n2]
    },
    clubVideos: [],
    contactInfo: {
        address: "National Service Scheme, Kongu Engineering College, Perundurai, Erode-638 060.",
        phone: "04294 - 226555, 226666, 226500",
        email: "nsskec@kongu.ac.in"
    }
};
