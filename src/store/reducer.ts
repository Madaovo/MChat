// import { combineReducers } from "redux-immutable";
import { combineReducers } from "redux";
import userReducer from "./user";

const reducer = combineReducers({
  user: userReducer,
});

export type RootState = ReturnType<typeof reducer>;

export default reducer;
