import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min.js';

import {
  mixCards,
  prepareBoardCards,
  setGameRound
} from '../actions/cardActions';
import { distribute } from '../actions/playerActions';

const CroupierOrder = ({
  mixCards,
  cards,
  players,
  distribute,
  prepareBoardCards,
  setGameRound
}) => {
  const gameSteps = ['Distribute', 'Flop', 'Turn', 'River', 'Next game'];
  const [gameStep, setGameStep] = useState(gameSteps[0]);

  useEffect(() => {
    if (!cards.length) {
      mixCards();
      M.toast({ html: 'Cards mixed' });
    }
  });

  const handleClick = () => {
    switch (gameStep) {
      case gameSteps[0]:
        // distribute cards to players
        players.map(player => {
          player.cards[0] = cards.pop();
          player.cards[1] = cards.pop();
          return player;
        });
        distribute(players);
        M.toast({ html: 'Cards distribued to players' });

        // distribute / prepare cards on board
        const boardCards = {
          flop: [cards.pop(), cards.pop(), cards.pop()],
          turn: cards.pop(),
          river: cards.pop()
        };
        prepareBoardCards(boardCards);
        M.toast({ html: 'Board cards prepared' });

        setGameStep(gameSteps[1]);
        setGameRound(1);
        break;
      case gameSteps[1]:
        setGameStep(gameSteps[2]);
        setGameRound(2);
        break;
      case gameSteps[2]:
        setGameStep(gameSteps[3]);
        setGameRound(3);
        break;
      case gameSteps[3]:
        setGameStep(gameSteps[4]);
        setGameRound(4);
        break;
      case gameSteps[4]:
        setGameStep(gameSteps[0]);
        setGameRound(0);
        break;

      default:
        break;
    }
  };

  return (
    <button className='croupier-order' onClick={handleClick}>
      <h2>{gameStep}</h2>
    </button>
  );
};

CroupierOrder.propTypes = {
  mixCards: PropTypes.func.isRequired,
  distribute: PropTypes.func.isRequired,
  prepareBoardCards: PropTypes.func.isRequired,
  setGameRound: PropTypes.func.isRequired,
  cards: PropTypes.array.isRequired,
  players: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  cards: state.card.cards,
  players: state.player.players
});

export default connect(
  mapStateToProps,
  { mixCards, distribute, prepareBoardCards, setGameRound }
)(CroupierOrder);
