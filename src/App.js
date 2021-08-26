import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Home from './pages/home';

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
      <Route>this is 404 page error</Route>
    </Switch>
  );
}

export default App;
