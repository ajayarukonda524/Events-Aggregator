import React from 'react';
import '../styles/EventDetails.css'; // Ensure you have appropriate styling

const EventDetails = ({ event }) => {
  return (
    <div className="event-details">
      <img src={event.image} alt={event.title} className="event-image" />
      <h2>{event.title}</h2>
      <p><strong>Date:</strong> {event.date}</p>
      <p><strong>Time:</strong> {event.time}</p>
      <p><strong>Location:</strong> {event.location}</p>
      <p><strong>Organizers:</strong> {event.organizers}</p>
      <p><strong>Description:</strong> {event.description}</p>
      <a href={event.registrationLink} target="_blank" rel="noopener noreferrer" className="register-button">Register Now</a>
    </div>
  );
};

export default EventDetails;
