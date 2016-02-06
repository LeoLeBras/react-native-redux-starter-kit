/**
 * Reduce boilerplate by
 * generate action types
 *
 * @param {array} constants
 * @return {object} response
 */
export default function generateActionTypes(...constants) {
    let actionTypes = {};

    constants.forEach(constant => {
        actionTypes = {
            ...actionTypes,
            [constant]: constant
        };
    })

    return actionTypes;
}
