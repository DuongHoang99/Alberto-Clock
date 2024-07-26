import his1 from '../imagehomepage/his1.jpg';
import his2 from '../imagehomepage/his2.jpg';
import his3 from '../imagehomepage/his3.jpg';
import his4 from '../imagehomepage/his4.jpg';
import his5 from '../imagehomepage/his5.jpg';
import SlideShow from './SlideShowAboutUs';

export default function AboutUs(params) {
 
    return(
        <div className="container">
            <div>
            <h1 style={{textAlign:"center"}}>ABOUT ALBERTO CLOCK</h1>
            <p style={{fontSize:"18px"}}><span>T</span>he history of Alberto Clock spans nearly 40 years, starting as a legitimate watch trader supplying stores in Saigon in the early 1980s. Today, Alberto Clock has expanded to a network of showrooms across Ho Chi Minh City and several neighboring provinces, offering authentic watches and international-standard repair services. Let's explore the journey of Alberto Clock through its milestones, from the launch of its first store to the establishment of its modern showroom network.</p>
            </div>
            <hr style={{marginBottom:"53px"}} />
            <div>
            <h1 style={{textAlign:"center"}}>HISTORY ABOUT ALBERTO CLOCK</h1>
            <div className="history">
        
            <div style={{flexGrow: "1"}}><img src={his1} /></div>
            <div style={{felxGrow: "5"}}> <p><span>E</span>arly Beginnings in Saigon (1980s):
            Alberto Clock began its journey as a reputable dealer of authentic watches, catering to local stores in Saigon during the early 1980s. The founder's commitment to quality and authenticity laid the foundation for its future growth.</p></div>
            </div>
            <div className='history'>
            <div style={{flexGrow: "5"}} > <p><span>E</span>xpansion and Growth: Over the years, Alberto Clock expanded its operations, establishing a strong presence in Ho Chi Minh City and nearby provinces. This growth was fueled by a dedication to providing genuine watches and reliable repair services.</p></div>
            <div style={{flexGrow: "1"}}> <img src={his2} /></div>
            
            </div>

            <div className='history'>
            <div style={{flexGrow: "1"}} > <img  src={his3}/></div>
            <div style={{flexGrow: "5"}}><p> <span>E</span>stablishment of Showrooms: The establishment of a network of modern showrooms marks a significant milestone in Alberto Clock's history. These showrooms not only showcase a wide range of authentic watches but also offer customers the assurance of international-standard repair services.</p></div>
            </div>
            <div className='history'>
            <div style={{flexGrow: "5"}} > <p><span>C</span>ommitment to Quality and Service: Throughout its history, Alberto Clock has upheld a commitment to quality and service. Its showrooms serve as centers of excellence where customers can experience the luxury and reliability associated with genuine timepieces. </p></div>
            <div style={{flexGrow: "1   "}}><img  src={his4}/> </div>
            </div>
            <div className='history'>
            <div style={{flexGrow: "5"}} > <img src={his5}/> </div>
            <div style={{flexGrow: "1   "}}><p><span>C</span>ontinued Success and Vision: Today, Alberto Clock continues to thrive as a trusted name in the watch industry in Vietnam. Its journey, marked by dedication and perseverance, underscores its position as a leader in providing authentic watches and exceptional customer service.</p> </div>
            </div>

        </div>
        <hr />
        <div style={{marginTop:"100px"}}>
            <h2 style={{textAlign:"center", }}>Watch Brands At Alberto Clock</h2>
        <SlideShow />
        </div>
        </div>
    );
}
