import { ADD_NEW_COACH, SET_COACHES } from '@/store/coaches/mutation-types';

export default {
  [ADD_NEW_COACH](state, payload) {
    const { coachList } = state;
    coachList.push(payload);
  },
  [SET_COACHES](state, payload) {
    state.coachList = payload.coachList;
  },
};
