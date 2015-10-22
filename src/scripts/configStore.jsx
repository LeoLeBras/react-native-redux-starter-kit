import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'middlewares/promiseMiddleware';
import * as reducers from 'reducers/';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);

export default function configureStore() {
    const store = createStoreWithMiddleware(combineReducers(reducers));

    if (module.hot) {
        module.hot.accept('./reducers/index', () =>
            store.replaceReducer(require('./reducers/index'))
        );
    }

    return store;
}
