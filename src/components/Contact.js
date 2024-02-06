import React from 'react';
import Card from 'react-bootstrap/Card';
import manager from '../Assets/manager.jpeg';
import '../style/Contact.css';

function BasicExample() {
  const totalCards = 3; // Total number of cards

  // Generate cards array
  const cards = [];
  for (let i = 0; i < totalCards; i++) {
    cards.push(
      <Card key={i} className="custom-card">
        <Card.Img variant="top" src={manager} className="card-image" />
        <Card.Body>
          <Card.Title>John Doe</Card.Title>
          <Card.Text>Manager</Card.Text>
          <input type='button' className='contact-btn' value={"Contact"} />
        </Card.Body>
      </Card>
    );
  }

  return (
    <>
      <div className='admin'>
        <p>Trustees</p>
      </div>
      <div className="container">
        {cards}
      </div>
    </>
  );
}

export default BasicExample;
