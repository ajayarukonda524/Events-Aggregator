import React from 'react';
import Footer from '../components/Footer';
import EventDetails from '../components/EventDetails';

const EventPage = () => {
  const events = [
    {
      title: 'Hackathon 2024',
      date: '10th October 2024',
      time: '10:00 AM - 10:00 PM',
      location: 'Main Auditorium, College Campus',
      organizers: 'Tech Club',
      description: 'Join us for a thrilling 12-hour hackathon where participants will tackle real-world challenges, develop innovative solutions, and compete for exciting prizes! This event is open to all students, and food and refreshments will be provided.',
      image: '/images/hackthon.jpg', // Ensure this path is correct
      registrationLink: 'http://example.com/register'
    },
    {
      title: 'Cultural Fest 2024',
      date: '15th November 2024',
      time: '9:00 AM - 9:00 PM',
      location: 'Open Grounds, College Campus',
      organizers: 'Cultural Committee',
      description: 'A full-day celebration of culture, music, dance, and food from all around the world. Participate in performances, enjoy the shows, or be a part of exciting workshops.',
      image: '/images/culturalfest.jpg', // Path to the image
      registrationLink: 'http://example.com/register-cultural-fest'
    },
    {
      title: 'Workshop on AI & ML',
      date: '5th December 2024',
      time: '11:00 AM - 4:00 PM',
      location: 'Room 202, Science Block',
      organizers: 'AI and Robotics Club',
      description: 'This workshop will introduce participants to Artificial Intelligence and Machine Learning concepts. Learn about neural networks, supervised and unsupervised learning techniques, and how to implement them.',
      image: '/images/ai_ml_workshop.jpg', // Path to the image
      registrationLink: 'http://example.com/register-ai-ml'
    },
    {
      title: 'Seminar on Entrepreneurship',
      date: '25th January 2025',
      time: '2:00 PM - 6:00 PM',
      location: 'Conference Hall, Admin Building',
      organizers: 'Entrepreneurship Cell',
      description: 'Join leading entrepreneurs as they share insights into starting a business, scaling it, and navigating the challenges of entrepreneurship in today’s digital world.',
      image: '/images/entrepreneurship_seminar.jpg', // Path to the image
      registrationLink: 'http://example.com/register-entrepreneurship'
    }
  ];

  return (
    <>
      {events.map((event, index) => (
        <EventDetails key={index} event={event} />
      ))}
      <Footer />
    </>
  );
}

export default EventPage;
