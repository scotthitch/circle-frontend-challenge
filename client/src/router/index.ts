import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BookView from '../views/BookView.vue'
import CardTest from '../components/cardTest.vue'

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
    },
    {
      // Regex for id to access trailing digits
      path: '/a',
      name: 'b',
      component: CardTest
    }
  ]
})

export default router
