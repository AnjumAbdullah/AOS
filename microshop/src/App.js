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


// {/* <Route path="/products" element={<PrivateRoute><Products /></PrivateRoute>} />  */}

function App() {
    return (
        <Router>
            <div style={appStyle}>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/orders" element={<Orders />} />
                    <Route path="/sale" element={<Sale />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
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
    // minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
};

export default App;
