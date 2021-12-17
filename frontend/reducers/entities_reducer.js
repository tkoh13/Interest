import { combineReducers } from 'redux'
import usersReducer from './users_reducer'
import pinsReducer from './pins_reducer';
import boardsReducer from './boards_reducer';
import followsReducer from './follows_reducer';
import savesReducer from './saves_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  pins: pinsReducer,
  boards: boardsReducer,
  follows: followsReducer,
  saves: savesReducer
});

export default entitiesReducer;