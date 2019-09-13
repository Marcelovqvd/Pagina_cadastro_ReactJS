import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


import Usuarios from './paginas/Usuarios';
import Inclusao from './paginas/Inclusao';
import Edicao from './paginas/Edicao';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/users" component={Usuarios} />
        <Route path="/users/post" component={Inclusao} />
        <Route path="/users/:id" component={Edicao} />
      </Switch>
    </BrowserRouter>
  )
}