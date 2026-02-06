import React from "react";
import "./Testimonials.css";
import RajkumarR from "../../../assets/images/Testimonials/RajkumarR.png";

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

    const scrollLeft = () => {
        handleManualInteraction();
        if (scrollRef.current) {
            const container = scrollRef.current;
            const scrollWidth = container.scrollWidth;
            const oneSetWidth = scrollWidth / 2;
            const cardWidth = container.children[0]?.offsetWidth || 350;
            const gap = 40;

            if (container.scrollLeft <= 10) {
                container.scrollLeft += oneSetWidth;
            }
            container.scrollBy({ left: -(cardWidth + gap), behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        handleManualInteraction();
        if (scrollRef.current) {
            const cardWidth = scrollRef.current.children[0]?.offsetWidth || 350;
            const gap = 40;
            scrollRef.current.scrollBy({ left: cardWidth + gap, behavior: "smooth" });
        }
    };

    // Duplicate data for infinite loop effect
    const extendedTestimonials = [...testimonialsData, ...testimonialsData];

    // Auto-scroll effect (Continuous)
    React.useEffect(() => {
        if (isPaused || manualPause) return;

        const scrollContainer = scrollRef.current;
        let animationFrameId;

        const scrollStep = () => {
            if (scrollContainer) {
                const scrollWidth = scrollContainer.scrollWidth;
                const oneSetWidth = scrollWidth / 2;

                // Move 1px
                scrollContainer.scrollLeft += 1;

                // Reset if reached part 2
                if (scrollContainer.scrollLeft >= oneSetWidth) {
                    scrollContainer.scrollLeft -= oneSetWidth;
                }

                animationFrameId = requestAnimationFrame(scrollStep);
            }
        };

        animationFrameId = requestAnimationFrame(scrollStep);

        return () => cancelAnimationFrame(animationFrameId);
    }, [isPaused, manualPause]);

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

                <div className="testimonials-container" ref={scrollRef}>
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
