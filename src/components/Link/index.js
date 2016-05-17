/* @flow */

import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styles from './styles'

type Props = {
  children: string,
  onPress: Function
}

const Link = (props: Props) => {
  const { children, onPress } = props
  return (
    <TouchableOpacity onPress={() => onPress()}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  )
}

export default Link
