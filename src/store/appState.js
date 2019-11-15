import authState from './authState';

export default function getAppState () {
	const appState = {
		auth: new authState()
	}
	return appState;
}
