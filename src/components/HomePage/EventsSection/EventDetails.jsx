import React from 'react';
import { useParams, Link } from 'react-router-dom';
import eventsData from './eventsData';
import './EventDetails.css';

import Navbar from '../navbar/Navbar';
import Footer from '../Footer/Footer';

const EventDetails = () => {
    const { id } = useParams();
    const event = eventsData.find(e => e.id === parseInt(id));

    if (!event) {
        return (
            <>
                <Navbar />
                <div className="event-not-found">
                    <h2>Event not found</h2>
                    <Link to="/" className="back-btn">Back to Home</Link>
                </div>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Navbar />
            <div className="event-details-page">
                <div className="event-details-container">
                    <Link to="/" className="back-link">&larr; Back to Home</Link>

                    <div className="event-hero">
                        <img src={event.image} alt={event.title} className="event-hero-img" />
                        <div className="event-hero-overlay">
                            <h1>{event.title}</h1>
                            <span className="event-date-badge">{event.date}</span>
                        </div>
                    </div>

                    <div className="event-content">
                        <div className="event-info-grid">
                            <div className="info-item">
                                <span className="info-label">Time</span>
                                <span className="info-value">{event.time || "Time not specified"}</span>
                            </div>
                            <div className="info-item">
                                <span className="info-label">Location</span>
                                <span className="info-value">{event.location || "Venue not specified"}</span>
                            </div>
                        </div>

                        <div className="event-description">
                            <h3>About the Event</h3>
                            <p>{event.description || "No description available for this event."}</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default EventDetails;
