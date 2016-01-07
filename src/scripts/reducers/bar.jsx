import Immutable from 'immutable';
import { EXAMPLE } from 'constants/ActionTypes';

const initialState = Immutable.fromJS({});

export default function bar(state = initialState, action) {
    switch(action.type) {
        case EXAMPLE:
            state = state;
            break;
    }

    return state;
}
