//loginpage.js
import React from 'react';
import '../styles/Login.css';
import backgroundImage from '../images/login_bg.jpg'; // Background image
import logoImage from '../images/logo.png'; // Logo image
import UserDashboard from '../components/UserDashboard';

const Login = () => {
  return (
    <div 
      className="login-container"
      style={{
        backgroundImage: `url(${backgroundImage})`, // Set the background image here
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="login-form">
        <div className="login-image">
          <img src={logoImage} alt="Logo" /> {/* Use the correct image path */}
        </div>
        <h2>Login</h2>
        <form onSubmit={UserDashboard}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" placeholder="Enter username" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter password" />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
