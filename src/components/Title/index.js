/* @flow */

import React from 'react'
import { Text } from 'react-native'
import styles from './styles'

type Props = {
  children: string
}

const Title = (props: Props) => {
  const { children } = props
  return (
    <Text style={styles.text}>{children}</Text>
  )
}

export default Title
