import { combineReducers } from 'redux';
import entitiesReducer from './entities_Reducer';
import sessionReducer from './session_reducer';
import sessionErrorsReducer from './session_errors_reducer';

/*
Export a `RootReducer` that sets up a `posts` slice of state, which delegates
to the `PostsReducer`.
*/

const RootReducer = combineReducers({
    entities: entitiesReducer,
    session: sessionReducer,
    sessionErrors: sessionErrorsReducer
});

export default RootReducer;