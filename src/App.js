import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import M from 'materialize-css/dist/js/materialize.min.js';

import BoardCards from './components/BoardCards';
import CroupierOrder from './components/CroupierOrder';
import Players from './components/Players';

import 'materialize-css/dist/css/materialize.min.css';
import './App.css';

import store from './store';

function App() {
  useEffect(() => {
    M.AutoInit(); // Init Materialize JS
  });

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
