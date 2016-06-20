/* @flow */

import React from 'react'
import { Actions, Scene } from 'react-native-router-flux'
import { styles } from '@components/NavigationBar'

const scenes = Actions.create(
  <Scene key="app" navigationBarStyle={styles.container}>
    <Scene key="welcome" component={require('./LaunchScene').default} title="Welcome" />
    <Scene key="counter" component={require('./CounterScene').default} title="Counter" />
  </Scene>
)

export default scenes
