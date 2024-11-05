import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import EventPage from './pages/EventPage';
import AboutPage from './pages/AboutPage';
import UserDashboard from './components/UserDashboard';
import CustomNotification from './components/CustomNotification';
import PrivateRoute from './components/PrivateRoute';
import Auth from './components/Auth';

const App = () => {
    return (
        <Router>
            <div className="app">
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/event/:id" element={<EventPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/auth" element={<Auth />} />

                    {/* Private routes */}
                    <Route element={<PrivateRoute />}>
                        <Route path="/user-dashboard" element={<UserDashboard />} />
                    </Route>
                </Routes>
                <CustomNotification />
                <Footer />
            </div>
        </Router>
    );
};

export default App;
