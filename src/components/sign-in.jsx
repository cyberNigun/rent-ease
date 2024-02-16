import React, { useState } from 'react';
import { signIn } from './Auth'; // Import the signIn function from Auth.js
import './sign-in.css'

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signIn(email, password); // Call the signIn function from Auth.js
      // Redirect user to the dashboard or another page upon successful sign-in
    } catch (error) {
      console.error('Error signing in:', error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign In</h2>
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
      <button type="submit">Sign In</button>
    </form>
  );
};

export default SignInForm;
