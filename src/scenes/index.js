/* @flow */

import React from 'react'
import { Router } from 'react-native-router-flux'
import scenes from './app'

const getSceneStyle = () => ({
  flex: 1,
  backgroundColor: '#fff',
  shadowColor: 'black',
  shadowOffset: { width: 2, height: 4 },
  shadowOpacity: 0.5,
  shadowRadius: 3,
})

export default () => (
  <Router
    scenes={scenes}
    getSceneStyle={getSceneStyle}
  />
)
