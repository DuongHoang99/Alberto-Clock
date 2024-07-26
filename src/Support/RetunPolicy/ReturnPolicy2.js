import React from "react";

import './ReturnPolicy2.css'; // Import CSS cho ReturnPolicy2
import hinh from '../RetunPolicy/imgReturn/return2.jpg';



export default function ReturnPolicy2() {
    return (
        <div className='return-policy-container'>
            <img src={hinh} style={{width:"300px", height:"220px", marginTop:"30px"}} />
            <div className='return-policy-text'>
                <h2>FREE EXCHANGE FOR 7 DAYS</h2>
                <p>
                    Free Exchange Policy for 7 Days

                    At Alberto Clock, we always strive to display and describe each watch as realistically and in as much detail as possible.<br/>
                     We are sorry and understand that sometimes the product you receive may not meet your expectations.<br/>

                    Therefore, we offer a completely FREE 7-day exchange period, allowing you the freedom to find the most satisfactory watch for yourself when purchasing at Alberto Clock.<br/>

                    Alberto Clock's exchange policy applies to customers shopping online or offline at our store network:<br/>

                    – Customers purchasing online can exchange products directly at any Alberto Clock store nationwide or via postal service.<br/>

                    – Customers purchasing in-store should exchange products directly at the original store of purchase.







                </p>
            </div>
        </div>
    );
}