import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import * as reducers from 'reducers/';

const createStoreWithMiddleware = compose(
    applyMiddleware(thunk)
    // Add remote-redux-devtools
)(createStore);

export default function configureStore() {
    return createStoreWithMiddleware(combineReducers(reducers));
}
