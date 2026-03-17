import React from "react";
import "./Testimonials.css";
import RajkumarR from "../../../assets/images/Testimonials/RajkumarR.png";
import Manoshrinivas from "../../../assets/images/Testimonials/Manoshrinivas.jpeg";
import Harish from "../../../assets/images/Testimonials/Harish.jpeg";
import kasthuri from "../../../assets/images/Testimonials/kasthuri.jpeg";
import Manikandan from "../../../assets/images/Testimonials/Manikandan.jpg";
import venkat from "../../../assets/images/Testimonials/venkat.jpeg";
import vignesh from "../../../assets/images/Testimonials/vignesh.jpeg";
import dhanraj from "../../../assets/images/Testimonials/dhanraj.jpeg";
import aravindh from "../../../assets/images/Testimonials/aravindh.jpeg";
import siva from "../../../assets/images/Testimonials/siva.jpeg";
import sahithya from "../../../assets/images/Testimonials/sahithya.jpeg";
import alex from "../../../assets/images/Testimonials/alex.jpg";
import muruganandam from "../../../assets/images/Testimonials/muruganandam.jpeg";
import suhaag from "../../../assets/images/Testimonials/suhaag.jpeg";
import daniel from "../../../assets/images/Testimonials/daniel.jpeg";
import menaka from "../../../assets/images/Testimonials/menaka.jpeg";
import nagarajan from "../../../assets/images/Testimonials/nagarajan.jpeg";
import kalaiyarasi from "../../../assets/images/Testimonials/kalaiyarasi.jpeg";

const testimonialsData = [
    {
        id: 1,
        name: "Dr. Ashok J",
        role: "Professor, CHRIST University, Bangalore.",
        avatar: "https://ui-avatars.com/api/?name=Dr+Ashok+J&background=random",
        content:
            "I am honored to be an alumnus of Kongu Business School, KEC. The institution's commitment to excellence was evident in its dedicated faculty and cutting-edge infrastructure, which played a pivotal role in shaping my career. The values and knowledge I gained here have been instrumental in my success, enabling me to reach the top of my profession. I am grateful for the foundation laid during my time at Kongu Business School, and I highly recommend it to anyone seeking a world-class education.",
    },
    {
        id: 2,
        name: "Rajkumar R",
        role: "Co-Founder & Managing Director, Chennai Rice Industries India Private Limited",
        avatar: RajkumarR,
        content:
            "I am Rajkumar R, MBA (1995-1997 batch) alumnus of Kongu Engineering College.The strong management foundation, practical learning, and dedicated faculty played a vital role in shaping my leadership skills and entrepreneurial journey.Today, as Co-Founder & Managing Director of Chennai Rice Industries India Private Limited, I credit my college for my professional success.",
    },
    {
        id: 3,
        name: "Shriram Jayachandran",
        role: "Accenture, Team Lead",
        avatar: "https://ui-avatars.com/api/?name=Shriram+Jayachandran&background=random",
        content:
            "Looking back, KEC was a turning point in my life. It didn't just educate me academically, but it also transformed me as an individual. The opportunities to speak, lead, ，decide, and collaborate helped me grow into a confident professional. I remain deeply grateful for the strong foundation this institution gave me.(2015 Batch)",
    },
    {
        id: 4,
        name: "Dhivya Priya K",
        role: "Senior Verification Engineer, Linde hydraulics GmbH, Germany",
        avatar: "https://ui-avatars.com/api/?name=Dhivya+Priya+K&background=random",
        content:
            "I'm a proud mechatronics engineer, 2013 batch. Kec made me understand my potential and gave enough support to develop my skills. I'm grateful for the opportunities that helped me mould my technical and leadership skills.",
    },
    {
        id: 5,
        name: "yuvaprakash Thulasimani",
        role: "Johnson & Johnson, Technical Product Owner",
        avatar: "https://ui-avatars.com/api/?name=yuvaprakash+Thulasimani&background=random",
        content:
            "Kongu Engineering College was truly a special place for me. The friendships I built, the inspiring professors, and the countless memories made during my time at KEC shaped whol am today. The hands-on learning and supportive environment gave me the confidence and skils to succeed in my career. I'm forever grateful to KEC for the unforgettable experiences and strong bonds that will last a lifetime.The campus life at KEC is vibrant and inclusive. From technical clubs to cultural fests, there are endless opportunities to explore my interests beyond academics.",
    },
    {
        id: 6,
        name: "Tamilselvan C",
        role: "Founder & CEO, Winfomi Technologies",
        avatar: "https://ui-avatars.com/api/?name=Tamilselvan+C&background=random",
        content:
            "I am Tamilselvan C, BE Mechatronics (2012-2016 batch) alumnus of Kongu Engineering College. The strong academic foundation, disciplined learning environment, and guidance from dedicated faculty members played a significant role in shaping my technical thinking, leadership mindset, and professional values. The emphasis on practical exposure, responsibility, and continuous improvement helped me build confidence early in my career. Today, as the Founder & CEO of Winfomi Technologies, I sincerely credit my college for laying the foundation for my professional journey and entrepreneurial mindset. I remain grateful to my institution for being an integral part of my success.",
    },
    {
        id: 7,
        name: "Mr. N. M. Manoshrinivas",
        role: "Software Developer, Zoho Corporation, Chennai",
        avatar: Manoshrinivas,
        content:
            " It was a privilege to be a part of Department of Automobile Engineering, which provided a strong academic foundation and continuous guidance from dedicated faculty members. The knowledge, discipline, and problem-solving skills gained during my academic journey have supported my 3.5 years of professional experience as a Software Developer at Zoho Corporation, enabling me to confidently address real-world engineering challenges.",
    },
    {
        id: 8,
        name: "Mr. M. R. Harish Kumar",
        role: "Vehicle Development Engineer, Mahindra & Mahindra – R&D Division",
        avatar: Harish,
        content:
            "I am proud to be an alumnus of Automobile Engineering Department, KEC, which provided me with a strong academic foundation and continuous guidance from dedicated faculty members. The values of discipline, critical thinking, and problem-solving that I developed during my college days played a significant role in shaping my professional journey. These learnings have supported in my professional 3.7 years of experience as a vehicle Development engineer at Mahindra & Mahindra - R&D Division, enabling me to confidently work on  vehicle attributes engineering challenges.",
    },
    {
        id: 9,
        name: "Kasthuri ganeshguru",
        role: "Cyber Security Architect, Cognizant, Chennai",
        avatar: kasthuri,
        content:
            "I am Kasthuri Ganeshguru, alumna of Kongu Engineering College, 5 Years Integrated M.Sc. Software Engineering (2007–2012 batch). The strong academic foundation, disciplined learning environment, and continuous guidance from the faculty played a significant role in shaping my mindset, confidence, and professional readiness. Today, as a Senior Cybersecurity Architect at Cognizant, I carry forward the values and lessons gained from my time at Kongu Engineering College and credit the institution for my personal and professional growth.",
    },
    {
        id: 10,
        name: "Manikandan Venkatachalam",
        role: "Enterprise Architectt, iDatalytics, USA",
        avatar: Manikandan,
        content:
            "I am Manikandan Venkatachalam, alumnus of Kongu Engineering College, M.Sc. Software Engineering (Integrated 5-Year Program), 2008–2013 batch. The strong academic foundation, innovative learning environment, and dedicated mentorship—particularly from the Department of M.Sc. Software Engineering—played a key role in transforming my passion for software into a global career. Currently based in the USA, I work as an Enterprise Architect – Cloud & AI at iDatalytics, where I lead multi-cloud transformations and architect AI-driven enterprise solutions across industries. The rigorous training at KEC not only strengthened my technical expertise but also instilled leadership, resilience, and a problem-solving mindset, and I proudly credit my alma mater for shaping the values and excellence that continue to guide my professional growth.",
    },
    {
        id: 11,
        name: "Venkat Dharmalingam",
        role: "Senior Associate Project Manager, Cognizant",
        avatar: venkat,
        content:
            "The Department of EIE, Kongu Engineering College gave me more than technical knowledge—it gave me confidence, clarity, and career direction. The strong fundamentals and mentorship I received here laid the foundation for my growth as a Senior Associate Project Manager at cognizant",
    },
    {
        id: 12,
        name: "Vignesh Saravanan",
        role: "Mobile Marketing Manager, Shriram Finance Limited",
        avatar: vignesh,
        content:
            "My time at the Department of EIE, Kongu Engineering College built the strategic thinking and data-driven mindset essential for today’s business world. The exposure and discipline I gained here continue to drive my impact as a Mobile Marketing Manager.",
    },
    {
        id: 13,
        name: "Dhanraj Rajendran",
        role: "Associate R&D Engineer, ABB Global Industries and Services Private Limited",
        avatar: dhanraj,
        content:
            "From classroom concepts to global innovation, my journey at the Department of EIE, Kongu Engineering College shaped who I am today. The guidance and hands-on learning here powered my path to becoming an Associate R&D Engineer at ABB Global Industries.",
    },
    {
        id: 14,
        name: "S. Aravindh",
        role: "Associate Full Stack Engineer, Rubrik, Bangalore",
        avatar: aravindh,
        content:
            "My time at KEC was one of the most defining phases of my life, shaping both my personal and professional growth. The IT department played a major role in this journey, offering a strong academic foundation along with exposure to emerging technologies. The department faculty were highly supportive and constantly encouraged us to explore, innovate, and improve our skills. I actively participated in culturals, hackathons, technical events, and placement activities, which helped me develop confidence, teamwork, and real-world problem-solving abilities. These experiences enhanced both my technical expertise and personality. The vibrant campus culture allowed me to balance academics with extracurricular growth while building lifelong friendships. The values, discipline, and skills I gained during my years at KEC, especially through the IT department, continue to guide me in my career and make me proud to be an alumnus.",
    },
    {
        id: 15,
        name: "Siva Paramasivam",
        role: "Sr. Product Engineer, XKIG, Virginia, USA",
        avatar: siva,
        content:
            "I am a proud 2015 graduate of the KEC, IT Department, and looking back, I am filled with gratitude for the incredible foundation it gave me. The department offered outstanding facilities, a supportive learning environment, and faculty members who treated every student like family. The friendships, the culture, and the overall atmosphere shaped not just our academic journey but who we became as individuals. The department has always been known for producing students with strong technical caliber and grounded values, and I’m happy to see that tradition continuing even today. A special thanks to SVG sir, whose personal connection with students and alumni remains unmatched. His guidance, warmth, and continued engagement with us long after graduation speak volumes about the heart of the department. It’s inspiring to see the IT Department still nurturing exceptional talent and helping students shine in their careers. I am truly grateful to have been a part of it.",
    },
    {
        id: 16,
        name: "Sahithya",
        role: "Software Engineer, HCL GUVI",
        avatar: sahithya,
        content:
            "I am Sahithya from the 2020-2024 B.E. Computer Science and Engineering batch of Kongu Engineering College. My journey at CSE-KEC was shaped by strong technical learning, hands-on projects, and active leadership across academic, service, and cultural platforms, which strengthened my problem-solving, communication, and decision-making skills. These experiences built a solid foundation for my growth as a Software Engineer. I am grateful to my professors, advisors, and HODs for their continuous guidance, and being recognized as the Best Outgoing Student of the CSE Department (2020-2024) stands as a proud reflection of the empowering ecosystem at KEC.",
    },
    {
        id: 17,
        name: "S. Alex Raj",
        role: "Lead Developer Engineer, COMCAST",
        avatar: alex,
        content:
            "My journey at Kongu Engineering College within the Computer Science and Engineering department was a period of immense growth. The department's comprehensive syllabus provided me with a deep, fundamental knowledge of the CSE domain, which has been instrumental in my career progression. Additionally, the structured placement preparation was a key factor in building my confidence and technical expertise, enabling me to successfully crack multiple interviews. Currently, I am specializing in the Cyber Security domain at Comcast India Engineering Centre, and I owe much of my professional success to the strong foundation laid at KEC.",
    },
    {
        id: 18,
        name: "V. Muruganandam",
        role: "General Manager, Airports Authority of India, Chennai",
        avatar: muruganandam,
        content:
            "Kongu Engineering College is my esteemed institution, for the invaluable pedagogical foundation that shaped my career. Today as a valued aviation professional, I remain deeply grateful to KEC for the strong engineering base it provided. I look forward to giving back to my alma mater and contributing to its growth in the future.",
    },
    {
        id: 19,
        name: "Suhaag Kumar",
        role: "CEO Mokshaa Group of Companies, Seattle, WA USA",
        avatar: suhaag,
        content:
            "Kongu Engineering College is a foundation for excellence, leadership, and lifelong success. My years at KEC, especially in the Department of Electronics and Communication Engineering, shaped my thinking, discipline, and global outlook. The culture of hard work, integrity, and continuous learning at Kongu continues to influence every decision I make as a leader. I carry the spirit of Kongu with pride wherever I go. My journey from KEC to global organizations and entrepreneurship stands as a testament to the strong foundation this institution provides to its students.",
    },
    {
        id: 20,
        name: "Daniel Jacob",
        role: "Senior Vice President, EC-Group DataSoft Pvt Ltd, Chennai",
        avatar: daniel,
        content:
            "My time at Kongu Engineering College in the Computer Technology (UG) Department was truly transformative. Coming from a government school, vernacular background, I initially struggled with fear and self-doubt. The constant encouragement and belief in me from my professors gave me the confidence to succeed. The excellent infrastructure and exposure through events and activities played a crucial role in shaping my learning journey and the person I am today. I remain deeply grateful to Kongu.",
    },
    {
        id: 21,
        name: "Menaka",
        role: "Cloud and DevOps Engineer, Presidio",
        avatar: menaka,
        content:
            "The supportive faculty and well-equipped labs gave me the flexibility to explore, learn and adapt to new technologies. Collaborative projects helped me grow as a team player and develop leadership skills. Being actively involved in department activities and receiving continuous guidance for placements played a key role in shaping my career. The exposure to real-time problem solving boosted my confidence to take on challenges. I am grateful for the strong foundation that continues to drive my professional growth.",
    },
    {
        id: 22,
        name: "Nagarajan Raju",
        role: "Principal Technical Program Manager, Senior Manager, Amazon.com, Seattle, USA",
        avatar: nagarajan,
        content:
            "Kongu Engineering College played a critical role in shaping my career by giving me strong fundamentals, discipline, and a supportive learning environment. I started my career through campus placement. Serving as Department Secretary (CSE & MCA) and being a founding member of ORION, our first PG inter-college event, strengthened my leadership and teamwork. I’m grateful for the opportunities and proud to be associated with my department.",
    },
    {
        id: 23,
        name: "Kalaiyarasi Ramachandran",
        role: "Founder - Raatai handloom, Kavindapadi, India",
        avatar: kalaiyarasi,
        content:
            "As an alumna of the MCA Department, Kongu Engineering College, I received strong guidance and encouragement to explore ideas and think independently. The support from the department played an important role in shaping my path.",
    },
];


const TestimonialCard = ({ testimonial, onReadMore }) => {
    // Attempt to split the role to style the company/location differently
    const roleParts = testimonial.role.split(',');
    const primaryRole = roleParts[0];
    const secondaryRole = roleParts.slice(1).join(',').trim();

    return (
        <div className="testimonial-card">
            <div className="card-top-gradient"></div>
            <div className="card-inner">
                <div className="quote-box">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="quote-svg">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                </div>

                <p className="testimonial-text">
                    "{testimonial.content}"
                </p>
                <button
                    className="read-more-btn"
                    onClick={() => onReadMore(testimonial)}
                >
                    Read More
                </button>

                <div className="testimonial-author">
                    <div className="avatar-container">
                        <div className="avatar-wrapper">
                            <img src={testimonial.avatar} alt={testimonial.name} loading="lazy" />
                        </div>
                        <div className="verified-badge">
                            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.2l-3.5-3.5 1.4-1.4L9 13.4l7.1-7.1 1.4 1.4z" /></svg>
                        </div>
                    </div>
                    <div className="author-info">
                        <h4>{testimonial.name}</h4>
                        <span className="primary-role">{primaryRole}</span>
                        {secondaryRole && <span className="secondary-role">{secondaryRole}</span>}
                    </div>
                </div>

                <div className="testimonial-bottom-bar">
                    <div className="stars">
                        ★★★★★
                    </div>
                    {/* <div className="dots">
                        <span className="dot dot-1"></span>
                        <span className="dot dot-2"></span>
                        <span className="dot dot-3"></span>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

const Testimonials = () => {
    const scrollRef = React.useRef(null);
    const [isPaused, setIsPaused] = React.useState(false);
    const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);

    // Popup Modal State
    const [activeModal, setActiveModal] = React.useState(null);

    const [manualPause, setManualPause] = React.useState(false);
    const timeoutRef = React.useRef(null);

    // Detect mobile screen size
    React.useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleManualInteraction = () => {
        setManualPause(true);
        if (timeoutRef.current) clearTimeout(timeoutRef.current);

        timeoutRef.current = setTimeout(() => {
            setManualPause(false);
        }, 3000); // Resume auto-scroll after 3 seconds of inactivity
    };

    // Duplicate data for infinite loop effect (3 sets for smoother bidirectional scroll)
    const extendedTestimonials = [...testimonialsData, ...testimonialsData, ...testimonialsData];

    const handleScroll = () => {
        if (scrollRef.current) {
            const container = scrollRef.current;
            const scrollWidth = container.scrollWidth;
            const oneSetWidth = scrollWidth / 3;

            // Infinite scroll reset
            if (container.scrollLeft >= 2 * oneSetWidth) {
                container.scrollLeft -= oneSetWidth;
            } else if (container.scrollLeft <= 0) {
                container.scrollLeft = oneSetWidth;
            }
        }
    };

    const scrollLeft = () => {
        handleManualInteraction();
        if (scrollRef.current) {
            const container = scrollRef.current;
            const cardWidth = container.children[0]?.offsetWidth || 350;
            const gap = 40;
            const oneSetWidth = container.scrollWidth / 3;

            // Pre-warp if near start
            if (container.scrollLeft <= gap) {
                container.scrollLeft += oneSetWidth;
            }

            container.scrollBy({ left: -(cardWidth + gap), behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        handleManualInteraction();
        if (scrollRef.current) {
            const container = scrollRef.current;
            const cardWidth = container.children[0]?.offsetWidth || 350;
            const gap = 40;
            const oneSetWidth = container.scrollWidth / 3;

            // Pre-warp if near end (of the second set)
            if (container.scrollLeft >= 2 * oneSetWidth - cardWidth) {
                container.scrollLeft -= oneSetWidth;
            }

            container.scrollBy({ left: cardWidth + gap, behavior: "smooth" });
        }
    };

    // Auto-scroll effect (Continuous — desktop only)
    React.useEffect(() => {
        if (isMobile || isPaused || manualPause || activeModal) return;

        const scrollContainer = scrollRef.current;
        let animationFrameId;

        const scrollStep = () => {
            if (scrollContainer) {
                scrollContainer.scrollLeft += 1;
                animationFrameId = requestAnimationFrame(scrollStep);
            }
        };

        animationFrameId = requestAnimationFrame(scrollStep);

        return () => cancelAnimationFrame(animationFrameId);
    }, [isMobile, isPaused, manualPause, activeModal]);

    // Initialize scroll position to the middle set
    React.useEffect(() => {
        if (scrollRef.current) {
            const scrollWidth = scrollRef.current.scrollWidth;
            const oneSetWidth = scrollWidth / 3;
            scrollRef.current.scrollLeft = oneSetWidth; // Start at Set 2
        }
    }, []);

    return (
        <section className="testimonials-section">
            <span className="pill">Testimonials</span>
            <h2>Voices of KEC</h2>

            <div
                className="testimonials-carousel-wrapper"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                <button className="carousel-btn left-btn" onClick={scrollLeft}>
                    &#8249;
                </button>

                <div
                    className="testimonials-container"
                    ref={scrollRef}
                    onScroll={handleScroll}
                >
                    {extendedTestimonials.map((testimonial, index) => (
                        <TestimonialCard
                            key={`${testimonial.id}-${index}`}
                            testimonial={testimonial}
                            onReadMore={setActiveModal}
                        />
                    ))}
                </div>

                <button className="carousel-btn right-btn" onClick={scrollRight}>
                    &#8250;
                </button>
            </div>

            {/* Testimonial Popup Modal */}
            {activeModal && (
                <div className="testi-modal-overlay" onClick={() => setActiveModal(null)}>
                    <div className="testi-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="testi-modal-close" onClick={() => setActiveModal(null)}>
                            &times;
                        </button>
                        <div className="testi-modal-header">
                            <div className="avatar-wrapper">
                                <img src={activeModal.avatar} alt={activeModal.name} loading="lazy" />
                            </div>
                            <div className="author-info">
                                <h4>{activeModal.name}</h4>
                                <span className="primary-role">{activeModal.role.split(',')[0]}</span>
                                {activeModal.role.split(',').slice(1).length > 0 && (
                                    <span className="secondary-role">{activeModal.role.split(',').slice(1).join(',').trim()}</span>
                                )}
                            </div>
                        </div>
                        <div className="testi-modal-body">
                            <svg viewBox="0 0 24 24" fill="rgba(14, 165, 233, 0.15)" className="modal-quote-bg">
                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                            </svg>
                            <p>"{activeModal.content}"</p>
                        </div>
                        <div className="testi-modal-footer">
                            <div className="stars">★★★★★</div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Testimonials;
