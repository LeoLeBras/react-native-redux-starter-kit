import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'middlewares/promiseMiddleware';
import * as reducers from 'reducers/';
import { routerStateReducer } from 'redux-react-router';

let cs = createStore;
if(__DEBUG__){
    cs = compose(require('redux-devtools').devTools(), createStore);
}
const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(cs);
export const store = createStoreWithMiddleware(combineReducers({
    router: routerStateReducer, ...reducers
}));
