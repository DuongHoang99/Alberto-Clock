import React from 'react';
import { Slide } from 'react-slideshow-image';
import hinh1 from './imgReturn/z5654465992722_b9f862d3a3a7bad11a14c1ee071d6cbb.jpg';
import hinh2 from './imgReturn/z5654465992731_4be6b33fbccfb4c4abffb892923f92bc.jpg';
const SlideReturn = () => {
    

    return (
        
        <Slide>
            
            <div className="each-slide-effect">
                <div>
                    <img src={hinh1} style={{width:"100%", height:"100%"}} />
                    
                </div>
            </div>
            <div className="each-slide-effect">
                <div>
                    <img src={hinh2}   style={{width:"100%", height:"100%"}} />
                    
                </div>
            </div>
              
            
            </Slide>
        
    );
};

export default SlideReturn;