import React, { useState } from 'react';
import axios from 'axios';
import './sign-up.css';

const SignUp = ({ onSignUp }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('owner'); 

  const handleSignUp = async () => {
    try {
      const response = await axios.post('https://rentease-production.up.railway.app/auth/signup', {
        firstName,
        lastName,
        username,
        email,
        password,
        role,
      });
      console.log('User signed up successfully:', response.data);
      onSignUp(response.data);
    } catch (error) {
      console.error('Error signing up:', error.response.data);
    }
  };

  return (
    <div className="signup-container"> 
      <h2>Sign Up</h2>
      <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="owner">Owner</option>
        <option value="tenant">Tenant</option>
        <option value="agent">Agent</option>
      </select>
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
};

export default SignUp;
