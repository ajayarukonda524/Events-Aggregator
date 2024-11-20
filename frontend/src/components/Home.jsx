//home.js file
import React from 'react';
import { useNavigate } from 'react-router-dom';  // Import Link from react-router-dom
import EventCard from './EventCard';  // Import EventCard component
import '../styles/Home.css'; // Ensure the CSS path is correct

const Home = () => {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = "/login";
    navigate(path);
  }
  // Featured events data
  const featuredEvents = [
    {
      id: 1,
      title: 'Tech Hackathon 2024',
      date: '2024-10-15',
      description: 'Join us for a 48-hour hackathon where you can showcase your skills and win exciting prizes!',
      image: require('../images/hackthon.jpg'),
    },
    {
      id: 2,
      title: 'Cultural Fest 2024',
      date: '2024-11-20',
      description: 'Experience the diverse cultures at our annual cultural fest with performances, food, and workshops.',
      image: require('../images/culturalfest.jpg'),
    },
    {
      id: 3,
      title: 'Robotics AI',
      date: '2024-12-05',
      description: 'Join us for a workshop on Artificial Intelligence and learn how to build AI models.',
      image: require('../images/robotics.jpeg'),
    },
    {
      id: 4,
      title: 'Startup 2024',
      date: '2024-12-15',
      description: 'Participate in the most exciting technical fest with coding challenges, robotics, and more!',
      image: require('../images/startup.jpg'),
    },
    {
      id: 5,
      title: 'Health Campaign',
      date: '2024-12-22',
      description: 'Cheer for your favorite teams in our annual sports meet with a variety of events.',
      image: require('../images/Health.jpg'),
    },
    {
      id: 6,
      title: 'Digital Marketing',
      date: '2024-12-30',
      description: 'Learn about the future of blockchain technology in this exclusive seminar.',
      image: require('../images/digitalmarketing.jpeg'),
    },
  ];

  return (
    <div className="home">
      <h1 id='title'>Welcome to Happening Hub</h1>

      {/* Featured Events Section */}
      <div className="featured-events">
        <h2>Upcoming Events</h2>
        <div className="event-cards">
          {featuredEvents.map(event => (
            <EventCard 
              key={event.id}
              title={event.title}
              date={event.date}
              description={event.description}
              image={event.image}
            />
          ))}
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="call-to-action">
        <h3>Don't Miss Out!</h3>
        <p>Register now to participate in these exciting events and more!</p>
        <button className="register-button" onClick={routeChange}>Register Now</button>
      </div>
    </div>
  );
};

export default Home;
