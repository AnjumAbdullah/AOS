import React from 'react';
import './About.css'; // For styling and animations
import teamImage from '../assets/team.jpg'; // Add an image to represent your teamshop=story
import shopStory from '../assets/shop-story.jpg'; // Image for storytelling

const About = () => {
  return (
    <div className="about-container">
      <h1 className="fade-in">Our Story</h1>
      <p className="slide-up">
        MicroShop was planned with a vision to revolutionize the way small businesses transition into the digital era.
        What started as a small project in a garage has now grown into a platform that powers thousands of stores worldwide.
        We believe in empowering every entrepreneur with the tools they need to build their dream business.
      </p>
      
      <img src={shopStory} alt="Our Story" className="story-image zoom-in" />

      <h2 className="fade-in">Meet the Team</h2>
      <p className="slide-up">
        We’re a diverse group of passionate developers, designers, and problem solvers pursuing our Master's Program at TAMU-CC.
        Our team works around the clock to ensure that MicroShop remains user-friendly, fast, and reliable.
        Each member brings a unique perspective, and together, we innovate to help our project thrive.
      </p>
      
      <img src={teamImage} alt="Team" className="team-image zoom-in" />

      <div className="color-animation">
        <p>Our <b>core</b> values: Innovation, Simplicity, and Empowerment.</p>
      </div>
    </div>
  );
};

export default About;