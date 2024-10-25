// src/components/Logout.js
import React from 'react';
import { auth } from '../firebase';

const Logout = () => {
  const handleLogout = async () => {
    await auth.signOut();
    alert("Logged out successfully!");
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default Logout;