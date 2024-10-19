// src/components/Footer.js
import React from 'react';

const Footer = () => {
    return (
        <footer style={footerStyle}>
            <p>&copy; 2024 MicroShop. All rights reserved.</p>
        </footer>
    );
};

const footerStyle = {
    background: '#333',
    color: '#fff',
    padding: '10px 0',
    textAlign: 'center',
    position: 'absolute',
    bottom: 0,
    width: '100%'
};

export default Footer;
