import Immutable from 'immutable';

export const BAR = 'BAR';

const initialState = Immutable.fromJS({});

export default function foo(state = initialState, action) {
  switch (action.type) {
    default: return state;
  }
}

export const bar = () => ({
  type: BAR,
});
