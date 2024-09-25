import React from 'react';
import './WhyBube.css';
import images from '../../constants';

function WhyBube() {
  return (
    <div className="why-bube-container">
      <img src={images.Bear} alt="Bear" className="top-left-image" />
      <div className="text-container">
        <h2>Why the Name Bube?</h2>
        <p>
          The bull attacks by raising its head and horns. In an upward movement.
          However, the bear attacks in the opposite direction. It uses its paws
          to attack from top to bottom. In a downward movement. These expressions
          are widely used in market analysis and investor behavior, where “Bulls”
          are buying shares, expecting appreciation, and “Bears” are selling or
          expecting a drop.
        </p>
      </div>
      <img src={images.Bull} alt="Bull" className="bottom-right-image" />
    </div>
  );
}

export default WhyBube;
