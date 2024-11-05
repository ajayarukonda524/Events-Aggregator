import React from 'react';
import '../styles/UserDashboard.css';

const UserDashboard = ({ user }) => {
  // Sample registered events data
  const registeredEvents = [
    {
      id: 1,
      title: 'Tech Hackathon 2024',
      date: '2024-10-15',
      description: 'Join us for a 48-hour hackathon to showcase your skills!',
    },
    {
      id: 2,
      title: 'Cultural Fest 2024',
      date: '2024-11-20',
      description: 'Experience diverse cultures through performances and workshops.',
    },
    // More events can be added here
  ];

  return (
    <div className="user-dashboard">
      <h2>Welcome, {user.name}</h2>
      <h3>Your Registered Events</h3>
      {registeredEvents.length > 0 ? (
        <div className="event-list">
          {registeredEvents.map(event => (
            <div key={event.id} className="event-card">
              <h4>{event.title}</h4>
              <p><strong>Date:</strong> {event.date}</p>
              <p>{event.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>You have not registered for any events yet.</p>
      )}
    </div>
  );
};

export default UserDashboard;
