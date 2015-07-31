import * as types from 'constants/ActionTypes.jsx';

export function sample(id){
    return {
        type: types.SAMPLE,
        id
    }
}
