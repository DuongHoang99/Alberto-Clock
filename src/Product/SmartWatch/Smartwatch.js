import apple from './imagesSmart/apple2.jpg'
import samsung from './imagesSmart/samsung.jpg'
import ProductSmart from './ProductSmart';
import data3 from './datasmart.json'
import './SmartWatch.css';
export default function SmartWatch(params) {
    return (
        <>
        <div className='container'>
            <h4>SmartWatch</h4>
            <div className='introsmart'>
                <p><span>A</span>t Alberto Clock stores, you can discover a sophisticated range of smartwatches that blend style with cutting-edge technology. These smartwatches are designed to cater to diverse needs, offering features such as fitness tracking, heart rate monitoring, and seamless connectivity with smartphones. Each watch combines sleek aesthetics with robust functionality, making them ideal companions for both fitness enthusiasts and tech-savvy individuals. Whether you're looking for a watch to track your workouts, manage your schedule, or stay connected with notifications, Alberto Clock offers a curated selection that ensures you find the perfect smartwatch to complement your lifestyle.</p>
                
            </div>
            <hr style={{marginTop:"50px"}} />
            
            <div className='introsp'>
            <h3>Applewatch </h3>
                <p><span>T</span>he Apple smartwatch, known as the Apple Watch, represents the pinnacle of wearable technology. Designed with precision and elegance, it seamlessly integrates into the Apple ecosystem, offering a host of features that enhance daily life. The Apple Watch combines the functionality of a fitness tracker, heart rate monitor, and communication device into a single, compact device worn on the wrist. With its retina display and customizable watch faces, users can personalize their experience to match their style and needs. It not only keeps track of physical activity and health metrics but also provides instant access to messages, calls, and apps. With innovations like Siri integration for voice commands and Apple Pay for convenient transactions, the Apple Watch has redefined what a smartwatch can do, making it an essential companion for modern living.
                </p>
               <img src={apple} style={{width:"1050px", height:"525px"}} />
               <hr style={{marginTop:"50px"}} />
               <h3>Samsung Smartwatch</h3>
               <p><span>T</span>he Apple smartwatch, known as the Apple Watch, represents the pinnacle of wearable technology. Designed with precision and elegance, it seamlessly integrates into the Apple ecosystem, offering a host of features that enhance daily life. The Apple Watch combines the functionality of a fitness tracker, heart rate monitor, and communication device into a single, compact device worn on the wrist. With its retina display and customizable watch faces, users can personalize their experience to match their style and needs. It not only keeps track of physical activity and health metrics but also provides instant access to messages, calls, and apps. With innovations like Siri integration for voice commands and Apple Pay for convenient transactions, the Apple Watch has redefined what a smartwatch can do, making it an essential companion for modern living.</p>
               <img src={samsung} style={{width:"1050px", height:"525px"}} />
            </div>
            <h4 style={{marginTop:"50px"}}>Products</h4>

        
        <div className="row mt-5">
        {
            data3.map(item => (
                <div className="col-sm-6 col-md-3"> 
                <ProductSmart pict={item.pict} pict2={item.pict2} id={item.id} name={item.name} gender={item.gender}price={item.price}/></div>
            ))
        }
        

    </div>
    </div>
    </>
    );

    
}