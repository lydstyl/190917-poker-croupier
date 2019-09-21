import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Player from './Player';
import AddPlayer from './AddPlayer';

const Players = ({ players, round }) => {
  players = players.map(player => {
    return <Player key={player.name} player={player} />;
  });

  return (
    <div className='players'>
      {!round && <AddPlayer />}

      {players}
    </div>
  );
};

Players.propTypes = {
  players: PropTypes.array.isRequired,
  round: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
  players: state.player.players,
  round: state.card.round
});

export default connect(
  mapStateToProps,
  null
)(Players);
