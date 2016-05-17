const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

const initialState = 0

export default function routes(state = initialState, action = {}) {
  switch (action.type) {
    case DECREMENT:
      return state - 1
    case INCREMENT:
      return state + 1
    default:
      return state
  }
}

export const decrement = () => ({
  type: DECREMENT,
})

export const increment = () => ({
  type: INCREMENT,
})
