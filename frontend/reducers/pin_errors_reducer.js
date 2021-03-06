import { RECEIVE_PINS, RECEIVE_PIN, RECEIVE_PIN_ERRORS } from '../actions/pin_actions';

const pinErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_PIN_ERRORS:
            return action.errors;
            // return Object.values(action.errors.responseJSON);    
        case RECEIVE_PINS:
            return [];
        case RECEIVE_PIN:
            return [];
        default:
            return state;
    }
}

export default pinErrorsReducer;
