import { ADD_NEW_REQUEST, SET_REQUESTS } from './mutation-types';

export default {
  [ADD_NEW_REQUEST](state, payload) {
    const { requestList } = state;
    requestList.push(payload);
  },
  [SET_REQUESTS](state, payload) {
    state.requestList = payload.requestList;
  },
};
