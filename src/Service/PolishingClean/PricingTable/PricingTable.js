import React from 'react';
import './PricingTable.css'; // Import CSS nếu cần thiết

const PricingTable = () => {
  return (
    <div className='pricing-table'>
      <div className='pricing-column'>
        <div className='pricing-header'>
          <h3>Brand Level A</h3>
          <p className='price'>$10</p>
          <hr style={{color:'black'}}/>
          <p>Brand Application :SR Watch, Casio, OP, Daniel Wellington, Skagen, Fossil, Pulsar, Romanson, Anne Klein, Daniel Klein, Titan, Guess, Invicta,…</p>
        </div>
        <ul className='features'>
          <li>Polishing sapphire crystal : 10$</li>
          <li>Polishing case : 10$</li>
          <li>Polishing bracelet : 10$</li>
          <li>Full polishing service : 25$</li>
        </ul>
    
      </div>

      <div className='pricing-column'>
        <div className='pricing-header'>
          <h3>Brand Level B</h3>
          <p className='price'>$20</p>
          <hr style={{color:'black'}}/>
          <p>Brand Application :Bulova, Citizen, Calvin Klein, Orient, Seiko, Michael Kors, Adriatica, Rotary, Candino,…</p>
        </div>
        <ul className='features'>
          <li>Polishing sapphire crystal : 10$</li>
          <li>Polishing case : 15$ - 20$</li>
          <li>Polishing bracelet : 15$ - 20$</li>
          <li>Full polishing service : 30$ - 40$</li>
        </ul>
      </div>

      
    </div>
  );
};

export default PricingTable;