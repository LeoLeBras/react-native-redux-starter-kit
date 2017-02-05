/* @flow */

import React, { Component } from 'react'
import { Platform } from 'react-native'
import { Actions } from 'react-native-router-flux'
import Container from '@components/Container'
import Title from '@components/Title'
import Link from '@components/Link'

class LaunchContainer extends Component<void, void, void> {
  render() {
    return (
      <Container>
        <Title>Hello there 😃 !</Title>
        <Link onPress={Actions.counter}>Go to counter</Link>
      </Container>
    )
  }
}

export default LaunchContainer
