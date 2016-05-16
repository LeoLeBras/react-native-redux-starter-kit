/* @flow */

import React from 'react'
import { Router, Route } from 'react-native-router-flux'
import { styles } from '@components/NavigationBar'
import LauchContainer from '@containers/LauchContainer'

const routes = (
  <Router navigationBarStyle={styles.container}>
    <Route name="welcome" component={LauchContainer} title="Welcome" />
  </Router>
)

export default routes
