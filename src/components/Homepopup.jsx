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

  // Helper to parse date strings that might be ranges like "February 19-26, 2026"
  const parseEventDate = (dateStr) => {
    // If it resembles a range with a hyphen before the comma/year
    // e.g. "February 19-26, 2026"
    if (dateStr.includes('-')) {
      const parts = dateStr.split(','); // ["February 19-26", " 2026"]
      if (parts.length === 2) {
        const monthDayRange = parts[0].trim(); // "February 19-26"
        const year = parts[1].trim(); // "2026"
        const monthDay = monthDayRange.split('-')[0].trim(); // "February 19"
        return new Date(`${monthDay}, ${year}`);
      }
    }
    return new Date(dateStr);
  };

  const upcomingEvents = eventsData.filter(event => {
    const eventDate = parseEventDate(event.date);
    return eventDate >= currentDate;
  }).sort((a, b) => parseEventDate(a.date) - parseEventDate(b.date));

  // Find the first upcoming event that HAS a popupImage
  const currentEvent = upcomingEvents.find(event => event.popupImage);

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
