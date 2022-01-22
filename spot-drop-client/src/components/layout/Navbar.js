import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='blue lighten-2'>
    <div className="nav-wrapper">
      <span style={{marginLeft: 20}} className="brand-logo">Spot Drop</span>
      <ul id="nav-mobile" className="right hide-on-small-and-down">
        <li><Link to="/Register">Register</Link></li>
        <li><Link to='/login'>Login</Link></li>
      </ul>
    </div>
  </nav>
          
  );
};

export default Navbar;