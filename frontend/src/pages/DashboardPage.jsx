import React from 'react';
import Header from '../components/Header';
import UserDashboard from '../components/UserDashboard';
import Footer from '../components/Footer';
import './DashboardPage.css';

const DashboardPage = () => {
  return (
    <div className="dashboard-page">
      <Header />
      <UserDashboard />
      <Footer />
    </div>
  );
};

export default DashboardPage;
