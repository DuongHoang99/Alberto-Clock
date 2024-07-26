import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import seiko1 from './imagesSlideLux/seiko1.avif';
import seiko2 from './imagesSlideLux/seiko2.avif';
import seiko3 from './imagesSlideLux/seiko3.avif';
import seiko4 from './imagesSlideLux/seiko5.avif';
import seiko5 from './imagesSlideLux/seiko5.avif';
import dw1 from './imagesSlideLux/dw1.avif';
import dw2 from './imagesSlideLux/dw2.avif';
import dw3 from './imagesSlideLux/dw3.avif';
import dw4 from './imagesSlideLux/dw4.avif';
import saga1 from './imagesSlideLux/saga1.avif';
import saga2 from './imagesSlideLux/saga2.avif';
import saga3 from './imagesSlideLux/saga3.avif';
import saga4 from './imagesSlideLux/saga4.avif';

const SlideShowLux = () => {
    

    return (
        
        <Slide>
            
            <div className="each-slide-effect">
                <div>
                    <img src={seiko1} />
                    
                </div>
            </div>
            <div className="each-slide-effect">
                <div>
                    <img src={seiko2} />
                    
                </div>
            </div>
            <div className="each-slide-effect">
                <div>
                    <img src={seiko3} />
                    
                </div>
            </div>
            <div className="each-slide-effect">
                <div>
                    <img src={seiko4} />
                    
                </div>
            </div>
            <div className="each-slide-effect">
                <div>
                    <img src={seiko5} />
                    
                </div>
            </div>
            <div className="each-slide-effect">
                <div>
                    <img src={dw1} />
                    
                </div>
            </div>
            <div className="each-slide-effect">
                <div>
                    <img src={dw2} />
                    
                </div>
            </div>
            <div className="each-slide-effect">
                <div>
                    <img src={dw3} />
                    
                </div>
            </div>
            <div className="each-slide-effect">
                <div>
                    <img src={dw4} />
                    
                </div>
            </div>
            <div className="each-slide-effect">
                <div>
                    <img src={saga1} />
                    
                </div>
            </div>
            <div className="each-slide-effect">
                <div>
                    <img src={saga2} />
                    
                </div>
            </div>
            <div className="each-slide-effect">
                <div>
                    <img src={saga3} />
                    
                </div>
            </div>
            <div className="each-slide-effect">
                <div>
                    <img src={saga4} style={{width:"1050px", height:"900px"}} />
                    
                </div>
            </div>
           

            
            
            </Slide>
        
    );
};

export default SlideShowLux;