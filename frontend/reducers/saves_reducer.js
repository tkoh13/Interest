import { RECEIVE_SAVES, RECEIVE_SAVE, REMOVE_SAVE } from "../actions/save_actions";

const savesReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_SAVES:
            return action.saves
        case RECEIVE_SAVE:
            return Object.assign({}, nextState, { [Object.keys(action.save)[0]]: Object.values(action.save)[0] })
        case REMOVE_SAVE:
            delete nextState[action.saveId]
            return nextState
        default:
            return state
    }
}

export default savesReducer