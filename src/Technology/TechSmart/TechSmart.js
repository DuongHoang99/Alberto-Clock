import "./TechSmart.css";
import Product2 from "./Product2.js"
import data2 from "./datatech2.json"
import hinh from "./hinh.jpg"
export default function TechSmart(){
    return(
        <div className="container">
            <h3>Technology Of SmartWatch</h3>
            <hr />
            <div className="flex">
                <div className="image"><img src={hinh}/></div>
                <div >
                <ul>Smartwatches incorporate several advanced technologies, including:</ul>
                <li>Touchscreen Displays: High-resolution, often OLED or AMOLED</li>
                <li>Sensors: Track physical activity, heart rate, and other health metrics</li>
                <li>GPS: For location tracking and navigation</li>
                <li>Bluetooth and Wi-Fi: For syncing with smartphones</li>
                <li>NFC: For contactless payments</li>
                <li>Operating Systems: Like watchOS, Wear OS, and Tizen</li>
                <li>Voice Assistants: Integration with Siri, Google Assistant, and Alexa</li>
                <li>Water Resistance: Often rated for swimming</li>
                <li>Battery Technology: Advanced management and wireless charging</li>
                <li>Health Monitoring: Features like ECG and sleep tracking</li>
                <li>Notifications and Alerts: For calls, messages, and apps</li>
                <li>Music and Media: Storage and streaming capabilities</li>
                <li>Customization: Interchangeable watch faces and bands</li>
                </div>
            </div>
            <hr/>
            <div>
            <div>
                <h4>Product Of SmartWatch </h4>
                <div className="row mt-5">
                {
                    data2.map(item => (
                        <div className="col-sm-6 col-md-3"> 
                        <Product2 pict={item.pict} pict2={item.pict2} id={item.id} name={item.name} gender={item.gender}price={item.price}/></div>
                    ))
                }
                
            </div>
            </div>
        </div>
        </div>
    )
}