import Product1 from './Product1.js';
import './Technology.css';
import hinh1 from './imagetechclass/classic1.png'
import hinh2 from './imagetechclass/classic2.jpg'
import data from './datatech1.json';

export default function TechClassic() {
    return (
        <div className='container'>
            <h3>Technology Of ClassicWatch</h3>
            <hr />
            <h4>What is Quartz ?</h4>


            <div className="flex">

                <div className="image">
                    <img src={hinh1} />
                </div>
                <div >
                    Quartz technology in watches uses a quartz crystal to maintain accurate time.<br /> When an electric current passes through the crystal, it vibrates at a stable frequency.<br /> These vibrations are used to regulate the watch's timekeeping, making quartz watches highly accurate and low-maintenance.<br /> They are popular for their affordability and reliability, though they require periodic battery replacements.<br />

                </div>

            </div>
            <hr />
            <h4>Configuration to create a quartz clock</h4>

            <div className='flex'>
                <div className='image' ><img src={hinh2} style={{width:"100%"}} /></div>
                <div className='text'  >
                    1. The battery.<br />
                    2. Electric pedal motor.<br />
                    3. Microchip. (Chip)<br />
                    4. Circuit board connects microcircuits and other components.<br />
                    5. Quartz crystal.<br />
                    6.Time setting adjustment knob.<br />
                    7. Speed ​adjustment gear.<br />
                    8. Central shaft for needle attachment.
                </div>




            </div>
            <hr />
            <div>
                <h4>Respective Products</h4>
                <div className="row mt-5">
                {
                    data.map(item => (
                        <div className="col-sm-6 col-md-3"> 
                        <Product1 pict={item.pict} pict2={item.pict2} id={item.id} name={item.name} gender={item.gender}price={item.price}/></div>
                    ))
                }
                

            </div>
            </div>

        </div>
    );
}