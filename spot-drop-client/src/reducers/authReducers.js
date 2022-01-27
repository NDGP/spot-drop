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



const initialState = {
    userName: '',
    email: '',
    password: '',
    error: null,
    isAuthenticated: false,
    loading: true
}

export default (state = initialState, action) => {
    switch(action.type){
        case REGISTER_SUCCESS:
            localStorage.setItem('token', action.payload.token)
            return {
                    users: [...state, action.payload]
            };
        case AUTH_ERROR:
            return{
                ...state,
                ...action.payload,
                isAuthenticated: true,
                loading: false
            }
        
        default:
            return state;
    }
}