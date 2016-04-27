import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import reduxThunkMiddleware from 'redux-thunk';
import * as reducers from './modules';

const enhancer = compose(
  applyMiddleware(
    reduxThunkMiddleware
  )
);

export default function configureStore(initialState) {
  const store = createStore(
    combineReducers({
      ...reducers,
    }),
    initialState,
    enhancer
  );
  return store;
}
