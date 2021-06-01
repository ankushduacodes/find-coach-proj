export default {
  getAllRequests(state) {
    return state.requestList;
  },
  // According to vue docs passing arguments to getters is a bad practice,
  // reason behind is caching, getters are meant to be cached and not impact the performance
  getRequestById: (state) => (payload) => {
    const { requestList } = state;
    return requestList.find((request) => request.id === Number(payload.id));
  },
};
