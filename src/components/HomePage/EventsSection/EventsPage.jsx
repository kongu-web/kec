import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Footer from '../Footer/Footer';
import eventsData from './eventsData';
import './EventsPage.css';

const EventsPage = () => {
    const navigate = useNavigate();
    const [filter, setFilter] = useState('all'); // all, upcoming, completed

    // Filter logic
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);

    const filteredEvents = eventsData.filter(event => {
        const eventDate = new Date(event.date);
        if (filter === 'upcoming') return eventDate >= currentDate;
        if (filter === 'completed') return eventDate < currentDate;
        return true;
    });

    // Sort events: Upcoming (nearest first), Completed (newest first for recent context)
    const sortedEvents = [...filteredEvents].sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return filter === 'completed' ? dateB - dateA : dateA - dateB;
    });

    return (
        <>
            <Navbar />
            <div className="events-page">
                {/* Header Section */}
                <div className="events-page-header">
                    <h1 className='page-title'>College Events</h1>
                </div>

                {/* Filter Tabs */}
                <div className="events-filter-container">
                    <button
                        className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                        onClick={() => setFilter('all')}
                    >
                        All Events
                    </button>
                    <button
                        className={`filter-btn ${filter === 'upcoming' ? 'active' : ''}`}
                        onClick={() => setFilter('upcoming')}
                    >
                        Upcoming
                    </button>
                    <button
                        className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
                        onClick={() => setFilter('completed')}
                    >
                        Completed
                    </button>
                </div>

                {/* Events Grid */}
                <div className="all-events-container">
                    {sortedEvents.length > 0 ? (
                        sortedEvents.map((event) => (
                            <div
                                key={event.id}
                                className="event-grid-card"
                                onClick={() => navigate(`/event/${event.id}`)}
                            >
                                <div className="grid-card-image">
                                    <img src={event.image} alt={event.title} />
                                    <div className="grid-date-badge">
                                        {event.date}
                                    </div>
                                </div>
                                <div className="grid-card-content">
                                    <h3>{event.title}</h3>
                                    <p className="grid-location">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                                        </svg>
                                        {event.location || "Location TBD"}
                                    </p>
                                    <div className="read-more">Read More &rarr;</div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="no-events-found">
                            <h3>No events found matching your criteria.</h3>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default EventsPage;
