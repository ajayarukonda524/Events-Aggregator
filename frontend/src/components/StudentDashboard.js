// StudentDashboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StudentDashboard = () => {
  const [student, setStudent] = useState(null);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    
    if (token) {
      // Fetch student profile details
      axios.get('/api/student/profile', {
        headers: { Authorization: `Bearer ${token}` }
      })
        .then(response => setStudent(response.data))
        .catch(err => console.error('Error fetching student profile', err));
  
      // Fetch student events
      axios.get('/api/student/events', {
        headers: { Authorization: `Bearer ${token}` }
      })
        .then(response => setEvents(response.data))
        .catch(err => console.error('Error fetching student events', err));
    } else {
      console.error('Token is missing');
    }
  }, []);

  const handleDeleteEvent = (eventId) => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      alert('You need to be logged in to delete events.');
      return;
    }

    axios.delete(`/api/student/events/${eventId}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(response => {
        setEvents(events.filter(event => event._id !== eventId));
        alert('Event deleted successfully');
      })
      .catch(err => {
        console.error('Error deleting event', err);
        alert('Error deleting event');
      });
  };
  

  if (!student) return <div className='loading'>Loading profile...</div>;
  
  return (
    <div className='dashboard-container'>
      <h2>{student.firstName} {student.lastName}'s Dashboard</h2>
      <div className='profile-details'>
        <h3>Profile Details</h3>
        <p>Email: {student.email}</p>
        <p>Username: {student.username}</p>
      </div>

      <div className='registered-events'>
        <h3>Registered Events</h3>
        {events.length === 0 ? (
          <p>No events registered yet.</p>
        ) : (
          <ul>
            {events.map(event => (
              <li key={event._id}>
                {event.eventName} - {event.date} at {event.time}
                <button onClick={() => handleDeleteEvent(event._id)}>Delete</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default StudentDashboard;
