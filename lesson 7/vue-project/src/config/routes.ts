export default[
    {
      name: 'HomePage',
      path: '/',
      component: () => import('@/views/HomePage.vue')
    },
    {
      name: 'AboutPage',
      path: '/about-us',
      component: () => import('@/views/AboutPage.vue')
    },
    {
      name: 'TaskList',
      path: '/tasks',
      component: () => import('@/views/TaskList.vue')
    },
    {
      name: 'TaskPage',
      path: '/task/:id',
      props: true,
      component: () => import('@/views/TaskPage.vue')
    },
  ]