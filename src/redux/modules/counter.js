const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const RESET = 'RESET'

const initialState = {}

export default function routes(state = initialState, action = {}) {
  var counter = state["counter"] || 0;
  switch (action.type) {
    case DECREMENT:
      return {counter: counter - 1}
    case INCREMENT:
      return {counter: counter + 1}
    case RESET:
      return {counter: 0}
    default:
      return {counter: counter}
  }
}

export const decrement = () => ({
  type: DECREMENT,
})

export const increment = () => ({
  type: INCREMENT,
})

export const reset = () => ({type: RESET})
