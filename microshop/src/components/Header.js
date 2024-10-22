// src/components/Header.js
import './Header.css'; 
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <header className={`header ${isHovered ? 'hovered' : ''}`} 
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}>
            <h1 className="microshop-heading">Microshop</h1>
            <nav>
                <ul className="nav-list">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/orders">Manage Orders</Link></li>
                    <li><Link to="/sale" className='sale-link'>Black Friday Sale!</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
