import React, { useRef } from "react";
import { useNavigate } from 'react-router-dom';
import "./EventsSection.css";
import eventsData from "./eventsData";

const EventsSection = () => {
    const navigate = useNavigate();
    const scrollRef = useRef(null);
    const [isPaused, setIsPaused] = React.useState(false);
    const [manualPause, setManualPause] = React.useState(false);
    const timeoutRef = useRef(null);

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
            const gap = 30;

            if (container.scrollLeft <= 10) {
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
            const gap = 30;
            container.scrollBy({ left: cardWidth + gap, behavior: "smooth" });
        }
    };

    const handleScroll = () => {
        if (scrollRef.current) {
            const container = scrollRef.current;
            const scrollWidth = container.scrollWidth;
            const oneSetWidth = scrollWidth / 2;

            // Forward infinite scroll reset
            if (container.scrollLeft >= oneSetWidth) {
                container.scrollLeft -= oneSetWidth;
            }
        }
    };

    // Flter for upcoming and completed events
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);

    // Helper to parse date strings that might be ranges like "February 19-26, 2026"
    const parseEventDate = (dateStr) => {
        if (dateStr.includes('-')) {
            const parts = dateStr.split(',');
            if (parts.length === 2) {
                const monthDayRange = parts[0].trim();
                const year = parts[1].trim();
                const monthDay = monthDayRange.split('-')[0].trim();
                return new Date(`${monthDay}, ${year}`);
            }
        }
        return new Date(dateStr);
    };

    const upcomingEvents = eventsData.filter(event => {
        const eventDate = parseEventDate(event.date);
        return eventDate >= currentDate;
    });

    const completedEvents = eventsData.filter(event => {
        const eventDate = parseEventDate(event.date);
        return eventDate < currentDate;
    });

    const hasUpcoming = upcomingEvents.length > 0;
    const displayEvents = hasUpcoming ? upcomingEvents : completedEvents;
    const title = hasUpcoming ? "Upcoming" : "Completed";

    // Determine if we should duplicate and loop (only if more than 3 events)
    const shouldLoop = displayEvents.length > 3;

    // Duplicate data for continuous scrolling only if looping is enabled
    const extendedEvents = shouldLoop ? [...displayEvents, ...displayEvents] : displayEvents;

    // Auto-scroll effect (Continuous)
    React.useEffect(() => {
        if (!shouldLoop || isPaused || manualPause || displayEvents.length === 0) return;

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
    }, [isPaused, manualPause, displayEvents.length, shouldLoop]);

    if (displayEvents.length === 0) return null;

    return (
        <section className="events-section">
            <div className="events-header">
                <h2>{title} <span>Events</span></h2>
                <div className="header-decoration">
                    <span className="dot"></span>
                    <span className="line"></span>
                    <span className="dot"></span>
                </div>
            </div>

            <div
                className="events-carousel-wrapper"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                {shouldLoop && (
                    <button className="event-nav-btn prev-btn" onClick={scrollLeft}>&#8249;</button>
                )}

                <div
                    className="events-container"
                    ref={scrollRef}
                    onScroll={shouldLoop ? handleScroll : undefined}
                    style={{ justifyContent: shouldLoop ? 'flex-start' : 'center' }}
                >
                    {extendedEvents.map((event, index) => (
                        <div
                            key={`${event.id}-${index}`}
                            className="event-card-new"
                            onClick={() => navigate(`/event/${event.id}`)}
                            style={{ cursor: 'pointer' }}
                        >
                            <div className="card-image-wrapper">
                                <img src={event.image} alt={event.title} />
                                <div className="event-date-overlay">
                                    {event.date}
                                </div>
                            </div>
                            <div className="card-content-new">
                                <h3>{event.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>

                {shouldLoop && (
                    <button className="event-nav-btn next-btn" onClick={scrollRight}>&#8250;</button>
                )}
            </div>

            <div className="events-footer">
                <a href="/events" className="know-more-btn-new">
                    View All Events <span className="arrow-icon">&rarr;</span>
                </a>
            </div>
        </section>
    );
};

export default EventsSection;
