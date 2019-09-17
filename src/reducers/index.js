import { combineReducers } from 'redux';
import cardReducer from './cardReducer';
import playerReducer from './playerReducer';

export default combineReducers({
  card: cardReducer, // log is what we call our state just for the logReducer
  player: playerReducer
});
