import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Event from '../Assets/event.jpeg';
import '../style/Event.css';
import { FaCalendar } from "react-icons/fa";

function ImgOverlayExample() {
  const [isVisible, setIsVisible] = useState(false);
  const [animationPlayed, setAnimationPlayed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {  
      const element = document.querySelector('.event-card');
      if (!element) return;
      
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
      const windowHeight = window.innerHeight;

      if (!animationPlayed && elementTop < scrollTop + windowHeight) {
        setIsVisible(true);
        setAnimationPlayed(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial visibility on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [animationPlayed]);

  return (
    <div className={`event-container ${isVisible ? 'visible' : ''}`}>
      <div className="event-header">
        <h1 className="event-title">Upcoming Events</h1>
        <p className="see-all-link">See All</p>
      </div>
      <div className="event-card-container">
        <Card className={`text-white event-card ${isVisible ? 'fade-in' : 'fade-out'}`}>
          <Card.Img src={Event} alt="Event Image" className="event-image" />
          <Card.ImgOverlay className="card-overlay">
            <div className="event-details">
              <div>
                <h2 className="event-name">SnehMilan</h2>
              </div>
              <div className="event-description">
                <p >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat, <br/> nisl sit amet maximus dictum, libero odio accumsan urna, eu ultrices purus magna et magna. 
                </p>
                <h4 className="event-date">
                  <FaCalendar /> 12 March, 2024
                </h4>
              </div>
            </div>
          </Card.ImgOverlay>
        </Card>
      </div>
    </div>
  );
}

export default ImgOverlayExample;
