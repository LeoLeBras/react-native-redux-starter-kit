/* @flow */

import React from 'react'
import { Actions, Scene } from 'react-native-router-flux'
import { styles } from '@components/NavigationBar'
import LauchContainer from '@containers/LauchContainer'

const scenes = Actions.create(
  <Scene key="root" navigationBarStyle={styles.container} titleStyle={styles.title}>
    <Scene key="welcome" component={LauchContainer} title="Welcome" />
  </Scene>
)

export default scenes
