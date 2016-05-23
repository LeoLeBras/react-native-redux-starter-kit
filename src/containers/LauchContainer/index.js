/* @flow */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import Container from '@components/Container'
import Title from '@components/Title'
import Link from '@components/Link'
import SpaceRow from '@components/SpaceRow'

class LauchContainer extends Component {
  render() {
    return (
      <Container>
        <SpaceRow id={123} title="Test Space 1" source={{uri: "https://gohugo.io/img/hugo-logo.png"}} />
          <SpaceRow id={456} title="Test Space 2" source={{uri: "https://gohugo.io/img/hugo-logo.png"}} />
      </Container>
    )
  }
}

export default connect()(LauchContainer)
