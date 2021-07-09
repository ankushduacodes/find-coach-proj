import { api } from '@/api';

export default {
  addCoach({ commit }, payload) {
    commit('ADD_NEW_COACH', payload);
  },

  async fetchCoaches({ commit }) {
    let coaches;
    try {
      coaches = await api.get('/coaches');
    } catch (err) {
      throw new Error('Something went wrong on the server');
    }
    const payload = { coachList: coaches.data.coachList };
    commit('SET_COACHES', payload);
  },

  async fetchCoachById({ commit }, payload) {
    let response;
    try {
      response = await api.get(`/coaches/${payload.coachId}`);
    } catch (err) {
      throw new Error('Something went wrong!... Please try again');
    }
    commit('SET_TEMP_COACH', { coach: response.data.coach });
  },
};
