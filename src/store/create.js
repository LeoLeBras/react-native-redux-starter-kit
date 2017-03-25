/* @flow */

import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import reduxThunkMiddleware from 'redux-thunk'
import Reactotron from 'reactotron'
import promiseMiddleware from '@store/middlewares/promiseMiddleware'
import * as reducers from './reducers'

Reactotron.connect({
  enabled: __DEV__,
})

const enhancer = compose(
  applyMiddleware(
    reduxThunkMiddleware,
    promiseMiddleware,
    Reactotron.reduxMiddleware,
  ),
)

export default function configureStore(initialState?: Object) {
  const store = createStore(
    combineReducers({ ...reducers }),
    initialState,
    enhancer,
  )
  if (__DEV__) {
    Reactotron.addReduxStore(store)
  }
  return store
}
