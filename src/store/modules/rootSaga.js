import { all } from 'redux-saga/effects';

import Company from './Company/sagas';

export default function* rootSaga() {
  return yield all([Company]);
}
