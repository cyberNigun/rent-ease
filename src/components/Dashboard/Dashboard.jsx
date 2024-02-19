// Dashboard.jsx

import React from 'react';
import PropertyForm from './PropertyForm';
import './Dashboard.css'; // Import the CSS file for styling

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Header */}
      <header className="dashboard-header">
        <h1>House Owner Dashboard</h1>
        {/* Navigation links can be added here */}
      </header>

      {/* Property Form Section */}
      <PropertyForm />

      {/* Notifications Section */}
      <section className="notifications">
        <h2>Notifications</h2>
        {/* Notifications for new bookings, messages, etc., can be displayed here */}
      </section>

      {/* Footer */}
      <footer className="dashboard-footer">
        {/* Additional links or information can be added here */}
      </footer>
    </div>
  );
};

export default Dashboard;
