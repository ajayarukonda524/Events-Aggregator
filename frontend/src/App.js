import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header'; 
import Footer from './components/Footer';
import AuthPage from './components/Authpage';
import ContactUsPage from './pages/Contactus';
import Home from './components/Home';
import Hackathon from './pages/Hackathon';
import Cultural from './pages/CulturalEvents';
import EventPage from './pages/EventPage';
import AboutPage from './pages/AboutPage';
import StudentDashboard from './components/StudentDashboard';
import CollegeDashboard from './components/CollegeDashboard';
import EventsPage from './components/EventsPage';

const PrivateRoute = ({ element }) => {
  const isAuthenticated = !!localStorage.getItem('authToken'); // Check if auth token exists

  return isAuthenticated ? element : <Navigate to="/login" />;
};

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<AuthPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          
          {/* Specific Event Routes */}
          <Route path="/events/hackathons" element={<Hackathon />} />
          <Route path="/events/cultural" element={<Cultural />} />

          {/* Private Routes */}
          <Route 
            path="/college/dashboard" 
            element={<PrivateRoute element={<CollegeDashboard />} />} 
          />
          <Route 
            path="/student/dashboard" 
            element={<PrivateRoute element={<StudentDashboard />} />} 
          />
          {/* Dynamic Event Details Route */}
          <Route path="/event/:id" element={<EventPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
