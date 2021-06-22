import TheCoaches from '@/views/coaches/TheCoaches.vue';
// import { beforeCoachRouteEnter } from '@/router/helper';

export default [
  {
    path: '/',
    redirect: '/coaches',
  },
  {
    path: '/coaches',
    name: 'Coaches',
    component: TheCoaches,
  },
  {
    path: '/coaches/:id',
    name: 'CoachPerID',
    component: () => import(/* webpackChunkName: "CoachPerId" */ '@/views/coaches/CoachDetails.vue'),
    props: true,
    // beforeEnter: beforeCoachRouteEnter,
  },
  {
    path: '/coaches/:id/contact',
    name: 'CoachContact',
    component: () => import(/* webpackChunkName: "contact" */ '@/views/coaches/CoachContact.vue'),
    props: true,
    // beforeEnter: beforeCoachRouteEnter,
  },
  {
    path: '/coaches/register',
    name: 'CoachRegister',
    component: () => import(/* webpackChunkName: "register" */ '@/views/coaches/CoachRegister.vue'),
  },
  {
    path: '/requests',
    name: 'Requests',
    component: () => import(/* webpackChunkName: "request" */ '@/views/requests/TheRequests.vue'),
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "notfound" */ '@/views/errors/NotFound.vue'),
  },
];
