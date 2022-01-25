import React, { useState } from "react";
import axios from "axios";
import '../../App.css'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../actions/authActions'


const Register = ({ auth }) => {
    //!!replace once auth is set up
    const navigate = useNavigate()

    const register_API_URL = 'http://localhost:5000/api/users'
    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    }



    // const register = async (userName, email, password) => {
    //   try {
    //   const res = await axios.post(register_API_URL, {
    //       userName,
    //       email,
    //       password,
    //     }, config);
    //     console.log(res.data)
    //   } catch (err) {
    //     console.log(err.message)
    //   }
    // } 
  

    const [user, setUser] = useState({ ...auth, password2: ''});
    
    
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
         // register(userName, email, password)

            // registerUser(userName, email, password)
          return navigate('/')
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
    
      <div style={{margin: '175px auto'}} class="drips"></div>
      <div  style={{margin: '175px auto'}}class="wave"></div>
    
  </div >
  </div>
 
  );
};

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(
  mapStateToProps,
  { registerUser }
  )(Register);
