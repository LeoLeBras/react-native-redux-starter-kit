import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import devTools from 'remote-redux-devtools';
import thunk from 'redux-thunk';
import * as reducers from 'reducers/';

const createStoreWithMiddleware = compose(
    applyMiddleware(thunk),
    devTools({
        hostname: 'localhost',
        port: 5678,
        autoReconnect: true
    })
)(createStore);

export default function configureStore() {
    return createStoreWithMiddleware(combineReducers(reducers));
}
