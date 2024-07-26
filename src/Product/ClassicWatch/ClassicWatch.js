import './ClassicWatch.css';
import casio from '../ClassicWatch/ImagesClassic/casio.avif';
import citizen from '../ClassicWatch/ImagesClassic/citizen.avif';
import koi from '../ClassicWatch/ImagesClassic/koi.avif';
import gshock from '../ClassicWatch/ImagesClassic/gshock.avif';
import orient from '../ClassicWatch/ImagesClassic/orient.avif'; 
import srwatch from '../ClassicWatch/ImagesClassic/srwatch.avif';
import SlideShowClas from './SlideClassicwatch';
import data2 from './Dataclass.json';
import Productclass from './ProductClassic';
export default function ClassicWatch() {
    return(
        <div className="container">
            <h4>Classic Watch Models</h4>
            <div className="introclas">
                <p><span>A</span>lberto Clock offers an exquisite selection of renowned watch brands, catering to diverse tastes and preferences.At Alberto Clock, we pride ourselves on offering a curated selection of these distinguished watch brands, ensuring that every customer finds a timepiece that matches your style and needs. The following are the watch models on display at Alberto Clock.</p>
            </div>
            <SlideShowClas />
            <hr style={{marginTop:"50px"}}/>
            <h4 style={{color:'gray'}} >Classic Watch</h4>
            <div className='introclas'>
            <img src={casio} style={{ width:"540px", height:"315px"}}/>
            <p><span>C</span>asio watches are celebrated for their reliability and innovation. From the iconic G-Shock series, designed for durability and functionality in extreme conditions, to stylish everyday timepieces, Casio caters to both adventurers and fashion-conscious individuals alike.</p>
            </div>
            <div className='introclas'>
                <p><span>C</span>itizen exemplifies precision craftsmanship and sustainability with its Eco-Drive technology. Harnessing the power of light, Eco-Drive watches are eco-friendly and never need a battery change. Citizen watches combine classic elegance with cutting-edge technology, making them a timeless choice.</p>
                <img src={citizen}  style={{ width:"540px", height:"315px"}}/>
            </div>
            <div className='introclas'>
                <img src={koi} style={{ width:"540px", height:"315px"}} />
                <p><span>K</span>OI watches represent a fusion of artistry and luxury. Each KOI timepiece is a testament to meticulous craftsmanship and attention to detail. With unique designs that appeal to collectors and enthusiasts, KOI watches embody sophistication and exclusivity.</p>
                </div>
            <div className='introclas'>
                <p><span>G</span>-Shock, a standout brand under Casio, is synonymous with toughness and resilience. Ideal for sports and outdoor activities, G-Shock watches are engineered to withstand shocks, vibrations, and water pressure. Their robust designs and advanced features make them a favorite among adventurers and athletes.
                </p>
                <img src={gshock}  style={{ width:"540px", height:"315px"}} />
            </div>
            <div className='introclas'>
                <img src={orient} style={{ width:"540px", height:"315px"}} />
                <p><span>O</span>rient watches are admired for their mechanical precision and timeless appeal. With a rich heritage in watchmaking, Orient blends traditional craftsmanship with contemporary designs. Each Orient timepiece reflects a commitment to quality and innovation, appealing to discerning watch enthusiasts.</p>
            </div>
            <div className='introclas'>
                <p><span>S</span>R Watch offers a blend of elegance and functionality. Known for their stylish designs and reliable performance, SR watches cater to individuals seeking sophistication and practicality in their timepieces.</p>
                <img src={srwatch} style={{ width:"540px", height:"315px"}} />

            </div>
            <hr style={{marginTop:"50px"}} />
            <h4>Products</h4>
            <div className="row mt-5">
                {
                    data2.map(item => (
                        <div className="col-sm-6 col-md-3"> 
                        <Productclass pict={item.pict} pict2={item.pict2} id={item.id} name={item.name} gender={item.gender}price={item.price}/></div>
                    ))
                }
                

            </div>
        </div>
    );
    
}