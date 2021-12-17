import { RECEIVE_SAVE_ERRORS, RECEIVE_SAVES, RECEIVE_SAVE, REMOVE_SAVE } from "../actions/save_actions";

const saveErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SAVE_ERRORS:
            return action.errors;
        // return Object.values(action.errors.responseJSON)
        case RECEIVE_SAVES:
            return []
        case RECEIVE_SAVE:
            return []
        case REMOVE_SAVE:
            return []
        default:
            return state
    }
}

export default saveErrorsReducer;