import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav'

import '../Mynavbar/Mynavbar.styles.css'

const Mynavbar = () => {
  return (
    <>
      <Navbar fixed="top" collapseOnSelect expand="md"  variant="dark" className='nav-theme justify-content-between'>
        <Navbar.Brand href="#home">ANMOL SHARMA</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          
          </Nav>
          
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Mynavbar;
