//eventpage.js
import React, { useState } from 'react';
import Header from '../components/Header'; // Import the Header component
import EventCard from '../components/EventCard'; // Import EventCard component to display each event
import '../styles/EventPage.css'; // Custom styles for the Event Page

const EventPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Event data - multiple events
  const events = [
    {
      id: 1,
      title: 'Tech Hackathon 2024',
      date: '2024-10-15',
      time: '9:00 AM - 6:00 PM',
      location: 'Tech Campus, Main Auditorium',
      organizers: 'Tech Club, Hackathon Team',
      description: 'Join us for a 48-hour hackathon where you can showcase your skills and win exciting prizes!',
      image: require('../images/hackthon.jpg'),
      registrationLink: 'https://www.hackathon-registration.com',
    },
    {
      id: 2,
      title: 'Cultural Fest 2024',
      date: '2024-11-20',
      time: '10:00 AM - 5:00 PM',
      location: 'Cultural Center, Main Stage',
      organizers: 'Cultural Club, Fest Committee',
      description: 'Experience the diverse cultures at our annual cultural fest with performances, food, and workshops.',
      image: require('../images/culturalfest.jpg'),
      registrationLink: 'https://www.culturalfest-registration.com',
    },
    {
      id: 3,
      title: 'Robotics AI Workshop',
      date: '2024-12-05',
      time: '9:00 AM - 12:00 PM',
      location: 'Engineering Block, Room 101',
      organizers: 'AI & Robotics Club',
      description: 'Join us for a workshop on Artificial Intelligence and learn how to build AI models.',
      image: require('../images/robotics.jpeg'),
      registrationLink: 'https://www.robotics-workshop.com',
    },
    {
      id: 4,
      title: 'Startup Expo 2024',
      date: '2024-12-15',
      time: '10:00 AM - 6:00 PM',
      location: 'Innovation Hall, Tech Campus',
      organizers: 'Startup Club, Incubation Center',
      description: 'Participate in the most exciting startup expo with networking, workshops, and startup pitches.',
      image: require('../images/startup.jpg'),
      registrationLink: 'https://www.startup-expo.com',
    },
    {
      id: 5,
      title: 'Health Campaign 2024',
      date: '2024-12-22',
      time: '9:00 AM - 3:00 PM',
      location: 'Wellness Center, Community Hall',
      organizers: 'Health Club, NGO Partners',
      description: 'Join us for a health campaign offering free consultations, workshops, and fitness classes.',
      image: require('../images/Health.jpg'),
      registrationLink: 'https://www.health-campaign.com',
    },
    {
      id: 6,
      title: 'Digital Marketing Seminar',
      date: '2024-12-30',
      time: '10:00 AM - 4:00 PM',
      location: 'Conference Room, Business School',
      organizers: 'Marketing Club, Business School',
      description: 'Learn about the future of digital marketing and how to build successful marketing strategies.',
      image: require('../images/digitalmarketing.jpeg'),
      registrationLink: 'https://www.digital-marketing-seminar.com',
    },
  ];

  // Filter events based on the search term
  const filteredEvents = events.filter((event) => {
    return event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="event-page">
      <Header setSearchTerm={setSearchTerm} /> {/* Pass setSearchTerm to Header */}
      <div className="event-list">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <EventCard key={event.id} {...event} />
          ))
        ) : (
          <p>No events found.</p>
        )}
      </div>
    </div>
  );
};

export default EventPage;
