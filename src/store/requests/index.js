import getters from '@/store/requests/getters';
import mutations from '@/store/requests/mutations';
import actions from '@/store/requests/actions';

export default {
  namespaced: true,
  state() {
    return {
      requestList: [
        {
          id: Math.floor(Math.random() * 10000000000) + 100000,
          name: 'Hallie',
          to: 'ankushduacodes@gmail.com',
          message: 'Hello, You are awesome!...',
        },
        {
          id: Math.floor(Math.random() * 10000000000) + 100000,
          name: 'Josh',
          to: 'sahilduacodes@gmail.com',
          message: 'Hi, You are great!...',
        },
      ],
    };
  },
  getters,
  mutations,
  actions,
};
