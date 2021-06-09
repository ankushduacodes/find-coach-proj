import store from '@/store';

export function isValidCoachId(params) {
  return !!store.getters.['coaches/getCoachById']({ id: params.id });
}

export function beforeCoachRouteEnter(to, from, next) {
  if (!isValidCoachId(to.params)) {
    return next({ name: 'NotFound', params: { catchAll: `${to.params.id}/not-found` } });
  }
  return next();
}
