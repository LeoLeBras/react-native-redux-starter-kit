/* @flow */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import Container from '@components/Container'
import Title from '@components/Title'
import Link from '@components/Link'

class LauchContainer extends Component {
  render() {
    return (
      <Container>
        <Title>Hey you ! =)</Title>
        <Link onPress={Actions.counter}>Go to counter</Link>
        <Link onPress={Actions.decoratorcounter}>Go to counter with decorator</Link>
      </Container>
    )
  }
}

export default connect()(LauchContainer)
