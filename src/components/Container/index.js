/* @flow */

import React, { Element } from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

type Props = {
  children: Element
}

const Container = (props) => {
  const { children } = props
  return (
    <View style={styles.container}>{children}</View>
  )
}

export default Container
