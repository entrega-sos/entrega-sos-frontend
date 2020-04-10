export function createCompanyRequest(data) {
  return {
    type: '@company/CREATE_REQUEST',
    payload: { data },
  };
}

export function createCompanySuccess() {
  return {
    type: '@company/CREATE_SUCCESS',
  };
}

export function createCompanyFailure() {
  return {
    type: '@company/CREATE_FAILURE',
  };
}
