/* @flow */

import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styles from './styles'

type Props = {
  children?: string,
  onPress: Function,
}

const Button = (props: Props): React$Element<any> => {
  const { onPress } = props
  const children = props.children || ''
  return (
    <TouchableOpacity onPress={() => onPress()} style={styles.container}>
      <Text style={styles.text}>
        {children}
      </Text>
    </TouchableOpacity>
  )
}

export default Button
