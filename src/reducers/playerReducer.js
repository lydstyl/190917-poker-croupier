import { SET_LOADING, ADD_PLAYER } from '../actions/types';

const initialSate = {
  players: [{ name: 'Player 1', cards: [] }, { name: 'Player 2', cards: [] }],
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
      const playerNumber = state.players.length + 1;
      return {
        ...state,
        players: [
          ...state.players,
          { name: `Player ${playerNumber}`, cards: [] }
        ],
        loading: false
      };
    default:
      return state;
  }
};
