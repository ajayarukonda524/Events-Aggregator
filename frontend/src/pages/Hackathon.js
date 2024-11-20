//hacakathon.js
import React from 'react';
import '../styles/Hackathon.css'; // Import your styles for hackathon section

const Hackathon = () => {
  // Example data for hackathons
  const hackathonTypes = [
    {
      id: 1,
      title: 'Tech Hackathon 2024',
      description: 'A 48-hour hackathon where participants work on innovative tech solutions. Win exciting prizes!',
      date: '2024-10-15',
      time: '9:00 AM - 6:00 PM',
      location: 'Tech Campus, Main Auditorium',
      image: require('../images/hackthon.jpg'), // Replace with actual path
      registrationLink: 'https://www.hackathon-registration.com',
    },
    {
      id: 2,
      title: 'AI Hackathon 2024',
      description: 'Focus on artificial intelligence challenges. Build AI models and solutions with industry experts.',
      date: '2024-11-10',
      time: '9:00 AM - 5:00 PM',
      location: 'Innovation Hub, Tech City',
      image: require('../images/hackthon.jpg'), // Replace with actual path
      registrationLink: 'https://www.ai-hackathon.com',
    },
    {
      id: 3,
      title: 'Startup Hackathon 2024',
      description: 'Collaborate with entrepreneurs to bring startup ideas to life in a competitive environment.',
      date: '2024-12-01',
      time: '10:00 AM - 4:00 PM',
      location: 'Startup Incubator, Silicon Valley',
      image: require('../images/hackthon.jpg'), // Replace with actual path
      registrationLink: 'https://www.startup-hackathon.com',
    },
    {
      id: 4,
      title: 'Blockchain Hackathon 2024',
      description: 'Explore blockchain technologies and solve real-world problems with decentralized solutions.',
      date: '2024-12-12',
      time: '8:00 AM - 6:00 PM',
      location: 'Blockchain Hub, Global Park',
      image: require('../images/hackthon.jpg'), // Replace with actual path
      registrationLink: 'https://www.blockchain-hackathon.com',
    },
  ];

  return (
    <div className="hackathon">
      <div className="hackathon-list">
        {hackathonTypes.map((hackathon) => (
          <div key={hackathon.id} className="hackathon-card">
            <img src={hackathon.image} alt={hackathon.title} className="hackathon-image" />
            <div className="hackathon-info">
              <h3>{hackathon.title}</h3>
              <p><strong>Date:</strong> {hackathon.date}</p>
              <p><strong>Time:</strong> {hackathon.time}</p>
              <p><strong>Location:</strong> {hackathon.location}</p>
              <p>{hackathon.description}</p>
              <a
                href={hackathon.registrationLink}
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

export default Hackathon;
