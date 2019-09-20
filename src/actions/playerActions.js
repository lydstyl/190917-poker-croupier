import { ADD_PLAYER, SET_LOADING } from './types';

// Add new player
export const addPlayer = () => async dispatch => {
  dispatch({
    type: ADD_PLAYER
    // payload: player
  });
};

// Delete player

// Set loading to true
export const setLoading = () => {
  return { type: SET_LOADING };
};
