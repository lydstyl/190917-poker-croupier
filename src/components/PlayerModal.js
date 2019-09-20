import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { updatePlayerName } from '../actions/playerActions';

const PlayerModal = ({ currentPlayer, updatePlayerName }) => {
  const [name, setName] = useState(currentPlayer);

  useEffect(() => {
    setName(currentPlayer);
  }, [currentPlayer]);

  const handleChange = e => {
    const oldName = name;
    const newName = e.target.value;
    setName(newName);
    updatePlayerName(oldName, newName);
  };

  return (
    <form id='add-player-modal' className='modal'>
      <input type='text' value={name ? name : ''} onChange={handleChange} />
      <div className='playerCards'>
        <div className='card ace_hearts'></div>
        <div className='card three_clubs'></div>
      </div>
      <input type='submit' value='Remove player' />
    </form>
  );
};

PlayerModal.propTypes = {
  currentPlayer: PropTypes.string,
  updatePlayerName: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  currentPlayer: state.player.currentPlayer
});

export default connect(
  mapStateToProps,
  { updatePlayerName }
)(PlayerModal);
