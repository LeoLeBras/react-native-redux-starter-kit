/* @flow */

import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styles from './styles'

type Props = {
  children: string,
  onPress: Function,
}

const Button = (props: Props) => {
  const { children, onPress } = props
  return (
    <TouchableOpacity onPress={() => onPress()} style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  )
}

Button.defaultProps = {
  onPress: () => true,
}

export default Button
