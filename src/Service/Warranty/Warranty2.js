import React from 'react';
import './Warranty2.css';
import icon from "../Warranty/imageWarranty/warranty3.jpg";
const Warranty2 = () => {
  const columns = [
    {
     
      text: 'INTERNATIONAL WARRANTY All watches sold at Alberto Clock come with an international warranty card from the manufacturer, which can be used at the manufacturers warranty centers in Vietnam'
    },
    {
      
      text: 'Alberto Clock provides an exclusive warranty policy of up to 5 years to help customers feel secure throughout the process of using the product.'
    },
    {
      
      text: 'Alberto Clock Warranty Center is equipped with 100% specialized machinery imported from Switzerland, genuine components, and methodical procedures.'
    }
  ];

  return (
    <div className="Warranty2">
      <div className='column'>
        <img src={icon} className='icon' />
        <p>INTERNATIONAL WARRANTY All watches sold at Alberto Clock come with an international warranty card from the manufacturer, which can be used at the manufacturers warranty centers in Vietnam.</p>
      </div>
      <div className='column'>
        <img src={icon}  className='icon' />
        <p>'Alberto Clock provides an exclusive warranty policy of up to 5 years to help customers feel secure throughout the process of using the product.</p>
      </div>
      <div className='column'>
        <img src={icon}  className='icon' />
        <p>Alberto Clock Warranty Center is equipped with 100% specialized machinery imported from Switzerland, genuine components, and methodical procedures.</p>
      </div>
    </div>
  );
};

export default Warranty2;