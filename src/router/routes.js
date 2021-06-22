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
    component: () => import('@/views/coaches/CoachDetails.vue'),
    props: true,
    // beforeEnter: beforeCoachRouteEnter,
  },
  {
    path: '/coaches/:id/contact',
    name: 'CoachContact',
    component: () => import('@/views/coaches/CoachContact.vue'),
    props: true,
    // beforeEnter: beforeCoachRouteEnter,
  },
  {
    path: '/coaches/register',
    name: 'CoachRegister',
    component: () => import('@/views/coaches/CoachRegister.vue'),
  },
  {
    path: '/requests',
    name: 'Requests',
    component: () => import('@/views/requests/TheRequests.vue'),
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: () => import('@/views/errors/NotFound.vue'),
  },
];
