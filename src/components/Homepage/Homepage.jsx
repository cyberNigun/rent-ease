// Homepage.jsx

import React from 'react';
import './Homepage.css';

const Homepage = ({ navigateTo }) => {
  return (
    <div className="homepage-container">
      <header className="header">
        {/* Navbar with RentEase logo and navigation links */}
        <nav className="navbar">
          <div className="logo">RentEase</div>
          <ul className="nav-links">
            {/* Add navigation links here */}
            <li><button onClick={() => navigateTo('signin')}>Sign In</button></li>
            <li><button onClick={() => navigateTo('signup')}>Sign Up</button></li>
            {/* Add other navigation links */}
          </ul>
        </nav>
      </header>

      {/* Background image and text section */}
      <section className="hero-section">
        <div className="hero-text">
          <h1>Welcome to RentEase</h1>
          <p>Your platform for seamless apartment rental</p>
        </div>
      </section>

      {/* Other sections and content can be added here */}
    </div>
  );
};

export default Homepage;
