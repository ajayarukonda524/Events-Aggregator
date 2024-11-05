import React from 'react';
import '../styles/Home.css';
import EventCard from './EventCard';

const Home = () => {
      const featuredEvents = [
        {
          id: 1,
          title: 'Tech Hackathon 2024',
          date: '2024-10-15',
          description: 'Join us for a 48-hour hackathon where you can showcase your skills and win exciting prizes!',
          image: require('../images/hackthon.jpg'), // Update this line
        },
        {
          id: 2,
          title: 'Cultural Fest 2024',
          date: '2024-11-20',
          description: 'Experience the diverse cultures at our annual cultural fest with performances, food, and workshops.',
          image: require('../images/culturalfest.jpg'), // Add the path for the cultural fest image
        },
      
    {
      id: 3,
      title: 'Coding Bootcamp 2024',
      date: '2024-12-01',
      description: 'A week-long coding bootcamp for aspiring developers. Learn the latest technologies and frameworks.',
      image: require('../images/CodingBootcamps.jpg'),
    },
    {
      id: 4,
      title: 'AI Symposium 2024',
      date: '2024-11-15',
      description: 'Join industry leaders at the AI Symposium to discuss trends and future developments in artificial intelligence.',
      image: require('../images/Ai.jpg'),
    },
    {
      id: 5,
      title: 'Startup Pitch Day 2024',
      date: '2024-12-10',
      description: 'Present your startup idea to a panel of judges for a chance to win funding and mentorship.',
      image: require('../images/startup.jpg'),
    },
    {
      id: 6,
      title: 'Digital Marketing Workshop 2024',
      date: '2024-11-05',
      description: 'Learn effective digital marketing strategies and tools to boost your online presence.',
      image: require('../images/digitalmarketing.jpeg'),
    },
    {
      id: 7,
      title: 'Robotics Competition 2024',
      date: '2024-11-25',
      description: 'Showcase your robotics skills in this exciting competition. Prizes for the top teams!',
      image: require('../images/robotics.jpeg'),
    },
    {
      id: 8,
      title: 'Health and Wellness Fair 2024',
      date: '2024-10-30',
      description: 'Join us for a day of health screenings, wellness workshops, and healthy lifestyle tips.',
      image: require('../images/Health.jpg'),
    },
  ];

  const categories = [
    { name: 'Hackathons', link: '/events/hackathons' },
    { name: 'Cultural Events', link: '/events/cultural' },
    { name: 'Workshops', link: '/events/workshops' },
    { name: 'Technical Fests', link: '/events/technical' },
    { name: 'Seminars', link: '/events/seminars' },
  ];

  return (
    <div className="home">
      <h2>Discover Upcoming College Events</h2>
      
      <div className="categories">
        <h3>Event Categories</h3>
        <ul>
          {categories.map((category, index) => (
            <li key={index}>
              <a href={category.link}>{category.name}</a> {/* Create links */}
            </li>
          ))}
        </ul>
      </div>

      <div className="featured-events">
        <h3>Featured Events</h3>
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

      <div className="call-to-action">
        <h3>Don't Miss Out!</h3>
        <p>Register now to participate in these exciting events and more!</p>
        <button className="register-button">Register Now</button>
      </div>
    </div>
  );
}

export default Home;

