/* @flow */
import React from 'react'
import { TouchableOpacity, View, Text, Image } from 'react-native'
import { Actions } from 'react-native-router-flux'
import Button from '@components/Button'
import Link from '@components/Link'
import Title from '@components/Title'
import styles from './styles'

type Props = {
  title: string,
  source: object,
}

const Space = (props: Props) => {
  const { title, source } = props
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={source}/>
      <Title>{title}</Title>
      
    </View>
  )
}

export default Space
