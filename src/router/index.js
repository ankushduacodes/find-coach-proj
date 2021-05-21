import { createRouter, createWebHistory } from 'vue-router';
import routes from '@/router/routes';

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  // eslint-disable-next-line no-unused-vars
  scrollBehavior(to, from, position) {
    // Do something with this
  },
});

export default router;
