import React, { useState, useEffect } from 'react';
import './Carousel.css';

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = ['https://i.postimg.cc/wBTfjQpn/carousel1.jpg', 'https://i.postimg.cc/zftdbHDv/carousel2.jpg', 'https://i.postimg.cc/9QBg2NvG/carousel3.jpg', 'https://i.postimg.cc/QVG1KhWH/carousel4.jpg'];
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((activeIndex + 1) % images.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [activeIndex, images.length]);
  return (
    <div className='carousel'>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt=""
          style={{ display: index === activeIndex ? 'block' : 'none' }}
        />
      ))}
    </div>
  );
};
export default Carousel;