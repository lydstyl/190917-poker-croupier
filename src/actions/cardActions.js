import { MIX, FLOP, TURN, RIVER } from './types';

import MixedCards from '../utils/mixedCards';

// Mix cards
export const mixCards = () => async dispatch => {
  const mixedCards = new MixedCards();
  dispatch({
    type: MIX,
    payload: mixedCards.mixedCards
  });
};

// showFlop

// showTurn

// shoRiver
