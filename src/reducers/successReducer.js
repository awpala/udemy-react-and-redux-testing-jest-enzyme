import { actionTypes } from '../actions';

const initialState = {
    isSuccess: false,
};

/**
 * @function successReducer
 * @param {array} state - Array of guessed words.
 * @param {object} action - action to be reduced.
 * @returns {boolean} - new success state.
 */
const successReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CORRECT_GUESS:
            return {
                ...state,
                isSuccess: true
            };
        default:
            return state;
    }
}

export default successReducer;