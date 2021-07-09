import { api } from '@/api';

export default {
  async addCoach({ commit, dispatch, state }, payload) {
    let response;
    try {
      response = await api.post('/coaches/add', payload);
    } catch (err) {
      console.log(err);
      throw new Error('Something went wrong on the server, Please try again!...');
    }
    if (!state.coachList.length) {
      await dispatch('fetchCoaches');
    }
    commit('ADD_NEW_COACH', { coach: response.data.coach });
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
