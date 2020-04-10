import producer from 'immer';

const INITIAL_STATE = {
  loading: false,
  company: null,
};

export default function company(state = INITIAL_STATE, action) {
  return producer(state, draft => {
    switch (action.type) {
      case '@company/CREATE_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@company/CREATE_SUCCESS': {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
