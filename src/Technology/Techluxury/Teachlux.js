import './TechLux.css'
import data3 from './data3.json'
import Product3 from './Product3.js'
import hinh from './luxury.jpg'
export default function TechLux(){
    return(
        <div className='container'>
           <h3>Technology Of LuxuryWatch</h3>
           <div className='flex'>
            <div ><img src={hinh} style={{width:"900px", marginLeft:"-90px"}} /></div>
            <div className='text'>
                <ul></ul>
                <li>Mechanical Movements: Includes manual winding and automatic (self-winding) movements.</li>
                <li>High-Precision Components: Features like tourbillon, perpetual calendar, minute repeater, split-seconds chronograph, and moon phase.</li>
                <li>Premium Materials: Use of gold, platinum, titanium, ceramics, and precious stones.</li>
                <li>Advanced Complications: World time, power reserve indicator, and equation of time.</li>
                <li>Durability Innovations: Shock absorption, magnetic resistance, and high water resistance.</li>
                <li>Aesthetic Enhancements: Skeletonized designs, hand-engraving, and unique dials and cases with artistic techniques.</li>
            </div>
        
           </div>
           <hr/>
           <div>
           <h4>Product Of LuxuryWatch </h4>
           <div className="row mt-5">
                {
                    data3.map(item => (
                        <div className="col-sm-6 col-md-3"> 
                        <Product3 pict={item.pict} pict2={item.pict2} id={item.id} name={item.name} gender={item.gender}price={item.price}/></div>
                    ))
                }
                
            </div>
            
           </div>
        </div>
    )
}