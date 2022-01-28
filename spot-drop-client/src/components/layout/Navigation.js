import React, { useEffect, useState } from 'react';
import '../../App.css'
import '../../App.css'
import setAuthToken from '../../utils/setAuthToken';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { loadUser } from '../../actions/authActions';
import { Navbar, Container, Nav, Offcanvas } from 'react-bootstrap'

//drop create is also here

export const Navigation = ({ loadUser }) => {
useEffect(() => {
 loadUser()

 if (localStorage.token) {
   setLoggedIn(true)
 } else {
   setLoggedIn(false)
 }
}, [])
  const [loggedIn, setLoggedIn] = useState(false)
  const [show, setShow] = useState(false);
  const [imagePreview, setImagePreview] = useState('')
  const [error, setError] = useState(false)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  //previewing image before submit

  const handleImageChange = (e) => {
  setImagePreview(e.target.files);
  }

  const deleteImage = (e) => {
    e.preventDefault()
    setImagePreview('')
  }

  const handleLogOut = (e) => {
    e.preventDefault()
    setAuthToken(null)
    setLoggedIn(false)
    localStorage.clear();
  }

  
  const onSubmit = (e) => {
    e.preventDefault();
    if (!imagePreview) {
        return console.log('must add file')
    } else {
        console.log('file added', imagePreview)
        
    }
  };

  return (
    <>
    <Navbar className='color-nav' variant="dark">
    <Container>
    <Navbar.Brand style={{fontFamily: 'Bebas Neue'}} href="/">Spot Drop</Navbar.Brand>
    {loggedIn === true 
        ? <>  
            <Nav className='me-auto'>
              <Nav.Link className='nav-link' onClick={handleLogOut}>Log Out</Nav.Link>
            </Nav>
            <button style={{marginBottom: '5px', fontFamily: 'Poppins', fontWeight: 'lighter'}}className='button-5'onClick={handleShow}>
              Create Drop
            </button>
          </>
        : 
          <Nav className="me-auto">
            <Link style={{textDecoration: 'none'}}className='nav-link' to='/register' >Register</Link>
            <Link style={{textDecoration: 'none'}}className='nav-link' to='/login' >login</Link>
          </Nav>
    }
    </Container>
  </Navbar>
      <Offcanvas show={show} onHide={handleClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title style={{fontFamily: 'Poppins', fontWeight: 'bold'}}>Drop Form</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
      <form onSubmit={onSubmit}>
      <div className='form-group'>
            <input
              id='file'
              type='file'
              name='file'
              className= 'inputfile'
              accept="image/*, .jpg, .jpeg, .png"
              value={imagePreview}
              onChange={handleImageChange}
              required
              />
        <label htmlFor='file'>Select Image</label>
        <div>
        {!imagePreview ? <img src={imagePreview} alt="preview"/> : null }
        </div>
      </div>
        {error && <p>File Not Supported You Dumb Ass</p> }
        <input
          className='button-5'
          type='submit'
          value='create'
          />
        {imagePreview ? (
          <input
          className='button-5'
          type='button'
          onClick={deleteImage}
          value='Delete'
          />
        ) : null}
        
      </form>
      </Offcanvas.Body>
    </Offcanvas>
  </>
  );
};
const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps, { loadUser })(Navigation)




