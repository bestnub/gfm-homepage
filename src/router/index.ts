import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/HomeView.vue')
  },
  {
    path: '/games',
    name: 'games',
    component: () => import(/* webpackChunkName: "games" */ '../views/GamesView.vue')
  },
  {
    path: '/social',
    name: 'social',
    component: () => import(/* webpackChunkName: "social" */ '../views/SocialView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
