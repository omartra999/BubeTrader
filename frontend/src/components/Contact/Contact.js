import React from 'react';
import './Contact.css';
import { FaFacebookF, FaInstagram } from 'react-icons/fa'; // Import specific icons

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Clear Your Doubts</h2>
      <p>Contact Number: <a href="tel:+35699338370">(356) 9933-8370</a></p>
      <p>E-mail: <a href="mailto:fernandathenschel@gmail.com">fernandathenschel@gmail.com</a></p>
      <div className="social-icons">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebookF size={24} />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={24} />
        </a>
      </div>
    </div>
  );
};

export default Contact;
