import getters from '@/store/coaches/getters';
import mutations from '@/store/coaches/mutations';
import actions from '@/store/coaches/actions';

export default {
  namespaced: true,
  state() {
    return {
      coachList: [
        {
          id: Math.floor(Math.random() * 1000000000) + 1000,
          name: 'Ankush Dua',
          age: 23,
          expertise: [
            'Backend',
            'Database',
          ],
          contactInfo: {
            phone: '123-234-3456',
            email: 'ankushduacodes@gmail.com',
          },
        },
        {
          id: Math.floor(Math.random() * 1000000000) + 1000,
          name: 'Sahil Dua',
          age: 27,
          expertise: [
            'Backend',
            'Frontend',
            'Database',
          ],
          contactInfo: {
            phone: '987-876-7654',
            email: 'sahilduacodes@gmail.com',
          },
        },
        {
          id: Math.floor(Math.random() * 1000000000) + 1000,
          name: 'Josh Dane',
          age: 29,
          expertise: [
            'Frontend',
            'Database',
          ],
          contactInfo: {
            phone: '876-765-6543',
            email: 'joshdane123@gmail.com',
          },
        },
        {
          id: Math.floor(Math.random() * 1000000000) + 1000,
          name: 'John Doe',
          age: 31,
          expertise: [
            'Frontend',
            'Backend',
            'Database',
          ],
          contactInfo: {
            phone: '765-654-5432',
            email: 'johndoe324@gmail.com',
          },
        },
      ],
    };
  },
  mutations,
  getters,
  actions,
};
