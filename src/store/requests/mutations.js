import { ADD_NEW_REQUEST } from './mutation-types';

export default {
  [ADD_NEW_REQUEST](state, payload) {
    const { requestList } = state;
    requestList.push(payload);
  },
};
