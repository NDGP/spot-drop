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

const register_API_URL = 'http://localhost:5000/api/users'
const config = {
    headers: {
        'Content-type': 'application/json'
    }
}

//register user
export const registerUser = async (userName, email, password) => {
  return (dispatch) => {
    try {
      console.log('this is the try', userName, email, password)
      const res = axios.post(register_API_URL, {
        userName,
        email,
        password,
      }, config);
    
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.json
    
      })
      
    } catch (err) {
      console.log(err)
      dispatch({
        type: AUTH_ERROR,
        payload: err
      })
    }
  }
};




//login user


//logout user


