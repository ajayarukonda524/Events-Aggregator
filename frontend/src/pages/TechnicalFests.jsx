//TechnicalFests.js file
import React from 'react';
import Footer from '../components/Footer';
import EventDetails from '../components/EventDetails';

const TechnicalFestEvent = () => {
  const event = {
    title: 'Technical Fest 2024',
    date: '20th November 2024',
    time: '9:00 AM - 5:00 PM',
    location: 'Tech Park, College Campus',
    organizers: 'Technical Committee',
    description: 'Explore the latest in technology, attend technical talks, and participate in workshops and hands-on activities.',
    image: '/images/technicalfest.jpg',
    registrationLink: 'http://example.com/register-technical-fest'
  };

  return (
    <>
      <EventDetails event={event} />
      <Footer />
    </>
  );
}

export default TechnicalFestEvent;
