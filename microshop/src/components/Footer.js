// src/components/Footer.js
import React from 'react';

const Footer = () => {
    return (
        <footer style={footerStyle}>
            <p classname="footer-text" style={footerStyle} >2024 MicroShop. All rights reserved.</p>
        </footer>
    );
};

const footerStyle = {
    background: '#333',
    color: '#00FF00',
    padding: '10px 0',
    textAlign: 'center',
    width: '100%'
};

export default Footer;
