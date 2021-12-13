import { RECEIVE_BOARD_ERRORS, RECEIVE_BOARDS, RECEIVE_BOARD } from '../actions/board_actions'

const boardErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_BOARD_ERRORS:
            return action.errors;
            // return Object.values(action.errors.responseJSON)
        case RECEIVE_BOARDS:
            return []
        case RECEIVE_BOARD:
            return []
        default:
            return state
    }
}

export default boardErrorsReducer;