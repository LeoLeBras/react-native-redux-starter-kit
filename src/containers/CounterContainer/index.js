/* @flow */

import React, { Component } from 'react'
import { Text } from 'react-native'
import { connect } from 'react-redux'
import { mdecrement, mincrement, mreset } from '@redux/mainCounter'
import { sdecrement, sincrement, sreset } from '@redux/subCounter'
import Container from '@components/Container'
import Title from '@components/Title'
import Counter from '@components/Counter'
import SubCounter from '@components/SubCounter'
import Button from '@components/Button'

class CounterContainer extends Component {
  render() {
    const { mainCounter, subCounter, dispatch } = this.props
    return (
      <Container>
        <Title>Counter</Title>
        <Counter
          value={mainCounter}
          decrement={() => dispatch(mdecrement())}
          increment={() => dispatch(sincrement())}
          reset={() => dispatch(mreset())}
        />
        
        <Counter
          value={subCounter}
          decrement={() => dispatch(sdecrement())}
          increment={() => dispatch(sincrement())}
          reset={() => dispatch(sreset())}
        />
        
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  mainCounter: state.mainCounter,
  subCounter: state.subCounter
})

export default connect(mapStateToProps)(CounterContainer)
