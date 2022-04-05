import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/games',
    name: 'games',
    component: () => import(/* webpackChunkName: "about" */ '../views/GamesView.vue')
  },
  {
    path: '/social',
    name: 'social',
    component: () => import(/* webpackChunkName: "about" */ '../views/SocialView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
