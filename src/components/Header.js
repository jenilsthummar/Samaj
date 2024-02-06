import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" fixed="top"> {/* Add fixed="top" here */}
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <div>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About us</Nav.Link>
              <Nav.Link href="#members">Members</Nav.Link>
              <Nav.Link href="#gallery">Galley</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
