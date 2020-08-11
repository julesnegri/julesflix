import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function Erro404() {
  return (
    <PageDefault>
      <h1>Erro 404</h1>
      <h2>Ops... Acredito que você esteja perdido.</h2>

      <Link to="/">
        Retornar a Página Inicial
      </Link>

      <div>
        <h3>Opa :( </h3>
      </div>

    </PageDefault>
  );
}

export default Erro404;
