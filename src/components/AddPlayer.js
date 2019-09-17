import React from 'react';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addPlayer } from '../actions/playerActions';

const AddPlayer = ({ addPlayer }) => {
  const onAdd = () => {
    console.log('addPlayer');
    // if 12 players display none
    addPlayer({ name: 'coco', cards: [] });
  };

  return (
    <button className='player' onClick={onAdd}>
      +
    </button>
  );
};

AddPlayer.propTypes = {
  addPlayer: PropTypes.func.isRequired
};

export default connect(
  null,
  { addPlayer }
)(AddPlayer);
