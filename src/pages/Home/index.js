import React from 'react';

import { MdSearch } from 'react-icons/md';
import { FaHeart, FaPlus } from 'react-icons/fa';

import DeliveryMan from '../../assets/deliveryman.svg';
import Giross from '../../assets/Giross - Marca - AF 1 (1).png';

import history from '../../services/history';

import {
  Container,
  Content,
  TextBox,
  Title,
  ButtonBox,
  ImageBox,
  ButtonSearch,
  ButtonAdd,
  ButtonBoxBottom,
  ButtonVoluntarios,
} from './styles';

export default function Home() {
  return (
    <Container>
      <Content>
        <div className="box">
          <TextBox>
            <Title>Entrega SOS</Title>

            <p>
              Aqui você encontra mercados, farmácias e outros estabelecimentos
              que entregam as compras na sua casa ou a{' '}
              <span>
                <img src={Giross} alt="Giross" />
              </span>{' '}
              pode fazer isso por você!
              <br />
              <br />
              <span>
                Evite sair de casa, vamos todos juntos combater o coronavírus!
              </span>
            </p>
          </TextBox>
          <ImageBox>
            <img src={DeliveryMan} alt="" />
          </ImageBox>
        </div>

        <ButtonBox>
          <ButtonSearch onClick={() => history.push('/cidades')}>
            <MdSearch size={20} color="#fff" />
            <span>Consultar estabelecimentos</span>
          </ButtonSearch>

          <ButtonAdd onClick={() => history.push('/consulta/cadastro')}>
            <FaPlus size={20} color="#f8930d" />
            <p>Cadastre seu estabelecimento</p>
          </ButtonAdd>

          <ButtonBoxBottom>
            <ButtonVoluntarios onClick={() => history.push('/voluntarios')}>
              <FaHeart size={20} color="#f8930d" />
              <span>Voluntários</span>
            </ButtonVoluntarios>
          </ButtonBoxBottom>
        </ButtonBox>
      </Content>
    </Container>
  );
}
