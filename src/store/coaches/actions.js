import { api } from '@/api';
import { useToast } from 'vue-toastification';

export default {
  addCoach({ commit }, payload) {
    commit('ADD_NEW_COACH', payload);
  },

  async fetchCoaches({ commit }) {
    let coaches;
    try {
      coaches = await api.get('/coaches');
    } catch (err) {
      const toast = useToast();
      toast.error('Something went wrong on the server');
      console.log(Object.entries(err));
    }
    const payload = { coachList: coaches.data.coachList };
    commit('SET_COACHES', payload);
  },
};
