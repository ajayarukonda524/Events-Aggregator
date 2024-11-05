import React from 'react';
import '../styles/CollegeLogin.css'; // Import the CSS file

const CollegeLogin = ({ handleLogin }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    handleLogin(); // Call the login handler passed from App
    navigator('/dashboard');
  };

  return (
    <div className="login-container">
      <div className="quote-section">
        <h3>"The best way to predict the future is to create it."</h3>
                    <h6>— Abraham Lincoln</h6>
      </div>

      <div className="login-box">
        <h2>College Login</h2>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" required />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input type="password" required />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default CollegeLogin;
