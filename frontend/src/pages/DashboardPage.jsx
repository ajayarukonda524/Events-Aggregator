import React from 'react';
import '../styles/DashboardPage.css';

const DashboardPage = () => {
    // Define the user object here
    const user = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        memberSince: 'January 2023',
        registeredEvents: [
            { title: 'Tech Hackathon 2024', date: '2024-10-15' },
            { title: 'Cultural Fest 2024', date: '2024-11-20' },
        ],
        upcomingEvents: [],
        messages: [],
    };

    return (
        <div className="dashboard-page">
            <h1>User Dashboard</h1>
            <div className="user-info">
                <h2>Welcome, {user.name}!</h2>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Member Since:</strong> {user.memberSince}</p>
            </div>
            <div className="stats">
                <h3>Your Statistics</h3>
                <ul>
                    <li><strong>Registered Events:</strong> {user.registeredEvents.length}</li>
                    <li><strong>Upcoming Events:</strong> {user.upcomingEvents.length}</li>
                    <li><strong>Messages:</strong> {user.messages.length}</li>
                </ul>
            </div>
            <div className="registered-events">
                <h3>Your Registered Events</h3>
                {user.registeredEvents.length > 0 ? (
                    <ul>
                        {user.registeredEvents.map((event, index) => (
                            <li key={index}>{event.title} on {event.date}</li>
                        ))}
                    </ul>
                ) : (
                    <p>You have not registered for any events.</p>
                )}
            </div>
            <div className="call-to-action">
                <h3>Explore More Events</h3>
                <p>Check out new events and register to enhance your skills!</p>
                <button className="explore-button">Explore Events</button>
            </div>
        </div>
    );
};

export default DashboardPage;
