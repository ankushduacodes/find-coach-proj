import getters from '@/store/coaches/getters';
import mutations from '@/store/coaches/mutations';
import actions from '@/store/coaches/actions';

export default {
  namespaced: true,
  state() {
    return {
      coachList: [],
      tempCoachObj: null,
    };
  },
  mutations,
  getters,
  actions,
};
