export default {
  getAllCoaches(state) {
    return state.coachList;
  },
  getCoachById: (state) => (payload) => {
    const { coachList } = state;
    return coachList.find((coach) => coach.id === Number(payload.id));
  },
};
