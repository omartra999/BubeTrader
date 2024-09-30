import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './AboutUs.css';

const text = `BUBE Trade was born in 2017 and aims to provide the essential service for well-executed trading operations,<b>Graphic Analysis</b>. This is the principle of every successful operation, which is why today you have the possibility of obtaining a variable, satisfactory and fast income. We have had almost 10 years of recurring experience with the financial market and its moments of ups and downs, an experience that we want to share with you by providing you with a personalized financial portfolio and providing you with greater financial freedom, a freedom that the market only provides for those who know what they are doing.`;

function AboutUs() {
  const ref = useRef(null);
  const [animateText, setAnimateText] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateText(true); // Start animation when in view
          observer.disconnect(); // Stop observing once animation starts
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the element is in view
    );

    if (ref.current) {
      observer.observe(ref.current); // Start observing the ref element
    }

    return () => {
      observer.disconnect(); // Cleanup on component unmount
    };
  }, []);

  // Function to render text with animations and handle bold sections
  const renderTextWithAnimation = () => {
    // Create a temporary element to parse the HTML
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = text; // Set the innerHTML to the text with bold tags
    const textNodes = Array.from(tempDiv.childNodes); // Get all child nodes

    return textNodes.map((node, index) => {
      // If the node is a text node, animate it
      if (node.nodeType === Node.TEXT_NODE) {
        return (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }} // Start hidden and slightly below
            animate={animateText ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} // Animate only when in view
            transition={{ duration: 0.2, delay: animateText ? index * 0.002 : 0 }} // Faster animation and stagger
          >
            {node.textContent}
          </motion.span>
        );
      }

      // If the node is an element (like <b>), render it as bold with underline
      if (node.nodeName === 'B') {
        return (
          <b key={index} style={{ textDecoration: 'underline' }}>
            {node.textContent}
          </b>
        );
      }

      return null; // Ignore any other nodes
    });
  };

  return (
    <div className="app__about-us" ref={ref}>
      <div className="app__about-us-content">
        <h2>About BUBE Trade</h2>
        <p>{renderTextWithAnimation()}</p>
      </div>
    </div>
  );
}

export default AboutUs;
