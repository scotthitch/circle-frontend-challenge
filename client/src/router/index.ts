import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BookView from '../views/BookView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      // Regex for id to access trailing digits
      path: '/:title-:id(\\d+)',
      name: 'bookview',
      component: BookView
    }
  ]
})

export default router
