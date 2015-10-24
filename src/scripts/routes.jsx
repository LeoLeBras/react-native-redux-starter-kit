export const routes = {

	getHomeRoute() { return {
		getSceneClass() {
			return require('Welcome/');
		},

		getTitle() {
			return 'Welcome';
		}
	} }
	
};