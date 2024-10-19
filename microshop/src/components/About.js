// src/components/About.js
import React from 'react';

const About = () => {
    return (
        <div style={pageStyle}>
            <h2>About Us</h2>
            <p>MicroShop is dedicated to providing a seamless online shopping experience.</p>
        </div>
    );
};

const pageStyle = {
    padding: '20px',
    textAlign: 'center'
};

export default About;
