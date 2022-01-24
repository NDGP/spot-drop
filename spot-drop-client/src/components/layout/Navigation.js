import React, { useState } from 'react';
import '../../App.css'
import { Link } from 'react-router-dom'
import { Navbar, Container, Nav } from 'react-bootstrap'



export const Navigation = () => {
 


  return (
    <Navbar className='color-nav' variant="dark">
    <Container>
    <Navbar.Brand style={{fontFamily: 'Bebas Neue'}} href="/">Spot Drop</Navbar.Brand>
    <Nav className="me-auto">
      <Link style={{textDecoration: 'none'}}className='nav-link' to='/register' >Register</Link>
      <Link style={{textDecoration: 'none'}}className='nav-link' to='/login' >login</Link>
    </Nav>
    </Container>
  </Navbar>
  );
};

export default Navigation
