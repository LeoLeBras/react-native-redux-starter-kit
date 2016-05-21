/* @flow */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { decrement, increment } from '@store/modules/counter'
import Container from '@components/Container'
import Title from '@components/Title'
import Counter from '@components/Counter'

type Props = {
  counter: number,
  dispatch: (a: Function) => any,
}

class CounterContainer extends Component<void, Props, void> {
  props: Props
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

const mapStateToProps = (state) => ({
  counter: state.counter,
})

export default connect(mapStateToProps)(CounterContainer)
