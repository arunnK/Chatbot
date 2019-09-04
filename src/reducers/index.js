import { combineReducers } from 'redux';
import userState from './user-state';
import messageState from './message-state';

export default combineReducers({
  userState,
  messageState
});
