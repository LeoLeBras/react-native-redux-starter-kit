import { Platform } from 'react-native';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
// import devTools from 'remote-redux-devtools';
import thunk from 'redux-thunk';
import * as reducers from './reducers/';

const enhancer = compose(
    applyMiddleware(thunk)
    // devTools({
    //     name: Platform.OS,
    //     hostname: 'localhost',
    //     port: 5678
    // })
);

export default function configureStore(initialState) {
    return createStore(
        combineReducers({ ...reducers }),
        initialState,
        enhancer
    );
}
