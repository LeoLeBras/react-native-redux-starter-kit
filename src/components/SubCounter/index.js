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

const SubCounter = (props: Props) => {
  const { value, decrement, increment, reset } = props
  return (
    <View style={styles.container}>
      <Button onPress={() => decrement()}>-</Button>
      <Text style={styles.value}>{value}</Text>
      <Button onPress={() => increment()}>+</Button>
      <Button onPress={() => reset()}>Reset</Button>
      <Text style={styles.value}>WHAT?</Text>
    </View>
  )
}

export default SubCounter
