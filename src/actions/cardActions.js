import { MIX, PREPARE_BOARD_CARDS, SET_GAME_ROUND } from './types';

import MixedCards from '../utils/mixedCards';

// Mix cards
export const mixCards = () => async dispatch => {
  const mixedCards = new MixedCards();
  dispatch({
    type: MIX,
    payload: mixedCards.mixedCards
  });
};

// Prepare board cards
export const prepareBoardCards = boardCards => async dispatch => {
  dispatch({
    type: PREPARE_BOARD_CARDS,
    payload: boardCards
  });
};

// Set game round
export const setGameRound = roundName => async dispatch => {
  dispatch({
    type: SET_GAME_ROUND,
    payload: roundName
  });
};
