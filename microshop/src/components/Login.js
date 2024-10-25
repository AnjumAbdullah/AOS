// src/components/Login.js
import React, { useState } from 'react';
import { auth } from '../firebase'; // Import the configured auth instance
import { signInWithEmailAndPassword } from 'firebase/auth'; // Import the signIn function

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password); // Use auth as the first argument
      setError(''); // Clear any previous errors
      alert("Logged in successfully!");
    } catch (err) {
      setError(err.message); // Display any errors to the user
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
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
        <button type="submit">Login</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Login;
