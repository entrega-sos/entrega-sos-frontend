import React, { useState, useEffect } from 'react';

import api from '../../../services/api';

import Arrow from '../../../assets/Arrow.png';

import { Container, Content, Text, Selector, Options, Button } from './styles';

export default function Tipos() {
  const [tipos, setTipos] = useState(null);

  useEffect(() => {
    async function loadTipos() {
      const response = await api.get('/empresas?group=tipo_negocio');

      setTipos(response.data.tipo_negocio);
    }

    loadTipos();
  }, []);

  return (
    <Container>
      <Content>
        <Text>
          <span>TIPO DE COMÉRCIO</span>

          <p>Selecione o tipo de comércio que você está buscando:</p>
        </Text>

        <Selector>
          <Options>
            {tipos !== null ? (
              <>
                {tipos.map(tipo => (
                  <>
                    <Button to={`/consulta/${tipo}`}>
                      <img src={Arrow} alt="Seta" />
                      <span>{tipo}</span>
                    </Button>
                  </>
                ))}
              </>
            ) : (
              <div>Carregando</div>
            )}
          </Options>
        </Selector>
      </Content>
    </Container>
  );
}
