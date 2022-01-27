import axios from "axios"
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_ERRORS
} from "../actions/types"
import setAuthToken from '../utils/setAuthToken'

const register_API_URL = 'http://localhost:5000/api/users'
const config = {
    headers: {
        'Content-type': 'application/json'
    }
}

//register user
export const registerUser = (user) => async dispatch => {
    try {
      const {userName, email, password } = user
      console.log('this is the try', userName, email, password)
      const res = await axios.post(register_API_URL, {
        userName,
        email,
        password
      }, config);

      const data = res.json
      console.log(data)
      dispatch({
        type: REGISTER_SUCCESS,
        payload: data
    
      })
      
    } catch (err) {
      console.log(err)
      dispatch({
        type: AUTH_ERROR,
        payload: err
      })
    }
  };




//login user


//logout user


