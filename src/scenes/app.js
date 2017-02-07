/* @flow */

import React from 'react'
import { Actions, Scene } from 'react-native-router-flux'
import { styles } from '@components/NavigationBar'
import LaunchContainer from '@containers/LaunchContainer'
import CounterContainer from '@containers/CounterContainer'

const scenes = Actions.create(
  <Scene key="app" navigationBarStyle={styles.container}>
    <Scene key="welcome" component={LaunchContainer} title="Welcome" />
    <Scene key="counter" component={CounterContainer} title="Counter" />
  </Scene>
)

export default scenes
