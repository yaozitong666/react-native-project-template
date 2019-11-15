import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducer/appReducer.js';
import getAppState from './appState';

const createStoreWithMiddleware = applyMiddleware(thunk) (createStore);

function configureStore (initialState) {
	return createStoreWithMiddleware(reducer, initialState);
}
var appStore=configureStore(getAppState());

export default appStore;
