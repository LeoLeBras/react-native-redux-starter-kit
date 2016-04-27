const initialState = {
  scene: {},
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'focus':
      return {
        ...state,
        scene: action.scene,
      };

    default:
      return state;
  }
}
