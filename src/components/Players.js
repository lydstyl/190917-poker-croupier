import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Player from './Player';
import AddPlayer from './AddPlayer';

const Players = ({ players }) => {
  players = players.map((player, index) => (
    <Player key={index} name={player.name} />
  ));

  return (
    <div className='players'>
      {players}

      <AddPlayer />
    </div>
  );
};

Players.propTypes = {
  players: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  players: state.player.players
});

export default connect(
  mapStateToProps,
  null
)(Players);
