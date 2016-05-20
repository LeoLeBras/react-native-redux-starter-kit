/* @flow */

import React, { Component } from 'react'
import { Text } from 'react-native'
import { connect } from 'react-redux'
import { decrement, increment } from '@redux/counter'
import Container from '@components/Container'
import Title from '@components/Title'
import Counter from '@components/Counter'

@connect(state => ({counter: state.counter}), {increment, decrement})
export default class CounterContainer extends Component {

  static propTypes = {
    counter: React.PropTypes.number.isRequired,
    increment: React.PropTypes.func.isRequired,
    decrement: React.PropTypes.func.isRequired,
  }

  render() {
    const { counter, decrement, increment } = this.props
    return (
      <Container>
        <Title>Counter Decorator</Title>
        <Counter
          value={counter}
          decrement={decrement}
          increment={increment}
        />
      </Container>
    )
  }
}
