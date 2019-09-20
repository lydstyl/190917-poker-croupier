import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min.js';

import { addPlayer } from '../actions/playerActions';

const AddPlayer = ({ playersLen, addPlayer }) => {
  const onAdd = () => {
    if (playersLen < 12) {
      addPlayer();
      M.toast({ html: 'Player added' });
    }
  };

  return (
    <button
      className={`red player ${playersLen === 12 && 'hide'}`}
      onClick={onAdd}
    >
      <i className='material-icons'>person_add</i>
    </button>
  );
};

AddPlayer.propTypes = {
  addPlayer: PropTypes.func.isRequired,
  playersLen: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
  playersLen: state.player.players.length // player come from root reducer
});

export default connect(
  mapStateToProps,
  { addPlayer }
)(AddPlayer);
