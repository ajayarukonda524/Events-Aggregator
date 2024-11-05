import React, { useState } from 'react';
import axios from 'axios';

const Auth = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isNewUser, setIsNewUser] = useState(false);
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const endpoint = isNewUser ? '/api/auth/register' : '/api/auth/login';
        try {
            const response = await axios.post(endpoint, { email, password });
            setMessage(response.data.message);
            // Redirect to the next page or update UI accordingly
            // Example: window.location.href = '/dashboard';
        } catch (error) {
            setMessage(error.response.data.message || 'An error occurred');
        }
    };

    return (
        <div>
            <h2>{isNewUser ? 'Register' : 'Login'}</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button type="submit">{isNewUser ? 'Register' : 'Login'}</button>
            </form>
            <p>
                {isNewUser ? 'Already have an account?' : "Don't have an account?"}
                <button onClick={() => setIsNewUser(!isNewUser)}>
                    {isNewUser ? 'Login' : 'Register'}
                </button>
            </p>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Auth;
