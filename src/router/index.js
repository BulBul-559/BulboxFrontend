import { createRouter, createWebHashHistory } from 'vue-router'
import youAskMe from '../views/youAskMe.vue'
import banner from '../components/BoxBanner.vue'
import mode from '../components/SwitchMode.vue'
// import test2 from '../views/test2.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/bulbox/',
      name: 'default',
      components: {
        youAskMe: youAskMe,
        banner: banner,
        mode: mode
      }
    },
    {
      path: '/bulbox/youAskMe',
      name: 'youAskMe',
      components: {
        youAskMe: youAskMe,
        banner: banner,
        mode: mode
      }
    },
    {
      path: '/bulbox/IAskYou',
      name: 'IAskYou',
      components: {
        IAskYou: () => import('../views/IAskYou.vue'),
        banner: banner,
        mode: mode
      }
    },
    {
      path: '/',
      name: 'youAskMe dev',
      component: youAskMe
    },
    {
      path: '/IAskYou',
      name: 'IAskYou dev',
      components: {
        IAskYou: () => import('../views/IAskYou.vue')
      }
    },
    {
      path: '/bulbox/IAskYou/:title',
      name: 'IAskYou-ques',
      components: {
        IAskYouQues: () => import('../views/QuesDetail.vue')
      }
    }
  ]
})

export default router
