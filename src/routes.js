import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Usuarios from './paginas/Usuarios';


export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/users" component={Usuarios} />
      </Switch>
    </BrowserRouter>
  )
}