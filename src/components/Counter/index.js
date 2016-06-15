/* @flow */

import React from 'react'
import { View, Text } from 'react-native'
import Button from '@components/Button'
import styles from './styles'

type Props = {
  value: number,
  decrement: Function,
  increment: Function,
}

const Counter = (props: Props) => {
  const { value, decrement, increment } = props
  return (
    <View style={styles.container}>
      <Button onPress={() => decrement()}>➖</Button>
      <Text style={styles.value}>{value}</Text>
      <Button onPress={() => increment()}>➕</Button>
    </View>
  )
}

Counter.defaultProps = {
  value: 0,
}

export default Counter
