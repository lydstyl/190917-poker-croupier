import { MIX, PREPARE_BOARD_CARDS, SET_GAME_ROUND } from '../actions/types';

const initialSate = {
  cards: [],
  round: 0,
  flop: [],
  turn: null,
  river: null
};

export default (state = initialSate, action) => {
  switch (action.type) {
    case MIX:
      return {
        ...state,
        cards: action.payload
      };
    case PREPARE_BOARD_CARDS:
      return {
        ...state,
        flop: action.payload.flop,
        turn: action.payload.turn,
        river: action.payload.river
      };
    case SET_GAME_ROUND:
      return {
        ...state,
        round: action.payload
      };
    default:
      return state;
  }
};
