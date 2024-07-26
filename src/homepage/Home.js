import { Link, Route, Routes } from "react-router-dom";
import datahome from "./Datahome.json";
import datahome2 from "./datahome2.json";
import home2 from "./imagehome/home2(1).jpg"
import home1 from "./imagehome/Home1.jpg";
import Producthome from "./Producthome";
import Producthome2 from "./Producthome2";
import ClassicWatch from "../Product/ClassicWatch/ClassicWatch";
import './Home.css';


export default function Homepage() {
    return (
        <>
            <Routes>
                <Route path='/classicwatch' element={<ClassicWatch />}></Route>
            </Routes>
            <div>
                <Link to="/classicwatch" >
                    <img src={home1} />
                </Link>
            </div>

            <div className="container">
                <hr />
                <div>
                    <h4>Best Selling Men's Watches</h4>
                    <div className="row mt-5">
                        {
                            datahome.map(item => (
                                <div className="col-sm-6 col-md-3">
                                    <Producthome pict={item.pict} pict2={item.pict2} id={item.id} name={item.name} gender={item.gender} price={item.price} /></div>
                            ))
                        }


                    </div>
                </div>
                <div style={{ paddingTop: "30px" }}>
                    <h4>Best Selling Women's Watches</h4>
                    <div className="row mt-5">
                        {
                            datahome2.map(item => (
                                <div className="col-sm-6 col-md-3">
                                    <Producthome2 pict={item.pict} pict2={item.pict2} id={item.id} name={item.name} gender={item.gender} price={item.price} /></div>
                            ))
                        }


                    </div>

                </div>
                <hr />
                <h4>New services at Alberto Clock</h4>
                <img src={home2} style={{ marginLeft: "-16px" }} />


            </div>
        </>
    );


}