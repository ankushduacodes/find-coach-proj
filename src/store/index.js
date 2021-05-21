import { createStore } from 'vuex';
import modules from '@/store/modules';
import mutations from '@/store/mutations';
import actions from '@/store/actions';
import getters from '@/store/getters';

export default createStore({
  strict: process.env.NODE_ENV !== 'production',
  devtools: process.env.NODE_ENV !== 'production',
  state() {
    return {};
  },
  mutations,
  getters,
  actions,
  modules,
});
