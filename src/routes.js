import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


import Usuarios from './paginas/Usuarios';
import Inclusao from './paginas/Inclusao';
import Edicao from './paginas/Edicao';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Usuarios} />
        <Route path="/users/:id" component={Inclusao} />
        <Route path="/users" component={Edicao} />
      </Switch>
    </BrowserRouter>
  )
}