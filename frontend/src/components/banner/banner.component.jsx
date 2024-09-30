import Carousel from 'react-bootstrap/Carousel';
import { useState, useEffect } from 'react';
import "./bannerStyle.css"
import { Link } from 'react-router-dom';

const myCarouselImages = [
  {
    src: "https://res.cloudinary.com/dououppib/image/upload/v1712246310/MY_UPLOADS/pkjfivl9ieoapl0536h6.webp",
    label: "Enjoy 30% off on Winter Products",
    description: "Summer Collection has already arrived."
  },
  {
    src: "https://res.cloudinary.com/dououppib/image/upload/v1712246310/MY_UPLOADS/f9fsiqypi1g49hmtlefi.jpg",
    label: "Summer is almost here, see our collections",
    description: "Summer Collection has already arrived."
  },
  {
    src: "https://res.cloudinary.com/dououppib/image/upload/v1712246311/MY_UPLOADS/bprukhnopcjvtujgnko1.webp",
    label: "Shop over 100$ and get an extra 20% off",
    description: "Summer Collection has already arrived."
  },
];

function BannerComponent() {
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    setPictures(myCarouselImages);
  }, []);

  return (
    <div className='BannerComponent'>
    <Carousel>
      {pictures.map((picture, index) => (
          <Carousel.Item key={index} style={{
              background: `url(${picture.src}) center center / cover no-repeat`,
        
          }}>
          <Carousel.Caption>
            <h5>New Arrivals</h5>
            <h3>{picture.label}</h3>
            <p>{picture.description}</p>
            <Link to="https://wonderful-desert-04ea24410.5.azurestaticapps.net/shop" className="btn btn-dark">Shop Now</Link>      
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
    </div>
  );
}

export default BannerComponent;
