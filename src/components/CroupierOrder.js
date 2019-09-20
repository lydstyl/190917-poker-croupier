import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min.js';

import { mixCards } from '../actions/cardActions';
import { distribute } from '../actions/playerActions';

const CroupierOrder = ({ mixCards, cards, players, distribute }) => {
  useEffect(() => {
    if (!cards.length) {
      mixCards();
      M.toast({ html: 'Cards mixed' });
    }
  }, []);

  const handleClick = () => {
    // distribute cards to players
    players.map(player => {
      player.cards[0] = cards.pop();
      player.cards[1] = cards.pop();
    });
    distribute(players);

    // PREPARE BOARD CARDS (flop, turn, river)
    // SET_BOARD_CARDS
  };

  return (
    <button className='croupier-order' onClick={handleClick}>
      <h2>Distribute - Flop - Turn - River</h2>
    </button>
  );
};

CroupierOrder.propTypes = {
  mixCards: PropTypes.func.isRequired,
  distribute: PropTypes.func.isRequired,
  cards: PropTypes.array.isRequired,
  players: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  cards: state.card.cards,
  players: state.player.players
});

export default connect(
  mapStateToProps,
  { mixCards, distribute }
)(CroupierOrder);
