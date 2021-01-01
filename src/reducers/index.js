import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  counter: counterReducer, //u can name it anything which is on left side
  isLogged: loggedReducer,
});

export default allReducers;
