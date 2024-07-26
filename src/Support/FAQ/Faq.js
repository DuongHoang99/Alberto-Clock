import React, { useState } from 'react';
import './Faq.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const AccordionItem = ({ title, content, isOpen, onToggle }) => {
  return (
    <div className='container'>
    <div className='accordion-item '>
      
      <div className='accordion-header' onClick={onToggle}>
        <h2>{title}</h2>
        <FontAwesomeIcon icon={isOpen ? faAngleDown : faAngleRight} className='accordion-icon' />
      </div>
      {isOpen && <div className='accordion-content'>{content}</div>}
    </div>
    </div>
  );
};

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  const items = [
    { title: 'Why you should buy a watch at Alberto Clock ?', content: 'It is legitimate on your part to feel a little apprehensive about ordering on the internet or from another country, but we would like to assure you that your watch will reach you safely as promised. We have been in this business for a long time and have served tens of thousands of customers from around the world. With our years of experience behind us, we guarantee that you will be delighted with your purchase. We, at CreationWatches, do not just deal and do business in watches, but more than anything, we LOVE watches! It is our passion, and we put a lot of energy into it. We treat our watches with care and our customers with respect.' },
    { title: 'How will my watch be shipped?', content: 'We typically ship your watch within 1-2 days after your successful order placement. To ensure Alberto Clock can deliver your watch order quickly and smoothly, please make sure you provide us with the complete shipping address and a contact phone number where you can be reached. This is to ensure that the courier or your local postal service can reach you in case of any communication issues. If your delivery is delayed beyond 5 business days, we will make every effort to contact you.' },
    { title: 'When will you ship my oder', content: 'We typically ship your watch within 1-2 days after your successful order placement. To ensure Alberto Clock can deliver your watch order quickly and smoothly, please make sure you provide us with the complete shipping address and a contact phone number where you can be reached. This is to ensure that the courier or your local postal service can reach you in case of any communication issues. If your delivery is delayed beyond 5 business days, we will make every effort to contact you.' },
    { title: 'How can I find out if my watch has been shipped or not?', content: 'When we ship your order to you, we will send you a confirmation email along with a registered parcel reference or tracking number that you can use to check the status of the package online.' },
    { title: 'Do you offer international shipping?', content: 'We ship to all major international destinations. Please email us so we can inform you whether we can ship to your area and, if so, provide you with pricing information.' },
    { title: 'Are all watches sold by Alberto Clock authentic?', content: 'All watches sold by Alberto Clock are 100% genuine, authentic, and brand new. We do not sell used, pre-owned, counterfeit, or replica watches. Each watch is shipped in its original watch box with documentation. Thousands of customers worldwide can attest to the authenticity of our watches and our service.' },
    { title: 'What forms of payment are accepted?', content: 'We accept all major credit cards, PayPal, or Momo. Both payment methods are completely secure. PayPal is authenticated by eBay and trusted by millions, while Momo is among the leading providers of secure commercial solutions. We do not have access to your credit card number or financial information, and therefore we do not store it anywhere. Only PayPal and Momo have that information to process payments.' },
    { title: 'I want to exchange my watch. What do I need to do?', content: 'Please refer to our return and policy for more information. You can also email us to inquire.' },
    { title: 'How do I know your website is sercure', content: '- Our website is secured with strong SSL certification and uses the latest encryption to protect your data and browsing. Our website is also continuously monitored by Sucuri Security. All payments are processed securely either through PayPal or Braintree - both of which are industry leading payment technologies with topmost security.' },
  ];

  return (
    <div className='container '>
      <div>
      <h1>FAQ</h1>
      <h4>What do you think ?</h4>
      <p className='highlight'>You may have questions before shopping or placing an order. <br/>

      We are here to help. <br/>

      You can talk to a customer service agent or contact us. But why not first see if your question is answered below. <br/>

      Here are some of the most frequently asked questions we receive from customers before we ship their watches</p>
      <hr/> 
      </div>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
       
    </div>
    
  );
};

export default Accordion;