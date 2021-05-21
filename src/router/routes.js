import TheCoaches from '@/views/coaches/TheCoaches.vue';

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
  },
  {
    path: '/coaches/:id/contact',
    name: 'CoachContact',
    component: () => import('@/views/coaches/CoachContact.vue'),
    props: true,
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
  // {
  //   path: '/requests/:id',
  //   name: 'RequestPerID',
  //   component: () => import('@/views/requests/RequestModal.vue'),
  //   props: true,
  // },
];
