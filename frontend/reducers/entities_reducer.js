import { combineReducers } from 'redux'
import usersReducer from './users_reducer'
import pinsReducer from './pins_reducer';
import boardsReducer from './board_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  pins: pinsReducer,
  boards: boardsReducer
});

export default entitiesReducer;