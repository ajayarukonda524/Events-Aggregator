//culturalevents.js
import React from 'react';
import '../styles/CulturalEvent.css'; // Import your styles for cultural events

const CulturalEvent = () => {
  // Example data for cultural events
  const culturalEvents = [
    {
      id: 1,
      title: 'Classical Dance Competition 2024',
      description: 'A competition where dancers from all over the region showcase their classical dance skills. Winners will receive amazing prizes!',
      date: '2024-10-20',
      time: '10:00 AM - 4:00 PM',
      location: 'Cultural Hall, City Center',
      image: require('../images/culturalfest.jpg'), // Replace with actual image path
      registrationLink: 'https://www.dance-competition-registration.com',
    },
    {
      id: 2,
      title: 'Drama Festival 2024',
      description: 'Watch short plays from talented actors and directors. Enjoy the creativity and innovation of the participants.',
      date: '2024-11-05',
      time: '5:00 PM - 9:00 PM',
      location: 'Theatre Stage, Cultural Complex',
      image: require('../images/culturalfest.jpg'), // Replace with actual image path
      registrationLink: 'https://www.drama-festival.com',
    },
    {
      id: 3,
      title: 'Music Concert 2024',
      description: 'Enjoy live performances by local and international artists. A night filled with soulful music.',
      date: '2024-11-15',
      time: '6:00 PM - 10:00 PM',
      location: 'Music Arena, Central Park',
      image: require('../images/culturalfest.jpg'), // Replace with actual image path
      registrationLink: 'https://www.music-concert.com',
    },
    {
      id: 4,
      title: 'Art Exhibition 2024',
      description: 'A gallery showcasing the best art pieces by artists from various backgrounds and mediums.',
      date: '2024-12-05',
      time: '9:00 AM - 7:00 PM',
      location: 'Art Gallery, Downtown',
      image: require('../images/culturalfest.jpg'), // Replace with actual image path
      registrationLink: 'https://www.art-exhibition.com',
    },
  ];

  return (
    <div className="cultural-event">
      <h2>Cultural Events</h2>
      <div className="cultural-event-list">
        {culturalEvents.map((event) => (
          <div key={event.id} className="cultural-event-card">
            <img src={event.image} alt={event.title} className="cultural-event-image" />
            <div className="cultural-event-info">
              <h3>{event.title}</h3>
              <p><strong>Date:</strong> {event.date}</p>
              <p><strong>Time:</strong> {event.time}</p>
              <p><strong>Location:</strong> {event.location}</p>
              <p>{event.description}</p>
              <a
                href={event.registrationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="register-button"
              >
                Register Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CulturalEvent;
