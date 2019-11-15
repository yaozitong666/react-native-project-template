import React, { Component } from 'react';
import { Provider } from 'react-redux';
import App from './src/App.js';
import appStore from './src/store/appStore.js';

export default class App extends Component<{}> {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Provider store={appStore}>
				<App />
			</Provider>
		);
	}
}
