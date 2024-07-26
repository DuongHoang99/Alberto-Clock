import React, { useState } from 'react';
import './Contactus.css';





export default function ContactUs() {
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
    <>
    
      <div className='container' style={{ paddingTop: '30px' }}>
        
      
      <div className='form-container'>
        <div className='form-section'>
          <h1>CONTACT US</h1>
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
            <li>Phone: (036) 355-5597</li>
            <li>Email: support@albertoclock.com</li>
            <li>Address: 590 Cach Mang Thang 8, district 3, Ho Chi Minh City</li>
          </ul> 
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.323791400349!2d106.6662497!3d10.786494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ecb37e59e33%3A0xfe7c4d9f94f9e079!2zNTkwIMSQLiBDw6FjaCBN4bqhbmcgVGjDoW5nIDgsIFBoxrDhu51uZyAxMSwgUXXhuq1uIDMsIEjhu5MgQ2jDrSBNaW5oIDcwMDAwMA!5e0!3m2!1sen!2s!4v1721893333515!5m2!1sen!2s" width="500px" height="250px" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          
    </div>
   
</div>

        </div>
        
   
    
    </>
  );
}