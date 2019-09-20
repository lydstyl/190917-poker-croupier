import {
  ADD_PLAYER,
  SET_CURRENT_PLAYER,
  UPDATE_PLAYER_NAME
} from '../actions/types';

const initialSate = {
  players: [{ name: 'Player 1', cards: [] }, { name: 'Player 2', cards: [] }],
  currentPlayer: null
  // loading: false,
  // error: null
};

export default (state = initialSate, action) => {
  switch (action.type) {
    case ADD_PLAYER:
      const playerNumber = state.players.length + 1;
      return {
        ...state,
        players: [
          ...state.players,
          { name: `Player ${playerNumber}`, cards: [] }
        ]
        // loading: false
      };
    case SET_CURRENT_PLAYER:
      return {
        ...state,
        currentPlayer: action.payload
      };
    case UPDATE_PLAYER_NAME:
      return {
        ...state,
        players: state.players.map(player => {
          if (action.payload.oldName === player.name) {
            player.name = action.payload.newName;
          }
          return player;
        })
      };
    default:
      return state;
  }
};
