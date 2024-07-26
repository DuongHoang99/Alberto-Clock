import React, { useState } from 'react';
import './CustomerFeedback.css';

import SlideReturn from '../RetunPolicy/SlideReturn.js';



export default function CustomerFeedback() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('We have received your feedback');
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      phone: '',
      email: '',
      message: ''
    });
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      message: ''
    });
  };

  return (
    <div>
      <div className='container' style={{ paddingTop: '30px' }}>
        <SlideReturn  />
      </div>
      <div className='form-container'>
        <div className='form-section'>
          <h1>Customer Feedback</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label className='form-label'>Name</label>
              <input
                className='form-control'
                required
                placeholder='Name'
                name='name'
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className='form-label'>Phone Number</label>
              <input
                className='form-control'
                required
                placeholder='Phone'
                name='phone'
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className='form-label'>Email</label>
              <input
                className='form-control'
                required
                placeholder='Email'
                name='email'
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className='form-label'>Description</label>
              <textarea
                style={{ height: '120px' }}
                className='form-control'
                required
                placeholder='Message'
                name='message'
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <div>
              <button type='submit' className='form-button'>Submit</button>
              <button type='button' className='form-button' onClick={handleReset}>Reset</button>
            </div>
</form>
        </div>
        <div className='contact-section'>
          <h2>Contact Information</h2>
          <p>If you have any questions or need further assistance, please contact us:</p>
          <ul style={{textAlign:'left'}}>
            <li>Phone: (123) 456-7890</li>
            <li>Email: support@albertoclock.com</li>
            <li>Address: 123 Alberto Clock Street, City, Country</li>
          </ul>
          <h2>Why Your Feedback Matters</h2>
          <p style={{textAlign:'left'}}>At Alberto Clock, we value your feedback as it helps us improve our products and services. Your input is crucial in ensuring that we continue to meet your expectations and provide the best possible experience.</p>
          <h2>Benefits of Providing Feedback</h2>
          <ul style={{textAlign:'left'}}>
            <li>Help us understand your needs and preferences</li>
            <li>Improve our customer service</li>
            <li>Enhance the quality of our products</li>
            <li>Contribute to the development of new features and services</li>
          </ul>
          <p>We appreciate your time and effort in providing feedback and look forward to serving you better.</p>
        </div>
      </div>
    </div>
  );
}