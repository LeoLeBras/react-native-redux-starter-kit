import Immutable from 'immutable';

const initialState = Immutable.fromJS({});

export default function bar(state = initialState, action) {
    switch(action.type) {
        default: state = state;
    }

    return state;
}
