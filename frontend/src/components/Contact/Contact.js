import React from 'react';
import './Contact.css';
import { FaInstagram } from 'react-icons/fa'; // Import specific icons

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Clear Your Doubts</h2>
      <div className='contact-item'>
      <h3>CONTACT NUMBER</h3>
      <div className='number-item'>
      <p>+34 642 26 14 41</p>
      <p className='name'>Náthalis Desidério</p>
      <p className='role'>Senior Graphic Analyst and <br/>
      Technical Trader</p>
      </div>
      <div className='number-item'>
        <p>+356 9933 8370</p>
        <p className='name'>Fernanda T.Henschel</p>
        <p className='role'>Marketing and Commercial Coordinator</p>
      </div>
      </div>

      <div className='contact-item'>
        <h3>LANGUAGES</h3>
        <p>English, Portuguese and Spanish</p>
      </div>
      <div className='contact-item'>
      <h3>Email</h3><a href="mailto:bubtrader@gmail.com">bubtrader@gmail.com</a>
      </div>
      <div className='contact-item'>
        <h3>SOCIAL</h3>
        <div className="social-icons">
          <a href="https://www.instagram.com/nathalis.d?igsh=MTZoYmxoZ2lsdDBiYg%3D%3D" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={24} />
          </a>
          <p><b>Náthalis Desidério da Silva Santos</b> has
            been our <b>Senior Graphic Analyst</b> and
            <b>Technical Trader</b> with a professional
            degree and experience of more than 7 years.</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
