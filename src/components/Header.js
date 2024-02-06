import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../style/Header.css'; 
import logo from '../Assets/dg1.jpeg'
import { NavLink } from 'react-bootstrap';


function Header() {
  return (
    <>
      <Navbar  variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="#home">
            <NavLink href="#home" >
              <img src={logo} alt="Logo" className='logo' /> 
            </NavLink>
          </Navbar.Brand>
          <div>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About us</Nav.Link>
              <Nav.Link href="#members">Members</Nav.Link>
              <Nav.Link href="#gallery">Gallery</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
