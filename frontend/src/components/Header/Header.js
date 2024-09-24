import React from 'react';
import { motion } from 'framer-motion';
import './Header.css';
import images from '../../constants';

function Header() {
  return (
    <div className="app__header">
      <div className="app__header-content">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}  // Start hidden and slightly below
          animate={{ opacity: 1, y: 0 }}   // End visible and at original position
          transition={{ duration: 1.5, ease: "easeOut" }}  // Control animation timing
        >
          Some days <br />Bull,<br /> some days Bear, but <br /> always<br /> Trader.
        </motion.h1>
        <p>Get a wallet personalized to your investor profile</p>
      </div>
    </div>
  );
}

export default Header;
