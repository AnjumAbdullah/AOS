// src/components/Header.js
import './Header.css'; 
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header" style={headerStyle}>
               <h1 className="microshop-heading">Microshop</h1>
            <nav>
                <ul style={navStyle}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
};

const headerStyle = {
    background: '#fe8d63',
    color: '#fff',
    padding: '10px 0',
    textAlign: 'center'
};

const navStyle = {
    listStyle: 'none',
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
    gap: '20px'
};

export default Header;
