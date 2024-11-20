import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import '../styles/AuthForm.css';

const Login = ({ userType, onLogin }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState(null);  // State to handle error messages
  const navigate = useNavigate();  // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);  // Reset error state on form submit

    try {
      let response;
      if (userType === 'college') {
        response = await axios.post('http://localhost:4000/api/auth/college/login', {
          collegeName: formData.collegeName,
          email: formData.email,
          password: formData.password,
          location: formData.location,
        }, );
      } else {
        response = await axios.post('http://localhost:4000/api/auth/student/login', {
          email: formData.email,
          password: formData.password,
        });
      }

      if (response.status === 200) {
        alert(`${userType === 'college' ? 'College' : 'Student'} logged in successfully`);

        // Save the token in localStorage or state if necessary
        localStorage.setItem('authToken', response.data.token);

        // Call onLogin function to handle state update (perhaps storing JWT or user details)
        onLogin(response.data);

        // Redirect to the appropriate dashboard after login
        if (userType === 'college') {
          navigate('/college/dashboard');  // College dashboard route
        } else if(userType === 'student') {
          navigate('/student/dashboard');  // Student dashboard route
        }
      }
    } catch (error) {
      console.error('Login Error:', error.response ? error.response.data : error.message);
      setError(error.response ? error.response.data.message : 'Error logging in');
    }
  };

  return (
    <div className="auth-form">
      <h2>Login as {userType === 'college' ? 'College' : 'Student'}</h2>
      
      {/* Show error message if login fails */}
      {error && <div className="error-message">{error}</div>}

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          required
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Login;
