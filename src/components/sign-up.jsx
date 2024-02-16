import React, { useState } from 'react';
import { signUp } from './Auth'; // Import the signUp function from Auth.js
import './sign-up.css'

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password); // Call the signUp function from Auth.js
      // Redirect user to the dashboard or another page upon successful sign-up
    } catch (error) {
      console.error('Error signing up:', error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUpForm;
