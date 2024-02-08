import React, { useEffect, useRef } from 'react';
import Card from 'react-bootstrap/Card';
import manager from '../Assets/manager.jpeg';
import '../style/admin.css';

function BasicExample() {
  const totalCards = 3; // Total number of cards
  const containerRef = useRef(null); // Ref to the container element

  useEffect(() => {
    const handleScroll = () => {
      const containerTop = containerRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      // Check if the container is in the viewport
      if (containerTop < windowHeight) {
        // Add class to trigger slide-up animation for each card
        const cards = containerRef.current.querySelectorAll('.custom-card');
        cards.forEach((card, index) => {
          setTimeout(() => {
            card.classList.add('slide-up');
          }, index * 200); // Delay each card's animation to create a stagger effect
        });
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
      <div className="container" ref={containerRef}>
        {cards}
      </div>
    </>
  );
}

export default BasicExample;
