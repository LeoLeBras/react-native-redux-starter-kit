import React from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-native-router-flux'
import routes from '@routes/app'
import createStore from '@store/create'

const Kernel = () => (
  <Provider store={createStore()}>
    <Router>
      {routes}
    </Router>
  </Provider>
)

export default Kernel
