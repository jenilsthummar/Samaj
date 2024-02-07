// ImgOverlayExample.js

import React from 'react';
import Card from 'react-bootstrap/Card';
import Event from '../Assets/event.jpeg';
import '../style/Event.css';
import { FaCalendar } from "react-icons/fa";

function ImgOverlayExample() {
  return (
    <>
      <div className="event-header">
        <h1 className="event-title">Upcoming Events</h1>
        <p className="see-all-link">See All</p>
      </div>
      <Card className="text-white event-card">
        <Card.Img src={Event} alt="Card image" className="image" />
        <Card.ImgOverlay className="card-overlay">
          <div className="event-details">
            <button className="event-name">SnehMilan</button>
            <p className="event-description">Event details or additional text goes here. Event details or additional <br/>text goes here. Event details or additional text goes here.</p>
            <h4 className='event-date'><FaCalendar /> 12 march,2024</h4>
          </div>
        </Card.ImgOverlay>
      </Card>
    </>
  );
}

export default ImgOverlayExample;
