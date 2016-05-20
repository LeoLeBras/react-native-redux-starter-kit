/* @flow */

import React, { Component } from 'react'
import { Text } from 'react-native'
import { connect } from 'react-redux'
import { decrement, increment } from '@redux/counter'
import Container from '@components/Container'
import Title from '@components/Title'
import Counter from '@components/Counter'

@connect(state => ({counter: state.counter}))
export default class CounterContainer extends Component {

  static propTypes = {
    counter: React.PropTypes.number.isRequired,
  }

  render() {
    const { counter, dispatch } = this.props
    return (
      <Container>
        <Title>Counter</Title>
        <Counter
          value={counter}
          decrement={() => dispatch(decrement())}
          increment={() => dispatch(increment())}
        />
      </Container>
    )
  }
}
