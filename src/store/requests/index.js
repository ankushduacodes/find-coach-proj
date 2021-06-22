import getters from '@/store/requests/getters';
import mutations from '@/store/requests/mutations';
import actions from '@/store/requests/actions';

export default {
  namespaced: true,
  state() {
    return {
      requestList: [],
    };
  },
  getters,
  mutations,
  actions,
};
