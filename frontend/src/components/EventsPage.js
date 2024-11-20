import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // For redirection
import '../styles/eventsPage.css';

const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]); // For filtered events
  const [error, setError] = useState(null); // For error handling
  const [loading, setLoading] = useState(true); // Loading state
  const [searchQuery, setSearchQuery] = useState(''); // For search input
  const [filterLocation, setFilterLocation] = useState(''); // For location filter
 // const [eventCategory, setEventCategory] = useState('');
  const [filterCategory, setFilterCategory] = useState(''); // For category filter
  const navigate = useNavigate(); // To redirect to login if not authenticated

  // Event categories (adjust this as per your requirements)
  const eventCategories = ['Hackathon', 'Sports Meet', 'Workshop', 'Seminar', 'Technical Fest'];

  useEffect(() => {
    const fetchEvents = async () => {
      const token = localStorage.getItem('authToken');
      if (!token) {
        navigate('/login'); // Redirect to login if the user is not logged in
        return;
      }

      try {
        const response = await axios.get('/api/events/all', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log('API Response:', response.data);
        setEvents(response.data); // Set events data
        setFilteredEvents(response.data); // Initialize filtered events
      } catch (err) {
        setError('Failed to fetch events.');
        console.error('Error fetching events:', err);
      } finally {
        setLoading(false); // Set loading to false once the fetch is complete
      }
    };

    fetchEvents();
  }, [navigate]);

  // Filter logic
  useEffect(() => {
    const filtered = events.filter((event) => {
      const eventNameMatches =
        event.eventName && event.eventName.toLowerCase().includes(searchQuery.toLowerCase());
      const locationMatches =
        event.location && event.location.toLowerCase().includes(filterLocation.toLowerCase());
      const categoryMatches =
        event.eventCategory && event.eventCategory.toLowerCase().includes(filterCategory.toLowerCase());
  
      return (
        (eventNameMatches || !searchQuery) &&
        (locationMatches || !filterLocation) &&
        (categoryMatches || !filterCategory)
      );
    });
    setFilteredEvents(filtered);
  }, [searchQuery, filterLocation, filterCategory, events]);
  
  // Helper function to format the date
  const formatDate = (date) => {
    const d = new Date(date);
    return `${d.toLocaleDateString()} at ${d.toLocaleTimeString()}`;
  };

  return (
    <div>
      <h2>Explore Events</h2>

      {/* Error Message */}
      {error && <div className="error-message">{error}</div>}

      {/* Loading Indicator */}
      {loading && <div className="loading-message">Loading events...</div>}

      {/* Search and Filter Section */}
      <div className="filter-container">
        <input
          type="text"
          placeholder="Search by event name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
        <input
          type="text"
          placeholder="Filter by location"
          value={filterLocation}
          onChange={(e) => setFilterLocation(e.target.value)}
          className="location-input"
        />
        {/* Event Category Dropdown */}
        <select
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
          className="category-select"
        >
          <option value="">All Categories</option>
          {eventCategories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Event List */}
      <div className="events-container">
        {filteredEvents.length === 0 ? (
          <p>No events available for the selected criteria.</p>
        ) : (
          <ul>
            {filteredEvents.map((event) => (
              <li key={event._id} className="event-item">
                <h3>{event.eventName}</h3>
                <p>{event.description}</p>
                <p>
                  <strong>Date:</strong> {formatDate(event.date)} {/* Format the date */}
                </p>
                <p>
                  <strong>Time:</strong> {event.time}
                </p>
                <p>
                  <strong>Location:</strong> {event.location}
                </p>
                <p>
                  <strong>Category:</strong> {event.eventCategory} {/* Display the event category */}
                </p>
                {event.eventImage && <img src={event.eventImage} alt={event.eventName} />}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default EventsPage;
