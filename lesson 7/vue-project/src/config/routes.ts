export default [
  {
    name: 'HomePage',
    path: '/',
    component: import('@/views/HomePage.vue')
  },
  {
    name: 'TaskPage',
    path: '/tasks',
    component: import('@/views/TaskPage.vue')
  },
  {
    name: 'AboutPage',
    path: '/about-us',
    component: import('@/views/AboutPage.vue')
  },
];