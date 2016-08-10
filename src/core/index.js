/* @flow */

import React from 'react'
import { Router } from 'react-native-router-flux'
import { Provider } from 'react-redux'
import createStore from '@store/create'
import scenes from './scenes'

const store = createStore()

const Kernel = (): React$Element<any> => {
  return (
    <Provider store={store}>
      <Router scenes={scenes} />
    </Provider>
  )
}

export default Kernel
