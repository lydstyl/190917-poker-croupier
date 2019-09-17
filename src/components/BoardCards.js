import React from 'react';
import BoardCard from './BoardCard';

const BoardCards = () => {
  return (
    <div className='board'>
      <BoardCard name='three_clubs' />
      <BoardCard name='ace_hearts' />
      <BoardCard name='king_diamonds' />
      <BoardCard name='five_hearts' />
      <BoardCard name='jack_diamonds' />
    </div>
  );
};

export default BoardCards;
