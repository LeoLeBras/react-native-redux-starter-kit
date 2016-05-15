import React from 'react'
import { Provider, connect } from 'react-redux'
import { Router } from 'react-native-router-flux'
import scenes from '@scenes/app'
import createStore from '@store/create'

const RouterWithRedux = connect()(Router)

const Kernel = () => (
  <Provider store={createStore()}>
    <RouterWithRedux scenes={scenes} />
  </Provider>
)

export default Kernel
