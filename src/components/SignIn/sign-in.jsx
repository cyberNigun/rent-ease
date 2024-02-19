// sign-in.jsx

import React, { useState } from 'react';
import './sign-in.css'; // Make sure sign-in.css exists in the correct location

const SignIn = ({ onSignIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // Implement your custom sign-in logic here
    // For example, make an API call to your backend service
    // with the provided email and password
    // Once the sign-in is successful, call onSignIn(true)
    // Otherwise, handle sign-in errors accordingly
  };

  return (
    <div className="sign-in">
      <h2>Sign In</h2>
      <form onSubmit={handleSignIn}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Sign In</button>
      </form>
      <div className="signup-link">
        Don't have an account? <a href="/signup">Sign Up</a>
      </div>
    </div>
  );
};

export default SignIn;
