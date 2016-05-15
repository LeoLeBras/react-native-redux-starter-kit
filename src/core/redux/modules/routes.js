import Immutable from 'immutable'

const FOCUS = 'FOCUS'

const initialState = Immutable.fromJS({
  scene: {},
})

export default function routes(state = initialState, action = {}) {
  switch (action.type) {
    case FOCUS:
      return state.setIn(['scene'], action.scene)
    default:
      return state
  }
}
