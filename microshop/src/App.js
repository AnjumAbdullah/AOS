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
import ProtectedRoute from './components/PrivateRoute';


// {/* <Route path="/products" element={<PrivateRoute><Products /></PrivateRoute>} />  */}

function App() {
    return (
        <Router>
            <div style={appStyle}>
                <Header />
                <Routes>
                    <ProtectedRoute path="/products" element={<Products />} />
                    <ProtectedRoute path="/" element={<Home />} />
                    <ProtectedRoute path="/orders" element={<Orders />} />
                    <ProtectedRoute path="/sale" element={<Sale />} />
                    <ProtectedRoute path="/about" element={<About />} />
                    <ProtectedRoute path="/contact" element={<Contact />} />
                    <ProtectedRoute path="/signup" element={<Signup />} />
                    <ProtectedRoute path="/login" element={<Login />} />
                    <ProtectedRoute path="/logout" element={<Logout />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

const appStyle = {
    // minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
};

export default App;
