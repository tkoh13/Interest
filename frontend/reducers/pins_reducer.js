import { RECEIVE_PINS, RECEIVE_PIN, REMOVE_PIN } from "../actions/pin_actions";

const pinsReducer = (state = {}, action) => {
    Object.freeze(state)
    const nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_PINS:
            return action.pins;
        case RECEIVE_PIN:
            return Object.assign({}, nextState, { [action.pin.id]: action.pin });
        case REMOVE_PIN:
            delete nextState[action.pinId]
            return nextState
        default:
            return state;
    }
};

export default pinsReducer; 