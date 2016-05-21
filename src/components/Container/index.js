/* @flow */

import React, { Element } from 'react'
import { View } from 'react-native'
import styles from './styles'

type Props = {
  children: Element,
}

const Container = (props: Props) => {
  const { children } = props
  return (
    <View style={styles.container}>{children}</View>
  )
}

export default Container
