import { combineReducers } from "redux";
import dropsReducers from "./dropsReducers";
import authReducers from "./authReducers"

export default combineReducers({
    drop: dropsReducers,
    auth: authReducers
})