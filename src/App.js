import React from 'react';

import BoardCards from './components/BoardCards';
import CroupierOrder from './components/CroupierOrder';
import Players from './components/Players';

import './App.css';

import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <h1>Poker Croupier</h1>

        <BoardCards />

        <Players />

        <CroupierOrder />
      </div>
    </Provider>
  );
}

export default App;
