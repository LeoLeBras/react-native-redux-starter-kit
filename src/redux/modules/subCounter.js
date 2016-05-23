const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const RESET = 'RESET'

const initialStat = 0

export default function routes(state = initialStat, action = {}) {
  var counter = state["counter"] || 0;
  switch (action.type) {
    case DECREMENT:
      return state - 1;
    case INCREMENT:
      return state + 1;
    case RESET:
      return 42;
    default:
      return state;
  }
}

export const sdecrement = () => ({
  type: DECREMENT,
})

export const sincrement = () => ({
  type: INCREMENT,
})

export const sreset = () => ({type: RESET})
