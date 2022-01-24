import {
    GET_DROPS,
    SET_LOADING,
    DELETE_DROP,
    DROP_ERRORS,
} from "../actions/types"


const initialState = {
    drops: null,
    current: null,
    loading: false,
    error: null,
}

export default (state = initialState, action) => {
    switch(action.type){
        case SET_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}