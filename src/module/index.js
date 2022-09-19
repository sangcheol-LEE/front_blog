import { combineReducers } from "redux";
import authReducer from "./auth";
import loadingReducer from "./loading";

const rootReducer = combineReducers({
  authReducer,
  loadingReducer
})


export default rootReducer;