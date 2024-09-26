import React, { useState } from 'react';
import { motion } from 'framer-motion';
import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#header"><img src={images.Logo} alt='logo'></img></a>
      </div>
      <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <li><a href="#header" onClick={() => setIsOpen(false)}>Home</a></li>
        <li><a href="#about-us" onClick={() => setIsOpen(false)}>About Us</a></li>
        <li><a href="#simulation" onClick={() => setIsOpen(false)}>Simulation</a></li>
        <li><a href="#why-bube" onClick={() => setIsOpen(false)}>Why Bube</a></li>
        <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
      </ul>
      <div className="hamburger" onClick={toggleMenu}>
        <motion.span
          className="bar"
          animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.1 }}
        />
        <motion.span
          className="bar"
          animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0 }}
        />
        <motion.span
          className="bar"
          animate={isOpen ? { rotate: -45, y: -14 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.1 }}
        />
      </div>
    </nav>
  );
};

export default Navbar;
