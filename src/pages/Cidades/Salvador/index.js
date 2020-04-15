import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { MdHome, MdLocalPhone } from 'react-icons/md';
import { TiArrowBack } from 'react-icons/ti';
import { FaInstagram, FaFacebookSquare, FaWhatsapp } from 'react-icons/fa';
import { FiGlobe } from 'react-icons/fi';

import Arrow from '../../../assets/Arrow.png';
import Giross from '../../../assets/Giross - Marca - AF 1 (1).png';
import EntregaBranco from '../../../assets/logo-esos.svg';

import {
  Container,
  Content,
  Text,
  Options,
  Bairro,
  Stores,
  Places,
  StoreCard,
  Personal,
  PersonalContent,
  Address,
  AddressContent,
  Other,
  OtherContent,
  HeaderContainer,
  HeaderButton,
  HeaderButton2,
} from './styles';

import api from '../../../services/api';

export default function Salvador() {
  const [tipos, setTipos] = useState([]);
  const [stores, setStores] = useState([]);
  const [company, setCompany] = useState([]);
  const [formattedWhatsapp, setFormattedWhatsapp] = useState('');
  const [formattedPhone, setFormattedPhone] = useState('');
  const [pagamento, setPagamento] = useState(null);

  const [visible, setVisible] = useState(true);
  const [show, setShow] = useState(false);
  const [card, setCard] = useState(false);
  const [page] = useState(1);

  useEffect(() => {
    async function loadNegocios() {
      const response = await api.get(
        '/empresas?group=cidade&filter=tipo_negocio'
      );

      const negocios = response.data.Salvador;

      setTipos(negocios);
    }

    loadNegocios();
  }, []);

  async function handleStores(negocioName) {
    const response = await api.get('/empresas', {
      params: {
        page,
        per_page: 1000,
      },
    });

    const negocios = response.data.items;

    const filteredNegocios = negocios.filter(function filterData(negocio) {
      return (
        negocio.cidade === 'Salvador' && negocio.tipo_negocio === negocioName
      );
    });
    // Get random items from response
    const len = filteredNegocios.length;

    const shuffled = filteredNegocios.sort(function sortArr() {
      return 0.5 - Math.random();
    });

    const selected = shuffled.slice(0, len);

    setStores(selected);
    setVisible(!visible);
    setShow(!show);
  }

  function handleCard(store) {
    setCompany(store);
    setPagamento(store.meio_pagamento);

    setShow(!show);
    setCard(!card);

    const phone = store.telefone;
    const phoneWhatsapp = store.whatsapp;
    const formatPhone = phone ? phone.replace(/\D+/g, '') : '';

    const formatWhatsapp = phoneWhatsapp
      ? phoneWhatsapp.replace(/\D+/g, '')
      : '';

    setFormattedPhone(formatPhone);
    setFormattedWhatsapp(formatWhatsapp);
  }

  function handleBack() {
    setStores([]);
    setVisible(!visible);
    setShow(!show);
  }

  function handleBackCard() {
    setShow(!show);
    setCard(!card);
  }

  return (
    <>
      <HeaderContainer show={show}>
        <Link to="/">
          <MdHome size={25} color="#fff" />
        </Link>
        <Link to="/">
          <img src={EntregaBranco} alt="Entrega SoS" />
        </Link>
        <HeaderButton onClick={() => handleBack()} show={show}>
          <TiArrowBack size={25} color="#FFF" />
        </HeaderButton>
      </HeaderContainer>

      <HeaderContainer card={card}>
        <Link to="/">
          <MdHome size={25} color="#fff" />
        </Link>
        <Link to="/">
          <img src={EntregaBranco} alt="Entrega SoS" />
        </Link>
        <HeaderButton2 onClick={() => handleBackCard()} card={card}>
          <TiArrowBack size={25} color="#FFF" />
        </HeaderButton2>
      </HeaderContainer>

      <Container>
        <Content>
          <Text card={card}>
            <>
              {card ? (
                <>
                  <strong>{company.descricao}</strong>
                </>
              ) : (
                <>
                  <strong>SALVADOR</strong>

                  <p>
                    {visible
                      ? 'Selecione o tipo de estabelecimento.'
                      : 'Selecione o estabelecimento'}
                  </p>
                </>
              )}
            </>
          </Text>
          {/* Renderiza os negócios cadastrados  */}

          <Options visible={visible}>
            {tipos !== null ? (
              tipos.sort().map(tipo => (
                <>
                  <Bairro onClick={() => handleStores(tipo)}>
                    <img src={Arrow} alt="Seta" />
                    <span>{tipo}</span>
                  </Bairro>
                </>
              ))
            ) : (
              <div>Carregando</div>
            )}
          </Options>

          {/* Renderiza as empresas cadastradas de acordo com o tipo de negócios selecionado */}

          <Stores show={show}>
            {stores.map(store => (
              <>
                <Places onClick={() => handleCard(store)}>
                  <img src={Arrow} alt="Seta" />
                  <span>{store.descricao}</span>
                </Places>
              </>
            ))}
          </Stores>

          {/*
        Renderiza as lojas selecionadas
        */}

          <StoreCard card={card}>
            <Personal card={card}>
              <PersonalContent>
                <nav>
                  <img src={Arrow} alt="seta" />
                  <strong>Contatos</strong>
                </nav>

                <div>
                  <FaWhatsapp size={20} color="#000" />

                  <span>WhatsApp: </span>
                  <a
                    href={`https://wa.me/55${formattedWhatsapp}`}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {company.whatsapp}
                  </a>
                </div>
                <div>
                  <MdLocalPhone size={20} />
                  <span>Telefone: </span>{' '}
                  <a
                    href={`https://wa.me/55${formattedPhone}`}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {' '}
                    {company.telefone}
                  </a>
                </div>

                <div>
                  <span>Redes Sociais:</span>
                  {company.instagram ? (
                    <a
                      href={`https://www.instagram.com/${company.instagram}`}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <FaInstagram size={20} color="#000" />
                    </a>
                  ) : (
                    <a href="/" rel="noopener noreferrer" target="_blank">
                      <FaInstagram size={20} color="#999" />
                    </a>
                  )}

                  {company.facebook ? (
                    <a
                      href={`https://www.facebook.com//${company.facebook}`}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <FaFacebookSquare size={20} color="#000" />
                    </a>
                  ) : (
                    <a href="/" rel="noopener noreferrer" target="_blank">
                      <FaFacebookSquare size={20} color="#999" />
                    </a>
                  )}

                  {company.site ? (
                    <a
                      href={`https://${company.site}`}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <FiGlobe size={20} />
                    </a>
                  ) : (
                    <a href="/" rel="noopener noreferrer" target="_blank">
                      <FiGlobe size={20} color="#999" />
                    </a>
                  )}
                </div>
              </PersonalContent>

              <PersonalContent>
                <nav>
                  <img src={Arrow} alt="seta" />
                  <strong>Faça seu pedido</strong>
                </nav>
                <main>
                  <div>
                    <strong>
                      Use o <b>WhatsApp</b> ou <b>Telefone</b> acima para fazer
                      o seu pedido com a empresa.
                    </strong>
                  </div>
                  <div>
                    <strong>
                      A entrega pode ser feita pela própria empresa ou com o app{' '}
                      <span>
                        <img src={Giross} alt="Giross" />
                      </span>{' '}
                    </strong>
                  </div>
                  <button type="button">
                    <FaWhatsapp size={20} color="#fff" />

                    <a
                      href="https://wa.me/557799789680"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Solicitar entrega com o Giross
                    </a>
                  </button>
                </main>
              </PersonalContent>
            </Personal>

            <Other>
              <OtherContent>
                <nav>
                  <img src={Arrow} alt="seta" />
                  <strong>Informações</strong>
                </nav>

                <div>
                  <main>
                    <div>
                      <span>Faz delivery:</span>
                      <p>{company.delivery === true ? 'Sim' : 'Não'}</p>
                    </div>
                    <div>
                      <span>Horários:</span>
                      <p>{company.dias_horarios}</p>
                    </div>
                    <div>
                      <span>Pagamentos:</span>
                      <div className="pagamento-box">
                        {pagamento !== null ? (
                          <>
                            {pagamento.map(p => (
                              <p className="pagamento">{p}</p>
                            ))}
                          </>
                        ) : (
                          <span />
                        )}
                      </div>
                    </div>

                    <div>
                      <span>Observações:</span>
                      <p>{company.obs}</p>
                    </div>
                  </main>
                </div>
              </OtherContent>
            </Other>

            <Address>
              <AddressContent>
                <nav>
                  <img src={Arrow} alt="seta" />
                  <strong>Endereço</strong>
                </nav>
                <main>
                  <div>
                    <span>Endereço:</span>
                    <p>{company.endereco}</p>
                  </div>
                  <div>
                    <span>Bairro:</span>
                    <p>{company.bairro}</p>
                  </div>
                </main>

                <main>
                  <div>
                    <span>Cidade/UF:</span>
                    <p>
                      {company.cidade}/{company.uf}
                    </p>
                  </div>
                </main>
              </AddressContent>
            </Address>
          </StoreCard>
          <br />
          <br />
        </Content>
      </Container>
    </>
  );
}
