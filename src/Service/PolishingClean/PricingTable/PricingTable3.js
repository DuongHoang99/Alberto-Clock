import React from 'react';
import './PricingTable.css';

const PricingTable3 = () => {
  return (
    <div className='pricing-table'>
      <div className='pricing-column'>
        <div className='pricing-header'>
          <h3>Brand Level E</h3>
         
          <p className='price'>$70</p>
          <hr style={{color:'black'}}/>
          <p>Brand Application : Patek Philippe, Jaeger Lecoultre, A.Lange & Sohne, Piguet, Vacheron Constaintin, Girard-Perre, Breguet, Blancpain, Zenith, Richard Mille,…</p>
        </div>
        <ul className='features'>
          
          <li>Polishing  : 70$</li>
          
          <li>Polishing bracelet : 70$ - 100$</li>
          
          <li>Full polishing service : 100$ - 150$</li>
        </ul>
    
      </div>

      
    </div>
  );
};

export default PricingTable3;