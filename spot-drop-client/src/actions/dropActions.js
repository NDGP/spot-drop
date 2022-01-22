import axios from "axios";
import {
    GET_DROPS,
    SET_LOADING,
    DELETE_DROP,
    DROP_ERRORS,
} from "./types"

export const getDrops = () => {
    return async () => {
        setLoading();
    }
}
//set loading to true
export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}