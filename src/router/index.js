import { createRouter, createWebHistory } from 'vue-router'
import youAskMe from '../views/youAskMe.vue'
// import test2 from '../views/test2.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/bulbox/',
      name: 'default',
      component: youAskMe
    },
    {
      path: '/bulbox/youAskMe',
      name: 'youAskMe',
      component: youAskMe
    },
    {
      path: '/bulbox/IAskYou',
      name: 'IAskYou',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/IAskYou.vue')
    },
    {
      path: '/',
      name: 'youAskMe dev',
      component: youAskMe
    },    
    {
      path: '/IAskYou',
      name: 'IAskYou dev',
      component: () => import('../views/IAskYou.vue')
    },
  ]
})

export default router
