import React, { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { LOGIN_SUCCESS } from "../../actions/types";

const Login = ({ auth = { email, password } }) => {
     
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
        return navigate('/', { replace: true })
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
      <div>
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
      <div >
          <label htmlFor='password'>Password</label>
          <input
            id='password'
            type='password'
            name='password'
            value={password}
            onChange={onChange}
            required
          />
        </div>
        <input
          type='submit'
          value='Login'
        />
      </form>
    </div>

  )
};


const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps)(Login);
