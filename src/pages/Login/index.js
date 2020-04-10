import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import history from '../../services/history';

import { Container, LoginContent, Box, LoginButton } from './styles';

import api from '../../services/api';

export default function Login() {
  const [login, setLogin] = useState('');
  const [page] = useState(1);

  const [visible, setVisible] = useState(true);
  const [show, setShow] = useState(false);

  async function handleLogin() {
    const response = await api.get('/empresas', {
      params: {
        page,
        per_page: 1000,
      },
    });
    const negocios = response.data.items;

    const filteredAdmin = negocios.filter(function filterData(negocio) {
      return negocio.usuario === login && negocio.admin === true;
    });

    if (filteredAdmin) {
      return history.push('/cadastro');
    }
  }
  return (
    <Container>
      <LoginContent visible={visible}>
        <Box>
          <strong>Usuário</strong>
          <input
            type="text"
            placeholder="Seu usuário"
            onChange={event => setLogin(event.target.value)}
          />
        </Box>
        <LoginButton type="submit" onClick={() => handleLogin()}>
          <span>Entrar</span>
        </LoginButton>
      </LoginContent>
    </Container>
  );
}
