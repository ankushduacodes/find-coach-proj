import { useToast } from 'vue-toastification';
import { api } from '@/api';

export default {
  async addRequest({ commit }, payload) {
    let response;
    try {
      response = await api.post('/requests/add', payload);
    } catch (err) {
      console.log(err);
      throw new Error('Something went wrong on the server, The request was not submitted successfully');
    }
    commit('ADD_NEW_REQUEST', { request: response.data.request });
  },

  async getAllRequests({ commit }) {
    let requests;
    try {
      requests = await api.get('/requests');
    } catch (err) {
      console.log(err);
      useToast().error('Something went wrong on the server');
    }
    const payload = { requestList: requests.data.requestList };
    commit('SET_REQUESTS', payload);
  },
};
