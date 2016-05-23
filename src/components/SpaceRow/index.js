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

const SpaceRow = (props: Props) => {
  const { title, source, id } = props
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => Actions.space(props)}>
        <Title>{title}</Title>
      </TouchableOpacity>
      <Image style={styles.image} source={source}/>
    </View>
  )
}

export default SpaceRow
