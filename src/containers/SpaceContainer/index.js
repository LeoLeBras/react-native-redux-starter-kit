/* @flow */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import Container from '@components/Container'
import Title from '@components/Title'
import Link from '@components/Link'
import Space from '@components/Space'

class SpaceContainer extends Component {
  render() {
    return (
      <Container>
        <Space title={this.props.title} source={this.props.source}/>
      </Container>
    )
  }
}

export default connect()(SpaceContainer)
