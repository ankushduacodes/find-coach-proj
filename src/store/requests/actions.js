import { useToast } from 'vue-toastification';
import { api } from '@/api';

export default {
  addRequest({ commit }, payload) {
    commit('ADD_NEW_REQUEST', payload);
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
