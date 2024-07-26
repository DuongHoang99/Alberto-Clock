import React from 'react';
import './PricingTable.css';

const PricingTable2 = () => {
  return (
    <div className='pricing-table'>
      <div className='pricing-column'>
        <div className='pricing-header'>
          <h3>Brand Level C</h3>
        
          <p className='price'>$30</p>
          <hr style={{color:'black'}}/>
          <p>Brand Application : Doxa, Rado, Longines, Frederique Constant, Movado, Gucci, Tudor, Montblanc, Eterna, Raymond Weil, Nomos, Dior , Maurice Laroix,…</p>
        </div>
        <ul className='features'>
      
          <li>Polishing case : 30$</li>
          <li>Polishing bracelet : 30$</li>
          <li>Full polishing service : 70$</li>
        </ul>
    
      </div>

      <div className='pricing-column'>
        <div className='pricing-header'>
          <h3>Brand Level D</h3>
          <p className='price'>$40</p>
          <hr style={{color:'black'}}/>
          <p>Brand Application : Hublot, Rolex, Omega, Cartier, Tag Heuer, Iwc, Grand Seiko, Panerai, Credor, Breitling, Corum, Glashutte, Baume&Mercier, Chopard,…</p>
        </div>
        <ul className='features'>
          
          <li>Polishing case : 40$ - 70$</li>
          <li>Polishing bracelet : 40$ - 70$</li>
          <li>Full polishing service :70$ - 100$</li>
        </ul>
      </div>

      
    </div>
  );
};

export default PricingTable2;