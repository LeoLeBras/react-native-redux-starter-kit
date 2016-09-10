/* @flow */

import { compose } from 'recompose'
import { connect } from 'react-redux'
import { decrement, increment } from '@store/modules/counter'

const mapStateToProps = (state) => ({
  counter: state.counter,
})

const mapActionsToProps = { increment, decrement }

export default (container) => compose(
  connect(
    mapStateToProps,
    mapActionsToProps,
  )
)(container)
