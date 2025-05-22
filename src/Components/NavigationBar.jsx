
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import './NavigationBar.css';
import logo from '../assets/logo.png'
// import { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
function NavigationBar() {
      // useEffect(() => {
      //     AOS.init({
      //       duration: 2000,
      //       once: true, 
      //     });
      //   }, []);
  return (
    <Navbar expand="lg" variant="light" sticky="top" className="py-3 wizard">
      <Container>
        <Navbar.Brand href="#" className='CWorld' data-aos="fade-right"><img src={logo} alt="" className='img1'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className="justify-content-center">
          <Nav className="mx-auto text-center" data-aos="fade-up">
            <Nav.Link href="/home" className='home'><b>About</b></Nav.Link>
            <Nav.Link href="/blog" className='home'><b>Project</b></Nav.Link>
            <Nav.Link href="/about" className='home'><b>Testimonials</b></Nav.Link>
            <Nav.Link href="/partner" className='home'><b>Contact</b></Nav.Link>
            {/* <Nav.Link href="/faq" className='home'><b>Bolg</b></Nav.Link> */}
          </Nav>
          {/* <Button href='/contact' className="contact-bt" data-aos="fade-left">Request a qoute</Button> */}
        </Navbar.Collapse>      
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
