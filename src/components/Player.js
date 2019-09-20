import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { setCurrentPlayer } from '../actions/playerActions';

const Player = ({ player, setCurrentPlayer }) => {
  const handleClick = e => {
    setCurrentPlayer(player.name);
  };
  return (
    <Fragment>
      <a
        href='#add-player-modal'
        className='player modal-trigger'
        onClick={handleClick}
      >
        {player.name} <i className='material-icons'>zoom_in</i>
      </a>
    </Fragment>
  );
};

Player.propTypes = {
  player: PropTypes.object.isRequired,
  setCurrentPlayer: PropTypes.func.isRequired
};

export default connect(
  null,
  { setCurrentPlayer }
)(Player);
