import React from 'react';
import { motion } from 'framer-motion';
import './AboutUs.css';

const text = `BUBE Trader was born in 2017 and aims to provide the essential service for well-executed trading operations, Graphic Analysis. This is the principle of every successful operation, which is why today you have the possibility of obtaining a variable, satisfactory and fast income. We have had almost 10 years of recurring experience with the financial market and its moments of ups and downs, an experience that we want to share with you by providing you with a personalized financial portfolio and providing you with greater financial freedom, a freedom that the market only provides for those who know what they are doing.`;

function AboutUs() {
  return (
    <div className="app__about-us">
      <div className="app__about-us-content">
        <h2>About BUBE Trader</h2>
        <p>
          {text.split('').map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }} // Start hidden and slightly below
              animate={{ opacity: 1, y: 0 }} // End visible and at original position
              transition={{ duration: 0.5, delay: index * 0.05 }} // Staggered delay
            >
              {char}
            </motion.span>
          ))}
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
