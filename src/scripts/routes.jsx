const routes = {};

/**
 * Homepage
 *
 */
routes.getHomeRoute = () => ({
	getSceneClass() {
		return require('Welcome/');
	},
	getTitle() {
		return 'Welcome';
	}
});

export default routes;
