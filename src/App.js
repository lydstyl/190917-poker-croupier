import React from 'react';
import BoardCards from './components/BoardCards';
import CroupierOrder from './components/CroupierOrder';
import Players from './components/Players';
import './App.css';

// const state = {
//   players = [],
//   cards = []
// }

function App() {
  return (
    <div className='App'>
      <h1>Poker Croupier</h1>

      <BoardCards />

      <Players />

      <CroupierOrder />
    </div>
  );
}

export default App;
