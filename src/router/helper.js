// import store from '@/store';
//
// export async function isValidCoachId(params) {
//   if (!store.getters['coaches/getAllCoaches'].length) {
//     // TODO change this to fetching single coach instead of fetching all the coaches at once
//     await store.dispatch('coaches/fetchCoaches');
//   }
//   return !!store.getters.['coaches/getCoachById']({ id: params.id });
// }
//
// export async function beforeCoachRouteEnter(to, from, next) {
//   if (!await isValidCoachId(to.params)) {
//     return next({ name: 'NotFound', params: { catchAll: `${to.params.id}/not-found` } });
//   }
//   return next();
// }
