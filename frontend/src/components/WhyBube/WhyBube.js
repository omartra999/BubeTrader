import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer'; // Import the hook
import images from '../../constants';
import './WhyBube.css';

function WhyBube() {
  // Create refs for each section
  const { ref: leftRef, inView: leftInView } = useInView({ triggerOnce: false });
  const { ref: middleRef, inView: middleInView } = useInView({ triggerOnce: false });
  const { ref: rightRef, inView: rightInView } = useInView({ triggerOnce: false });

  return (
    <div className='WhyBube-container'>
      <h1>Why the name BUBE?</h1>
      <div className='leftside'>
        <img className='bull-image' src={images.Bull} alt='Bull' />
        <motion.p
          className='text-container'
          ref={leftRef} // Set the ref
          initial={{ scale: 0.8, opacity: 0 }} // Start small and invisible
          animate={{ scale: leftInView ? 1 : 0.8, opacity: leftInView ? 1 : 0 }} // Trigger based on inView
          transition={{ duration: 0.6, ease: 'easeInOut' }} // Smooth transition
        >
          The "BUll" comes from the way this animal attacks, throwing its horns
          from the bottom up. In other words, there is an expectation of an
          increase.
        </motion.p>
      </div>
      <div className='middle'>
        <motion.p
          className='text-container'
          ref={middleRef} // Set the ref
          initial={{ scale: 0.8, opacity: 0 }} // Start small and invisible
          animate={{ scale: middleInView ? 1 : 0.8, opacity: middleInView ? 1 : 0 }} // Trigger based on inView
          transition={{ duration: 0.6, ease: 'easeInOut' }} // Smooth transition
        >
          In the world of trading and financial markets, the terms Bull and Bear are
          used to describe market trends and investor behavior. Each represents a
          predominant directional state. These terms are widely used by
          analysts and traders to understand and discuss the dynamics of the
          financial markets and help guide investment decisions in different
          scenarios.
        </motion.p>
      </div>
      <div className='rightside'>
        <motion.p
          className='text-container'
          ref={rightRef} // Set the ref
          initial={{ scale: 0.8, opacity: 0 }} // Start small and invisible
          animate={{ scale: rightInView ? 1 : 0.8, opacity: rightInView ? 1 : 0 }} // Trigger based on inView
          transition={{ duration: 0.6, ease: 'easeInOut' }} // Smooth transition
        >
          The "BEar" comes from the way this animal attacks, pushing its
          paws from top to bottom. In other words, there is an expectation of
          decline.
        </motion.p>
        <img src={images.Bear} alt='Bear' className='bear-image' />
      </div>
    </div>
  );
}

export default WhyBube;
