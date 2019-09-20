import { MIX, FLOP, TURN, RIVER } from '../actions/types';

const initialSate = {
  cards: [],
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
    default:
      return state;
  }
};
