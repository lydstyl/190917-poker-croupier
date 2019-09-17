import React from 'react';

const PlayerModal = () => {
  return (
    <form>
      <input type='text' value='Name' />
      <input type='submit' value='Save' />
      <div className='playerCards'>
        <div className='card ace_hearts'></div>
        <div className='card three_clubs'></div>
      </div>
      <input type='submit' value='Remove player' />
    </form>
  );
};

export default PlayerModal;
