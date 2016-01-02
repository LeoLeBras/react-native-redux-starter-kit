import { createStore, combineReducers, applyMiddleware } from 'redux';
import promiseMiddleware from 'middlewares/promiseMiddleware';
import * as reducers from 'reducers/';

export default function configureStore() {
    const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);
    return createStoreWithMiddleware(combineReducers(reducers));
}
