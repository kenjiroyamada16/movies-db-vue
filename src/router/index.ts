import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      alias: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
    },
  ]
})

export default router
