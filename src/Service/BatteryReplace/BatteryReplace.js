import React from 'react';
import './BatterryReplace.css';
import anhnen2 from './Images/anhnen2.jpg'
import anhnenbatt from './Images/anhnen.jpg';
import banggia from './Images/banggia.jpg';
import step from './Images/step.jpg'
export default function BatteryReplace() {
  return (
    <>
    <div className='container'>
    
    <img src={anhnenbatt} style={{width:"100%"}} />
    
    <h2 style={{color:'gray',paddingTop:'20px', textAlign:"center"}}>Official Watch Battery Replacement at Alberto Clock</h2>
    <div className='container2'>
     
      
      <div className='image' ><img  src={anhnen2} /></div>
      <div className='text' >✓ Free comprehensive consultation and assessment. <br/>
✓ Free labor for battery replacement, only pay for the battery. <br/>
✓ Quick service, can be done on the spot without long waiting times. <br/>
✓ Battery replacements meet international quality standards: Renata (Switzerland). <br/>
✓ 12-month battery warranty. <br/>
✓ Free gasket cleaning and case back cleaning. <br/>
✓ Water resistance testing for watches. <br/>
✓ Guidance on watch usage after battery replacement.</div>
 

</div>
    </div>
    <div className='container'>
    <div className='list-container'>
    <h3 style={{color:'gray',textAlign:"center"}}>
      <hr className='custom-hr'/>
    How many types of watch batteries are there?
    </h3> 
    <p style={{fontFamily:'monospace'}}>
    <ul className='custom-list'><p style={{textAlign:'left'}}>1.Origins:</p>
    <li>Japanese Brands: The top Japanese brands currently are Maxell, Sony, and Panasonic.</li>
    <li>Swiss Brand: Renata is a notable Swiss battery brand.</li>
    <li>American Brand: Energizer originates from the United States.</li>
    </ul>
    <ul className='custom-list'><p style={{textAlign:'left'}}>2.Types of Batteries:</p>
    <li>Carbon Batteries: These are the most common due to their easy production, low cost, and suitability for various watch types. They typically have an average lifespan of 2 years.</li>
    <li>Alkaline Batteries: These high-quality batteries are more expensive and are used primarily in specialized and high-end watches from renowned brands. They often have a lifespan of 5 years or longer.</li>
    <li>Rechargeable Batteries: These batteries can receive energy from external sources such as electric fields, kinetic movement, or light. They are designed for special watch types like Solar, Eco-drive, Kinetic, and Smartwatches.</li>
    </ul>
   <p className='custom-list' style={{textAlign:'left'}}> 3. Caution Regarding Counterfeit Products:
    The prevalence of counterfeit and imitation batteries in the market is increasing, making it difficult to identify genuine products. At Alberto Clock, customers can rest assured with genuine Maxell batteries, backed by a 12-month warranty, ensuring the best watch-using experience.</p> <br/>
  </p>
  <h3 style={{color:'gray'}}>PRICE LIST FOR WATCH BATTERY REPLACEMENT AT ALBERTO CLOCK</h3>
  <div className='image2'>
    <img src={banggia}/>

  </div>
  <hr/>
  <h3 style={{color:'gray'}}>THE PROCESS OF REPLACING A BATTERY AT ALBERTO CLOCK</h3>
  <div className='image2'>
    <img src={step}/>

  </div>
  <hr/>
  <h3 style={{color:'gray'}}>Alberto Clock Repair and Warranty Center Network</h3>
  <div>
    <div >
    <p>Alberto Clock provides warranty and repair services for all watch brands according to Swiss standards. Customers can contact Alberto Clock at the following address: </p>
      
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4660.899028479244!2d106.66581143948834!3d10.78576551364705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ed23c80767d%3A0x5a981a5efee9fd7d!2zNTkwIMSQLiBDw6FjaCBN4bqhbmcgVGjDoW5nIDgsIFBoxrDhu51uZyAxMSwgUXXhuq1uIDMsIEjhu5MgQ2jDrSBNaW5oIDcwMDAw!5e0!3m2!1sen!2s!4v1721552719854!5m2!1sen!2s" className='map' style={{border:"0"}}
     allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" ></iframe>
    </div> 
    

  </div>


    </div>
    </div>
    
    </>
  );
}