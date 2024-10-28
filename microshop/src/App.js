// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
import ProtectedRoute from './components/ProtectedRoute'; // Make sure to import ProtectedRoute

function App() {
    return (
        <Router>
            <div style={appStyle}>
                <Header />
                <Routes>
                    {/* Wrap protected routes with ProtectedRoute */}
                    <Route path="/" element={<ProtectedRoute element={<Home />} />} />
                    <Route path="/products" element={<ProtectedRoute element={<Products />} />} />
                    <Route path="/orders" element={<ProtectedRoute element={<Orders />} />} />
                    <Route path="/sale" element={<ProtectedRoute element={<Sale />} />} />
                    <Route path="/about" element={<ProtectedRoute element={<About />} />} />
                    <Route path="/contact" element={<ProtectedRoute element={<Contact />} />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
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