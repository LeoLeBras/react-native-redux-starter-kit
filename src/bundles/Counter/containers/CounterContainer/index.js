/* @flow */

import React, { Component } from 'react'
import Counter from '@Counter/components/Counter'
import connect from './connect'

type Props = {
  counter: number,
  increment: Function,
  decrement: Function,
}

class CounterContainer extends Component {

  props: Props

  render() {
    return (
      <Counter
        value={this.props.counter}
        decrement={this.props.decrement}
        increment={this.props.increment}
      />
    )
  }

}

export default connect(CounterContainer)
