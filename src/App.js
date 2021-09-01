import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Home from './pages/home';
import Show from './pages/Show';
import Starred from './pages/starred';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/starred">
        <Starred />
      </Route>
      <Route exact path="/show/:id">
        <Show />
      </Route>
      <Route>this is 404 page error</Route>
    </Switch>
  );
}

export default App;
