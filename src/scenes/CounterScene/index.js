/* @flow */

import React from 'react'
import CounterContainer from '@containers/CounterContainer'

const CounterScene = (props: any): React$Element => {
  return (
    <CounterContainer {...props} />
  )
}

export default CounterScene;
