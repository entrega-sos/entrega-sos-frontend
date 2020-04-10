import React from 'react';
import { Link } from 'react-router-dom';

import { MdHome } from 'react-icons/md';
import { TiArrowBack } from 'react-icons/ti';

import EntregaBranco from '../../assets/logo-esos.svg';

import { Container, Button } from './styles';

import history from '../../services/history';

export default function Header() {
  return (
    <Container>
      <Link to="/">
        <MdHome size={25} color="#fff" />
      </Link>
      <Link to="/">
        <img src={EntregaBranco} alt="Entrega SoS" />
      </Link>
      <Button onClick={() => history.goBack()}>
        <TiArrowBack size={25} color="#fff" />
      </Button>
    </Container>
  );
}
