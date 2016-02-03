import Immutable from 'immutable';
const initialState = Immutable.fromJS({});

import { actionTypes } from '../actions/BarActions';
const { BAR } = actionTypes;

export default function bar(state = initialState, action) {
    switch(action.type) {
        case BAR:
            state = state;
            break;
    }

    return state;
}
