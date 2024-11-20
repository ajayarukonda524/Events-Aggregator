//Workshops.js file
import React from 'react';
import Footer from '../components/Footer';
import EventDetails from '../components/EventDetails';

const WorkshopEvent = () => {
  const event = {
    title: 'Workshop on AI & ML',
    date: '5th December 2024',
    time: '11:00 AM - 4:00 PM',
    location: 'Room 202, Science Block',
    organizers: 'AI and Robotics Club',
    description: 'This workshop will introduce participants to Artificial Intelligence and Machine Learning concepts. Learn about neural networks, supervised and unsupervised learning techniques, and how to implement them.',
    image: '/images/ai_ml_workshop.jpg',
    registrationLink: 'http://example.com/register-ai-ml'
  };

  return (
    <>
      <EventDetails event={event} />
      <Footer />
    </>
  );
}

export default WorkshopEvent;
