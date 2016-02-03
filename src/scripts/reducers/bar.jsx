import Immutable from 'immutable';
import { BAR } from '../constants/ActionTypes';

const initialState = Immutable.fromJS({});

export default function bar(state = initialState, action) {
    switch(action.type) {
        case BAR:
            state = state;
            break;
    }

    return state;
}
