import {
  ADD_PLAYER,
  SET_CURRENT_PLAYER,
  UPDATE_PLAYER_NAME,
  DELETE_PLAYER,
  DISTRIBUTE
} from '../actions/types';

const initialSate = {
  players: [{ name: 'Player 1', cards: [] }, { name: 'Player 2', cards: [] }],
  currentPlayer: null
};

export default (state = initialSate, action) => {
  switch (action.type) {
    case ADD_PLAYER:
      let playerNumber = state.players.length + 1;

      state.players.forEach(player => {
        if (`Player ${playerNumber}` === player.name) {
          playerNumber = playerNumber + ' bis';
        }
      });

      return {
        ...state,
        players: [
          ...state.players,
          { name: `Player ${playerNumber}`, cards: [] }
        ]
      };
    case SET_CURRENT_PLAYER:
      return {
        ...state,
        currentPlayer: action.payload
      };
    case UPDATE_PLAYER_NAME:
      state.players.forEach(player => {
        if (action.payload.newName === player.name) {
          action.payload.newName = action.payload.newName + ' bis';
        }
      });
      return {
        ...state,
        players: state.players.map(player => {
          if (action.payload.oldName === player.name) {
            player.name = action.payload.newName;
          }
          return player;
        })
      };
    case DELETE_PLAYER:
      return {
        ...state,
        players: state.players.filter(player => {
          if (player.name !== action.payload) {
            return player;
          }
        })
      };
    case DISTRIBUTE:
      return {
        ...state,
        players: action.payload
      };
    default:
      return state;
  }
};
