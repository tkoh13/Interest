import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import pinErrorsReducer from './pin_errors_reducer';
import boardsErrorsReducer from './board_reducer';
import userErrorsReducer from './user_errors_reducer';

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    pins: pinErrorsReducer,
    board: boardsErrorsReducer,
    user: userErrorsReducer
});

export default errorsReducer;


