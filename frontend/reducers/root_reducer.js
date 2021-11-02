import { combineReducers } from 'redux';
import entitiesReducer from './entities_reducer';
import sessionReducer from './session_reducer';
import sessionErrorsReducer from './session_errors_reducer';


const RootReducer = combineReducers({
    entities: entitiesReducer,
    session: sessionReducer,
    sessionErrors: sessionErrorsReducer
});

export default RootReducer;