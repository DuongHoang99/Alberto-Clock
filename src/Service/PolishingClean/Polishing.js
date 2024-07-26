import React from 'react';
import PricingTable from './PricingTable/PricingTable';
import PricingTable2 from './PricingTable/PricingTable2';
import PricingTable3 from './PricingTable/PricingTable3';
import hinh3 from './imagePolishing/z5654334237045_e00ae638f5330004d1f46889777bfab6.jpg'
import SlidePolish from './SlidePolish';




export default function PolishingCleaning() {
  return (
    
    <div className='container'>
      <div style={{paddingTop:'30px'}}>
    <SlidePolish/>
    </div>
      <h1 style={{paddingTop:'20px',color:'red', textAlign:"center"}}>Polishing and Cleaning Service</h1>
<hr/>
    <div style={{paddingLeft:"300px"}}>
      <img src={hinh3} style={{marginLeft:"-126px"}}/>
      </div>
      <hr/>
      <h1 style={{color:'red', textAlign:"center"}}>Price list for watch polishing services</h1>
      <PricingTable/>
      <PricingTable2/> 
      <PricingTable3/>  
      
      
    </div>
  );
}