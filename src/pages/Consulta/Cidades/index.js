import React, { useState, useEffect } from 'react';

import api from '../../../services/api';

import Arrow from '../../../assets/Arrow.png';

import { Container, Content, Text, Selector, Options, Button } from './styles';

export default function Cidades() {
  const [citys, setCitys] = useState(null);
  const [num, setNum] = useState(0);

  useEffect(() => {
    async function loadCidades() {
      const response = await api.get('/empresas?group=cidade');

      const numResponse = await api.get('/empresas');

      setNum(numResponse.data._meta.total_items);

      setCitys(response.data.cidade);
    }

    loadCidades();
  }, []);

  return (
    <Container>
      <Content>
        <Text>
          <strong>CIDADES</strong>

          <p>Estabelecimentos cadastrados: {num}</p>
        </Text>

        <Selector>
          <Options>
            {citys !== null ? (
              <>
                {citys.map(city => (
                  <Button key={city.toString()} to={`/cidades/${city}`}>
                    <img src={Arrow} alt="Seta" />
                    <span>{city}</span>
                  </Button>
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
