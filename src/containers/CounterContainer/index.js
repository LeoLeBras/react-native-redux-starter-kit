/* @flow */

import React, { Component } from 'react'
import { Text } from 'react-native'
import { connect } from 'react-redux'
import { decrement, increment, reset } from '@redux/counter'
import Container from '@components/Container'
import Title from '@components/Title'
import Counter from '@components/Counter'
import Button from '@components/Button'

class CounterContainer extends Component {
  render() {
    const { counter, dispatch } = this.props
    return (
      <Container>
        <Title>Counter</Title>
        <Counter
          value={counter}
          decrement={() => dispatch(decrement())}
          increment={() => dispatch(increment())}
          reset={() => dispatch(reset())}
        />
        
        <Counter
          value={counter}
          decrement={() => dispatch(decrement())}
          increment={() => dispatch(increment())}
          reset={() => dispatch(reset())}
        />
        
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter.counter
})

export default connect(mapStateToProps)(CounterContainer)
