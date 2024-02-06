import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import manager from '../Assets/manager.jpg';
import '../style/Contact.css';

function BasicExample() {
  const numberOfCards = 3;
  const cards = [];

  for (let i = 0; i < numberOfCards; i++) {
    cards.push(
      <Card key={i} className="custom-card">
        <Card.Img variant="top" src={manager} className="card-image" />
        <Card.Body>
          <Card.Title>John Doe</Card.Title>
          <Card.Text>Manager</Card.Text>
          <Button variant="primary">Contact</Button>
        </Card.Body>
      </Card>
    );
  }

  return (
    <>
    
      <div className='admin'>
        <h1>Admin Committee</h1>
      </div>
      <div className="container">
        {cards}
      </div>
    </>
  );
}

export default BasicExample;
