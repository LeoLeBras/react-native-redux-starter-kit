/* @flow */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { decrement, increment } from '@store/modules/counter'
import Counter from '@Counter/components/Counter'

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

const mapStateToProps = (state) => ({
  counter: state.counter,
})

const mapActionsToProps = { increment, decrement }

export default connect(mapStateToProps, mapActionsToProps)(CounterContainer)
