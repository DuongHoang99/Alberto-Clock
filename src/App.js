import { Route, Routes, Link, Outlet } from 'react-router-dom';
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";

import LuxuryWatch from './Product/LuxuryWatch/Luxurywatch';  

import './App.css';
import './Product/LuxuryWatch/LuxuryWatch.css'
import './Product/ClassicWatch/ClassicWatch.css'
import AboutUs from './AboutUs/AboutUs';
import ClassicWatch from '../src/Product/ClassicWatch/ClassicWatch';
import SmartWatch from './Product/SmartWatch/Smartwatch.js';
import BatteryReplace from './Service/BatteryReplace/BatteryReplace.js';
import PolishingCleaning from './Service/PolishingClean/Polishing.js';
import Warranty from './Service/Warranty/Warranty.js';
import RetunPolicy from './Support/RetunPolicy/RetunPolicy.js';
import CustomerFeedback from './Support/CustomerFeed/CustomerFeedback.js';
import hoang from '../src/imagehomepage/hoang.png';
import trieu from '../src/imagehomepage/trieu.png';
import long from '../src/imagehomepage/long2.png';
import logo from '../src/homepage/imagehome/logo.jpg';
import Homepage from './homepage/Home.js';
import ContactUs from './Contactus/Contactus.js';
import TechClassic from './Technology/Techclassic/TechClass.js';
import TechSmart from './Technology/TechSmart/TechSmart.js';
import TechLux from './Technology/Techluxury/Teachlux.js';
import Faq from './Support/FAQ/Faq.js';
import Gallery from './Gallery/Gallery.js';
import Counter from './counter.js';
function App() {


  return (
    <>

      <div className='container'>
        <nav className="navbar navbar-expand-sm " style={{ height: "50px", margin: "0px" }} >
          <div className="container-fluid">

            <div className="collapse navbar-collapse" id="collapsibleNavbar" style={{ justifyContent: "center" }}>

              <Link to="/" className='nav-link'><img src={logo} className='logohome' /></Link>

              <ul className="navbar-nav">

                <li className="nav-item">
                  <Link to="/" className='nav-link'>Home</Link>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Product</Link>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/luxurywatch">Luxury Watch</Link></li>
                    <li><Link className="dropdown-item" to="/classicwatch">Classic Watch</Link></li>
                    <li><Link className="dropdown-item" to="/smartwatch">Smart Watch</Link></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Technology</Link>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/techlux">Technology Luxury Watch</Link></li>
                    <li><Link className="dropdown-item" to="/techclass">Technology Classic Watch</Link></li>
                    <li><Link className="dropdown-item" to="/techsmart">Technology Smart Watch</Link></li>
                  </ul>
                </li>

                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Service</a>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/batterry">Battery Replace</Link></li>
                    <li><Link className="dropdown-item" to="/polishing">Polishing And Cleaning</Link></li>
                    <li><Link className="dropdown-item" to="/warranty">Waranty</Link></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link to="/gallery" className='nav-link'>Gallery</Link>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Support</a>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/return">Return Policy</Link></li>
                    <li><Link className="dropdown-item" to="/customer">Customer Feedback</Link></li>
                    <li><Link className="dropdown-item" to="/faq">FAQ</Link></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/aboutus">About Us</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contactus">Contact Us</Link>
                </li>
              </ul>
              <div>
                <Counter />
              </div>
            </div>
          </div>
        </nav>
        <hr />
      </div>
      <Routes >
        <Route path='/' element={<Homepage />}></Route>
        <Route path="/luxurywatch" element={<LuxuryWatch />} ></Route>
        <Route path="/aboutus" element={<AboutUs />}></Route>
        <Route path='/classicwatch' element={<ClassicWatch />}></Route>
        <Route path='/smartwatch' element={<SmartWatch />}></Route>
        <Route path='/techlux' element={<TechLux />} ></Route>
        <Route path='/techclass' element={<TechClassic />}></Route>
        <Route path='/techsmart' element={<TechSmart />}></Route>
        <Route path='/batterry' element={<BatteryReplace />}></Route>
        <Route path='/polishing' element={<PolishingCleaning />}></Route>
        <Route path='/warranty' element={<Warranty />}></Route>
        <Route path='/return' element={<RetunPolicy />}></Route>
        <Route path='/customer' element={<CustomerFeedback />}> </Route>
        <Route path='/faq' element={<Faq />}></Route>
        <Route path='/gallery' element={<Gallery />}></Route>
        <Route path='/contactus' element={<ContactUs />}></Route>
        <Route path='*' element={<Homepage />}></Route>
      </Routes>
      <Outlet />

      <div>

        <section className="container-fluid mt-0 outlet">




        </section>

      </div>

      <footer>
        <div className="box-3" style={{ paddingTop: "100px" }}>
          <hr />

          <div className="row" style={{ marginBottom: "20px", paddingLeft: " 400px" }}>
            <h2 className="clr-1" style={{ marginLeft: "271px", paddingBottom: "20px" }}>About Team</h2>
            <div className="col-md-3 col-sm-offset-2"  >
              <img src={hoang} style={{ borderRadius: "50%", width: "150px" }} />
              <div className="m-info">
                <p><strong>Name:</strong> Dương Hoàng </p>
                <p><strong>Student ID:</strong> T1S2402009</p>
                <p><strong>Email:</strong> duonghoang992504@gmail.com </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-offset-2" >
              <img src={trieu} style={{ borderRadius: "50%", width: "150px" }} />
              <div className="m-info">
                <p><strong>Name:</strong>Nguyễn Hải Triều </p>
                <p><strong>Student ID:</strong>T1S2402013
                </p>
                <p><strong>Email:</strong> trieunguyen3598@gmail.com </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-offset-2" >
              <img src={long} style={{ borderRadius: "50%", width: "150px" }} />
              <div className="m-info">
                <p><strong>Name:</strong>Trần Phi Long </p>
                <p><strong>Student ID:</strong> T1S2402014</p>
                <p><strong>Email:</strong>luvz1395@gmail.com </p>
              </div>
            </div>
          </div>

        </div>
        <hr />
        <div className='footer'>
          <div className='footerlogo'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.323791400349!2d106.6662497!3d10.786494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ecb37e59e33%3A0xfe7c4d9f94f9e079!2zNTkwIMSQLiBDw6FjaCBN4bqhbmcgVGjDoW5nIDgsIFBoxrDhu51uZyAxMSwgUXXhuq1uIDMsIEjhu5MgQ2jDrSBNaW5oIDcwMDAwMA!5e0!3m2!1sen!2s!4v1721648309370!5m2!1sen!2s" width="600" height="450" style={{ border: "0", width: "450px", height: "250px" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className="footeraddress">
            <p> <strong> Address:</strong> 590 CMT8 Street District 3
              Ho Chi Minh City</p>
            <p> <strong>Phone:</strong> (036) 355-5597 </p>
            <p> <strong>Email:</strong> AlbertoClock@gmail.com</p> <br />
            <strong style={{ fontSize: "large" }}>Policy At Alberto Clock:</strong> <br />
            <Link to="/return" style={{ color: "black" }}>Return Policy</Link> <br />
            <Link to="/warranty" style={{ color: "black" }}>Waranty</Link>
          </div>

          <div className='footersocial'>
            <p>See More On Social</p>
            <div className='footericon'>


              <Link to={"https://www.facebook.com/"}>
                <FaFacebookSquare />
              </Link>
              <Link to={"https://www.instagram.com/ "}>
                <FaSquareInstagram />
              </Link>
              <Link to={"https://x.com/"}>
                <FaSquareXTwitter />
              </Link>
            </div>
            <p style={{ fontSize: "15px" }}>Copyright &copy; 2024 by AlbertoClock. All Rights Reserved.</p>
            <div className='information'>
              <strong style={{ fontSize: "large" }}>Information About Alberto Clock:</strong> <br />
              <Link to="/aboutus" style={{ color: "black" }}>About Us</Link> <br />
              <Link to="/contactus" style={{ color: "black" }}>Contact Us</Link>
            </div>
          </div>
        </div>


      </footer>

    </>
  );

}
export default App; 
