import { api } from '@/api';

export default {
  async addRequest({ commit }, payload) {
    let response;
    try {
      response = await api.post('/requests/add', payload);
    } catch (err) {
      throw new Error(err.response.data.message);
    }
    commit('ADD_NEW_REQUEST', { request: response.data.request });
  },

  async getAllRequests({ commit }) {
    let requests;
    try {
      requests = await api.get('/requests');
    } catch (err) {
      console.log(err);
      throw new Error('Something went wrong on the server. Please try refreshing the page');
    }
    const payload = { requestList: requests.data.requestList };
    commit('SET_REQUESTS', payload);
  },
};
