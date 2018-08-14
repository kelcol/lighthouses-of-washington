import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About'
import Lighthouse from '@/components/Lighthouse'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'lighthouse',
      component: Lighthouse
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
  ]
})
  