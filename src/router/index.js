import { createRouter, createWebHistory } from 'vue-router'
import youAskMe from '../views/youAskMe.vue'
// import test2 from '../views/test2.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'default',
      component: youAskMe
    },
    {
      path: '/other/test/',
      name: 'default test',
      component: youAskMe
    },
    {
      path: '/other/test/youAskMe',
      name: 'youAskMe test',
      component: youAskMe
    },
    {
      path: '/other/test/IAskYou',
      name: 'IAskYou test',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/IAskYou.vue')
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
    }
    
  ]
})

export default router
