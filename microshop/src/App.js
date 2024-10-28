// src/App.js
import { auth } from './firebase'; 
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Products from './components/Products';
import Orders from './components/Orders';
import Sale from './components/Sale';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Signup from './components/Signup';
import Login from './components/Login';
import Logout from './components/Logout';
import ProtectedRoute from './components/ProtectedRoute';


function App() {
  const [user, setUser] = useState(null); // State to track the authenticated user
  const [loading, setLoading] = useState(true); // State to track loading status

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user); // Update user state
      setLoading(false); // Stop loading once we know the user's state
    });
    return () => unsubscribe(); // Clean up the listener
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Optionally show a loading spinner or message
  }

  return (
    <Router>
      <div style={appStyle}>
        <Header />
        <Routes>
          {/* Protected routes */}
          <Route path="/" element={<ProtectedRoute user={user} element={<Home />} />} />
          <Route path="/products" element={<ProtectedRoute user={user} element={<Products />} />} />
          <Route path="/orders" element={<ProtectedRoute user={user} element={<Orders />} />} />
          <Route path="/sale" element={<ProtectedRoute user={user} element={<Sale />} />} />
          <Route path="/about" element={<ProtectedRoute user={user} element={<About />} />} />
          <Route path="/contact" element={<ProtectedRoute user={user} element={<Contact />} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

const appStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
};

export default App;