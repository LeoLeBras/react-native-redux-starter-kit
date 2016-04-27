import generateActionTypes from '../utils/generateActionTypes';

export const actionTypes = generateActionTypes(
    'BAR'
);

export function bar() {
    return {
        type: actionTypes.BAR
    };
}
