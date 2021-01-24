import { combineReducers } from 'redux-immutable';
import { reducer as userReducer } from './user/index';

export default combineReducers({
    user: userReducer
})