/* @flow */

import React, { Component } from 'react'
import { Actions } from 'react-native-router-flux'
import Container from '@components/Container'
import Title from '@components/Title'
import Link from '@components/Link'

class LauchContainer extends Component<void, void, void> {
  render() {
    return (
      <Container>
        <Title>Hey you ! =)</Title>
        <Link onPress={Actions.counter}>Go to counter</Link>
      </Container>
    )
  }
}

export default LauchContainer
