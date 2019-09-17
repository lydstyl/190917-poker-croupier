import React from 'react';

const AddPlayer = () => {
  const onAdd = () => {
    console.log('addPlayer');
    // if 12 players display none
  };

  return (
    <button className='player' onClick={onAdd}>
      +
    </button>
  );
};

export default AddPlayer;
