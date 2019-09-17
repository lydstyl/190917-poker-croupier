import React from 'react';
import Player from './Player';
import AddPlayer from './AddPlayer';

const Players = () => {
  return (
    <div className='players'>
      <Player name='Robert' />
      <Player name='Antoine' />
      <Player name='Oliver' />
      <Player name='p4' />
      <Player name='p5' />
      <Player name='p6' />
      <Player name='p7' />
      <Player name='p8' />
      <Player name='p9' />

      <AddPlayer />
    </div>
  );
};

export default Players;
