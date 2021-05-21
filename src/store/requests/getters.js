export default {
  getAllRequests(state) {
    return state.requestList;
  },
  getRequestById: (state) => (payload) => {
    const { requestList } = state;
    return requestList.find((request) => request.id === Number(payload.id));
  },
};
