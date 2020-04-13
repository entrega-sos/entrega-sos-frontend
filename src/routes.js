import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Voluntarios from './pages/Voluntarios';
import Cidades from './pages/Consulta/Cidades';
import Cadastro from './pages/Cadastro';
import ConsultaCadastro from './pages/ConsultaCadastro';

import Brumado from './pages/Cidades/Brumado';
import Feiradesantana from './pages/Cidades/Feiradesantana';
import Guanambi from './pages/Cidades/Guanambi';
import Jequie from './pages/Cidades/Jequie';
import Salvador from './pages/Cidades/Salvador';
import SantoAntonio from './pages/Cidades/SantoAntonio';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/cidades" exact component={Cidades} />
      <Route path="/cadastro/empresa" component={Cadastro} />
      <Route path="/voluntarios" component={Voluntarios} />
      <Route path="/consulta/cadastro" component={ConsultaCadastro} />

      <Route path="/cidades/Brumado" component={Brumado} />
      <Route path="/cidades/FeiradeSantana" component={Feiradesantana} />
      <Route path="/cidades/Guanambi" component={Guanambi} />
      <Route path="/cidades/Jequié" component={Jequie} />
      <Route path="/cidades/Salvador" component={Salvador} />
      <Route path="/cidades/SantoAntôniodeJesus" component={SantoAntonio} />
    </Switch>
  );
}
