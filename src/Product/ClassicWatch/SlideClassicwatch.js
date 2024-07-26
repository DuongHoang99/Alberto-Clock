import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import casio1 from '../ClassicWatch/SlideClassic/casio1.avif';
import casio2 from '../ClassicWatch/SlideClassic/casio2.avif';
import citizen1 from '../ClassicWatch/SlideClassic/citizen1.avif';
import citizen2 from '../ClassicWatch/SlideClassic/citizen2.avif';
import koi1 from '../ClassicWatch/SlideClassic/koi1.avif';
import srw1 from '../ClassicWatch/SlideClassic/srw1.avif';
import srw2 from '../ClassicWatch/SlideClassic/srw2.avif';
import gshock1 from '../ClassicWatch/SlideClassic/gshock1.avif';
import gshock2 from '../ClassicWatch/SlideClassic/gshock2.avif';
import ori1 from '../ClassicWatch/SlideClassic/ori1.avif';
import ori2 from '../ClassicWatch/SlideClassic/ori2.avif';

const SlideShowClas = () => {
    

    return (
        
        <Slide>
            
            <div className="each-slide-effect">
                <div>
                    <img src={casio1} />
                    
                </div>
            </div>
            <div className="each-slide-effect">
                <div>
                    <img src={casio2} />
                    
                </div>
            </div>
            <div className="each-slide-effect">
                <div>
                    <img src={citizen1} />
                    
                </div>
            </div>
            <div className="each-slide-effect">
                <div>
                    <img src={citizen2} />
                    
                </div>
            </div>
            <div className="each-slide-effect">
                <div>
                    <img src={koi1} />
                    
                </div>
            </div>
            <div className="each-slide-effect">
                <div>
                    <img src={srw1} />
                    
                </div>
            </div>
            <div className="each-slide-effect">
                <div>
                    <img src={srw2} />
                    
                </div>
            </div>
            <div className="each-slide-effect">
                <div>
                    <img src={gshock1} />
                    
                </div>
            </div>
            <div className="each-slide-effect">
                <div>
                    <img src={gshock2} />
                    
                </div>
            </div>
            <div className="each-slide-effect">
                <div>
                    <img src={ori1} />
                    
                </div>
            </div>
            <div className="each-slide-effect">
                <div>
                    <img src={ori2} />
                    
                </div>
            </div>
            
           

            
            
            </Slide>
        
    );
};

export default SlideShowClas;