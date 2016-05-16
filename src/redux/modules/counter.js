const INCREMENT = 'INCREMENT'

const initialState = 0

export default function routes(state = initialState, action = {}) {
  switch (action.type) {
    case INCREMENT:
      return state + 1
    default:
      return state
  }
}
