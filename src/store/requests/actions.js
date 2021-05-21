export default {
  addRequest(context, payload) {
    context.commit('ADD_NEW_REQUEST', payload);
  },
};
