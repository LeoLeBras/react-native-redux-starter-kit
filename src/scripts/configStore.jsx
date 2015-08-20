import { createStore, applyMiddleware, combineReducers } from 'redux';
import promiseMiddleware from 'middlewares/promiseMiddleware';
import * as reducers from 'reducers/';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);
export const store = createStoreWithMiddleware(combineReducers(reducers));
