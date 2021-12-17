import { RECEIVE_FOLLOW_ERRORS, RECEIVE_FOLLOWS, RECEIVE_FOLLOW, REMOVE_FOLLOW } from "../actions/follow_actions";

const followErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_FOLLOW_ERRORS:
            return action.errors;
        // return Object.values(action.errors.responseJSON)
        case RECEIVE_FOLLOWS:
            return []
        case RECEIVE_FOLLOW:
            return []
        case REMOVE_FOLLOW:
            return []
        default:
            return state
    }
}

export default followErrorsReducer;