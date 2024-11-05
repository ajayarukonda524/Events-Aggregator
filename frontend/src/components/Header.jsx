import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css'; // Import your CSS file for header styles

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>HAPPENING HUB</h1>
      </div>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/college-login">College Login</Link>
          </li>
          {/* <li>
            <Link to="/student-login">Student Login</Link>
          </li> */}
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/events">Events</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
