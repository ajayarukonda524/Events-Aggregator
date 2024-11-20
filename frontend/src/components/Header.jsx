import React from 'react';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = ({ setSearchTerm }) => {

  // Check if the user is logged in
  const isLoggedIn = localStorage.getItem('authToken');

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    window.location.href = '/login'; // Redirect to login page after logout
  };

  // const userData = JSON.parse(localStorage.getItem('user'))
  console.log(localStorage.getItem('user'));
  let route = "/student/dashboard";
  // if(userData.userType === "college"){
  //   route = "/college/dashboard";
  // }
  // else if(userData.userType === "student"){
  //   route = "/student/dashboard";
  // }

  return (
    <header className="header-container">
      {/* Logo Section */}
      <div className="logo">
        <img src={logo} alt="Logo" className="logo-img" />
      </div>

      {/* Navigation Links */}
      <nav className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/events" className='nav-link'>Events</Link>
        <Link to="/about-us" className="nav-link">About Us</Link>
        <Link to="/contact-us" className="nav-link">Contact Us</Link>

        {!isLoggedIn ? (
          <Link to="/login" className="nav-link">Login/Signup</Link>
        ) : (
          <Link to={`${route}`} className="nav-link">Dashboard</Link>
        )}

        {isLoggedIn && (
          <button onClick={handleLogout} className="nav-link logout-button">Logout</button>
        )}
      </nav>
    </header>
  );
};

export default Header;
