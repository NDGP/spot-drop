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
    error: null
}

export default (state = initialState, action) => {
    switch(action.type){
        case REGISTER_SUCCESS:
            return {
                ...state,
                ...action.payload
            };
        case AUTH_ERROR:
            return{
                ...action.payload
            }
        
        default:
            return state;
    }
}