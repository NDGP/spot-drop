import React, { useEffect, useState } from "react";
import '../../App.css'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../actions/authActions'


const Register = ({ registerUser, auth : { isAuthenticated } }) => {
    //!!replace once auth is set up
    const navigate = useNavigate()
    useEffect(() => {
     if (isAuthenticated) {
      navigate('/')
     }
    }, [isAuthenticated])
    const [user, setUser] = useState({
      userName: '',
      email: '',
      password: '',
      password2: ''
    })
    
    const { userName, email, password, password2 } = user;
    
    const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

      const onSubmit = (e) => {
        
        e.preventDefault();
        if (userName === '' || email === '' || password === '') {
            return console.log('fill all fields')
        } else if (password !== password2) {
            return console.log('passwords need to match')
        } else {
          console.log(user)
            registerUser(user)
            //return navigate('/')
        }
      };  

  return (
    <div className='form-body'>
    <div className='form-container' >
    <h1 className='form-header' > Register Account </h1>
    <form onSubmit={onSubmit}>
      <div className='form-group'>
        <label htmlFor='userName'>User Name</label>
        <input
          id='userName'
          type='text'
          name='userName'
          value={userName}
          onChange={onChange}
          required
          />
      </div>
      <div className="form-group" >
        <label htmlFor='email'>Email Address</label>
            <input
              id='email'
              type='email'
              name='email'
              value={email}
              onChange={onChange}
              required
              />
      </div>
      <div className='form-group'>
        <label htmlFor='password'>Password</label>
        <input
          id='password'
          type='password'
          name='password'
          value={password}
          onChange={onChange}
          required
          minLength='6'
          />
      </div>
      <div className='form-group'>
        <label htmlFor='password2'>Confirm Password</label>
        <input
          id='password2'
          type='password'
          name='password2'
          value={password2}
          onChange={onChange}
          required
          minLength='6'
          />
      </div>
      <input 
        className='button-5'
        type='submit'
        value='Register'
        />
    </form>
  </div>
  <div className='drips-body'>
    
      <div style={{margin: '175px auto'}} className="drips"></div>
      <div  style={{margin: '175px auto'}}className="wave"></div>
    
  </div >
  </div>
 
  );
};

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
}
const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps,{ registerUser })(Register);
