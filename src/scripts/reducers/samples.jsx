import { handleActions } from 'redux-actions';
import { SAMPLE } from 'constants/ActionTypes';

export const samples = handleActions({
    [SAMPLE]: (state) => (
        state
    )
}, []);
