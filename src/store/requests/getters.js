export default {
  getAllRequests(state) {
    return state.requestList;
  },
  getRequestById: (state) => (payload) => {
    const { requestList } = state;
    console.log(payload);
    console.log(requestList.find((request) => request.id === Number(payload.id)));
    return requestList.find((request) => request.id === Number(payload.id));
  },
};
