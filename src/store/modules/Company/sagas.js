import { all, call, put, takeLatest } from 'redux-saga/effects';

import { toast } from 'react-toastify';

import api from '../../../services/api';

import { createCompanySuccess, createCompanyFailure } from './actions';

// import history from '../../../services/history';

export function* createCompany({ payload }) {
  const {
    descricao,
    usuario,
    email,
    telefone,
    whatsapp,
    senha,
    cep,
    endereco,
    bairro,
    cidade,
    uf,
    tipo_negocio,
    meio_pagamento,
    dias_horarios,
    delivery,
    instagram,
    facebook,
    site,
    obs,
    admin,
  } = payload.data;

  try {
    yield call(api.post, '/empresas', {
      descricao,
      usuario,
      email,
      telefone,
      whatsapp,
      senha,
      cep,
      endereco,
      bairro,
      cidade,
      uf,
      tipo_negocio,
      meio_pagamento,
      dias_horarios,
      delivery: Boolean(delivery),
      instagram,
      facebook,
      site,
      obs,
      admin: Boolean(admin),
    });

    yield put(createCompanySuccess());
    toast.success('Cadastro realizado!');
  } catch ({ response }) {
    yield put(createCompanyFailure());
    console.tron.log(response.data.error);
    toast.error(response.data.message);
  }
}

export default all([takeLatest('@company/CREATE_REQUEST', createCompany)]);
