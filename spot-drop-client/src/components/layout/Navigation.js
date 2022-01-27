import React, { useState } from 'react';
import '../../App.css'
import '../../App.css'
import { Link } from 'react-router-dom'
import { Navbar, Container, Nav, Button, Offcanvas } from 'react-bootstrap'



export const Navigation = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [file, setFile] = useState('')

  const onChange = e => setFile(e.target.value)

  const onSubmit = (e) => {
    e.preventDefault();
    if (!file) {
        return console.log('must add file')
    } else {
        console.log('file added')
    }
  };

  return (
    <>
    <Navbar className='color-nav' variant="dark">
    <Container>
    <Navbar.Brand style={{fontFamily: 'Bebas Neue'}} href="/">Spot Drop</Navbar.Brand>
    <Nav className="me-auto">
      <Link style={{textDecoration: 'none'}}className='nav-link' to='/register' >Register</Link>
      <Link style={{textDecoration: 'none'}}className='nav-link' to='/login' >login</Link>
    </Nav>
      <button style={{marginBottom: '5px', fontFamily: 'Poppins', fontWeight: 'lighter'}}className='button-5'onClick={handleShow}>
        Create Drop
      </button>
    </Container>
  </Navbar>
      <Offcanvas show={show} onHide={handleClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title Style={{fontFamily: 'Poppins', fontWeight: 'bold'}}>Drop Form</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
      <form onSubmit={onSubmit}>
      <div className='form-group'>
            <input
              id='file'
              type='file'
              name='file'
              className= 'inputfile '
              accept="image/png, image/jpeg"
              value={file}
              onChange={onChange}
              required
              />
        <label htmlFor='file'>Select Image</label>
      </div>
        <input
          className='button-5'
          type='submit'
          value='create'
          />
      </form>
      </Offcanvas.Body>
    </Offcanvas>
  </>
  );
};

export default Navigation




