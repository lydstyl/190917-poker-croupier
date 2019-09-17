import React from 'react';
import './App.css';

function App() {
  return (
    <div className='App'>
      <h1>Poker Croupier</h1>
      <div className='board'>
        <div className='card three_clubs'></div>
        <div className='card ace_hearts'></div>
        <div className='card king_diamonds'></div>
        <div className='card five_hearts'></div>
        <div className='card jack_diamonds'></div>
      </div>
      <button className='croupier-order'>
        <h2>Distribute - Flop - Turn - River</h2>
      </button>
      <div className='players'>
        <button className='player'>p1</button>
        <button className='player'>p2</button>
        <button className='player'>p3</button>
        <button className='player'>p4</button>
        <button className='player'>p5</button>
        <button className='player'>p6</button>
        <button className='player'>p7</button>
        <button className='player'>p8</button>
        <button className='player'>p9</button>
        <button className='player'>+</button>
      </div>
    </div>
  );
}

export default App;
