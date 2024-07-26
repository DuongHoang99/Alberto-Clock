import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SliderGallery.css'; // Import CSS tùy chỉnh của bạn


const SlideshowGallery = () => {
  const mainSliderRef = useRef(null);
  const thumbnailSliderRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const settingsMain = {
    infinite: true,
    speed: 1500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    asNavFor: thumbnailSliderRef.current,
    prevArrow: <button className="slick-prev">←</button>, // Mũi tên trái
    nextArrow: <button className="slick-next">→</button>, // Mũi tên phải
    afterChange: (current) => setActiveSlide(current), // Cập nhật slide hiện tại
  };

  const settingsThumbnail = {
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: mainSliderRef.current,
    focusOnSelect: true,
    centerMode: true,
    arrows: false, // Không cần mũi tên điều hướng
  };

  const url = process.env.PUBLIC_URL+'/Assett/';

 // const url = process.env.PUBLIC_URL+'/Assett/';
  const slides2 = [
    { image: url+'./1.jpg'},{ image: url+'./32.jpg'},{ image:url+'./33.jpg'},
    { image: url+'./4.jpg'},{ image: url+'./31.jpg'},{ image:url+'./34.jpg'},
    { image: url+'./5.jpg'},{ image: url+'./30.jpg'},{ image:url+'./35.jpg'},
    { image: url+'./6.jpg'},{ image: url+'./29.jpg'},{ image:url+'./36.jpg'},
    { image: url+'./7.jpg'},{ image: url+'./28.jpg'},{ image:url+'./37.jpg'},
    { image: url+'./8.jpg'},{ image: url+'./27.jpg'},{ image:url+'./38.jpg'},
    { image: url+'./9.jpg'},{ image: url+'./26.jpg'},{ image:url+'./39.jpg'},
    { image: url+'./10.jpg'},{ image: url+'./25.jpg'},{ image:url+'./40.jpg'},
    { image: url+'./11.jpg'},{ image: url+'./24.jpg'},{ image:url+'./41.jpg'},
    { image: url+'./12.jpg'},{ image: url+'./23.jpg'},{ image:url+'./42.jpg'},
    { image: url+'./13.jpg'},{ image: url+'./22.jpg'},{ image:url+'./43.jpg'},
    { image: url+'./14.jpg'},{ image: url+'./21.jpg'},{ image:url+'./44.jpg'},
    { image: url+'./15.jpg'},{ image: url+'./20.jpg'},{ image:url+'./45.jpg'},
    { image: url+'./16.jpg'},{ image: url+'./19.jpg'},{ image:url+'./46.jpg'},
    { image: url+'./17.jpg'},{ image: url+'./18.jpg'},{ image:url+'./47.jpg'},
    { image: url+'./50.jpg'},{ image: url+'./49.jpg'},{ image:url+'./48.jpg'},
    
  ]

  

  return (
    <div className='container'>
      
      <div>
      <p>Welcome to Alberto Clock Gallery, where we showcase the most exquisite and elegant timepieces. Here, we take pride in presenting a diverse collection, from classic designs to modern and innovative models. Each product in our gallery is carefully curated to ensure quality and perfection. Discover and find your perfect timepiece with us, and experience the beauty and sophistication of each watch.</p>


      </div>
   
    <div className="slideshow-gallery">
      <Slider {...settingsMain} ref={mainSliderRef}>
        {slides2.map((slide, index) => (
          <div key={index} className="slide">
            <img src={slide.image}  />
          </div>
        ))}
          {/* <div key='0' className="slide">
            <img src={s1}  />
          </div>
          <div key='1' className="slide">
            <img src={s2}  />
          </div>
          <div key='2' className="slide">
            <img src={s3}  />
          </div> */}

      </Slider>
      <Slider {...settingsThumbnail} ref={thumbnailSliderRef} className="thumbnail-slider">
        {slides2.map((slide, index) => (
          <div
            key={index}
            className={`thumbnail-slide ${index === activeSlide ? 'slick-active' : ''}`}
          >
            <img src={slide.image} alt={slide.title} />
          </div>
        ))}
      </Slider>
    </div>
    </div>
   
  );
};

export default SlideshowGallery;