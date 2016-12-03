/* @flow */

import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styles from './styles'

type Props = {
  children?: string,
  onPress: Function,
}

const Link = (props: Props): React$Element<any> => {
  const { onPress } = props
  const children = props.children || ''
  return (
    <TouchableOpacity onPress={() => onPress()}>
      <Text style={styles.main}>{children}</Text>
    </TouchableOpacity>
  )
}

export default Link
