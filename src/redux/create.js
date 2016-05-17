import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import reduxThunkMiddleware from 'redux-thunk'
import Reactotron from 'reactotron'
import * as reducers from './reducers'

Reactotron.connect({
  enabled: __DEV__,
})

const enhancer = compose(
  applyMiddleware(
    reduxThunkMiddleware,
    Reactotron.reduxMiddleware
  )
)

export default function configureStore(initialState) {
  const store = createStore(
    combineReducers({ ...reducers }),
    initialState,
    enhancer
  )
  Reactotron.addReduxStore(store)
  return store
}
