import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import './NavigationBar.css';
import logo from '../assets/logo.png'

function NavigationBar() {
  return (
    <Navbar expand="lg" variant="light" sticky="top" className="py-3 wizard">
      <Container>
        <Navbar.Brand href="#" className='CWorld'><img src={logo} alt="" className='img1'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className="justify-content-center">
          <Nav className="mx-auto text-center">
            <Nav.Link href="#about" className='hom'><b>About</b></Nav.Link>
            <Nav.Link href="#project" className='hom'><b>Project</b></Nav.Link>
            <Nav.Link href="/partner" className='hom'><b>Service</b></Nav.Link>
            <Nav.Link href="#skill" className='hom'><b>Skill</b></Nav.Link>
            <Nav.Link href="/about" className='hom'><b>Testimonials</b></Nav.Link>
          </Nav>
          {/* <Button href='/contact' className="contact-bt" data-aos="fade-left">Request a qoute</Button> */}
        </Navbar.Collapse>      
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
