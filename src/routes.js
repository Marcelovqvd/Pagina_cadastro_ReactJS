import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Users from './paginas/Users';
import User from './paginas/User';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/users" component={Users} />
        <Route path="/user/:id" component={User} />
      </Switch>
    </BrowserRouter>
  )
}