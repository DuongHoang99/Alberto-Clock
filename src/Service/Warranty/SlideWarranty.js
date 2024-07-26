import React from 'react';
import { Slide } from 'react-slideshow-image';
import hinh1 from '../PolishingClean/imagePolishing/hinhslide1.jpg';
import hinh2 from '../PolishingClean/imagePolishing/hinhslide2.jpg';
const SlideWarranty = () => {
    

    return (
        
        <Slide>
            
            <div className="each-slide-effect">
                <div>
                    <img src={hinh1} style={{width:"100%", height:"100%"}}/>
                    
                </div>
            </div>
            <div className="each-slide-effect">
                <div>
                    <img src={hinh2} style={{width:"100%", height:"100%"}} />
                    
                </div>
            </div>
              
            
            </Slide>
        
    );
};

export default SlideWarranty;