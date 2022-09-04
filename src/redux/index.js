import { combineReducers } from "redux";
import {UserReg} from "./reducers/AuthReducers";
import { ServicesReducers } from "./reducers/ServicesReducers";
const rootReducer=combineReducers({
UserReg,
ServicesReducers


})

export default rootReducer