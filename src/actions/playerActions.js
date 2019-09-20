import {
  ADD_PLAYER,
  SET_CURRENT_PLAYER,
  UPDATE_PLAYER_NAME,
  DELETE_PLAYER,
  DISTRIBUTE
} from './types';

// Add new player
export const addPlayer = () => async dispatch => {
  dispatch({
    type: ADD_PLAYER
  });
};

// Set current player
export const setCurrentPlayer = name => async dispatch => {
  dispatch({
    type: SET_CURRENT_PLAYER,
    payload: name
  });
};

// Update player name
export const updatePlayerName = (oldName, newName) => async dispatch => {
  dispatch({
    type: UPDATE_PLAYER_NAME,
    payload: { oldName, newName }
  });
};

// Delete player
export const deletePlayer = playerName => async dispatch => {
  dispatch({
    type: DELETE_PLAYER,
    payload: playerName
  });
};

// Distribute cards to player
export const distribute = players => async dispatch => {
  dispatch({
    type: DISTRIBUTE,
    payload: players
  });
};
