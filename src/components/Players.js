import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Player from './Player';
import AddPlayer from './AddPlayer';

const Players = ({ players }) => {
  players = players.map(player => {
    return <Player key={player.name} player={player} />;
  });

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
