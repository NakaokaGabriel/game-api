import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import Game from '../pages/Game';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/game/:id" component={Game} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;
