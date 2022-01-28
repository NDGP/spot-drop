import React, { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { loginUser } from "../../actions/authActions";

const Login = ({ loginUser }) => {
     
      //!!replace once auth is set up
      const navigate = useNavigate()

  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const { email, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
        return console.log('fill all fields')
    } else {
        console.log('Logged in')
        loginUser(user)
        return navigate('/', { replace: true })
    }
  };

  return (
      <div className='form-body'>
        
    <div style={{ minHeight: '300px', maxHeight: '300px'}} className='form-container'>
      <h1 className='form-header' > Login </h1>

      <form onSubmit={onSubmit}>
      <div className='form-group'>
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
            />
        </div >
        <input
          className='button-5'
          type='submit'
          value='Login'
          />
      </form>
    </div>
    <div className='drips-body'>
    
      <div style={{margin: '175px auto'}} class="drips"></div>
      <div  style={{margin: '175px auto'}}class="wave"></div>
    
    </div >

    </div>
  )
};


const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, { loginUser })(Login);

