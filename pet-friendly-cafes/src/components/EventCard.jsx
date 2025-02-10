import React from "react";
import './EventCard.css';

const EventCard = ({ event }) => {
  return (
    <div className="event-card">
      <h3>{event.name}</h3>
      <img src={event.image} alt={event.name} className="event-image" />
      <p>{event.description}</p>
      <p>{event.date}</p>
      <p>{event.location}</p>
      <button>RSVP</button>
    </div>
  );
}

export default EventCard;