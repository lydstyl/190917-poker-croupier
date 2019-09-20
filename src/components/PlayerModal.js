import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import M from 'materialize-css/dist/js/materialize.min.js';
import PropTypes from 'prop-types';

import {
  setCurrentPlayer,
  updatePlayerName,
  deletePlayer
} from '../actions/playerActions';

const PlayerModal = ({
  currentPlayer,
  setCurrentPlayer,
  updatePlayerName,
  deletePlayer,
  players
}) => {
  const [name, setName] = useState(currentPlayer);

  useEffect(() => {
    setName(currentPlayer);
  }, [currentPlayer]);

  let playerCards;
  if (name) {
    playerCards = players.map(player => {
      if (player.name === name) {
        return (
          <div key={player.name} className='playerCards'>
            <div className={`card ${player.cards[0]}`}></div>
            <div className={`card ${player.cards[1]}`}></div>
          </div>
        );
      }
    });
  }

  const handleChangeName = e => {
    const oldName = name;
    const newName = e.target.value;
    setName(newName);
    setCurrentPlayer(newName);
    updatePlayerName(oldName, newName);
  };

  const handleRemovePlayer = e => {
    deletePlayer(currentPlayer);
    e.target.parentNode.style.display = 'none';
    document.querySelector('.modal-overlay').click();
    M.toast({ html: 'Player deleted' });
  };

  return (
    <form id='add-player-modal' className='modal'>
      <input type='text' value={name ? name : ''} onChange={handleChangeName} />

      {playerCards}

      <input type='submit' value='Remove player' onClick={handleRemovePlayer} />
    </form>
  );
};

PlayerModal.propTypes = {
  currentPlayer: PropTypes.string,
  setCurrentPlayer: PropTypes.func.isRequired,
  updatePlayerName: PropTypes.func.isRequired,
  deletePlayer: PropTypes.func.isRequired,
  players: PropTypes.array
};

const mapStateToProps = state => ({
  currentPlayer: state.player.currentPlayer,
  players: state.player.players
});

export default connect(
  mapStateToProps,
  { setCurrentPlayer, updatePlayerName, deletePlayer }
)(PlayerModal);
