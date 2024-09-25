import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import { motion, useInView } from 'framer-motion';
import './Simulation.css';

function Simulation() {
  const [formData, setFormData] = useState({
    amount: 100,
    option: '',
    name: '',
    email: '',
    firstTimeTrading: '',
    phone: ''
  });

  const [thankYouMessage, setThankYouMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // State for error message

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleOptionClick = (option) => {
    setFormData({ ...formData, option });
  };

  const validateEmail = (email) => {
    // Simple regex for email validation
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage(''); // Reset error message on submit

    // Validate form data
    if (formData.amount < 100) {
      setErrorMessage("The least amount is 100.");
      return;
    }

    if (!formData.name || !formData.email || !formData.phone || !formData.firstTimeTrading || !formData.option) {
      setErrorMessage("Please fill out all fields.");
      return;
    }

    if (!validateEmail(formData.email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    // Send email
    emailjs.send(
      'service_4x6n3tk',  // replace with your service ID
      'template_7o3svrm', // replace with your template ID
      formData,
      'vyhK61HdfIvBSMSXN' // replace with your user ID
    ).then((result) => {
      console.log('Email sent successfully:', result.text);
      setThankYouMessage("Thank you for your request, you will soon be contacted by our team.");
      setFormData({ amount: 100, option: '', name: '', email: '', firstTimeTrading: '', phone: '' }); // Reset form data
    }, (error) => {
      console.log('Failed to send email:', error.text);
    });
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="app__simulation" ref={ref}>
      <h2>Simulate the ideal investment for you</h2>

      {/* Circles and Boxes */}
      <div className="app__simulation-wrapper">
        {/* First Box: Amount */}
        <div className="app__simulation-section">
          <motion.div
            className="app__simulation-circle"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.8, type: 'spring', stiffness: 150 }}
          >
            What amount do you want to start with?
          </motion.div>
          <div className="app__simulation-box">
            <h3>Think about your future and what you want to achieve:</h3>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              min="100"
              onChange={handleInputChange}
              required
            /> 
            amount in Euro
          </div>
        </div>

        {/* Second Box: Option Selection */}
        <div className="app__simulation-section">
          <motion.div
            className="app__simulation-circle"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.8, type: 'spring', stiffness: 150, delay: 0.2 }}
          >
            How can we make you happy and at ease?
          </motion.div>
          <div className="app__simulation-box app__simulation-option-box">
            <h3>Return of 5% to 10% per month</h3>
            <div 
              className={`option-box ${formData.option === 'Conservative Style' ? 'selected' : ''}`}
              onClick={() => handleOptionClick('Conservative Style')}
            >
              <p>Conservative Style</p>
            </div>

            <h3>Return of 9% to 30% per month</h3>
            <div 
              className={`option-box ${formData.option === 'Moderate Style' ? 'selected' : ''}`}
              onClick={() => handleOptionClick('Moderate Style')}
            >
              <p>Moderate Style</p>
            </div>
          </div>
        </div>

        {/* Third Box: Personal Info */}
        <div className="app__simulation-section">
          <motion.div
            className="app__simulation-circle"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.8, type: 'spring', stiffness: 150, delay: 0.4 }}
          >
            We want to create a personalized wallet for you
          </motion.div>
          <div className="app__simulation-box">
            <h3>Personal Information:</h3>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number (e.g., +491234567890)"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
            <label>
              First time trading?
              <select
                name="firstTimeTrading"
                value={formData.firstTimeTrading}
                onChange={handleInputChange}
                required
              >
                <option value="">Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </label>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <motion.button
        type="submit"
        onClick={handleSubmit}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: 'spring', stiffness: 200 }}
        className="app__simulation-submit"
      >
        Ready! I want to know the best wallet for me
      </motion.button>

      {/* Thank You Message */}
      {thankYouMessage && (
        <motion.div 
          className="thank-you-message"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5 }}
        >
          {thankYouMessage}
        </motion.div>
      )}

      {/* Error Message */}
      {errorMessage && (
        <motion.div 
          className="error-message"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5 }}
        >
          {errorMessage}
        </motion.div>
      )}
    </div>
  );
}

export default Simulation;
