import React, { useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './WhyBube.css';
import images from '../../constants';

function WhyBube() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2, // Trigger the animation when 20% of the component is visible
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
      });
    }
  }, [controls, inView]);

  return (
    <div className="why-bube-container">
      <img src={images.Bull} alt="Bull" className="bull-image" />
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
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
      <img src={images.Bear} alt="Bear" className="bear-image" />
    </div>
  );
}

export default WhyBube;
