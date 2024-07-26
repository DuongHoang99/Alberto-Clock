import React from 'react';

import ReturnPolicy2 from './ReturnPolicy2';
  
import SlideReturn from './SlideReturn.js';




export default function RetunPolicy() {
  return (
    <div className='container'>
      <div style={{paddingTop:'30px'}}>
        <SlideReturn />
        
      </div>
      
      <h1>Return Polsicy at Alberto Clock</h1>
      <div className='container' style={{textAlign:'left',paddingLeft:'30px'}}>
          At Alberto Clock, we always strive to display and describe each watch as realistically and in as much detail as possible. We regret and understand that sometimes the product you receive may not meet your expectations.<br/>
          Therefore, we offer a completely FREE 7-day exchange policy so you can freely find the most satisfactory watch for yourself when shopping at Alberto Clock. <br/>
          Alberto Clock's exchange policy applies to customers shopping both online and offline at our store system.<br/>
            <li>Customers who purchase online can exchange products directly at Alberto Clock stores nationwide or via postal service.</li>
            <li>Customers who purchase in-store are kindly requested to exchange products directly at the original store of purchase.</li>
      </div> <br/>

      <div className='container' style={{textAlign:'left'}} >
      Within 7 days from the date of purchase at Alberto Clock, customers can request a free exchange. The 7-day period is calculated based on the postmark date when the customer sends the product back to us or the time we receive the customer's direct request (in-store).<br/> <hr/>
      <ReturnPolicy2/>

    
      <h4>PLEASE NOTE</h4>
             <li>Watches that have been purchased can be exchanged within 7 days if they are in 100% new condition. Only one exchange is allowed (for an item of equal or higher value), and used products can only be exchanged if there is a manufacturer defect.</li> <br/>       
      </div>

      <div className='container' style={{textAlign:'left'}}>
      <h4>CONDITIONS FOR PRODUCT EXCHANGE</h4>
      Please carefully read the terms outlined in our exchange policy to ensure that the product for exchange meets all of the following conditions:
      <li>The watch must be unused and still have the protective adhesive layer intact.</li>
      <li>The watch must be free of any scratches, the leather strap must be unworn, and there must be no signs of wear.</li>
      <li>All parts, components, accessories, instruction manuals, technical documents, and any accompanying gifts (if any) must be complete and show no signs of use.</li>
      <li>The product box and packaging must be intact, not dented, torn, or discolored.</li>
      <li>Exchange requests must be made within 7 days from the date you receive the product.</li>
      </div>
    </div>
  );
}