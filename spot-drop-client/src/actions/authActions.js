import axios from "axios"
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOAD_USER,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_ERRORS,
    LOAD_LOCATION
} from "../actions/types"
import setAuthToken from '../utils/setAuthToken'

const register_API_URL = 'http://localhost:5000/api/users'
const loadUser_API_URL = 'http://localhost:5000/api/auth/'
const config = {
    headers: {
        'Content-type': 'application/json'
    }
}

//register user
export const registerUser = (user) => async dispatch => {
    try {
      const {userName, email, password } = user
      const res = await axios.post(register_API_URL, {
        userName,
        email,
        password
      }, config);

      const data = res.data
      setAuthToken(data.token)
      console.log(data)
      dispatch({
        type: REGISTER_SUCCESS,
        payload: data
      })
      loadUser()
    } catch (err) {
      console.log(err)
      dispatch({
        type: REGISTER_FAIL,
        payload: err
      })
    }
  };

//load user 
export const loadUser = () => async dispatch => {
  if (localStorage.token)  {
    setAuthToken(localStorage.token)
  }
  try{ 
  const res = await axios.get(loadUser_API_URL)
    const data = res.data
    setAuthToken(data.token)
    loadLocation()
    dispatch({
      type: LOAD_USER,
      payload: data
    })
  }
  catch (err){
    console.log(err.message)
    dispatch({
        type: AUTH_ERROR,
        payload: err.message
    })
  }
}

//login user
export const loginUser = (user) => dispatch => {
  try {
    const { email, password } = user
    const res =  axios.post(loadUser_API_URL, {
      email,
      password
    }, config);

    const data = res.data
    setAuthToken(data.token)
    console.log(data)
    dispatch({
      type: LOGIN_SUCCESS,
      payload: data
    })
    loadUser()
  } catch (err) {
    console.log(err)
    dispatch({
      type: LOGIN_FAIL,
      payload: err
    })
  }
};

// get location
export const loadLocation = () => async dispatch => {
const location = []
  try{
     navigator.geolocation.getCurrentPosition((position) => {
      location.push(position.coords.latitude, position.coords.longitude);
    })
    dispatch({
      type: LOAD_LOCATION,
      payload: location
    })
  } catch (err){
    console.log(err)
    dispatch({
      type: LOAD_LOCATION,
      payload: err
    })
  }
}
//logout user


