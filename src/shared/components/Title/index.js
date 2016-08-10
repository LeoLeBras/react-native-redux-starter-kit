/* @flow */

import React from 'react'
import { Text } from 'react-native'
import styles from './styles'

type Props = {
  children?: string,
}

const Title = (props: Props): React$Element<any> => {
  const children = props.children || ''
  return (
    <Text style={styles.main}>
      {children}
    </Text>
  )
}

export default Title
