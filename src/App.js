import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

import Players from './components/players';
import TeamSelected from './components/teamSelected';

const App = () => {
  return (
    <Provider store={store}>
      <main>
        <h1>ED Manager</h1>
        <Players />
        <TeamSelected />
      </main>
    </Provider>
  );
}

export default App;
