import { ADD_NEW_COACH, SET_COACHES, SET_TEMP_COACH } from '@/store/coaches/mutation-types';

export default {
  [ADD_NEW_COACH](state, payload) {
    const { coachList } = state;
    coachList.push(payload.coach);
  },
  [SET_COACHES](state, payload) {
    state.coachList = payload.coachList;
  },

  [SET_TEMP_COACH](state, payload) {
    state.tempCoachObj = payload.coach;
  },
};
