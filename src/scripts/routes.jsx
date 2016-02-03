const routes = {};

/**
 * Homepage
 *
 */
routes.getHomeRoute = () => ({
    getSceneClass() {
        return require('../components/Welcome/').default;
    },
    getTitle() {
        return 'Welcome';
	}
});

export default routes;
