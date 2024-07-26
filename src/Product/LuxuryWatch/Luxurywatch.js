import React from "react";
import data from './DataLux.json'    
import './LuxuryWatch.css';
import SlideshowLux from './SlideshowLux.js';
import dwintro from './images/dong-ho-daniel-wellington-iconic-link.avif';
import seikointro from './images/dong-ho-seiko-chinh-hang-mo-ban-phien-ban-ky-niem.avif';
import sagaintro from './imagesSlideLux/saga4.avif'
import ProductLux from '../LuxuryWatch/ProductLux.js';
    

  
export default function LuxuryWatch(params) {

    return (
        <div className="container">
            <h4>Luxury Watch Models</h4>
            <div className="introlux"><p ><span>W</span> elcome to Alberto Clock, your premier destination for exquisite timepieces that blend luxury with impeccable craftsmanship. We take pride in offering a curated selection of three distinguished brands: Saga, Daniel Wellington, and Seiko. Discover the allure of Saga, Daniel Wellington, and Seiko watches at Alberto Clock. Our knowledgeable staff awaits to assist you in finding the perfect timepiece that matches your style and sophistication. Experience the artistry and precision that define these esteemed brands firsthand at our store today.</p></div>
            <SlideshowLux />
            <hr style={{marginTop:"50px"}} />
            <h4 style={{ marginTop: "50px", color: "gray" }}>Daniel Wellington watches</h4>
            <div className="introsp">

                <img src={dwintro} />
                <p>Daniel Wellington watches embody a sophisticated blend of minimalism and contemporary style. Known for their clean dials and interchangeable straps, each timepiece exudes a sense of refined elegance suitable for any occasion. Whether you prefer the classic sophistication of the Dapper collection or the modern simplicity of the Iconic Link series, Daniel Wellington offers a watch to complement every personal style.    </p>

                <h4 style={{ marginTop: "50px", color: "gray" }}>Seiko watches</h4>
                <img src={seikointro} />
                <p>Seiko stands as a beacon of Japanese horological excellence. With a legacy spanning decades, Seiko watches blend traditional craftsmanship with cutting-edge technology. Whether you're captivated by the precision of their mechanical movements or the innovation of their Solar and Kinetic collections, Seiko watches promise reliability, durability, and uncompromising performance.</p>
                <h4 style={{ marginTop: "50px", color: "gray" }}>Saga watches</h4>
                <img src={sagaintro} style={{width:"1050px", height:"900px", borderRadius:"5%"}} />
                <p>Saga watches epitomize elegance and precision. With meticulous attention to detail and a commitment to quality, Saga timepieces exude sophistication and style. Whether you're drawn to their classic designs or innovative complications, Saga watches are crafted to accompany you on every occasion with grace and distinction.</p>
            </div>
            <hr style={{marginTop:"50px"}} />
            <h4>Products</h4>
            <div className="row mt-5">
                {
                    data.map(item => (
                        <div className="col-sm-6 col-md-3"> 
                        <ProductLux pict={item.pict} pict2={item.pict2} id={item.id} name={item.name} gender={item.gender}price={item.price}/></div>
                    ))
                }
                

            </div>

        </div>
    );


}