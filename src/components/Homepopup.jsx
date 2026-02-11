import './Homepopup.css';
import React, { useState, useEffect } from 'react';
import eventsData from './HomePage/EventsSection/eventsData';

const Homepopup = () => {
  const [showEventPopup, setShowEventPopup] = useState(false);

  useEffect(() => {
    // Show popup on mount only if not already shown in this session
    const hasShownPopup = sessionStorage.getItem('popupShown');
    if (!hasShownPopup) {
      setShowEventPopup(true);
      sessionStorage.setItem('popupShown', 'true');
    }
  }, []);

  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);

  const upcomingEvents = eventsData.filter(event => {
    const eventDate = new Date(event.date);
    return eventDate >= currentDate;
  });

  const currentEvent = upcomingEvents[0]; // Display the first upcoming event

  if (!currentEvent || !currentEvent.popupImage) return null;

  return (
    <>
      {showEventPopup && (
        <div className="popup-overlay">
          <div className="event-popup-container">
            <div className="popup-content">
              <button
                className="popup-close-btn"
                onClick={() => setShowEventPopup(false)}
              >
                ×
              </button>
              <img
                src={currentEvent.popupImage}
                alt={currentEvent.title}
                className="event-popup-img"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Homepopup;
