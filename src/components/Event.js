import React from 'react';
import Card from 'react-bootstrap/Card';
import Event from '../Assets/event.jpeg';
import '../style/Event.css';

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
            <h1 className="event-name">SnehMilan</h1>
            <p className="event-description">Event details or additional text goes here.Event details or additional text goes here.Event details or additional text goes here.Event details or additional text goes here.Event details or additional text goes here.Event details or additional text goes here.Event details or additional text goes here.Event details or additional text goes here.Event details or additional text goes here.Event details or additional text goes here.</p>
          </div>
        </Card.ImgOverlay>
      </Card>
      
    </>
  );
}

export default ImgOverlayExample;
