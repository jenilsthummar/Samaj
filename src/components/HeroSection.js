import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import First from '../Assets/first.jpg';
import third from '../Assets/third.jpg';
import second from '../Assets/second.jpeg';
import '../style/HeroSection.css';

function Hero() {
  const fixedText = {
    text: 'Welcome To',
    title: 'Shree Leua Patel Samaj',
    descriptionLine1: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    descriptionLine2: 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.',
    descriptionLine3: 'Curabitur blandit tempus porttitor. Cum sociis natoque penatibus et magnis dis parturient montes.',
    descriptionLine4: 'Nullam id dolor id nibh ultricies vehicula ut id elit.',
    buttonLabel: 'Booking',
  };

  return (
    <div className="hero-container">
      <div className="image-overlay">
        <div className="text-content">
          <h1>{fixedText.text}</h1>
          <span><h1>{fixedText.title}</h1></span> <br/>
          <p>{fixedText.descriptionLine1}</p>
          <p>{fixedText.descriptionLine2}</p>
          <p>{fixedText.descriptionLine3}</p>
          <p>{fixedText.descriptionLine4}</p>
          <button>{fixedText.buttonLabel}</button>
        </div>
      </div>
      <Carousel controls={false} interval={4000} pause={false} data-bs-theme="light" bg={null}>
        <Carousel.Item>
          <img className="d-block w-100" src={First} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={third} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={second} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Hero;
