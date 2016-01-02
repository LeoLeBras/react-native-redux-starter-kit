const routes = {};

/**
 * Homepage
 *
 */
routes.getHomeRoute = () => ({
    getSceneClass() {
        return require('Welcome/').default;
    },
    getTitle() {
        return 'Welcome';
	}
});

export default routes;
