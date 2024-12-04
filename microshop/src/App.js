import { auth } from './firebase'; 
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import axios from 'axios';
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
import Cart from './components/cart';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const [user, setUser] = useState(null); 
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]); 
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user); 
      setLoading(false); 
    });
    return () => unsubscribe(); 
  }, []);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('/api/orders');
        setOrders(response.data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };
    fetchOrders();
  }, []);

  const saveOrder = async (order) => {
    try {
      const response = await axios.post('http://localhost:5000/api/orders', order); // Point to Flask API
      setOrders((prevOrders) => [...prevOrders, response.data]); 
      alert('Order saved successfully!');
    } catch (error) {
      console.error('Error saving order:', error);
    }
  };
  

  if (loading) {
    return <div>Loading...</div>; 
  }

  return (
    <Router>
      <div style={appStyle}>
        <Header cart={cart} /> 
        <Routes>
          <Route path="/" element={<ProtectedRoute user={user} element={<Home />} />} />
          <Route path="/products" element={<ProtectedRoute user={user} element={<Products cart={cart} setCart={setCart} />} />} />
          <Route path="/orders" element={<ProtectedRoute user={user} element={<Orders orders={orders} />} />} />
          <Route path="/sale" element={<ProtectedRoute user={user} element={<Sale />} />} />
          <Route path="/about" element={<ProtectedRoute user={user} element={<About />} />} />
          <Route path="/contact" element={<ProtectedRoute user={user} element={<Contact />} />} />
          <Route path="/cart" element={<ProtectedRoute user={user} element={<Cart cart={cart} setCart={setCart} saveOrder={saveOrder} />} />} />
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
