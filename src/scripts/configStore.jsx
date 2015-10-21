import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'middlewares/promiseMiddleware';
import * as reducers from 'reducers/';

let cs = createStore;
if(__DEBUG__){
    cs = compose(require('redux-devtools').devTools())(createStore);
}

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(cs);

export default function configureStore() {
    const store = createStoreWithMiddleware(combineReducers(reducers));

    if (module.hot) {
        module.hot.accept('./reducers/index', () =>
            store.replaceReducer(require('./reducers/index'))
        );
    }

    return store;
}
