import React from 'react';
import './Warranty.css';
import Warranty2 from './Warranty2';
import hinh from "./imageWarranty/hinh2.jpg";
import SlideWarranty from './SlideWarranty';


export default function Warranty() {
  return (
    
    <div className='container'>
            <div style={{paddingTop:'30px'}}>
        <SlideWarranty/>
        
      </div>

      <h1>Warranty Service</h1>
      <div className='container'><Warranty2/></div>
      <p><h2>Warranty terms and conditions</h2>
        <ul className='custom-list'>
          <li>
            Conditions for Warranty
            Warranty is valid only when the watch is accompanied by the Manufacturer's Warranty Card and the Warranty Card from Alberto Clock, filled out accurately and completely.
            The Warranty Card must be intact, without tears, patches, stains, or fading.
            Valid within the warranty period. The warranty period is calculated from the purchase date as recorded on the Warranty Card.
            Only replacement of damaged components and parts is covered — not replacement with a different watch.
          </li>
          <li>
            Conditions NOT Covered by Warranty
            Watches without the Manufacturer's Warranty Card and the Warranty Card from Alberto Clock.
            Damage to strap, buckle, case, bracelet color, dial, or crystal due to improper use, accidents, natural wear and tear, impact, etc., during use.
            Damage resulting indirectly from improper use according to the manufacturer's instructions accompanying the watch.
            Scratches on bracelet or crystal caused by abrasion or breakage during use.
            Unauthorized internal modification, opening, or repair during the warranty period — at locations not authorized by the manufacturer.
          </li>
        </ul>
      </p>
      <div>
        <img src={hinh}/>
      </div>

    

      
    </div>
  );
}