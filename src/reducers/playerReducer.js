import { SET_LOADING, ADD_PLAYER } from '../actions/types';

const initialSate = {
  players: [],
  loading: false,
  error: null
};

export default (state = initialSate, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case ADD_PLAYER:
      return {
        ...state,
        players: [...state.players, action.payload],
        loading: false
      };
    default:
      return state;
  }
};
