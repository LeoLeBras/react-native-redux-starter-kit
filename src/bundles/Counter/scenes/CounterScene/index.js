/* @flow */

import React from 'react'
import { View } from 'react-native'
import Title from '@components/Title'
import CounterContainer from '@Counter/containers/CounterContainer'
import styles from './styles'

const CounterScene = (): React$Element<any> => {
  return (
    <View style={styles.container}>
      <Title>Counter</Title>
      <CounterContainer />
    </View>
  )
}

export default CounterScene
