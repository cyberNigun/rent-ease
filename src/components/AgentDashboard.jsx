import React, { useState, useEffect } from 'react';
import firebase from '../firebase';

const AgentDashboard = () => {
  const [scheduledVisits, setScheduledVisits] = useState([]);

  useEffect(() => {
    // Fetch scheduled visits for the current agent from Firebase
    const fetchScheduledVisits = async () => {
      try {
        const currentUser = firebase.auth().currentUser;
        if (currentUser) {
          // Use the current user's ID to fetch scheduled visits
          // Replace 'getScheduledVisits' with the appropriate Firebase query
          const visits = await firebase.getScheduledVisits(currentUser.uid);
          setScheduledVisits(visits);
        }
      } catch (error) {
        console.error('Error fetching scheduled visits:', error.message);
      }
    };

    fetchScheduledVisits();
  }, []);

  const handleLogout = async () => {
    try {
      await firebase.auth().signOut();
      // Optionally, perform any other logout-related actions
    } catch (error) {
      console.error('Error logging out:', error.message);
    }
  };

  return (
    <div>
      <h2>Agent Dashboard</h2>
      <button onClick={handleLogout}>Logout</button>
      <div>
        <h3>Scheduled Visits</h3>
        <ul>
          {scheduledVisits.map((visit, index) => (
            <li key={index}>
              {/* Display scheduled visit details */}
              {visit.propertyName} - {visit.date}
            </li>
          ))}
        </ul>
      </div>
      {/* Add other dashboard components here */}
    </div>
  );
};

export default AgentDashboard;
