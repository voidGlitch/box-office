import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Home from './pages/home';
import Show from './pages/Show';
import { ThemeProvider } from 'styled-components';
import Starred from './pages/starred';

const theme = {
  mainColors: {
    blue: '#2400ff',
    gray: '#c6c6c6',
    dark: '#353535',
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}

export default App;
