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
        name: "S.Aravindh",
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
];


const TestimonialCard = ({ testimonial }) => {
    const [isExpanded, setIsExpanded] = React.useState(false);

    return (
        <div className={`testimonial-card ${isExpanded ? "expanded" : ""}`}>
            <div className="quote-icon">❝</div>
            <p className="testimonial-text">
                {testimonial.content}
            </p>
            <button
                className="read-more-btn"
                onClick={() => setIsExpanded(!isExpanded)}
            >
                {isExpanded ? "Read Less" : "Read More"}
            </button>
            <div className="testimonial-author">
                <div className="avatar-container">
                    <img src={testimonial.avatar} alt={testimonial.name} />
                </div>
                <div className="author-info">
                    <h4>{testimonial.name}</h4>
                    <span>{testimonial.role}</span>
                </div>
            </div>
        </div>
    );
};

const Testimonials = () => {
    const scrollRef = React.useRef(null);
    const [isPaused, setIsPaused] = React.useState(false);

    const [manualPause, setManualPause] = React.useState(false);
    const timeoutRef = React.useRef(null);

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

    // Auto-scroll effect (Continuous)
    React.useEffect(() => {
        if (isPaused || manualPause) return;

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
    }, [isPaused, manualPause]);

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
            <span className="pill">Voices of KEC</span>
            <h2>What Our Community Says</h2>

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
                        <TestimonialCard key={`${testimonial.id}-${index}`} testimonial={testimonial} />
                    ))}
                </div>

                <button className="carousel-btn right-btn" onClick={scrollRight}>
                    &#8250;
                </button>
            </div>
        </section>
    );
};

export default Testimonials;
