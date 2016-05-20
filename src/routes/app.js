/* @flow */

import React from 'react'
import { Navigator } from 'react-native'
import { Router, Route, Schema } from 'react-native-router-flux'
import { styles } from '@components/NavigationBar'
import LauchContainer from '@containers/LauchContainer'
import CounterContainer from '@containers/CounterContainer'
import DecoratorCounterContainer from '@containers/DecoratorCounterContainer'

const routes = (
  <Router navigationBarStyle={styles.container}>
    <Schema name="default" sceneConfig={Navigator.SceneConfigs.FloatFromRight}/>
    <Route name="welcome" component={LauchContainer} title="Welcome" />
    <Route name="counter" component={CounterContainer} title="Counter" />
    <Route name="decoratorcounter" component={DecoratorCounterContainer} title="Counter with decorator" />
  </Router>
)

export default routes
