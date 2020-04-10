import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { toast } from 'react-toastify';

import { useForm } from 'react-hook-form';

import { MdCheck } from 'react-icons/md';

import api from '../../services/api';

import Arrow from '../../assets/Arrow.png';

import { createCompanyRequest } from '../../store/modules/Company/actions';

import {
  Container,
  Content,
  Text,
  Personal,
  PersonalContent,
  Address,
  AddressContent,
  Other,
  OtherContent,
  Payment,
  ConfirmButton,
  LoginContainer,
  LoginContent,
  Box,
  LoginButton,
} from './styles';

export default function Cadastro() {
  const { register, handleSubmit } = useForm();

  // login state
  const [login, setLogin] = useState('');
  const [page] = useState(1);

  const [visible, setVisible] = useState(true);
  const [show, setShow] = useState(false);
  const [profiles, setProfiles] = useState([]);

  // cadastro state

  const [cidades, setCidades] = useState(null);
  const [negocios, setNegocios] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadCidades() {
      const response = await api.get('/cidades');
      const responseTipos = await api.get('/tiposNegocios');
      setCidades(response.data.cidades);
      setNegocios(responseTipos.data.tipos_negocios);
    }
    loadCidades();
  }, []);

  if (cidades !== null) {
    const select = document.getElementById('cidade-sel');

    const option = cidades
      .map(cidade => `<option value="${cidade}">${cidade}</option>`)
      .join('\n');

    select.innerHTML = option;
  }

  if (negocios !== null) {
    const select = document.getElementById('negocio-select');

    const option = negocios
      .map(negocio => `<option value="${negocio}">${negocio}</option>`)
      .join('\n');

    select.innerHTML = option;
  }

  const onSubmit = data => {
    if (login && profiles) {
      const filteredProfiles = profiles.filter(function filterData(profile) {
        return profile.usuario === login && profile.admin === true;
      });

      if (filteredProfiles) {
        dispatch(createCompanyRequest(data));
      }
    } else {
      toast.error('Somente administradores podem realizar cadastros.');
    }
  };

  async function handleLogin() {
    const response = await api.get('/empresas', {
      params: {
        page,
        per_page: 1000,
      },
    });
    const users = response.data.items;

    console.log(users);

    const filteredAdmin = users.filter(function filterData(user) {
      return user.usuario === login && user.admin === true;
    });

    if (filteredAdmin.length > 0) {
      setProfiles(filteredAdmin);
      setVisible(!visible);
      setShow(!show);
    }
  }

  return (
    <>
      <LoginContainer visible={visible}>
        <LoginContent>
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
      </LoginContainer>

      <Container show={show}>
        <Content show={show}>
          <Text>
            <span>CADASTRO DE ESTABELECIMENTO</span>

            <p>
              Preencha o formulário abaixo e depois clique em concluir para
              cadastrar o seu estabelecimento.
            </p>
          </Text>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Personal>
              <PersonalContent>
                <nav>
                  <img src={Arrow} alt="seta" />
                  <strong>Usuário</strong>
                </nav>

                <div>
                  <span>Nome do estabelecimento</span>
                  <input
                    type="text"
                    name="descricao"
                    placeholder="O nome do seu estabelecimento"
                    ref={register}
                  />
                  <span>Usuário</span>
                  <input
                    type="text"
                    name="usuario"
                    placeholder="Seu usuário"
                    ref={register}
                  />
                  <span>Senha</span>
                  <input
                    type="password"
                    name="senha"
                    placeholder="Sua senha"
                    ref={register}
                  />
                </div>
              </PersonalContent>

              <PersonalContent>
                <nav>
                  <img src={Arrow} alt="seta" />
                  <strong>Contato</strong>
                </nav>

                <div>
                  <span>Email</span>
                  <input
                    type="email"
                    name="email"
                    placeholder="Seu email"
                    ref={register}
                  />

                  <span>Telefone</span>
                  <input
                    type="number"
                    name="telefone"
                    placeholder="Informe DDD + número sem espaço"
                    ref={register({ min: 11 })}
                  />

                  <span>WhatsApp</span>
                  <input
                    type="number"
                    name="whatsapp"
                    placeholder="Informe DDD + número sem espaço"
                    ref={register({ min: 11 })}
                  />
                </div>
              </PersonalContent>
            </Personal>

            <Address>
              <AddressContent>
                <nav>
                  <img src={Arrow} alt="seta" />
                  <strong>Endereço</strong>
                </nav>
                <main>
                  <div>
                    <span>Endereço</span>
                    <input
                      type="text"
                      name="endereco"
                      placeholder="Seu Endereço"
                      ref={register}
                    />
                  </div>
                  <div>
                    <span>Bairro</span>
                    <input
                      type="text"
                      name="bairro"
                      placeholder="Seu Bairro"
                      ref={register}
                    />
                  </div>
                  <div>
                    <span>Estado</span>
                    <select name="uf" multiple={false} ref={register}>
                      <option value="BA">Bahia</option>
                    </select>
                  </div>
                </main>

                <main>
                  <div>
                    <span>CEP</span>

                    <input
                      type="text"
                      name="cep"
                      placeholder="Seu CEP (somente números)"
                      ref={register}
                    />
                  </div>
                  <div>
                    <span>Cidade</span>
                    <select
                      id="cidade-sel"
                      name="cidade"
                      multiple={false}
                      ref={register}
                    >
                      <option>Selecione sua cidade</option>
                    </select>
                  </div>
                </main>
              </AddressContent>
            </Address>

            <Other>
              <OtherContent>
                <nav>
                  <img src={Arrow} alt="seta" />
                  <strong>Outras Informações</strong>
                </nav>

                <div>
                  <main>
                    <Payment>
                      <span>Meios de Pagamentos</span>
                      <div className="row">
                        <span>Crédito</span>
                        <input
                          className="input"
                          type="checkbox"
                          name="meio_pagamento"
                          value="Crédito"
                          ref={register}
                        />

                        <span>Débito</span>
                        <input
                          className="input"
                          type="checkbox"
                          name="meio_pagamento"
                          value="Débito"
                          ref={register}
                        />

                        <span>Dinheiro</span>
                        <input
                          className="input"
                          type="checkbox"
                          name="meio_pagamento"
                          value="Dinheiro"
                          ref={register}
                        />
                      </div>
                    </Payment>

                    <Payment>
                      <span>Tipo de negócio</span>
                      <select
                        id="negocio-select"
                        name="tipo_negocio"
                        multiple={false}
                        ref={register}
                      >
                        <option>Selecione seu negocio</option>
                      </select>
                    </Payment>

                    <Payment>
                      <span>Você oferece delivery?</span>
                      <div className="row">
                        <span className="radio">Sim</span>
                        <input
                          className="input"
                          type="radio"
                          name="delivery"
                          value="true"
                          ref={register}
                        />
                        <span className="radio">Não</span>
                        <input
                          className="input"
                          type="radio"
                          name="delivery"
                          value="false"
                          ref={register}
                        />
                      </div>
                    </Payment>
                  </main>

                  <main>
                    <span>Horário de funcionamento</span>

                    <input
                      type="text"
                      name="dias_horarios"
                      placeholder="ex: Seg a Sex 8h as 18h"
                      ref={register}
                    />

                    <span>Observações</span>

                    <input
                      type="text"
                      name="obs"
                      placeholder="Informe aqui qualquer oberservação"
                      ref={register}
                    />
                  </main>

                  <main>
                    <span>Site</span>
                    <input
                      type="text"
                      name="site"
                      placeholder="Caso possua, informe seu site"
                      ref={register}
                    />

                    <span>Instagram</span>
                    <input
                      type="text"
                      name="instagram"
                      placeholder="Caso possua, informe seu Instagram"
                      ref={register}
                    />

                    <span>Facebook</span>

                    <input
                      type="text"
                      name="facebook"
                      placeholder="Caso possua, informe seu Facebook"
                      ref={register}
                    />
                  </main>
                </div>
              </OtherContent>
            </Other>

            <aside>
              <ConfirmButton type="submit">
                <MdCheck size={20} color="#fff" />
                <span>Cadastrar</span>
              </ConfirmButton>
            </aside>
          </form>
        </Content>
      </Container>
    </>
  );
}
