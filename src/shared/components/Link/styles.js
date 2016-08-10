/* @flow */

import { StyleSheet } from 'react-native'
import { DEFAULT_TEXT_COLOR } from '@theme/colors'

const styles = StyleSheet.create({
  main: {
    margin: 10,
    fontSize: 15,
    textAlign: 'center',
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: DEFAULT_TEXT_COLOR,
    color: DEFAULT_TEXT_COLOR,
  },
})

export default styles
