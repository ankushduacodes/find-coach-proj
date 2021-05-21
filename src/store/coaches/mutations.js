import { ADD_NEW_COACH } from '@/store/coaches/mutation-types';

export default {
  [ADD_NEW_COACH](state, payload) {
    const { coachList } = state;
    coachList.push(payload);
  },
};
