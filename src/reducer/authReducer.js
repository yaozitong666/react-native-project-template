import AuthState from '../store/authState.js';
import * as types from '../constant/actionTypes.js';
import Immutable, { Record, List } from 'immutable';

const authState = new AuthState();
export default function authReducer(state = authState, action) {
	switch (action.type) {
		case types.LOGIN_SUCCESS:
			return state.set('isLogin', true);
		case types.LOGIN_FAILURE:
			return state.set('isLogin', false);
		default:
			return state;
	}
	return state;
}
