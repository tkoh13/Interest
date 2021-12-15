import { RECEIVE_FOLLOWS, RECEIVE_FOLLOW, REMOVE_FOLLOW } from "../actions/follow_actions";

const followsReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);
    switch(action.type) {
        case RECEIVE_FOLLOWS:
            return action.follows
        case RECEIVE_FOLLOW:
            return Object.assign({}, nextState, { [action.follow.id]: action.follow })
        case REMOVE_FOLLOW:
            delete nextState[action.followId]
            return nextState
        default:
            return state
    }
}

export default followsReducer