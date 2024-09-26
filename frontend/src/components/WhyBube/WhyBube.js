import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './WhyBube.css';
import images from '../../constants';

function WhyBube() {
  const [ref, inView] = useInView({
    threshold: 0.2, // Trigger the animation when 20% of the component is visible
    triggerOnce: false, // Allow animation to trigger every time the element comes into view
  });

  return (
    <div className="why-bube-container">
      <motion.img
        src={images.Bull}
        alt="Bull"
        className="bull-image"
        whileHover={{ scale: 1.1 }} // Scale up on hover
        transition={{ duration: 0.3 }}
      />
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-container"
      >
        <h2>Why the name BUBE?</h2>
        <p>
          The bull attacks by raising its head and horns in an upward movement.<br />
          However, the bear attacks in the opposite direction.<br /> It uses its paws to
          attack from top to bottom.<br /> These expressions are widely used in market analysis
          and investor behavior,<br /> where “Bulls” are buying shares,<br /> expecting appreciation,
          and “Bears” are selling or expecting a drop.
        </p>
      </motion.div>
      <motion.img
        src={images.Bear}
        alt="Bear"
        className="bear-image"
        whileHover={{ scale: 1.1 }} // Scale up on hover
        transition={{ duration: 0.3 }}
      />
    </div>
  );
}

export default WhyBube;
