import React, { useState, useEffect } from 'react';

import { FaWhatsapp } from 'react-icons/fa';

import { Container, Content, Text, ButtonAdd, Options } from './styles';

import api from '../../services/api';

export default function ConsultaCadastro() {
  const [tipos, setTipos] = useState([]);

  useEffect(() => {
    async function loadTipos() {
      const response = await api.get('/tiposNegocios');

      setTipos(response.data.tipos_negocios);
    }
    loadTipos();
  }, []);

  return (
    <Container>
      <Content>
        <Text>
          <strong>COMO CADASTRAR</strong>
        </Text>
        <br />
        <Text>
          <span>1. Confira os tipos de negócios disponíveis para cadastro</span>
          <br />
          <br />
          <span>2. Faça o seu cadastro conosco através do WhatsApp</span>
        </Text>
        <br />
        <ButtonAdd>
          <FaWhatsapp size={20} color="#f8930d" />
          <a
            href="https://wa.me/5571999505660"
            rel="noopener noreferrer"
            target="_blank"
          >
            Cadastrar agora
          </a>
        </ButtonAdd>
        <br />
        <Text>
          <p>Tipos de negócios:</p>
        </Text>

        <Options>
          {tipos !== null ? (
            tipos.map(tipo => (
              <>
                <span>{tipo}</span>
              </>
            ))
          ) : (
            <div>Carregando</div>
          )}
        </Options>
        <br />
      </Content>
    </Container>
  );
}
