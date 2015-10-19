import * as types from 'constants/ActionTypes';

export function sample(id){
    return {
        type: types.SAMPLE,
        id
    };
}
