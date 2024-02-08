import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import First from '../Assets/first.jpeg';
import third from '../Assets/third.jpeg';
import second from '../Assets/second.jpg';
import '../style/HeroSection.css';

function Hero() {
  const [animateText, setAnimateText] = useState(false);

  useEffect(() => {
    // Set animateText to true after a brief delay to trigger the animation
    const timer = setTimeout(() => {
      setAnimateText(true);
    }, 500); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

  const fixedText = {
    text: 'Welcome To',
    title: 'Shree Leua Patel Samaj',
    descriptionLine1: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    // descriptionLine2: 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.',
    // descriptionLine3: 'Curabitur blandit tempus porttitor. Cum sociis natoque penatibus et magnis dis parturient montes.',
    // descriptionLine4: 'Nullam id dolor id nibh ultricies vehicula ut id elit.',
    buttonLabel: 'Booking',
  };

  return (
    <div className="hero-container">
      <div className="image-overlay">
        <div className={`text-content ${animateText ? 'animate' : ''}`}>
          <h2>{fixedText.text}</h2>
          <h1>{fixedText.title}</h1>
          <p>{fixedText.descriptionLine1}</p>
          {/* <p>{fixedText.descriptionLine2}</p>
          <p>{fixedText.descriptionLine3}</p>
          <p>{fixedText.descriptionLine4}</p> */}
          <button className='booking'>{fixedText.buttonLabel}</button>
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
