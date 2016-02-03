import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import * as reducers from './reducers/';

let cs = createStore;
// Remote Redux DevTools
// if(__DEV__) {
//     cs = compose(
//         devTools({
//             name: 'Redux DevTools',
//             hostname: 'localhost',
//             port: 5678
//         })
//     )(createStore);
// }

const createStoreWithMiddleware = compose(
    applyMiddleware(thunk)
)(cs);

export default function configureStore() {
    return createStoreWithMiddleware(combineReducers(reducers));
}
