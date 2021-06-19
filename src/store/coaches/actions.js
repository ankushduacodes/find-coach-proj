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
      console.log(err);
    }
    const payload = { coaches: coaches.data.coachList };
    console.log('coaches', coaches);
    commit('SET_COACHES', payload);
  },
};
