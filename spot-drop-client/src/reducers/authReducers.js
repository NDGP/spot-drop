import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_ERRORS,
    LOAD_USER,
    LOAD_LOCATION,
    LOCATION_ERROR
} from "../actions/types"
import Login from "../components/auth/Login";



const initialState = {
    userName: '',
    email: '',
    password: '',
    error: null,
    isAuthenticated: false,
    loading: true,
    token: null
}

export default (state = initialState, action) => {
    switch(action.type){
        case REGISTER_SUCCESS:
            localStorage.setItem('token', action.payload.token)
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                loading: false

            };
        case AUTH_ERROR:
            return{
                ...state,
                error: "authentication error"
            
            };
        case REGISTER_FAIL:
            localStorage.removeItem('token');
            return{
                ...state,
                isAuthenticated: false,
                loading: true,
                token: null
            };
        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token)
            return{
                ...state,
                ...action.payload,
                isAuthenticated: true,
                loading: false
            }
        case LOGIN_FAIL:
            localStorage.removeItem('token');
            return{
                ...state,
                isAuthenticated: false,
                loading: true,
                token: null
            };
        case LOAD_USER:
            return{
                ...state,
                email: action.payload.email,
                userName: action.payload.userName
            }
        case LOAD_LOCATION:
            return{
                ...state,
                location: action.payload.location
            }
        case LOCATION_ERROR:
            return{
                ...state,
                error: "Location error"
            }
        default:
            return state;
    }
}