import auth from './authReducer';
import { combineReducers } from 'redux';

const appReducer = combineReducers({
	auth
});
export default appReducer;
