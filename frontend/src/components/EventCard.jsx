import React from 'react';
import '../styles/EventCard.css'; // Adjust if styles is outside components

const EventCard = ({ title, date, image, description }) => {
  return (
    <div className="event-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{date}</p>
      <p>{description}</p>
    </div>
  );
};

export default EventCard;
