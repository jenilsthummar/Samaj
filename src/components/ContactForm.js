import React, { useState } from 'react';
import '../style/ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;
  
    if (name === 'name') {
      // Allow only alphabets and spaces
      newValue = value.replace(/[^A-Za-z\s]/gi, '');
    } else if (name === 'contact') {
      // Allow only numbers and limit input to 10 digits
      newValue = value.replace(/\D/g, '').slice(0, 10);
    }
  
    setFormData(prevState => ({
      ...prevState,
      [name]: newValue
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form fields
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    if (!formData.contact.trim()) {
      errors.contact = 'Contact information is required';
    }
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }

    if (Object.keys(errors).length === 0) {
      // Form is valid, submit data or perform further actions
      console.log('Form submitted:', formData);
      // Reset form after submission
      setFormData({
        name: '',
        contact: '',
        message: ''
      });
      setErrors({});
    } else {
      // Form is invalid, display errors
      setErrors(errors);
    }
  };

  return (
    <div className="contact-container">
      <h2>Contact Form</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder='Enter Your Name'
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="contact">Mobile Number:</label>
          <input
            type="text"
            id="contact"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            required
            placeholder='Enter Your Mobile Number'
          />
          {errors.contact && <span className="error">{errors.contact}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder='Type A Message'
          />
          {errors.message && <span className="error">{errors.message}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
