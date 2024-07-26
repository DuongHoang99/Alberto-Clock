import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import seiko1 from "../slider/image/seiko.avif";
import dw from "../slider/image/dw.avif";
import citizen from"../slider/image/citizen.avif";
import casio from"../slider/image/casio.avif";
import gshock from"../slider/image/gshock.avif";
import saga from "../slider/image/saga4.avif"

const SlideShow = () => {
    

    return (
        
        <Slide>
            <div className="each-slide-effect">
                <div>
                    <img src={seiko1}   />
                    
                </div>
            </div>
            <div className="each-slide-effect">
                <div>
                    <img src={dw}  />
                    
                </div>
            </div>
            <div className="each-slide-effect">
                <div>
                    <img src={gshock} />
                    
                </div>
            </div>
            <div className="each-slide-effect">
                <div>
                    <img src={casio} />
                    
                </div>
            </div>
            <div className="each-slide-effect">
                <div>
                    <img src={citizen}  />
                    
                </div>
            </div>
            <div className="each-slide-effect">
                <div>
                    <img src={saga} style={{width:"1050px", height:"900px"}} />
                    
                </div>
            </div>
            
        </Slide>
    );
};

export default SlideShow;