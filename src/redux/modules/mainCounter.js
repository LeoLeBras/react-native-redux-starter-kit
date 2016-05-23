const INCREMEN = 'INCREMEN'
const DECREMENT = 'DECREMENT'
const RESET = 'RESET'

const initialState = 0

export default function routes(state = initialState, action = {}) {
  switch (action.type) {
    case DECREMENT:
      return state - 1
    case INCREMEN:
      return state + 1
    case RESET:
      return 0
    default:
      return state
  }
}

export const mdecrement = () => ({
  type: DECREMENT,
})

export const mincrement = () => ({
  type: INCREMEN,
})

export const mreset = () => ({type: RESET})
