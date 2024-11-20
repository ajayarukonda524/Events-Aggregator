//seminar.js
import React from 'react';
import Footer from '../components/Footer';
import EventDetails from '../components/EventDetails';

const SeminarEvent = () => {
  const event = {
    title: 'Seminar on Entrepreneurship',
    date: '25th January 2025',
    time: '2:00 PM - 6:00 PM',
    location: 'Conference Hall, Admin Building',
    organizers: 'Entrepreneurship Cell',
    description: 'Join leading entrepreneurs as they share insights into starting a business, scaling it, and navigating the challenges of entrepreneurship in today’s digital world.',
    image: '/images/entrepreneurship_seminar.jpg',
    registrationLink: 'http://example.com/register-entrepreneurship'
  };

  return (
    <>
      <EventDetails event={event} />
      <Footer />
    </>
  );
}

export default SeminarEvent;
