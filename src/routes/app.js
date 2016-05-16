/* @flow */

import React from 'react'
import { Router, Route } from 'react-native-router-flux'
import { styles } from '@components/NavigationBar'
import LauchContainer from '@containers/LauchContainer'

const routes = (
  <Route name="welcome" component={LauchContainer} title="Welcome" />
)

export default routes
